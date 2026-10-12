import * as React from "react";
import { MessageSquareQuote, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS_DATA } from "@/data/testimonials";

export function TestimonialsPlaceholder() {
  return (
    <section className="py-16 sm:py-24 bg-canvas-bg border-b border-border-structural">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Verification & Authenticity"
          title="Customer & Partner Experiences"
          description="In accordance with our strict factual policy, we never generate artificial testimonials or fake review scores. Verified feedback from architects and property owners will appear here upon completion of formal commissions."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-canvas-subtle border border-dashed border-border-structural p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-accent-bronze mb-4">
                  <MessageSquareQuote className="w-5 h-5" aria-hidden="true" />
                  <span className="text-[10px] font-mono uppercase tracking-architectural text-ink-muted">
                    Verified Feedback Slot
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-ink-secondary italic leading-relaxed mb-6">
                  &ldquo;{item.quotePlaceholder}&rdquo;
                </p>
              </div>

              <div className="border-t border-border-structural pt-4">
                <span className="text-xs font-mono font-medium text-ink-primary block">
                  {item.clientRolePlaceholder}
                </span>
                <span className="text-[11px] font-mono text-ink-muted block mt-0.5">
                  Scope: {item.projectTypePlaceholder}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Strip */}
        <div className="mt-8 p-4 bg-canvas-card border border-border-structural flex items-center justify-center gap-3 text-xs font-mono text-ink-muted text-center">
          <ShieldCheck className="w-4 h-4 text-accent-bronze shrink-0" aria-hidden="true" />
          <span>
            Authentic atelier standard: Zero artificial metrics or fabricated client names. Replaceable inside <code className="text-ink-primary">data/testimonials.ts</code>.
          </span>
        </div>
      </div>
    </section>
  );
}