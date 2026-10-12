import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Layers } from "lucide-react";
import { ProjectStudy } from "@/data/projects";

export interface ProjectCardProps {
  project: ProjectStudy;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="border border-border-structural bg-canvas-card flex flex-col justify-between group transition-all duration-300 hover:border-ink-primary hover:shadow-sm">
      <div>
        {/* Visual Showcase */}
        <div className="relative aspect-[16/11] w-full overflow-hidden bg-canvas-dark border-b border-border-structural">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Discipline Flag */}
          <div className="absolute top-3 left-3 bg-canvas-bg/95 backdrop-blur-sm border border-border-structural px-2.5 py-1 text-[10px] font-mono uppercase tracking-architectural text-ink-primary font-medium">
            {project.categoryLabel}
          </div>
          {/* Client Type Flag */}
          <div className="absolute top-3 right-3 bg-canvas-dark/85 text-canvas-bg border border-border-iron px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider">
            {project.clientType}
          </div>
        </div>
        
        {/* Content Body */}
        <div className="p-6 sm:p-7">
          <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted mb-2">
            <span>{project.locationPlaceholder}</span>
            <span>{project.completionYearPlaceholder}</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl text-ink-primary font-medium mb-2.5 group-hover:text-accent-bronze transition-colors">
            <Link href={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h3>
          <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-6 line-clamp-2">
            {project.summary}
          </p>
          
          {/* Technical Specs Highlight Strip */}
          <div className="border-t border-border-subtle pt-4 space-y-2 text-xs font-mono text-ink-secondary">
            <div className="flex items-start justify-between text-[11px] gap-2">
              <span className="text-ink-muted uppercase shrink-0">Primary Metallurgy:</span>
              <span className="text-ink-primary font-medium text-right line-clamp-1">
                {project.materialsUsed[0].split("(")[0]}
              </span>
            </div>
            <div className="flex items-start justify-between text-[11px] gap-2">
              <span className="text-ink-muted uppercase shrink-0">Finish Applied:</span>
              <span className="text-ink-primary text-right line-clamp-1">
                {project.finishApplied.split(":")[0]}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Action Footer */}
      <div className="p-5 sm:p-6 border-t border-border-structural bg-canvas-subtle/40 flex items-center justify-between">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-architectural text-ink-primary font-medium hover:text-accent-bronze transition-colors"
        >
          <span>Examine Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
        <span className="text-[10px] font-mono uppercase tracking-widest text-ink-muted">
          Atelier Study
        </span>
      </div>
    </article>
  );
}
