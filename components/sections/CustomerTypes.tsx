import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CUSTOMER_SEGMENTS } from "@/data/customers";
import { Button } from "@/components/ui/Button";

export function CustomerTypes() {
  return (
    <section className="py-16 sm:py-24 bg-canvas-bg border-b border-border-structural">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="Who We Work With"
            title="Partnerships Built on Precision & Reliability"
            description="Whether coordinating CAD specs with architectural practices or consulting directly with homeowners, we tailor our communication and technical delivery to your project role."
            className="mb-0"
          />
          <div className="mt-6 md:mt-0">
            <Button href="/customers" variant="outline" size="md">
              <span>View Customer Guides</span>
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* 4 Customer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CUSTOMER_SEGMENTS.map((segment) => (
            <div
              key={segment.id}
              className="bg-canvas-card border border-border-structural p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2.5 py-0.5 bg-canvas-subtle border border-border-structural text-[10px] font-mono uppercase tracking-architectural text-accent-bronze mb-4">
                  {segment.badge}
                </span>

                <h3 className="font-serif text-xl sm:text-2xl text-ink-primary font-medium mb-3">
                  {segment.title}
                </h3>

                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-6">
                  {segment.summary}
                </p>

                <div className="border-t border-border-subtle pt-4 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-architectural text-ink-muted block mb-2">
                    Key Value Offered
                  </span>
                  <ul className="space-y-2 text-xs font-mono text-ink-secondary">
                    {segment.whatWeOffer.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-accent-bronze mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/customers"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-architectural text-ink-primary font-medium hover:text-accent-bronze transition-colors"
                >
                  <span>Learn how we collaborate</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}