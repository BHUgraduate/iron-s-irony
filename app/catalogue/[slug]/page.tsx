import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DESIGNS, designReference, designWhatsApp, getDesign, relatedDesigns } from "@/data/catalogue";
import { SITE_URL, constructPageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { whatsappLink } from "@/lib/motion";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { Display, Eyebrow } from "@/components/ui/Type";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { ProductGallery } from "@/components/catalogue/ProductGallery";
import { ProductSpecifications } from "@/components/catalogue/ProductSpecifications";
import { RelatedProducts } from "@/components/catalogue/RelatedProducts";
import { CustomEnquiry } from "@/components/catalogue/CustomEnquiry";
import { HowItWorks } from "@/components/catalogue/HowItWorks";
import { CataloguePdfLink } from "@/components/catalogue/CatalogueCTA";

export function generateStaticParams() {
  return DESIGNS.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const d = getDesign(params.slug);
  if (!d) return {};
  return constructPageMetadata({
    title: `${d.name} | Catalogue`,
    description: `${d.summary} Made to order and adapted to your project.`.slice(0, 200),
    path: `/catalogue/${d.slug}`,
    ownImage: true, // app/catalogue/[slug]/opengraph-image.tsx
  });
}

export default function DesignPage({ params }: { params: { slug: string } }) {
  const d = getDesign(params.slug);
  if (!d) notFound();
  const related = relatedDesigns(d);
  const waLink = whatsappLink(designWhatsApp(d, SITE_URL));

  return (
    <main id="main-content" className="flex-1 flex flex-col">
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Catalogue", path: "/catalogue" },
          { name: d.name, path: `/catalogue/${d.slug}` },
        ])}
      />

      <section
        data-hero="dark"
        data-tone="dark"
        aria-labelledby="design-name"
        className="relative isolate bg-iron-950 text-canvas-bg grain -mt-[var(--header-h)] pt-[calc(var(--header-h)+1.25rem)] pb-14 sm:pb-20"
      >
        <div className="relative z-10 max-w-[88rem] mx-auto px-5 sm:px-8">
          <nav aria-label="Breadcrumb" className="micro text-canvas-bg/60 mb-5 flex flex-wrap gap-x-3">
            <Link href="/catalogue" className="py-2 link-reveal">
              Catalogue
            </Link>
            <span aria-hidden="true">/</span>
            <Link href={`/catalogue?category=${d.category}`} className="py-2 link-reveal">
              {d.service.title}
            </Link>
          </nav>
          <div className="grid lg:grid-cols-12 gap-x-12 gap-y-10 items-start">
            <div className="lg:col-span-8 min-w-0">
              <ProductGallery design={d} />
            </div>
            <div className="min-w-0 lg:col-span-4 lg:sticky lg:top-[calc(var(--header-h)+1.5rem)]">
              <Eyebrow className="mb-5">
                {d.service.title}
                {d.type ? ` · ${d.type}` : ""}
              </Eyebrow>
              <h1 id="design-name" className="display text-[clamp(2rem,3.6vw,3.2rem)] leading-[0.98]">
                {d.name}
              </h1>
              <p className="mt-6 text-[1.1rem] leading-relaxed text-canvas-bg/80">{d.summary}</p>
              {d.description && <p className="mt-4 text-[1rem] leading-relaxed text-canvas-bg/70">{d.description}</p>}

              <div className="mt-8 border-l-2 border-accent-amber pl-5">
                <p className="micro text-accent-amber">Customisation available</p>
                <p className="mt-2 text-[0.98rem] leading-relaxed text-canvas-bg/80">
                  Dimensions, material, finish, colour and detailing can be adapted to your project.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <MagneticButton href="start" variant="light" prefill={d.service.type} prefillDesign={designReference(d, SITE_URL)}>
                  Request a quote
                </MagneticButton>
                <MagneticButton href={waLink} external variant="outline-light" arrow={false}>
                  Ask about this design
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section tone="concrete" pad="md" labelledBy="spec-heading">
        <Eyebrow className="mb-6">The details</Eyebrow>
        <Display id="spec-heading" size="sm" lines={["The design,", "and your project."]} className="mb-14" />
        <ProductSpecifications design={d} />
      </Section>

      <Section tone="light" pad="md" labelledBy="how-heading">
        <Eyebrow className="mb-6">How it works</Eyebrow>
        <Display id="how-heading" size="sm" lines={["From this design", "to a quotation."]} className="mb-12" />
        <HowItWorks />
      </Section>

      <Section tone="dark" pad="md" labelledBy="make-it-yours">
        <CustomEnquiry design={d} />
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
            <MagneticButton href={`/services/${d.service.slug}`} variant="outline-dark" arrow={false}>
              About {d.service.title.toLowerCase()}
            </MagneticButton>
            <CataloguePdfLink />
          </div>
        </Section>
      )}
    </main>
  );
}
