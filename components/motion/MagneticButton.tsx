"use client";

import * as React from "react";
import Link from "next/link";
import { m, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { announcePrefill } from "@/lib/motion";
import { useStartHref } from "@/components/layout/StartLink";

type Variant = "light" | "dark" | "copper" | "outline-light" | "outline-dark";

const VARIANTS: Record<Variant, string> = {
  light: "bg-canvas-bg text-iron-950 border-canvas-bg hover:bg-accent-amber hover:border-accent-amber",
  dark: "bg-iron-950 text-canvas-bg border-iron-950 hover:bg-accent-bronze hover:border-accent-bronze",
  copper: "bg-accent-bronze text-white border-accent-bronze hover:bg-accent-amber hover:border-accent-amber hover:text-iron-950",
  "outline-light": "bg-transparent text-canvas-bg border-canvas-bg/30 hover:border-canvas-bg hover:bg-canvas-bg/5",
  "outline-dark": "bg-transparent text-iron-950 border-iron-950/25 hover:border-iron-950 hover:bg-iron-950/5",
};

interface Props {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  external?: boolean;
  /** With href="start": pre-selects this project type in the configurator. */
  prefill?: string;
  /** With href="start": seeds the optional style line, e.g. "Catalogue design: …". */
  prefillStyle?: string;
}

/**
 * Buttons that lean a few pixels toward the pointer, like a heavy latch being drawn.
 * The pull is tiny, and switched off for touch input and reduced m.
 */
export function MagneticButton({
  href: hrefProp,
  onClick,
  variant = "light",
  arrow = true,
  className,
  children,
  type = "button",
  disabled,
  external,
  prefill,
  prefillStyle,
}: Props) {
  let href = hrefProp;
  const isStart = hrefProp === "start";
  const reduce = useReducedMotion();
  const startHref = useStartHref();
  if (href === "start") href = startHref;
  const MotionLink = React.useMemo(() => m.create(Link), []);
  const ref = React.useRef<HTMLElement | null>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.6 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.6 });

  const onMove = (e: React.PointerEvent) => {
    if (reduce || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.18);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.28);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const classes = cn(
    "group inline-flex items-center justify-center gap-3 border px-7 py-4 min-h-[52px] micro font-medium tracking-[0.16em]",
    "transition-colors duration-300 disabled:opacity-50 disabled:pointer-events-none",
    VARIANTS[variant],
    className
  );
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  const shared = {
    style: { x, y },
    onClick: (e: React.MouseEvent<HTMLElement>) => {
      if (isStart && (prefill || prefillStyle) && href) announcePrefill({ type: prefill, style: prefillStyle }, href);
      onClick?.(e);
    },
    onPointerMove: onMove,
    onPointerLeave: onLeave,
    className: classes,
  };

  if (href && external) {
    return (
      <m.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...shared}
      >
        {inner}
      </m.a>
    );
  }
  if (href) {
    return (
      <MotionLink ref={ref as React.Ref<HTMLAnchorElement>} href={href} {...shared}>
        {inner}
      </MotionLink>
    );
  }
  return (
    <m.button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      {...shared}
    >
      {inner}
    </m.button>
  );
}
