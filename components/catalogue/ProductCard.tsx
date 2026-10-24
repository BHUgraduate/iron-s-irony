import * as React from "react";
import Link from "next/link";
import { DesignVisual } from "@/components/catalogue/DesignVisual";
import type { CatalogueEntry } from "@/data/catalogue";
import { cn } from "@/lib/utils";

/** The photograph leads. Beneath it: what it is, its name in serif, and one line of what the photograph shows. */
export function ProductCard({
  design,
  priority,
  sizes,
  className,
}: {
  design: CatalogueEntry;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  const href = `/catalogue/${design.slug}`;
  const more = design.images.length - 1;
  return (
    <article className={cn("group", className)}>
      <Link href={href} aria-label={`${design.name}, view design`} className="block">
        <DesignVisual design={design} priority={priority} sizes={sizes} />
      </Link>
      <p className="mt-4 micro text-accent-ink">
        {design.service.title}
        {design.type ? ` · ${design.type}` : ""}
        {more > 0 ? ` · ${design.images.length} photos` : ""}
      </p>
      <h3 className="mt-2 font-serif text-[1.7rem] sm:text-[1.9rem] leading-[1.08]">
        <Link href={href} className="link-reveal">
          {design.name}
        </Link>
      </h3>
      <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-ink-secondary line-clamp-2">{design.summary}</p>
    </article>
  );
}
