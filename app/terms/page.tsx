import type { Metadata } from "next";
import { COMPANY_DETAILS } from "@/data/company";
import { constructPageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = constructPageMetadata({
  title: "Terms of Use",
  description: "Terms for using the iron’s irony website and sending an enquiry.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of use"
      updated="October 2026"
      sections={[
        { heading: "About this website", body: <p>This website describes the kinds of ironwork iron’s irony makes. It is for information and is not an offer to supply any particular piece.</p> },
        {
          heading: "Representative examples",
          body: <p>Drawings and descriptions under Work are representative examples of the kinds of piece we make. Unless a page says it is a completed project, it is not one.</p>,
        },
        { heading: "Enquiries", body: <p>Sending an enquiry does not create an agreement. Any work, design, price and timing are agreed with you directly, separately from this website.</p> },
        { heading: "Content", body: <p>The text, drawings and design of this website belong to iron’s irony. Please ask before reusing them.</p> },
        { heading: "Contact", body: <p>Questions about these terms: {COMPANY_DETAILS.contact.email}.</p> },
      ]}
    />
  );
}
