import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "compact" | "full";
}

export function Container({
  className,
  size = "default",
  children,
  ...props
}: ContainerProps) {
  const sizeStyles = {
    default: "max-w-7xl",
    narrow: "max-w-4xl",
    compact: "max-w-2xl",
    full: "max-w-8xl",
  };

  return (
    <div
      className={cn(
        "w-full mx-auto px-4 sm:px-6 lg:px-8",
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}