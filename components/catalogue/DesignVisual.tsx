import * as React from "react";
import Image from "next/image";
import { IronDrawing } from "@/components/ui/IronDrawing";
import { Tag } from "@/components/ui/Tag";
import type { CatalogueDesign } from "@/data/catalogue";
import { cn } from "@/lib/utils";

/**
 * The picture of a design.
 * A real photograph when one exists (never cropped away from its subject, never stretched);
 * otherwise the original line drawing, labelled as a representative example.
 */
export function DesignVisual({
  design,
  className,
  priority,
  sizes = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 66vw",
}: {
  design: CatalogueDesign;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const photo = design.photos[0];
  return (
    <div className={cn("relative overflow-hidden bg-iron-900 text-canvas-bg", className)}>
      {photo ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={priority}
          sizes={sizes}
          placeholder={photo.blurDataURL ? "blur" : "empty"}
          blurDataURL={photo.blurDataURL}
          className="object-cover transition-transform duration-[1400ms] ease-architectural group-hover:scale-[1.035]"
        />
      ) : (
        <>
          <div className="absolute inset-0 blueprint-grid" aria-hidden="true" />
          <IronDrawing
            kind={design.work.kind}
            title={`Line drawing of ${design.work.typeLabel.toLowerCase()}`}
            className="absolute inset-0 m-auto w-[78%] h-[78%] text-canvas-bg/85 transition-[color,transform] duration-[900ms] ease-architectural group-hover:text-accent-amber group-hover:scale-[1.02]"
          />
        </>
      )}
      {design.representative && <Tag className="absolute left-4 top-4" />}
    </div>
  );
}
