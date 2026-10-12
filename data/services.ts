export interface ServiceApplication {
title: string;
description: string;
}
export interface DesignPossibility {
title: string;
description: string;
}
export interface ServiceProcessStep {
step: string;
title: string;
description: string;
}
export interface ServiceFAQ {
question: string;
answer: string;
}
export interface EngineeringSpec {
parameter: string;
standard: string;
}
export interface ServiceItem {
id: string;
slug: string;
title: string;
eyebrow: string;
shortDescription: string;
fullDescription: string;
category: "building" | "architectural" | "decorative" | "custom";
imageUrl: string;
galleryImages: string[];
capabilities: string[];
typicalApplications: ServiceApplication[];
designPossibilities: DesignPossibility[];
engineeringSpecs: EngineeringSpec[];
materials: string[];
finishes: string[];
leadTimeIndicator: string;
serviceProcess: ServiceProcessStep[];
serviceFaq: ServiceFAQ[];
}
export const SERVICES_DATA: ServiceItem[] = [
{
id: "building-ironwork",
slug: "building-ironwork",
title: "Building Ironwork",
eyebrow: "Structural & Perimeter Defense",
shortDescription:
"Durable, structural, and protective ironwork engineered for residential properties, commercial facilities, and civic infrastructure.",
fullDescription:
"Our building ironwork pairs rigorous structural engineering with enduring material presence. We fabricate boundary gates, security grilles, structural lintels, window protections, and balcony railings engineered to withstand environmental stresses while enhancing site permanence.",
category: "building",
imageUrl:
"https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop",
galleryImages: [
"https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
],
capabilities: [
"Automated dual-leaf and sliding perimeter driveway gates",
"Masonry-anchored security window grilles and basement lightwell grates",
"Structural steel lintels, flitch plates, and load-bearing bracket assemblies",
"Reinforced external staircases, access balustrades, and escape platforms",
"Commercial perimeter railings and utility enclosure screens",
"Heavy cantilever balcony sub-frames with integrated structural ties",
],
typicalApplications: [
{
title: "Residential Boundaries",
description:
"Heavy-gauge automated driveway gates and masonry-anchored boundary railings configured for maximum perimeter security.",
},
{
title: "Urban Developments",
description:
"Code-compliant protective window railings, refuse store enclosures, and external access balustrades.",
},
{
title: "Commercial Facilities",
description:
"Enclosed service access gates, mechanical equipment screening grilles, and structural vehicle barrier posts.",
},
{
title: "Multi-Unit Housing",
description:
"Uniform balustrades and entrance portico ironwork engineered to meet commercial deflection and barrier loading standards.",
},
],
designPossibilities: [
{
title: "Substrate-Specific Anchoring",
description:
"Engineered mounting plates designed for soft red brickwork, reinforced concrete pads, or structural timber posts using chemical anchor capsules.",
},
{
title: "Automated Hardware Mortising",
description:
"Integrated underground swing-operator mountings, concealed wiring conduits, and pre-machined mortises for commercial drop-bolts and magnetic latches.",
},
{
title: "Modular Panelized Spans",
description:
"Railings engineered in discrete manufactured modules with concealed male-to-female spigot connections for continuous, gap-free perimeter runs.",
},
],
engineeringSpecs: [
{ parameter: "Structural Infill", standard: "Solid ￼ to ￼ square mild carbon bar" },
{ parameter: "Perimeter Framing", standard: "Structural Box Section (￼ up to ￼)" },
{ parameter: "Welding Standard", standard: "Continuous structural MIG/TIG fillet welds, dressed smooth at exposed joints" },
{ parameter: "Tolerances", standard: "Fabricated to ￼ site dimensional alignment" },
],
materials: [
"Structural Carbon Steel (S275 / S355 grade equivalents)",
"Solid Forged Round & Square Mild Bar",
"Heavy Architectural Hollow Box Sections (SHS & RHS)",
"High-Tensile Threaded Anchor Hardware",
],
finishes: [
"Hot-Dip Galvanized to EN ISO 1461 (￼ zinc immersion)",
"High-Build Architectural Zinc-Rich Primer + Polyurethane Topcoat",
"Electrostatic Architectural Powder Coating (Qualicoat standard)",
"Textured Micaceous Iron Oxide (MIO) for industrial resistance",
],
leadTimeIndicator:
"Typically 3 to 6 weeks from site dimension sign-off and engineering drawing approval.",
serviceProcess: [
{
step: "01",
title: "Site Survey & Loading Evaluation",
description:
"We evaluate physical masonry condition, grade elevation shifts, mounting points, and structural wind resistance.",
},
{
step: "02",
title: "Fabrication Drafting & Sign-off",
description:
"Preparation of 2D dimensional shop drawings showing hinge points, clearances, and anchoring depths for client approval.",
},
{
step: "03",
title: "Heavy Metal Fabrication",
description:
"Cold cutting, structural box mitering, solid bar punching, and fully penetrated welding of primary frames in our atelier.",
},
{
step: "04",
title: "Duplex Anti-Corrosion Treatment",
description:
"Chemical cleaning, molten zinc hot-dip galvanizing, and topcoat application to guarantee permanent weather protection.",
},
{
step: "05",
title: "On-Site Rigging & Anchoring",
description:
"Accurate structural anchoring into masonry reveals or foundations, setting plumb, and testing operating clearances.",
},
],
serviceFaq: [
{
question: "How do you guarantee exterior gates will not rust over time?",
answer:
"We utilize a rigorous duplex corrosion prevention method: every steel component is hot-dip galvanized by full immersion in molten zinc at ￼, sealing both internal cavities and exterior faces. This is followed by sweep-blasting, epoxy primer, and an architectural-grade polyurethane topcoat, providing decades of maintenance-free service.",
},
{
question: "Can your building ironwork incorporate electronic intercoms and automated gate motors?",
answer:
"Yes. We collaborate with access-control providers and electricians to fabricate pre-machined wire channels, welded motor-bracket mounting plates, and magnetic shear lock housings prior to finishing, eliminating post-installation drilling.",
},
{
question: "Do your window grilles and balcony railings meet building safety codes?",
answer:
"All our building ironwork is designed with code compliance in mind, including the standard ￼ sphere test limitation between pickets and prescribed lateral line load capabilities for fall-protection balustrades.",
},
],
},
{
id: "architectural-ironwork",
slug: "architectural-ironwork",
title: "Architectural Ironwork",
eyebrow: "Spatial Definition & Staircases",
shortDescription:
"High-specification architectural elements, statement staircases, hand-shaped balustrades, and interior metal partitions.",
fullDescription:
"Architectural ironwork requires an elevated dialogue between structural rigor and spatial elegance. Working in close collaboration with architectural practices and interior designers, we fabricate feature helical and straight staircases, slender-profile glazed metal partitions, and bespoke balustrade assemblies with seamless mechanical fastenings.",
category: "architectural",
imageUrl:
"https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
galleryImages: [
"https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
],
capabilities: [
"Custom feature staircases (floating cantilever, central spine, and stringer-mounted)",
"Continuous hand-profiled steel balustrades with invisible transition joints",
"Ultra-slender glazed steel doors, French suites, and Crittall-style room screens",
"Architectural entrance canopies, cantilevered porticos, and glass awnings",
"Mezzanine floors, structural metal ceilings, and exposed beam fascia trims",
"Integrated brass, bronze, and blackened iron transition details",
],
typicalApplications: [
{
title: "Architectural Residences",
description:
"Minimalist staircases with concealed base shoes recessed beneath timber treads and continuous architectural top rails.",
},
{
title: "Boutique Hospitality",
description:
"Glazed wine storage enclosures, architectural bar armatures, and sculptural room dividers separating dining zones.",
},
{
title: "Design Studios & Ateliers",
description:
"Exposed blackened steel framework paired with raw linen, polished concrete, and natural European oak finishes.",
},
{
title: "Heritage Expansions",
description:
"Modern steel-and-glass transitional links connecting classical masonry buildings with contemporary additions.",
},
],
designPossibilities: [
{
title: "Continuous Seamless Handrails",
description:
"Handrails site-welded with internal alignment dowels and planed flat, creating an uninterrupted run with zero visible break lines.",
},
{
title: "Ultra-Slim Glazing Sightlines",
description:
"Custom hot-rolled and cold-formed T-sections achieving slender ￼ to ￼ visible profile sightlines with acoustic glazing beads.",
},
{
title: "Concealed Floor Embedments",
description:
"Sub-screed structural troughs allowing glass or balustrade pickets to emerge directly from timber or concrete floors with no visible brackets.",
},
],
engineeringSpecs: [
{ parameter: "Balustrade Rigidity", standard: "Engineered to withstand minimum ￼ to ￼ lateral line loads" },
{ parameter: "Sightline Width", standard: "From ￼ solid hot-rolled steel profile sections" },
{ parameter: "Glazing Integration", standard: "Acoustic laminated safety glass with mechanical snap-in or screwed iron beads" },
{ parameter: "Joint Finishing", standard: "Mechanically polished flush welds with hand-dressed surface continuity" },
],
materials: [
"Precision Cold-Rolled Carbon Steel",
"Hot-Rolled Solid Mill-Scale T-Bar & Angle Profiles",
"Silicon Bronze & Milled Architectural Brass Accents",
"Heavy Laser-Cut Steel Stringer Plates (￼ to ￼ thickness)",
],
finishes: [
"Thermal Chemical Black Oxide with Matte Hardwax Oil Sealant",
"Hand-Patinated Blackened Iron with Microcrystalline Protective Wax",
"Dead-Matte Architectural Polyurethane Clear Coat over Mill Scale",
"Fine Satin Bead-Blasted Steel with Protective Acrylic Sealant",
],
leadTimeIndicator:
"Typically 5 to 8 weeks depending on engineering calculation reviews and staircase structural tolerances.",
serviceProcess: [
{
step: "01",
title: "Architectural Brief & Model Review",
description:
"We analyze architect CAD/BIM models, examine structural anchor points, and verify deflection limits.",
},
{
step: "02",
title: "Material & Finish Samples",
description:
"We supply custom physical patina mockups and steel profile samples for client presentation and sign-off.",
},
{
step: "03",
title: "Laser Digital Site Templating",
description:
"Laser scanning or physical jigs fabricated on-site to capture millimeter-exact floor and wall deviations.",
},
{
step: "04",
title: "Precision Atelier Assembly",
description:
"Dry-fitting full staircase runs and door assemblies in the workshop to confirm hinge clearances and handrail continuity.",
},
{
step: "05",
title: "Installation & Architectural Dressing",
description:
"White-glove site delivery, mechanical leveling, secure anchor torquing, and final wax or patina burnishing.",
},
],
serviceFaq: [
{
question: "Can you match an existing blackened steel finish specified by our interior designer?",
answer:
"Yes. We prepare physical steel patina coupons showcasing varied oxidation depths—ranging from smoky slate grey to deep jet black with subtle mill-scale warmth—for formal architectural sign-off.",
},
{
question: "How do you handle acoustic isolation with glazed steel partitions?",
answer:
"Our custom glazed steel partitions incorporate integrated EPDM compressible perimeter gaskets, magnetic threshold seals, and laminated acoustic glass packs, preventing room-to-room sound transmission.",
},
{
question: "Are your architectural staircases engineered for structural certification?",
answer:
"We supply complete structural steel fabrication details and material certifications ready for review by your project’s consulting structural engineer.",
},
],
},
{
id: "decorative-ironwork",
slug: "decorative-ironwork",
title: "Decorative Ironwork",
eyebrow: "Ornamental Craft & Motif Detailing",
shortDescription:
"Hand-forged scrolls, bespoke geometric screens, artistic metal motifs, and ornamental entrance elements.",
fullDescription:
"Decorative ironwork brings sculptural warmth to metal craft. From traditional blacksmith joinery—including mortise-and-tenon connections and hot-forged collars—to contemporary laser-cut and hand-formed geometric patterns, our decorative pieces serve as enduring focal points for distinguished properties.",
category: "decorative",
imageUrl:
"https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
galleryImages: [
"https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
],
capabilities: [
"Hand-forged scrollwork entrance gates with custom spear and ribbon finials",
"Bespoke geometric courtyard screens, garden trellises, and privacy panels",
"Heritage iron restoration, pattern reproduction, and historical replication",
"Artisan-crafted garden follies, espalier frameworks, and iron rose arches",
"Handmade architectural light lanterns, torchères, and sconce brackets",
"Sculptural metal fireplace mantels, register grates, and canopy hoods",
],
typicalApplications: [
{
title: "Heritage Properties",
description:
"Restoration or faithful replication of Victorian, Edwardian, and Art Deco cast or wrought iron details.",
},
{
title: "Courtyards & Private Gardens",
description:
"Bespoke forged iron entrance arches, courtyard privacy screens, and ornamental espalier frameworks.",
},
{
title: "Focal Interior Elements",
description:
"Custom forged fireplace surrounds, ornamental wine cellar gates, and hand-textured decorative balusters.",
},
{
title: "Historic Civic Landmarks",
description:
"Preservation-compliant iron gates and ornamental window security screens honoring regional heritage.",
},
],
designPossibilities: [
{
title: "Hot-Forged Joinery Details",
description:
"Traditional blacksmith joinery including hot-wrapped collars, pierced tenons, and forged rivets celebrating authentic metalcraft.",
},
{
title: "Contemporary Geometric Patterns",
description:
"Intersecting multi-plane rectilinear and circular steel bars producing dramatic daylight and shadow interplay.",
},
{
title: "Sculptural Surface Texturing",
description:
"Hand-hammered bark, ball-peen peened, or distressed mill-scale faces that catch light with warm, organic movement.",
},
],
engineeringSpecs: [
{ parameter: "Joinery Integrity", standard: "Traditional hot-forged tenons or full-weld internal pin mechanical joins" },
{ parameter: "Ornamental Detail", standard: "Hand-tapered forged bar ends and custom-profiled scroll ribbons" },
{ parameter: "Restoration Fidelity", standard: "Pattern reproduction modeled from historic iron salvage or sketches" },
{ parameter: "Corrosion Guard", standard: "Multi-stage zinc barrier with hand-patinated exterior protective sealants" },
],
materials: [
"Traditional Low-Carbon Forging Steels",
"Pure Swedish Charcoal Iron (where historical replication requires)",
"Hand-Drawn Solid Round, Square, and Half-Round Bar",
"Silicon Bronze & Hand-Forged Brass Highlights",
],
finishes: [
"Traditional Pure Beeswax & Boiled Linseed Oil (Interior Preservation)",
"Hand-Burnished Graphite Wax over Chemically Darkened Steel",
"Multi-Stage Duplex Zinc Coating with Aged Bronze Highlighting",
"Antiqued Verd antique Patina on Bronze & Brass Filaments",
],
leadTimeIndicator:
"Handcrafting timelines depend on scroll counts and the complexity of hand-forged joinery; typically 4 to 8 weeks.",
serviceProcess: [
{
step: "01",
title: "Design Motif Exploration",
description:
"Reviewing architectural motifs, period references, or conceptual sketches to establish proportional harmony.",
},
{
step: "02",
title: "Full-Scale Anvil Cartoon Layout",
description:
"Drawing 1:1 scale chalk or CAD layouts on the workshop layout floor to verify scroll curves and clearances.",
},
{
step: "03",
title: "Hot-Forge Shaping & Forming",
description:
"Heating carbon steel in the forge to orange heat (￼ to ￼) and shaping scrolls over the anvil horn.",
},
{
step: "04",
title: "Collar & Tenon Assembly",
description:
"Interlocking forged elements using hot-wrapped steel collars, rivets, and dressed structural anchor joints.",
},
{
step: "05",
title: "Hand-Applied Patina & Finishing",
description:
"Layering traditional oils, waxes, or protective architectural primers to enhance the metal’s organic texture.",
},
],
serviceFaq: [
{
question: "Can you recreate a damaged section of century-old wrought iron?",
answer:
"Yes. We specialize in heritage reproduction, taking physical impressions or dimension rubbings of intact original ironwork to hand-forge precise matching scrolls, finials, and rail profiles.",
},
{
question: "How do traditional finishes like beeswax hold up outdoors?",
answer:
"Traditional beeswax and linseed oil are strictly recommended for interior dry conditions. For outdoor decorative ironwork, we utilize a modern duplex zinc primer system followed by hand-rubbed patinated topcoats that simulate historic beeswax luster with modern weather resistance.",
},
{
question: "Can decorative screens be used for residential privacy and code-compliant railings?",
answer:
"Yes. We adjust the internal geometry of decorative scrollwork or patterns to guarantee that no opening exceeds the required ￼ building safety threshold.",
},
],
},
{
id: "custom-fabrication",
slug: "custom-fabrication",
title: "Custom Metal Fabrication",
eyebrow: "Engineering Prototyping & Bespoke Solvers",
shortDescription:
"End-to-end bespoke metal fabrication tailored to unique spatial dimensions, complex engineering challenges, and prototype commissions.",
fullDescription:
"When standard metal catalogs fail to meet the vision of an architect or client, our custom fabrication service steps in. We analyze structural loads, provide digital fabrication drafts, test joint details, and manufacture one-off pieces with unyielding precision.",
category: "custom",
imageUrl:
"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
galleryImages: [
"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop",
],
capabilities: [
"High-precision TIG, MIG, and traditional forge-welded assemblies",
"Sheet metal shearing, CNC waterjet/laser coordination, and roll-forming",
"Three-dimensional compound curvature bending and compound steel plate shaping",
"Heavy load-bearing brackets, bespoke lintel saddles, and timber flitch plates",
"Architectural display armatures, metal table bases, and bespoke furniture framing",
"Site-specific problem solving for irregular, non-square masonry openings",
],
typicalApplications: [
{
title: "Bespoke Spatial Installations",
description:
"One-off sculptural metal installations, suspended ceilings, and cantilevered architectural canopies.",
},
{
title: "Architectural Millwork Substructures",
description:
"Concealed internal steel armatures supporting heavy cantilevered stone islands, reception desks, and floating credenzas.",
},
{
title: "Trade Subcontracting",
description:
"Custom fabricated structural steel members, brackets, and bracing delivered to contractor CAD models.",
},
{
title: "Retrofit & Modification",
description:
"Modifying existing building gates or heritage railings to accept modern concealed magnetic drop bolts and electronic strikes.",
},
],
designPossibilities: [
{
title: "Mixed Metal Joinery",
description:
"Seamless mechanical and brazed junctions connecting blackened carbon steel with natural bronze, brass, or copper elements.",
},
{
title: "Non-Orthogonal Geometric Framing",
description:
"Tapered, angled, or compound-curved framework accurately calculated to conform to complex existing masonry openings.",
},
{
title: "Concealed Structural Anchorage",
description:
"Internal bolting pockets and magnetic access plates that allow heavy structural fixings to remain completely hidden from view.",
},
],
engineeringSpecs: [
{ parameter: "Tolerances", standard: "Machined and fabricated to ￼ precision standards" },
{ parameter: "Weld Inspection", standard: "Architecturally exposed structural steel (AESS) visual quality standards" },
{ parameter: "Metal Compatibility", standard: "Dielectric isolation gaskets applied between dissimilar metals to prevent galvanic reaction" },
{ parameter: "Drafting Formats", standard: "Accepts 2D/3D DWG, DXF, STEP, RVT, and hand-dimensioned architectural sketches" },
],
materials: [
"Mild & High-Strength Carbon Steels",
"Corten Weathering Steel (ASTM A588)",
"Marine-Grade Stainless Steel (AISI 304 & 316)",
"Architectural Silicon Bronze, Brass & Copper Plate",
],
finishes: [
"Stabilized Corten Weathered Rust Oxidation",
"Electrostatic Powder Coating with Architectural UV Stabilization",
"Passivated, Bead-Blasted, or Hairline Satin Stainless Steel",
"Custom Multi-Stage Chemical Cold Patinas with Hardwax Seals",
],
leadTimeIndicator:
"Quoted on a project-by-project basis following CAD model or blueprint review.",
serviceProcess: [
{
step: "01",
title: "Technical Review & Feasibility Analysis",
description:
"We examine your initial sketches, vector CAD files, or physical job-site requirements to confirm engineering viability.",
},
{
step: "02",
title: "Constructability & Joinery Optimization",
description:
"We refine joint connections, specify metal sections, and plan shipping/rigging access to reduce on-site assembly time.",
},
{
step: "03",
title: "Prototype or Component Mockup",
description:
"Where necessary for trade approval, we fabricate physical joint coupons or full-scale mockups for mechanical testing.",
},
{
step: "04",
title: "Atelier Fabrication & Quality Inspection",
description:
"Cutting, forming, precision welding, and dressing to strict AESS architectural standards in our facility.",
},
{
step: "05",
title: "Custom Protective Crating & Handover",
description:
"Careful foam-and-timber crating with labeled mounting hardware ready for collection or site installation.",
},
],
serviceFaq: [
{
question: "Can I bring an initial hand sketch or concept without technical CAD files?",
answer:
"Yes. Our workshop frequently collaborates with homeowners and designers starting from hand sketches or photographs. We translate conceptual ideas into detailed fabrication blueprints with verified structural dimensions.",
},
{
question: "How do you handle galvanic corrosion when combining steel with bronze or brass?",
answer:
"We engineer dielectric barriers—such as neoprene isolation washers, Teflon shims, or passivation barriers—between chemically dissimilar metals to prevent galvanic interaction in humid or coastal environments.",
},
{
question: "Can you fabricate custom structural steel supports for other trades?",
answer:
"Yes. We fabricate custom flitch plates for framers, support brackets for stone fabricators, and cantilever frames for cabinetry contractors, built to exact site measurements.",
},
],
},
];