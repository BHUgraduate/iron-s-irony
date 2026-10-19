"use client";

import * as React from "react";
import { PageHero } from "@/components/ui/PageHero";
import { MagneticButton } from "@/components/motion/MagneticButton";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main id="main-content" className="flex-1 flex flex-col">
      <PageHero eyebrow="Something went wrong" lines={["That did", "not work."]} lead="Please try again. If it keeps happening, call or message us and we will help directly.">
        <MagneticButton onClick={reset} variant="light">
          Try again
        </MagneticButton>
        <MagneticButton href="/" variant="outline-light" arrow={false}>
          Home
        </MagneticButton>
      </PageHero>
    </main>
  );
}
