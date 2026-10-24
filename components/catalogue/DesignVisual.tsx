import * as React from "react";
import Image from "next/image";
import type { CatalogueEntry } from "@/data/catalogue";
import { cn } from "@/lib/utils";

/**
 * A photograph of a design, shown at its own proportions: nothing is cropped away, and nothing is stretched.
 * Sizes are tuned so the browser fetches no more pixels than the layout needs.
 */
export function DesignVisual({
  design,
  className,
  priority,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: {
  design: CatalogueEntry;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const p = design.hero;
  return (
    <div className={cn("relative overflow-hidden bg-iron-900", className)} style={{ aspectRatio: `${p.width} / ${p.height}` }}>
      <Image
        src={p.src}
        alt={p.alt}
        fill
        priority={priority}
        sizes={sizes}
        placeholder={p.blurDataURL ? "blur" : "empty"}
        blurDataURL={p.blurDataURL}
        className="object-cover transition-transform duration-[1400ms] ease-architectural group-hover:scale-[1.03]"
      />
    </div>
  );
}
