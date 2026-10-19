import * as React from "react";
import Link from "next/link";
import { WORK, type WorkEntry } from "@/data/projects";
import { CTA_LABELS } from "@/data/home";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Display, Eyebrow, Lead } from "@/components/ui/Type";
import { Section } from "@/components/ui/Section";
import { WorkVisual } from "@/components/ui/WorkVisual";
import { cn } from "@/lib/utils";

export function WorkList({ items, className }: { items: WorkEntry[]; className?: string }) {
  return (
    <div className={className}>
      {items.map((w, i) => {
          const flip = i % 2 === 1;
          return (
            <article
              key={w.slug}
              className={cn("grid lg:grid-cols-12 gap-x-10 gap-y-6 items-end", i > 0 && "mt-24 sm:mt-40")}
            >
              <Reveal className={cn("lg:col-span-8", flip && "lg:col-start-5 lg:row-start-1")}>
                <Link href={`/projects/${w.slug}`} aria-label={`${w.title}, open`} className="block">
                  <WorkVisual entry={w} className="aspect-[4/3] sm:aspect-[16/10]" priority={i === 0} />
                </Link>
              </Reveal>
              <Reveal className={cn("lg:col-span-4", flip && "lg:col-start-1 lg:row-start-1")}>
                <p className="micro text-accent-amber">
                  {String(i + 1).padStart(2, "0")} · {w.typeLabel}
                </p>
                <h3 className="display text-[clamp(1.6rem,3vw,2.4rem)] mt-4 leading-[0.98]">
                  <Link href={`/projects/${w.slug}`} className="link-reveal">
                    {w.title}
                  </Link>
                </h3>
                <p className="mt-5 text-[1rem] leading-relaxed text-canvas-bg/75">{w.summary}</p>
                <Link href={`/projects/${w.slug}`} className="mt-6 inline-block micro text-canvas-bg link-reveal py-2">
                  Read the brief
                </Link>
              </Reveal>
            </article>
          );
        })}
    </div>
  );
}

/** Can you actually do it well? Representative briefs, drawn, until real project photography is added. */
export function Work({ count = 4 }: { count?: number }) {
  const items = WORK.slice(0, count);
  return (
    <Section id="work" tone="dark" labelledBy="work-heading">
      <Reveal>
        <Eyebrow className="mb-8">Selected work</Eyebrow>
      </Reveal>
      <Display id="work-heading" lines={["Made", "to last."]} />
      <Reveal className="mt-8 max-w-xl space-y-4">
        <Lead>Every piece begins as a drawing and ends as part of a building. These are the kinds of work we take on.</Lead>
        <p className="micro text-canvas-bg/60 normal-case tracking-wide">
          Representative examples, drawn to show how each piece comes together. Photographs of completed projects will appear here.
        </p>
      </Reveal>

      <WorkList items={items} className="mt-20 sm:mt-32" />

      <Reveal className="mt-24 sm:mt-40 flex flex-col sm:flex-row gap-3">
        <MagneticButton href="start" variant="light">
          {CTA_LABELS.work}
        </MagneticButton>
        <MagneticButton href="/projects" variant="outline-light" arrow={false}>
          All work
        </MagneticButton>
      </Reveal>
    </Section>
  );
}
