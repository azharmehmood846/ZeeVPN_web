"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { RotateCw } from "lucide-react";

import { cn } from "@/lib/utils";

const DEFAULT_MAX = 100;
const CX = 110;
const CY = 110;
const R = 80;
const ARC_START_DEG = 150;
const ARC_SWEEP_DEG = 240;

function polar(deg: number, radius: number = R) {
  const rad = (deg * Math.PI) / 180;
  return { x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad) };
}

function describeArc(startDeg: number, endDeg: number) {
  const start = polar(startDeg);
  const end = polar(endDeg);
  const sweep = endDeg - startDeg;
  const largeArc = sweep > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${R} ${R} 0 ${largeArc} 1 ${end.x} ${end.y}`;
}

interface IpInfoResult {
  ip?: string;
  city?: string;
  country?: string;
}

async function fetchIpInfo(): Promise<IpInfoResult | null> {
  try {
    const res = await fetch("https://iplogs.com/v1/check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_agent: navigator.userAgent,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        language: navigator.language,
      }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data?.ip_info as IpInfoResult;
  } catch {
    return null;
  }
}

interface SpeedGaugeProps {
  className?: string;
}

export function SpeedGauge({ className }: SpeedGaugeProps) {
  const targetRef = useRef(0);
  const animatedRef = useRef(0);
  const engineRef = useRef<{ pause: () => void } | null>(null);
  const [animated, setAnimated] = useState(0);
  const [maxSpeed, setMaxSpeed] = useState(DEFAULT_MAX);
  const [latency, setLatency] = useState<number | null>(null);
  const [jitter, setJitter] = useState<number | null>(null);
  const [loadedLatency, setLoadedLatency] = useState<number | null>(null);
  const [downloadResult, setDownloadResult] = useState<number | null>(null);
  const [location, setLocation] = useState("Detecting…");
  const [ip, setIp] = useState("—");
  const [testing, setTesting] = useState(true);

  // Continuous lerp toward target
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const t = targetRef.current;
      const prev = animatedRef.current;
      const delta = t - prev;
      const next = Math.abs(delta) < 0.01 ? t : prev + delta * 0.06;
      animatedRef.current = next;
      setAnimated(next);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // IP / location
  useEffect(() => {
    let cancelled = false;
    fetchIpInfo().then((info) => {
      if (cancelled || !info) return;
      const loc = [info.city, info.country].filter(Boolean).join(", ");
      if (loc) setLocation(loc);
      if (info.ip) setIp(info.ip);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const startTest = useCallback(async () => {
    if (engineRef.current) {
      try {
        engineRef.current.pause();
      } catch {
        // ignore
      }
      engineRef.current = null;
    }

    targetRef.current = 0;
    animatedRef.current = 0;
    setAnimated(0);
    setLatency(null);
    setJitter(null);
    setLoadedLatency(null);
    setDownloadResult(null);
    setTesting(true);

    const mod = await import("@cloudflare/speedtest");
    const SpeedTestEngine = mod.default;

    const engine = new SpeedTestEngine({
      autoStart: false,
      measurements: [
        { type: "latency", numPackets: 1 },
        { type: "download", bytes: 1e5, count: 1, bypassMinDuration: true },
        { type: "download", bytes: 1e6, count: 1 },
        { type: "download", bytes: 1e7, count: 2 },
        { type: "download", bytes: 2.5e7, count: 1 },
      ],
    });
    engineRef.current = engine;

    engine.onResultsChange = () => {
      const bps = engine.results.getDownloadBandwidth();
      if (typeof bps === "number" && bps > 0) {
        const mbps = bps / 1e6;
        targetRef.current = mbps;
        setMaxSpeed((prev) => {
          const headroom = mbps * 1.35;
          return headroom <= prev ? prev : Math.ceil(headroom / 50) * 50;
        });
      }
      const lat = engine.results.getUnloadedLatency();
      if (typeof lat === "number" && Number.isFinite(lat)) setLatency(lat);
      const jit = engine.results.getUnloadedJitter();
      if (typeof jit === "number" && Number.isFinite(jit)) setJitter(jit);
      const loaded = engine.results.getDownLoadedLatency();
      if (typeof loaded === "number" && Number.isFinite(loaded))
        setLoadedLatency(loaded);
    };

    engine.onFinish = () => {
      const finalBps = engine.results.getDownloadBandwidth();
      if (typeof finalBps === "number" && finalBps > 0) {
        setDownloadResult(finalBps / 1e6);
      }
      setTesting(false);
    };

    engine.onError = () => {
      setTesting(false);
    };

    engine.play();
  }, []);

  // Auto-run once on mount
  useEffect(() => {
    startTest();
    return () => {
      if (engineRef.current) {
        try {
          engineRef.current.pause();
        } catch {
          // ignore
        }
      }
    };
  }, [startTest]);

  const pct = Math.min(1, Math.max(0, animated / maxSpeed));
  const progressDeg = pct * ARC_SWEEP_DEG;
  const needleDeg = ARC_START_DEG + progressDeg;

  const bgPath = describeArc(ARC_START_DEG, ARC_START_DEG + ARC_SWEEP_DEG);
  const progressPath = describeArc(
    ARC_START_DEG,
    ARC_START_DEG + Math.max(progressDeg, 0.01)
  );

  const ticks = Array.from({ length: 5 }, (_, i) => {
    const deg = ARC_START_DEG + (i / 4) * ARC_SWEEP_DEG;
    const inner = polar(deg, R - 18);
    const outer = polar(deg, R - 8);
    return { ...inner, x2: outer.x, y2: outer.y };
  });

  const classification =
    downloadResult == null
      ? null
      : downloadResult >= 100
        ? "Excellent connection"
        : downloadResult >= 50
          ? "Great connection"
          : downloadResult >= 20
            ? "Good connection"
            : "Modest connection";

  return (
    <div className={cn("relative mx-auto w-full max-w-[420px]", className)}>
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-x-8 -inset-y-10 -z-10 rounded-[3rem] bg-[radial-gradient(ellipse_at_50%_40%,rgba(59,130,246,0.22),transparent_70%)] blur-2xl"
      />

      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.07] bg-[linear-gradient(180deg,rgba(14,19,30,0.96),rgba(8,11,20,0.96))] p-6 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.55)] backdrop-blur-xl">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:18px_18px] opacity-60"
        />
        <span aria-hidden className="pointer-events-none absolute left-3 top-3 h-2 w-2 border-l border-t border-white/15" />
        <span aria-hidden className="pointer-events-none absolute right-3 top-3 h-2 w-2 border-r border-t border-white/15" />
        <span aria-hidden className="pointer-events-none absolute bottom-3 left-3 h-2 w-2 border-b border-l border-white/15" />
        <span aria-hidden className="pointer-events-none absolute bottom-3 right-3 h-2 w-2 border-b border-r border-white/15" />

        {/* Top label */}
        <div className="relative flex items-center justify-between">
          <span className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Download
          </span>
          <div className="inline-flex items-center gap-1.5">
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                testing
                  ? "animate-pulse bg-primary"
                  : "bg-accent shadow-[0_0_8px_rgba(56,179,108,0.65)]"
              )}
              aria-hidden
            />
            <span className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              {testing
                ? "Testing"
                : latency != null
                  ? `Live · ${Math.round(latency)} ms`
                  : "Complete"}
            </span>
          </div>
        </div>

        {/* Cross-fading container — both views share the same grid cell */}
        <div className="relative mt-4 grid grid-cols-1 grid-rows-1">
          {/* Gauge view */}
          <div
            aria-hidden={!testing}
            className={cn(
              "col-start-1 row-start-1 flex h-full flex-col justify-center transition-[opacity,transform,filter] duration-500 ease-out",
              testing
                ? "opacity-100"
                : "pointer-events-none scale-[0.96] opacity-0 blur-[2px]"
            )}
          >
            <div className="relative">
              <svg viewBox="0 0 220 170" className="w-full" aria-hidden>
                <defs>
                  <linearGradient id="gauge-gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="hsl(217 91% 62%)" />
                    <stop offset="60%" stopColor="hsl(217 91% 75%)" />
                    <stop offset="100%" stopColor="hsl(220 100% 88%)" />
                  </linearGradient>
                  <filter id="gauge-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="1.2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Background track — solid, visible enough to read as a track */}
                <path
                  d={bgPath}
                  fill="none"
                  stroke="rgba(255,255,255,0.09)"
                  strokeWidth={18}
                  strokeLinecap="round"
                />

                {/* Tick marks rendered ON TOP of the track */}
                {ticks.map((t, i) => (
                  <line
                    key={i}
                    x1={t.x}
                    y1={t.y}
                    x2={t.x2}
                    y2={t.y2}
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                  />
                ))}

                {/* Progress — only render when there's enough to avoid a tiny blob at start */}
                {progressDeg > 1.5 ? (
                  <path
                    d={progressPath}
                    fill="none"
                    stroke="url(#gauge-gradient)"
                    strokeWidth={18}
                    strokeLinecap="round"
                    filter="url(#gauge-glow)"
                  />
                ) : null}

                <g transform={`rotate(${needleDeg} ${CX} ${CY})`}>
                  <line
                    x1={CX}
                    y1={CY}
                    x2={CX + R - 14}
                    y2={CY}
                    stroke="white"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                  />
                  <circle cx={CX} cy={CY} r={8} fill="white" />
                  <circle cx={CX} cy={CY} r={3.5} fill="hsl(217 91% 60%)" />
                </g>

                <text
                  x="110"
                  y="148"
                  textAnchor="middle"
                  className="fill-foreground"
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    letterSpacing: "-0.035em",
                    fontVariantNumeric: "tabular-nums",
                    fontFamily: "inherit",
                  }}
                >
                  {animated.toFixed(2)}
                </text>
                <text
                  x="110"
                  y="162"
                  textAnchor="middle"
                  fill="rgba(148,163,184,0.8)"
                  style={{
                    fontSize: 7,
                    fontWeight: 500,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    fontFamily: "inherit",
                  }}
                >
                  Mb / s
                </text>
              </svg>
            </div>

            {/* Live stats — Ping / Jitter / Loaded — during test */}
            <div className="relative mt-3 grid grid-cols-3 gap-3 border-t border-white/[0.05] pt-4">
              {[
                { label: "Ping", value: latency },
                { label: "Jitter", value: jitter },
                { label: "Loaded", value: loadedLatency },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-[9px] font-medium uppercase tracking-[0.22em] text-muted-foreground/70">
                    {stat.label}
                  </div>
                  <div className="mt-1 flex items-baseline justify-center gap-1">
                    <span className="text-[15px] font-semibold tracking-[-0.02em] tabular-nums text-foreground/95">
                      {stat.value != null ? Math.round(stat.value) : "—"}
                    </span>
                    <span className="text-[9.5px] font-medium text-muted-foreground">
                      ms
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results view */}
          <div
            aria-hidden={testing}
            className={cn(
              "col-start-1 row-start-1 flex h-full flex-col justify-center transition-[opacity,transform,filter] duration-500 ease-out",
              !testing
                ? "opacity-100 delay-100"
                : "pointer-events-none scale-[0.96] opacity-0 blur-[2px]"
            )}
          >
            <div className="relative">
              <div className="text-center">
                <div className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-muted-foreground/85">
                  Download speed
                </div>
                <div className="mt-3 flex items-baseline justify-center gap-2">
                  <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-[3.25rem] font-bold leading-none tracking-[-0.045em] text-transparent tabular-nums">
                    {(downloadResult ?? 0).toFixed(2)}
                  </span>
                  <span className="text-[14px] font-medium tracking-[-0.005em] text-muted-foreground">
                    Mb/s
                  </span>
                </div>
                {classification ? (
                  <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/[0.06] px-3 py-1 text-[11px] font-medium text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_6px_rgba(56,179,108,0.6)]" aria-hidden />
                    {classification}
                  </div>
                ) : null}
              </div>

              {/* Metrics row */}
              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/[0.05] pt-4">
                {[
                  { label: "Ping", value: latency },
                  { label: "Jitter", value: jitter },
                  { label: "Loaded", value: loadedLatency },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-[9px] font-medium uppercase tracking-[0.22em] text-muted-foreground/70">
                      {stat.label}
                    </div>
                    <div className="mt-1 flex items-baseline justify-center gap-1">
                      <span className="text-[15px] font-semibold tracking-[-0.02em] tabular-nums text-foreground/95">
                        {stat.value != null ? Math.round(stat.value) : "—"}
                      </span>
                      <span className="text-[9.5px] font-medium text-muted-foreground">
                        ms
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Check Again button — replaces the stats row */}
            <div className="relative mt-5">
              <button
                type="button"
                onClick={startTest}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/45 bg-primary/[0.12] px-5 py-3 text-[13px] font-semibold tracking-[-0.005em] text-primary transition-[background-color,border-color,box-shadow] duration-300 hover:border-primary/70 hover:bg-primary/[0.2] hover:shadow-[0_0_0_4px_rgba(37,99,235,0.18)] active:scale-[0.98]"
              >
                <RotateCw
                  className="h-[14px] w-[14px] transition-transform duration-500 group-hover:rotate-180"
                  strokeWidth={2.4}
                />
                Check Again
              </button>
            </div>
          </div>
        </div>

        {/* Footer row */}
        <div className="relative mt-4 flex items-center justify-between border-t border-white/[0.05] pt-4">
          <div className="flex items-center gap-2 text-[12.5px]">
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                testing
                  ? "bg-amber-400"
                  : "bg-accent shadow-[0_0_6px_rgba(56,179,108,0.55)]"
              )}
              aria-hidden
            />
            <span className="text-foreground/90">{location}</span>
          </div>
          <span className="font-mono text-[11px] tracking-[0.02em] text-muted-foreground tabular-nums">
            {ip}
          </span>
        </div>
      </div>
    </div>
  );
}
