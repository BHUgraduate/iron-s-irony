import * as React from "react";
import Link from "next/link";
import { cn } from "../../lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "accent" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-mono text-xs uppercase tracking-architectural transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink-primary disabled:opacity-50 disabled:pointer-events-none select-none rounded-none border";

    const variantStyles = {
      primary:
        "bg-ink-primary text-canvas-bg border-ink-primary hover:bg-accent-bronze hover:border-accent-bronze active:bg-accent-bronze-hover",
      outline:
        "bg-transparent text-ink-primary border-border-structural hover:border-ink-primary hover:bg-ink-primary hover:text-canvas-bg active:bg-ink-secondary",
      accent:
        "bg-accent-bronze text-white border-accent-bronze hover:bg-accent-bronze-hover hover:border-accent-bronze-hover active:bg-[#745028]",
      ghost:
        "bg-transparent text-ink-secondary border-transparent hover:text-ink-primary hover:border-border-structural hover:bg-canvas-subtle",
      dark:
        "bg-canvas-dark text-canvas-bg border-border-iron hover:bg-accent-bronze hover:border-accent-bronze",
    };

    const sizeStyles = {
      sm: "px-3.5 py-2 text-[11px]",
      md: "px-5 py-3 text-xs",
      lg: "px-7 py-4 text-xs font-medium tracking-widest",
    };

    const combinedClasses = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClasses}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={combinedClasses}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";