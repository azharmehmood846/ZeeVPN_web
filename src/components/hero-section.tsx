import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { HeroBackground } from "@/components/hero-background";
import {
  marketingHeadlineClass,
  marketingHeadlineGradientClass,
  marketingHeadlineGradientMutedClass,
} from "@/components/marketing-headline";
import { CDN_IMAGES } from "@/lib/cdn-images";
import { PLAY_STORE_URL } from "@/lib/seo";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden border-b border-border/40">
      <HeroBackground />

      <div className="container relative z-20 flex min-h-[100svh] flex-col items-center justify-start px-4 pb-16 pt-[calc(2.75rem+5rem)] text-center sm:px-6 lg:px-8 lg:pt-[calc(2.75rem+5.75rem)]">
        <AnimateOnScroll
          initiallyVisible
          animation="fade-in-down"
          className="w-full max-w-3xl"
        >
          <h1 className={marketingHeadlineClass}>
            <span className={marketingHeadlineGradientClass}>Unlimited VPN.</span>
            <br />
            <span className={marketingHeadlineGradientMutedClass}>Zero dollars. One ad.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/60 md:text-xl md:leading-9">
            Zee VPN is a free Android VPN. Watch one short ad to unlock hours of unlimited VPN time.
            No subscription. No sign-up. Just privacy, on your terms.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group h-12 rounded-full px-8 text-base shadow-[0_10px_32px_-8px_rgba(37,99,235,0.6)] transition-shadow duration-300 hover:shadow-[0_14px_40px_-8px_rgba(37,99,235,0.75)]"
            >
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                Get on Play Store
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-12 rounded-full border border-white/10 bg-white/[0.04] px-8 text-base text-white backdrop-blur-md transition-colors duration-300 hover:bg-white/[0.09]"
            >
              <Link href="/what-is-a-vpn">How it works</Link>
            </Button>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll
          initiallyVisible
          animation="zoom-in"
          delay={140}
          className="mt-12 flex w-full justify-center lg:mt-14"
        >
          <Image
            src={CDN_IMAGES.heroApp}
            alt="Zee VPN app preview"
            width={514}
            height={520}
            priority
            sizes="(max-width: 1024px) 85vw, 520px"
            className="h-auto w-full max-w-[340px] object-contain sm:max-w-[400px] lg:max-w-[520px]"
          />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
