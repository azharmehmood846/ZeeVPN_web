import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface TocEntry {
  number: string;
  label: string;
  id: string;
}

interface LegalPageLayoutProps {
  eyebrow?: string;
  title: string;
  effectiveDate: string;
  lastUpdated: string;
  intro?: ReactNode;
  toc: TocEntry[];
  children: ReactNode;
  reviewNote?: ReactNode;
}

export function LegalPageLayout({
  eyebrow = "Legal",
  title,
  effectiveDate,
  lastUpdated,
  intro,
  toc,
  children,
  reviewNote,
}: LegalPageLayoutProps) {
  return (
    <div className="relative pb-24 pt-[calc(6rem+4.5rem)]">
      {/* Soft top atmospheric glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[6rem] -z-10 h-72 bg-[radial-gradient(60%_60%_at_50%_0%_in_oklch,rgba(37,99,235,0.18),rgba(37,99,235,0.04)_45%,transparent_75%)]"
      />

      <div className="container">
        {/* Header */}
        <header className="mx-auto max-w-4xl text-center">
          <span className="section-eyebrow inline-flex">{eyebrow}</span>
          <h1 className="mt-6 text-[clamp(2.5rem,5vw,3.75rem)] font-bold leading-[1.05] tracking-[-0.04em] text-foreground">
            {title}
          </h1>

          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-full border border-white/[0.07] bg-white/[0.018] px-5 py-2 text-[12.5px] text-muted-foreground backdrop-blur-sm">
            <span className="inline-flex items-center gap-2">
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground/65">
                Effective
              </span>
              <span className="text-foreground/95 tabular-nums">{effectiveDate}</span>
            </span>
            <span className="h-3 w-px bg-white/10" aria-hidden />
            <span className="inline-flex items-center gap-2">
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground/65">
                Updated
              </span>
              <span className="text-foreground/95 tabular-nums">{lastUpdated}</span>
            </span>
          </div>

          {reviewNote ? (
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/[0.06] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-amber-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" aria-hidden />
              {reviewNote}
            </div>
          ) : null}

          {intro ? (
            <div className="mx-auto mt-8 max-w-2xl text-[0.9375rem] leading-7 text-muted-foreground">
              {intro}
            </div>
          ) : null}
        </header>

        {/* Hairline divider */}
        <div className="mx-auto mt-14 h-px max-w-5xl hairline-divider" aria-hidden />

        {/* Body grid: sticky TOC + content */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-12 lg:grid-cols-[220px_1fr] lg:gap-14">
          {/* TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-[calc(6rem+3rem)]">
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground/70">
                Contents
              </p>
              <nav className="mt-5 space-y-1">
                {toc.map((entry) => (
                  <a
                    key={entry.id}
                    href={`#${entry.id}`}
                    className="group flex items-start gap-3 rounded-lg px-3 py-2 text-[13px] leading-snug text-muted-foreground transition-colors duration-200 hover:bg-white/[0.025] hover:text-foreground"
                  >
                    <span className="mt-px shrink-0 text-[10.5px] font-medium tabular-nums text-muted-foreground/55 group-hover:text-primary/80">
                      {entry.number}
                    </span>
                    <span>{entry.label}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <article className="min-w-0 space-y-16">{children}</article>
        </div>
      </div>
    </div>
  );
}

interface LegalSectionProps {
  number: string;
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function LegalSection({
  number,
  id,
  title,
  children,
  className,
}: LegalSectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-32", className)}>
      <header className="flex items-baseline gap-4">
        <span className="text-[11px] font-medium tabular-nums tracking-[0.18em] text-primary/85">
          {number}
        </span>
        <h2 className="text-[1.5rem] font-semibold leading-tight tracking-[-0.025em] text-foreground">
          {title}
        </h2>
      </header>
      <div className="prose-legal mt-5 text-[15.5px] leading-[1.75] text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

interface LegalSubsectionProps {
  title: string;
  children: ReactNode;
}

export function LegalSubsection({ title, children }: LegalSubsectionProps) {
  return (
    <div className="mt-7">
      <h3 className="text-[15px] font-semibold tracking-[-0.005em] text-foreground/95">
        {title}
      </h3>
      <div className="mt-3 text-[15.5px] leading-[1.75] text-muted-foreground">
        {children}
      </div>
    </div>
  );
}

interface LegalCalloutProps {
  children: ReactNode;
  tone?: "neutral" | "warning";
}

export function LegalCallout({ children, tone = "neutral" }: LegalCalloutProps) {
  const toneClass =
    tone === "warning"
      ? "border-amber-500/20 bg-amber-500/[0.04] text-amber-100/90"
      : "border-white/[0.07] bg-white/[0.02] text-foreground/85";
  return (
    <div
      className={cn(
        "mt-6 rounded-2xl border px-5 py-4 text-[13.5px] leading-relaxed",
        toneClass
      )}
    >
      {children}
    </div>
  );
}

interface LegalTableProps {
  head: ReactNode[];
  rows: ReactNode[][];
}

export function LegalTable({ head, rows }: LegalTableProps) {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.015]">
      <table className="w-full text-left text-[13.5px] leading-snug">
        <thead className="bg-white/[0.02]">
          <tr>
            {head.map((h, i) => (
              <th
                key={i}
                className="px-5 py-3 text-[10.5px] font-medium uppercase tracking-[0.18em] text-muted-foreground"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className="border-t border-white/[0.05] [&:last-child]:border-b-0"
            >
              {row.map((cell, ci) => (
                <td key={ci} className="px-5 py-3.5 align-top text-foreground/80">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
