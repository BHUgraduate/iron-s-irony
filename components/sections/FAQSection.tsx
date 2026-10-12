"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ_DATA } from "@/data/faq";
import { Button } from "@/components/ui/Button";

export function FAQSection() {
  const [openId, setOpenId] = React.useState<string | null>(FAQ_DATA[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-24 bg-canvas-subtle border-b border-border-structural">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Fabrication Inquiries"
          title="Frequently Asked Questions"
          description="Straight answers regarding custom metal tolerances, rust mitigation coatings, site installations, and architectural collaborations."
          align="center"
        />

        {/* Accordion Container */}
        <div className="mt-12 space-y-3">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="border border-border-structural bg-canvas-card transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink-primary"
                >
                  <span className="font-serif text-lg sm:text-xl text-ink-primary font-medium">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-accent-bronze shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-ink-secondary leading-relaxed border-t border-border-subtle pt-4">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs font-mono text-ink-muted mb-3">
            Have a specific structural or dimensional question not answered here?
          </p>
          <Button href="/contact" variant="outline" size="sm">
            <span>Speak With the Workshop</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}