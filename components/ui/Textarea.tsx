import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  requiredIndicator?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      requiredIndicator,
      id,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const textareaId = id || generatedId;
    const errorId = `${textareaId}-error`;
    const helperId = `${textareaId}-helper`;

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={textareaId}
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

        <textarea
          id={textareaId}
          rows={rows}
          ref={ref}
          aria-invalid={Boolean(error)}
          aria-describedby={
            error ? errorId : helperText ? helperId : undefined
          }
          className={cn(
            "w-full bg-canvas-card border border-border-structural px-3.5 py-2.5 text-sm text-ink-primary placeholder:text-ink-muted/70 rounded-none transition-colors duration-150 focus:outline-none focus:border-ink-primary focus:ring-1 focus:ring-ink-primary resize-y",
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

Textarea.displayName = "Textarea";