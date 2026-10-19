"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
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
  const Tag = motion[as] as typeof motion.div;
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
  const Tag = motion[as] as typeof motion.h2;
  const trigger = immediate
    ? { animate: "show" as const }
    : { whileInView: "show" as const, viewport: { once: true, margin: "0px 0px -10% 0px" } };
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
          <motion.span
            className={`block ${lineClassName ?? ""}`}
            variants={reduce ? fadeOnly : textLine}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
