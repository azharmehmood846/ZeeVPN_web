import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ChevronRight, LockKeyhole, ShieldCheck, Sparkles, Wifi, Globe2 } from 'lucide-react';

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { HeroSection } from '@/components/hero-section';
import { MarketingHeadline } from '@/components/marketing-headline';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CDN_IMAGES } from '@/lib/cdn-images';
import { benefits, premiumTiers, testimonials } from '@/lib/data';

const productPillars = [
  {
    icon: ShieldCheck,
    title: 'One ad unlocks hours',
    description: 'Watch a short ad at open. The tunnel runs for the rest of your session.',
  },
  {
    icon: Wifi,
    title: 'Stays up on bad WiFi',
    description: 'Hotels, airports, and café hotspots without constant reconnect prompts.',
  },
  {
    icon: Globe2,
    title: 'Servers when you need them',
    description: 'Pick a region in the app. Pro adds premium exits for streaming and work.',
  },
];

const shortBenefitCopy: Record<string, string> = {
  'Stay Anonymous Online': 'Hide your IP from sites and your ISP.',
  'Protect Personal Data': 'Encrypt traffic on public WiFi.',
  'Secure Public Wi-Fi': 'Stay safe on open networks in seconds.',
};

const featureRows = [
  {
    eyebrow: 'Connection',
    title: 'Fast enough that you forget it is on',
    description: 'Calls, streams, and downloads keep moving while the VPN is connected.',
    bullets: ['Stable speed on everyday networks', 'In app gauge stays in the green'],
    image: CDN_IMAGES.productSpeed,
    alt: 'Zee VPN product speed view',
  },
  {
    eyebrow: 'Global access',
    title: 'Pick a server in one tap',
    description: 'Route through the Americas, Europe, or Asia Pacific from the same Android app.',
    bullets: ['Standard locations on free', 'Premium exits with Pro'],
    image: CDN_IMAGES.globalServers,
    alt: 'Zee VPN global server locations',
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <HeroSection />

      <section className="py-20 md:py-24">
        <div className="container">
          <AnimateOnScroll className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="rounded-full border-border/70 bg-card/40 px-4 py-1 text-[11px] uppercase tracking-[0.22em]">
              Why Zee VPN
            </Badge>
            <MarketingHeadline className="mt-5">Built for people who just want it on</MarketingHeadline>
            <p className="section-body mt-3">
              No signup. No monthly bill. Watch one ad and browse for hours.
            </p>
          </AnimateOnScroll>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {productPillars.map((pillar, index) => (
              <AnimateOnScroll key={pillar.title} animation="fade-in-down" delay={index * 80}>
                <Card className="h-full rounded-[1.75rem] border-border/60 bg-card/45 shadow-[0_16px_50px_rgba(0,0,0,0.18)]">
                  <CardHeader className="p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <pillar.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="pt-5 text-xl font-semibold tracking-[-0.03em]">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6 pt-0 text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/25 py-20 md:py-24">
        <div className="container space-y-14">
          {featureRows.map((row, index) => (
            <div
              key={row.title}
              className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]"
            >
              <AnimateOnScroll
                animation={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
                className={index % 2 === 1 ? 'lg:order-2' : undefined}
              >
                <div className="max-w-xl">
                  <div className="text-xs font-medium uppercase tracking-[0.24em] text-primary">{row.eyebrow}</div>
                  <MarketingHeadline as="h3" className="mt-3">
                    {row.title}
                  </MarketingHeadline>
                  <p className="section-body mt-4">{row.description}</p>
                  <ul className="mt-5 space-y-2">
                    {row.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground/70" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll
                animation={index % 2 === 0 ? 'slide-in-right' : 'slide-in-left'}
                className={index % 2 === 1 ? 'lg:order-1' : undefined}
              >
                <Image
                  src={row.image}
                  alt={row.alt}
                  width={540}
                  height={540}
                  sizes="(max-width: 1024px) 92vw, 540px"
                  className="mx-auto h-auto w-full max-w-lg object-contain"
                />
              </AnimateOnScroll>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container">
          <AnimateOnScroll className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="rounded-full border-border/70 bg-card/40 px-4 py-1 text-[11px] uppercase tracking-[0.22em]">
              Privacy
            </Badge>
            <MarketingHeadline className="mt-5">Stay private on any network</MarketingHeadline>
          </AnimateOnScroll>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <AnimateOnScroll key={benefit.title} animation="fade-in-down" delay={index * 80}>
                <Card className="h-full rounded-[1.5rem] border-border/60 bg-card/40">
                  <CardHeader className="p-6 pb-4">
                    <CardTitle className="text-lg font-semibold tracking-[-0.02em]">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6 pt-0 text-sm leading-relaxed text-muted-foreground">
                    {shortBenefitCopy[benefit.title] ?? benefit.description}
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="border-y border-border/60 bg-card/25 py-20 md:py-24">
        <div className="container">
          <AnimateOnScroll className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="rounded-full border-border/70 bg-card/40 px-4 py-1 text-[11px] uppercase tracking-[0.22em]">
              Pricing
            </Badge>
            <MarketingHeadline className="mt-5">Free if you watch. Paid if you do not</MarketingHeadline>
            <p className="section-body mt-3">Free runs on ads. Pro skips them and opens premium servers.</p>
          </AnimateOnScroll>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {premiumTiers.map((tier, index) => (
              <AnimateOnScroll key={tier.name} animation="fade-in-down" delay={index * 90}>
                <Card
                  className={`flex h-full flex-col rounded-[1.75rem] border-border/60 bg-background/70 ${
                    tier.featured ? 'border-primary/35 shadow-[0_24px_70px_rgba(37,99,235,0.18)]' : ''
                  }`}
                >
                  <CardHeader className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <CardTitle className="text-xl font-semibold tracking-[-0.03em]">{tier.name}</CardTitle>
                      {tier.featured ? (
                        <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          Recommended
                        </span>
                      ) : null}
                    </div>
                    <CardDescription className="pt-2 text-sm text-muted-foreground">
                      {tier.description.split('.')[0]}.
                    </CardDescription>
                    <div className="pt-5 text-foreground">
                      <span className="text-3xl font-semibold tracking-[-0.05em]">${tier.price}</span>
                      <span className="ml-1 text-sm text-muted-foreground">/ month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow px-6 pb-5 pt-0">
                    <ul className="space-y-2">
                      {tier.features.slice(0, 4).map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground/70" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button
                      asChild
                      size="lg"
                      variant={tier.featured ? 'default' : 'secondary'}
                      className="w-full rounded-full"
                    >
                      <Link href="/get-pin">{tier.featured ? 'Start With Pro' : 'Choose Plan'}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container">
          <AnimateOnScroll className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="rounded-full border-border/70 bg-card/40 px-4 py-1 text-[11px] uppercase tracking-[0.22em]">
              Proof
            </Badge>
            <MarketingHeadline className="mt-5">People use Zee every day after one ad</MarketingHeadline>
          </AnimateOnScroll>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <AnimateOnScroll key={testimonial.name} animation="fade-in-down" delay={index * 70}>
                <Card className="h-full rounded-[1.5rem] border-border/60 bg-card/40">
                  <CardContent className="p-6">
                    <p className="text-base leading-7 text-foreground/88">
                      “{testimonial.quote.split('.')[0]}.”
                    </p>
                    <p className="mt-4 text-sm font-medium text-foreground">{testimonial.name}</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="container">
          <AnimateOnScroll animation="zoom-in">
            <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-[linear-gradient(180deg,rgba(16,23,42,0.88),rgba(11,18,32,0.96))] px-6 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.3)] sm:px-10 sm:py-12">
              <div className="mx-auto max-w-3xl text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <MarketingHeadline className="mt-6">Install Zee. Watch one ad. Get hours</MarketingHeadline>
                <p className="section-body mt-3">Unlimited Android VPN after a single short ad.</p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button asChild size="lg" className="rounded-full px-7">
                    <Link href="/get-pin">
                      Request Free PIN
                      <LockKeyhole className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="secondary" className="rounded-full border border-border/70 bg-secondary/60 px-7">
                    <Link href="/what-is-a-vpn">How it works</Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
