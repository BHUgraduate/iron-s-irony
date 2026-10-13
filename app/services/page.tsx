import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Hammer, Layers, Compass, CheckCircle2 } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Fabrication Services & Capabilities",
  description:
    "Explore our complete range of metal fabrication: Building Ironwork, Architectural Ironwork, Decorative Ironwork, and Custom Fabrication. Built to structural and aesthetic standards.",
};

export default function ServicesPage() {
  return (
    <main id="main-content" className="flex-1 flex flex-col bg-canvas-bg">
      {/* Top Breadcrumb Navigation */}
      <div className="border-b border-border-subtle bg-canvas-subtle/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
        </div>
      </div>

      {/* Editorial Services Header */}
      <header className="border-b border-border-structural py-12 sm:py-20 bg-canvas-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-canvas-subtle border border-border-structural mb-6">
              <span
                className="w-2 h-2 bg-accent-bronze inline-block"
                aria-hidden="true"
              />
              <span className="text-[11px] font-mono uppercase tracking-architectural text-ink-primary font-medium">
                iron’s irony • Scope of Fabrication
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-ink-primary leading-tight">
              Metalwork Engineered for Strength, Proportion, and Detail
            </h1>
            <p className="mt-6 text-base sm:text-lg text-ink-secondary leading-relaxed">
              Every commission undertaken in our atelier balances heavy-gauge
              structural integrity with refined architectural finishes. Explore
              our four fabrication disciplines below or submit your custom
              specifications for evaluation.
            </p>
          </div>

          {/* Core Discipline Quick Anchors */}
          <div className="mt-10 pt-8 border-t border-border-structural grid grid-cols-2 md:grid-cols-4 gap-4">
            {SERVICES_DATA.map((service) => (
              <a
                key={service.id}
                href={`#${service.slug}`}
                className="p-3 border border-border-structural bg-canvas-card hover:border-ink-primary transition-colors block text-left"
              >
                <span className="text-[10px] font-mono uppercase tracking-architectural text-accent-bronze block">
                  Discipline
                </span>
                <span className="text-xs sm:text-sm font-serif text-ink-primary font-medium truncate block mt-0.5">
                  {service.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Services Grid Section */}
      <section className="py-16 sm:py-24 bg-canvas-subtle border-b border-border-structural">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Disciplines"
            title="The Fabrication Portfolio"
            description="Organized into four specialized domains to meet the exact structural and aesthetic demands of architects, contractors, and private property owners."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {SERVICES_DATA.map((service) => (
              <div key={service.id} id={service.slug} className="scroll-mt-24">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Tolerances & Standards Banner */}
      <section className="py-16 sm:py-20 bg-canvas-dark text-canvas-bg border-b border-border-iron">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-2">
                Metallurgical Rigor
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-canvas-bg">
                Committed to Permanent Materials & Precise Tolerances
              </h2>
              <p className="mt-4 text-sm sm:text-base text-ink-muted leading-relaxed">
                We refuse to cut corners with thin-gauge sheet metal or hollow
                lightweight tubing where structural permanence is called for.
                Every gate, balustrade, and structural frame is built using
                verified solid bar and structural hollow sections.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-border-iron bg-canvas-dark-subtle p-4">
                  <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-1">
                    Deflection Standards
                  </span>
                  <p className="text-xs text-ink-muted">
                    Engineered to meet or exceed commercial and residential
                    lateral load requirements.
                  </p>
                </div>
                <div className="border border-border-iron bg-canvas-dark-subtle p-4">
                  <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-1">
                    Duplex Anti-Corrosion
                  </span>
                  <p className="text-xs text-ink-muted">
                    Molten zinc hot-dip galvanizing with epoxy sealers for
                    permanent outdoor life.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 border border-border-iron bg-canvas-dark-subtle p-6 sm:p-8">
              <h3 className="font-serif text-xl sm:text-2xl text-canvas-bg mb-4">
                Discuss Your Scope of Work
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-6">
                Send blueprints, architectural sketches, or physical site
                measurements. We provide itemized quotations and engineering
                feedback.
              </p>
              <div className="space-y-3">
                <Button
                  href="/quote"
                  variant="accent"
                  size="md"
                  className="w-full"
                >
                  Request a Formal Quote
                </Button>
                <Button
                  href="/contact"
                  variant="dark"
                  size="md"
                  className="w-full"
                >
                  Speak Directly With the Workshop
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Custom Quotations Are Formulated */}
      <section className="py-16 sm:py-24 bg-canvas-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Commercial Transparency"
            title="How We Calculate Quotations"
            description="Our pricing is determined by verifiable engineering factors rather than vague estimates, ensuring accurate commercial budgeting."
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="border border-border-structural bg-canvas-card p-6">
              <span className="text-2xl font-serif text-accent-bronze block mb-2">
                01
              </span>
              <h4 className="font-serif text-lg text-ink-primary font-medium mb-2">
                Material & Section Gauge
              </h4>
              <p className="text-xs text-ink-secondary leading-relaxed">
                Weight and type of steel, bronze, or alloy required to achieve
                structural load capacity.
              </p>
            </div>
            <div className="border border-border-structural bg-canvas-card p-6">
              <span className="text-2xl font-serif text-accent-bronze block mb-2">
                02
              </span>
              <h4 className="font-serif text-lg text-ink-primary font-medium mb-2">
                Joinery & Forging Hours
              </h4>
              <p className="text-xs text-ink-secondary leading-relaxed">
                Degree of hand-forging, anvil shaping, CNC coordination, and
                seamless weld dressing involved.
              </p>
            </div>
            <div className="border border-border-structural bg-canvas-card p-6">
              <span className="text-2xl font-serif text-accent-bronze block mb-2">
                03
              </span>
              <h4 className="font-serif text-lg text-ink-primary font-medium mb-2">
                Protective Finish Spec
              </h4>
              <p className="text-xs text-ink-secondary leading-relaxed">
                Duplex hot-dip galvanizing, electrostatic architectural powder
                coating, or hand-rubbed wax patinas.
              </p>
            </div>
            <div className="border border-border-structural bg-canvas-card p-6">
              <span className="text-2xl font-serif text-accent-bronze block mb-2">
                04
              </span>
              <h4 className="font-serif text-lg text-ink-primary font-medium mb-2">
                Site & Anchoring Scope
              </h4>
              <p className="text-xs text-ink-secondary leading-relaxed">
                Site access conditions, substrate chemical anchoring, and
                automation hardware integration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
