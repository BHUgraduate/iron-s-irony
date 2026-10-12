import * as React from "react";
import Image from "next/image";
import { Check, Shield, Flame, Hammer, Compass } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CraftsmanshipPhilosophy() {
  const tenets = [
    {
      icon: Flame,
      title: "Metallurgical Selection",
      description:
        "We source heavy-gauge structural carbon steels, architectural brass, and corrosion-resistant alloys specified to match exact structural load and environmental weathering criteria.",
    },
    {
      icon: Hammer,
      title: "Joinery & Structural Rigidity",
      description:
        "Every joint balances strength and discretion: from continuous penetration TIG and MIG welds dressed seamless, to traditional hot-forged tenons and structural through-bolts.",
    },
    {
      icon: Shield,
      title: "Multi-Barrier Corrosion Defense",
      description:
        "No exterior ironwork leaves our workshop without full protective measures: hot-dip galvanizing baths, zinc-rich primers, and UV-stable architectural coatings for longevity.",
    },
    {
      icon: Compass,
      title: "Precision Dimensional Tolerances",
      description:
        "We understand that in construction, millimeters dictate success. Our fabrication workflows ensure exact squareness, verified reveals, and seamless on-site installation.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-canvas-dark text-canvas-bg border-b border-border-iron relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading with Inverted Palette */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-accent-bronze inline-block" aria-hidden="true" />
            <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze">
              The Atelier Standard
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-canvas-bg">
            Why iron’s irony: Engineering Built on Material Honesty
          </h2>
          <p className="mt-4 text-sm sm:text-base text-ink-muted leading-relaxed">
            True architectural metalwork is not merely decorative; it is an enduring component of a building’s physical envelope. We treat iron with the structural respect it commands.
          </p>
        </div>

        {/* 4 Pillars Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tenets.map((tenet) => {
            const Icon = tenet.icon;
            return (
              <div
                key={tenet.title}
                className="border border-border-iron bg-canvas-dark-subtle p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 border border-border-iron bg-canvas-dark flex items-center justify-center text-accent-bronze mb-6">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-xl text-canvas-bg font-medium mb-3">
                    {tenet.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {tenet.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Quotation / Statement */}
        <div className="mt-16 pt-8 border-t border-border-iron flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-ink-muted">
          <p>
            Fabricated to architectural standards &bull; Zero lightweight hollow substitutes &bull; Verified heavy-gauge metallurgy
          </p>
          <span className="text-accent-bronze uppercase tracking-architectural">
            iron’s irony &bull; hycyon engineering
          </span>
        </div>
      </div>
    </section>
  );
}