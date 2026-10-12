import * as React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WORKSHOP_PROCESS_STEPS } from "@/data/process";

export function ProcessFlow() {
  return (
    <section className="py-16 sm:py-24 bg-canvas-subtle border-b border-border-structural">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Customer Journey"
          title="From Concept to Structural Installation"
          description="A transparent six-step fabrication journey designed to eliminate guesswork, maintain engineering tolerances, and deliver enduring ironwork."
          align="center"
        />

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {WORKSHOP_PROCESS_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-canvas-card border border-border-structural p-6 sm:p-8 flex flex-col justify-between relative group hover:border-ink-primary transition-colors"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between border-b border-border-subtle pb-4 mb-4">
                  <span className="font-serif text-3xl sm:text-4xl text-accent-bronze font-normal">
                    {step.stepNumber}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-architectural text-ink-muted">
                    Milestone {step.stepNumber}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-ink-primary font-medium mb-1">
                  {step.title}
                </h3>
                <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-4">
                  {step.subtitle}
                </span>

                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="border-t border-border-subtle pt-4 bg-canvas-subtle/40 -mx-6 -mb-6 p-6">
                <span className="text-[10px] font-mono uppercase tracking-architectural text-ink-muted block mb-1">
                  Step Deliverable
                </span>
                <span className="text-xs font-mono font-medium text-ink-primary">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}