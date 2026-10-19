"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_PROJECTS, type ProjectStudy } from "@/data/projects";
import { CTA_LABELS } from "@/data/home";
import { START_PROJECT_HREF } from "@/data/company";
import { LineReveal, Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { IronDrawing, type DrawingKind } from "@/components/ui/IronDrawing";
import { cn } from "@/lib/utils";

const KIND: Record<string, DrawingKind> = {
  staircases: "staircase",
  gates: "gate",
  architectural: "architectural",
  decorative: "balcony",
  custom: "custom",
};

/** Each project sits as a drawing first. Hover, focus or tap develops the photograph out of it. */
function WorkItem({ project, index }: { project: ProjectStudy; index: number }) {
  const [developed, setDeveloped] = React.useState(false);
  const [broken, setBroken] = React.useState(false);
  const flip = index % 2 === 1;
  const kind = KIND[project.category] ?? "custom";

  return (
    <article
      className={cn(
        "grid lg:grid-cols-12 gap-x-10 gap-y-6 items-end",
        index > 0 && "mt-24 sm:mt-40"
      )}
    >
      <div className={cn("lg:col-span-8", flip && "lg:col-start-5 lg:row-start-1")}>
        <button
          type="button"
          aria-pressed={developed}
          onClick={() => setDeveloped((d) => !d)}
          onPointerEnter={(e) => e.pointerType === "mouse" && setDeveloped(true)}
          onPointerLeave={(e) => e.pointerType === "mouse" && setDeveloped(false)}
          className="group relative block w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-iron-900 text-left"
        >
          <span className="sr-only">
            {developed ? "Show the drawing" : "Show the photograph"} for {project.title}
          </span>
          <div className="absolute inset-0 blueprint-grid" aria-hidden="true" />
          {!broken && (
            <Image
              src={project.heroImage}
              alt={`${project.title} (sample image)`}
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              onError={() => setBroken(true)}
              className={cn(
                "object-cover transition-[filter,transform,opacity] duration-[1200ms] ease-architectural",
                developed ? "opacity-100 scale-100 brightness-100" : "opacity-45 scale-[1.04] brightness-75 grayscale"
              )}
            />
          )}
          <IronDrawing
            kind={kind}
            animate={false}
            className={cn(
              "absolute inset-0 m-auto w-[80%] h-[80%] text-canvas-bg transition-opacity duration-[1200ms] ease-architectural",
              developed && !broken ? "opacity-0" : "opacity-80"
            )}
          />
          <span className="absolute left-4 top-4 micro bg-iron-950/80 text-canvas-bg px-3 py-1.5">
            {developed ? "Photograph" : "Drawing"}
          </span>
          <span className="absolute right-4 top-4 micro bg-canvas-bg text-iron-950 px-3 py-1.5">Sample</span>
          <span className="absolute left-4 bottom-4 micro text-canvas-bg/70 lg:hidden" aria-hidden="true">
            Tap to {developed ? "see drawing" : "develop"}
          </span>
        </button>
      </div>

      <div className={cn("lg:col-span-4", flip && "lg:col-start-1 lg:row-start-1")}>
        <p className="micro text-accent-amber">
          {String(index + 1).padStart(2, "0")} · {project.categoryLabel}
        </p>
        <h3 className="display text-[clamp(1.6rem,3vw,2.4rem)] mt-4 leading-[0.98]">{project.title}</h3>
        <p className="mt-5 text-[1rem] leading-relaxed text-canvas-bg/70">{project.summary}</p>
        <Link
          href={`${START_PROJECT_HREF}`}
          className="mt-6 inline-block micro text-canvas-bg link-reveal py-2"
        >
          Start something like this
        </Link>
      </div>
    </article>
  );
}

/** Can you actually do it well? */
export function Work() {
  const items = FEATURED_PROJECTS.slice(0, 4);
  return (
    <section id="work" aria-labelledby="work-heading" className="relative bg-iron-950 text-canvas-bg grain py-28 sm:py-44">
      <div className="relative max-w-[88rem] mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="micro text-accent-amber mb-8">Selected work</p>
        </Reveal>
        <LineReveal id="work-heading" className="display display-md" lines={["Made", "to last."]} />
        <Reveal className="mt-8 max-w-xl">
          <p className="text-lg leading-relaxed text-canvas-bg/70">
            Every piece begins as a drawing and ends as part of a building. Tap or hover a project to develop it.
          </p>
          <p className="mt-4 micro text-canvas-bg/45 normal-case tracking-wide">
            Project images and descriptions shown here are illustrative samples while the workshop’s own
            photography is added.
          </p>
        </Reveal>

        <div className="mt-20 sm:mt-32">
          {items.map((p, i) => (
            <WorkItem key={p.id} project={p} index={i} />
          ))}
        </div>

        <Reveal className="mt-24 sm:mt-40 flex flex-col sm:flex-row gap-3">
          <MagneticButton href={START_PROJECT_HREF} variant="light">
            {CTA_LABELS.work}
          </MagneticButton>
          <MagneticButton href="/projects" variant="outline-light" arrow={false}>
            All projects
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
