import * as React from "react";
import type { CatalogueDesign } from "@/data/catalogue";

/**
 * Architectural specification sheet. Rows come only from facts we hold: the category and setting of the design,
 * plus any verified `specs` added to its catalogue entry. Dimensions, material, finish and infill are not
 * listed until they are real; the sheet says so plainly instead of guessing.
 */
export function ProductSpecifications({ design }: { design: CatalogueDesign }) {
  const rows: { label: string; value: string }[] = [
    { label: "Category", value: design.service.title },
    { label: "Type", value: design.work.typeLabel },
    { label: "Typical setting", value: design.work.space },
    { label: "Where it belongs", value: design.work.belongs },
    { label: "Suits", value: design.service.spaces.join(", ") },
    ...design.specs,
  ];

  return (
    <div className="grid lg:grid-cols-12 gap-x-16 gap-y-16">
      <dl className="lg:col-span-7 border-t border-iron-950/25">
        {rows.map((r) => (
          <div key={r.label} className="grid sm:grid-cols-[11rem_1fr] gap-x-8 gap-y-1 py-5 border-b border-iron-950/15">
            <dt className="micro text-ink-muted pt-1">{r.label}</dt>
            <dd className="text-[1.05rem] leading-relaxed">{r.value}</dd>
          </div>
        ))}
        {design.specs.length === 0 && (
          <div className="py-5 border-b border-iron-950/15 text-[0.95rem] leading-relaxed text-ink-secondary">
            Dimensions, material and finish are not fixed for this design. Each piece is measured and drawn for your site,
            and those choices are settled with you.
          </div>
        )}
      </dl>

      <div className="lg:col-span-5 space-y-12">
        <div>
          <h3 className="micro text-accent-ink">Settled together</h3>
          <ul className="mt-5 border-t border-iron-950/25">
            {design.service.decisions.map((d) => (
              <li key={d} className="py-3.5 border-b border-iron-950/15 text-[1rem] leading-snug">
                {d}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="micro text-accent-ink">Bring to the first conversation</h3>
          <ul className="mt-5 border-t border-iron-950/25">
            {design.service.bring.map((b) => (
              <li key={b} className="py-3.5 border-b border-iron-950/15 text-[1rem] leading-snug">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
