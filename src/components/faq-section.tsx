"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { MarketingHeadline } from "@/components/marketing-headline";
import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  faqs: FaqItem[];
}

export function FaqSection({
  eyebrow = "FAQ",
  title = "Questions, answered.",
  subtitle,
  faqs,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="relative py-20 md:py-24"
    >
      <div className="container">
        <AnimateOnScroll className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">{eyebrow}</span>
          <MarketingHeadline as="h2" className="mt-5">
            {title}
          </MarketingHeadline>
          {subtitle ? <p className="section-body mt-4">{subtitle}</p> : null}
        </AnimateOnScroll>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={faq.question}
                className={cn(
                  "overflow-hidden rounded-2xl border bg-[linear-gradient(180deg_in_oklch,rgba(15,20,33,0.55),rgba(11,15,25,0.55))] backdrop-blur-sm transition-[border-color,background-color] duration-300",
                  isOpen
                    ? "border-white/[0.14]"
                    : "border-white/[0.07] hover:border-white/[0.11]"
                )}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-[15.5px] font-semibold leading-snug tracking-[-0.005em] text-foreground sm:text-[1.0625rem]">
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-[border-color,background-color,transform,color] duration-300",
                      isOpen
                        ? "rotate-45 border-primary/40 bg-primary/[0.08] text-primary"
                        : "border-white/[0.1] bg-white/[0.02] text-muted-foreground"
                    )}
                    aria-hidden
                  >
                    <Plus className="h-4 w-4" strokeWidth={2} />
                  </span>
                </button>
                <div
                  id={`faq-panel-${index}`}
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-white/[0.06] px-5 pb-6 pt-4 sm:px-6">
                      <p className="text-[14.5px] leading-[1.75] text-muted-foreground sm:text-[15.5px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
