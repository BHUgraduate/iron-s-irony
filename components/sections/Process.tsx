"use client";

import * as React from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { CTA_LABELS, PROCESS_STAGES } from "@/data/home";
import { START_PROJECT_HREF } from "@/data/company";
import { LineReveal, Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { cn } from "@/lib/utils";

/**
 * One gate, assembled in five moves. Each stage owns a group of lines in the drawing;
 * scrolling advances the stage on large screens, and everything is shown complete elsewhere.
 */
function AssemblyDrawing({ stage }: { stage: number }) {
  const show = (min: number) => stage >= min;
  const fade = "transition-[opacity,stroke-dashoffset] duration-[900ms] ease-architectural";
  return (
    <svg viewBox="0 0 400 300" fill="none" strokeLinecap="square" className="w-full h-full" aria-hidden="true">
      {/* 00 Measure: dimension lines on the empty opening */}
      <g stroke="#9E7445" strokeWidth="1" className={cn(fade, show(0) ? "opacity-100" : "opacity-0")}>
        <path d="M60 30H340M60 24V36M340 24V36" />
        <path d="M30 60V270M24 60H36M24 270H36" />
        <path d="M60 270H340" strokeDasharray="4 6" />
      </g>
      {/* 01 Design: the outline and layout lines */}
      <g stroke="#E7E4DD" strokeOpacity="0.55" strokeWidth="1" strokeDasharray="5 5" className={cn(fade, show(1) ? "opacity-100" : "opacity-0")}>
        <path d="M60 60H340V270H60Z" />
        <path d="M60 100H340M60 230H340M200 60V270" />
      </g>
      {/* 02 Fabricate: solid frame and pickets */}
      <g stroke="#E7E4DD" strokeWidth="2.2" className={cn(fade, show(2) ? "opacity-100" : "opacity-0")}>
        <path d="M60 60H340V270H60Z" />
        <path d="M60 100H340M60 230H340M200 60V270" />
        {Array.from({ length: 11 }, (_, i) => 80 + i * 24).map((x) =>
          x === 200 ? null : <path key={x} d={`M${x} 100V230`} strokeWidth="1.6" />
        )}
      </g>
      {/* 03 Finish: weld points and a warm coat edge */}
      <g className={cn(fade, show(3) ? "opacity-100" : "opacity-0")}>
        <path d="M60 60H340V270H60Z" stroke="#C28E53" strokeWidth="1" transform="translate(-4 -4) scale(1.02)" />
        {[100, 230].flatMap((y) => [60, 200, 340].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="3.2" fill="#C28E53" />))}
      </g>
      {/* 04 Install: ground and wall context */}
      <g stroke="#E7E4DD" strokeOpacity="0.5" strokeWidth="1.2" className={cn(fade, show(4) ? "opacity-100" : "opacity-0")}>
        <path d="M10 270H390M10 280H390" />
        <path d="M44 40V270M356 40V270" />
        {Array.from({ length: 6 }, (_, i) => 60 + i * 40).map((y) => (
          <path key={y} d={`M24 ${y}H44M356 ${y}H376`} />
        ))}
      </g>
    </svg>
  );
}

export function Process() {
  const reduce = useReducedMotion();
  const sectionRef = React.useRef<HTMLElement>(null);
  const [stage, setStage] = React.useState(PROCESS_STAGES.length - 1);
  const [pinned, setPinned] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => {
      const on = mq.matches && !reduce;
      setPinned(on);
      setStage(on ? 0 : PROCESS_STAGES.length - 1);
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reduce]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!pinned) return;
    const next = Math.min(PROCESS_STAGES.length - 1, Math.floor(v * PROCESS_STAGES.length * 0.999));
    setStage((cur) => (cur === next ? cur : next));
  });

  return (
    <section
      id="process"
      ref={sectionRef}
      aria-labelledby="process-heading"
      className={cn("relative bg-canvas-bg text-iron-950", pinned ? "h-[420vh]" : "")}
    >
      <div
        className={cn(
          "max-w-[88rem] mx-auto px-5 sm:px-8",
          pinned ? "sticky top-0 h-screen flex flex-col justify-center pt-[var(--header-h)]" : "py-28 sm:py-40"
        )}
      >
        <Reveal>
          <p className="micro text-accent-bronze mb-6">How it works</p>
        </Reveal>
        <LineReveal id="process-heading" className="display display-sm" lines={["Measured. Drawn. Made.", "Finished. Fixed."]} />

        <div className="mt-12 lg:mt-14 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <ol className="border-t border-iron-950/20">
            {PROCESS_STAGES.map((s, i) => {
              const on = i === stage || !pinned;
              return (
                <li key={s.id} className="border-b border-iron-950/20">
                  <div
                    className={cn(
                      "flex gap-5 py-4 lg:py-5 transition-opacity duration-500",
                      on ? "opacity-100" : "opacity-35"
                    )}
                  >
                    <span className={cn("micro w-7 shrink-0 pt-2", i <= stage && pinned ? "text-accent-bronze" : "text-ink-muted")}>
                      {s.number}
                    </span>
                    <div>
                      <h3 className="display text-[clamp(1.5rem,2.6vw,2.2rem)]">{s.title}</h3>
                      <p
                        className={cn(
                          "text-[1rem] leading-relaxed text-ink-secondary max-w-md overflow-hidden transition-[max-height,margin] duration-700 ease-architectural",
                          on ? "max-h-40 mt-3" : "max-h-0 mt-0"
                        )}
                      >
                        {s.text}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="relative bg-iron-950 grain aspect-[4/3] w-full">
            <div className="absolute inset-0 blueprint-grid" aria-hidden="true" />
            <motion.div className="absolute inset-0 p-6 sm:p-10">
              <AssemblyDrawing stage={stage} />
            </motion.div>
            <p className="absolute left-4 bottom-3 micro text-canvas-bg/50">
              Stage {PROCESS_STAGES[Math.max(0, stage)].number} / 05
            </p>
          </div>
        </div>

        <Reveal className="mt-10 lg:mt-12">
          <MagneticButton href={START_PROJECT_HREF} variant="dark">
            {CTA_LABELS.process}
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
