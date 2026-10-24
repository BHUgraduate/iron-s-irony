import { SERVICES_DATA, getService, type ServiceItem } from "@/data/services";
import manifest from "@/data/catalogue-images.json";

/**
 * The catalogue.
 *
 * iron’s irony is a made-to-order workshop: almost everything can be adapted to the project. So a design here
 * is a photographed piece of work and a starting point, not a fixed product with a fixed specification.
 *
 * Every field except slug, name, category, summary and images is optional and is rendered only when it has a value.
 * Never fill a field with a guess. A value that is not known is simply left out, and the page says that
 * material, dimensions, finish, colour and hardware are "Custom / as per project".
 *
 * To add a design:
 *   1. Add its photographs to scripts/catalogue-photos.json and run scripts/prepare-catalogue-photos.py
 *   2. Add one entry to DESIGNS below
 * Nothing else changes: the grid, filters, pages, sitemap and share images are all driven from this list.
 */

export interface CatalogueImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
}

/** A single known value, or several (e.g. two finishes offered). */
export type SpecValue = string | string[];

export interface CatalogueDesign {
  /** URL: /catalogue/<slug>. Also the folder name under /public/catalogue. */
  slug: string;
  name: string;
  /** Slug of a service in data/services.ts. Categories ARE the services. */
  category: string;
  /** What kind of piece it is, e.g. "Double-leaf gate". */
  type?: string;
  /** One sentence describing what the photographs show. */
  summary: string;
  /** Optional longer story: only what the workshop can stand behind. */
  description?: string;
  /** First image is the hero. Must be real photographs. */
  images: CatalogueImage[];

  // Project specification. Leave unset unless the value is actually known for THIS design.
  material?: SpecValue;
  dimensions?: SpecValue;
  finish?: SpecValue;
  colour?: SpecValue;
  /** Infill or pattern. */
  infill?: SpecValue;
  hardware?: SpecValue;
  installation?: SpecValue;
  application?: SpecValue;
  availability?: SpecValue;
  /** Things specific to this design that can be adapted, shown as chips. Defaults to the general list when unset. */
  customisation?: string[];

  /** Slugs of other designs to show beneath this one. Defaults to its neighbours in the same category. */
  related?: string[];
  featured?: boolean;
  /** Extra line sent with an enquiry about this design. */
  enquiryNote?: string;
}

/** What can be adapted on any piece. Shown on every design page. */
export const ADAPTABLE = ["Dimensions", "Material", "Finish", "Colour", "Pattern and detailing", "Hardware"] as const;

/** Fields shown as "Custom / as per project" until a real value is supplied. Order is display order. */
export const PROJECT_FIELDS = [
  { key: "material", label: "Material" },
  { key: "dimensions", label: "Dimensions" },
  { key: "finish", label: "Finish" },
  { key: "colour", label: "Colour" },
  { key: "hardware", label: "Hardware" },
  { key: "installation", label: "Installation" },
] as const;

/** Known-if-supplied fields, shown as ordinary specification rows. */
export const KNOWN_FIELDS = [
  { key: "infill", label: "Pattern" },
  { key: "application", label: "Application" },
  { key: "availability", label: "Availability" },
] as const;

export const CUSTOM_VALUE = "Custom / as per project";

// ---------------------------------------------------------------------------------------------------------------------
// Photographs

type Manifest = Record<string, { w: number; h: number; blur: string }>;
const IMAGES = manifest as Manifest;

/** Builds the image list for a design from the prepared photographs, one alt text per photograph, in order. */
function photos(slug: string, alts: string[]): CatalogueImage[] {
  return alts.map((alt, i) => {
    const key = `${slug}-${i + 1}`;
    const m = IMAGES[key];
    if (!m) throw new Error(`Missing prepared photograph "${key}". Run scripts/prepare-catalogue-photos.py.`);
    return { src: `/catalogue/${slug}/${key}.jpg`, alt, width: m.w, height: m.h, blurDataURL: m.blur };
  });
}

// ---------------------------------------------------------------------------------------------------------------------
// Designs. Descriptions say only what the photograph shows.

type Entry = Omit<CatalogueDesign, "images"> & { alts: string[] };

