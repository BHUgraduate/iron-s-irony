import { Metadata } from "next";
import { COMPANY_DETAILS } from "@/data/company";
import { FAQ_DATA } from "@/data/faq";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ironsirony.com";

export interface PageMetadataProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
}

/**
 * Generates canonical and standardized Next.js page metadata
 */
export function constructPageMetadata({
  title,
  description,
  path = "",
  image = "/opengraph-image",
  type = "website",
}: PageMetadataProps): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "iron’s irony",
      images: [
        {
          url: image.startsWith("http") ? image : `${SITE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: `${title} — iron’s irony`,
        },
      ],
      type,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.startsWith("http") ? image : `${SITE_URL}${image}`],
    },
  };
}

/**
 * Builds Schema.org LocalBusiness / ProfessionalService structured data.
 * Adheres strictly to factual policy: omits placeholders to avoid invalid schema warnings.
 */
export function generateLocalBusinessSchema() {
  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: "iron’s irony",
    url: SITE_URL,
    description: COMPANY_DETAILS.mission,
    slogan: COMPANY_DETAILS.tagline,
    knowsAbout: [
      "Building Ironwork",
      "Architectural Ironwork",
      "Decorative Ironwork",
      "Custom Metal Fabrication",
      "Structural Steel Balustrades",
      "Duplex Anti-Corrosion Systems",
      "Wrought Iron Entrance Gates",
    ],
    creator: {
      "@type": "Organization",
      name: COMPANY_DETAILS.developer.name,
      description: COMPANY_DETAILS.developer.role,
    },
  };

  // Only attach contact details if replaced with real values (not default placeholders)
  if (COMPANY_DETAILS.contact.phone && !COMPANY_DETAILS.contact.phone.includes("[")) {
    schema.telephone = COMPANY_DETAILS.contact.phone;
  }
  if (COMPANY_DETAILS.contact.email && !COMPANY_DETAILS.contact.email.includes("[")) {
    schema.email = COMPANY_DETAILS.contact.email;
  }
  if (
    COMPANY_DETAILS.contact.address.line1 &&
    !COMPANY_DETAILS.contact.address.line1.includes("[")
  ) {
    schema.address = {
      "@type": "PostalAddress",
      streetAddress: COMPANY_DETAILS.contact.address.line1,
      addressLocality: COMPANY_DETAILS.contact.address.city,
      addressRegion: COMPANY_DETAILS.contact.address.region,
      postalCode: COMPANY_DETAILS.contact.address.postalCode,
      addressCountry: COMPANY_DETAILS.contact.address.country,
    };
  }

  return schema;
}

/**
 * Generates FAQPage Schema for the knowledge base
 */
export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}