"use client";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import heroAnimationData from '@/lib/ripple-lottie.json';

export function LottieBg() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 scale-[1.75] opacity-[0.1] brightness-110">
        <DotLottieReact
          data={heroAnimationData}
          loop
          autoplay
          speed={0.45}
          style={{ height: '100%', width: '100%' }}
        />
      </div>
    </div>
  );
}
