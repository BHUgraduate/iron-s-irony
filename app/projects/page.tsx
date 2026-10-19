import type { Metadata } from "next";
import { WORK } from "@/data/projects";
import { constructPageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Display, Eyebrow, Lead } from "@/components/ui/Type";
import { WorkList } from "@/components/sections/Work";
import { MagneticButton } from "@/components/motion/MagneticButton";

export const metadata: Metadata = constructPageMetadata({
  title: "Work: The Kinds of Ironwork We Make",
  description:
    "Representative examples of the gates, railings, balconies, staircases, grills and custom pieces iron’s irony makes, and how each one comes together.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <main id="main-content" className="flex-1 flex flex-col">
      <PageHero
        eyebrow="Work"
        lines={["Made", "to last."]}
        lead="Six kinds of piece, each shown as the brief it answers: what is made, why people ask for it, and what makes it interesting."
        drawing="staircase"
      />

      <Section tone="dark" pad="md">
        <div className="max-w-2xl border-l-2 border-accent-amber pl-6">
          <Eyebrow className="mb-3">A note on what you are seeing</Eyebrow>
          <p className="text-lg leading-relaxed text-canvas-bg/80">
            These are representative examples, drawn to show the kind of work we take on. They are not photographs of
            completed projects. If you would like to see previous work, ask us directly and we will share what we can.
          </p>
        </div>
        <WorkList items={WORK} className="mt-20 sm:mt-28" />
      </Section>

      <Section tone="light" pad="md">
        <Eyebrow className="mb-6">Your turn</Eyebrow>
        <Display size="sm" lines={["Imagine it on", "your building."]} />
        <Lead className="mt-8">Tell us what you have in mind. A photo of the space is a good place to begin.</Lead>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <MagneticButton href="start" variant="dark">
            Build Something Like This
          </MagneticButton>
          <MagneticButton href="/services" variant="outline-dark" arrow={false}>
            See all services
          </MagneticButton>
        </div>
      </Section>
    </main>
  );
}
