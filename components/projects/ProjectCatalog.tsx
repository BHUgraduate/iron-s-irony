"use client";

import * as React from "react";
import { ProjectStudy, PROJECT_CATEGORIES } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SlidersHorizontal, RotateCcw } from "lucide-react";

export interface ProjectCatalogProps {
  projects: ProjectStudy[];
}

export function ProjectCatalog({ projects }: ProjectCatalogProps) {
  const [activeCategory, setActiveCategory] = React.useState<string>("all");

  const filteredProjects = React.useMemo(() => {
    if (activeCategory === "all") return projects;

    return projects.filter((project) => {
      if (activeCategory === "staircases") {
        return project.category === "staircases" || project.category === "railings";
      }
      if (activeCategory === "gates") {
        return project.category === "gates" || project.category === "residential";
      }
      if (activeCategory === "architectural") {
        return project.category === "architectural" || project.category === "commercial";
      }
      if (activeCategory === "custom") {
        return project.category === "custom" || project.category === "decorative";
      }
      return project.category === activeCategory;
    });
  }, [projects, activeCategory]);

  return (
    <div className="space-y-8">
      {/* Category Filter Toolbar */}
      <div className="border border-border-structural bg-canvas-card p-4 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {PROJECT_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-3.5 py-2 text-xs font-mono uppercase tracking-architectural border transition-all duration-200 select-none ${
                    isActive
                      ? "bg-ink-primary text-canvas-bg border-ink-primary"
                      : "bg-canvas-subtle text-ink-secondary border-border-structural hover:border-ink-primary hover:text-ink-primary"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Counter Display */}
          <div className="text-xs font-mono text-ink-muted">
            Showing <span className="text-ink-primary font-medium">{filteredProjects.length}</span>{" "}
            {filteredProjects.length === 1 ? "commission" : "commissions"}
          </div>
        </div>
      </div>

      {/* Grid of Projects */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="border border-border-structural bg-canvas-card p-12 text-center space-y-4">
          <div className="w-12 h-12 border border-border-structural bg-canvas-subtle flex items-center justify-center text-accent-bronze mx-auto">
            <SlidersHorizontal className="w-5 h-5" aria-hidden="true" />
          </div>
          <h3 className="font-serif text-2xl text-ink-primary font-medium">
            No Case Studies Under this Discipline Filter
          </h3>
          <p className="text-xs sm:text-sm text-ink-secondary max-w-md mx-auto leading-relaxed">
            Our atelier undertakes custom commissions beyond published studies. Contact our workshop with your drawings to review related fabrication archives.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className="px-5 py-2.5 bg-ink-primary text-canvas-bg font-mono text-xs uppercase tracking-architectural hover:bg-accent-bronze transition-colors"
            >
              Reset Category Filter
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
