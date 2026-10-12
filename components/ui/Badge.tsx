import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "bronze" | "outline" | "success" | "dark";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-canvas-subtle text-ink-secondary border-border-structural",
    bronze: "bg-[#9E7445]/10 text-accent-bronze border-[#9E7445]/30",
    outline: "bg-transparent text-ink-muted border-border-structural",
    success: "bg-status-success/10 text-status-success border-status-success/30",
    dark: "bg-canvas-dark text-canvas-bg border-border-iron",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-[10px] sm:text-[11px] font-mono uppercase tracking-architectural border rounded-none select-none",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}