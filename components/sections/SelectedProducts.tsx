import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FEATURED_PRODUCTS } from "@/data/products";
import { Button } from "@/components/ui/Button";

export function SelectedProducts() {
  return (
    <section className="py-16 sm:py-24 bg-canvas-subtle border-b border-border-structural">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="Catalog & Standard Models"
            title="Pre-Engineered Ironwork Designs"
            description="Explore our standardized frameworks. Every model is built to order and can be calibrated to your exact opening dimensions."
            className="mb-0"
          />
          <div className="mt-6 md:mt-0">
            <Button href="/shop" variant="outline" size="md">
              <span>View Full Catalog</span>
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* 3-Column Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-canvas-card border border-border-structural flex flex-col justify-between group"
            >
              <div>
                {/* Product Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-canvas-dark border-b border-border-structural">
                  <Image
                    src={product.featuredImage}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-canvas-bg/95 border border-border-structural px-2.5 py-1 text-[10px] font-mono uppercase tracking-architectural text-ink-primary">
                    {product.availability === "made_to_order" ? "Made to Order" : "Custom Sizing"}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <span className="text-[11px] font-mono uppercase tracking-architectural text-accent-bronze block mb-1">
                    {product.categoryLabel}
                  </span>

                  <h3 className="font-serif text-xl sm:text-2xl text-ink-primary font-medium mb-2 group-hover:text-accent-bronze transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                    {product.shortDescription}
                  </p>

                  <div className="border-t border-border-subtle pt-3 text-xs font-mono text-ink-muted space-y-1">
                    <p>
                      <span className="text-ink-secondary">Material: </span>
                      {product.specifications.material}
                    </p>
                    <p>
                      <span className="text-ink-secondary">Lead Time: </span>
                      {product.leadTimeWeeks}
                    </p>
                  </div>
                </div>
              </div>

              {/* Price & Action Footer */}
              <div className="p-6 border-t border-border-structural bg-canvas-subtle/50 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-architectural text-ink-muted block">
                    Pricing Basis
                  </span>
                  <span className="text-xs font-mono font-medium text-ink-primary">
                    {product.priceDisplay}
                  </span>
                </div>

                <Button href={`/shop/${product.slug}`} variant="primary" size="sm">
                  View Specs
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}