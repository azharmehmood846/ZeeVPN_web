import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { ArrowRight, Twitter, Facebook, Linkedin } from 'lucide-react';

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-t from-primary/35 via-background to-background">
      <div
        className="pointer-events-none absolute -bottom-8 -left-12 z-0 sm:-bottom-10 sm:-left-16"
        aria-hidden
      >
        <Image
          src="/zee-Vector.png"
          alt=""
          width={2185}
          height={2673}
          className="h-[18rem] w-auto object-contain object-left-bottom sm:h-[22rem] md:h-[26rem]"
        />
      </div>

      <div className="container relative z-10 py-14 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div className="space-y-5">
            <Logo size="lg" showWordmark tone="light" />
            <p className="max-w-sm text-sm leading-7 text-muted-foreground">
              Privacy-first VPN access with a cleaner onboarding path, faster first session, and a calmer product story.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Button key={social.name} variant="ghost" size="icon" asChild className="rounded-full border border-border/60 bg-background/50">
                  <Link href={social.href}>
                    <social.icon className="h-4 w-4" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground/85">Product</h3>
            <ul className="mt-5 space-y-3">
              <li><Link href="/download" className="text-sm text-muted-foreground transition-colors hover:text-primary">Download</Link></li>
              <li><Link href="/#pricing" className="text-sm text-muted-foreground transition-colors hover:text-primary">Pricing</Link></li>
              <li><Link href="/what-is-a-vpn" className="text-sm text-muted-foreground transition-colors hover:text-primary">How It Works</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground/85">Company</h3>
            <ul className="mt-5 space-y-3">
              <li><Link href="/blog" className="text-sm text-muted-foreground transition-colors hover:text-primary">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">Contact</Link></li>
              <li><Link href="/get-pin" className="text-sm text-muted-foreground transition-colors hover:text-primary">Free PIN</Link></li>
            </ul>
          </div>

          <div className="rounded-[1.5rem] border border-border/60 bg-background/45 p-5">
            <div className="text-sm font-medium text-foreground">Start with a short trial, then scale into premium access.</div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Faster first-run experience, cleaner product framing, and clearer upgrade flow.
            </p>
            <Button asChild className="mt-5 w-full rounded-full">
              <Link href="/get-pin">
                Request PIN
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 px-1 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Zee VPN. All rights reserved.</p>
          <p>Designed for a quieter, more product-first landing experience.</p>
        </div>
      </div>
    </footer>
  );
}
