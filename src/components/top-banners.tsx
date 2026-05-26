"use client";

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

interface IpInfo {
  ip: string;
  isp: string;
}

export function TopBanners() {
  const [ipInfo, setIpInfo] = useState<IpInfo | null>(null);
  // Visitors on the marketing site are not routed through the VPN yet.
  const isProtected = false;

  useEffect(() => {
    const controller = new AbortController();

    const fetchIpInfo = async () => {
      try {
        const response = await fetch('https://ipinfo.io/json', {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error('Failed to fetch IP info');
        }
        const data = await response.json();
        setIpInfo({
          ip: data.ip,
          isp: data.org,
        });
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          console.error('Error fetching IP info:', error);
        }
        setIpInfo(null);
      }
    };

    fetchIpInfo();

    return () => controller.abort();
  }, []);

  return (
    <div className="border-b border-border/60 bg-[linear-gradient(180deg,rgba(13,18,31,0.94),rgba(9,14,25,0.9))]">
      <div className="container flex min-h-11 items-center justify-center px-4 py-2.5 text-center text-sm">
        {ipInfo ? (
          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-muted-foreground">
            <span>
              IP <span className="text-foreground">{ipInfo.ip}</span>
            </span>
            <span className="text-border">/</span>
            <span>
              ISP <span className="text-foreground">{ipInfo.isp}</span>
            </span>
            <span className="text-border">/</span>
            <span
              className={cn(
                'font-medium',
                isProtected ? 'text-accent' : 'text-muted-foreground/55'
              )}
            >
              Protected
            </span>
            <span className="text-border">·</span>
            <span
              className={cn(
                'font-medium',
                !isProtected ? 'text-accent' : 'text-muted-foreground/55'
              )}
            >
              Unprotected connection detected
            </span>
          </p>
        ) : (
          <p className="text-muted-foreground">Detecting your connection details…</p>
        )}
      </div>
    </div>
  );
}
