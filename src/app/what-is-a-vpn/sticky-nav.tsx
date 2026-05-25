"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

type Section = {
  id: string;
  title: string;
};

interface StickyNavProps {
  sections: Section[];
}

export function StickyNav({ sections }: StickyNavProps) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  return (
    <div className="sticky top-24">
      <Card className="rounded-xl">
        <CardContent className="p-4">
          <h3 className="font-bold font-headline mb-4 px-2">On this page</h3>
          <ul className="space-y-1">
            {sections.map((section) => (
              <li key={section.id}>
                <Link
                  href={`#${section.id}`}
                  className={cn(
                    "block px-2 py-1.5 rounded-md text-sm transition-colors",
                    activeSection === section.id
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
                  )}
                >
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
