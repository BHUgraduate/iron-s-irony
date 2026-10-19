"use client";

import * as React from "react";
import Image from "next/image";
import { IronDrawing } from "@/components/ui/IronDrawing";
import { Tag } from "@/components/ui/Tag";
import type { WorkEntry } from "@/data/projects";
import { cn } from "@/lib/utils";

/**
 * The visual for a piece of work.
 * - Representative example: an original line drawing that draws itself and warms on hover.
 * - Completed project with a real photograph: the drawing sits over the photo and hover or tap
 *   "develops" the photograph out of it.
 */
export function WorkVisual({
  entry,
  className,
  priority,
}: {
  entry: WorkEntry;
  className?: string;
  priority?: boolean;
}) {
  const [developed, setDeveloped] = React.useState(false);
  const hasPhoto = entry.status === "completed" && !!entry.photo;

  const body = (
    <>
      <div className="absolute inset-0 blueprint-grid" aria-hidden="true" />
      {hasPhoto && (
        <Image
          src={entry.photo!}
          alt={entry.photoAlt ?? entry.title}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 66vw"
          className={cn(
            "object-cover transition-[filter,transform,opacity] duration-[1200ms] ease-architectural",
            developed ? "opacity-100 scale-100 brightness-100" : "opacity-45 scale-[1.04] brightness-75 grayscale"
          )}
        />
      )}
      <IronDrawing
        kind={entry.kind}
        title={hasPhoto ? undefined : `Line drawing of ${entry.typeLabel.toLowerCase()}`}
        className={cn(
          "absolute inset-0 m-auto w-[78%] h-[78%] transition-[opacity,color] duration-[900ms] ease-architectural",
          hasPhoto ? (developed ? "opacity-0 text-canvas-bg" : "opacity-80 text-canvas-bg") : "text-canvas-bg/85 group-hover:text-accent-amber"
        )}
      />
      <Tag kind={hasPhoto ? "completed" : "representative"} className="absolute left-4 top-4" />
      {hasPhoto && (
        <span className="absolute left-4 bottom-4 micro text-canvas-bg/70" aria-hidden="true">
          {developed ? "Tap to see drawing" : "Tap to develop"}
        </span>
      )}
    </>
  );

  const base = cn("group relative block overflow-hidden bg-iron-900 text-canvas-bg", className);

  if (!hasPhoto) return <div className={base}>{body}</div>;
  return (
    <button
      type="button"
      aria-pressed={developed}
      onClick={() => setDeveloped((d) => !d)}
      onPointerEnter={(e) => e.pointerType === "mouse" && setDeveloped(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setDeveloped(false)}
      className={cn(base, "text-left w-full")}
    >
      <span className="sr-only">{developed ? "Show the drawing" : "Show the photograph"} for {entry.title}</span>
      {body}
    </button>
  );
}
