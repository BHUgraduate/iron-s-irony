import type { DrawingKind } from "@/components/ui/IronDrawing";

/**
 * Work.
 *
 * No completed projects have been supplied yet, so every entry is a REPRESENTATIVE EXAMPLE:
 * a brief of the kind of work we take on, drawn as an original line drawing. It is not a record of a
 * completed job and the UI says so wherever it appears.
 *
 * To publish a real project: set `status: "completed"`, add `photo` (a file in /public/work),
 * and fill whatever is true in `real`. Only fields present in `real` are shown.
 */
export interface WorkEntry {
  slug: string;
  title: string;
  kind: DrawingKind;
  typeLabel: string;
  space: string;
  /** Two sentences: what it is and who asks for it. */
  summary: string;
  /** What was made. */
  made: string;
  /** Why someone asks for it. */
  why: string;
  /** What kind of space it belongs to. */
  belongs: string;
  /** What makes it interesting. */
  interesting: string;
  decisions: string[];
  service: string;
  status: "representative" | "completed";
  photo?: string;
  photoAlt?: string;
  real?: { location?: string; year?: string; materials?: string; finish?: string; installation?: string };
}

export const WORK: WorkEntry[] = [
  {
    slug: "staircase-balustrade",
    title: "A balustrade that climbs with the stair",
    kind: "staircase",
    typeLabel: "Staircase and balustrade",
    space: "Entrance hall or double-height interior",
    summary:
      "A stair balustrade and handrail drawn to follow the flight exactly. The kind of brief that comes from owners and architects who want the stair to be the centre of the room.",
    made: "A continuous balustrade and handrail following the line of the stair, with the pattern drawn to suit the room.",
    why: "A stair is touched at every step. People ask for work that feels solid in the hand and looks considered from across the room.",
    belongs: "Entrance halls, duplex homes, villas and commercial interiors where the stair is on show.",
    interesting: "The geometry. Every post sits on a tread, every line follows the rise, and the handrail must turn corners without a visible break. The drawing matters as much as the fabrication.",
    decisions: ["Open or closed pattern", "Handrail profile", "Fixing to treads or stringers", "Finish"],
    service: "staircases",
    status: "representative",
  },
  {
    slug: "courtyard-gate",
    title: "A gate that belongs to the house",
    kind: "gate",
    typeLabel: "Entrance gate",
    space: "Home entrance or courtyard",
    summary:
      "An entrance gate designed with its facade rather than bought to fit it. The kind of brief that starts with a photograph of the opening and a gate someone admired elsewhere.",
    made: "A gate designed to the opening, with the pattern, proportion and top detail developed for the building behind it.",
    why: "The gate is the first impression of a property and the most handled part of it.",
    belongs: "Houses, villas, courtyards and compounds where the entrance deserves to look intended.",
    interesting: "Proportion. A gate that is slightly too heavy or too busy reads as an add-on. Getting the rhythm of the bars and the weight of the frame right is the whole craft.",
    decisions: ["Pattern and rhythm", "How it opens", "Top detail", "Finish for weather"],
    service: "gates",
    status: "representative",
  },
  {
    slug: "entrance-portal",
    title: "A portal that frames the arrival",
    kind: "architectural",
    typeLabel: "Architectural portal",
    space: "Entrance of a residence or commercial building",
    summary:
      "An arched portal and screen that frames an entrance. Typical of briefs developed with an architect or designer, where the ironwork is a feature of the building rather than a fixture on it.",
    made: "A portal and screen drawn to the architecture and fabricated to the drawings.",
    why: "Some entrances need to feel like an event. Ironwork can frame the arrival, filter light and define the threshold.",
    belongs: "Architect-led homes, hospitality, retail and institutional entrances.",
    interesting: "Scale and junctions. Sections are refined, and the way the portal meets the wall, floor and glazing decides whether it looks built-in or bolted on.",
    decisions: ["Overall form", "Sections and proportion", "Junctions with the building", "Finish"],
    service: "architectural-ironwork",
    status: "representative",
  },
  {
    slug: "balcony-railing",
    title: "A balcony edge with character",
    kind: "balcony",
    typeLabel: "Balcony railing",
    space: "Facade of a house or apartment building",
    summary:
      "A balcony railing designed with the facade, plain or ornamental. A common brief when an existing railing is worn, dated or simply does not suit the building.",
    made: "A railing designed for the balcony’s opening and the facade around it, with infill pattern chosen to suit.",
    why: "The balcony is seen from the street all day. A good railing lifts the whole elevation.",
    belongs: "Houses, villas, apartment buildings and period facades.",
    interesting: "Restraint. Ornament is easy to overdo. The best balcony work knows when to repeat a simple module and where to put one moment of detail.",
    decisions: ["Plain or ornamental", "Fixing into existing masonry", "Pattern scale", "Finish for exposure"],
    service: "balconies",
    status: "representative",
  },
  {
    slug: "window-grills",
    title: "Window grills drawn as part of the facade",
    kind: "grill",
    typeLabel: "Window grills",
    space: "Windows and openings of a home or shopfront",
    summary:
      "Window grills designed as a pattern for the whole elevation. A common brief when protection is needed but the facade should still look intended.",
    made: "A set of grills drawn together so the pattern runs across the openings.",
    why: "Grills are on every window and therefore on every photograph of the building.",
    belongs: "Homes, apartments, shopfronts and offices.",
    interesting: "Repetition at scale. A pattern that works on one window has to hold across ten, at different sizes, without looking cramped or stretched.",
    decisions: ["Pattern and spacing", "Light and ventilation", "Fixing into the wall", "Finish and colour"],
    service: "grills",
    status: "representative",
  },
  {
    slug: "piece-from-a-reference",
    title: "A one-off piece from a reference photo",
    kind: "custom",
    typeLabel: "Custom fabrication",
    space: "Any space where a standard piece will not do",
    summary:
      "A piece made from a photograph, a sketch or a measured opening. The briefs that start with “I saw this and I want something like it for my space.”",
    made: "A piece designed from the client’s reference, adapted to their space and agreed before fabrication.",
    why: "The thing someone wants rarely exists ready-made. A reference gives us the feeling to aim for, and the site tells us what is possible.",
    belongs: "Anywhere: entrances, interiors, gardens, shopfronts.",
    interesting: "Translation. A reference photo was made for another space. Working out what to keep, what to change and how to make it work for yours is the design.",
    decisions: ["What to keep from the reference", "Proportion for your space", "Material and finish", "Fixing or installation"],
    service: "custom-fabrication",
    status: "representative",
  },
];

export const getWork = (slug: string) => WORK.find((w) => w.slug === slug);
export const isRepresentative = (w: WorkEntry) => w.status !== "completed";
