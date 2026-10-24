"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { StartWithType } from "@/components/ui/StartWithType";
import type { ReferenceIdea } from "@/data/catalogue";
import { cn } from "@/lib/utils";

/**
 * Publicly available reference images that help a customer point at what they like.
 * Always labelled as not our work. Opens into a viewer with a way to ask for something similar.
 */
export function ReferenceGallery({ items, origin }: { items: ReferenceIdea[]; origin: string }) {
  const [open, setOpen] = React.useState<number | null>(null);
  const closeBtn = React.useRef<HTMLButtonElement>(null);
  const returnTo = React.useRef<HTMLElement | null>(null);
  const go = React.useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length]);

  React.useEffect(() => {
    if (open === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const back = returnTo.current;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "Tab") {
        const f = document.querySelectorAll<HTMLElement>("[data-reference-viewer] button, [data-reference-viewer] a");
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) (e.preventDefault(), last.focus());
        else if (!e.shiftKey && document.activeElement === last) (e.preventDefault(), first.focus());
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      back?.focus();
    };
  }, [open === null, go]); // eslint-disable-line react-hooks/exhaustive-deps

  const current = open === null ? null : items[open];

  return (
    <>
      <ul className="columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-5">
        {items.map((it, i) => (
          <li key={it.src} className="break-inside-avoid mb-4 sm:mb-5">
            <button
              type="button"
              onClick={(e) => {
                returnTo.current = e.currentTarget;
                setOpen(i);
              }}
              aria-label={`View reference image: ${it.title}`}
              className="group relative block w-full overflow-hidden bg-iron-900"
              style={{ aspectRatio: `${it.width} / ${it.height}` }}
            >
              <Image
                src={it.src}
                alt={it.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                placeholder={it.blurDataURL ? "blur" : "empty"}
                blurDataURL={it.blurDataURL}
                className="object-cover transition-transform duration-[1200ms] ease-architectural group-hover:scale-[1.04]"
              />
              <span className="absolute left-2 top-2 micro bg-canvas-bg/95 text-iron-950 px-2 py-1">Reference</span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          data-reference-viewer
          role="dialog"
          aria-modal="true"
          aria-label={`Reference image: ${current.title}`}
          className="fixed inset-0 z-[60] bg-iron-950 text-canvas-bg flex flex-col"
        >
          <div className="flex items-center justify-between px-4 sm:px-6 h-16 shrink-0">
            <p className="micro text-accent-amber">Reference idea · not iron’s irony’s work</p>
            <button ref={closeBtn} type="button" onClick={() => setOpen(null)} className="h-12 px-3 flex items-center gap-2 micro">
              Close <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
          <div className="relative flex-1 min-h-0 mx-4 sm:mx-10">
            <div key={current.src} className="absolute inset-0 fade-in">
              <Image src={current.src} alt={current.alt} fill sizes="100vw" quality={85} className="object-contain" draggable={false} />
            </div>
            {(["prev", "next"] as const).map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => go(d === "prev" ? -1 : 1)}
                aria-label={d === "prev" ? "Previous reference image" : "Next reference image"}
                className={cn("absolute top-1/2 -translate-y-1/2 h-12 w-12 grid place-items-center bg-iron-950/70 hover:bg-iron-950", d === "prev" ? "left-0" : "right-0")}
              >
                {d === "prev" ? <ArrowLeft className="w-4 h-4" aria-hidden="true" /> : <ArrowRight className="w-4 h-4" aria-hidden="true" />}
              </button>
            ))}
          </div>
          <div className="shrink-0 px-4 sm:px-10 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p className="text-[0.95rem] text-canvas-bg/80">
              {current.title} <span className="text-canvas-bg/50">· {open! + 1} / {items.length}</span>
            </p>
            <StartWithType
              type="Something else"
              design={`Reference idea: ${current.title} (a public reference image, not iron’s irony’s work) ${origin}/catalogue#reference-ideas`}
              className="inline-flex items-center justify-center bg-canvas-bg text-iron-950 hover:bg-accent-amber transition-colors px-6 min-h-[48px] micro font-medium tracking-[0.16em]"
            >
              Ask for something like this
            </StartWithType>
          </div>
        </div>
      )}
    </>
  );
}