const ENTRIES: Entry[] = [
  {
    slug: "leaf-cut-gate",
    name: "Leaf Cut Gate",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A solid double-leaf gate set between dark stone pillars, with branch and leaf patterns cut through tall side panels.",
    infill: "Cut-out branch and leaf pattern on solid panels",
    application: "Home entrance gate",
    featured: true,
    alts: ["Brown double-leaf gate between dark marble pillars at the front of a house, with branch-and-leaf patterns cut out of the side panels and long vertical handles."],
  },
  {
    slug: "scroll-panel-louvre-gate",
    name: "Scroll Panel Louvre Gate",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A double-leaf gate of angled louvre slats with two tall cut-out scroll panels at the centre and floral panels along the base.",
    infill: "Louvre slats with cut-out scroll panels and curved sprig details",
    application: "Home entrance gate",
    featured: true,
    alts: ["Double-leaf gate fitted in a doorway, with angled wood-toned louvre slats, two tall grey cut-out scroll panels at the centre, curved sprigs with small flowers either side and floral cut-outs along the bottom."],
  },
  {
    slug: "rod-and-bar-gate",
    name: "Rod and Bar Gate",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A dark-framed double-leaf gate of horizontal bars, with golden-toned rods and round ball details.",
    infill: "Horizontal bars with vertical rods and ball details",
    application: "Home side entrance gate",
    featured: true,
    alts: [
      "Dark double-leaf gate fitted at a side passage, with horizontal bars, golden-toned horizontal rods, vertical rods with ball details and a bolt latch.",
      "The same style of gate photographed against a corrugated metal wall, showing the dark frame, horizontal bars, golden-toned rods and a brass-toned bolt latch.",
    ],
  },
  {
    slug: "floral-band-slat-gate",
    name: "Floral Band Slat Gate",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A slatted gate with a vertical bar section at the edge, a white band cut with a flowing floral pattern and a long vertical handle.",
    infill: "Horizontal slats, vertical bars and a cut-out floral band",
    application: "Home entrance gate",
    featured: true,
    alts: [
      "Pair of grey slatted gate leaves fitted at a house entrance, each with a white cut-out floral band and a long white handle.",
      "A single grey slatted gate leaf standing in a passage, showing a vertical bar section, a white floral band and a long vertical handle.",
      "Grey slatted gate leaf photographed indoors, seen at an angle, with a white floral cut-out band and a vertical handle.",
      "Side view of the grey slatted gate leaf showing the thickness of the slats and the floral cut-out band.",
      "Dark grey version of the same gate style, photographed in a passage, with white floral cut-out bands and vertical bar sections at each outer edge.",
      "Close-up of the white band, showing a lotus, leaves and flowing curved lines cut cleanly through the metal.",
    ],
  },
  {
    slug: "faceted-panel-gate",
    name: "Faceted Panel Gate",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A wide driveway gate of horizontal slats with an angular faceted panel across the centre and long vertical handles.",
    infill: "Horizontal slats with an angular centre panel",
    application: "Home driveway gate",
    alts: ["Wide dark double-leaf gate between black marble pillars, with horizontal slats and an angular faceted panel at the centre."],
  },
  {
    slug: "hexagon-panel-gate",
    name: "Hexagon Panel Gate",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A wide driveway gate of horizontal slats with a hexagonal panel at the centre and slim vertical handles.",
    infill: "Horizontal slats with a hexagonal centre panel",
    application: "Home driveway gate",
    alts: ["Wide black and grey double-leaf gate in front of a house with a balcony, with horizontal slats and a hexagonal panel at the centre."],
  },
  {
    slug: "fan-panel-gate",
    name: "Fan Panel Gate",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A black panelled gate with lines radiating from the centre and reflective mirror-like inserts.",
    infill: "Radiating line pattern with reflective inserts",
    alts: ["Black double-leaf gate photographed outdoors, with fine lines fanning out from the centre and two reflective mirror-like wedge-shaped inserts."],
  },
  {
    slug: "twin-panel-slat-gate",
    name: "Twin Panel Slat Gate",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A white horizontally slatted gate with two tall dark panels of cut-out floral and feather patterns.",
    infill: "Horizontal slats with two cut-out floral panels",
    application: "Home entrance gate",
    alts: ["White double-leaf gate with wide horizontal slats and two dark vertical panels with cut-out floral and feather patterns, fitted at a house."],
  },
  {
    slug: "sprig-panel-gate",
    name: "Sprig Panel Gate",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A black double-leaf gate with tall panels of golden sprigs and flowers either side of a golden-toned bar centre.",
    infill: "Sprig and flower panels with a bar centre",
    alts: ["Black double-leaf gate against a corrugated metal wall, with tall panels of golden-toned wheat-like sprigs and small flowers and a centre of golden and black bars."],
  },
  {
    slug: "floral-louvre-gate",
    name: "Floral Louvre Gate",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A bronze-toned louvre gate with dark side panels cut with golden flowering sprigs.",
    infill: "Louvre slats with floral side panels",
    alts: ["Brown double-leaf gate photographed lying flat, with louvre slats in the centre and dark side panels with golden floral sprigs."],
  },
  {
    slug: "floral-strip-gate",
    name: "Floral Strip Gate",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A grey slatted double-leaf gate with long vertical handles and a narrow strip of cut-out flowers on each outer edge.",
    infill: "Horizontal slats with cut-out floral strips",
    application: "Passage gate",
    alts: ["Grey double-leaf gate fitted in a brick passage, with horizontal slats, golden-toned vertical handles and a cut-out floral strip on each outer edge."],
  },
  {
    slug: "single-leaf-floral-gate",
    name: "Single-Leaf Floral Gate",
    category: "gates",
    type: "Single-leaf gate",
    summary: "A single-leaf gate of horizontal bars with a tall dark panel of cut-out flowering stems.",
    infill: "Horizontal bars with a cut-out floral panel",
    alts: ["Single brown-grey gate leaf photographed lying flat, with horizontal bars, a bolt latch and a tall dark panel with cut-out flowering stems."],
  },
  {
    slug: "studded-panel-gate",
    name: "Studded Panel Gate",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A blue double-leaf gate with rows of round studs and white panels cut with a floral pattern.",
    infill: "Slats with round studs and floral cut-out panels",
    application: "Home entrance gate",
    alts: ["Blue double-leaf gate at a house entrance, with rows of round white studs between slats and two white panels with cut-out floral patterns."],
  },
  {
    slug: "studded-louvre-gate",
    name: "Studded Louvre Gate",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A dark louvred gate with rows of round studs, floral cut-out side panels and ventilation louvres at the base.",
    infill: "Slats with studs, floral cut-out side panels and louvre vents",
    application: "Home entrance gate",
    alts: ["Dark navy double-leaf gate in a covered entrance with rows of round studs, floral cut-out panels at each side and louvre vents at the base."],
  },
  {
    slug: "ornamental-gate",
    name: "Ornamental Gate",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A bright teal gate with golden-toned curving plant forms, studs and diamond patterns.",
    infill: "Curved plant forms, studs and diamond panels",
    alts: ["Teal double-leaf gate photographed lying flat, with golden-toned curved plant forms meeting in the centre, rows of studs and diamond patterns at the base."],
  },
  {
    slug: "leaf-panel-louvre-gate",
    name: "Leaf Panel Louvre Gate",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A coral-red louvre gate with cut-out leaf and sprig panels and rows of studs.",
    infill: "Louvre slats with leaf-and-sprig cut-out panels",
    alts: ["Coral-red double-leaf gate with louvre slats, rows of studs and a cut-out leaf and sprig panel on each side."],
  },
  {
    slug: "pierced-panel-gate",
    name: "Pierced Panel Gate",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A terracotta-toned gate between black pillars, with tall panels pierced in a flower-like medallion pattern.",
    infill: "Pierced medallion pattern panels",
    application: "Home entrance gate",
    alts: ["Terracotta-red double-leaf gate set between two black pillars, each leaf with a tall panel pierced in a repeating flower medallion pattern and a long steel handle."],
  },
  {
    slug: "trellis-gate",
    name: "Trellis Gate",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A gate of rusty-toned frames filled with a woven bar pattern and scrolled side panels, photographed during installation.",
    infill: "Woven bar pattern with scrolled side panels",
    application: "Home entrance gate",
    alts: ["Rust-toned double-leaf gate with a woven bar pattern and scrolled side panels, fitted beside a side gate in a wall under construction."],
  },
  {
    slug: "louvre-gate-top-grille",
    name: "Louvre Gate with Top Grille",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A blue louvre gate with a bar grille above for light and air.",
    infill: "Horizontal louvres with a bar grille above",
    application: "Home entrance gate",
    alts: ["Blue double-leaf gate with horizontal louvres and a vertical bar grille above it, fitted at the front of a house."],
  },
  {
    slug: "cut-panel-top-grille-gate",
    name: "Cut Panel Gate with Top Grille",
    category: "gates",
    type: "Double-leaf gate",
    summary: "An orange and brown gate with white cut-out floral panels, long handles and a decorative grille above.",
    infill: "Slats and panels with white floral cut-outs and a grille above",
    application: "Home entrance gate",
    alts: ["Orange and brown double-leaf gate with white cut-out floral panels, long golden-toned handles, a padlock and a decorative grille above."],
  },
  {
    slug: "shubh-labh-gate",
    name: "Shubh Labh Gate",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A studded double-leaf gate with an auspicious Shubh Labh panel across the top, a square centre motif and floral side panels.",
    infill: "Studded bars, square centre motif and floral side panels",
    application: "Home entrance gate",
    alts: ["Bronze and gold double-leaf gate with rivets, Shubh Labh lettering across the top, a square motif at the centre and floral panels on each side."],
  },
  {
    slug: "ornate-panel-gate",
    name: "Ornate Panel Gate",
    category: "gates",
    type: "Single-leaf gate",
    summary: "A single-leaf gate with a floral cut-out panel, horizontal slats and ornamental corner details.",
    infill: "Floral cut-out panel, horizontal slats and ornamental corners",
    alts: ["Dark single gate leaf with an antique bronze look, a floral cut-out panel, horizontal slats, a bolt latch and ornamental corner details."],
  },
  {
    slug: "steel-band-panel-gate",
    name: "Steel Band Panel Gate",
    category: "gates",
    type: "Wide gate",
    summary: "A wide navy gate of vertical panels, with a horizontal band of bright steel across the middle.",
    infill: "Vertical panels with a bright horizontal band",
    alts: ["Wide navy blue gate of vertical panels, with a horizontal band of bright polished steel across the middle, photographed outdoors."],
  },
  {
    slug: "medallion-gate",
    name: "Medallion Gate",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A wide grey gate with a circular medallion at the centre, lattice corner panels and leaf cut-outs at each side.",
    infill: "Circular medallion, lattice corners and leaf cut-outs",
    application: "Home entrance gate",
    alts: ["Wide grey double-leaf gate with a circular patterned medallion and golden-toned handles at the centre, lattice panels above leaf-shaped cut-outs at each side."],
  },
  {
    slug: "studded-border-gate",
    name: "Studded Border Gate",
    category: "gates",
    type: "Single-leaf gate",
    summary: "A black single-leaf gate of horizontal bars with a golden studded border and a cut-out floral panel.",
    infill: "Horizontal bars, studded border and floral cut-out panel",
    alts: ["Black single gate leaf with horizontal bars, golden-toned studs along the edge and a pale cut-out floral panel, photographed outdoors."],
  },
  {
    slug: "louvre-gate-gold-panels",
    name: "Louvre Gate with Gold Panels",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A brown louvre gate with golden-yellow floral panels at each side and a bar grille above.",
    infill: "Louvre slats with floral side panels and a bar grille above",
    application: "Home entrance gate",
    alts: ["Brown double-leaf louvre gate with golden-yellow patterned panels at each side and a bar grille above it, at the front of a house."],
  },
  {
    slug: "vertical-bar-gate",
    name: "Vertical Bar Gate",
    category: "gates",
    type: "Double-leaf gate",
    summary: "Double-leaf gates of closely spaced vertical bars, with a bar grille above, shown in three installations.",
    infill: "Closely spaced vertical bars",
    application: "Home entrance gate",
    alts: [
      "Sage-green double-leaf gate of vertical bars with a bar grille above, at a house entrance with striped steps.",
      "Dark grey double-leaf gate of vertical bars with a bar grille above, at the front of a house.",
      "White double-leaf gate of vertical bars fitted in a recessed entrance.",
    ],
  },
  {
    slug: "tall-handle-bar-gate",
    name: "Tall Handle Bar Gate",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A dark gate of vertical bars with tall white handles at the centre, with slatted panels above.",
    infill: "Vertical bars with slatted panels above",
    application: "Home entrance gate",
    alts: ["Dark double-leaf gate of vertical bars with tall white handles, slatted panels above, at the front of a two-storey house."],
  },
  {
    slug: "window-grille-panel-gate",
    name: "Panel Gate with Window Grilles",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A solid steel-panelled gate with small grilled windows, and a bar grille above.",
    infill: "Solid panels with small grilled windows and a bar grille above",
    application: "Home entrance gate",
    alts: ["Grey-blue double-leaf gate of solid panels with two small grilled windows and a bar grille above, at a house entrance."],
  },
  {
    slug: "cross-detail-bar-gate",
    name: "Cross Detail Bar Gate",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A dark double-leaf gate of fine vertical bars with cross details in the corners, long handles and a slatted panel above.",
    infill: "Fine vertical bars with corner cross details",
    application: "Home entrance gate",
    alts: ["Dark double-leaf gate of fine vertical bars with small cross details in the lower corners and long handles, with a slatted panel above and a patterned paved threshold."],
  },
  {
    slug: "square-cutout-panel-gate",
    name: "Square Cut-out Panel Gate",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A dark brown gate of horizontal slats with square cut-out frames down each side and a ventilation grille above.",
    infill: "Horizontal slats with square cut-out frames",
    application: "Home entrance gate",
    alts: ["Dark brown double-leaf gate of horizontal slats with white-edged square cut-outs down each side, a curved panel line and a ventilation grille."],
  },
  {
    slug: "frame-pattern-gate",
    name: "Frame Pattern Gate",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A red gate with a framed pattern along the top and bottom, vertical bars between and a bar grille above.",
    infill: "Framed pattern borders with vertical bars",
    application: "Home entrance gate",
    alts: ["Red double-leaf gate with square framed patterns along the top and bottom, vertical bars between them and a bar grille above, at a house with red-paved steps."],
  },
  {
    slug: "cream-panel-gate",
    name: "Cream Panel Gate",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A bar gate with tall cream panels cut with floral patterns, set under a slatted panel.",
    infill: "Bars with cream floral cut-out panels and a slatted panel above",
    application: "Home entrance gate",
    alts: ["Brown double-leaf bar gate fitted in a recess, with two tall cream panels cut with floral patterns and a slatted panel above."],
  },
  {
    slug: "lattice-gate",
    name: "Lattice Gate",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A dark double-leaf gate of fine lattice with golden-toned flower details and diamond ornaments at the base.",
    infill: "Lattice with flower and diamond details",
    alts: ["Dark double-leaf gate photographed lying flat, with a fine lattice pattern, golden-toned flower details and diamond-shaped ornaments at the base."],
  },
  {
    slug: "yellow-panel-gate",
    name: "Yellow Panel Gate",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A dark brown slatted gate with two yellow floral cut-out panels, long handles and a slatted panel above.",
    infill: "Slats with two floral cut-out panels",
    application: "Home entrance gate",
    alts: ["Dark brown double-leaf slatted gate with two narrow yellow floral panels and long handles, with a slatted panel above, at a house."],
  },
  {
    slug: "slotted-louvre-gate",
    name: "Slotted Louvre Gate",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A dark double-leaf gate with slot openings, long vertical handles and a bolt latch, framed on strong hinges.",
    infill: "Slotted louvre openings",
    alts: ["Dark brown double-leaf gate against a corrugated metal wall, with slot openings, two long vertical handles, a bolt latch and visible hinges."],
  },
  {
    slug: "angled-louvre-gate",
    name: "Angled Louvre Gate",
    category: "gates",
    type: "Double-leaf gate",
    summary: "A dark louvre gate with angled slats under a bar panel and a light canopy.",
    infill: "Angled louvre slats",
    application: "Home entrance gate",
    alts: ["Dark double-leaf gate with angled louvre slats and a bar panel above, decorated with flower garlands, below a light concrete canopy."],
  },
  {
    slug: "staircase-railing",
    name: "Staircase Railing",
    category: "staircases",
    type: "Stair balustrade and handrail",
    summary: "A dark balustrade and handrail running along a concrete stair and its landing, with horizontal rails between posts.",
    infill: "Horizontal rails between posts",
    application: "Interior stair under construction",
    alts: ["Dark balustrade and handrail with horizontal rails following a concrete staircase and turning at the landing, in a building under construction."],
  },
];

