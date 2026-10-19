"use client";

import * as React from "react";
import { LazyMotion, domAnimation } from "framer-motion";

/** Loads only the animation features the site uses (no drag or layout projection). `strict` flags any stray full `motion` import. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
