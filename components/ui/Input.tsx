import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  requiredIndicator?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      label,
      error,
      helperText,
      requiredIndicator,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
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

        <input
          id={inputId}
          type={type}
          ref={ref}
          aria-invalid={Boolean(error)}
          aria-describedby={
            error ? errorId : helperText ? helperId : undefined
          }
          className={cn(
            "w-full bg-canvas-card border border-border-structural px-3.5 py-2.5 text-sm text-ink-primary placeholder:text-ink-muted/70 rounded-none transition-colors duration-150 focus:outline-none focus:border-ink-primary focus:ring-1 focus:ring-ink-primary",
            error && "border-status-error focus:border-status-error focus:ring-status-error",
            className
          )}
          {...props}
        />

        {error && (
          <p id={errorId} className="text-xs font-sans text-status-error mt-0.5">
            {error}
          </p>
        )}

        {helperText && !error && (
          <p id={helperId} className="text-xs font-sans text-ink-muted mt-0.5">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";