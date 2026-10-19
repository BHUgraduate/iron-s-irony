import type { Metadata } from "next";
import { COMPANY_DETAILS } from "@/data/company";
import { constructPageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = constructPageMetadata({
  title: "Privacy",
  description: "How iron’s irony handles the details you share when you enquire about a project.",
  path: "/privacy",
});

export default function PrivacyPage() {
  const { contact } = COMPANY_DETAILS;
  return (
    <LegalPage
      title="Privacy"
      updated="October 2026"
      sections={[
        { heading: "Who we are", body: <p>This website belongs to iron’s irony. You can reach us at {contact.email} or {contact.phoneDisplay}.</p> },
        {
          heading: "What we collect",
          body: (
            <p>
              Only what you choose to give us through the Start a Project form: your name, phone number, project details and,
              if you add them, your email, location, size, style preferences and reference links. If you contact us by
              phone, WhatsApp or email, we receive what you send.
            </p>
          ),
        },
        { heading: "How we use it", body: <p>To respond to your enquiry and to discuss your project. We do not sell your details or use them for advertising.</p> },
        {
          heading: "Where it goes",
          body: <p>Form submissions are sent from our server to the business over a private connection. WhatsApp, phone and email are handled by those services under their own policies.</p>,
        },
        {
          heading: "Cookies and tracking",
          body: <p>This website does not use advertising or tracking cookies. It may keep a small note in your browser session to carry your project choices from one page to the form. It is deleted when you close the tab.</p>,
        },
        { heading: "Your choices", body: <p>You can ask us to correct or delete the details you sent at any time by emailing {contact.email}.</p> },
      ]}
    />
  );
}
