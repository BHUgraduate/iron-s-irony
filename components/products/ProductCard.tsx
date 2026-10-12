import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Hammer, Clock } from "lucide-react";
import { ProductItem, AVAILABILITY_LABELS } from "@/data/products";
import { Button } from "@/components/ui/Button";

export interface ProductCardProps {
  product: ProductItem;
}

export function ProductCard({ product }: ProductCardProps) {
  const availabilityInfo = AVAILABILITY_LABELS[product.availability];

  return (
    <article className="border border-border-structural bg-canvas-card flex flex-col justify-between group transition-all duration-300 hover:border-ink-primary hover:shadow-sm">
      <div>
        {/* Visual Showcase */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-canvas-dark border-b border-border-structural">
          <Image
            src={product.featuredImage}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Availability Flag */}
          <div className="absolute top-3 left-3 bg-canvas-bg/95 backdrop-blur-sm border border-border-structural px-2.5 py-1 text-[10px] font-mono uppercase tracking-architectural text-ink-primary">
            {availabilityInfo.badge}
          </div>

          {/* Sample Data Tag */}
          {product.isSampleData && (
            <div className="absolute top-3 right-3 bg-canvas-dark/80 text-canvas-bg border border-border-iron px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider">
              Atelier Model Spec
            </div>
          )}
        </div>

        {/* Product Information */}
        <div className="p-6">
          <span className="text-[11px] font-mono uppercase tracking-architectural text-accent-bronze block mb-1.5 font-medium">
            {product.categoryLabel}
          </span>
          <h3 className="font-serif text-xl sm:text-2xl text-ink-primary font-medium mb-2.5 group-hover:text-accent-bronze transition-colors">
            <Link href={`/shop/${product.slug}`}>
              {product.name}
            </Link>
          </h3>
          <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-5 line-clamp-2">
            {product.shortDescription}
          </p>

          {/* Technical Specifications Snapshot */}
          <div className="border-t border-border-subtle pt-4 space-y-2 text-xs font-mono text-ink-secondary mb-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-ink-muted uppercase">Material:</span>
              <span className="text-ink-primary font-medium truncate max-w-[180px] text-right">
                {product.specifications.material.split("&")[0]}
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-ink-muted uppercase">Deployment:</span>
              <span className="text-ink-primary">
                {product.specifications.interiorExterior}
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-ink-muted uppercase">Lead Time:</span>
              <span className="text-ink-primary flex items-center gap-1">
                <Clock className="w-3 h-3 text-accent-bronze shrink-0" aria-hidden="true" />
                <span>{product.leadTimeWeeks.split("from")[0]}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing & Specification Trigger */}
      <div className="p-5 sm:p-6 border-t border-border-structural bg-canvas-subtle/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-architectural text-ink-muted block">
            Pricing Basis
          </span>
          <span className="text-xs font-mono font-medium text-ink-primary line-clamp-1">
            {product.priceDisplay}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button href={`/shop/${product.slug}`} variant="outline" size="sm">
            View Specs
          </Button>
          <Button href={`/quote?product=${product.slug}`} variant="primary" size="sm">
            Quote
          </Button>
        </div>
      </div>
    </article>
  );
}
