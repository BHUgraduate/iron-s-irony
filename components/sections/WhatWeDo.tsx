import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Shield, Layers, Sparkles, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhatWeDo() {
  const pillars = [
    {
      title: "Building Ironwork",
      slug: "/services/building-ironwork",
      icon: Shield,
      description:
        "Structural, boundary, and perimeter defense systems engineered to withstand weather stresses and daily usage.",
      highlights: ["Security Gates & Access", "Window Grilles & Guards", "Structural Balconies & Posts"],
    },
    {
      title: "Architectural Ironwork",
      slug: "/services/architectural-ironwork",
      icon: Layers,
      description:
        "High-specification internal and external spatial features executing complex architectural blueprints with precision.",
      highlights: ["Continuous Railings & Stairs", "Slender Glazed Steel Screens", "Bespoke Porticos & Canopies"],
    },
    {
      title: "Decorative Ironwork",
      slug: "/services/decorative-ironwork",
      icon: Sparkles,
      description:
        "Artisanal ornamentation, traditional hot-forged scrolls, decorative screens, and heritage replication craft.",
      highlights: ["Hand-Forged Motifs & Scrolls", "Courtyard Garden Arches", "Custom Decorative Panels"],
    },
    {
      title: "Custom Metal Fabrication",
      slug: "/services/custom-fabrication",
      icon: Wrench,
      description:
        "Tailored problem-solving, structural prototyping, and one-off metal commissions fabricated to unique specifications.",
      highlights: ["Engineering Blueprints to Steel", "Corten, Bronze & Steel", "Specialized Site Retrofits"],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-canvas-subtle border-b border-border-structural">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Core Scope & Disciplines"
          title="What We Fabricate"
          description="From structural building frameworks to sculptured decorative iron, we craft metalwork across four specialized fabrication domains."
        />

        {/* 4 Pillars Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-canvas-card border border-border-structural p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-ink-primary hover:shadow-sm group"
              >
                <div>
                  <div className="w-12 h-12 border border-border-structural bg-canvas-subtle flex items-center justify-center text-accent-bronze mb-6 group-hover:border-accent-bronze transition-colors">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-ink-primary font-medium mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-ink-secondary leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div>
                  <div className="border-t border-border-subtle pt-4 mb-4">
                    <ul className="space-y-1.5 text-xs font-mono text-ink-muted">
                      {pillar.highlights.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-accent-bronze" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={pillar.slug}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-architectural text-ink-primary font-medium group-hover:text-accent-bronze transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}