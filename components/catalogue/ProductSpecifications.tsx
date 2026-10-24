import * as React from "react";
import { ADAPTABLE, knownSpecs, projectSpecs, type CatalogueEntry } from "@/data/catalogue";

/**
 * Two honest lists. "About this design" holds only what is known. "Made to your project" lists the details that
 * are decided with the customer; each reads "Custom / as per project" until a real value is added to the design's data.
 */
export function ProductSpecifications({ design }: { design: CatalogueEntry }) {
  const about = knownSpecs(design);
  const project = projectSpecs(design);
  const adaptable = design.customisation?.length ? design.customisation : [...ADAPTABLE];

  return (
    <div className="grid lg:grid-cols-12 gap-x-16 gap-y-14">
      <div className="lg:col-span-6">
        <h3 className="micro text-accent-ink">About this design</h3>
        <dl className="mt-5 border-t border-iron-950/25">
          {about.map((r) => (
            <div key={r.label} className="grid sm:grid-cols-[9rem_1fr] gap-x-8 gap-y-1 py-4 border-b border-iron-950/15">
              <dt className="micro text-ink-muted pt-1">{r.label}</dt>
              <dd className="text-[1.05rem] leading-relaxed">{r.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="lg:col-span-6">
        <h3 className="micro text-accent-ink">Made to your project</h3>
        <dl className="mt-5 border-t border-iron-950/25">
          {project.map((r) => (
            <div key={r.label} className="grid sm:grid-cols-[9rem_1fr] gap-x-8 gap-y-1 py-4 border-b border-iron-950/15">
              <dt className="micro text-ink-muted pt-1">{r.label}</dt>
              <dd className={r.known ? "text-[1.05rem] leading-relaxed" : "text-[1.05rem] leading-relaxed text-ink-secondary"}>{r.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="lg:col-span-12 border border-iron-950/25 p-6 sm:p-8 grid md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-5">
          <p className="micro text-accent-ink">Customisation available</p>
          <p className="mt-3 font-serif text-[1.7rem] sm:text-[2rem] leading-tight">Adapted to your project.</p>
        </div>
        <div className="md:col-span-7">
          <p className="text-[1rem] leading-relaxed text-ink-secondary">
            Dimensions, material, finish, colour and detailing can be adapted to your project. This design is a starting point.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {adaptable.map((a) => (
              <li key={a} className="px-3.5 py-2 border border-iron-950/25 text-[0.95rem]">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
