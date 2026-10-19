import type { Metadata } from "next";
import { FAQ_DATA } from "@/data/faq";
import { constructPageMetadata, generateFAQSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Type";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { OpenChatButton } from "@/components/chat/OpenChatButton";

export const metadata: Metadata = constructPageMetadata({
  title: "FAQ: Questions Before You Start",
  description: "Straight answers about custom ironwork with iron’s irony: what we make, what to send, pricing, timing and installation.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <main id="main-content" className="flex-1 flex flex-col">
      <JsonLd data={generateFAQSchema()} />
      <PageHero size="sm" eyebrow="FAQ" lines={["Questions", "first."]} lead="Short, honest answers. If yours is not here, ask us." />
      <Section tone="light" pad="md" labelledBy="faq-list">
        <h2 id="faq-list" className="sr-only">
          Frequently asked questions
        </h2>
        <div className="max-w-3xl border-t border-iron-950/20">
          {FAQ_DATA.map((f) => (
            <details key={f.id} className="group border-b border-iron-950/20">
              <summary className="flex items-center justify-between gap-6 py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden min-h-[56px]">
                <span className="font-serif text-2xl sm:text-3xl leading-tight">{f.question}</span>
                <span aria-hidden="true" className="micro text-accent-ink transition-transform duration-300 group-open:rotate-45 text-xl">
                  +
                </span>
              </summary>
              <p className="pb-8 pr-10 text-[1.05rem] leading-relaxed text-ink-secondary">{f.answer}</p>
            </details>
          ))}
        </div>
      </Section>
      <Section tone="dark" pad="md">
        <Eyebrow className="mb-6">Still wondering?</Eyebrow>
        <p className="display display-sm max-w-3xl">Ask us, or start with what you have.</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 items-start">
          <MagneticButton href="start" variant="light">
            Start a Project
          </MagneticButton>
          <OpenChatButton className="micro min-h-[52px] px-6 border border-canvas-bg/30 hover:border-canvas-bg">
            Ask the project guide
          </OpenChatButton>
        </div>
      </Section>
    </main>
  );
}
