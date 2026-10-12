import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: "left" | "center" | "right";
  hasDivider?: boolean;
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  hasDivider = false,
  className,
  titleClassName,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("flex flex-col mb-8 sm:mb-12", alignmentClasses[align], className)}>
      {eyebrow && (
        <div className="flex items-center gap-2 mb-2">
          <span className="h-px w-4 bg-accent-bronze inline-block" aria-hidden="true" />
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-architectural text-accent-bronze">
            {eyebrow}
          </span>
        </div>
      )}

      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-ink-primary text-balance",
          titleClassName
        )}
      >
        {title}
      </h2>

      {description && (
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-ink-secondary max-w-2xl leading-relaxed text-balance">
          {description}
        </p>
      )}

      {hasDivider && (
        <div
          className={cn(
            "h-px bg-border-structural mt-6 w-full max-w-xs",
            align === "center" && "mx-auto"
          )}
          aria-hidden="true"
        />
      )}
    </div>
  );
}