"use client";

import { EASE_IRON } from "@/lib/motion";
import * as React from "react";
import { m, useReducedMotion } from "framer-motion";
import { HERO_COPY } from "@/data/home";
import { LineReveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { usePointerParallax } from "@/components/motion/usePointerParallax";
import { drawingPaths } from "@/components/ui/IronDrawing";


const GATE = drawingPaths("gate");

/**
 * The first impression: a monumental gate drawn in light, line by line, over a dark workshop ground.
 * It is a drawing on purpose. We have no hero photograph we can honestly claim, so we show the
 * thing a fabricator makes first: the drawing.
 */
export function Hero() {
  const reduce = useReducedMotion();
  const stage = usePointerParallax<HTMLElement>();

  return (
    <section
      ref={stage}
      data-hero="dark"
      data-tone="dark"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-iron-950 text-canvas-bg grain -mt-[var(--header-h)] min-h-[100svh] flex"
      style={{ ["--px" as string]: 0, ["--py" as string]: 0 }}
    >
      <div className="absolute inset-0 blueprint-grid opacity-70" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(60%_50%_at_72%_45%,rgba(194,142,83,0.14),transparent_70%)]"
        aria-hidden="true"
      />

      {/* Gate drawing, two depth layers that drift a few pixels against the pointer */}
      <div
        className="absolute inset-y-0 right-0 w-full lg:w-[52%] flex items-start lg:items-center justify-center pt-[calc(var(--header-h)+1rem)] lg:pt-[var(--header-h)] will-change-transform"
        style={{ transform: "translate3d(calc(var(--px) * -10px), calc(var(--py) * -6px), 0)" }}
        aria-hidden="true"
      >
        <svg
          data-iron-drawing
          viewBox="0 0 400 300"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
          className="w-full sm:w-[80%] lg:w-full max-w-none text-canvas-bg/80 opacity-45 lg:opacity-100 lg:-translate-y-[10%]"
        >
          {GATE.map((d, i) => (
            <m.path
              key={i}
              d={d}
              initial={reduce ? { opacity: 0 } : { pathLength: 0, opacity: 0 }}
              animate={reduce ? { opacity: 1 } : { pathLength: 1, opacity: 1 }}
              transition={{ duration: reduce ? 0.6 : 2.4, delay: reduce ? 0 : 0.35 + i * 0.03, ease: EASE_IRON }}
            />
          ))}
        </svg>
        <span
          className="absolute right-[8%] top-[22%] hidden lg:block micro text-canvas-bg/40"
          style={{ transform: "translate3d(calc(var(--px) * 6px), calc(var(--py) * 4px), 0)" }}
        >
          Elevation
        </span>
      </div>

      <div className="relative z-10 w-full max-w-[88rem] mx-auto px-5 sm:px-8 flex flex-col justify-end pt-[calc(var(--header-h)+3rem)] pb-14 sm:pb-20">
        <p className="micro text-accent-amber mb-6 sm:mb-8 fade-in" style={{ ["--d" as string]: "0.1s" }}>
          {HERO_COPY.eyebrow}
        </p>

        <LineReveal
          as="h1"
          id="hero-heading"
          immediate
          delay={0.1}
          className="display display-lg"
          lines={HERO_COPY.lines}
        />

        <div className="mt-8 sm:mt-12 flex flex-col gap-8 max-w-xl fade-up" style={{ ["--d" as string]: "0.5s" }}>
          <p className="text-lg sm:text-xl leading-snug text-canvas-bg/75 max-w-md">{HERO_COPY.lead}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <MagneticButton href="start" variant="light">
              {HERO_COPY.primary}
            </MagneticButton>
            <MagneticButton href="/projects" variant="outline-light" arrow={false}>
              {HERO_COPY.secondary}
            </MagneticButton>
          </div>
        </div>
      </div>

      <span className="absolute left-5 sm:left-8 bottom-4 micro text-canvas-bg/35 hidden sm:block" aria-hidden="true">
        Scroll
      </span>
    </section>
  );
}
