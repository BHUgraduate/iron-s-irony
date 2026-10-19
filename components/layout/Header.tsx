"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAVIGATION } from "@/data/company";
import { StartLink } from "@/components/layout/StartLink";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
    const [menuOpen, setMenuOpen] = React.useState(false);
  const [overHero, setOverHero] = React.useState(true);
  const [scrolled, setScrolled] = React.useState(false);
  const menuButton = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const hero = document.querySelector("[data-hero]");
      setOverHero(!!hero && hero.getBoundingClientRect().bottom > 96);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const onDark = overHero;

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full h-[var(--header-h)] transition-[background-color,border-color,color] duration-500",
          onDark
            ? "bg-transparent text-canvas-bg border-b border-transparent"
            : scrolled
            ? "bg-canvas-bg/90 backdrop-blur-md text-iron-950 border-b border-iron-950/20"
            : "bg-canvas-bg text-iron-950 border-b border-iron-950/10"
        )}
      >
        <div className="max-w-[88rem] mx-auto h-full px-5 sm:px-8 flex items-center justify-between">
          <Link href="/" aria-label="iron’s irony, home" className="flex items-center min-h-[48px] gap-2">
            <span className="font-serif text-[1.65rem] leading-none font-medium tracking-tight">
              iron’s irony
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:flex items-center gap-9">
            {MAIN_NAVIGATION.map((link) => {
              const active =
                !link.href.includes("#") && pathname.startsWith(link.href) && link.href !== "/";
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "micro py-2 link-reveal transition-opacity",
                    active ? "opacity-100" : "opacity-70 hover:opacity-100"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <StartLink
              className={cn(
                "hidden sm:inline-flex items-center micro font-medium tracking-[0.16em] border px-5 py-3 transition-colors duration-300",
                onDark
                  ? "border-canvas-bg/40 hover:bg-canvas-bg hover:text-iron-950"
                  : "border-iron-950 bg-iron-950 text-canvas-bg hover:bg-accent-bronze hover:border-accent-bronze"
              )}
            >
              Start a Project
            </StartLink>
            <button
              ref={menuButton}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-haspopup="dialog"
              className="lg:hidden h-12 px-4 flex items-center gap-3 micro"
            >
              <span>Menu</span>
              <span aria-hidden="true" className="flex flex-col gap-[5px]">
                <span className="block h-px w-6 bg-current" />
                <span className="block h-px w-4 bg-current self-end" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => {
          setMenuOpen(false);
          menuButton.current?.focus();
        }}
        pathname={pathname}
      />
    </>
  );
}
