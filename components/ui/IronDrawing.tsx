"use client";

import * as React from "react";
import { m, useReducedMotion } from "framer-motion";
import { EASE_IRON } from "@/lib/motion";

export type DrawingKind =
  | "gate"
  | "railing"
  | "balcony"
  | "staircase"
  | "grill"
  | "architectural"
  | "custom"
  | "bar"
  | "assembly"
  | "frame"
  | "space";

const range = (from: number, to: number, step: number) => {
  const out: number[] = [];
  for (let v = from; v <= to + 0.01; v += step) out.push(v);
  return out;
};

const rect = (x: number, y: number, w: number, h: number) =>
  `M${x} ${y}H${x + w}V${y + h}H${x}Z`;

const spear = (x: number) => `M${x - 4} 70L${x} 60L${x + 4} 70`;

const archTop = (x: number) =>
  Math.round(134 - 98 * Math.sqrt(Math.max(0, 1 - ((x - 200) / 136) ** 2)));

/** Line drawings of each kind of work. Original geometry, drawn as elevation sketches, not photographs. */
export function drawingPaths(kind: DrawingKind): string[] {
  switch (kind) {
    case "gate":
      return [
        rect(40, 36, 320, 236),
        "M40 78H360",
        "M40 232H360",
        ...range(66, 334, 22).map((x) => `M${x} 78V232`),
        ...range(66, 334, 22).map((x) => spear(x)),
        "M200 36V272",
        "M186 154h28",
        "M60 258H340",
      ];
    case "railing":
      return [
        "M30 110H370",
        "M30 124H370",
        "M30 236H370",
        rect(30, 96, 14, 160),
        rect(356, 96, 14, 160),
        ...range(66, 334, 24).map((x) => `M${x} 124V236`),
        ...range(78, 322, 48).map((x) => `M${x} 180a12 12 0 1 0 0.01 0`),
        "M20 256H380",
      ];
    case "balcony":
      return [
        "M20 232H380",
        "M20 246H380",
        ...range(60, 340, 56).map((x) => `M${x} 246L${x - 18} 280M${x} 246L${x + 18} 280`),
        "M40 100H360",
        "M40 114H360",
        "M40 232V100M360 232V100",
        ...range(68, 332, 28).map((x) => `M${x} 114V232`),
        ...range(82, 318, 28).map((x) => `M${x} 172a14 14 0 1 1 0.01 0`),
      ];
    case "staircase":
      return [
        "M30 270H370",
        ...range(0, 6, 1).map((i) => `M${50 + i * 44} 270V${246 - i * 24}H${94 + i * 44}`),
        "M72 190L336 32",
        "M72 202L336 44",
        ...range(0, 6, 1).map((i) => `M${72 + i * 44} ${246 - i * 24}V${190 - i * 24}`),
      ];
    case "grill":
      return [
        rect(60, 40, 280, 230),
        rect(72, 52, 256, 206),
        ...range(72, 328, 32).map((v) => `M${v} 52L${72 + Math.min(206, 328 - v)} ${52 + Math.min(206, 328 - v)}`),
        ...range(72, 328, 32).map((v) => `M${v} 258L${72 + Math.min(206, 328 - v)} ${258 - Math.min(206, 328 - v)}`),
        "M60 270v14M340 270v14M50 284H350",
      ];
    case "architectural":
      return [
        "M40 280V134A160 112 0 0 1 360 134V280",
        "M64 280V134A136 98 0 0 1 336 134V280",
        "M200 36V280",
        ...range(90, 310, 22).filter((x) => x !== 200 && Math.abs(x - 200) < 135).map((x) => `M${x} 280V${archTop(x)}`),
        "M64 196H336",
        "M30 280H370",
      ];
    case "custom":
      return [
        "M60 260L200 50L340 260Z",
        "M130 260L200 150L270 260",
        "M200 50V260",
        "M200 150a46 46 0 1 0 0.01 0",
        "M40 270H360",
        "M76 36H324M76 30V42M324 30V42",
      ];
    case "bar":
      return ["M40 150H360", "M40 162H360", "M40 150V162M360 150V162", "M56 150L76 162M96 150L116 162"];
    case "assembly":
      return [rect(70, 70, 260, 170), "M70 120H330", ...range(100, 300, 40).map((x) => `M${x} 70V240`), "M70 240V264M330 240V264"];
    case "frame":
      return [rect(70, 50, 260, 210), "M70 100H330", "M70 210H330", "M200 50V260"];
    case "space":
      return [
        "M20 270H380",
        "M20 40V270M380 40V270",
        rect(110, 70, 180, 200),
        "M110 110H290",
        "M110 230H290",
        ...range(130, 270, 20).map((x) => `M${x} 110V230`),
        "M200 70V270",
      ];
  }
}

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
