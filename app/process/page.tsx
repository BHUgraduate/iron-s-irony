import type { Metadata } from "next";
import { constructPageMetadata } from "@/lib/seo";
import { FAQ_DATA } from "@/data/faq";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Display, Eyebrow } from "@/components/ui/Type";
import { Process } from "@/components/sections/Process";
import { MagneticButton } from "@/components/motion/MagneticButton";

export const metadata: Metadata = constructPageMetadata({
  title: "Process: From Measuring to Installation",
  description:
    "How an ironwork project runs with iron’s irony: measure, design, fabricate, finish and install, and what we ask of you at each stage.",
  path: "/process",
});

const BEFORE = ["estimate", "price", "time"].map((id) => FAQ_DATA.find((f) => f.id === id)!);

export default function ProcessPage() {
  return (
    <main id="main-content" className="flex-1 flex flex-col">
      <PageHero
        eyebrow="Process"
        lines={["Measured.", "Drawn. Made."]}
        lead="Five stages from your first photograph to the finished piece fixed in place."
        drawing="assembly"
      />
      <Process full />
      <Section tone="concrete" pad="md" labelledBy="before">
        <Eyebrow className="mb-6">Before you begin</Eyebrow>
        <Display id="before" size="sm" lines={["Three honest", "answers."]} />
        <dl className="mt-14 grid md:grid-cols-3 gap-10">
          {BEFORE.map((f) => (
            <div key={f.id}>
              <dt className="font-serif italic text-2xl sm:text-3xl">{f.question}</dt>
              <dd className="mt-4 text-[1rem] leading-relaxed text-ink-secondary">{f.answer}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-14">
          <MagneticButton href="start" variant="dark">
            Talk About Your Project
          </MagneticButton>
        </div>
      </Section>
    </main>
  );
}
