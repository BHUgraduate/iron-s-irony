"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { StartLink } from "@/components/layout/StartLink";
import { cn } from "@/lib/utils";

/** Thumb-reach project button on small screens. Hidden where it would repeat what is already on screen. */
export function StickyCta() {
  const pathname = usePathname();
  const [past, setPast] = React.useState(false);
  const [atForm, setAtForm] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setPast(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const el = document.getElementById("start");
    if (!el) {
      setAtForm(false);
      return;
    }
    const io = new IntersectionObserver(([e]) => setAtForm(e.isIntersecting), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, [pathname]);

  const suppressed = false;
  const show = past && !atForm && !suppressed;

  return (
    <div
      className={cn(
        "md:hidden fixed left-0 right-0 bottom-0 z-30 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 pr-[5.25rem]",
        "transition-transform duration-500 ease-architectural pointer-events-none",
        show ? "translate-y-0" : "translate-y-full"
      )}
      aria-hidden={!show}
    >
      <StartLink
        tabIndex={show ? 0 : -1}
        className="pointer-events-auto flex items-center justify-center bg-iron-950 text-canvas-bg min-h-[52px] micro font-medium tracking-[0.16em] shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
      >
        Start a Project
      </StartLink>
    </div>
  );
}
