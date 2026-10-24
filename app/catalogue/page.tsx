import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { BROWSABLE_CATEGORIES, DESIGNS, MADE_TO_ORDER } from "@/data/catalogue";
import { SITE_URL, constructPageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { Display, Eyebrow, Lead } from "@/components/ui/Type";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { CatalogueBrowser } from "@/components/catalogue/CatalogueBrowser";
import { ProductGrid } from "@/components/catalogue/ProductGrid";
import { CustomEnquiry } from "@/components/catalogue/CustomEnquiry";
import { HowItWorks } from "@/components/catalogue/HowItWorks";
import { CataloguePdfLink } from "@/components/catalogue/CatalogueCTA";

export const metadata: Metadata = constructPageMetadata({
  title: "Catalogue: Architectural Ironwork Designs",
  description:
    "Browse iron’s irony’s collection of gates, staircases, balconies, grills and architectural ironwork, then make any design your own with a custom enquiry.",
  path: "/catalogue",
});

const heroDesign = DESIGNS.find((d) => d.featured) ?? DESIGNS[0];

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
        name: d.name,
        url: `${SITE_URL}/catalogue/${d.slug}`,
      })),
    },
  };

  return (
    <main id="main-content" className="flex-1 flex flex-col">
      <JsonLd data={itemList} />
      <JsonLd data={generateBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Catalogue", path: "/catalogue" }])} />

      <section
        data-hero="dark"
        data-tone="dark"
        className="relative isolate overflow-hidden bg-iron-950 text-canvas-bg grain -mt-[var(--header-h)] pt-[calc(var(--header-h)+2.5rem)] pb-14 sm:pb-20"
      >
        <div className="absolute inset-0 blueprint-grid opacity-50" aria-hidden="true" />
        <div className="relative z-10 max-w-[88rem] mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-x-12 gap-y-10 items-end">
          <div className="lg:col-span-6 lg:pb-6 order-2 lg:order-1">
            <Eyebrow className="mb-6 sm:mb-8 fade-in">The collection</Eyebrow>
            <Display as="h1" size="md" lines={["Architectural", "ironwork,", "designed", "to belong."]} immediate className="!text-[clamp(2.1rem,4.3vw,4rem)]" />
            <Lead className="mt-8 fade-up [--d:0.35s]">
              Gates and ironwork we have made, photographed as they are. Choose a design, tell us about your project, and we adapt it to fit.
            </Lead>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 fade-up [--d:0.5s]">
              <a
                href="#collection"
                className="inline-flex items-center justify-center gap-3 border border-canvas-bg bg-canvas-bg text-iron-950 hover:bg-accent-amber hover:border-accent-amber transition-colors duration-300 px-7 py-4 min-h-[52px] micro font-medium tracking-[0.16em]"
              >
                Explore collection
              </a>
              <MagneticButton href="start" variant="outline-light" arrow={false} prefill="Something else">
                Request a custom design
              </MagneticButton>
            </div>
            <p className="mt-8 micro text-canvas-bg/60 fade-in [--d:0.7s]">
              {DESIGNS.length} photographed designs · every piece made to order
            </p>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2 fade-up">
            <Link href={`/catalogue/${heroDesign.slug}`} className="group relative block mx-auto w-full max-w-[34rem] lg:max-w-none lg:ml-auto lg:w-[84%]" aria-label={`${heroDesign.name}, view design`}>
              <div className="relative overflow-hidden bg-iron-900" style={{ aspectRatio: `${heroDesign.hero.width} / ${heroDesign.hero.height}` }}>
                <Image
                  src={heroDesign.hero.src}
                  alt={heroDesign.hero.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  placeholder="blur"
                  blurDataURL={heroDesign.hero.blurDataURL}
                  className="object-cover transition-transform duration-[1600ms] ease-architectural group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-3 micro text-canvas-bg/70">
                {heroDesign.name} <span aria-hidden="true">→</span>
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Section id="collection" tone="light" pad="md" labelledBy="collection-heading">
        <Eyebrow className="mb-6">Discover</Eyebrow>
        <Display id="collection-heading" size="sm" lines={["Choose a category,", "open a design."]} />
        <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-ink-secondary">
          Every piece here was made to order, and almost everything can be adapted: dimensions, material, finish, colour and detailing.
          Use a design as a starting point.
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

      <Section tone="light" pad="md" labelledBy="how-heading">
        <Eyebrow className="mb-6">How it works</Eyebrow>
        <Display id="how-heading" size="sm" lines={["From a design", "to a quotation."]} className="mb-12" />
        <HowItWorks />
      </Section>

      <Section tone="dark" pad="md" labelledBy="make-it-yours">
        <CustomEnquiry />
      </Section>

      <Section tone="concrete" pad="sm">
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
