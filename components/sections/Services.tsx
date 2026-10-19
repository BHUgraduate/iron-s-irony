"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { CTA_LABELS, SERVICES_INDEX, type ServiceEntry } from "@/data/home";
import { START_PROJECT_HREF } from "@/data/company";
import { LineReveal, Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { IronDrawing } from "@/components/ui/IronDrawing";
import { EASE_IRON, EVENT_PREFILL } from "@/lib/motion";
import { cn } from "@/lib/utils";

function Panel({ s, compact = false }: { s: ServiceEntry; compact?: boolean }) {
  return (
    <div className={cn("text-canvas-bg", compact ? "" : "h-full flex flex-col")}>
      <IronDrawing
        key={s.id}
        kind={s.kind}
        animate={!compact}
        className={cn("w-full text-canvas-bg/85", compact ? "h-52" : "h-[min(46vh,22rem)]")}
      />
      <div className={cn(compact ? "mt-6" : "mt-auto pt-8")}>
        <p className="font-serif italic text-2xl text-accent-amber">{s.line}</p>
        <p className="mt-4 text-[1rem] leading-relaxed text-canvas-bg/75 max-w-md">{s.detail}</p>
        <ul className="mt-6 space-y-2 micro text-canvas-bg/60 normal-case tracking-wide">
          {s.uses.map((u) => (
            <li key={u} className="flex gap-3">
              <span className="text-accent-amber" aria-hidden="true">
                —
              </span>
              {u}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 items-center">
          <Link
            href={START_PROJECT_HREF}
            onClick={() =>
              window.dispatchEvent(new CustomEvent(EVENT_PREFILL, { detail: { type: s.type } }))
            }
            className="micro font-medium text-canvas-bg link-reveal py-2"
          >
            Start a project: {s.title.toLowerCase()}
          </Link>
          <Link href={s.href} className="micro text-canvas-bg/60 hover:text-canvas-bg link-reveal py-2">
            More about this work
          </Link>
        </div>
      </div>
    </div>
  );
}

/**
 * Can you make what I need? Desktop: a typographic index with one large drawing that changes
 * as you hover or focus. Mobile: the same list as a vertical accordion.
 */
export function Services() {
  const reduce = useReducedMotion();
  const [active, setActive] = React.useState(SERVICES_INDEX[0].id);
  const current = SERVICES_INDEX.find((s) => s.id === active) ?? SERVICES_INDEX[0];

  return (
    <section id="services" aria-labelledby="services-heading" className="bg-concrete text-iron-950 py-28 sm:py-40">
      <div className="max-w-[88rem] mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="micro text-accent-bronze mb-8">Services</p>
        </Reveal>
        <LineReveal id="services-heading" className="display display-md" lines={["What we", "shape."]} />

        <div className="mt-16 sm:mt-24 grid lg:grid-cols-[1.1fr_1fr] gap-x-16 items-start">
          <ul className="border-t border-iron-950/20">
            {SERVICES_INDEX.map((s) => {
              const isActive = s.id === active;
              return (
                <li key={s.id} className="border-b border-iron-950/20">
                  <button
                    type="button"
                    id={`svc-btn-${s.id}`}
                    aria-expanded={isActive}
                    aria-controls={`svc-panel-${s.id}`}
                    onClick={() => setActive(s.id)}
                    onMouseEnter={() => window.matchMedia("(min-width:1024px)").matches && setActive(s.id)}
                    onFocus={() => window.matchMedia("(min-width:1024px)").matches && setActive(s.id)}
                    className="group w-full flex items-baseline gap-5 sm:gap-8 py-5 sm:py-7 text-left"
                  >
                    <span className="micro text-ink-muted w-7 shrink-0">{s.number}</span>
                    <span
                      className={cn(
                        "display text-[clamp(1.7rem,4.6vw,3.6rem)] transition-[color,transform] duration-500 ease-architectural",
                        isActive ? "text-iron-950 lg:translate-x-3" : "text-iron-950/40 lg:group-hover:text-iron-950"
                      )}
                    >
                      {s.title}
                    </span>
                    <Plus
                      className={cn(
                        "ml-auto w-5 h-5 self-center shrink-0 lg:hidden transition-transform duration-500",
                        isActive && "rotate-45"
                      )}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Mobile: panel opens inline, so the drawing sits right under the thumb */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        id={`svc-panel-${s.id}`}
                        role="region"
                        aria-labelledby={`svc-btn-${s.id}`}
                        className="lg:hidden overflow-hidden"
                        initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                        exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: EASE_IRON }}
                      >
                        <div className="bg-iron-950 p-6 mb-5">
                          <Panel s={s} compact />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          {/* Desktop: one sticky stage */}
          <div className="hidden lg:block sticky top-[calc(var(--header-h)+2rem)]">
            <div className="relative bg-iron-950 grain p-10 min-h-[40rem]" aria-live="polite">
              <div className="absolute inset-0 blueprint-grid opacity-60" aria-hidden="true" />
              <div className="relative h-full min-h-[36rem]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={current.id}
                    initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: EASE_IRON }}
                    className="h-full min-h-[36rem]"
                  >
                    <Panel s={current} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        <Reveal className="mt-16 sm:mt-24 flex">
          <MagneticButton href={START_PROJECT_HREF} variant="dark">
            {CTA_LABELS.services}
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
