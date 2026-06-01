import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, ShieldCheck, Wifi, Globe2 } from 'lucide-react';

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { FaqSection, type FaqItem } from '@/components/faq-section';
import { HeroSection } from '@/components/hero-section';
import { ScrollReveal } from '@/components/scroll-reveal';
import { MarketingHeadline } from '@/components/marketing-headline';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CountryTicker } from '@/components/ui/country-ticker';
import { Globe } from '@/components/ui/globe';
import { SpeedGauge } from '@/components/ui/speed-gauge';
import { AppleIcon, GooglePlayIcon } from '@/components/store-icons';
import { CDN_IMAGES } from '@/lib/cdn-images';
import { premiumTiers, testimonials } from '@/lib/data';
import { PLAY_STORE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Free Android VPN — One Ad Unlocks Hours',
  description:
    'Zee VPN is a free Android VPN. Watch one short ad to unlock hours of unlimited, encrypted access. No subscription, no signup — privacy on your terms.',
  alternates: { canonical: '/' },
};

const SHOW_PRICING = false;

const homeFaqs: FaqItem[] = [
  {
    question: 'Is Zee VPN really free?',
    answer:
      'Yes. The free tier is supported by short ads — watch one at app open and the encrypted tunnel runs for the rest of your session. No subscription, no card on file, no hidden fees.',
  },
  {
    question: 'Do I need to create an account?',
    answer:
      'No. Tap “Continue as Guest” on first open and you’re in. We generate a device-bound identifier to enforce free-tier limits and provide support, but no name, email, or payment details are required.',
  },
  {
    question: 'Does Zee VPN log my browsing activity?',
    answer:
      'No. We operate a strict no-logs policy for VPN traffic — no websites visited, no DNS queries, no contents of any traffic carried over the tunnel. Full disclosure is in our Privacy Policy.',
  },
  {
    question: 'Is it safe to use on public WiFi?',
    answer:
      'That’s exactly what it’s for. Zee VPN encrypts your traffic between your phone and our servers, so hotel, airport, and café hotspots can’t see what you’re doing — only that you’re connected to a VPN.',
  },
  {
    question: 'What devices does Zee VPN support?',
    answer:
      'Android is supported today via the Google Play Store. Other platforms are on the roadmap — email us at hi@zeevpn.com to be notified when iOS, desktop, or browser support ships.',
  },
  {
    question: 'How long does one ad unlock?',
    answer:
      'One short ad at app open unlocks a full browsing session. You can also earn additional time by watching optional rewarded ads inside the app — exact amounts and caps are tuned in the app itself.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

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

      <section className="pt-16 pb-16 md:pt-28 md:pb-28">
        <div className="container mx-auto">
          <ScrollReveal
            baseOpacity={0.18}
            enableBlur
            baseRotation={4}
            blurStrength={8}
            textClassName="!font-bold tracking-[-0.04em] text-foreground"
          >
            Zee VPN exists to make privacy feel easy. You open the app, watch one short ad, and your connection runs encrypted for the rest of your session. No account to sign up for. No subscription to remember.
          </ScrollReveal>
        </div>
      </section>

      <section id="features" className="scroll-mt-32 py-20 md:py-24">
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
                <Card className="group relative h-full overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[linear-gradient(to_bottom_in_oklch,rgba(255,255,255,0.035),rgba(255,255,255,0.018)_45%,rgba(255,255,255,0.006)_75%,transparent)] backdrop-blur-md transition-[border-color,background-color,box-shadow] duration-300 ease-out hover:border-primary/25 hover:shadow-[0_20px_50px_-20px_rgba(37,99,235,0.35)]">
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
                      <div className="relative flex h-full w-full items-center justify-center rounded-[1.5rem] border border-white/[0.14] bg-[linear-gradient(to_bottom_right_in_oklch,hsl(var(--primary)/0.22),hsl(var(--primary)/0.13)_35%,hsl(var(--primary)/0.06)_65%,rgba(255,255,255,0.02))] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(0,0,0,0.35),0_10px_30px_-10px_rgba(0,0,0,0.55)]">
                        {/* Top-left highlight gradient (light source) */}
                        <span
                          aria-hidden
                          className="absolute inset-0 rounded-[1.5rem] bg-[linear-gradient(to_bottom_right_in_oklch,rgba(255,255,255,0.14),rgba(255,255,255,0.04)_30%,transparent_60%)]"
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
                  <MarketingHeadline as="h2" className="mt-4">
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

      {SHOW_PRICING ? (
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
                      ? 'border-primary/40 bg-[linear-gradient(to_bottom_in_oklch,hsl(var(--primary)/0.06),hsl(var(--primary)/0.03)_50%,rgba(255,255,255,0.012))]'
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
                      className="w-full rounded-full"
                    >
                      <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">{tier.featured ? 'Start With Pro' : 'Choose Plan'}</a>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
      ) : null}

      <section
        id="reviews"
        aria-labelledby="testimonials-heading"
        className="relative scroll-mt-32 overflow-hidden py-20 md:py-24"
      >
        <div className="container">
          <AnimateOnScroll className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">Reviews</span>
            <MarketingHeadline className="mt-5" as="h2">
              People use Zee every day after one ad
            </MarketingHeadline>
            <p className="section-body mt-4">
              A calmer way to stay private — when the tunnel just works in the background, you stop thinking about it.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="relative mt-14 overflow-hidden">
          <div className="flex w-max gap-4 px-4 sm:gap-5 sm:px-6 lg:px-8">
            <div
              className="flex w-max gap-4 animate-ticker sm:gap-5"
              style={{ width: 'max-content', animationDuration: '48s' }}
            >
              {[...testimonials, ...testimonials, ...testimonials].map(
                (testimonial, index) => (
                  <article
                    key={`${testimonial.name}-${index}`}
                    className="group flex min-h-[15rem] w-[20rem] shrink-0 flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-[linear-gradient(180deg_in_oklch,rgba(15,20,33,0.55),rgba(11,15,25,0.55))] p-6 backdrop-blur-sm transition-[border-color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-white/[0.12] sm:w-[24rem] sm:p-7"
                  >
                    <p className="flex-1 text-[15.5px] leading-[1.7] text-foreground/85">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="mt-6 flex items-end justify-between gap-4 border-t border-white/[0.08] pt-5">
                      <div>
                        <p className="text-[14.5px] font-semibold tracking-[-0.005em] text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="mt-0.5 text-[12.5px] text-muted-foreground">
                          {testimonial.handle}
                        </p>
                      </div>
                      <span
                        className="text-[2.75rem] font-semibold leading-none text-primary/45 sm:text-[3.25rem]"
                        aria-hidden
                      >
                        &rdquo;
                      </span>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>

          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background via-background/92 to-transparent sm:w-28 lg:w-40"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background via-background/92 to-transparent sm:w-28 lg:w-40"
            aria-hidden
          />
        </div>
      </section>

      {/* FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FaqSection
        eyebrow="FAQ"
        title="Questions, answered."
        subtitle="If anything’s missing, email us at hi@zeevpn.com and we’ll reply within one business day."
        faqs={homeFaqs}
      />

      <section className="pb-20 md:pb-24">
        <div className="container">
          <AnimateOnScroll animation="zoom-in">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[radial-gradient(120%_120%_at_50%_0%_in_oklch,rgba(37,99,235,0.16),rgba(37,99,235,0.05)_30%,transparent_55%),linear-gradient(180deg_in_oklch,rgba(16,23,42,0.92),rgba(13,19,32,0.94)_50%,rgba(11,18,32,0.96))] px-6 py-14 sm:px-10 sm:py-16">
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
                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-primary px-7 text-[15px] font-semibold tracking-[-0.005em] text-primary-foreground shadow-[0_10px_32px_-8px_rgba(37,99,235,0.6)] transition-[background-color,box-shadow,transform] duration-300 hover:bg-primary/92 hover:shadow-[0_14px_40px_-8px_rgba(37,99,235,0.75)] active:scale-[0.98]"
                  >
                    <GooglePlayIcon className="h-[22px] w-[22px]" />
                    <span>Download for free</span>
                  </a>
                  <button
                    type="button"
                    disabled
                    aria-label="iOS version coming soon"
                    className="inline-flex h-12 cursor-not-allowed items-center justify-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-7 text-[15px] font-semibold tracking-[-0.005em] text-white/85 backdrop-blur-md"
                  >
                    <AppleIcon className="h-[22px] w-[22px]" />
                    <span>Coming soon</span>
                  </button>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

    </div>
  );
}
