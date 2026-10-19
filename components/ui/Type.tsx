import * as React from "react";
import { LineReveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

/** Small mono label. Colour adapts to the tone of the Section it sits in. */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("micro text-accent-ink [[data-tone=dark]_&]:text-accent-amber", className)}>{children}</p>
  );
}

const SIZE = { lg: "display-lg", md: "display-md", sm: "display-sm" } as const;

/** Display heading with masked line-by-line entrance. */
export function Display({
  lines,
  size = "md",
  as = "h2",
  id,
  immediate,
  className,
}: {
  lines: React.ReactNode[];
  size?: keyof typeof SIZE;
  as?: "h1" | "h2" | "h3";
  id?: string;
  immediate?: boolean;
  className?: string;
}) {
  return (
    <LineReveal as={as} id={id} immediate={immediate} lines={lines} className={cn("display", SIZE[size], className)} />
  );
}

export function Lead({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "text-lg sm:text-xl leading-relaxed text-ink-secondary [[data-tone=dark]_&]:text-canvas-bg/75 max-w-xl",
        className
      )}
    >
      {children}
    </p>
  );
}

/** Serif italic accent used for sub-headings and pull lines. */
export function Accent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("font-serif italic text-3xl sm:text-4xl leading-tight", className)}>{children}</p>;
}
