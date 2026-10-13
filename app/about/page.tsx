import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Hammer,
  Compass,
  Flame,
  CheckCircle2,
  ArrowRight,
  Info,
  Layers,
  Wrench,
  FileText,
} from "lucide-react";
import {
  ATELIER_PHILOSOPHY,
  CORE_VALUES,
  MATERIAL_STANDARDS,
  WORKSHOP_STANDARDS,
  ATELIER_CREDENTIALS_NOTICE,
} from "@/data/about";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About the Atelier & Craftsmanship",
  description:
    "Learn about iron’s irony: our philosophy of structural permanence, architectural precision, solid metallurgy, and collaborative metal fabrication.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="flex-1 flex flex-col bg-canvas-bg">
      {/* Top Breadcrumb Navigation */}
      <div className="border-b border-border-subtle bg-canvas-subtle/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
        </div>
      </div>

      {/* Editorial Header */}
      <header className="border-b border-border-structural py-12 sm:py-20 bg-canvas-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-canvas-subtle border border-border-structural mb-6">
              <span className="w-2 h-2 bg-accent-bronze inline-block" aria-hidden="true" />
              <span className="text-[11px] font-mono uppercase tracking-architectural text-ink-primary font-medium">
                iron’s irony • Atelier Profile & Philosophy
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-ink-primary leading-tight">
              Ironwork Built for Structure. Designed for Character.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-ink-secondary leading-relaxed">
              {ATELIER_PHILOSOPHY.narrative[0]}
            </p>
          </div>

          {/* Quick Pillars Strip */}
          <div className="mt-10 pt-8 border-t border-border-structural grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-3 border border-border-structural bg-canvas-card">
              <span className="text-accent-bronze uppercase tracking-architectural block mb-1">
                Discipline
              </span>
              <span className="text-ink-primary font-medium">Building & Architectural</span>
            </div>
            <div className="p-3 border border-border-structural bg-canvas-card">
              <span className="text-accent-bronze uppercase tracking-architectural block mb-1">
                Metallurgy
              </span>
              <span className="text-ink-primary font-medium">Solid Carbon Steels & Bronze</span>
            </div>
            <div className="p-3 border border-border-structural bg-canvas-card">
              <span className="text-accent-bronze uppercase tracking-architectural block mb-1">
                Weather Defense
              </span>
              <span className="text-ink-primary font-medium">EN ISO 1461 Duplex Systems</span>
            </div>
            <div className="p-3 border border-border-structural bg-canvas-card">
              <span className="text-accent-bronze uppercase tracking-architectural block mb-1">
                Collaboration
              </span>
              <span className="text-ink-primary font-medium">Architects, Builders & Owners</span>
            </div>
          </div>
        </div>
      </header>

      {/* Atelier Narrative & Workshop Image Showcase */}
      <section className="py-16 sm:py-24 bg-canvas-subtle border-b border-border-structural">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block">
                01 • Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-ink-primary leading-tight">
                A Dedicated Metal Fabrication Atelier
              </h2>
              <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                {ATELIER_PHILOSOPHY.narrative[1]}
              </p>
              <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                {ATELIER_PHILOSOPHY.narrative[2]}
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button href="/services" variant="primary" size="md">
                  Explore Services
                </Button>
                <Button href="/projects" variant="outline" size="md">
                  View Completed Work
                </Button>
              </div>
            </div>

            {/* Right Workshop Visual */}
            <div className="lg:col-span-6">
              <div className="border border-border-structural bg-canvas-card p-3 shadow-sm">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-canvas-dark">
                  <Image
                    src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop"
                    alt="Precision workshop metal fabrication and welding at iron’s irony"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-canvas-bg/95 backdrop-blur-sm border border-border-structural px-3 py-1 text-[11px] font-mono uppercase tracking-architectural text-ink-primary">
                    Workshop Assembly & Metallurgy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Craftsmanship Values */}
      <section className="py-16 sm:py-24 bg-canvas-bg border-b border-border-structural">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Craft Principles"
            title="What Governs Our Fabrication"
            description="Four fundamental tenets that shape every cut, joint, and protective coating applied in our workshop."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => (
              <div
                key={val.number}
                className="border border-border-structural bg-canvas-card p-6 sm:p-7 flex flex-col justify-between group hover:border-ink-primary transition-all duration-300"
              >
                <div>
                  <span className="font-serif text-3xl text-accent-bronze font-medium block mb-3">
                    {val.number}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-ink-primary font-medium mb-1">
                    {val.title}
                  </h3>
                  <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-4">
                    {val.subtitle}
                  </span>
                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metallurgical Standards Matrix */}
      <section className="py-16 sm:py-24 bg-canvas-subtle border-b border-border-structural">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Material Rigor"
            title="Metallurgical & Finishing Criteria"
            description="We specify structural steel gauges, weld geometries, and multi-layer protective coatings that endure mechanical stress and weather."
          />
          <div className="border border-border-structural bg-canvas-card divide-y divide-border-subtle">
            {MATERIAL_STANDARDS.map((item) => (
              <div
                key={item.category}
                className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 gap-3 sm:gap-6 items-start"
              >
                <div className="md:col-span-3">
                  <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze font-medium block">
                    {item.category}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <span className="text-sm font-mono font-medium text-ink-primary block">
                    {item.standard}
                  </span>
                </div>
                <div className="md:col-span-5">
                  <p className="text-xs text-ink-secondary leading-relaxed">
                    {item.rationale}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Practice & Tolerances Checklist */}
      <section className="py-16 sm:py-24 bg-canvas-bg border-b border-border-structural">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-2">
                Engineering Discipline
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-ink-primary leading-tight">
                Architectural Quality Tolerances
              </h2>
              <p className="mt-4 text-sm text-ink-secondary leading-relaxed">
                In construction and architectural metalwork, millimeters dictate whether an installation sits true or binds. Our workshop practices maintain strict dimensional accuracy across every assembly.
              </p>
              <div className="mt-6">
                <Button href="/customers" variant="outline" size="sm">
                  View Customer Guides
                </Button>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="border border-border-structural bg-canvas-card p-6 sm:p-8 space-y-4">
                {WORKSHOP_STANDARDS.map((standard, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent-bronze mt-1 shrink-0" aria-hidden="true" />
                    <p className="text-xs sm:text-sm text-ink-secondary font-mono leading-relaxed">
                      {standard}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factual Integrity & Credentials Transparency Notice */}
      <section className="py-16 sm:py-20 bg-canvas-subtle border-b border-border-structural">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-border-structural bg-canvas-card p-8 sm:p-12">
            <div className="flex items-start gap-4">
              <Info className="w-5 h-5 text-accent-bronze mt-1 shrink-0" aria-hidden="true" />
              <div className="space-y-4 max-w-3xl">
                <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze font-medium">
                  {ATELIER_CREDENTIALS_NOTICE.title}
                </span>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  {ATELIER_CREDENTIALS_NOTICE.description}
                </p>
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  {ATELIER_CREDENTIALS_NOTICE.placeholders.map((item) => (
                    <div
                      key={item.label}
                      className="border border-dashed border-border-structural bg-canvas-subtle p-3.5"
                    >
                      <span className="text-ink-muted uppercase block text-[10px]">
                        {item.label}
                      </span>
                      <span className="text-ink-primary font-medium mt-1 block">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Impact CTA */}
      <section className="py-16 sm:py-20 bg-canvas-dark text-canvas-bg border-b border-border-iron">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-2">
              Collaborate With Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-canvas-bg">
              Have a Project That Requires Structural Metalwork?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-ink-muted leading-relaxed">
              We consult on blueprints, dimensional drawings, and site measurements. Submit your requirements or discuss a custom commission with our atelier.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/quote" variant="accent" size="md">
                Request a Fabrication Quote
              </Button>
              <Button href="/contact" variant="dark" size="md">
                Contact the Workshop
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
