import * as React from "react";
import { cn } from "@/lib/utils";

/** Honest labelling: a representative example is never presented as a completed project. */
export function Tag({
  kind = "representative",
  className,
  children,
}: {
  kind?: "representative" | "completed";
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "micro inline-flex items-center gap-2 px-3 py-1.5",
        kind === "completed" ? "bg-accent-amber text-iron-950" : "bg-canvas-bg text-iron-950",
        className
      )}
    >
      {children ?? (kind === "completed" ? "Completed project" : "Representative example")}
    </span>
  );
}
