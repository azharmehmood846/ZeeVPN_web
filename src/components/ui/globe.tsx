"use client";

import { useEffect, useRef } from "react";
import createGlobe, { type COBEOptions } from "cobe";

import { cn } from "@/lib/utils";

interface CityMarker {
  code: string;
  name: string;
  lat: number;
  lng: number;
}

const CITIES: CityMarker[] = [
  { code: "US", name: "New York", lat: 40.7128, lng: -74.006 },
  { code: "US", name: "San Francisco", lat: 37.7749, lng: -122.4194 },
  { code: "BR", name: "São Paulo", lat: -23.5505, lng: -46.6333 },
  { code: "GB", name: "London", lat: 51.5074, lng: -0.1278 },
  { code: "DE", name: "Frankfurt", lat: 50.1109, lng: 8.6821 },
  { code: "FR", name: "Paris", lat: 48.8566, lng: 2.3522 },
  { code: "AE", name: "Dubai", lat: 25.276987, lng: 55.296249 },
  { code: "IN", name: "Mumbai", lat: 19.076, lng: 72.8777 },
  { code: "SG", name: "Singapore", lat: 1.3521, lng: 103.8198 },
  { code: "JP", name: "Tokyo", lat: 35.6762, lng: 139.6503 },
  { code: "AU", name: "Sydney", lat: -33.8688, lng: 151.2093 },
];

function flagEmoji(code: string): string {
  if (!code || code.length !== 2) return "";
  const base = 0x1f1e6;
  const upper = code.toUpperCase();
  return String.fromCodePoint(
    base + (upper.charCodeAt(0) - 65),
    base + (upper.charCodeAt(1) - 65)
  );
}

const THETA = 0.28;
const RADIUS_FACTOR = 0.92;

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  theta: THETA,
  dark: 1,
  diffuse: 1.8,
  mapSamples: 16000,
  mapBrightness: 7,
  mapBaseBrightness: 0.06,
  baseColor: [0.22, 0.27, 0.45],
  markerColor: [0.3, 0.55, 1.0],
  glowColor: [0.28, 0.5, 1.0],
  markers: [],
};

