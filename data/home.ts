import type { DrawingKind } from "@/components/ui/IronDrawing";

/**
 * Homepage content. Everything here is either drawn from the existing site data
 * (services, process, FAQ, customers) or is plain description of the work categories.
 * No counts, years, clients, awards or certifications. Add real ones only when they are true.
 */

export const HERO_COPY = {
  eyebrow: "Architectural & decorative ironwork · Varanasi",
  lines: ["Iron,", "shaped", "with intent."],
  lead: "Gates, railings, balconies, staircases and custom ironwork, made to become part of the building.",
  primary: "Start a Project",
  secondary: "See the Work",
};

export const TRANSFORMATION = {
  label: "Why it matters",
  lines: ["From raw metal", "to permanent", "architecture."],
  lead: "Nobody wants iron. They want the entrance that feels safe, the staircase that feels solid, the balcony that looks finished. We make the part of the building that gets touched every day.",
  stages: [
    { kind: "bar" as DrawingKind, label: "Raw material", text: "Bar, section and sheet. Nothing yet, and everything possible." },
    { kind: "assembly" as DrawingKind, label: "Craft", text: "Cut, bent, forged and welded to the drawing, by hand." },
    { kind: "gate" as DrawingKind, label: "Structure", text: "Fixed to the building, it holds a boundary, carries load or guides a hand." },
    { kind: "space" as DrawingKind, label: "Finished space", text: "The entrance, stair or balcony people live with every day." },
  ],
};

export interface ServiceEntry {
  id: string;
  number: string;
  title: string;
  kind: DrawingKind;
  line: string;
  detail: string;
  uses: string[];
  /** Which existing service page covers this. */
  href: string;
  /** Configurator type this prefills. */
  type: string;
}

export const SERVICES_INDEX: ServiceEntry[] = [
  {
    id: "gates",
    number: "01",
    title: "Gates",
    kind: "gate",
    line: "The first thing anyone touches.",
    detail: "Driveway, courtyard and entrance gates, built in solid sections and hung to carry their own weight for years.",
    uses: ["Driveway and boundary gates", "Courtyard and pedestrian gates", "Automation-ready frames"],
    href: "/services/building-ironwork",
    type: "Gate",
  },
  {
    id: "railings",
    number: "02",
    title: "Railings",
    kind: "railing",
    line: "Where the hand rests.",
    detail: "Balustrades and handrails for terraces, landings and walkways, sized to the site and fixed into the structure.",
    uses: ["Terraces and roof edges", "Landings and walkways", "Interior balustrades"],
    href: "/services/architectural-ironwork",
    type: "Railing",
  },
  {
    id: "balconies",
    number: "03",
    title: "Balconies",
    kind: "balcony",
    line: "An edge worth looking at.",
    detail: "Balcony railings and supporting ironwork, plain and exact or ornamental, made to the opening you have.",
    uses: ["New balcony railings", "Replacing worn railings", "Ornamental infill"],
    href: "/services/decorative-ironwork",
    type: "Balcony",
  },
  {
    id: "staircases",
    number: "04",
    title: "Staircases",
    kind: "staircase",
    line: "Weight you can feel underfoot.",
    detail: "Stair balustrades, handrails and fabricated staircases, from a simple external flight to a feature stair.",
    uses: ["Feature staircases", "Stair balustrades and handrails", "External flights"],
    href: "/services/architectural-ironwork",
    type: "Staircase",
  },
  {
    id: "grills",
    number: "05",
    title: "Grills",
    kind: "grill",
    line: "Protection that belongs to the facade.",
    detail: "Window and opening grills, from clean geometric patterns to traditional work, fixed into masonry.",
    uses: ["Window grills", "Ventilation and utility openings", "Decorative screens"],
    href: "/services/building-ironwork",
    type: "Grill",
  },
  {
    id: "architectural",
    number: "06",
    title: "Architectural ironwork",
    kind: "architectural",
    line: "Detail that sets a building apart.",
    detail: "Portals, screens, canopies and feature elements drawn with the architect or designer and fabricated to the drawings.",
    uses: ["Entrance portals and screens", "Feature elements for architects", "Interior metalwork"],
    href: "/services/architectural-ironwork",
    type: "Something else",
  },
  {
    id: "custom",
    number: "07",
    title: "Custom fabrication",
    kind: "custom",
    line: "If you can describe it, we can draw it.",
    detail: "One-off pieces made from a sketch, a photograph or a measured opening. Bring what you have; we work out the rest together.",
    uses: ["Work from a reference photo", "One-off and unusual openings", "Repairs and replacements"],
    href: "/services/custom-fabrication",
    type: "Something else",
  },
];

export interface ProcessStage {
  id: string;
  number: string;
  title: string;
  text: string;
}

export const PROCESS_STAGES: ProcessStage[] = [
  { id: "measure", number: "01", title: "Measure", text: "We start with the space: the opening, the wall it fixes into, the weather it faces. Photos and rough dimensions are enough to begin." },
  { id: "design", number: "02", title: "Design", text: "Your requirement becomes a drawing and a written scope, with material and finish agreed before any steel is cut." },
  { id: "fabricate", number: "03", title: "Fabricate", text: "Cut, shaped, welded and assembled in the workshop, then checked against the drawing." },
  { id: "finish", number: "04", title: "Finish", text: "Surface preparation and the protective finish suited to where it will stand, indoors or out." },
  { id: "install", number: "05", title: "Install", text: "Delivered and fixed so it belongs to the building. Installation depends on project scope and location." },
];

export const CUSTOM_WAYS = [
  { title: "A photograph", text: "A gate you saw, a railing you liked. We study it and propose how to build something equivalent for your space." },
  { title: "A sketch", text: "Paper, a phone drawing or an architect’s CAD. Rough is fine." },
  { title: "A measured opening", text: "Width, height and what it fixes into. We help work out the rest." },
];

export const TRUST = {
  lines: ["Built for", "real spaces."],
  lead: "We are not going to show you numbers we cannot stand behind. Here is how we actually work.",
  points: [
    { title: "Made for your opening", text: "Work is fabricated to the dimensions and conditions of your site, not pulled from a stock range." },
    { title: "Scope in writing first", text: "An itemised proposal with material, finish and what is included, before fabrication begins." },
    { title: "A direct line", text: "You speak to the workshop about your project, by phone, WhatsApp or email." },
    { title: "Finish chosen for the place", text: "Exterior work is finished for weather and moisture. Interior work for the look you want." },
  ],
  audiences: ["Homeowners", "Architects and designers", "Builders and contractors", "Commercial developers"],
};

export const CTA_LABELS = {
  services: "Discuss Your Requirement",
  work: "Build Something Like This",
  process: "Talk About Your Project",
  final: "Start a Project",
};
