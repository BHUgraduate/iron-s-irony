import * as React from "react";
import { ProductCard } from "@/components/catalogue/ProductCard";
import type { CatalogueDesign } from "@/data/catalogue";

export function RelatedProducts({ designs }: { designs: CatalogueDesign[] }) {
  if (designs.length === 0) return null;
  return (
    <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {designs.map((d) => (
        <li key={d.slug}>
          <ProductCard design={d} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
        </li>
      ))}
    </ul>
  );
}
