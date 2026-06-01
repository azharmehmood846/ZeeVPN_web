import Image from "next/image";

import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { HeroBackground } from "@/components/hero-background";
import {
  marketingHeadlineClass,
  marketingHeadlineGradientClass,
  marketingHeadlineGradientMutedClass,
} from "@/components/marketing-headline";
import { AppleIcon, GooglePlayIcon } from "@/components/store-icons";
import { CDN_IMAGES } from "@/lib/cdn-images";
import { PLAY_STORE_URL } from "@/lib/seo";

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
