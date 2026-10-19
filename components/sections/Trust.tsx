import * as React from "react";
import { TRUST } from "@/data/home";
import { LineReveal, Reveal } from "@/components/motion/Reveal";

/** Can I trust you? Specific working practices, no invented numbers. */
export function Trust() {
  return (
    <section aria-labelledby="trust-heading" data-tone="concrete" className="bg-concrete text-iron-950 py-28 sm:py-44">
      <div className="max-w-[88rem] mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="micro text-accent-ink mb-8">Trust</p>
        </Reveal>
        <LineReveal id="trust-heading" className="display display-md" lines={TRUST.lines} />
        <p className="mt-10 max-w-lg text-lg leading-relaxed text-ink-secondary">{TRUST.lead}</p>

        <dl className="mt-20 grid sm:grid-cols-2 gap-px bg-iron-950/15 border border-iron-950/15">
          {TRUST.points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} className="bg-concrete p-8 sm:p-12">
              <dt className="font-serif italic text-3xl">{p.title}</dt>
              <dd className="mt-4 text-[1rem] leading-relaxed text-ink-secondary max-w-sm">{p.text}</dd>
            </Reveal>
          ))}
        </dl>

        <p className="mt-12 micro text-ink-muted normal-case tracking-wide">
          We work with {TRUST.audiences.join(", ").toLowerCase()}.
        </p>
      </div>
    </section>
  );
}
