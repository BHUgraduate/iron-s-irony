import type { Metadata } from "next";
import { constructPageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Type";
import { VoicesWall } from "@/components/sections/Voices";
import { FeedbackForm } from "@/components/forms/FeedbackForm";

export const metadata: Metadata = constructPageMetadata({
  title: "Feedback: Words From the People We Built For",
  description:
    "Worked with iron’s irony? Tell us how it went. With your permission, your words appear on this page once we have confirmed they are yours.",
  path: "/feedback",
});

export default function FeedbackPage() {
  return (
    <main id="main-content" className="flex-1 flex flex-col">
      <PageHero
        eyebrow="Feedback"
        lines={["Your words,", "hung on the wall."]}
        lead="Worked with us on a gate, a railing or a staircase? Tell us how it went. With your permission, it appears here."
        drawing="gate"
        size="sm"
      />

      <Section tone="light" pad="md" labelledBy="voices-heading">
        <Eyebrow className="mb-6">In their words</Eyebrow>
        <h2 id="voices-heading" className="sr-only">
          Feedback from people who have worked with us
        </h2>
        <VoicesWall />
      </Section>

      <section id="share" aria-labelledby="share-heading" data-tone="dark" className="relative bg-iron-950 text-canvas-bg grain py-24 sm:py-36">
        <div className="relative max-w-[88rem] mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_minmax(0,40rem)] gap-14 lg:gap-24">
          <div>
            <Eyebrow className="mb-8">Share your experience</Eyebrow>
            <h2 id="share-heading" className="display display-md">
              How did it
              <br />
              go?
            </h2>
            <ul className="mt-10 max-w-md space-y-4 text-lg leading-relaxed text-canvas-bg/75">
              <li>We read every message, and we reply to the ones that ask for it.</li>
              <li>Your words appear only if you say so, and only after we have confirmed they are yours.</li>
              <li>Your email or phone is used to confirm it is you. It is never published.</li>
              <li>We do not edit what you say beyond fixing typos, and we do not write feedback ourselves.</li>
            </ul>
          </div>
          <div className="min-w-0 relative">
            <FeedbackForm />
          </div>
        </div>
      </section>
    </main>
  );
}
