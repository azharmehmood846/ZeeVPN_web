"use client";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import heroAnimationData from '@/lib/ripple-lottie.json';

export function LottieBg() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 scale-[2] opacity-[0.15] brightness-125">
        <DotLottieReact
          data={heroAnimationData}
          loop
          autoplay
          speed={2}
          style={{ height: '100%', width: '100%' }}
        />
      </div>
    </div>
  );
}
