"use client";

import * as React from "react";
import { Display, Eyebrow, Lead } from "@/components/ui/Type";
import { IronDrawing, type DrawingKind } from "@/components/ui/IronDrawing";
import { usePointerParallax } from "@/components/motion/usePointerParallax";
import { cn } from "@/lib/utils";

/**
 * Opening of every inner page: same dark ground, grid and display type as the homepage hero,
 * with the header sitting transparent over it.
 */
export function PageHero({
  eyebrow,
  lines,
  lead,
  drawing,
  children,
  size = "md",
  className,
}: {
  eyebrow: string;
  lines: React.ReactNode[];
  lead?: React.ReactNode;
  drawing?: DrawingKind;
  children?: React.ReactNode;
  size?: "md" | "sm";
  className?: string;
}) {
  const ref = usePointerParallax<HTMLElement>();
  return (
    <section
      ref={ref}
      data-hero="dark"
      data-tone="dark"
      className={cn(
        "relative isolate overflow-hidden bg-iron-950 text-canvas-bg grain -mt-[var(--header-h)]",
        "pt-[calc(var(--header-h)+4rem)] pb-16 sm:pb-24",
        size === "md" ? "min-h-[58svh] sm:min-h-[66svh]" : "min-h-[42svh]",
        "flex",
        className
      )}
      style={{ ["--px" as string]: 0, ["--py" as string]: 0 }}
    >
      <div className="absolute inset-0 blueprint-grid opacity-70" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(55%_60%_at_78%_40%,rgba(194,142,83,0.12),transparent_70%)]"
        aria-hidden="true"
      />
      {drawing && (
        <div
          className="absolute right-0 top-0 bottom-0 w-full lg:w-[36%] flex items-center justify-center pt-[var(--header-h)] opacity-20 lg:opacity-70 pointer-events-none lg:pr-8"
          style={{ transform: "translate3d(calc(var(--px) * -8px), calc(var(--py) * -5px), 0)" }}
          aria-hidden="true"
        >
          <IronDrawing kind={drawing} className="w-[90%] lg:w-full text-canvas-bg/80" delay={0.3} strokeWidth={1.2} />
        </div>
      )}
      <div className="relative z-10 w-full max-w-[88rem] mx-auto px-5 sm:px-8 flex flex-col justify-end">
        <Eyebrow className="mb-6 sm:mb-8 fade-in">{eyebrow}</Eyebrow>
        <Display as="h1" size={size} lines={lines} immediate />
        {lead && <Lead className="mt-8 sm:mt-10 fade-up [--d:0.35s]">{lead}</Lead>}
        {children && <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 fade-up [--d:0.5s]">{children}</div>}
      </div>
    </section>
  );
}
