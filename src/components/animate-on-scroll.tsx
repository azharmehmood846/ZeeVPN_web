"use client";

import { useRef, useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-down' | 'slide-in-left' | 'slide-in-right' | 'zoom-in';
  delay?: number; // in ms
  threshold?: number;
  triggerOnce?: boolean;
}

export function AnimateOnScroll({
  children,
  className,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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
      { threshold }
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
  }, [threshold, triggerOnce]);

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
        'transition-opacity duration-700 ease-out',
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
