"use client";

import * as React from "react";
import type { CatalogueCategory } from "@/data/catalogue";
import { cn } from "@/lib/utils";

/**
 * Tactile category selector. Sticks beneath the header; on phones it scrolls sideways with generous touch targets,
 * and the active category is always scrolled into view.
 */
export function CategoryNavigation({
  categories,
  total,
  active,
  onChange,
}: {
  categories: CatalogueCategory[];
  total: number;
  active: string;
  onChange: (slug: string) => void;
}) {
  const railRef = React.useRef<HTMLUListElement>(null);

  const first = React.useRef(true);
  React.useEffect(() => {
    // Centre the active category inside the rail only. scrollIntoView would also scroll the page.
    if (first.current) {
      first.current = false;
      return;
    }
    const rail = railRef.current;
    const el = rail?.querySelector<HTMLElement>("[aria-pressed=true]");
    if (!rail || !el) return;
    rail.scrollTo({ left: el.offsetLeft - (rail.clientWidth - el.offsetWidth) / 2, behavior: "smooth" });
  }, [active]);

  const items = [{ slug: "all", label: "All", count: total }, ...categories];
  return (
    <nav
      aria-label="Collection categories"
      className="sticky top-[var(--header-h)] z-30 -mx-5 sm:-mx-8 px-5 sm:px-8 bg-canvas-bg/95 backdrop-blur-md border-y border-iron-950/15"
    >
      <ul ref={railRef} className="relative flex gap-1 sm:gap-3 overflow-x-auto overscroll-x-contain snap-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((c) => {
          const on = c.slug === active;
          return (
            <li key={c.slug} className="snap-start shrink-0">
              <button
                type="button"
                aria-pressed={on}
                onClick={() => onChange(c.slug)}
                className={cn(
                  "relative min-h-[52px] px-4 sm:px-5 micro whitespace-nowrap transition-colors duration-300",
                  on ? "text-iron-950" : "text-ink-muted hover:text-iron-950"
                )}
              >
                {c.label}
                <span className="ml-2 text-ink-muted/80" aria-label={`${c.count} ${c.count === 1 ? "design" : "designs"}`}>
                  {c.count}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute left-4 right-4 sm:left-5 sm:right-5 bottom-0 h-[2px] bg-accent-bronze origin-left transition-transform duration-500 ease-architectural",
                    on ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
