import type { Metadata } from "next";
import { ABOUT } from "@/data/about";
import { constructPageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Display, Eyebrow } from "@/components/ui/Type";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { IronDrawing } from "@/components/ui/IronDrawing";

export const metadata: Metadata = constructPageMetadata({
  title: "About: How We Think About Iron",
  description:
    "iron’s irony makes ironwork that becomes part of the building. Read how we think about iron, design and the relationship between ironwork and architecture.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main-content" className="flex-1 flex flex-col">
      <PageHero eyebrow="About" lines={ABOUT.hero.lines} lead={ABOUT.hero.lead} drawing="architectural" />

      <Section tone="light" labelledBy="name-heading">
        <Eyebrow className="mb-8">{ABOUT.name.label}</Eyebrow>
        <h2 id="name-heading" className="sr-only">
          What the name means
        </h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
          {[ABOUT.name.iron, ABOUT.name.irony].map((n, i) => (
            <Reveal key={n.word} delay={i * 0.1}>
              <p className="display display-md">{n.word}</p>
              <p className="mt-6 text-xl leading-relaxed text-ink-secondary max-w-md">{n.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-16">
          <p className="font-serif italic text-3xl sm:text-5xl">{ABOUT.name.close}</p>
        </Reveal>
      </Section>

      <Section tone="dark" labelledBy="beliefs-heading">
        <Eyebrow className="mb-8">What we believe</Eyebrow>
        <Display id="beliefs-heading" lines={["Iron belongs", "to the building."]} />
        <ol className="mt-20 border-t border-canvas-bg/20">
          {ABOUT.beliefs.map((b, i) => (
            <Reveal key={b.title} as="li" className="grid md:grid-cols-[6rem_1fr_1.2fr] gap-x-10 gap-y-3 py-10 border-b border-canvas-bg/20">
              <span className="micro text-accent-amber pt-2">0{i + 1}</span>
              <h3 className="display text-[clamp(1.5rem,2.6vw,2.2rem)] leading-[1]">{b.title}</h3>
              <p className="text-[1.05rem] leading-relaxed text-canvas-bg/80 max-w-lg">{b.text}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="concrete" pad="md" labelledBy="path-heading">
        <Eyebrow className="mb-8">From idea to installation</Eyebrow>
        <h2 id="path-heading" className="sr-only">
          How a piece is made
        </h2>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-iron-950/15 border border-iron-950/15">
          {ABOUT.paths.map((p, i) => (
            <Reveal key={p.title} as="li" delay={i * 0.05} className="bg-concrete p-6 sm:p-8">
              <p className="micro text-ink-muted">0{i + 1}</p>
              <p className="display text-2xl mt-4">{p.title}</p>
              <p className="mt-3 text-[0.95rem] text-ink-secondary leading-relaxed">{p.text}</p>
            </Reveal>
          ))}
        </ol>
        <div className="mt-10">
          <MagneticButton href="/process" variant="outline-dark" arrow>
            See the full process
          </MagneticButton>
        </div>
      </Section>

      <Section tone="light" labelledBy="close-heading">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <Eyebrow className="mb-8">The standard</Eyebrow>
            <h2 id="close-heading" className="font-serif italic text-4xl sm:text-6xl leading-[1.05]">
              The best ironwork is the part of the building you stop noticing, because it was always meant to be there.
            </h2>
            <div className="mt-12">
              <MagneticButton href="start" variant="dark">
                Start a Project
              </MagneticButton>
            </div>
          </div>
          <IronDrawing kind="space" className="w-full h-72 text-iron-950" />
        </div>
      </Section>
    </main>
  );
}
