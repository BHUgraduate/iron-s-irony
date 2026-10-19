"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import {
  COMPANY_DETAILS,
  MAIN_NAVIGATION,
  SECONDARY_NAVIGATION,
  START_PROJECT_HREF,
} from "@/data/company";
import { EASE_IRON, whatsappLink } from "@/lib/motion";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  const reduce = useReducedMotion();
  const panel = React.useRef<HTMLDivElement>(null);
  const closeBtn = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab" || !panel.current) return;
      const f = panel.current.querySelectorAll<HTMLElement>("a[href], button");
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={panel}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 lg:hidden bg-iron-950 text-canvas-bg grain overflow-y-auto"
          initial={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
          animate={reduce ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }}
          exit={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: reduce ? 0.2 : 0.7, ease: EASE_IRON }}
        >
          <div className="relative min-h-full flex flex-col px-5 pb-8">
            <div className="h-[var(--header-h)] flex items-center justify-between">
              <span className="font-serif text-[1.65rem] font-semibold tracking-tight">iron’s irony</span>
              <button
                ref={closeBtn}
                type="button"
                onClick={onClose}
                className="h-12 px-3 flex items-center gap-2 micro"
              >
                <span>Close</span>
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Menu" className="mt-6">
              <ul>
                {MAIN_NAVIGATION.map((link, i) => {
                  const active = !link.href.includes("#") && pathname.startsWith(link.href);
                  return (
                    <motion.li
                      key={link.href}
                      className="border-t border-canvas-bg/10"
                      initial={reduce ? false : { opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 + i * 0.06, duration: 0.7, ease: EASE_IRON }}
                    >
                      <Link
                        href={link.href}
                        onClick={onClose}
                        aria-current={active ? "page" : undefined}
                        className="flex items-baseline gap-4 py-4"
                      >
                        <span className="micro text-accent-amber w-6">0{i + 1}</span>
                        <span className="display text-[2.6rem]">{link.label}</span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-6 flex gap-x-6 gap-y-1 flex-wrap micro text-canvas-bg/60">
              {SECONDARY_NAVIGATION.map((l) => (
                <Link key={l.href} href={l.href} onClick={onClose} className="py-3">
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-10 space-y-5">
              <Link
                href={START_PROJECT_HREF}
                onClick={onClose}
                className="flex items-center justify-center bg-canvas-bg text-iron-950 min-h-[56px] micro font-medium tracking-[0.16em]"
              >
                Start a Project
              </Link>
              <div className="flex flex-col gap-1 micro text-canvas-bg/70 normal-case tracking-wide">
                <a href={`tel:${COMPANY_DETAILS.contact.phone}`} className="py-2">
                  {COMPANY_DETAILS.contact.phone}
                </a>
                <a href={whatsappLink()} className="py-2" target="_blank" rel="noopener noreferrer">
                  WhatsApp the workshop
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