// ---------------------------------------------------------------------------------------------------------------------

export interface CatalogueEntry extends CatalogueDesign {
  service: ServiceItem;
  /** Hero image. */
  hero: CatalogueImage;
}

export const DESIGNS: CatalogueEntry[] = ENTRIES.flatMap(({ alts, ...d }) => {
  const service = getService(d.category);
  if (!service) throw new Error(`Design "${d.slug}" uses unknown category "${d.category}".`);
  const images = photos(d.slug, alts);
  return [{ ...d, images, service, hero: images[0] }];
});

export const getDesign = (slug: string) => DESIGNS.find((d) => d.slug === slug);

export interface CatalogueCategory {
  slug: string;
  label: string;
  line: string;
  count: number;
}

/** Categories are the services. Only those with at least one photographed design appear in the browser. */
export const CATEGORIES: CatalogueCategory[] = SERVICES_DATA.map((s) => ({
  slug: s.slug,
  label: s.title,
  line: s.line,
  count: DESIGNS.filter((d) => d.category === s.slug).length,
}));

export const BROWSABLE_CATEGORIES = CATEGORIES.filter((c) => c.count > 0);

/** Services with no photographed design yet. Shown as "also made to order", linking to the service page. */
export const MADE_TO_ORDER = SERVICES_DATA.filter((s) => !DESIGNS.some((d) => d.category === s.slug));

