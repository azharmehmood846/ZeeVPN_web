import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { ArrowUpRight, Twitter, Facebook, Linkedin } from 'lucide-react';

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

const productLinks = [
  { label: 'Download', href: '/download' },
  { label: 'How It Works', href: '/what-is-a-vpn' },
];

const companyLinks = [
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Free PIN', href: '/get-pin' },
];

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-1.5 text-[0.9375rem] text-muted-foreground transition-colors duration-300 hover:text-foreground"
      >
        <span>{label}</span>
        <ArrowUpRight
          className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          strokeWidth={2}
        />
      </Link>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[linear-gradient(to_top_in_oklch,hsl(var(--primary)/0.3),hsl(var(--primary)/0.12)_22%,hsl(var(--background))_55%,hsl(var(--background)))]">
      {/* Atmosphere layers */}
      <div
        className="pointer-events-none absolute -bottom-20 -right-12 z-0 opacity-[0.18] mix-blend-screen sm:-bottom-24 sm:-right-16"
        aria-hidden
      >
        <Image
          src="/zee-Vector.png"
          alt=""
          width={2185}
          height={2673}
          className="h-[15rem] w-auto object-contain object-right-bottom sm:h-[19rem] md:h-[24rem]"
        />
      </div>

      <div className="container relative z-10 py-16 lg:py-20">
        {/* Main columns */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10">
          {/* Brand */}
          <div className="space-y-5">
            <Logo size="lg" showWordmark tone="light" />
            <p className="max-w-sm text-[0.9375rem] leading-[1.7] text-muted-foreground">
              Privacy-first VPN access with a cleaner onboarding path, faster first session, and a calmer product story.
            </p>
          </div>

          {/* Product */}
          <nav aria-labelledby="footer-product">
            <h3
              id="footer-product"
              className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground/85"
            >
              Product
            </h3>
            <ul className="mt-6 space-y-3.5">
              {productLinks.map((link) => (
                <FooterLink key={link.href} {...link} />
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-labelledby="footer-company">
            <h3
              id="footer-company"
              className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground/85"
            >
              Company
            </h3>
            <ul className="mt-6 space-y-3.5">
              {companyLinks.map((link) => (
                <FooterLink key={link.href} {...link} />
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground/85">
              Connect
            </h3>
            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  <span
                    className="absolute inset-0 rounded-full border border-white/[0.06] bg-white/[0.015] transition-[border-color,background-color] duration-300 group-hover:border-white/15 group-hover:bg-white/[0.05]"
                    aria-hidden
                  />
                  <social.icon className="relative h-[15px] w-[15px]" strokeWidth={1.75} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom hairline + meta row */}
        <div className="mt-16 h-px hairline-divider" aria-hidden />

        <div className="mt-7 flex flex-col gap-3 text-[12.5px] text-muted-foreground/85 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-foreground/90">Zee VPN</span>. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(56,179,108,0.7)]" aria-hidden />
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}
