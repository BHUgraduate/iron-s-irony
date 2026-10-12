"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { MAIN_NAVIGATION } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
          isScrolled
            ? "bg-canvas-bg/95 backdrop-blur-md border-border-structural py-3.5 shadow-sm"
            : "bg-canvas-bg border-border-subtle py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Identity Wordmark */}
          <Link
            href="/"
            className="flex flex-col group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink-primary"
            aria-label="iron’s irony — Home"
          >
            <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-ink-primary group-hover:text-accent-bronze transition-colors">
              iron’s irony
            </span>
            <span className="text-[10px] font-mono uppercase tracking-architectural text-ink-muted -mt-1 hidden sm:block">
              Building &bull; Architectural &bull; Decorative
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center space-x-7"
          >
            {MAIN_NAVIGATION.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-mono uppercase tracking-architectural transition-colors relative py-1 hover:text-ink-primary ${
                    isActive ? "text-ink-primary font-medium" : "text-ink-secondary"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-bronze"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions & Mobile Trigger */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Button
              href="/quote"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Request a Quote
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 border border-border-structural text-ink-primary hover:border-ink-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-primary"
              aria-expanded={mobileMenuOpen}
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
}