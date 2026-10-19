import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { MagneticButton } from "@/components/motion/MagneticButton";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <main id="main-content" className="flex-1 flex flex-col">
      <PageHero eyebrow="404" lines={["This page", "is not here."]} lead="It may have moved, or the link may be wrong. These will get you back on track.">
        <MagneticButton href="/" variant="light">
          Home
        </MagneticButton>
        <MagneticButton href="/services" variant="outline-light" arrow={false}>
          Services
        </MagneticButton>
        <Link href="/contact" className="micro min-h-[52px] px-4 flex items-center link-reveal">
          Contact
        </Link>
      </PageHero>
    </main>
  );
}
