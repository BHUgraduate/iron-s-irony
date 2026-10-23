import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DESIGNS, designReference, designWhatsApp, getDesign, relatedDesigns } from "@/data/catalogue";
import { SITE_URL, constructPageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { whatsappLink } from "@/lib/motion";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Display, Eyebrow } from "@/components/ui/Type";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { ProductGallery } from "@/components/catalogue/ProductGallery";
import { ProductSpecifications } from "@/components/catalogue/ProductSpecifications";
import { FinishSelector } from "@/components/catalogue/FinishSelector";
import { RelatedProducts } from "@/components/catalogue/RelatedProducts";
import { CustomEnquiry } from "@/components/catalogue/CustomEnquiry";
import { CataloguePdfLink } from "@/components/catalogue/CatalogueCTA";

export function generateStaticParams() {
  return DESIGNS.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const d = getDesign(params.slug);
  if (!d) return {};
  return constructPageMetadata({
    title: `${d.work.title} | Catalogue`,
    description: d.work.summary,
    path: `/catalogue/${d.slug}`,
    ownImage: true, // app/catalogue/[slug]/opengraph-image.tsx
  });
}

export default function DesignPage({ params }: { params: { slug: string } }) {
  const d = getDesign(params.slug);
  if (!d) notFound();
  const related = relatedDesigns(d);
  const story = [
    { label: "What is made", text: d.work.made },
    { label: "What makes it distinctive", text: d.work.interesting },
    { label: "Why people ask for it", text: d.work.why },
  ];

  return (
    <main id="main-content" className="flex-1 flex flex-col">
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Catalogue", path: "/catalogue" },
          { name: d.work.title, path: `/catalogue/${d.slug}` },
        ])}
      />

      <PageHero
        size="sm"
        eyebrow={`${d.service.title} · ${d.work.typeLabel}`}
        lines={[d.work.title]}
        lead={d.line}
        className="[&_h1]:text-[clamp(2rem,6vw,5rem)]"
      >
        <MagneticButton href="start" variant="light" prefill={d.service.type} prefillStyle={designReference(d)}>
          Request a quote
        </MagneticButton>
        <MagneticButton href={whatsappLink(designWhatsApp(d))} external variant="outline-light" arrow={false}>
          Ask about this design
        </MagneticButton>
      </PageHero>

      <Section tone="dark" pad="sm" className="!pt-0" labelledBy="gallery-heading">
        <h2 id="gallery-heading" className="sr-only">
          Gallery
        </h2>
        <ProductGallery design={d} />
        {d.representative && (
          <p className="mt-4 micro text-canvas-bg/65 normal-case tracking-wide max-w-2xl">
            A representative example, drawn to show the kind of piece. It is not a photograph of a completed project.
          </p>
        )}
      </Section>

      <Section tone="light" pad="md" labelledBy="story-heading">
        <Eyebrow className="mb-6">
          <span id="story-heading">The design</span>
        </Eyebrow>
        <p className="font-serif italic text-3xl sm:text-5xl leading-tight max-w-4xl">{d.work.summary}</p>
        <dl className="mt-16 sm:mt-20 grid md:grid-cols-3 gap-x-12 gap-y-12">
          {story.map((row, k) => (
            <Reveal key={row.label} delay={k * 0.08}>
              <dt className="micro text-accent-ink">{row.label}</dt>
              <dd className="mt-4 text-[1.05rem] leading-relaxed text-ink-secondary">{row.text}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      <Section tone="concrete" pad="md" labelledBy="spec-heading">
        <Eyebrow className="mb-6">Specification</Eyebrow>
        <Display id="spec-heading" size="sm" lines={["What we know,", "and what we settle."]} className="mb-14" />
        <ProductSpecifications design={d} />
      </Section>

      {d.finishes.length > 0 && (
        <Section tone="light" pad="md" labelledBy="finish-heading">
          <Eyebrow className="mb-6">Finishes</Eyebrow>
          <Display id="finish-heading" size="sm" lines={["Finishes", "for this design."]} className="mb-14" />
          <FinishSelector finishes={d.finishes} />
        </Section>
      )}

      <Section tone="dark" pad="md" labelledBy="make-it-yours">
        <CustomEnquiry design={d} />
      </Section>

      <Section tone="light" pad="md" labelledBy="context-heading">
        <Eyebrow className="mb-6">In context</Eyebrow>
        <Display id="context-heading" size="sm" lines={["See where it", "belongs."]} />
        <ul className="mt-12 grid sm:grid-cols-2 border-t border-iron-950/25">
          <li className="border-b border-iron-950/15 sm:border-r sm:pr-8">
            <Link href={`/projects/${d.work.slug}`} className="group block py-7">
              <p className="micro text-ink-muted">The brief</p>
              <p className="mt-2 font-serif text-2xl leading-tight transition-transform duration-500 ease-architectural group-hover:translate-x-1">
                See it in context →
              </p>
            </Link>
          </li>
          <li className="border-b border-iron-950/15 sm:pl-8">
            <Link href={`/services/${d.service.slug}`} className="group block py-7">
              <p className="micro text-ink-muted">The service</p>
              <p className="mt-2 font-serif text-2xl leading-tight transition-transform duration-500 ease-architectural group-hover:translate-x-1">
                About {d.service.title.toLowerCase()} →
              </p>
            </Link>
          </li>
        </ul>
      </Section>

      {related.length > 0 && (
        <Section tone="concrete" pad="md" labelledBy="related-heading">
          <Eyebrow className="mb-6">Keep exploring</Eyebrow>
          <Display id="related-heading" size="sm" lines={["More from the", "collection."]} className="mb-14" />
          <RelatedProducts designs={related} />
          <div className="mt-14 flex flex-col sm:flex-row sm:items-center gap-4">
            <MagneticButton href="/catalogue" variant="outline-dark" arrow={false}>
              Back to the catalogue
            </MagneticButton>
            <CataloguePdfLink />
          </div>
        </Section>
      )}
    </main>
  );
}
