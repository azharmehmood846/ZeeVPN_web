"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface CountryEntry {
  code: string;
  name: string;
  load: number;
}

const SERVERS: CountryEntry[] = [
  { code: "US", name: "United States", load: 12 },
  { code: "GB", name: "United Kingdom", load: 18 },
  { code: "DE", name: "Germany", load: 9 },
  { code: "FR", name: "France", load: 21 },
  { code: "NL", name: "Netherlands", load: 14 },
  { code: "SE", name: "Sweden", load: 8 },
  { code: "CH", name: "Switzerland", load: 11 },
  { code: "IT", name: "Italy", load: 26 },
  { code: "ES", name: "Spain", load: 19 },
  { code: "CA", name: "Canada", load: 7 },
  { code: "BR", name: "Brazil", load: 33 },
  { code: "MX", name: "Mexico", load: 24 },
  { code: "AR", name: "Argentina", load: 17 },
  { code: "JP", name: "Japan", load: 22 },
  { code: "KR", name: "South Korea", load: 28 },
  { code: "SG", name: "Singapore", load: 31 },
  { code: "HK", name: "Hong Kong", load: 36 },
  { code: "IN", name: "India", load: 41 },
  { code: "AE", name: "UAE", load: 15 },
  { code: "TR", name: "Türkiye", load: 23 },
  { code: "AU", name: "Australia", load: 13 },
  { code: "NZ", name: "New Zealand", load: 10 },
  { code: "ZA", name: "South Africa", load: 16 },
  { code: "EG", name: "Egypt", load: 20 },
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

function loadTone(load: number): { dot: string; text: string } {
  if (load < 18) return { dot: "bg-accent shadow-[0_0_8px_rgba(56,179,108,0.55)]", text: "text-accent" };
  if (load < 32) return { dot: "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.45)]", text: "text-amber-300" };
  return { dot: "bg-rose-400 shadow-[0_0_8px_rgba(244,114,128,0.45)]", text: "text-rose-300" };
}

interface CountryTickerProps {
  className?: string;
}

export function CountryTicker({ className }: CountryTickerProps) {
  const [servers, setServers] = useState<CountryEntry[]>(SERVERS);

  // Subtle live-jitter so loads feel current
  useEffect(() => {
    const id = window.setInterval(() => {
      setServers((prev) =>
        prev.map((s) => {
          const drift = (Math.random() - 0.5) * 3;
          const next = Math.round(Math.max(3, Math.min(85, s.load + drift)));
          return { ...s, load: next };
        })
      );
    }, 4000);
    return () => window.clearInterval(id);
  }, []);

  const doubled = [...servers, ...servers];

  return (
    <div className={cn("relative w-full mask-fade-x", className)}>
      <div className="flex w-max animate-ticker gap-3 py-2">
        {doubled.map((server, i) => {
          const tone = loadTone(server.load);
          return (
            <div
              key={`${server.code}-${i}`}
              className="inline-flex shrink-0 items-center gap-3 rounded-full border border-white/[0.06] bg-white/[0.018] px-4 py-2.5 backdrop-blur-sm"
            >
              <span aria-hidden className="text-[15px] leading-none">
                {flagEmoji(server.code)}
              </span>
              <span className="text-[13.5px] font-medium tracking-[-0.005em] text-foreground">
                {server.name}
              </span>
              <span className="h-3 w-px bg-white/10" aria-hidden />
              <span className="inline-flex items-center gap-1.5">
                <span
                  className={cn("h-1.5 w-1.5 rounded-full", tone.dot)}
                  aria-hidden
                />
                <span className={cn("text-[12px] font-medium tabular-nums", tone.text)}>
                  {server.load}% load
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
