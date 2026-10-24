import * as React from "react";
import { Reveal } from "@/components/motion/Reveal";

const STEPS = [
  { n: "01", t: "Choose a design", d: "Find a piece you like, or send us a photo of one you have seen." },
  { n: "02", t: "Discuss requirements", d: "Tell us about the opening, the building and how it is used." },
  { n: "03", t: "Customise", d: "Dimensions, material, finish and detailing are adapted to your project." },
  { n: "04", t: "Receive a quotation", d: "You see what is proposed and what it costs before anything is made." },
] as const;

/** How a catalogue design becomes a quotation. Shown on dark or light grounds. */
export function HowItWorks({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <ol className={`grid sm:grid-cols-2 lg:grid-cols-4 border-t ${dark ? "border-canvas-bg/25" : "border-iron-950/25"}`}>
      {STEPS.map((s, i) => (
        <Reveal as="li" key={s.n} delay={i * 0.06} className={`py-7 sm:py-9 lg:pr-8 border-b lg:border-b-0 ${dark ? "border-canvas-bg/15" : "border-iron-950/15"}`}>
          <p className={`micro ${dark ? "text-accent-amber" : "text-accent-ink"}`}>{s.n}</p>
          <p className="mt-3 font-serif text-[1.6rem] leading-tight">{s.t}</p>
          <p className={`mt-3 text-[0.95rem] leading-relaxed ${dark ? "text-canvas-bg/70" : "text-ink-secondary"}`}>{s.d}</p>
        </Reveal>
      ))}
    </ol>
  );
}
