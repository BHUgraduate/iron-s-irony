import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { BROWSABLE_CATEGORIES, DESIGNS, MADE_TO_ORDER } from "@/data/catalogue";
import { SITE_URL, constructPageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Display, Eyebrow, Lead } from "@/components/ui/Type";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { CatalogueBrowser } from "@/components/catalogue/CatalogueBrowser";
import { ProductGrid } from "@/components/catalogue/ProductGrid";
import { CustomEnquiry } from "@/components/catalogue/CustomEnquiry";
import { CataloguePdfLink } from "@/components/catalogue/CatalogueCTA";

export const metadata: Metadata = constructPageMetadata({
  title: "Catalogue: Architectural Ironwork Designs",
  description:
    "Browse iron’s irony’s collection of gates, staircases, balconies, grills and architectural ironwork, then make any design your own with a custom enquiry.",
  path: "/catalogue",
});

export default function CataloguePage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "iron’s irony catalogue",
    url: `${SITE_URL}/catalogue`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: DESIGNS.map((d, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: d.work.title,
        url: `${SITE_URL}/catalogue/${d.slug}`,
      })),
    },
  };

  return (
    <main id="main-content" className="flex-1 flex flex-col">
      <JsonLd data={itemList} />
      <JsonLd data={generateBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Catalogue", path: "/catalogue" }])} />

      <PageHero
        eyebrow="The collection"
        lines={["Architectural ironwork,", "designed to belong."]}
        lead="The designs we make, and the custom possibilities behind each one. Browse, imagine it on your building, then talk to us."
        drawing="architectural"
        className="[&_h1]:text-[clamp(2.2rem,6vw,5rem)]"
      >
        <a
          href="#collection"
          className="inline-flex items-center justify-center gap-3 border border-canvas-bg bg-canvas-bg text-iron-950 hover:bg-accent-amber hover:border-accent-amber transition-colors duration-300 px-7 py-4 min-h-[52px] micro font-medium tracking-[0.16em]"
        >
          Explore collection
        </a>
        <MagneticButton href="start" variant="outline-light" arrow={false} prefill="Something else">
          Request a custom design
        </MagneticButton>
      </PageHero>

      <Section id="collection" tone="light" pad="md" labelledBy="collection-heading">
        <Eyebrow className="mb-6">Discover</Eyebrow>
        <Display id="collection-heading" size="sm" lines={["Choose a category,", "open a design."]} />
        <p className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-ink-muted">
          These designs are drawn to show the kind of piece we make. They are not photographs of completed projects;
          photography is added here as it becomes available.
        </p>
        <div className="mt-12 sm:mt-16">
          <Suspense fallback={<ProductGrid designs={DESIGNS} />}>
            <CatalogueBrowser designs={DESIGNS} categories={BROWSABLE_CATEGORIES} />
          </Suspense>
        </div>
      </Section>

      {MADE_TO_ORDER.length > 0 && (
        <Section tone="concrete" pad="sm" labelledBy="also-made">
          <div className="grid lg:grid-cols-12 gap-x-16 gap-y-8 items-start">
            <div className="lg:col-span-5">
              <Eyebrow className="mb-4">
                <span id="also-made">Also made to order</span>
              </Eyebrow>
              <p className="font-serif text-3xl sm:text-4xl leading-tight">Not every piece has a drawing here yet.</p>
            </div>
            <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-x-8">
              {MADE_TO_ORDER.map((s) => (
                <li key={s.slug} className="border-t border-iron-950/25">
                  <Link href={`/services/${s.slug}`} className="group flex items-baseline justify-between gap-4 py-5">
                    <span>
                      <span className="block display text-[1.4rem]">{s.title}</span>
                      <span className="block mt-1 text-[0.95rem] text-ink-secondary">{s.line}</span>
                    </span>
                    <span className="micro transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      <Section tone="dark" pad="md" labelledBy="make-it-yours">
        <CustomEnquiry />
      </Section>

      <Section tone="light" pad="sm">
        <Reveal className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="font-serif text-2xl sm:text-3xl max-w-xl leading-snug">
            Prefer to talk it through? Call or message the workshop and we will start from what you have.
          </p>
          <div className="flex flex-col sm:items-end gap-1">
            <MagneticButton href="/contact" variant="dark">
              Contact iron’s irony
            </MagneticButton>
            <CataloguePdfLink />
          </div>
        </Reveal>
      </Section>
    </main>
  );
}
