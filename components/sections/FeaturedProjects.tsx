import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FEATURED_PROJECTS } from "@/data/projects";
import { Button } from "@/components/ui/Button";

export function FeaturedProjects() {
  return (
    <section className="py-16 sm:py-24 bg-canvas-subtle border-b border-border-structural">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="Completed Commissions"
            title="Recent Architectural Ironwork"
            description="Selected case studies detailing how we resolve complex structural challenges, anchoring requirements, and fine finish specifications."
            className="mb-0"
          />
          <div className="mt-6 md:mt-0">
            <Button href="/projects" variant="outline" size="md">
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* 3-Column Portfolio Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.slice(0, 3).map((project) => (
            <article
              key={project.id}
              className="bg-canvas-card border border-border-structural flex flex-col group overflow-hidden"
            >
              {/* Image Preview with Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-canvas-dark border-b border-border-structural">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-canvas-bg/95 border border-border-structural px-2.5 py-1 text-[10px] font-mono uppercase tracking-architectural text-ink-primary">
                  {project.categoryLabel}
                </div>
              </div>

              {/* Study Information */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted mb-2">
                    <span>{project.clientType}</span>
                    <span>{project.completionYearPlaceholder}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-ink-primary font-medium mb-3 group-hover:text-accent-bronze transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-6">
                    {project.summary}
                  </p>
                </div>

                <div className="border-t border-border-subtle pt-4 mt-auto">
                  <div className="text-[11px] font-mono text-ink-muted mb-3">
                    <span className="block font-medium text-ink-primary">Finish:</span>
                    <span className="line-clamp-1">{project.finishApplied}</span>
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center justify-between w-full text-xs font-mono uppercase tracking-architectural text-ink-primary hover:text-accent-bronze font-medium transition-colors"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}