function project(lat: number, lng: number, phi: number, theta: number) {
  const latRad = (lat * Math.PI) / 180;
  const lngRad = (lng * Math.PI) / 180;
  const adjustedLng = lngRad + phi;

  const x0 = Math.cos(latRad) * Math.sin(adjustedLng);
  const y0 = Math.sin(latRad);
  const z0 = Math.cos(latRad) * Math.cos(adjustedLng);

  const cosT = Math.cos(theta);
  const sinT = Math.sin(theta);

  const x = x0;
  const y = y0 * cosT - z0 * sinT;
  const z = y0 * sinT + z0 * cosT;

  return { x, y, z };
}

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const markerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const phi = useRef(0);
  const r = useRef(0);
  const pointerStart = useRef<number | null>(null);
  const pointerOffset = useRef(0);

  useEffect(() => {
    if (!canvasRef.current) return;
    const initialWidth = canvasRef.current.offsetWidth;

    const globe = createGlobe(canvasRef.current, {
      ...GLOBE_CONFIG,
      width: initialWidth * 2,
      height: initialWidth * 2,
    });

    let frame = 0;

    const tick = () => {
      if (pointerStart.current === null) phi.current += 0.003;
      const currentPhi = phi.current + r.current;

      if (canvasRef.current) {
        const w = canvasRef.current.offsetWidth;
        globe.update({
          phi: currentPhi,
          width: w * 2,
          height: w * 2,
        });

        const radius = (w / 2) * RADIUS_FACTOR;
        const cx = w / 2;
        const cy = w / 2;

        CITIES.forEach((city, i) => {
          const el = markerRefs.current[i];
          if (!el) return;
          const p = project(city.lat, city.lng, currentPhi, THETA);
          const visible = p.z > 0.02;
          const screenX = cx + p.x * radius;
          const screenY = cy - p.y * radius;
          // Fade and shrink as marker approaches the edge of the visible hemisphere
          const depth = Math.max(0, p.z);
          const scale = 0.65 + depth * 0.6;
          const opacity = visible ? Math.min(1, depth * 2.5) : 0;

          el.style.left = `${screenX}px`;
          el.style.top = `${screenY}px`;
          el.style.opacity = `${opacity}`;
          el.style.transform = `translate(-50%, -50%) scale(${scale})`;
          el.style.zIndex = visible ? `${Math.round(depth * 100)}` : "0";
          el.style.pointerEvents = visible ? "auto" : "none";
        });
      }

      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    const fadeIn = window.setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = "1";
    }, 0);

    return () => {
      window.clearTimeout(fadeIn);
      cancelAnimationFrame(frame);
      globe.destroy();
    };
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    pointerStart.current = e.clientX - pointerOffset.current;
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
  };
  const onPointerUp = () => {
    pointerStart.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
  };
  const onMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (pointerStart.current !== null) {
      const delta = e.clientX - pointerStart.current;
      pointerOffset.current = delta;
      r.current = delta / 220;
    }
  };
  const onTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (pointerStart.current !== null && e.touches[0]) {
      const delta = e.touches[0].clientX - pointerStart.current;
      pointerOffset.current = delta;
      r.current = delta / 110;
    }
  };

  return (
    <div className={cn("relative mx-auto aspect-square w-full max-w-[560px]", className)}>
      {/* Outer atmospheric halo for 3D depth */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_50%_45%_in_oklch,rgba(59,130,246,0.28),rgba(59,130,246,0.14)_25%,rgba(59,130,246,0.05)_45%,transparent_70%)] blur-2xl"
      />
      {/* Inner soft glow tucked behind the canvas */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-[8%] -z-10 rounded-full bg-[radial-gradient(circle_at_30%_28%_in_oklch,rgba(120,180,255,0.18),rgba(120,180,255,0.06)_35%,transparent_60%)] blur-md"
      />

      <canvas
        ref={canvasRef}
        className="relative h-full w-full opacity-0 transition-opacity duration-1000 [contain:layout_paint_size]"
        style={{ cursor: "grab" }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
      />

      {/* DOM markers overlay — hover-enabled, 3D-looking, depth-aware */}
      <div className="pointer-events-none absolute inset-0">
        {CITIES.map((city, i) => (
          <div
            key={`${city.code}-${city.name}-${i}`}
            ref={(el) => {
              markerRefs.current[i] = el;
            }}
            className="group absolute h-3 w-3 transition-opacity duration-200 will-change-transform"
            style={{ left: 0, top: 0, opacity: 0 }}
          >
            {/* Soft flat halo (atmospheric, not sphere shading) */}
            <span
              aria-hidden
              className="absolute inset-[-7px] rounded-full bg-primary/25 blur-[5px]"
            />
            {/* Outer ping ring */}
            <span
              aria-hidden
              className="absolute inset-[-2px] rounded-full border border-primary/60 motion-safe:animate-ping"
              style={{ animationDuration: "2.4s" }}
            />
            {/* Flat 2D dot with crisp outline and inner core */}
            <span
              aria-hidden
              className="relative flex h-full w-full items-center justify-center rounded-full bg-primary ring-1 ring-white/40 ring-offset-0"
              style={{
                boxShadow: "0 0 10px rgba(59,130,246,0.75)",
              }}
            >
              <span className="block h-[3px] w-[3px] rounded-full bg-white" />
            </span>
            {/* Hover tooltip */}
            <div
              className="pointer-events-none absolute left-1/2 top-full z-50 mt-3 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/[0.08] bg-[rgba(10,14,24,0.96)] px-3 py-1.5 text-[11.5px] font-medium opacity-0 shadow-[0_12px_30px_rgba(0,0,0,0.55)] backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100"
            >
              <span aria-hidden className="text-[14px] leading-none">
                {flagEmoji(city.code)}
              </span>
              <span className="text-foreground">{city.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
