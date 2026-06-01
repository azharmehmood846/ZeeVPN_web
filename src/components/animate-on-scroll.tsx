"use client";

import { useRef, useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-down' | 'slide-in-left' | 'slide-in-right' | 'zoom-in';
  delay?: number; // in ms
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  initiallyVisible?: boolean;
}

export function AnimateOnScroll({
  children,
  className,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.05,
  rootMargin = '0px 0px -12% 0px',
  triggerOnce = true,
  initiallyVisible = false,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(initiallyVisible);

  useEffect(() => {
    if (initiallyVisible) {
      return;
    }

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // One-time fallback when IntersectionObserver isn't available — runs once on mount.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsVisible(true);
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Skip the IntersectionObserver dance when the user prefers reduced motion.
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce && ref.current) {
              observer.unobserve(ref.current);
            }
          } else if (!triggerOnce) {
             setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [initiallyVisible, rootMargin, threshold, triggerOnce]);

  const animationClasses: { [key: string]: string } = {
    'fade-in': 'animate-fade-in',
    'fade-in-down': 'animate-fade-in-down',
    'slide-in-left': 'animate-slide-in-left',
    'slide-in-right': 'animate-slide-in-right',
    'zoom-in': 'animate-zoom-in',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-opacity duration-500 ease-out will-change-transform',
        isVisible ? 'opacity-100' : 'opacity-0',
        isVisible && animationClasses[animation],
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
