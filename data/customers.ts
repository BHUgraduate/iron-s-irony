export interface CustomerSegmentDetailed {
  id: string;
  slug: string;
  title: string;
  roleBadge: string;
  eyebrow: string;
  shortSummary: string;
  heroHeadline: string;
  painPoints: string[];
  atelierSolutions: string[];
  deliverablesChecklist: string[];
  typicalCommissions: string[];
  quoteServiceCategory: string;
}

export interface CustomerSegment {
  id: string;
  title: string;
  badge: string;
  summary: string;
  whatWeOffer: string[];
}

export const DETAILED_CUSTOMER_SEGMENTS: CustomerSegmentDetailed[] = [
  {
    id: "architects",
    slug: "architects",
    title: "Architects & Specifiers",
    roleBadge: "Trade Collaboration",
    eyebrow: "Precision Detailing & Technical Compliance",
    shortSummary:
      "Direct CAD/BIM coordination, constructability reviews, structural line load compliance, and bespoke sub-screed mounting details.",
    heroHeadline:
      "Executing Your Architectural Intent Without Compromising Structural Rigor",
    painPoints: [
      "Fabricators altering profiles or substituting thinner tubing without authorization to cut costs.",
      "Visible surface bolt heads and bulky base plates ruining minimalist aesthetic shadow gaps.",
      "Lack of structural deflection calculations leading to balustrade wobble during building inspection.",
      "Missed project handover deadlines due to unorganized workshop scheduling and poor trade communication.",
    ],
    atelierSolutions: [
      "Strict fidelity to CAD/BIM details, specified metal gauges, and designated metallurgical alloys.",
      "Custom-engineered sub-screed structural troughs and countersunk internal spigots for $100\\%$ concealed mounting.",
      "Pre-fabrication load verification ensuring balustrades withstand commercial $0.74\\,\\text{kN/m}$ to $1.5\\,\\text{kN/m}$ line loads.",
      "Milestone-based shop drawing sign-offs with guaranteed fabrication slots locked into workshop schedules.",
    ],
    deliverablesChecklist: [
      "Dimensioned 2D/3D fabrication shop drawings (DWG/PDF)",
      "Physical metal patina and finish coupon sample sets",
      "Metallurgical grade material certification sheets",
      "Structural anchor loading and pull-out test data",
      "Dedicated pre-installation site coordination meetings",
    ],
    typicalCommissions: [
      "Feature monolithic spine and cantilever floating staircases",
      "Ultra-slender glazed steel partitions and French door suites",
      "Continuous balustrades with continuous invisible handrail splices",
      "Exterior brise-soleil armatures and custom entrance canopies",
    ],
    quoteServiceCategory: "architectural_ironwork",
  },
  {
    id: "homeowners",
    slug: "homeowners",
    title: "Private Homeowners & Estates",
    roleBadge: "Residential Commissions",
    eyebrow: "Security, Craftsmanship & Lasting Value",
    shortSummary:
      "Direct consultation to design, fabricate, and install custom entrance gates, perimeter railings, and architectural ironwork.",
    heroHeadline:
      "Investing in Enduring Security, Classical Character, and Structural Permanence",
    painPoints: [
      "Commercial catalogue gates that rust and corrode after only two or three seasons outdoors.",
      "Standard store-bought gates failing to fit historical, irregular, or settling masonry brick piers.",
      "Opaque pricing structures, hidden delivery charges, and vague allowances.",
      "Messy installations that damage driveway paving, mature gardens, or stone wall copings.",
    ],
    atelierSolutions: [
      "Duplex molten zinc galvanizing at $>450^\\circ\\text{C}$ creating an impenetrable rust barrier backed by durable polyurethane topcoats.",
      "Precise on-site laser surveys that compensate for out-of-plumb piers and sloped driveway approaches.",
      "Transparent itemized quotations with clear material weights, forging hours, and hardware allowances.",
      "Neat, professional diamond-core drilling, chemical capsule anchoring, and clean site reinstatement.",
    ],
    deliverablesChecklist: [
      "Design proposal drawings illustrating overall proportions and picket spacing",
      "Finish and color selection swatches (Matte Black, Graphite, Bronze Patina)",
      "Site survey and electrical conduit layout for intercom/gate automation",
      "Clear written warranties and metal maintenance guidance",
      "Complete white-glove installation and mechanical operational testing",
    ],
    typicalCommissions: [
      "Automated dual-leaf and sliding entrance driveway gates",
      "Perimeter masonry-top railings and pedestrian garden thresholds",
      "Architectural window security grilles with refined geometric infills",
      "Hand-forged terrace balustrades and custom cantilever balconies",
    ],
    quoteServiceCategory: "building_ironwork",
  },
  {
    id: "builders",
    slug: "builders",
    title: "General Contractors & Builders",
    roleBadge: "Site Contracting",
    eyebrow: "Schedule Reliability & Ready-to-Install Assemblies",
    shortSummary:
      "Subcontract metal fabrication delivered on schedule, precisely dimensioned to site tolerances, and engineered for rapid mounting.",
    heroHeadline:
      "Dependable Subcontract Metalwork Fabricated Right the First Time",
    painPoints: [
      "Fabricators delivering ironwork that is out of square, requiring extensive grinding and re-welding on site.",
      "Unreliable lead-time promises that hold up building scaffolding and delay code inspections.",
      "Assemblies delivered without mounting hardware, shims, or legible installation anchor schedules.",
      "Damaged powder coat finishes caused by inadequate workshop wrapping and reckless transit.",
    ],
    atelierSolutions: [
      "Full atelier pre-assembly and jig alignment guaranteeing $\\pm 1.0\\,\\text{mm}$ structural squareness before delivery.",
      "Realistic, committed delivery dates aligned with your construction critical path schedule.",
      "Heavy-duty installation brackets, pre-drilled slotted holes, and certified Grade 8.8 anchors supplied in clearly labeled kits.",
      "Multi-layer high-density foam wrapping and custom timber crating to ensure zero transit or site blemishes.",
    ],
    deliverablesChecklist: [
      "Sign-off approval drawings with anchor hole patterns and minimum embedment depths",
      "Installation bracket schedules and fastener torque specifications",
      "Touch-up coating vials matching factory powder coat/patina formulas",
      "Engineer calculation notes ready for local building authority handover",
      "Flexible site drop-off coordinated with on-site crane and rigging schedules",
    ],
    typicalCommissions: [
      "Code-compliant external steel fire escape stairs and access platforms",
      "Structural flitch plates, roof tie brackets, and bespoke lintel saddles",
      "Multi-unit balcony balustrades tested for fall-protection codes",
      "Commercial refuse enclosure gates and mechanical plant screening",
    ],
    quoteServiceCategory: "building_ironwork",
  },
  {
    id: "designers",
    slug: "designers",
    title: "Interior Designers & Ateliers",
    roleBadge: "Interior Accents",
    eyebrow: "Tactile Textures, Patinas & Fine Metalwork",
    shortSummary:
      "Blackened steel glazed screens, custom furniture armatures, hand-applied hardwax patinas, and mixed-metal detailing.",
    heroHeadline:
      "Bespoke Metal Details That Bring Tactile Warmth to Interior Spaces",
    painPoints: [
      "Industrial fabricators unable to deliver refined furniture-grade welds or smooth polished touchpoints.",
      "Blackened steel finishes that appear painted, flat, or easily smudge and rub off on upholstery.",
      "Difficulty executing mixed metal details pairing blackened iron with silicon bronze or natural brass.",
      "Lack of acoustic consideration on glazed metal doors leading to noisy rattling and draft leaks.",
    ],
    atelierSolutions: [
      "Hand-burnished weld junctions, crisp cold-rolled edges, and micro-radiused transitions pleasing to the hand.",
      "Genuine multi-stage chemical cold blackening patinas sealed under hand-buffed microcrystalline hardwax.",
      "Precision CNC waterjet and TIG brazing techniques allowing seamless transitions between iron, bronze, and stone.",
      "Integrated magnetic perimeter rebates, acoustic laminated glass, and German concealed hydraulic pivot closers.",
    ],
    deliverablesChecklist: [
      "Hand-finished physical patina sample coupons (Gunmetal, Slate, Antique Iron, Burnished Bronze)",
      "Full-scale profile section mockups for client sign-off",
      "Acoustic gasket and handle hardware integration templates",
      "Care instructions for interior natural wax and patina preservation",
    ],
    typicalCommissions: [
      "Slender interior glazed steel room dividers and Crittall-style French doors",
      "Sculptural metal fireplace surrounds, floating mantels, and hearth grates",
      "Concealed steel substructures supporting heavy cantilevered stone vanities",
      "Bespoke wine cellar glazed enclosures and architectural display shelving",
    ],
    quoteServiceCategory: "architectural_ironwork",
  },
  {
    id: "commercial",
    slug: "commercial",
    title: "Commercial & Institutional Clients",
    roleBadge: "Commercial Development",
    eyebrow: "High-Traffic Durability & Public Safety",
    shortSummary:
      "Heavy-duty entrance gates, security window screens, architectural balustrades, and custom civic thresholds.",
    heroHeadline:
      "Robust Ironwork Engineered for High Traffic, Security, and Civic Dignity",
    painPoints: [
      "Off-the-shelf commercial hardware wearing out under continuous daily foot and vehicle traffic.",
      "Security barriers that give corporate offices an intimidating, correctional appearance.",
      "Difficulty integrating electronic access controls, card readers, and magnetic shear locks.",
      "Corrosion from urban de-icing salts and airborne pollutants deteriorating steel structures.",
    ],
    atelierSolutions: [
      "Heavy-duty grease-zerk barrel pivot hinges and structural box framing engineered for million-cycle service life.",
      "Refined geometric fretwork providing insurance-certified reveal defense without harsh commercial aesthetics.",
      "Pre-machined wire raceways, concealed magnetic drop-bolt housings, and card-reader mounting pedestals.",
      "Duplex galvanized anti-corrosion barrier with high-durability electrostatic powder coating (Qualicoat Class 2).",
    ],
    deliverablesChecklist: [
      "Full life-cycle durability and maintenance schedules",
      "Electrical coordination drawings for low-voltage access control contractors",
      "Impact and line load structural engineering calculations",
      "Manufacturer finish warranty documentation",
      "Scheduled preventive maintenance guidelines",
    ],
    typicalCommissions: [
      "Commercial showroom window security grilles and entrance porticos",
      "Automated corporate perimeter gates with integrated pedestrian turnstiles",
      "High-traffic public balustrades engineered for $1.5\\,\\text{kN/m}$ crowd loading",
      "Monumental weathering Corten steel courtyard portals and signage structures",
    ],
    quoteServiceCategory: "custom_fabrication",
  },
];

/**
 * Lightweight customer persona export consumed by homepage `CustomerTypes.tsx`
 */
export const CUSTOMER_SEGMENTS: CustomerSegment[] = DETAILED_CUSTOMER_SEGMENTS.map((seg) => ({
  id: seg.id,
  title: seg.title,
  badge: seg.roleBadge,
  summary: seg.shortSummary,
  whatWeOffer: seg.atelierSolutions,
}));