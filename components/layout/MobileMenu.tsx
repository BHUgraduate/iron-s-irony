"use client";

import * as React from "react";
import Link from "next/link";
import { X, ArrowRight, Phone, Mail } from "lucide-react";
import { MAIN_NAVIGATION, COMPANY_DETAILS } from "@/data/company";
import { Button } from "@/components/ui/Button";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  // Lock body scroll when mobile menu is active
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key listener
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className="fixed inset-0 z-50 lg:hidden flex flex-col bg-canvas-bg"
    >
      {/* Top Bar with Brand & Close Button */}
      <div className="flex items-center justify-between px-5 h-20 border-b border-border-structural bg-canvas-bg">
        <Link
          href="/"
          onClick={onClose}
          className="font-serif text-2xl tracking-tight text-ink-primary font-medium"
        >
          iron’s irony
        </Link>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="w-10 h-10 border border-border-structural flex items-center justify-center text-ink-primary hover:border-ink-primary transition-colors"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      {/* Scrollable Navigation Body */}
      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
        <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
          <div className="text-[11px] font-mono uppercase tracking-architectural text-accent-bronze mb-4">
            Navigation
          </div>
          {MAIN_NAVIGATION.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`py-3 flex items-center justify-between border-b border-border-subtle group transition-colors ${
                  isActive ? "text-ink-primary font-medium" : "text-ink-secondary"
                }`}
              >
                <span className="font-serif text-2xl group-hover:text-ink-primary group-hover:translate-x-1 transition-transform">
                  {link.label}
                </span>
                <ArrowRight
                  className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                    isActive ? "text-accent-bronze opacity-100" : "opacity-30"
                  }`}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        {/* Inquiries & Bottom Actions */}
        <div className="pt-8 mt-6 border-t border-border-structural">
          <Button
            href="/quote"
            variant="primary"
            size="lg"
            className="w-full mb-6"
            onClick={onClose}
          >
            Request a Quote
          </Button>

          <div className="space-y-3 text-xs font-mono text-ink-muted">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent-bronze" aria-hidden="true" />
              <span>{COMPANY_DETAILS.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent-bronze" aria-hidden="true" />
              <span>{COMPANY_DETAILS.contact.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}