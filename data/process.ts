export interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  deliverable: string;
}

export const WORKSHOP_PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Tell Us What You Need",
    subtitle: "Initial Enquiry & Specification",
    description:
      "Submit preliminary project details, architectural sketches, photographs of the space, or dimensional criteria via our structured quotation engine or workshop telephone.",
    deliverable: "Initial consultation notes & feasibility evaluation.",
  },
  {
    stepNumber: "02",
    title: "Discuss Requirements",
    subtitle: "Dimensions, Site Conditions & Material",
    description:
      "We examine structural opening dimensions, mounting substrate (brick, concrete, timber), environmental exposure, functional requirements, and target aesthetic nuances.",
    deliverable: "Refined material specification & preliminary scope sheet.",
  },
  {
    stepNumber: "03",
    title: "Design & Quotation",
    subtitle: "Costings & Engineering Review",
    description:
      "Our team prepares an itemized proposal with clear material grades, finish selections, lead-time estimates, and optional fabrication alternatives.",
    deliverable: "Binding commercial quotation & fabrication drawing sign-off.",
  },
  {
    stepNumber: "04",
    title: "Precision Fabrication",
    subtitle: "Cutting, Forging & Welding",
    description:
      "In the atelier, steel is measured, sheared, hot-forged, cut, and welded. Structural joints are ground and dressed to architectural inspection standards.",
    deliverable: "Raw fabrication assembly verified against tolerances.",
  },
  {
    stepNumber: "05",
    title: "Finishing & Coating",
    subtitle: "Corrosion Defense & Patinas",
    description:
      "The assembly undergoes chemical surface preparation followed by the specified finish: hot-dip galvanizing, electrostatic powder coating, or hand-rubbed patinas.",
    deliverable: "Corrosion-resistant protective coating and surface inspection.",
  },
  {
    stepNumber: "06",
    title: "Delivery & Installation",
    subtitle: "Site Placement & Handover",
    description:
      "The finished ironwork is carefully wrapped, delivered, and anchored securely on site, or prepared for collection/contractor installation with precise hardware.",
    deliverable: "Securely anchored installation & care guidance handover.",
  },
];