import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  error?: string;
  helperText?: string;
  requiredIndicator?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      label,
      options,
      error,
      helperText,
      requiredIndicator,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const selectId = id || generatedId;
    const errorId = `${selectId}-error`;

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={selectId}
            className="text-xs font-mono uppercase tracking-architectural text-ink-secondary flex items-center justify-between"
          >
            <span>
              {label}
              {requiredIndicator && (
                <span className="text-accent-bronze ml-1" aria-hidden="true">
                  *
                </span>
              )}
            </span>
          </label>
        )}

        <div className="relative">
          <select
            id={selectId}
            ref={ref}
            aria-invalid={Boolean(error)}
            className={cn(
              "w-full bg-canvas-card border border-border-structural px-3.5 py-2.5 pr-10 text-sm text-ink-primary rounded-none appearance-none transition-colors duration-150 focus:outline-none focus:border-ink-primary focus:ring-1 focus:ring-ink-primary cursor-pointer",
              error && "border-status-error focus:border-status-error focus:ring-status-error",
              className
            )}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-ink-muted">
            <ChevronDown className="w-4 h-4" aria-hidden="true" />
          </div>
        </div>

        {error && (
          <p id={errorId} className="text-xs font-sans text-status-error mt-0.5">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";