import * as React from "react";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/services";

/** Previous / next service, so the visitor can keep exploring without going back. */
export function ServiceFooterNav({ slug }: { slug: string }) {
  const i = SERVICES_DATA.findIndex((s) => s.slug === slug);
  const prev = SERVICES_DATA[(i - 1 + SERVICES_DATA.length) % SERVICES_DATA.length];
  const next = SERVICES_DATA[(i + 1) % SERVICES_DATA.length];
  return (
    <nav aria-label="More services" className="grid sm:grid-cols-2 border-y border-iron-950/20">
      {[
        { s: prev, label: "Previous", align: "" },
        { s: next, label: "Next", align: "sm:text-right sm:border-l border-t sm:border-t-0 border-iron-950/20" },
      ].map(({ s, label, align }) => (
        <Link key={s.slug} href={`/services/${s.slug}`} className={`group block py-10 sm:py-14 px-1 sm:px-8 ${align}`}>
          <p className="micro text-ink-muted">{label}</p>
          <p className="display text-[clamp(1.6rem,4vw,3rem)] mt-3 transition-transform duration-500 ease-architectural group-hover:translate-x-1">
            {s.title}
          </p>
        </Link>
      ))}
    </nav>
  );
}
