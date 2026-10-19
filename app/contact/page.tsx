import type { Metadata } from "next";
import { COMPANY_DETAILS } from "@/data/company";
import { constructPageMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/motion";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Type";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectConfigurator } from "@/components/forms/ProjectConfigurator";
import { OpenChatButton } from "@/components/chat/OpenChatButton";

export const metadata: Metadata = constructPageMetadata({
  title: "Contact: Start a Project",
  description:
    "Talk to iron’s irony about your ironwork project. Describe what you have in mind, or call or message us on WhatsApp.",
  path: "/contact",
});

export default function ContactPage() {
  const { contact } = COMPANY_DETAILS;
  const channels = [
    { label: "Call", value: contact.phoneDisplay, href: `tel:${contact.phone}`, ext: false },
    { label: "WhatsApp", value: "Message us with photos", href: whatsappLink("Hello, I would like to discuss an ironwork project."), ext: true },
    { label: "Email", value: contact.email, href: `mailto:${contact.email}`, ext: false },
  ];

  return (
    <main id="main-content" className="flex-1 flex flex-col">
      <PageHero
        eyebrow="Contact"
        lines={["Let’s talk about", "your project."]}
        lead="Describe what you have in mind below, or reach us directly. A photograph of the space is always a good start."
        drawing="custom"
      />

      <Section tone="light" pad="md" labelledBy="direct">
        <Eyebrow className="mb-8">
          <span id="direct">Prefer to talk?</span>
        </Eyebrow>
        <ul className="grid md:grid-cols-3 border-t border-iron-950/20">
          {channels.map((c, i) => (
            <Reveal key={c.label} as="li" delay={i * 0.06} className="border-b md:border-b-0 md:border-r last:border-r-0 border-iron-950/20 md:px-8 first:md:pl-0">
              <a
                href={c.href}
                {...(c.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group block py-8"
              >
                <p className="micro text-ink-muted">{c.label}</p>
                <p className={`mt-3 leading-[1.1] transition-transform duration-500 ease-architectural group-hover:translate-x-1 ${c.label === "Email" ? "font-semibold text-[clamp(1.1rem,1.7vw,1.5rem)] break-all" : "display text-[clamp(1.3rem,2.4vw,2rem)]"}`}>
                  {c.value}
                </p>
              </a>
            </Reveal>
          ))}
        </ul>
        <div className="mt-10 grid sm:grid-cols-2 gap-8 text-[1rem] text-ink-secondary">
          <p>
            Not sure where to start?{" "}
            <OpenChatButton className="underline underline-offset-4 hover:text-iron-950">Ask the project guide.</OpenChatButton>
          </p>
          {(contact.mapsUrl || contact.address || contact.hours || contact.serviceArea) && (
            <div className="space-y-2">
              {contact.mapsUrl && (
                <p>
                  <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-iron-950">
                    Find us on Google Maps
                  </a>
                </p>
              )}
              {contact.address && (
                <address className="not-italic">
                  {contact.address.lines.join(", ")}
                  {contact.address.city ? `, ${contact.address.city}` : ""}
                </address>
              )}
              {contact.hours && <p>{contact.hours.join(", ")}</p>}
              {contact.serviceArea && <p>Serving {contact.serviceArea}</p>}
            </div>
          )}
        </div>
      </Section>

      <ProjectConfigurator heading="start" />
    </main>
  );
}
