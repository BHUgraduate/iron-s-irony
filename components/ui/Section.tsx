import * as React from "react";
import { cn } from "@/lib/utils";

const TONES = {
  light: "bg-canvas-bg text-iron-950",
  concrete: "bg-concrete text-iron-950",
  dark: "bg-iron-950 text-canvas-bg grain relative",
} as const;

const PAD = {
  md: "py-20 sm:py-28",
  lg: "py-28 sm:py-44",
  sm: "py-14 sm:py-20",
} as const;

export function Section({
  tone = "light",
  pad = "lg",
  id,
  labelledBy,
  className,
  innerClassName,
  children,
}: {
  tone?: keyof typeof TONES;
  pad?: keyof typeof PAD;
  id?: string;
  labelledBy?: string;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} data-tone={tone} className={cn(TONES[tone], PAD[pad], className)}>
      <div className={cn("relative max-w-[88rem] mx-auto px-5 sm:px-8", innerClassName)}>{children}</div>
    </section>
  );
}
