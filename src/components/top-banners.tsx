"use client";

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

type Verdict = 'clean' | 'suspicious' | 'vpn_likely' | 'vpn_detected';

interface IpInfo {
  ip: string;
  asn?: string;
  org?: string;
  isp?: string;
  country?: string;
  country_code?: string;
  city?: string;
  type?: string;
  is_vpn?: boolean;
  is_proxy?: boolean;
  vpn_provider?: string;
}

interface ApiResponse {
  verdict: Verdict;
  is_vpn: boolean;
  confidence: number;
  ip_info: IpInfo;
}

function countryFlag(code?: string): string {
  if (!code || code.length !== 2) return '';
  const base = 0x1f1e6;
  const upper = code.toUpperCase();
  return String.fromCodePoint(
    base + (upper.charCodeAt(0) - 65),
    base + (upper.charCodeAt(1) - 65)
  );
}

export function TopBanners() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchInfo = async () => {
      try {
        const response = await fetch('https://iplogs.com/v1/check', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user_agent: navigator.userAgent,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            language: navigator.language,
          }),
          signal: controller.signal,
        });
        if (!response.ok) throw new Error('Failed to fetch IP info');
        const json: ApiResponse = await response.json();
        setData(json);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          setError(true);
        }
      }
    };

    fetchInfo();
    return () => controller.abort();
  }, []);

  const isProtected = data?.is_vpn ?? false;
  const ip = data?.ip_info.ip;
  const isp = data?.ip_info.isp ?? data?.ip_info.org;
  const city = data?.ip_info.city;
  const country = data?.ip_info.country;
  const countryCode = data?.ip_info.country_code;
  const location = [city, country].filter(Boolean).join(', ');

  return (
    <div className="border-b border-white/[0.05] bg-[rgba(8,12,22,0.92)] backdrop-blur-sm">
      <div className="container flex min-h-11 items-center justify-center px-4 py-2.5 text-center text-[12.5px]">
        {error ? (
          <p className="text-muted-foreground/70">Connection details unavailable</p>
        ) : data ? (
          <p className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-muted-foreground tabular-nums">
            {ip ? (
              <>
                <span className="inline-flex items-center gap-1.5">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/65">IP</span>
                  <span className="text-foreground/95">{ip}</span>
                </span>
                <span className="h-3 w-px bg-white/10" aria-hidden />
              </>
            ) : null}

            {location ? (
              <>
                <span className="inline-flex items-center gap-1.5">
                  {countryCode ? (
                    <span aria-hidden className="text-[13px] leading-none">{countryFlag(countryCode)}</span>
                  ) : null}
                  <span className="text-foreground/95">{location}</span>
                </span>
                <span className="h-3 w-px bg-white/10" aria-hidden />
              </>
            ) : null}

            {isp ? (
              <>
                <span className="inline-flex items-center gap-1.5">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/65">ISP</span>
                  <span className="text-foreground/95">{isp}</span>
                </span>
                <span className="h-3 w-px bg-white/10" aria-hidden />
              </>
            ) : null}

            <span
              className={cn(
                'inline-flex items-center gap-1.5 font-medium',
                isProtected ? 'text-accent' : 'text-rose-300/85'
              )}
            >
              <span
                className={cn(
                  'h-1.5 w-1.5 rounded-full',
                  isProtected
                    ? 'bg-accent shadow-[0_0_8px_rgba(56,179,108,0.7)]'
                    : 'bg-rose-400 shadow-[0_0_8px_rgba(244,114,128,0.6)]'
                )}
                aria-hidden
              />
              {isProtected ? 'Protected' : 'Unprotected'}
            </span>
          </p>
        ) : (
          <p className="text-muted-foreground">Detecting your connection details…</p>
        )}
      </div>
    </div>
  );
}
