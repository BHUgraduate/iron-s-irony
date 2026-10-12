import * as React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Compass, Sliders } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-border-structural bg-canvas-bg"
    >
      {/* Background Architectural Subtle Grid */}
      <div
        className="absolute inset-0 architectural-grid opacity-60 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Editorial Column (Col 1 - 7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Atelier Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-canvas-subtle border border-border-structural mb-6">
              <span className="w-2 h-2 bg-accent-bronze inline-block" aria-hidden="true" />
              <span className="text-[11px] font-mono uppercase tracking-architectural text-ink-primary font-medium">
                iron’s irony &bull; Metal Fabrication Atelier
              </span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-ink-primary leading-[1.08] text-balance"
            >
              Ironwork built for structure.{" "}
              <span className="italic font-normal text-ink-secondary block sm:inline">
                Designed for character.
              </span>
            </h1>

            {/* Supporting Editorial Lead */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-ink-secondary max-w-2xl leading-relaxed text-balance">
              Building, architectural, and decorative ironwork engineered for residential estates, architectural practices, and custom commissions. Forged with metallurgical precision to endure for generations.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Button href="/quote" variant="primary" size="lg">
                Request a Quote
              </Button>
              <Button href="/projects" variant="outline" size="lg">
                <span>Explore Completed Work</span>
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
            </div>

            {/* Quick Trust Pillars / Metadata Strip */}
            <div className="mt-12 pt-8 border-t border-border-structural w-full grid grid-cols-3 gap-4 sm:gap-6 text-left">
              <div>
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-architectural text-accent-bronze block">
                  Discipline
                </span>
                <span className="text-xs sm:text-sm font-sans font-medium text-ink-primary mt-0.5 block">
                  Building & Decor
                </span>
              </div>
              <div>
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-architectural text-accent-bronze block">
                  Methodology
                </span>
                <span className="text-xs sm:text-sm font-sans font-medium text-ink-primary mt-0.5 block">
                  Precision Forged
                </span>
              </div>
              <div>
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-architectural text-accent-bronze block">
                  Engagement
                </span>
                <span className="text-xs sm:text-sm font-sans font-medium text-ink-primary mt-0.5 block">
                  Bespoke & Trade
                </span>
              </div>
            </div>
          </div>

          {/* Architectural Visual Imagery Column (Col 8 - 12) */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-border-structural bg-canvas-card p-3 shadow-md">
              {/* Feature Architectural Image */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden bg-canvas-dark">
                <Image
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
                  alt="Architectural ironwork staircase balustrade featuring precision geometric steel lines"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-primary/60 via-transparent to-transparent pointer-events-none" />

                {/* Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-canvas-bg/95 backdrop-blur-sm border border-border-structural text-ink-primary">
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-architectural">
                    <span>Atelier Commission</span>
                    <span className="text-accent-bronze font-medium">Bespoke Steel</span>
                  </div>
                  <p className="text-xs font-sans text-ink-secondary mt-1 line-clamp-1">
                    Slender profile handrails & continuous mechanical fixings
                  </p>
                </div>
              </div>

              {/* Architectural Technical Detail Corner Markers */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-accent-bronze" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-accent-bronze" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-accent-bronze" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-accent-bronze" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}