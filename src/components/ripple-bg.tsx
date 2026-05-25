"use client";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import animationData from '@/lib/ripple-lottie.json';

export function RippleBg() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 animate-ripple">
            <DotLottieReact data={animationData} loop autoplay />
        </div>
        <div className="absolute inset-0 animate-ripple-2">
            <DotLottieReact data={animationData} loop autoplay />
        </div>
        <div className="absolute inset-0 animate-ripple-3">
            <DotLottieReact data={animationData} loop autoplay />
        </div>
      </div>
    </div>
  );
}
