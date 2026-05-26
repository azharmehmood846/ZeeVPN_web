import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Hero h1 only */
export const marketingHeadlineClass =
  "text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[1.08] tracking-[-0.045em]";

/** All section headings — same bold, gradient, slightly smaller */
export const marketingSectionHeadlineClass =
  "text-[clamp(1.75rem,3.25vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.04em]";

export const marketingHeadlineGradientClass =
  "bg-gradient-to-b from-white to-white/75 bg-clip-text text-transparent";

export const marketingHeadlineGradientMutedClass = "text-white/55";

type MarketingHeadlineProps = {
  as?: "h1" | "h2" | "h3";
  children: ReactNode;
  className?: string;
  muted?: boolean;
  /** `hero` matches the home hero h1; default `section` is one step smaller */
  size?: "hero" | "section";
};

export function MarketingHeadline({
  as: Tag = "h2",
  children,
  className,
  muted = false,
  size = "section",
}: MarketingHeadlineProps) {
  return (
    <Tag
      className={cn(
        size === "hero" ? marketingHeadlineClass : marketingSectionHeadlineClass,
        className
      )}
    >
      <span
        className={muted ? marketingHeadlineGradientMutedClass : marketingHeadlineGradientClass}
      >
        {children}
      </span>
    </Tag>
  );
}
