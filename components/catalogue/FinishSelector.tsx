"use client";

import * as React from "react";
import Image from "next/image";
import type { CatalogueFinish } from "@/data/catalogue";
import { cn } from "@/lib/utils";

/**
 * Visual selector for finishes. Renders nothing until real finishes are supplied in the catalogue data,
 * so no finish name, colour or property is ever made up. A swatch photograph is used when there is one;
 * a colour only when the workshop has confirmed it.
 */
export function FinishSelector({ finishes }: { finishes: CatalogueFinish[] }) {
  const [i, setI] = React.useState(0);
  if (finishes.length === 0) return null;
  const current = finishes[Math.min(i, finishes.length - 1)];
  return (
    <div className="grid lg:grid-cols-12 gap-x-16 gap-y-10">
      <div role="radiogroup" aria-label="Finishes" className="lg:col-span-7 flex flex-wrap gap-4">
        {finishes.map((f, k) => (
          <button
            key={f.name}
            type="button"
            role="radio"
            aria-checked={k === i}
            onClick={() => setI(k)}
            className="group text-left w-28"
          >
            <span
              className={cn(
                "relative block aspect-square overflow-hidden border bg-concrete transition-[border-color,transform] duration-300",
                k === i ? "border-iron-950" : "border-iron-950/20 group-hover:border-iron-950/60"
              )}
              style={!f.swatch && f.colour ? { backgroundColor: f.colour } : undefined}
            >
              {f.swatch && <Image src={f.swatch.src} alt="" fill sizes="112px" className="object-cover" />}
            </span>
            <span className={cn("mt-2 block micro", k === i ? "text-iron-950" : "text-ink-muted")}>{f.name}</span>
          </button>
        ))}
      </div>
      <div className="lg:col-span-5" aria-live="polite">
        <p className="micro text-accent-ink">Selected finish</p>
        <p className="mt-3 font-serif text-[2rem] leading-tight">{current.name}</p>
        {current.note && <p className="mt-3 text-[1rem] leading-relaxed text-ink-secondary max-w-md">{current.note}</p>}
      </div>
    </div>
  );
}
