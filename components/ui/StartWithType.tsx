"use client";

import * as React from "react";
import Link from "next/link";
import { useStartHref } from "@/components/layout/StartLink";
import { announcePrefill } from "@/lib/motion";

/** A "Start a project" link that carries the visitor's chosen type into the configurator. */
export function StartWithType({
  type,
  style,
  children,
  className,
}: {
  type: string;
  style?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const href = useStartHref();
  return (
    <Link
      href={href}
      className={className}
      onClick={() => announcePrefill({ type, style }, href)}
    >
      {children}
    </Link>
  );
}
