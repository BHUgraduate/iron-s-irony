"use client";

import * as React from "react";
import { m, useReducedMotion } from "framer-motion";
import { fadeOnly, fadeReveal, textLine, staggerReveal } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "p" | "li" | "span";
};

/** fadeReveal: content rises into place once, the first time it is seen. */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = m[as] as typeof m.div;
  return (
    <Tag
      className={className}
      variants={reduce ? fadeOnly : fadeReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ delay }}
    >
      {children}
    </Tag>
  );
}

/** textReveal: each line of a headline slides up from behind its own mask. */
export function LineReveal({
  lines,
  className,
  lineClassName,
  as = "h2",
  id,
  immediate = false,
  delay = 0,
}: {
  lines: React.ReactNode[];
  className?: string;
  lineClassName?: string;
  as?: "h1" | "h2" | "h3" | "p";
  id?: string;
  immediate?: boolean;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (immediate) {
    const Static = as;
    return (
      <Static id={id} className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
            <span className={`block line-rise ${lineClassName ?? ""}`} style={{ ["--d" as string]: `${delay + i * 0.11}s` }}>
              {line}
            </span>
          </span>
        ))}
      </Static>
    );
  }
  const Tag = m[as] as typeof m.h2;
  const trigger = { whileInView: "show" as const, viewport: { once: true, margin: "0px 0px -10% 0px" } };
  return (
    <Tag
      id={id}
      className={className}
      variants={staggerReveal(0.11, delay)}
      initial="hidden"
      {...trigger}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <m.span
            className={`block ${lineClassName ?? ""}`}
            variants={reduce ? fadeOnly : textLine}
          >
            {line}
          </m.span>
        </span>
      ))}
    </Tag>
  );
}
