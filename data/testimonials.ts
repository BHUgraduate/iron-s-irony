export interface TestimonialEntry {
  id: string;
  clientRolePlaceholder: string;
  projectTypePlaceholder: string;
  quotePlaceholder: string;
  isPlaceholder: boolean;
}

export const TESTIMONIALS_DATA: TestimonialEntry[] = [
  {
    id: "test-01",
    clientRolePlaceholder: "[Architectural Partner / Project Lead]",
    projectTypePlaceholder: "[Residential Staircase & Exterior Balustrades]",
    quotePlaceholder:
      "Customer verification pending: Detailed feedback from trade partners regarding fabrication tolerances, delivery reliability, and structural finish standards will be published here upon client authorization.",
    isPlaceholder: true,
  },
  {
    id: "test-02",
    clientRolePlaceholder: "[Private Estate Client]",
    projectTypePlaceholder: "[Automated Entrance Gates & Perimeter Railings]",
    quotePlaceholder:
      "Customer verification pending: Homeowner remarks concerning design consultation, installation craftsmanship, and long-term weather resistance will appear here following formal project sign-off.",
    isPlaceholder: true,
  },
  {
    id: "test-03",
    clientRolePlaceholder: "[General Contractor / Site Manager]",
    projectTypePlaceholder: "[Commercial Balconies & Structural Lintels]",
    quotePlaceholder:
      "Customer verification pending: Contractor remarks regarding dimensional accuracy, lead-time adherence, and installation support will appear here as ongoing commissions conclude.",
    isPlaceholder: true,
  },
];