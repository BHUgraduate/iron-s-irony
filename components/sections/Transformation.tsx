import * as React from "react";
import { TRANSFORMATION } from "@/data/home";
import { LineReveal, Reveal } from "@/components/motion/Reveal";
import { IronDrawing } from "@/components/ui/IronDrawing";

/** Why should I care? The conceptual spine: raw material, craft, structure, finished space. */
export function Transformation() {
  const t = TRANSFORMATION;
  return (
    <section aria-labelledby="transformation-heading" data-tone="light" className="relative bg-canvas-bg text-iron-950 py-28 sm:py-44">
      <div className="max-w-[88rem] mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="micro text-accent-ink mb-8">{t.label}</p>
        </Reveal>
        <LineReveal id="transformation-heading" className="display display-md max-w-5xl" lines={t.lines} />
        <Reveal className="mt-10 max-w-xl">
          <p className="text-lg sm:text-xl leading-relaxed text-ink-secondary">{t.lead}</p>
        </Reveal>

        <ol className="mt-20 sm:mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-iron-950/20">
          {t.stages.map((s, i) => (
            <li
              key={s.label}
              className="relative py-8 sm:py-10 sm:pr-8 border-b lg:border-b-0 border-iron-950/20 lg:border-r last:border-r-0 lg:pl-8 first:lg:pl-0"
            >
              <p className="micro text-ink-muted mb-6">
                0{i + 1} <span aria-hidden="true">/</span> 04
              </p>
              <IronDrawing
                kind={s.kind}
                delay={i * 0.25}
                className="w-full h-36 text-iron-900 mb-6"
              />
              <h3 className="font-serif italic text-3xl">{s.label}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-secondary max-w-[17rem]">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
