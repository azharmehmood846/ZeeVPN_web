import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, LockKeyhole, ShieldCheck, Wifi, Globe2 } from 'lucide-react';

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { HeroSection } from '@/components/hero-section';
import { MarketingHeadline } from '@/components/marketing-headline';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CountryTicker } from '@/components/ui/country-ticker';
import { Globe } from '@/components/ui/globe';
import { ShineBorder } from '@/components/ui/shine-border';
import { SpeedGauge } from '@/components/ui/speed-gauge';
import { CDN_IMAGES } from '@/lib/cdn-images';
import { premiumTiers, testimonials } from '@/lib/data';

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
            <span className="section-eyebrow">Why Zee VPN</span>
            <MarketingHeadline className="mt-5">Built for people who just want it on</MarketingHeadline>
            <p className="section-body mt-3">
              No signup. No monthly bill. Watch one ad and browse for hours.
            </p>
          </AnimateOnScroll>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {productPillars.map((pillar, index) => (
              <AnimateOnScroll key={pillar.title} animation="fade-in-down" delay={index * 80}>
                <Card className="group relative h-full overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.035] via-white/[0.012] to-transparent backdrop-blur-md transition-[border-color,background-color,box-shadow] duration-300 ease-out hover:border-primary/25 hover:shadow-[0_20px_50px_-20px_rgba(37,99,235,0.35)]">
                  {/* Top inner edge highlight */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                  {/* Soft inner glow that intensifies on hover */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-16 left-1/2 h-40 w-56 -translate-x-1/2 rounded-full bg-primary/12 opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div className="relative flex flex-col items-center px-7 pb-10 pt-9 text-center">
                    {/* Glassmorphic icon container */}
                    <div className="relative h-[108px] w-[108px]">
                      {/* Outer atmospheric halo */}
                      <span
                        aria-hidden
                        className="absolute -inset-3 rounded-[1.75rem] bg-primary/18 blur-2xl"
                      />
                      {/* Glass surface */}
                      <div className="relative flex h-full w-full items-center justify-center rounded-[1.5rem] border border-white/[0.14] bg-gradient-to-br from-primary/[0.22] via-primary/[0.07] to-white/[0.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(0,0,0,0.35),0_10px_30px_-10px_rgba(0,0,0,0.55)]">
                        {/* Top-left highlight gradient (light source) */}
                        <span
                          aria-hidden
                          className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-white/[0.14] via-transparent to-transparent"
                        />
                        {/* Inner faint ring */}
                        <span
                          aria-hidden
                          className="absolute inset-[6px] rounded-[1.25rem] border border-white/[0.05]"
                        />
                        {/* Icon */}
                        <pillar.icon
                          className="relative h-[46px] w-[46px] text-primary drop-shadow-[0_0_14px_rgba(59,130,246,0.55)] transition-transform duration-500 ease-out group-hover:scale-110"
                          strokeWidth={1.4}
                        />
                      </div>
                    </div>

                    <CardTitle className="mt-8 text-[1.125rem] font-semibold leading-snug tracking-[-0.02em] text-foreground">
                      {pillar.title}
                    </CardTitle>
                    <p className="mt-3 max-w-[24ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-24">
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
                  <span className="section-eyebrow">{row.eyebrow}</span>
                  <MarketingHeadline as="h3" className="mt-4">
                    {row.title}
                  </MarketingHeadline>
                  <p className="section-body mt-4">{row.description}</p>
                  <ul className="mt-6 space-y-3">
                    {row.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-[0.9375rem] text-muted-foreground">
                        <span className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-primary/70" aria-hidden />
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
                {row.eyebrow === 'Global access' ? (
                  <div className="relative mx-auto w-full max-w-lg">
                    <span
                      className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-primary/10 blur-3xl"
                      aria-hidden
                    />
                    <Globe className="max-w-lg" />
                  </div>
                ) : row.eyebrow === 'Connection' ? (
                  <SpeedGauge />
                ) : (
                  <Image
                    src={row.image}
                    alt={row.alt}
                    width={540}
                    height={540}
                    sizes="(max-width: 1024px) 92vw, 540px"
                    className="mx-auto h-auto w-full max-w-lg object-contain"
                  />
                )}
              </AnimateOnScroll>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 md:py-14">
        <CountryTicker />
      </section>

      <section id="pricing" className="relative border-y border-white/[0.05] bg-white/[0.012] py-20 md:py-24">
        <div className="container">
          <AnimateOnScroll className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">Pricing</span>
            <MarketingHeadline className="mt-5">Free if you watch. Paid if you do not</MarketingHeadline>
            <p className="section-body mt-3">Free runs on ads. Pro skips them and opens premium servers.</p>
          </AnimateOnScroll>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {premiumTiers.map((tier, index) => (
              <AnimateOnScroll key={tier.name} animation="fade-in-down" delay={index * 90}>
                <Card
                  className={`relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white/[0.018] transition-[border-color,background-color] duration-300 ease-out ${
                    tier.featured
                      ? 'border-primary/40 bg-gradient-to-b from-primary/[0.06] to-white/[0.01]'
                      : 'border-white/[0.06] hover:border-white/[0.11] hover:bg-white/[0.028]'
                  }`}
                >
                  {tier.featured ? (
                    <span
                      className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/20 blur-3xl"
                      aria-hidden
                    />
                  ) : null}
                  <CardHeader className="relative p-7 pb-5">
                    <div className="flex items-center justify-between gap-4">
                      <CardTitle className="text-[1.0625rem] font-semibold tracking-[-0.02em]">{tier.name}</CardTitle>
                      {tier.featured ? (
                        <span className="rounded-full border border-primary/30 bg-primary/[0.08] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-primary">
                          Recommended
                        </span>
                      ) : null}
                    </div>
                    <CardDescription className="pt-2 text-[0.9375rem] text-muted-foreground">
                      {tier.description.split('.')[0]}.
                    </CardDescription>
                    <div className="pt-6 text-foreground">
                      <span className="text-[2.25rem] font-semibold tracking-[-0.045em] tabular-nums">${tier.price}</span>
                      <span className="ml-1.5 text-sm text-muted-foreground">/ month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="relative flex-grow px-7 pb-5 pt-0">
                    <ul className="space-y-2.5">
                      {tier.features.slice(0, 4).map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-[0.9375rem] text-muted-foreground">
                          <CheckCircle2 className="mt-[3px] h-3.5 w-3.5 shrink-0 text-primary/75" strokeWidth={2.25} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="relative p-7 pt-2">
                    <Button
                      asChild
                      size="lg"
                      variant={tier.featured ? 'default' : 'secondary'}
                      className={`w-full rounded-full ${tier.featured ? 'relative overflow-hidden' : ''}`}
                    >
                      <Link href="/get-pin">
                        {tier.featured ? 'Start With Pro' : 'Choose Plan'}
                        {tier.featured ? (
                          <ShineBorder
                            borderWidth={1.5}
                            duration={9}
                            shineColor={["#FFFFFF", "#BFDBFE", "#A5B4FC"]}
                          />
                        ) : null}
                      </Link>
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
            <span className="section-eyebrow">Proof</span>
            <MarketingHeadline className="mt-5">People use Zee every day after one ad</MarketingHeadline>
          </AnimateOnScroll>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <AnimateOnScroll key={testimonial.name} animation="fade-in-down" delay={index * 70}>
                <Card className="group h-full rounded-2xl border border-white/[0.06] bg-white/[0.018] transition-[border-color,background-color] duration-300 ease-out hover:border-white/[0.1] hover:bg-white/[0.028]">
                  <CardContent className="p-8">
                    <span className="block text-3xl leading-none text-primary/45" aria-hidden>“</span>
                    <p className="mt-3 text-[1.0625rem] leading-[1.7] text-foreground/85">
                      {testimonial.quote.split('.')[0]}.
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <span className="h-px w-6 bg-white/15" aria-hidden />
                      <p className="text-[13px] font-medium tracking-[-0.005em] text-foreground/90">{testimonial.name}</p>
                    </div>
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
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[radial-gradient(120%_120%_at_50%_0%,rgba(37,99,235,0.16),transparent_55%),linear-gradient(180deg,rgba(16,23,42,0.92),rgba(11,18,32,0.96))] px-6 py-14 sm:px-10 sm:py-16">
              <span
                className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[28rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute inset-x-0 top-0 h-px hairline-divider"
                aria-hidden
              />
              <div className="relative mx-auto max-w-3xl text-center">
                <span className="relative mx-auto inline-flex h-16 w-16 items-center justify-center">
                  <span className="absolute inset-0 -m-2 rounded-full bg-primary/20 blur-xl" aria-hidden />
                  <Image
                    src="/zee_logo.png"
                    alt="Zee VPN"
                    width={128}
                    height={128}
                    className="relative h-16 w-16 object-contain drop-shadow-[0_8px_24px_rgba(37,99,235,0.45)]"
                  />
                </span>
                <MarketingHeadline className="mt-6">Install Zee. Watch one ad. Get hours</MarketingHeadline>
                <p className="section-body mt-3">Unlimited Android VPN after a single short ad.</p>
                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button asChild size="lg" className="relative h-12 overflow-hidden rounded-full px-7 shadow-[0_8px_28px_-6px_rgba(37,99,235,0.55)]">
                    <Link href="/get-pin">
                      Request Free PIN
                      <LockKeyhole className="ml-2 h-4 w-4" />
                      <ShineBorder
                        borderWidth={1.5}
                        duration={10}
                        shineColor={["#FFFFFF", "#BFDBFE", "#A5B4FC"]}
                      />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="secondary" className="h-12 rounded-full border border-white/12 bg-white/[0.06] px-7 text-white backdrop-blur-md hover:bg-white/10">
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
