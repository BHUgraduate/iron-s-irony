"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { START_ANCHOR, START_PAGE } from "@/data/company";

/** Pages that carry the configurator in place. Everywhere else, Start a Project goes to /contact. */
const PAGES_WITH_FORM = ["/", START_PAGE];

export function useStartHref() {
  const pathname = usePathname();
  return PAGES_WITH_FORM.includes(pathname) ? START_ANCHOR : `${START_PAGE}${START_ANCHOR}`;
}

export function StartLink({
  children,
  className,
  onClick,
  tabIndex,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  tabIndex?: number;
}) {
  const href = useStartHref();
  return (
    <Link href={href} className={className} onClick={onClick} tabIndex={tabIndex}>
      {children}
    </Link>
  );
}
