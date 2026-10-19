import * as React from "react";
import { cn } from "@/lib/utils";

const control =
  "w-full bg-transparent border-0 border-b border-canvas-bg/30 px-0 py-3 text-[16px] text-canvas-bg placeholder:text-canvas-bg/45 focus:outline-none focus:border-accent-amber transition-colors aria-[invalid=true]:border-red-300";

type Common = { id: string; label: string; error?: string; hint?: string; optional?: boolean };

export function TextField({
  id,
  label,
  error,
  hint,
  optional,
  className,
  ...rest
}: Common & React.InputHTMLAttributes<HTMLInputElement>) {
  const described = [error && `${id}-err`, hint && `${id}-hint`].filter(Boolean).join(" ") || undefined;
  return (
    <div className={className}>
      <label htmlFor={id} className="micro text-canvas-bg/70">
        {label}
        {optional && <span className="normal-case tracking-normal"> (optional)</span>}
      </label>
      <input id={id} aria-invalid={!!error} aria-describedby={described} className={control} {...rest} />
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1 text-sm text-canvas-bg/60">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-err`} className="mt-1 text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}

export function AreaField({
  id,
  label,
  error,
  hint,
  optional,
  className,
  ...rest
}: Common & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const described = [error && `${id}-err`, hint && `${id}-hint`].filter(Boolean).join(" ") || undefined;
  return (
    <div className={className}>
      <label htmlFor={id} className="micro text-canvas-bg/70">
        {label}
        {optional && <span className="normal-case tracking-normal"> (optional)</span>}
      </label>
      <textarea id={id} aria-invalid={!!error} aria-describedby={described} className={cn(control, "resize-none")} {...rest} />
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1 text-sm text-canvas-bg/60">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-err`} className="mt-1 text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}
