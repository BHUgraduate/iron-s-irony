import * as React from "react";
import { ProductCard } from "@/components/catalogue/ProductCard";
import type { CatalogueEntry } from "@/data/catalogue";

/**
 * A portfolio wall rather than a product grid: columns of photographs, each at its own proportions.
 * It scales from a dozen designs to hundreds without any layout change. One column on phones, two on tablets, three on desktop.
 */
export function ProductGrid({ designs }: { designs: CatalogueEntry[] }) {
  return (
    <ul className="columns-1 sm:columns-2 lg:columns-3 gap-x-8 [column-fill:_balance]">
      {designs.map((d, i) => (
        <li key={d.slug} className="break-inside-avoid mb-14 sm:mb-16">
          <ProductCard design={d} priority={i < 2} />
        </li>
      ))}
    </ul>
  );
}
