"use client";

import * as React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CategoryNavigation } from "@/components/catalogue/CategoryNavigation";
import { ProductGrid } from "@/components/catalogue/ProductGrid";
import type { CatalogueCategory, CatalogueEntry } from "@/data/catalogue";

/**
 * Category filtering. With only a handful of designs, search and extra filters would add friction,
 * so discovery is one row of categories. The choice lives in ?category= so it can be shared.
 */
export function CatalogueBrowser({ designs, categories }: { designs: CatalogueEntry[]; categories: CatalogueCategory[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const requested = params.get("category") ?? "all";
  const active = categories.some((c) => c.slug === requested) ? requested : "all";
  const shown = active === "all" ? designs : designs.filter((d) => d.category === active);
  const label = categories.find((c) => c.slug === active)?.label;

  const choose = (slug: string) => {
    const next = new URLSearchParams(params.toString());
    if (slug === "all") next.delete("category");
    else next.set("category", slug);
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  return (
    <div>
      <CategoryNavigation categories={categories} total={designs.length} active={active} onChange={choose} />
      <p className="sr-only" role="status" aria-live="polite">
        Showing {shown.length} {shown.length === 1 ? "design" : "designs"}{label ? ` in ${label}` : ""}.
      </p>
      {/* Keyed so the grid settles in again whenever the category changes. */}
      <div key={active} className="fade-up mt-12 sm:mt-16">
        <ProductGrid designs={shown} />
      </div>
    </div>
  );
}
