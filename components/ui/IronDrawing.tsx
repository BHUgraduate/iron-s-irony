"use client";

import * as React from "react";
import { m, useReducedMotion } from "framer-motion";
import { EASE_IRON } from "@/lib/motion";

import { drawingPaths, type DrawingKind } from "@/components/ui/drawings";

export { drawingPaths, type DrawingKind };

interface IronDrawingProps {
  kind: DrawingKind;
  className?: string;
  /** Draw lines in once, the first time the drawing enters view. */
  animate?: boolean;
  /** Seconds before the draw begins. */
  delay?: number;
  strokeWidth?: number;
  title?: string;
}

export function IronDrawing({
  kind,
  className,
  animate = true,
  delay = 0,
  strokeWidth = 1.5,
  title,
}: IronDrawingProps) {
  const reduce = useReducedMotion();
  const paths = React.useMemo(() => drawingPaths(kind), [kind]);
  const draw = animate && !reduce;

  return (
    <svg
      data-iron-drawing
      viewBox="0 0 400 300"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      preserveAspectRatio="xMidYMid meet"
    >
      {paths.map((d, i) =>
        draw ? (
          <m.path
            key={`${kind}-${i}`}
            d={d}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -5% 0px" }}
            transition={{ duration: 1.6, delay: delay + i * 0.025, ease: EASE_IRON }}
          />
        ) : (
          <path key={`${kind}-${i}`} d={d} />
        )
      )}
    </svg>
  );
}
