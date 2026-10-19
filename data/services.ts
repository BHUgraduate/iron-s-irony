import type { DrawingKind } from "@/components/ui/IronDrawing";

/**
 * What we make. Descriptions state the category of work and the decisions involved.
 * They do not claim specific materials, finishes, standards, timelines or capabilities.
 */
export interface ServiceItem {
  slug: string;
  number: string;
  title: string;
  kind: DrawingKind;
  /** Short line shown on the homepage index and page hero. */
  line: string;
  /** One or two sentences for the homepage panel. */
  detail: string;
  /** Opening paragraph of the service page. */
  summary: string;
  uses: string[];
  spaces: string[];
  /** Decisions we settle with the client. Phrased as questions of design, not as promises. */
  decisions: string[];
  bring: string[];
  /** Pre-selects the configurator. */
  type: "Gate" | "Railing" | "Balcony" | "Staircase" | "Grill" | "Something else";
  metaDescription: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    slug: "gates",
    number: "01",
    title: "Gates",
    kind: "gate",
    line: "The first thing anyone touches.",
    detail: "Entrance, driveway and courtyard gates, designed for the opening they close and the building they belong to.",
    summary:
      "A gate is the first piece of a building anyone meets, and the one you handle every day. We design and fabricate gates around the opening, the architecture and the way the entrance is really used.",
    uses: ["Driveway and boundary gates", "Courtyard and pedestrian gates", "Entrances to homes and commercial premises"],
    spaces: ["Private homes", "Apartment and housing compounds", "Offices and commercial premises"],
    decisions: [
      "Pattern and proportion against the facade",
      "How it opens, and what space it needs to clear",
      "Material and finish for where it stands",
      "How it is fixed and hung",
    ],
    bring: ["A photograph of the opening", "Rough width and height", "Any gate you have seen and liked"],
    type: "Gate",
    metaDescription: "Custom ironwork gates for homes and commercial entrances, designed around your opening and fabricated to fit. Start a gate project with iron’s irony.",
  },
  {
    slug: "railings",
    number: "02",
    title: "Railings",
    kind: "railing",
    line: "Where the hand rests.",
    detail: "Balustrades and handrails for terraces, landings and walkways, sized to the site and fixed into the structure.",
    summary:
      "Railings protect an edge and set the character of a space. We make them to the exact run, height and fixing conditions of the site, in a pattern that suits the building.",
    uses: ["Terraces and roof edges", "Landings and walkways", "Interior balustrades"],
    spaces: ["Terraces and rooftops", "Entrance steps and ramps", "Double-height interiors"],
    decisions: [
      "Pattern, spacing and proportion",
      "Handrail profile and how it feels in the hand",
      "How it fixes into the floor, wall or edge",
      "Material and finish for indoors or out",
    ],
    bring: ["Photos of the edge or run", "Approximate length and height", "A railing you like the look of"],
    type: "Railing",
    metaDescription: "Custom ironwork railings and balustrades for terraces, landings and interiors, made to the exact site. Discuss a railing project with iron’s irony.",
  },
  {
    slug: "balconies",
    number: "03",
    title: "Balconies",
    kind: "balcony",
    line: "An edge worth looking at.",
    detail: "Balcony railings and supporting ironwork, plain and exact or ornamental, made to the opening you have.",
    summary:
      "The balcony is where a building meets the street. Whether the aim is quiet geometry or ornament, we design the ironwork to suit the facade and make it to the opening you have.",
    uses: ["New balcony railings", "Replacing worn or outdated railings", "Ornamental infill and detailing"],
    spaces: ["Houses and villas", "Apartment buildings", "Heritage and period facades"],
    decisions: [
      "Plain or ornamental, and how much pattern",
      "How the design sits with the rest of the facade",
      "Fixing into existing masonry or slab edges",
      "Finish for weather exposure",
    ],
    bring: ["A photograph of the existing balcony", "Rough dimensions", "Facade references you like"],
    type: "Balcony",
    metaDescription: "Custom ironwork balcony railings, new or replacement, designed to suit the facade. Start a balcony project with iron’s irony.",
  },
  {
    slug: "staircases",
    number: "04",
    title: "Staircases",
    kind: "staircase",
    line: "Weight you can feel underfoot.",
    detail: "Stair balustrades, handrails and fabricated staircases, from a simple external flight to a feature stair.",
    summary:
      "A staircase is touched at every step. We fabricate stair balustrades, handrails and staircases that are designed with the architecture and measured to the stair as built.",
    uses: ["Feature staircases", "Stair balustrades and handrails", "External flights and access stairs"],
    spaces: ["Entrance halls", "Duplex homes and villas", "Commercial interiors"],
    decisions: [
      "Open or closed pattern, and how much it should show",
      "Handrail profile and continuity around turns",
      "Fixing to treads, stringers or walls",
      "Finish and how it ages with use",
    ],
    bring: ["Photos of the stair", "Number of steps and rough rise", "A staircase you admire"],
    type: "Staircase",
    metaDescription: "Custom ironwork staircases, stair balustrades and handrails, measured to your stair and made to fit. Discuss a staircase project with iron’s irony.",
  },
  {
    slug: "grills",
    number: "05",
    title: "Grills",
    kind: "grill",
    line: "Protection that belongs to the facade.",
    detail: "Window and opening grills, from clean geometric patterns to traditional work, fixed into the wall.",
    summary:
      "A grill is part of how a building looks from the street. We design window and opening grills as a feature of the facade rather than an afterthought, and fabricate them to each opening.",
    uses: ["Window grills", "Ventilation and utility openings", "Decorative screens"],
    spaces: ["Homes and apartments", "Shopfronts and offices", "Courtyards and boundary walls"],
    decisions: [
      "Geometric, traditional or custom pattern",
      "Spacing against light, view and ventilation",
      "How it fixes into the surrounding wall",
      "Finish and colour",
    ],
    bring: ["A photograph of the window", "Opening width and height", "Patterns you like"],
    type: "Grill",
    metaDescription: "Custom ironwork window grills and screens, designed as part of the facade and fabricated to each opening. Start a grill project with iron’s irony.",
  },
  {
    slug: "architectural-ironwork",
    number: "06",
    title: "Architectural ironwork",
    kind: "architectural",
    line: "Detail that sets a building apart.",
    detail: "Portals, screens, canopies and feature elements, drawn with the architect or designer and fabricated to the drawings.",
    summary:
      "Some of the most memorable parts of a building are made of iron: an entrance portal, a screen, a feature element. We work from your drawings or develop the design with you, and fabricate to it.",
    uses: ["Entrance portals and screens", "Feature elements for architects and designers", "Interior metalwork"],
    spaces: ["Architect-led residences", "Hospitality and retail interiors", "Institutional and commercial buildings"],
    decisions: [
      "How the element reads against the architecture",
      "Sections and proportions at a refined scale",
      "Junctions with glass, stone, timber and concrete",
      "Fixing details agreed with the contractor",
    ],
    bring: ["Drawings or sketches, in any form", "Photos of the space", "Material references"],
    type: "Something else",
    metaDescription: "Architectural ironwork for architects, designers and owners: portals, screens and feature elements fabricated to your drawings. Talk to iron’s irony.",
  },
  {
    slug: "custom-fabrication",
    number: "07",
    title: "Custom fabrication",
    kind: "custom",
    line: "If you can describe it, we can draw it.",
    detail: "One-off pieces made from a sketch, a photograph or a measured opening. Bring what you have and we work out the rest together.",
    summary:
      "Not everything fits a category. If you have something specific in mind, a piece from a reference photo, an unusual opening, a repair or a replacement, start the conversation and we will look at how to make it.",
    uses: ["Pieces made from a reference photo", "One-off and unusual openings", "Repairs and replacements"],
    spaces: ["Anywhere a standard piece will not do"],
    decisions: [
      "What to keep from the reference and what to change",
      "Proportions for your space",
      "Material and finish",
      "How the piece is fixed or installed",
    ],
    bring: ["Whatever you have: a photo, a sketch, a description", "Photos of where it goes", "Rough size"],
    type: "Something else",
    metaDescription: "Custom ironwork fabrication from a photo, sketch or measured opening. Describe what you have in mind and talk to iron’s irony.",
  },
];

export const getService = (slug: string) => SERVICES_DATA.find((s) => s.slug === slug);
