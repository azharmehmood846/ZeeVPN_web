import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[linear-gradient(to_top_in_oklch,hsl(var(--primary)/0.55),hsl(var(--primary)/0.28)_20%,hsl(var(--primary)/0.1)_45%,hsl(var(--background))_75%,hsl(var(--background)))]">
      {/* Atmosphere layers */}
      <div
        className="pointer-events-none absolute -bottom-20 -right-12 z-0 opacity-[0.18] mix-blend-screen sm:-bottom-24 sm:-right-16"
        aria-hidden
      >
        <Image
          src="/zee-Vector.png"
          alt="Zee VPN brand mark"
          width={2185}
          height={2673}
          className="h-[15rem] w-auto object-contain object-right-bottom sm:h-[19rem] md:h-[24rem]"
        />
      </div>

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
      </div>
    </footer>
  );
}
