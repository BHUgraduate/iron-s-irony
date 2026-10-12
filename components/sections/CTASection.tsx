import * as React from "react";
import Link from "next/link";
import { ArrowRight, FileCheck, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="py-16 sm:py-24 bg-canvas-dark text-canvas-bg border-b border-border-iron relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="border border-border-iron bg-canvas-dark-subtle p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-3">
              Commence Your Project
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-canvas-bg leading-tight">
              Ready to Discuss Dimensions, Structural Requirements or Custom Details?
            </h2>

            <p className="mt-4 text-sm sm:text-base text-ink-muted leading-relaxed max-w-2xl">
              Submit your project measurements or architectural drawings. We evaluate structural parameters, recommend appropriate finishes, and prepare an itemized fabrication quote.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button href="/quote" variant="accent" size="lg">
                Request a Detailed Quotation
              </Button>
              <Button href="/contact" variant="dark" size="lg">
                <span>Direct Contact Options</span>
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-border-iron flex flex-wrap items-center gap-6 text-xs font-mono text-ink-muted">
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-accent-bronze" aria-hidden="true" />
                <span>Structured Quotation Process</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-accent-bronze" aria-hidden="true" />
                <span>Direct Consultation with Fabricators</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}