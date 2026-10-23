import { getWork, isRepresentative, type WorkEntry } from "@/data/projects";
import { SERVICES_DATA, getService, type ServiceItem } from "@/data/services";

/**
 * The catalogue.
 *
 * Nothing here is invented. Categories ARE the services iron’s irony offers (data/services.ts) and each design
 * is a catalogue entry for a piece of work in data/projects.ts, which supplies its name, story and status.
 * An entry in this file only adds what the catalogue needs on top: photographs, verified specifications,
 * finishes, an optional PDF and hand-picked related designs.
 *
 * Every optional field is rendered only when it has content. To enrich the catalogue later, fill a field:
 * the UI needs no change.
 *
 *   gallery    real photographs of this design, files in /public/catalogue/<slug>/
 *   specs      verified facts only, e.g. { label: "Material", value: "…" }
 *   finishes   real finishes the workshop offers, with a swatch image or colour if one is available
 *   related    slugs of other designs shown beneath this one (defaults to the same category)
 *
 * To add a design: add (or complete) the entry in data/projects.ts, then add its slug to CATALOGUE below.
 */

export interface CatalogueImage {
  /** Path under /public, e.g. /catalogue/courtyard-gate/01.jpg */
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Optional tiny base64 preview shown while the image loads. */
  blurDataURL?: string;
}

export interface CatalogueSpec {
  label: string;
  value: string;
}

export interface CatalogueFinish {
  name: string;
  note?: string;
  /** A real swatch photograph. Preferred over `colour`. */
  swatch?: CatalogueImage;
  /** A real colour, only if the workshop has confirmed it. */
  colour?: string;
}

export interface CatalogueEntry {
  /** Same slug as the work entry in data/projects.ts. Used in the URL: /catalogue/<slug> */
  slug: string;
  gallery?: CatalogueImage[];
  specs?: CatalogueSpec[];
  finishes?: CatalogueFinish[];
  related?: string[];
  featured?: boolean;
}

export const CATALOGUE: CatalogueEntry[] = [
  { slug: "courtyard-gate", featured: true },
  { slug: "staircase-balustrade" },
  { slug: "entrance-portal" },
  { slug: "balcony-railing" },
  { slug: "window-grills" },
  { slug: "piece-from-a-reference" },
];

/** The official catalogue PDF. Not supplied yet: while null, no download button is shown anywhere. */
export const CATALOGUE_PDF = null as null | { href: string; sizeLabel?: string };

export interface CatalogueDesign extends CatalogueEntry {
  work: WorkEntry;
  service: ServiceItem;
  /** Representative until a real photograph and real project facts exist. */
  representative: boolean;
  /** Short positioning line, taken from the service page. */
  line: string;
  photos: CatalogueImage[];
  specs: CatalogueSpec[];
  finishes: CatalogueFinish[];
}

export interface CatalogueCategory {
  slug: string;
  label: string;
  line: string;
  count: number;
}

function join(entry: CatalogueEntry): CatalogueDesign | null {
  const work = getWork(entry.slug);
  const service = work ? getService(work.service) : undefined;
  if (!work || !service) return null;
  return {
    ...entry,
    work,
    service,
    representative: isRepresentative(work),
    line: service.line,
    photos: entry.gallery ?? [],
    specs: entry.specs ?? [],
    finishes: entry.finishes ?? [],
  };
}

export const DESIGNS: CatalogueDesign[] = CATALOGUE.map(join).filter((d): d is CatalogueDesign => d !== null);

export const getDesign = (slug: string) => DESIGNS.find((d) => d.slug === slug);

/** Categories are the services. Only those that have at least one design appear in the browser. */
export const CATEGORIES: CatalogueCategory[] = SERVICES_DATA.map((s) => ({
  slug: s.slug,
  label: s.title,
  line: s.line,
  count: DESIGNS.filter((d) => d.service.slug === s.slug).length,
}));

export const BROWSABLE_CATEGORIES = CATEGORIES.filter((c) => c.count > 0);

/** Services without a design in the catalogue yet. Shown as "also made to order", linking to the service page. */
export const MADE_TO_ORDER = SERVICES_DATA.filter((s) => !DESIGNS.some((d) => d.service.slug === s.slug));

export function relatedDesigns(design: CatalogueDesign, limit = 3): CatalogueDesign[] {
  const picked = (design.related ?? []).map(getDesign).filter((d): d is CatalogueDesign => !!d && d.slug !== design.slug);
  const sameCategory = DESIGNS.filter((d) => d.slug !== design.slug && d.service.slug === design.service.slug);
  const rest = DESIGNS.filter((d) => d.slug !== design.slug);
  const seen = new Set<string>();
  return [...picked, ...sameCategory, ...rest]
    .filter((d) => (seen.has(d.slug) ? false : (seen.add(d.slug), true)))
    .slice(0, limit);
}

/** Message the visitor sends us about a design. Used by the enquiry prefill, WhatsApp and the assistant. */
export const designReference = (d: CatalogueDesign) => `Catalogue design: ${d.work.title}`;
export const designWhatsApp = (d: CatalogueDesign) =>
  `Hello, I would like to ask about the “${d.work.title}” design in your catalogue.`;
