import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { COMPANY_DETAILS, MAIN_NAVIGATION, SERVICE_NAV_LINKS } from "@/data/company";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-structural bg-canvas-subtle text-ink-primary mt-auto">
      {/* Upper Atelier Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Manifesto & Scope (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="font-serif text-3xl font-medium tracking-tight text-ink-primary block"
            >
              iron’s irony
            </Link>
            <p className="text-xs font-mono uppercase tracking-architectural text-accent-bronze">
              {COMPANY_DETAILS.tagline}
            </p>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-sm">
              Custom ironwork engineered for structural permanence, refined architectural aesthetics, and lasting character. Fabricated for private residences, commercial developments, and architectural practices.
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-mono text-ink-muted">
                Digital Product & Architecture:{" "}
                <span className="text-ink-primary font-medium">
                  {COMPANY_DETAILS.developer.name}
                </span>
              </span>
            </div>
          </div>

          {/* Fabrication Services Links (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-architectural text-ink-primary border-b border-border-structural pb-2">
              Fabrication
            </h3>
            <ul className="space-y-2 text-xs font-mono">
              {SERVICE_NAV_LINKS.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-ink-secondary hover:text-ink-primary transition-colors block py-0.5"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Atelier Navigation (Col 7-8) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-architectural text-ink-primary border-b border-border-structural pb-2">
              Atelier
            </h3>
            <ul className="space-y-2 text-xs font-mono">
              {MAIN_NAVIGATION.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ink-secondary hover:text-ink-primary transition-colors block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/faq"
                  className="text-ink-secondary hover:text-ink-primary transition-colors block py-0.5"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Workshop Inquiries & Placeholders (Col 9-12) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-architectural text-ink-primary border-b border-border-structural pb-2">
              Workshop & Enquiries
            </h3>
            <div className="space-y-2 text-xs font-mono text-ink-secondary">
              <p>
                <span className="text-ink-muted">Telephone: </span>
                <span className="text-ink-primary">{COMPANY_DETAILS.contact.phone}</span>
              </p>
              <p>
                <span className="text-ink-muted">Direct Email: </span>
                <span className="text-ink-primary">{COMPANY_DETAILS.contact.email}</span>
              </p>
              <p>
                <span className="text-ink-muted">Atelier Facility: </span>
                <span className="text-ink-primary">{COMPANY_DETAILS.contact.address.line1}</span>
              </p>
              <p>
                <span className="text-ink-muted">Standard Hours: </span>
                <span className="text-ink-primary">{COMPANY_DETAILS.contact.hours[0].hours}</span>
              </p>
            </div>

            <div className="pt-3">
              <Link
                href="/quote"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-architectural text-accent-bronze hover:text-accent-bronze-hover font-medium"
              >
                <span>Submit Specification for Quotation</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Structural Hairline Divider & Legal Strip */}
      <div className="border-t border-border-structural py-6 bg-canvas-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono text-ink-muted">
          <p>
            &copy; {currentYear} {COMPANY_DETAILS.name}. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-ink-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-ink-primary transition-colors">
              Terms of Fabrication
            </Link>
            <span>
              Engineered by{" "}
              <span className="text-ink-primary font-medium">
                {COMPANY_DETAILS.developer.name}
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}