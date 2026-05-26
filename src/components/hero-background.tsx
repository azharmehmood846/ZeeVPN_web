"use client";

import { useEffect, useState } from "react";

import { DotField } from "@/components/dot-field";

export function HeroBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 min-h-full">
      <div
        className="absolute inset-0 z-0 min-h-full bg-gradient-to-b from-primary/30 via-background to-background"
        aria-hidden
      />
      {mounted ? (
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          className="absolute inset-0 z-10 min-h-full"
        />
      ) : null}
    </div>
  );
}
