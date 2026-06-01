import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[linear-gradient(to_top_in_oklch,hsl(var(--primary)/0.55),hsl(var(--primary)/0.28)_20%,hsl(var(--primary)/0.1)_45%,hsl(var(--background))_75%,hsl(var(--background)))]">
      <div className="container relative z-10 pb-6 pt-4 lg:pb-8 lg:pt-6">
        <div className="h-px hairline-divider" aria-hidden />

        <div className="mt-4 flex flex-col gap-4 text-[12.5px] text-muted-foreground/85 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-foreground/90">Zee VPN</span>. All rights reserved.
          </p>

          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              href="/privacy"
              className="transition-colors duration-300 hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors duration-300 hover:text-foreground"
            >
              Terms &amp; Conditions
            </Link>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(56,179,108,0.7)]" aria-hidden />
              All systems operational
            </span>
          </nav>
        </div>

        {/* Brand band — outlined Zee VPN wordmark with shield */}
        <div className="relative mt-10 flex select-none justify-center px-4 lg:mt-14" aria-hidden>
          <Image
            src="/zee-vpn-brand.png"
            alt=""
            width={1521}
            height={355}
            className="h-auto w-full max-w-5xl object-contain"
            priority={false}
          />
        </div>
      </div>
    </footer>
  );
}
