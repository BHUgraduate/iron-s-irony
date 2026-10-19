import * as React from "react";
import Link from "next/link";
import { COMPANY_DETAILS, MAIN_NAVIGATION, SECONDARY_NAVIGATION } from "@/data/company";
import { SERVICES_DATA } from "@/data/services";
import { whatsappLink } from "@/lib/motion";
import { OpenChatButton } from "@/components/chat/OpenChatButton";
import { FooterCta } from "@/components/layout/FooterCta";

const link = "inline-block py-1.5 link-reveal";

export function Footer() {
  const year = new Date().getFullYear();
  const { contact, socials } = COMPANY_DETAILS;
  const socialEntries = Object.entries(socials).filter(([, url]) => !!url) as [string, string][];

  return (
    <footer data-tone="dark" className="relative bg-iron-950 text-canvas-bg grain overflow-hidden mt-auto">
      <div className="relative max-w-[88rem] mx-auto px-5 sm:px-8 pt-24 sm:pt-40 pb-10">
        <p className="micro text-accent-amber mb-8">Next step</p>
        <p className="display display-md max-w-5xl">
          Let’s build
          <br />
          something that lasts.
        </p>
        <FooterCta />

        <div className="mt-24 sm:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 border-t border-canvas-bg/20 pt-10">
          <div className="col-span-2 lg:col-span-1">
            <h2 className="micro text-canvas-bg/70 mb-4">Contact</h2>
            <ul className="text-[0.95rem]">
              <li>
                <a className={link} href={`tel:${contact.phone}`}>
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a className={link} href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a className={link} href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </li>
              <li>
                <OpenChatButton className={`${link} text-left`}>Ask the project guide</OpenChatButton>
              </li>
            </ul>
            {contact.mapsUrl && (
              <p className="mt-2">
                <a className={link} href={contact.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Find us on Google Maps
                </a>
              </p>
            )}
            {contact.address && (
              <address className="not-italic mt-4 text-[0.95rem] leading-relaxed text-canvas-bg/80">
                {contact.address.lines.map((l) => (
                  <React.Fragment key={l}>
                    {l}
                    <br />
                  </React.Fragment>
                ))}
                {contact.address.city}
              </address>
            )}
            {contact.hours && <p className="mt-3 text-[0.95rem] text-canvas-bg/80">{contact.hours.join(", ")}</p>}
          </div>
          <div>
            <h2 className="micro text-canvas-bg/70 mb-4">Services</h2>
            <ul className="text-[0.95rem]">
              {SERVICES_DATA.map((s) => (
                <li key={s.slug}>
                  <Link className={link} href={`/services/${s.slug}`}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="micro text-canvas-bg/70 mb-4">Explore</h2>
            <ul className="text-[0.95rem]">
              {[...MAIN_NAVIGATION.filter((l) => l.href !== "/contact"), ...SECONDARY_NAVIGATION].map((l) => (
                <li key={l.href}>
                  <Link className={link} href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {socialEntries.length > 0 && (
            <div>
              <h2 className="micro text-canvas-bg/70 mb-4">Follow</h2>
              <ul className="text-[0.95rem]">
                {socialEntries.map(([name, url]) => (
                  <li key={name}>
                    <a className={`${link} capitalize`} href={url} target="_blank" rel="noopener noreferrer">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-16 pt-6 border-t border-canvas-bg/20 flex flex-col sm:flex-row justify-between gap-4 micro text-canvas-bg/70 normal-case tracking-wide">
          <p>
            &copy; {year} {COMPANY_DETAILS.name}
          </p>
          <div className="flex gap-6 flex-wrap">
            <Link href="/privacy" className="py-1 link-reveal">
              Privacy
            </Link>
            <Link href="/terms" className="py-1 link-reveal">
              Terms
            </Link>
            <span>Website by {COMPANY_DETAILS.developer.name}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
