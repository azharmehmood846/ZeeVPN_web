import { useId } from "react";

import { cn } from "@/lib/utils";

type ZeeShieldWatermarkProps = {
  className?: string;
};

export function ZeeShieldWatermark({ className }: ZeeShieldWatermarkProps) {
  const filterId = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 84 103"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("aspect-[84/103]", className)}
      aria-hidden
    >
      <defs>
        <filter
          id={filterId}
          x="-30%"
          y="-30%"
          width="160%"
          height="160%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="2.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g
        filter={`url(#${filterId})`}
        stroke="#6EC3FF"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M42 3.5C27 3.5 16 11 12.5 24.5L9.5 40.5C7.5 50.5 8 62 12.5 72.5L18 85.5C23.5 95.5 32 99.5 42 100.5C52 99.5 60.5 95.5 66 85.5L71.5 72.5C76 62 76.5 50.5 74.5 40.5L71.5 24.5C68 11 57 3.5 42 3.5Z" />
        <path d="M20 41.5C30 33.5 46 31.5 62 38.5" />
        <path d="M22 60.5C34 72.5 50 76.5 64 68.5" />
      </g>
    </svg>
  );
}
