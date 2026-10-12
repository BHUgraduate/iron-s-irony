import * as React from "react";
import Image from "next/image";
import { ArrowRight, Sliders, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CustomFabricationHighlight() {
  const customParameters = [
    { label: "Bespoke Dimensions", desc: "Engineered to fit irregular masonry reveals and non-standard floor levels." },
    { label: "Material Profiles", desc: "Solid forged square bar, structural hollow sections, flat plate, and bronze filaments." },
    { label: "Surface Finishes", desc: "Galvanized matte coatings, natural oxidized mill-scale, and hand-rubbed wax patinas." },
    { label: "Hardware Integration", desc: "Automation ready, multi-point lock mortises, and custom mechanical hinges." },
  ];

  return (
    <section className="py-16 sm:py-24 bg-canvas-bg border-b border-border-structural">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-border-structural bg-canvas-subtle p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 bg-accent-bronze inline-block" />
                <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze font-medium">
                  Bespoke Metal commissions
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-ink-primary leading-tight">
                No Standard Sizes? We Fabricate Exactly What You Draw.
              </h2>

              <p className="mt-4 text-sm sm:text-base text-ink-secondary leading-relaxed max-w-xl">
                Whether you are an architect presenting bespoke CAD details or a property owner modernizing a heritage boundary, our atelier works directly from sketches, site measurements, and engineering briefs.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {customParameters.map((param) => (
                  <div key={param.label} className="border border-border-structural bg-canvas-card p-4">
                    <span className="text-xs font-mono uppercase tracking-architectural text-ink-primary font-medium block mb-1">
                      {param.label}
                    </span>
                    <p className="text-xs text-ink-secondary leading-normal">
                      {param.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button href="/quote" variant="primary" size="md">
                  Submit Custom Requirements
                </Button>
                <Button href="/services/custom-fabrication" variant="outline" size="md">
                  <span>Custom Process Guide</span>
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Button>
              </div>
            </div>

            {/* Right Visual Detail */}
            <div className="lg:col-span-5 relative">
              <div className="border border-border-structural bg-canvas-card p-3">
                <div className="relative aspect-square overflow-hidden bg-canvas-dark">
                  <Image
                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop"
                    alt="Precision workshop metal fabrication and welding detail"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="pt-3 px-1 text-center">
                  <span className="text-[11px] font-mono text-ink-muted uppercase tracking-wider block">
                    Precision TIG & Arc Fabrication &bull; Architectural Inspection
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}