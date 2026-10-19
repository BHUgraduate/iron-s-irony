import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/services";
import { constructPageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Display, Eyebrow, Lead } from "@/components/ui/Type";
import { IronDrawing } from "@/components/ui/IronDrawing";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { StartWithType } from "@/components/ui/StartWithType";
import { Custom } from "@/components/sections/Custom";
import { cn } from "@/lib/utils";

export const metadata: Metadata = constructPageMetadata({
  title: "Services: Gates, Railings, Balconies, Staircases & Custom Ironwork",
  description:
    "What iron’s irony makes: gates, railings, balconies, staircases, grills, architectural ironwork and custom fabrication, designed around your space.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main id="main-content" className="flex-1 flex flex-col">
      <PageHero
        eyebrow="Services"
        lines={["What we", "shape."]}
        lead="Seven kinds of work, one way of doing it: designed around your space, fabricated to fit, fixed so it belongs."
        drawing="gate"
      >
        <MagneticButton href="start" variant="light">
          Start a Project
        </MagneticButton>
      </PageHero>

      <Section tone="light" pad="md" labelledBy="svc-index">
        <h2 id="svc-index" className="sr-only">
          All services
        </h2>
        {SERVICES_DATA.map((s, i) => {
          const flip = i % 2 === 1;
          return (
            <article
              key={s.slug}
              id={s.slug}
              className={cn(
                "grid lg:grid-cols-12 gap-x-12 gap-y-8 items-center py-16 sm:py-24",
                i > 0 && "border-t border-iron-950/15"
              )}
            >
              <Reveal className={cn("lg:col-span-6", flip && "lg:col-start-7 lg:row-start-1")}>
                <Link
                  href={`/services/${s.slug}`}
                  aria-label={`${s.title}: read more`}
                  className="group relative block bg-iron-950 grain aspect-[4/3] overflow-hidden"
                >
                  <div className="absolute inset-0 blueprint-grid" aria-hidden="true" />
                  <IronDrawing
                    kind={s.kind}
                    className="absolute inset-0 m-auto w-[80%] h-[80%] text-canvas-bg/85 transition-colors duration-700 group-hover:text-accent-amber"
                  />
                </Link>
              </Reveal>
              <Reveal className={cn("lg:col-span-5", flip ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-8")}>
                <Eyebrow>{s.number}</Eyebrow>
                <h3 className="display text-[clamp(2rem,4.4vw,3.6rem)] mt-4">
                  <Link href={`/services/${s.slug}`} className="link-reveal">
                    {s.title}
                  </Link>
                </h3>
                <p className="font-serif italic text-2xl sm:text-3xl mt-5 text-accent-ink">{s.line}</p>
                <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-secondary max-w-lg">{s.summary}</p>
                <ul className="mt-6 space-y-2 text-[0.95rem] text-ink-secondary">
                  {s.uses.map((u) => (
                    <li key={u} className="flex gap-3">
                      <span className="text-accent-ink" aria-hidden="true">
                        —
                      </span>
                      {u}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 micro text-ink-muted normal-case tracking-wide">Made to your site. Not a stock range.</p>
                <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
                  <Link href={`/services/${s.slug}`} className="micro font-medium link-reveal py-2">
                    Explore {s.title.toLowerCase()}
                  </Link>
                  <StartWithType type={s.type} className="micro text-ink-secondary hover:text-iron-950 link-reveal py-2">
                    Start a project
                  </StartWithType>
                </div>
              </Reveal>
            </article>
          );
        })}
      </Section>

      <Custom />
      <Section tone="dark" pad="md">
        <Eyebrow className="mb-6">Not sure which fits?</Eyebrow>
        <Display lines={["Describe it.", "We will place it."]} size="sm" />
        <Lead className="mt-8">Tell us what you want to create and where it goes. We will work out the rest with you.</Lead>
        <div className="mt-10">
          <MagneticButton href="start" variant="light">
            Discuss Your Requirement
          </MagneticButton>
        </div>
      </Section>
    </main>
  );
}
