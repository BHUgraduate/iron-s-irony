import * as React from "react";
import Link from "next/link";
import { COMPANY_DETAILS, SECONDARY_NAVIGATION, SERVICE_NAV_LINKS, START_PROJECT_HREF } from "@/data/company";
import { whatsappLink } from "@/lib/motion";
import { OpenChatButton } from "@/components/chat/OpenChatButton";

export function Footer() {
  const year = new Date().getFullYear();
  const { contact } = COMPANY_DETAILS;

  return (
    <footer className="relative bg-iron-950 text-canvas-bg grain overflow-hidden mt-auto">
      <div className="relative max-w-[88rem] mx-auto px-5 sm:px-8 pt-24 sm:pt-36 pb-10">
        <p className="micro text-accent-amber mb-8">Next step</p>
        <p className="display display-md max-w-5xl">
          Let’s build
          <br />
          something that lasts.
        </p>
        <Link
          href={START_PROJECT_HREF}
          className="mt-12 inline-flex items-center min-h-[56px] px-8 bg-canvas-bg text-iron-950 micro font-medium tracking-[0.16em] hover:bg-accent-amber transition-colors duration-300"
        >
          Start a Project
        </Link>

        <div className="mt-24 sm:mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-canvas-bg/15 pt-10">
          <div>
            <h2 className="micro text-canvas-bg/50 mb-4">Contact</h2>
            <ul className="space-y-1 text-[0.95rem]">
              <li>
                <a className="inline-block py-1.5 link-reveal" href={`tel:${contact.phone}`}>
                  {contact.phone}
                </a>
              </li>
              <li>
                <a className="inline-block py-1.5 link-reveal" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </li>
              <li>
                <a className="inline-block py-1.5 link-reveal" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <OpenChatButton className="inline-block py-1.5 link-reveal text-left">
                  Ask the project assistant
                </OpenChatButton>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="micro text-canvas-bg/50 mb-4">Services</h2>
            <ul className="space-y-1 text-[0.95rem]">
              {SERVICE_NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link className="inline-block py-1.5 link-reveal" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="micro text-canvas-bg/50 mb-4">Explore</h2>
            <ul className="space-y-1 text-[0.95rem]">
              <li>
                <Link className="inline-block py-1.5 link-reveal" href="/projects">
                  Projects
                </Link>
              </li>
              {SECONDARY_NAVIGATION.map((l) => (
                <li key={l.href}>
                  <Link className="inline-block py-1.5 link-reveal" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link className="inline-block py-1.5 link-reveal" href="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="micro text-canvas-bg/50 mb-4">Workshop</h2>
            <address className="not-italic text-[0.95rem] leading-relaxed text-canvas-bg/80">
              {contact.address.line1}
              <br />
              {contact.address.line2}
              <br />
              {contact.address.city}, {contact.address.region} {contact.address.postalCode}
            </address>
            <p className="mt-3 text-[0.95rem] text-canvas-bg/80">
              {contact.hours[0].days}, {contact.hours[0].hours}
            </p>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-canvas-bg/15 flex flex-col sm:flex-row justify-between gap-4 micro text-canvas-bg/50 normal-case tracking-wide">
          <p>
            &copy; {year} {COMPANY_DETAILS.name}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="py-1 link-reveal">
              Privacy
            </Link>
            <Link href="/terms" className="py-1 link-reveal">
              Terms
            </Link>
            <span>Site by {COMPANY_DETAILS.developer.name}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
