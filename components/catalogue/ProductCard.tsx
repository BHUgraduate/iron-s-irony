import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DesignVisual } from "@/components/catalogue/DesignVisual";
import type { CatalogueDesign } from "@/data/catalogue";
import { cn } from "@/lib/utils";

/** Editorial card: the image leads, the name sits beneath it in serif, one line says what it is. */
export function ProductCard({
  design,
  aspect = "aspect-[4/3]",
  priority,
  sizes,
  className,
}: {
  design: CatalogueDesign;
  aspect?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  const href = `/catalogue/${design.slug}`;
  return (
    <article className={cn("group", className)}>
      <Link href={href} aria-label={`${design.work.title}, view design`} className="block">
        <DesignVisual design={design} className={aspect} priority={priority} sizes={sizes} />
      </Link>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <p className="micro text-accent-ink">
          {design.service.title} · {design.work.typeLabel}
        </p>
      </div>
      <h3 className="mt-3 font-serif text-[1.9rem] sm:text-[2.2rem] leading-[1.05]">
        <Link href={href} className="link-reveal">
          {design.work.title}
        </Link>
      </h3>
      <p className="mt-3 max-w-md text-[1rem] leading-relaxed text-ink-secondary">{design.line}</p>
      <Link href={href} className="mt-4 inline-flex items-center gap-2 micro py-2 text-iron-950 link-reveal" tabIndex={-1} aria-hidden="true">
        View design
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  );
}
