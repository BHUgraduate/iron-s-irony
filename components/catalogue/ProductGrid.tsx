import * as React from "react";
import { ProductCard } from "@/components/catalogue/ProductCard";
import type { CatalogueDesign } from "@/data/catalogue";

/**
 * Editorial rhythm: a wide feature beside a tall card, then a row of three, then one panoramic card.
 * The pattern repeats, so adding designs never needs a layout change. Tablet shows two columns, phone one.
 */
const RHYTHM = [
  { span: "md:col-span-2 lg:col-span-8", aspect: "aspect-[4/3] lg:aspect-[16/10]", sizes: "(max-width: 1024px) 100vw, 64vw" },
  { span: "lg:col-span-4", aspect: "aspect-[4/3] lg:aspect-[4/5]", sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 32vw" },
  { span: "lg:col-span-4", aspect: "aspect-[4/3]", sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 32vw" },
  { span: "lg:col-span-4", aspect: "aspect-[4/3]", sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 32vw" },
  { span: "lg:col-span-4", aspect: "aspect-[4/3]", sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 32vw" },
  { span: "md:col-span-2 lg:col-span-12", aspect: "aspect-[4/3] lg:aspect-[21/9]", sizes: "100vw" },
] as const;

export function ProductGrid({ designs }: { designs: CatalogueDesign[] }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-16 sm:gap-y-20">
      {designs.map((d, i) => {
        const r = RHYTHM[i % RHYTHM.length];
        return (
          <li key={d.slug} className={r.span}>
            <ProductCard design={d} aspect={r.aspect} sizes={r.sizes} priority={i === 0} />
          </li>
        );
      })}
    </ul>
  );
}
