export interface AtelierValue {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface MaterialStandard {
  category: string;
  standard: string;
  rationale: string;
}

export interface WorkshopCapabilityMetric {
  label: string;
  detail: string;
}

export const ATELIER_PHILOSOPHY = {
  headline: "Ironwork Engineered for Structural Permanence and Sculptural Restraint",
  subheadline:
    "We treat iron not merely as an ornamental surface, but as the fundamental structural bone of architectural spaces.",
  narrative: [
    "At iron’s irony, we bridge the divide between heavy industrial steel fabrication and refined architectural craftsmanship. Metalwork should neither be flimsy and disposable nor crude and unrefined. Every commission that enters our workshop is treated as an enduring component of a building’s physical envelope.",
    "Our approach is rooted in material honesty: we select heavy structural carbon steels, solid forged bars, architectural brass, and corrosion-resistant alloys that have the physical substance to perform under mechanical stress and environmental exposure. We reject lightweight hollow tubing and superficial decorative shortcuts.",
    "Working hand-in-hand with architectural practices, interior designers, general contractors, and private homeowners, our atelier translates conceptual blueprints and hand sketches into engineered metalwork fabricated to millimeter tolerances and finished with multi-barrier protective patinas.",
  ],
};

export const CORE_VALUES: AtelierValue[] = [
  {
    number: "01",
    title: "Material Honesty",
    subtitle: "Solid metallurgy over hollow substitutes",
    description:
      "We build with solid mild carbon steels, heavy structural hollow sections, and architectural bronze. We refuse to compromise structural weight or wall thicknesses for convenience.",
  },
  {
    number: "02",
    title: "Architectural Precision",
    subtitle: "Millimeter-exact alignment & concealed fixings",
    description:
      "From laser-scanned site reveals to flush-ground TIG weld seams, our assemblies adhere to Architecturally Exposed Structural Steel (AESS) visual quality standards.",
  },
  {
    number: "03",
    title: "Permanent Weather Defense",
    subtitle: "Duplex hot-dip galvanizing & protective coatings",
    description:
      "No exterior ironwork leaves our atelier without comprehensive corrosion barriers: molten zinc immersion at $>450^\\circ\\text{C}$, zinc-rich epoxy primers, and UV-stable architectural coatings.",
  },
  {
    number: "04",
    title: "Collaborative Constructability",
    subtitle: "Direct partnership with builders & specifiers",
    description:
      "We resolve substrate anchoring challenges, thermal expansion gaps, and building safety codes before steel is cut, preventing costly on-site delays.",
  },
];

export const MATERIAL_STANDARDS: MaterialStandard[] = [
  {
    category: "Primary Frameworks",
    standard: "Structural Carbon Steel (S275 / S355 equivalent)",
    rationale:
      "Provides verified tensile yield strength for cantilevered staircases, high-wind boundary gates, and structural floor-to-ceiling door jambs.",
  },
  {
    category: "Infill & Balusters",
    standard: "Solid $16\\,\\text{mm}$ to $25\\,\\text{mm}$ Square and Flat Mild Steel Bar",
    rationale:
      "Delivers authentic physical mass, rigidity against impact deflection, and historic tactile presence that hollow tubing cannot replicate.",
  },
  {
    category: "External Corrosion Guard",
    standard: "Hot-Dip Galvanizing to EN ISO 1461 Duplex System",
    rationale:
      "Metallurgical zinc-iron alloy bonding protects internal cavities and exterior reveals against rust for decades in harsh outdoor climates.",
  },
  {
    category: "Interior Finish Treatments",
    standard: "Chemical Cold Blackening Patina & Microcrystalline Hardwax",
    rationale:
      "Celebrates natural mill-scale texture and steel variegation while forming a sealed, non-greasy architectural satin luster.",
  },
  {
    category: "Structural Anchors",
    standard: "Grade 8.8 High-Tensile Steel & Chemical Epoxy Capsules",
    rationale:
      "Ensures rotational and lateral line loads ($> 1.0\\,\\text{kN/m}$) transfer securely into concrete footings, masonry piers, and structural timber headers.",
  },
];

export const WORKSHOP_STANDARDS = [
  "Pre-assembly dry-fitting of staircases and multi-panel railings in the atelier prior to site dispatch.",
  "Laser level and digital angle verification to guarantee $\\pm 1.0\\,\\text{mm}$ alignment on out-of-square masonry reveals.",
  "Continuous full-penetration welds dressed flush with abrasive grain blending for seamless monolithic aesthetics.",
  "Dielectric isolation shims and neoprene gaskets between dissimilar metals to permanently eliminate galvanic corrosion.",
  "Compliance with the universal $100\\,\\text{mm}$ sphere test across all railing and window grille infills.",
];

export const ATELIER_CREDENTIALS_NOTICE = {
  title: "Atelier Standards & Factual Transparency",
  description:
    "iron’s irony operates on verified craftsmanship principles rather than commercial hyperbole. Specific trade certifications, engineer calculation stamps, and physical material test coupons are issued directly on a project-by-project basis to consulting engineers and local building authorities.",
  placeholders: [
    { label: "Workshop Facility", value: "[Workshop Location / Facility Address Pending]" },
    { label: "Lead Metalworkers & Smiths", value: "[Master Fabricator & Atelier Team on File]" },
    { label: "Consulting Engineer Partnerships", value: "[Retained Structural Engineering Practices on File]" },
    { label: "Trade References", value: "[Available to verified architectural practices and general contractors upon request]" },
  ],
};