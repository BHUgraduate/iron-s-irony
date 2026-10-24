import type { Metadata } from "next";
import { COMPANY_DETAILS } from "@/data/company";
import { FAQ_DATA } from "@/data/faq";
import { SERVICES_DATA } from "@/data/services";

/** Production origin. Override with NEXT_PUBLIC_SITE_URL (set in netlify.toml) if the domain ever changes. */
export const PRODUCTION_URL = "https://ironsirony.hycyon.com";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || PRODUCTION_URL).replace(/\/$/, "");
export const SITE_NAME = "iron’s irony";
const OG_ALT = "iron’s irony: gates, railings, balconies, staircases and custom ironwork";

export function constructPageMetadata({
  title,
  description,
  path = "",
  ownImage = false,
}: {
  title: string;
  description: string;
  path?: string;
  /** The route supplies its own opengraph-image file, so the site-wide share image is not repeated here. */
  ownImage?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  // Pages that define their own openGraph replace the parent's, so the share image is repeated here.
  const image = { url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: OG_ALT };
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: SITE_NAME, type: "website", locale: "en_IN", ...(ownImage ? {} : { images: [image] }) },
    twitter: { card: "summary_large_image", title, description, ...(ownImage ? {} : { images: [image.url] }) },
  };
}

/** Structured data uses only facts the owner has confirmed. Address, hours and socials are added when supplied. */
export function generateLocalBusinessSchema() {
  const { contact, socials } = COMPANY_DETAILS;
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    description: COMPANY_DETAILS.mission,
    slogan: COMPANY_DETAILS.tagline,
    telephone: contact.phone,
    email: contact.email,
    makesOffer: SERVICES_DATA.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, url: `${SITE_URL}/services/${s.slug}` },
    })),
  };
  if (contact.address) {
    schema.address = {
      "@type": "PostalAddress",
      streetAddress: contact.address.lines.join(", "),
      ...(contact.address.city ? { addressLocality: contact.address.city } : {}),
    };
  }
  if (contact.serviceArea) schema.areaServed = contact.serviceArea;
  const sameAs = Object.values(socials).filter(Boolean);
  if (sameAs.length) schema.sameAs = sameAs;
  return schema;
}

export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}
