import * as React from "react";
import { CUSTOM_WAYS } from "@/data/home";
import { LineReveal, Reveal } from "@/components/motion/Reveal";

/** Can you make something specifically for me? Mostly type, mostly still. */
export function Custom() {
  return (
    <section aria-labelledby="custom-heading" data-tone="light" className="bg-canvas-bg text-iron-950 py-32 sm:py-52">
      <div className="max-w-[88rem] mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="micro text-accent-ink mb-8">Custom work</p>
        </Reveal>
        <LineReveal
          id="custom-heading"
          className="display display-md max-w-5xl"
          lines={["Bring us", "the idea."]}
        />
        <p className="mt-10 max-w-xl text-lg sm:text-xl leading-relaxed text-ink-secondary">
          Most of what leaves the workshop was never in a catalogue. It started as something a client could
          point at, sketch or describe.
        </p>
        <ul className="mt-20 grid md:grid-cols-3 gap-x-12 gap-y-12 border-t border-iron-950/20 pt-10">
          {CUSTOM_WAYS.map((w, i) => (
            <Reveal key={w.title} as="li" delay={i * 0.08}>
              <p className="font-serif italic text-3xl">{w.title}</p>
              <p className="mt-3 text-[1rem] leading-relaxed text-ink-secondary max-w-xs">{w.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
