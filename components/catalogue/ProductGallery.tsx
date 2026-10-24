"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";
import type { CatalogueEntry } from "@/data/catalogue";
import { cn } from "@/lib/utils";

const SWIPE = 48;

/**
 * Large viewer, thumbnails, fullscreen, swipe on touch and arrow keys on desktop.
 * With no photographs yet it shows the design's line drawing as a single slide and hides the paging controls.
 * It never invents extra images.
 */
export function ProductGallery({ design }: { design: CatalogueEntry }) {
  const slides = design.images;
  const many = slides.length > 1;
  const [i, setI] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const start = React.useRef<number | null>(null);
  const opener = React.useRef<HTMLButtonElement>(null);
  const closeBtn = React.useRef<HTMLButtonElement>(null);

  const go = React.useCallback((d: number) => setI((cur) => (cur + d + slides.length) % slides.length), [slides.length]);

  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const returnTo = opener.current;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      else if (e.key === "ArrowRight" && many) go(1);
      else if (e.key === "ArrowLeft" && many) go(-1);
      else if (e.key === "Tab") {
        // Two controls and paging buttons: keep focus inside the dialog.
        const f = document.querySelectorAll<HTMLElement>("[data-lightbox] button");
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) (e.preventDefault(), last.focus());
        else if (!e.shiftKey && document.activeElement === last) (e.preventDefault(), first.focus());
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      returnTo?.focus();
    };
  }, [open, many, go]);

  const swipe = {
    onPointerDown: (e: React.PointerEvent) => {
      if (e.pointerType !== "mouse") start.current = e.clientX;
    },
    onPointerUp: (e: React.PointerEvent) => {
      if (start.current === null || !many) return;
      const dx = e.clientX - start.current;
      start.current = null;
      if (Math.abs(dx) > SWIPE) go(dx < 0 ? 1 : -1);
    },
    onPointerCancel: () => {
      start.current = null;
    },
  };

  const label = `${design.name}: ${many ? `photograph ${i + 1} of ${slides.length}` : "photograph"}`;
  const render = (s: CatalogueEntry["images"][number], fit: "cover" | "contain", sizes: string, priority?: boolean) => (
    <Image
      src={s.src}
      alt={s.alt}
      fill
      sizes={sizes}
      quality={85}
      priority={priority}
      placeholder={s.blurDataURL ? "blur" : "empty"}
      blurDataURL={s.blurDataURL}
      className={fit === "cover" ? "object-cover" : "object-contain"}
      draggable={false}
    />
  );

  return (
    <div className="min-w-0">
      <div
        role="group"
        aria-roledescription={many ? "carousel" : undefined}
        aria-label={label}
        tabIndex={many ? 0 : undefined}
        onKeyDown={(e) => {
          if (!many) return;
          if (e.key === "ArrowRight") go(1);
          if (e.key === "ArrowLeft") go(-1);
        }}
        {...swipe}
        className="relative h-[68svh] sm:h-[78svh] max-h-[880px] min-h-[420px] overflow-hidden bg-iron-900 text-canvas-bg touch-pan-y select-none"
      >
        <div key={i} className="absolute inset-0 fade-in">
          {render(slides[i], "contain", "(max-width: 1024px) 100vw, 66vw", i === 0)}
        </div>
        <button
          ref={opener}
          type="button"
          onClick={() => setOpen(true)}
          className="absolute right-4 bottom-4 h-12 w-12 grid place-items-center bg-iron-950/70 text-canvas-bg hover:bg-iron-950 transition-colors"
          aria-label="View fullscreen"
        >
          <Maximize2 className="w-4 h-4" aria-hidden="true" />
        </button>
        {many && (
          <>
            <PageButton dir={-1} onClick={() => go(-1)} className="left-4" />
            <PageButton dir={1} onClick={() => go(1)} className="right-4" />
          </>
        )}
      </div>

      {many && (
        <ul className="mt-3 flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none]" aria-label="Choose photograph">
          {slides.map((s, k) => (
            <li key={s.src} className="shrink-0">
              <button
                type="button"
                onClick={() => setI(k)}
                aria-label={`Show photograph ${k + 1}`}
                aria-current={k === i}
                className={cn("relative block h-20 w-16 sm:h-24 sm:w-[4.75rem] bg-iron-900 overflow-hidden transition-opacity", k === i ? "opacity-100 ring-2 ring-accent-bronze" : "opacity-60 hover:opacity-100")}
              >
                <Image src={s.src} alt="" fill sizes="80px" className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}

      {open && (
        <div
          data-lightbox
          role="dialog"
          aria-modal="true"
          aria-label={`${design.name}, fullscreen`}
          className="fixed inset-0 z-[60] bg-iron-950 text-canvas-bg"
          {...swipe}
        >
          <div key={i} className="absolute inset-0 m-4 sm:m-10 fade-in">
            {render(slides[i], "contain", "100vw")}
          </div>
          <button
            ref={closeBtn}
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-3 top-3 h-12 px-4 flex items-center gap-2 micro bg-iron-950/70"
          >
            Close <X className="w-4 h-4" aria-hidden="true" />
          </button>
          {many && (
            <>
              <PageButton dir={-1} onClick={() => go(-1)} className="left-3" />
              <PageButton dir={1} onClick={() => go(1)} className="right-3" />
              <p className="absolute left-0 right-0 bottom-4 text-center micro text-canvas-bg/70" aria-hidden="true">
                {i + 1} / {slides.length}
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function PageButton({ dir, onClick, className }: { dir: -1 | 1; onClick: () => void; className?: string }) {
  const Icon = dir === -1 ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === -1 ? "Previous photograph" : "Next photograph"}
      className={cn("absolute top-1/2 -translate-y-1/2 h-12 w-12 grid place-items-center bg-iron-950/70 hover:bg-iron-950 text-canvas-bg transition-colors", className)}
    >
      <Icon className="w-4 h-4" aria-hidden="true" />
    </button>
  );
}
