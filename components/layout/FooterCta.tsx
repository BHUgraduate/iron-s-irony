"use client";

import * as React from "react";
import { MagneticButton } from "@/components/motion/MagneticButton";

export function FooterCta() {
  return (
    <div className="mt-12">
      <MagneticButton href="start" variant="light">
        Start a Project
      </MagneticButton>
    </div>
  );
}
