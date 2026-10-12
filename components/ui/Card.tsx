import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "subtle" | "dark" | "outline";
  hoverEffect?: boolean;
}

export function Card({
  className,
  variant = "default",
  hoverEffect = false,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    default: "bg-canvas-card border-border-structural text-ink-primary shadow-sm",
    subtle: "bg-canvas-subtle border-border-structural text-ink-primary",
    dark: "bg-canvas-dark border-border-iron text-canvas-bg",
    outline: "bg-transparent border-border-structural text-ink-primary",
  };

  return (
    <div
      className={cn(
        "border p-6 sm:p-8 transition-all duration-300 rounded-none relative",
        variantStyles[variant],
        hoverEffect && "hover:border-ink-primary hover:shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}