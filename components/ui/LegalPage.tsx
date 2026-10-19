import * as React from "react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

export function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: { heading: string; body: React.ReactNode }[];
}) {
  return (
    <main id="main-content" className="flex-1 flex flex-col">
      <PageHero size="sm" eyebrow={`Updated ${updated}`} lines={[title]} className="[&_h1]:text-[clamp(2rem,6vw,4.5rem)]" />
      <Section tone="light" pad="md">
        <div className="max-w-2xl space-y-12">
          {sections.map((s, i) => (
            <section key={s.heading}>
              <h2 className="font-serif text-2xl sm:text-3xl">
                <span className="micro text-ink-muted mr-3 align-middle">0{i + 1}</span>
                {s.heading}
              </h2>
              <div className="mt-4 space-y-3 text-[1.02rem] leading-relaxed text-ink-secondary">{s.body}</div>
            </section>
          ))}
        </div>
      </Section>
    </main>
  );
}
