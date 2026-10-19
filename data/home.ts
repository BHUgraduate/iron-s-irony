import type { DrawingKind } from "@/components/ui/IronDrawing";

/**
 * Homepage and shared story copy. Statements describe the work and the way we approach it.
 * No counts, years, clients, awards, certifications, prices or timelines. Add real ones only when true.
 */

export const HERO_COPY = {
  eyebrow: "Architectural & decorative ironwork",
  lines: ["Iron,", "shaped", "with intent."],
  lead: "Gates, railings, balconies, staircases and custom ironwork, made to become part of the building.",
  primary: "Start a Project",
  secondary: "See the Work",
};

export const TRANSFORMATION = {
  label: "Why it matters",
  lines: ["From raw metal", "to permanent", "architecture."],
  lead: "Nobody wants iron. They want the entrance that feels right, the staircase that feels solid, the balcony that looks finished. We make the part of the building that gets touched every day.",
  stages: [
    { kind: "bar" as DrawingKind, label: "Raw material", text: "Bar, section and sheet. Nothing yet, and everything possible." },
    { kind: "assembly" as DrawingKind, label: "Craft", text: "Cut, shaped and welded to the drawing." },
    { kind: "gate" as DrawingKind, label: "Structure", text: "Fixed to the building, it holds a boundary, guides a hand, frames an entrance." },
    { kind: "space" as DrawingKind, label: "Finished space", text: "The entrance, stair or balcony people live with every day." },
  ],
};

export interface ProcessStage {
  id: string;
  number: string;
  title: string;
  text: string;
  /** What the client is asked for at this stage. */
  ask: string;
}

export const PROCESS_STAGES: ProcessStage[] = [
  { id: "measure", number: "01", title: "Measure", text: "We start with the space: the opening, the wall it fixes into, the conditions around it. Photos and rough dimensions are enough to begin the conversation.", ask: "Photos, rough size, any reference you like." },
  { id: "design", number: "02", title: "Design", text: "Your requirement becomes a design you can react to before anything is cut. Proportion, pattern, material and finish are decided together.", ask: "Your thoughts on the design." },
  { id: "fabricate", number: "03", title: "Fabricate", text: "The piece is cut, shaped, welded and assembled to the agreed design.", ask: "Nothing. This part is ours." },
  { id: "finish", number: "04", title: "Finish", text: "The surface is prepared and the finish you chose is applied, suited to where the piece will stand.", ask: "Confirmation of the finish." },
  { id: "install", number: "05", title: "Install", text: "The finished piece is fixed so that it belongs to the building. Installation arrangements are discussed at the start of the project.", ask: "Access to the site." },
];

export const CUSTOM_WAYS = [
  { title: "A photograph", text: "A gate you saw, a railing you liked. We study it and propose how to build something equivalent for your space." },
  { title: "A sketch", text: "Paper, a phone drawing or an architect’s CAD. Rough is fine." },
  { title: "A measured opening", text: "Width, height and what it fixes into. We help work out the rest." },
];

export const TRUST = {
  lines: ["Built for", "real spaces."],
  lead: "We would rather show you how we work than quote numbers we cannot back up.",
  points: [
    { title: "Made for your site", text: "Each piece is designed around your opening, your building and the way you use the space." },
    { title: "Design before fabrication", text: "You see and agree the design before anything is cut, so what arrives is what you expected." },
    { title: "Plain conversation", text: "You can talk to us directly by phone, WhatsApp or email. Questions are welcome, and so are rough ideas." },
    { title: "Start with what you have", text: "A photo, a sketch or a measurement is enough. You do not need a finished brief." },
  ],
  audiences: ["Homeowners", "Architects and designers", "Builders and contractors", "Businesses"],
};

export const CTA_LABELS = {
  services: "Discuss Your Requirement",
  work: "Build Something Like This",
  process: "Talk About Your Project",
  final: "Start a Project",
};
