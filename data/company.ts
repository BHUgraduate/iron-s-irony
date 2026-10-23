/**
 * Single source of truth for business details.
 *
 * Verified = present in the original repository supplied by the owner.
 * Anything the owner has not supplied is `null` and the UI simply omits it.
 * Never fill a null with a guess. Hycyon (the web developer) is a separate business and its
 * address must never appear here.
 */

export interface NavigationLink {
  label: string;
  href: string;
  description?: string;
}

export const COMPANY_DETAILS = {
  name: "iron’s irony",
  tagline: "Building, Architectural & Decorative Ironwork",
  mission: "Gates, railings, balconies, staircases, grills and custom ironwork, made to become part of the building.",
  contact: {
    phone: "+918853358005",
    phoneDisplay: "+91 88533 58005",
    whatsapp: "918853358005",
    email: "bhugraduate@gmail.com",
    /** Verified by the owner: Google Maps location. The street address text has not been supplied, so none is shown. */
    mapsUrl: "https://maps.app.goo.gl/jxbGMECAcXPtNkHG6?g_st=ic" as string | null,
    /** Owner to supply as text. Rendered only when set: { lines: ["…"], city: "…" } */
    address: null as null | { lines: string[]; city?: string },
    /** Owner to supply. Rendered only when set, e.g. ["Mon to Sat, 9am to 6pm"] */
    hours: null as null | string[],
    /** Owner to supply, e.g. "Varanasi and nearby cities" */
    serviceArea: null as null | string,
  },
  /** Owner to supply full URLs. Rendered only when set. */
  socials: {} as Partial<Record<"instagram" | "facebook" | "linkedin" | "pinterest" | "youtube", string>>,
  developer: { name: "Hycyon" },
};

export const MAIN_NAVIGATION: NavigationLink[] = [
  { label: "Work", href: "/projects", description: "What we make, and how it comes together" },
  { label: "Services", href: "/services", description: "Gates, railings, balconies and more" },
  { label: "Catalogue", href: "/catalogue", description: "Browse designs and make one your own" },
  { label: "Process", href: "/process", description: "From measuring to installation" },
  { label: "About", href: "/about", description: "How we think about iron" },
  { label: "Contact", href: "/contact", description: "Talk to us about your project" },
];

export const SECONDARY_NAVIGATION: NavigationLink[] = [
  { label: "Who we work with", href: "/customers" },
  { label: "FAQ", href: "/faq" },
  { label: "Feedback", href: "/feedback" },
];

/** Hash target of the project configurator. Use <StartLink> / MagneticButton href="start". */
export const START_ANCHOR = "#start";
export const START_PAGE = "/contact";