/** Hand-picked relations first, then the neighbours in the same category, wrapping round so each page differs. */
export function relatedDesigns(design: CatalogueEntry, limit = 3): CatalogueEntry[] {
  const picked = (design.related ?? []).map(getDesign).filter((d): d is CatalogueEntry => !!d && d.slug !== design.slug);
  const same = DESIGNS.filter((d) => d.category === design.category);
  const at = same.findIndex((d) => d.slug === design.slug);
  const neighbours = same.length > 1 ? same.map((_, k) => same[(at + 1 + k) % same.length]).filter((d) => d.slug !== design.slug) : [];
  const others = DESIGNS.filter((d) => d.slug !== design.slug);
  const seen = new Set<string>();
  return [...picked, ...neighbours, ...others].filter((d) => (seen.has(d.slug) ? false : (seen.add(d.slug), true))).slice(0, limit);
}

/** Specification values that are actually known for a design. */
export function knownSpecs(d: CatalogueEntry): { label: string; value: string }[] {
  const join = (v: SpecValue) => (Array.isArray(v) ? v.join(", ") : v);
  const rows: { label: string; value: string }[] = [
    { label: "Category", value: d.service.title },
    ...(d.type ? [{ label: "Type", value: d.type }] : []),
  ];
  for (const f of KNOWN_FIELDS) {
    const v = d[f.key];
    if (v && (!Array.isArray(v) || v.length)) rows.push({ label: f.label, value: join(v) });
  }
  return rows;
}

/** Project fields with a real value, and the ones that stay "Custom / as per project". */
export function projectSpecs(d: CatalogueEntry) {
  const join = (v: SpecValue) => (Array.isArray(v) ? v.join(", ") : v);
  return PROJECT_FIELDS.map((f) => {
    const v = d[f.key];
    const known = !!v && (!Array.isArray(v) || v.length > 0);
    return { label: f.label, value: known ? join(v as SpecValue) : CUSTOM_VALUE, known };
  });
}

/** What travels with an enquiry about a design, so nobody has to explain which design they mean. */
export function designReference(d: CatalogueEntry, origin: string) {
  return `${d.name} (${d.service.title}) ${origin}/catalogue/${d.slug}`;
}
export const designWhatsApp = (d: CatalogueEntry, origin: string) =>
  `Hello, I would like to ask about the “${d.name}” design (${d.service.title}) in your catalogue and discuss adapting it to my project.\n${origin}/catalogue/${d.slug}`;

/** The official catalogue PDF. Not supplied yet: while null, no download button is shown anywhere. */
export const CATALOGUE_PDF = null as null | { href: string; sizeLabel?: string };
