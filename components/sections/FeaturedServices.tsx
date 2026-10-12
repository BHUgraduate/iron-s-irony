import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES_DATA } from "@/data/services";
import { Button } from "@/components/ui/Button";

export function FeaturedServices() {
  return (
    <section className="py-16 sm:py-24 bg-canvas-bg border-b border-border-structural">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="Capabilities in Detail"
            title="Fabrication Tailored to Every Requirement"
            description="Explore our distinct fabrication workflows, each structured to handle different engineering and architectural tolerances."
            className="mb-0"
          />
          <div className="mt-6 md:mt-0">
            <Button href="/services" variant="outline" size="md">
              <span>All Services Directory</span>
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* Featured Service Rows */}
        <div className="space-y-12">
          {SERVICES_DATA.slice(0, 2).map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border border-border-structural bg-canvas-card p-6 sm:p-8 lg:p-10 ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Imagery Side */}
                <div
                  className={`lg:col-span-6 relative aspect-[16/10] overflow-hidden bg-canvas-dark border border-border-structural ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-canvas-bg/90 backdrop-blur-sm border border-border-structural px-3 py-1 text-[11px] font-mono uppercase tracking-architectural text-ink-primary">
                    {service.eyebrow}
                  </div>
                </div>

                {/* Content Side */}
                <div className={`lg:col-span-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                  <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-2">
                    Scope of Works
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-medium text-ink-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-ink-secondary leading-relaxed mb-6">
                    {service.fullDescription}
                  </p>

                  <div className="border-t border-border-subtle pt-6 mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-architectural text-ink-muted block mb-3">
                      Core Atelier Capabilities
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-ink-secondary">
                      {service.capabilities.slice(0, 4).map((cap) => (
                        <div key={cap} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-accent-bronze mt-0.5 shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Button href={`/services/${service.slug}`} variant="primary" size="sm">
                      Read Service Specifications
                    </Button>
                    <Button href="/quote" variant="ghost" size="sm">
                      Request Quotation
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}