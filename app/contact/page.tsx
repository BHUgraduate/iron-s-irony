import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ShieldCheck,
  ArrowRight,
  Compass,
  FileCheck,
} from "lucide-react";
import { COMPANY_DETAILS } from "@/data/company";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact the Atelier — Workshop Location & Inquiries",
  description:
    "Contact iron’s irony for workshop inquiries, blueprint reviews, trade consultations, and appointments. Direct telephone, email, and facility coordinates.",
};

export default function ContactPage() {
  return (
    <main id="main-content" className="flex-1 flex flex-col bg-canvas-bg">
      {/* Top Breadcrumb Navigation */}
      <div className="border-b border-border-subtle bg-canvas-subtle/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
        </div>
      </div>

      {/* Editorial Header */}
      <header className="border-b border-border-structural py-12 sm:py-20 bg-canvas-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-canvas-subtle border border-border-structural mb-6">
              <span className="w-2 h-2 bg-accent-bronze inline-block" aria-hidden="true" />
              <span className="text-[11px] font-mono uppercase tracking-architectural text-ink-primary font-medium">
                iron’s irony • Direct Atelier Communication
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-ink-primary leading-tight">
              Workshop Contact & Inquiries
            </h1>
            <p className="mt-6 text-base sm:text-lg text-ink-secondary leading-relaxed">
              We welcome dialogue with architects, general contractors, interior designers, and property owners. Whether discussing complex CAD details or scheduling a workshop review, contact our fabricators directly.
            </p>
          </div>
        </div>
      </header>

      {/* Contact Grid: Details + Message Form */}
      <section className="py-16 sm:py-24 bg-canvas-subtle border-b border-border-structural">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Atelier Coordinates (Col 1-5) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-2">
                  Communication Channels
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-medium text-ink-primary">
                  Direct Workshop Coordinates
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-ink-secondary leading-relaxed">
                  Calls and emails are handled directly by members of our estimating and metalworking team.
                </p>
              </div>

              {/* Information Cards Stack */}
              <div className="space-y-4">
                
                {/* Telephone */}
                <div className="border border-border-structural bg-canvas-card p-5">
                  <div className="flex items-start gap-3.5">
                    <Phone className="w-4 h-4 text-accent-bronze mt-1 shrink-0" aria-hidden="true" />
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-architectural text-ink-muted block">
                        Telephone Inquiries
                      </span>
                      <span className="text-sm font-mono font-medium text-ink-primary mt-0.5 block">
                        {COMPANY_DETAILS.contact.phone}
                      </span>
                      <span className="text-[11px] font-mono text-ink-muted mt-1 block">
                        Direct line to fabrication desk
                      </span>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="border border-border-structural bg-canvas-card p-5">
                  <div className="flex items-start gap-3.5">
                    <Mail className="w-4 h-4 text-accent-bronze mt-1 shrink-0" aria-hidden="true" />
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-architectural text-ink-muted block">
                        Electronic Mail
                      </span>
                      <span className="text-sm font-mono font-medium text-ink-primary mt-0.5 block">
                        {COMPANY_DETAILS.contact.email}
                      </span>
                      <span className="text-[11px] font-mono text-ink-muted mt-1 block">
                        For blueprints, CAD files & inquiries
                      </span>
                    </div>
                  </div>
                </div>

                {/* Workshop Facility */}
                <div className="border border-border-structural bg-canvas-card p-5">
                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-4 h-4 text-accent-bronze mt-1 shrink-0" aria-hidden="true" />
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-architectural text-ink-muted block">
                        Atelier & Workshop Facility
                      </span>
                      <span className="text-sm font-mono font-medium text-ink-primary mt-0.5 block">
                        {COMPANY_DETAILS.contact.address.line1}
                      </span>
                      <span className="text-xs font-mono text-ink-secondary block">
                        {COMPANY_DETAILS.contact.address.line2}, {COMPANY_DETAILS.contact.address.city},{" "}
                        {COMPANY_DETAILS.contact.address.region} {COMPANY_DETAILS.contact.address.postalCode}
                      </span>
                      <span className="text-[11px] font-mono text-ink-muted mt-1 block">
                        Visits arranged by advance appointment
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hours of Operation */}
                <div className="border border-border-structural bg-canvas-card p-5">
                  <div className="flex items-start gap-3.5">
                    <Clock className="w-4 h-4 text-accent-bronze mt-1 shrink-0" aria-hidden="true" />
                    <div className="w-full">
                      <span className="text-[10px] font-mono uppercase tracking-architectural text-ink-muted block mb-1">
                        Workshop Hours
                      </span>
                      <div className="space-y-1 text-xs font-mono text-ink-secondary">
                        {COMPANY_DETAILS.contact.hours.map((h) => (
                          <div key={h.days} className="flex items-center justify-between">
                            <span className="text-ink-muted">{h.days}:</span>
                            <span className="text-ink-primary font-medium">{h.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Structured Quote Notice */}
              <div className="border border-border-structural bg-canvas-card p-5">
                <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-1.5 font-medium">
                  Have Blueprints or Exact Dimensions?
                </span>
                <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                  For formal commercial proposals, our multi-parameter quotation engine captures detailed structural specifications:
                </p>
                <Button href="/quote" variant="outline" size="sm" className="w-full">
                  <span>Go to Quotation Request Engine</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </Button>
              </div>
            </div>

            {/* Right Column: Direct Message Form (Col 6-12) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Location & Visit Protocol Section */}
      <section className="py-16 sm:py-20 bg-canvas-bg border-b border-border-structural">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-border-structural bg-canvas-card p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block">
                  Workshop Visit Protocol
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-ink-primary font-medium">
                  Consultations, Drawing Sign-Offs & Sample Inspections
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed max-w-xl">
                  Because our facility operates active metal cutting, TIG welding, and forge equipment, workshop visits are arranged strictly by appointment. This ensures a master fabricator is on hand to review CAD files, present physical metal patina coupons, and discuss your commission in detail.
                </p>
              </div>
              
              <div className="lg:col-span-5 border border-border-structural bg-canvas-card p-2 h-full min-h-[350px]">
                {/* Embedded Google Maps Iframe */}
                <iframe
                  title="iron's irony Workshop Location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d225.50562402107718!2d83.00318708180703!3d25.26755824103899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1791361944848!5m2!1sen!2sin"
                  className="w-full h-full min-h-[350px] border-0 opacity-90"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
