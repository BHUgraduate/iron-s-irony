import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Check,
  ArrowRight,
  FileText,
  Clock,
  Wrench,
  Compass,
  Layers,
  ChevronRight,
} from "lucide-react";
import { DETAILED_CUSTOMER_SEGMENTS } from "@/data/customers";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Who We Work With — Architects, Builders & Homeowners — iron’s irony",
  description:
    "Tailored ironwork collaboration for architects, general contractors, interior designers, private homeowners, and commercial developments.",
};

export default function CustomersPage() {
  return (
    <main id="main-content" className="flex-1 flex flex-col bg-canvas-bg">
      {/* Top Breadcrumb Navigation */}
      <div className="border-b border-border-subtle bg-canvas-subtle/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Customers", href: "/customers" }]} />
        </div>
      </div>

      {/* Editorial Header */}
      <header className="border-b border-border-structural py-12 sm:py-20 bg-canvas-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-canvas-subtle border border-border-structural mb-6">
              <span className="w-2 h-2 bg-accent-bronze inline-block" aria-hidden="true" />
              <span className="text-[11px] font-mono uppercase tracking-architectural text-ink-primary font-medium">
                iron’s irony • Trade & Client Partnerships
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-ink-primary leading-tight">
              Tailored Collaboration for Every Project Role
            </h1>
            <p className="mt-6 text-base sm:text-lg text-ink-secondary leading-relaxed">
              Whether you are an architect coordinating complex CAD tolerances, a general contractor needing reliable site deliveries, or a private property owner investing in enduring perimeter security, our atelier adapts our communication and technical delivery to your specific operational needs.
            </p>
          </div>

          {/* Quick Persona Jump Bar */}
          <div className="mt-10 pt-8 border-t border-border-structural grid grid-cols-2 md:grid-cols-5 gap-3">
            {DETAILED_CUSTOMER_SEGMENTS.map((segment) => (
              <a
                key={segment.id}
                href={`#${segment.slug}`}
                className="p-3 border border-border-structural bg-canvas-card hover:border-ink-primary transition-colors block text-left"
              >
                <span className="text-[9px] font-mono uppercase tracking-architectural text-accent-bronze block">
                  {segment.roleBadge}
                </span>
                <span className="text-xs font-serif text-ink-primary font-medium truncate block mt-0.5">
                  {segment.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Detailed Customer Persona Sections */}
      <div className="divide-y divide-border-structural">
        {DETAILED_CUSTOMER_SEGMENTS.map((segment, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={segment.id}
              id={segment.slug}
              className={`py-16 sm:py-24 scroll-mt-20 ${
                isEven ? "bg-canvas-bg" : "bg-canvas-subtle"
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="max-w-3xl mb-12">
                  <div className="inline-flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 bg-accent-bronze inline-block" />
                    <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze font-medium">
                      {segment.roleBadge} • {segment.eyebrow}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-medium text-ink-primary leading-tight">
                    {segment.title}
                  </h2>
                  <p className="mt-3 text-base text-ink-secondary leading-relaxed">
                    {segment.heroHeadline}
                  </p>
                </div>

                {/* Pain Points vs Solutions Comparison Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
                  
                  {/* Left: Traditional Pain Points */}
                  <div className="lg:col-span-6 border border-border-structural bg-canvas-card p-6 sm:p-8">
                    <span className="text-xs font-mono uppercase tracking-architectural text-status-error block mb-4 font-medium">
                      Common Industry Friction Points
                    </span>
                    <ul className="space-y-3 text-xs sm:text-sm text-ink-secondary">
                      {segment.painPoints.map((pain, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-status-error font-mono font-bold mt-0.5 shrink-0">×</span>
                          <span className="leading-relaxed">{pain}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: How iron’s irony Solves Them */}
                  <div className="lg:col-span-6 border border-border-structural bg-canvas-card p-6 sm:p-8">
                    <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-4 font-medium">
                      How iron’s irony Delivers
                    </span>
                    <ul className="space-y-3 text-xs sm:text-sm text-ink-secondary">
                      {segment.atelierSolutions.map((sol, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-accent-bronze mt-0.5 shrink-0" aria-hidden="true" />
                          <span className="leading-relaxed">{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Deliverables & Typical Commissions Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Deliverables Checklist */}
                  <div className="lg:col-span-6 border border-border-structural bg-canvas-card p-6 sm:p-7">
                    <span className="text-[11px] font-mono uppercase tracking-architectural text-ink-primary block mb-3 font-medium">
                      What We Deliver for {segment.title}
                    </span>
                    <ul className="space-y-2 text-xs font-mono text-ink-secondary">
                      {segment.deliverablesChecklist.map((deliv, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-accent-bronze mt-1.5 shrink-0" aria-hidden="true" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Typical Commissions & Action */}
                  <div className="lg:col-span-6 border border-border-structural bg-canvas-card p-6 sm:p-7 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-architectural text-ink-primary block mb-3 font-medium">
                        Typical Commissions
                      </span>
                      <ul className="space-y-2 text-xs font-mono text-ink-secondary mb-6">
                        {segment.typicalCommissions.map((comm, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-ink-primary mt-1.5 shrink-0" aria-hidden="true" />
                            <span>{comm}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <Button
                        href={`/quote?customerType=${segment.id}&service=${segment.quoteServiceCategory}`}
                        variant="primary"
                        size="sm"
                      >
                        Request Quote as {segment.title.split("&")[0].trim()}
                      </Button>
                      <Link
                        href="/contact"
                        className="text-xs font-mono uppercase tracking-architectural text-accent-bronze hover:text-accent-bronze-hover transition-colors inline-flex items-center gap-1"
                      >
                        <span>Request Trade Discussion</span>
                        <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Universal Collaboration CTA */}
      <section className="py-16 sm:py-20 bg-canvas-dark text-canvas-bg border-b border-border-iron">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-2">
              Start The Dialogue
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-canvas-bg">
              Ready to Discuss Drawings, Tolerances, or Site Timelines?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-ink-muted leading-relaxed">
              We collaborate seamlessly with your design or construction team. Send plans for an engineering constructability review or arrange a direct workshop consultation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/quote" variant="accent" size="md">
                Submit Project Specifications
              </Button>
              <Button href="/contact" variant="dark" size="md">
                Direct Atelier Contact
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
