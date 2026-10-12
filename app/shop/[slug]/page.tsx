import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Clock,
  Sliders,
  Wrench,
  ChevronRight,
  Info,
} from "lucide-react";
import {
  FEATURED_PRODUCTS,
  ProductItem,
  AVAILABILITY_LABELS,
} from "@/data/products";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProductSpecSheet } from "@/components/products/ProductSpecSheet";
import { ProductCard } from "@/components/products/ProductCard";

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return FEATURED_PRODUCTS.map((prod) => ({
    slug: prod.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const product = FEATURED_PRODUCTS.find((p) => p.slug === params.slug);
  
  if (!product) {
    return {
      title: "Product Not Found — iron’s irony",
    };
  }
  
  return {
    title: `${product.name} — iron’s irony`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} — iron’s irony`,
      description: product.shortDescription,
      images: [{ url: product.featuredImage }],
    },
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = FEATURED_PRODUCTS.find((p) => p.slug === params.slug);
  
  if (!product) {
    notFound();
  }
  
  const availabilityInfo = AVAILABILITY_LABELS[product.availability];
  const relatedProducts = FEATURED_PRODUCTS.filter(
    (p) =>
      p.slug !== product.slug &&
      (p.category === product.category || p.availability === product.availability)
  ).slice(0, 3);

  return (
    <main id="main-content" className="flex-1 flex flex-col bg-canvas-bg">
      {/* Breadcrumb Trail */}
      <div className="border-b border-border-subtle bg-canvas-subtle/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Shop", href: "/shop" },
              { label: product.name, href: `/shop/${product.slug}` },
            ]}
          />
        </div>
      </div>

      {/* Product Hero Showcase */}
      <section className="border-b border-border-structural py-12 sm:py-16 bg-canvas-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left: Gallery Column (Col 1-7) */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Primary Feature Image */}
              <div className="border border-border-structural bg-canvas-card p-3 shadow-sm">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-canvas-dark">
                  <Image
                    src={product.featuredImage}
                    alt={product.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-canvas-bg/95 backdrop-blur-sm border border-border-structural px-3 py-1 text-xs font-mono uppercase tracking-architectural text-ink-primary font-medium">
                    {availabilityInfo.badge}
                  </div>
                </div>
              </div>

              {/* Secondary Gallery Previews */}
              {product.galleryImages.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {product.galleryImages.map((imgUrl, idx) => (
                    <div
                      key={imgUrl + idx}
                      className="border border-border-structural bg-canvas-card p-2"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-canvas-dark">
                        <Image
                          src={imgUrl}
                          alt={`${product.name} detail perspective 0${idx + 1}`}
                          fill
                          sizes="(max-width: 768px) 33vw, 20vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Honest Sample Data Banner */}
              {product.isSampleData && (
                <div className="border border-dashed border-border-structural bg-canvas-subtle p-4 flex items-start gap-3 text-xs font-mono text-ink-secondary">
                  <Info
                    className="w-4 h-4 text-accent-bronze mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <p>
                    <strong className="text-ink-primary uppercase tracking-wider">
                      Atelier Specification Notice:
                    </strong>{" "}
                    This model demonstrates a representative design framework.
                    Every piece is fabricated upon quotation confirmation with
                    dimensions calibrated to your specific substrate reveals.
                  </p>
                </div>
              )}
            </div>

            {/* Right: Product Editorial & Sizing Column (Col 8-12) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span
                    className="w-2 h-2 bg-accent-bronze inline-block"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze font-medium">
                    {product.eyebrow}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-ink-primary leading-tight mb-4">
                  {product.name}
                </h1>
                
                {/* Pricing Notice */}
                <div className="border-t border-b border-border-structural py-3.5 my-5 bg-canvas-subtle/40 px-4">
                  <span className="text-[11px] font-mono uppercase tracking-architectural text-ink-muted block mb-0.5">
                    Commercial Costing Basis
                  </span>
                  <span className="text-sm sm:text-base font-mono font-medium text-ink-primary">
                    {product.priceDisplay}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed mb-6">
                  {product.fullDescription}
                </p>

                {/* Key Features Bullet List */}
                <div className="mb-6 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-architectural text-ink-primary block font-medium">
                    Engineering Highlights
                  </span>
                  <ul className="space-y-1.5 text-xs font-mono text-ink-secondary">
                    {product.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <Check
                          className="w-3.5 h-3.5 text-accent-bronze mt-0.5 shrink-0"
                          aria-hidden="true"
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Fulfillment Description Box */}
                <div className="border border-border-structural bg-canvas-subtle p-4 mb-6">
                  <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-1">
                    Fulfillment • {availabilityInfo.label}
                  </span>
                  <p className="text-xs text-ink-secondary leading-normal">
                    {availabilityInfo.desc}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-border-structural">
                <Button
                  href={`/quote?product=${product.slug}`}
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Request a Quote for this Model
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="md"
                  className="w-full"
                >
                  Discuss Dimensions With Fabricators
                </Button>
              </div>
              <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-ink-muted">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-accent-bronze" />
                  <span>Lead Time: {product.leadTimeWeeks}</span>
                </span>
                <span>Category: {product.categoryLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications & Customization Capabilities */}
      <section className="py-16 sm:py-20 bg-canvas-subtle border-b border-border-structural">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Full Spec Table */}
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Detailed Parameters"
                title="Engineering Specifications"
                description="Verified dimensions, metallurgical grade, weight mass, and protective surface treatments."
              />
              <ProductSpecSheet
                specifications={product.specifications}
                leadTime={product.leadTimeWeeks}
              />
            </div>

            {/* Right Column: Customization Possibilities */}
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Bespoke Adjustment"
                title="Customization Options"
                description="Every aspect can be adjusted to harmonize with your project's physical constraints."
              />
              <div className="border border-border-structural bg-canvas-card p-6 sm:p-7 space-y-6">
                <div className="space-y-3">
                  <h4 className="font-serif text-xl text-ink-primary font-medium">
                    Adjustable Parameters
                  </h4>
                  <ul className="space-y-2.5 text-xs font-mono text-ink-secondary">
                    {product.customizationDetails.map((detail, idx) => (
                      <li key={detail} className="flex items-start gap-2.5">
                        <span
                          className="w-1.5 h-1.5 bg-accent-bronze mt-1.5 shrink-0"
                          aria-hidden="true"
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-border-subtle pt-6">
                  <h4 className="font-serif text-lg text-ink-primary font-medium mb-2">
                    Installation Support
                  </h4>
                  <p className="text-xs text-ink-secondary leading-relaxed">
                    {product.specifications.installationOffered
                      ? "Professional on-site installation and chemical anchor mounting is available depending on project location. Alternatively, we ship with pre-welded bracket sleeves and structural fixing hardware for contractor handover."
                      : "Supplied with precision mounting hardware, templating drawings, and fixing guidelines ready for your general contractor or carpenter."}
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href={`/quote?product=${product.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-architectural text-accent-bronze font-medium hover:text-accent-bronze-hover transition-colors"
                  >
                    <span>Specify your custom dimensions</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products / Sibling Catalog Models */}
      {relatedProducts.length > 0 && (
        <section className="py-16 sm:py-24 bg-canvas-bg border-b border-border-structural">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
              <div>
                <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-1">
                  Atelier Alternatives
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-ink-primary">
                  Related Ironwork Models
                </h3>
              </div>
              <div className="mt-4 sm:mt-0">
                <Button href="/shop" variant="outline" size="sm">
                  <span>View All Models</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2" aria-hidden="true" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quote Banner Callout */}
      <section className="py-16 sm:py-20 bg-canvas-dark text-canvas-bg border-b border-border-iron">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-2">
              Commence Fabrication
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-canvas-bg">
              Ready to Order or Customize {product.name}?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-ink-muted leading-relaxed">
              Submit your opening dimensions, photographs of your existing reveal,
              or architectural blueprints. We calculate material weights and
              provide an itemized commercial proposal.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                href={`/quote?product=${product.slug}`}
                variant="accent"
                size="md"
              >
                Request an Itemized Quote
              </Button>
              <Button href="/contact" variant="dark" size="md">
                Speak With Our Atelier
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
