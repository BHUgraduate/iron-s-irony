import * as React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuoteForm } from "@/components/forms/QuoteForm";
import {
  ShieldCheck,
  FileCheck,
  Calculator,
  Compass,
  Clock,
  Layers,
  Phone,
  Mail,
} from "lucide-react";
import { COMPANY_DETAILS } from "@/data/company";

export const metadata: Metadata = {
  title: "Request a Fabrication Quotation — iron’s irony",
  description:
    "Submit your architectural drawings, aperture dimensions, and finish requirements for an itemized commercial quotation by iron’s irony.",
};

function QuoteFormSkeleton() {
  return (
    <div className="border border-border-structural bg-canvas-card p-8 animate-pulse space-y-6">
      <div className="h-6 bg-canvas-subtle w-1/3 mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-10 bg-canvas-subtle" />
        <div className="h-10 bg-canvas-subtle" />
        <div className="h-10 bg-canvas-subtle" />
        <div className="h-10 bg-canvas-subtle" />
      </div>
      <div className="h-28 bg-canvas-subtle mt-4" />
    </div>
  );
}

export default function QuotePage() {
  return (
    <main id="main-content" className="flex-1 flex flex-col bg-canvas-bg">
      {/* Top Breadcrumb Navigation */}
      <div className="border-b border-border-subtle bg-canvas-subtle/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Request a Quote", href: "/quote" }]} />
        </div>
      </div>

      {/* Editorial Header */}
      <header className="border-b border-border-structural py-12 sm:py-20 bg-canvas-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-canvas-subtle border border-border-structural mb-6">
              <span className="w-2 h-2 bg-accent-bronze inline-block" aria-hidden="true" />
              <span className="text-[11px] font-mono uppercase tracking-architectural text-ink-primary font-medium">
                iron’s irony • Estimating & Structural Costing
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-ink-primary leading-tight">
              Request a Fabrication Quotation
            </h1>
            <p className="mt-6 text-base sm:text-lg text-ink-secondary leading-relaxed">
              Every ironwork commission is evaluated on material weight, forging hours, structural substrate anchoring, and multi-barrier weather coatings. Complete the form below to receive a transparent, itemized proposal.
            </p>
          </div>

          {/* Transparent Estimating Principles Strip */}
          <div className="mt-10 pt-8 border-t border-border-structural grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
            <div className="border border-border-structural bg-canvas-card p-4">
              <span className="text-accent-bronze uppercase tracking-architectural block mb-1 font-medium">
                01 • Itemized Metallurgical Costing
              </span>
              <p className="text-ink-secondary">
                Zero arbitrary lump sums; pricing reflects actual steel gauges, forge labor, and duplex coatings.
              </p>
            </div>
            <div className="border border-border-structural bg-canvas-card p-4">
              <span className="text-accent-bronze uppercase tracking-architectural block mb-1 font-medium">
                02 • Constructability Evaluation
              </span>
              <p className="text-ink-secondary">
                We review substrate fixings and building code compliance before steel is ordered.
              </p>
            </div>
            <div className="border border-border-structural bg-canvas-card p-4">
              <span className="text-accent-bronze uppercase tracking-architectural block mb-1 font-medium">
                03 • Trade Non-Disclosure Guarantee
              </span>
              <p className="text-ink-secondary">
                Proprietary architectural drawings and private estate coordinates are handled under NDA.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Quote Form Section with Contextual Sidebar */}
      <section className="py-16 sm:py-24 bg-canvas-subtle border-b border-border-structural">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Form Column (Col 1-8) */}
            <div className="lg:col-span-8">
              <React.Suspense fallback={<QuoteFormSkeleton />}>
                <QuoteForm />
              </React.Suspense>
            </div>

            {/* Sidebar Guidance & Requirements (Col 9-12) */}
            <aside aria-label="Quotation Guidance" className="lg:col-span-4 space-y-6">
              
              {/* How We Calculate Costs */}
              <div className="border border-border-structural bg-canvas-card p-6">
                <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-3 font-medium">
                  Costing Factors
                </span>
                <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                  Our estimates are formulated upon verified parameters rather than commercial guesswork:
                </p>
                <ul className="space-y-2.5 text-xs font-mono text-ink-secondary">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent-bronze mt-1.5 shrink-0" />
                    <span><strong>Metallurgical Mass:</strong> Carbon steel, Corten, or architectural brass.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent-bronze mt-1.5 shrink-0" />
                    <span><strong>Forging Hours:</strong> Degree of anvil curvature, tenon joinery, and weld dressing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent-bronze mt-1.5 shrink-0" />
                    <span><strong>Protective Coatings:</strong> Duplex zinc baths (450°C) vs. interior hardwax patinas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent-bronze mt-1.5 shrink-0" />
                    <span><strong>Site Substrate:</strong> Core drilling into masonry ashlar vs. timber header mounting.</span>
                  </li>
                </ul>
              </div>

              {/* What Helps Us Quote Faster */}
              <div className="border border-border-structural bg-canvas-card p-6">
                <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-3 font-medium">
                  Helpful Drawing Details
                </span>
                <p className="text-xs text-ink-secondary leading-relaxed mb-3">
                  If available, including any of the following expedites your engineering evaluation:
                </p>
                <div className="space-y-2 text-xs font-mono text-ink-muted">
                  <div className="p-2.5 bg-canvas-subtle border border-border-structural">
                    • Clear opening width & height measurements
                  </div>
                  <div className="p-2.5 bg-canvas-subtle border border-border-structural">
                    • Photographs showing adjacent walls, piers, or floor slabs
                  </div>
                  <div className="p-2.5 bg-canvas-subtle border border-border-structural">
                    • Architect CAD files (DWG, DXF) or hand-drawn sketches
                  </div>
                </div>
              </div>

              {/* Direct Telephone Alternative */}
              <div className="border border-border-structural bg-canvas-card p-6 space-y-3">
                <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block font-medium">
                  Prefer Direct Discussion?
                </span>
                <p className="text-xs text-ink-secondary leading-relaxed">
                  Call our workshop directly to discuss unique dimensions, schedule an on-site survey, or arrange drawing collection.
                </p>
                <div className="pt-2 text-xs font-mono space-y-1">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-accent-bronze" />
                    <span className="text-ink-primary font-medium">{COMPANY_DETAILS.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-accent-bronze" />
                    <span className="text-ink-primary font-medium">{COMPANY_DETAILS.contact.email}</span>
                  </div>
                </div>
              </div>
            </aside>
            
          </div>
        </div>
      </section>
    </main>
  );
}
