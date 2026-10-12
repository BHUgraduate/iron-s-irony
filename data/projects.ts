export type ProjectCategory =
| "residential"
| "commercial"
| "architectural"
| "decorative"
| "gates"
| "railings"
| "staircases"
| "custom";
export interface ProjectMetric {
label: string;
value: string;
}
export interface ProjectStudy {
id: string;
slug: string;
title: string;
subtitle: string;
category: ProjectCategory;
categoryLabel: string;
clientType: "Private Estate" | "Architectural Practice" | "Boutique Development" | "Commercial Atelier" | "Civic Institution";
locationPlaceholder: string;
completionYearPlaceholder: string;
heroImage: string;
galleryImages: string[];
summary: string;
requirement: string;
architecturalChallenge: string;
engineeringSolution: string;
fabricationMethod: string;
materialsUsed: string[];
finishApplied: string;
installationScope: string;
metrics: ProjectMetric[];
isSampleData: boolean;
}
export const PROJECT_CATEGORIES: { value: string; label: string }[] = [
{ value: "all", label: "All Commissions" },
{ value: "staircases", label: "Staircases & Balustrades" },
{ value: "gates", label: "Gates & Boundary" },
{ value: "architectural", label: "Architectural & Interior" },
{ value: "custom", label: "Bespoke Structural Solvers" },
];
export const FEATURED_PROJECTS: ProjectStudy[] = [
{
id: "project-monolithic-staircase",
slug: "monolithic-spine-staircase",
title: "Monolithic Spine Balustrade & Floating Staircase",
subtitle: "Continuous Hand-Profiled Steel Balustrade with Sub-Screed Footing",
category: "staircases",
categoryLabel: "Architectural Staircase",
clientType: "Architectural Practice",
locationPlaceholder: "[Private Residence — Location on File]",
completionYearPlaceholder: "[Recent Project]",
heroImage:
"https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
galleryImages: [
"https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
],
summary:
"A dual-flight central spine staircase featuring knife-edge steel pickets and continuous hand-profiled steel balustrades with invisible floor-mount fixings.",
requirement:
"The client and project architect requested an uninterrupted geometric balustrade across two vertical flights (28 steps total) that appears to emerge seamlessly from the polished concrete flooring without visible base plates, screws, or surface brackets.",
architecturalChallenge:
"Eliminating floor mounting flanges required absorbing substantial rotational lateral line loads (￼) directly into the floor slab reinforcement. Furthermore, the 8-meter continuous top rail had to be transported in segments and joined on site without visible weld seams or heat discoloration.",
engineeringSolution:
"Our atelier engineered a custom heavy structural steel U-trough (￼ cold-formed plate) cast sub-screed into the concrete floor before pour. Balustrade panels were lowered into this trough, leveled via high-tensile set screws, and grouted with structural expanding non-shrink resin. For the handrail, internal machined alignment spigots were inserted, perimeter-TIG welded, and filed flat on site.",
fabricationMethod:
"Precision laser-cut ￼ mild steel plate stringers, continuous flush-ground fillet welds, and hand-radiused top rail transitions dressed by abrasive grain blending.",
materialsUsed: [
"Solid Carbon Steel Flat Bar (￼ pickets)",
"Continuous Formed Top Rail (￼ rectangular section)",
"High-Tensile Sub-Screed Structural Embedment Plates",
"Structural Expanding Non-Shrink Grout",
],
finishApplied:
"Hand-applied chemical black oxide patina sealed with two coats of microcrystalline hardwax, buffed to a low-reflection architectural satin luster.",
installationScope:
"Complete coordination with general contractor: pre-pour trough alignment, digital laser leveling, post-pour panel installation, on-site weld dressing, and hand-burnished finishing.",
metrics: [
{ label: "Vertical Rise", value: "2 Flights (￼ steps)" },
{ label: "Balustrade Span", value: "￼ continuous run" },
{ label: "Lateral Load Rating", value: "￼ tested" },
{ label: "Visible Fasteners", value: "Zero (￼ concealed)" },
],
isSampleData: true,
},
{
id: "project-geometric-courtyard-gate",
slug: "geometric-courtyard-entrance-gate",
title: "Geometric Dual-Leaf Automated Courtyard Gate",
subtitle: "Rhythmic Vertical Infill Gate with Concealed Underground Hydraulic Drives",
category: "gates",
categoryLabel: "Boundary & Access",
clientType: "Private Estate",
locationPlaceholder: "[Private Estate — Location on File]",
completionYearPlaceholder: "[Recent Project]",
heroImage:
"https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop",
galleryImages: [
"https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
],
summary:
"A 3.6-meter automated dual-leaf gate combining heavy structural box perimeter sections with rhythmically spaced solid square steel pickets.",
requirement:
"Fabricate an imposing boundary entrance for a residential walled courtyard that provides visual screening and robust vehicle security without presenting a solid, wind-catching wall that would strain automated motors during high winds.",
architecturalChallenge:
"High wind shear across a ￼ aperture required calculated aerodynamic permeability while maintaining privacy from the street. Existing weathered brick entrance piers lacked the structural capacity to support hanging loads exceeding ￼ per leaf.",
engineeringSolution:
"We engineered independent ￼ structural steel hanging posts anchored deep into subterranean concrete mass pads, completely isolating the historic masonry piers from mechanical fatigue. The infill utilizes varying picket intervals—dense near eye-level and open at top and bottom—reducing wind load coefficients by ￼.",
fabricationMethod:
"Mitered and fully penetrated TIG-welded structural hollow perimeter, pierced cross-rails allowing through-tenon picket passage, and pre-machined underground operator drive shoes.",
materialsUsed: [
"Solid ￼ Square Mild Carbon Steel Pickets",
"￼ Structural Box Perimeter Framing",
"Heavy-Duty Stainless Steel Grease-Zerk Pivot Bearings",
"Grade 8.8 High-Tensile Foundation Anchor Bolts",
],
finishApplied:
"Duplex anti-corrosion barrier: Hot-dip galvanized to EN ISO 1461 (￼ zinc immersion), sweep-blasted, zinc-rich epoxy primed, and topcoated with dead-matte graphite architectural polyurethane.",
installationScope:
"Excavation and foundation steel casting, mechanical hanging, laser hinge alignment, underground motor coupling, and electronic intercom release integration.",
metrics: [
{ label: "Total Span", value: "￼ overall width" },
{ label: "Gate Height", value: "￼ leaf elevation" },
{ label: "Mass Weight", value: "Approx. ￼ per leaf" },
{ label: "Corrosion Spec", value: "EN ISO 1461 Duplex Galvanized" },
],
isSampleData: true,
},
{
id: "project-patinated-glass-partition",
slug: "patinated-steel-glass-screens",
title: "Minimalist Glazed Steel Interior Partition Suite",
subtitle: "Ultra-Narrow Sightline Steel Doors with Concealed Acoustic Seals",
category: "architectural",
categoryLabel: "Architectural Interior",
clientType: "Boutique Development",
locationPlaceholder: "[Commercial & Private Residence — Location on File]",
completionYearPlaceholder: "[Recent Project]",
heroImage:
"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
galleryImages: [
"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
],
summary:
"Ultra-slender steel French door suite and flanking glazed screens separating a private library from an open-concept living gallery.",
requirement:
"Deliver maximum daylight transfer and sound isolation between living quarters while eliminating the bulky, extruded appearance of conventional commercial aluminum framing.",
architecturalChallenge:
"Floor-to-ceiling heights of ￼ with minimal deflection allowance demanded exceptional section modulus from an ultra-narrow visible profile (￼). Acoustic targets required perimeter sealing without compromising the razor-sharp shadow lines.",
engineeringSolution:
"We utilized solid hot-rolled steel T-sections custom milled with recessed gasket channels. EPDM magnetic perimeter seals were integrated directly into the steel stops, delivering an acoustic drop rating of ￼. Concealed heavy-duty barrel hinges were machined flush into the jamb sections.",
fabricationMethod:
"Precision cold mitering, micro-TIG welding dressed by hand burnishing, and mechanical steel glazing beads secured with hand-turned blackened brass machine screws.",
materialsUsed: [
"Solid Hot-Rolled Steel T-Sections (￼)",
"Acoustic Laminated Safety Glass (￼ Sound-Guard)",
"Custom Turned Silicon Bronze Lever Furniture",
"Concealed German Hydraulic Overhead Overhead Closers",
],
finishApplied:
"Multi-stage chemical cold blackening patina producing deep variegated charcoal tones, followed by an industrial-grade dead-matte polyurethane clear coat.",
installationScope:
"Laser survey of masonry reveals, pre-installation steel subframe shimming, glazing installation with mechanical beads, and door latch tension balancing.",
metrics: [
{ label: "Overall Height", value: "￼ structural aperture" },
{ label: "Visible Sightline", value: "￼ visible metal width" },
{ label: "Acoustic Rating", value: "￼ Sound Transmission Loss" },
{ label: "Glazing Spec", value: "￼ Laminated Acoustic Glass" },
],
isSampleData: true,
},
{
id: "project-forged-balcony-balustrades",
slug: "forged-iron-cantilever-balcony",
title: "Hand-Forged Balustrades & Cantilever Balcony",
subtitle: "Tapered Anvil-Drawn Spindles with Traditional Hot-Pierced Joinery",
category: "decorative",
categoryLabel: "Decorative & Building",
clientType: "Private Estate",
locationPlaceholder: "[Heritage Residence — Location on File]",
completionYearPlaceholder: "[Recent Project]",
heroImage:
"https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
galleryImages: [
"https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop",
],
summary:
"Restrained decorative iron balustrade crafted for a stone cantilevered terrace, utilizing tapered hand-drawn forged spindles and riveted joinery.",
requirement:
"Recreate the classical elegance of historical blacksmith balustrading while adhering strictly to contemporary residential safety codes, including the ￼ sphere test and elevated impact resistance.",
architecturalChallenge:
"Traditional historical ironwork often features loose spacings that fail modern building safety codes. Squeezing pickets too close together risks visually cluttering the elevation and creating excessive top-heavy mass.",
engineeringSolution:
"Our smiths hand-forged spindles with delicate center tapers that expand into flared, hot-pierced collars at connecting horizontal rails. This achieved strict compliance with the ￼ code while preserving a light, musical visual cadence. Structural base stanchions were core-drilled ￼ into the masonry slab and anchored with structural epoxy.",
fabricationMethod:
"Coal and gas forge heating (￼), anvil horn scroll formation, hot tenon riveting, and continuous weld seals on structural underside interfaces.",
materialsUsed: [
"Low-Carbon Forging Bar (￼ solid square stock)",
"Milled Steel Handrail Cap (￼ hand-radiused crown)",
"High-Tensile Threaded Stainless Base Studs",
"Pure Boiled Linseed & Graphite Wax Barrier",
],
finishApplied:
"Zinc metal spray thermal coating followed by a high-durability epoxy primer and custom-pigmented aged iron graphite topcoat.",
installationScope:
"Diamond core drilling into natural ashlar stone, chemical capsule anchoring, lead caulking around base escutcheons, and final on-site touchup waxing.",
metrics: [
{ label: "Balcony Perimeter", value: "￼ linear span" },
{ label: "Hand-Forged Pickets", value: "￼ individual smith-formed pieces" },
{ label: "Building Code", value: "Compliant with ￼ Sphere Test" },
{ label: "Embedment Depth", value: "￼ core drilled into ashlar" },
],
isSampleData: true,
},
{
id: "project-concealed-reveal-security-grilles",
slug: "concealed-reveal-security-grilles",
title: "Flush-Reveal Geometric Security Grilles",
subtitle: "High-Tensile Reveal Protection with Minimalist Shadow Lines",
category: "architectural",
categoryLabel: "Protective Architecture",
clientType: "Commercial Atelier",
locationPlaceholder: "[Design Atelier — Location on File]",
completionYearPlaceholder: "[Recent Project]",
heroImage:
"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
galleryImages: [
"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
],
summary:
"A suite of eight ground-floor window security screens featuring deep-set geometric steel fretwork anchored completely inside masonry reveals.",
requirement:
"Provide insurance-certified physical defense for a high-value showroom without giving the facade an aggressive commercial or correctional aesthetic.",
architecturalChallenge:
"Historic lime-rendered brickwork reveals were out of square by up to ￼ across a single aperture, ruling out standardized pre-welded rectangular frames.",
engineeringSolution:
"Each window aperture was mapped via laser digital scanning. We fabricated perimeter steel frames with adjustable internal leveling pockets and floating shear-bolt mounts that absorb masonry deviations while keeping the interior steel grid plumb and true to ￼.",
fabricationMethod:
"CNC waterjet cut interlocking lattice panels dressed with hand-beveled edges and full-penetration perimeter perimeter fillet welds.",
materialsUsed: [
"Solid Carbon Steel Plate (￼ thickness)",
"High-Tensile Anti-Tamper Shear Anchors",
"Neoprene Thermal Break Isolation Shims",
],
finishApplied:
"Micro-bead blasted, zinc rich epoxy primer, and electrostatic dead-matte slate powder coating (Class 2 Qualicoat standard).",
installationScope:
"Laser verified setting, deep masonry masonry anchor torquing to snap shear heads, and structural polyurethane reveal sealing.",
metrics: [
{ label: "Apertures Completed", value: "￼ bespoke window reveals" },
{ label: "Tolerance Achieved", value: "￼ across out-of-square brick" },
{ label: "Anchor Security", value: "Shear-head breakaway fasteners" },
{ label: "Finish Standard", value: "Qualicoat Class 2 Architectural" },
],
isSampleData: true,
},
{
id: "project-corten-courtyard-portal",
slug: "corten-architectural-courtyard-portal",
title: "Corten Weathering Steel Architectural Courtyard Portal",
subtitle: "Monolithic Weathering Steel Framing with Pivot Gate Access",
category: "custom",
categoryLabel: "Custom Fabrication",
clientType: "Civic Institution",
locationPlaceholder: "[Sculptural Courtyard — Location on File]",
completionYearPlaceholder: "[Recent Project]",
heroImage:
"https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop",
galleryImages: [
"https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
],
summary:
"A monumental 4-meter structural weathering steel portal and integrated pivot gate defining an exterior courtyard threshold.",
requirement:
"Create a raw, weathering metal threshold that develops a self-protecting patina over time while ensuring structural stability and non-staining drainage paths.",
architecturalChallenge:
"Weathering steel naturally produces iron-oxide runoff during initial stabilization cycles, which can stain adjacent white limestone walkways. The structure also had to carry heavy cantilevered loads over an open 4-meter span.",
engineeringSolution:
"We engineered internal stainless steel drip trays and concealed drain weep-holes within the hollow box structure to channel early oxidation water into subsurface drainage. The portal frame was fabricated from heavy ￼ Corten plate stiffened with internal diagonal truss diaphragms.",
fabricationMethod:
"Submerged arc and high-amperage MIG welding using matching copper-bearing Corten filler wire to ensure identical weathering color at all weld seams.",
materialsUsed: [
"ASTM A588 Grade A Weathering Steel Plate (￼ & ￼)",
"Heavy Stainless Drainage Gutters (Grade 316)",
"Hydraulic Stainless Steel Sealed Pivot Closers",
],
finishApplied:
"Chemical accelerated weathering pre-activation, followed by breathable silicone barrier treatment around ground interface zones.",
installationScope:
"Crane rigging, foundation anchor stud alignment, concealed grout injection, and post-assembly chemical stabilization rinse.",
metrics: [
{ label: "Portal Span", value: "￼ overall width" },
{ label: "Portal Height", value: "￼ structural clearance" },
{ label: "Steel Specification", value: "ASTM A588 Weathering Steel" },
{ label: "Structural Mass", value: "Approx. ￼ total framework" },
],
isSampleData: true,
},
];