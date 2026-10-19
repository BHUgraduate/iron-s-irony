import type { Metadata } from "next";
import { AUDIENCES } from "@/data/customers";
import { constructPageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Display, Eyebrow } from "@/components/ui/Type";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";

export const metadata: Metadata = constructPageMetadata({
  title: "Who We Work With: Homeowners, Architects, Builders & Businesses",
  description:
    "iron’s irony works with homeowners, architects and designers, builders and contractors, and businesses. See what to bring for each.",
  path: "/customers",
});

export default function CustomersPage() {
  return (
    <main id="main-content" className="flex-1 flex flex-col">
      <PageHero
        eyebrow="Who we work with"
        lines={["Made for the", "people who build."]}
        lead="Different people come to us with different starting points. Whichever is yours, you can begin with what you have."
        drawing="frame"
      />
      <Section tone="light" labelledBy="aud">
        <h2 id="aud" className="sr-only">
          Audiences
        </h2>
        <ul className="border-t border-iron-950/20">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.id} as="li" className="grid lg:grid-cols-[6rem_1fr_1fr_1fr] gap-x-10 gap-y-6 py-12 sm:py-16 border-b border-iron-950/20">
              <span className="micro text-ink-muted pt-3">0{i + 1}</span>
              <div>
                <h3 className="display text-[clamp(1.8rem,3.4vw,2.8rem)]">{a.title}</h3>
                <p className="font-serif italic text-2xl mt-4 text-accent-ink">{a.line}</p>
              </div>
              <p className="text-[1.02rem] leading-relaxed text-ink-secondary max-w-md">{a.text}</p>
              <div>
                <p className="micro text-ink-muted mb-3">Bring</p>
                <ul className="space-y-2 text-[1rem]">
                  {a.bring.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="text-accent-ink" aria-hidden="true">
                        —
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>
      <Section tone="dark" pad="md">
        <Eyebrow className="mb-6">Whoever you are</Eyebrow>
        <Display size="sm" lines={["Start with", "what you have."]} />
        <div className="mt-10">
          <MagneticButton href="start" variant="light">
            Start a Project
          </MagneticButton>
        </div>
      </Section>
    </main>
  );
}
