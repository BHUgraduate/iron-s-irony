import * as React from "react";
import { cn } from "@/lib/utils";

/** Option pickers shared by the project consultation and the feedback form. */

export function Choice({
  options,
  value,
  onPick,
  labelledBy,
  cols = "grid-cols-2 sm:grid-cols-3",
}: {
  options: readonly string[];
  value: string;
  onPick: (v: string) => void;
  labelledBy: string;
  cols?: string;
}) {
  return (
    <div role="radiogroup" aria-labelledby={labelledBy} className={cn("grid gap-px bg-canvas-bg/15", cols)}>
      {options.map((o) => {
        const on = value === o;
        return (
          <button
            key={o}
            type="button"
            role="radio"
            aria-checked={on}
            onClick={() => onPick(o)}
            className={cn(
              "min-h-[68px] sm:min-h-[84px] px-4 text-left font-medium text-[1.02rem] transition-colors duration-300",
              on ? "bg-canvas-bg text-iron-950" : "bg-iron-950 text-canvas-bg hover:bg-iron-800"
            )}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

export function Pills({
  legend,
  options,
  value,
  onPick,
}: {
  legend: string;
  options: readonly { value: string; label: string }[];
  value: string;
  onPick: (v: string) => void;
}) {
  return (
    <fieldset className="mt-6">
      <legend className="micro text-canvas-bg/70 mb-3">{legend}</legend>
      <div role="radiogroup" aria-label={legend} className="flex flex-wrap gap-2">
        {options.map((r) => (
          <button
            key={r.value}
            type="button"
            role="radio"
            aria-checked={value === r.value}
            onClick={() => onPick(r.value)}
            className={cn(
              "min-h-[44px] px-4 border text-[0.95rem] transition-colors",
              value === r.value ? "bg-canvas-bg text-iron-950 border-canvas-bg" : "border-canvas-bg/30 hover:border-canvas-bg"
            )}
          >
            {r.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
