import * as React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/company";
import { Button } from "@/components/ui/Button";

export function ContactPreview() {
  return (
    <section className="py-16 sm:py-24 bg-canvas-bg border-b border-border-structural">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Information Column (Col 1 - 6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent-bronze" />
              <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze">
                Atelier Access & Inquiries
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-ink-primary">
              Direct Workshop Communication
            </h2>

            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
              We welcome blueprint discussions, on-site survey appointments, and material inquiries. Reach out to our metalworkers directly.
            </p>

            <div className="border border-border-structural bg-canvas-subtle p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent-bronze mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-architectural text-ink-muted block">
                    Telephone
                  </span>
                  <span className="text-sm font-mono text-ink-primary font-medium">
                    {COMPANY_DETAILS.contact.phone}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent-bronze mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-architectural text-ink-muted block">
                    Direct Email
                  </span>
                  <span className="text-sm font-mono text-ink-primary font-medium">
                    {COMPANY_DETAILS.contact.email}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent-bronze mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-architectural text-ink-muted block">
                    Workshop Facility
                  </span>
                  <span className="text-sm font-mono text-ink-primary">
                    {COMPANY_DETAILS.contact.address.line1},{" "}
                    {COMPANY_DETAILS.contact.address.city}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-accent-bronze mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-architectural text-ink-muted block">
                    Standard Workshop Hours
                  </span>
                  <span className="text-sm font-mono text-ink-primary">
                    {COMPANY_DETAILS.contact.hours[0].days}: {COMPANY_DETAILS.contact.hours[0].hours}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <Button href="/contact" variant="primary" size="md">
                <span>View Full Workshop Details</span>
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
            </div>
          </div>

          {/* Interactive / Visual Map Embed (Col 7 - 12) */}
          <div className="lg:col-span-6">
            <div className="border border-border-structural bg-canvas-card p-2 shadow-sm h-full min-h-[350px]">
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
  );
}
