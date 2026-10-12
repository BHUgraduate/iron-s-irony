export type ProductAvailability = "made_to_order" | "ready_to_ship" | "custom_dimensions_only";
export interface ProductSpecification {
material: string;
standardDimensions: string;
weightApproximate: string;
finishOptions: string[];
interiorExterior: "Interior" | "Exterior" | "Both";
customizationAvailable: boolean;
installationOffered: boolean;
anchoringSubstrate?: string;
}
export interface ProductItem {
id: string;
slug: string;
name: string;
category: "gates" | "grills" | "railings" | "hardware" | "architectural";
categoryLabel: string;
eyebrow: string;
shortDescription: string;
fullDescription: string;
availability: ProductAvailability;
priceDisplay: string;
isSampleData: boolean;
featuredImage: string;
galleryImages: string[];
specifications: ProductSpecification;
leadTimeWeeks: string;
customizationDetails: string[];
features: string[];
}
export const CATEGORY_LABELS: Record<ProductItem["category"], string> = {
gates: "Entrance & Boundary Gates",
grills: "Protective Window Grills",
railings: "Balustrades & Railings",
hardware: "Architectural Hardware",
architectural: "Interior & Spatial Metalwork",
};
export const AVAILABILITY_LABELS: Record<ProductAvailability, { label: string; badge: string; desc: string }> = {
made_to_order: {
label: "Made to Order",
badge: "Made to Order",
desc: "Fabricated individually upon order confirmation with dimensions customized to your structural reveals.",
},
ready_to_ship: {
label: "Ready to Ship",
badge: "Atelier Stock",
desc: "Pre-fabricated standard components held in workshop inventory, ready for immediate dispatch.",
},
custom_dimensions_only: {
label: "Custom Dimensions Only",
badge: "100% Bespoke Sizing",
desc: "Engineered specifically to client-provided site measurements and structural anchorage drawings.",
},
};
export const FEATURED_PRODUCTS: ProductItem[] = [
{
id: "prod-pedestrian-gate-01",
slug: "forged-courtyard-pedestrian-gate",
name: "Architectural Pedestrian Gate — Model 01",
category: "gates",
categoryLabel: "Entrance Gate",
eyebrow: "Boundary & Courtyard Access",
shortDescription:
"Heavy-duty solid carbon steel pedestrian gate engineered for residential boundary walls, private courtyards, and garden thresholds.",
fullDescription:
"Constructed from ￼ structural perimeter box sections with ￼ solid square mild carbon steel infill pickets. Features integrated heavy-duty drop-bolt mounts, adjustable anti-lift hinge eyes, and pre-machined mortises prepared for Euro-cylinder mechanical deadlocks or electronic magnetic releases.",
availability: "made_to_order",
priceDisplay: "Quotation based on site opening dimensions",
isSampleData: true,
featuredImage:
"https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop",
galleryImages: [
"https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
],
specifications: {
material: "Solid Mild Carbon Steel & Structural Box Framing",
standardDimensions: "Standard ￼ (or custom sized)",
weightApproximate: "Approx. ￼ (Standard opening dimensions)",
finishOptions: [
"Duplex Hot-Dip Galvanized + Matte Black Architectural Powder Coat",
"Zinc-Rich Epoxy Primer + Micaceous Iron Oxide (MIO) Charcoal",
"Raw Steel with Thermal Black Chemical Patina & Exterior Polyurethane",
],
interiorExterior: "Exterior",
customizationAvailable: true,
installationOffered: true,
anchoringSubstrate: "Masonry brick reveals, reinforced concrete piers, or matching steel hanging posts",
},
leadTimeWeeks: "3 – 5 weeks from dimension sign-off",
customizationDetails: [
"Width adjusted from ￼ up to ￼ without structural surcharge",
"Optional dog-leg or cranked hinges for out-of-square wall reveals",
"Concealed electrical conduit channel for automated intercom buzzer releases",
"Choice of flush square pickets or forged spearhead finials",
],
features: [
"Heavy ￼ perimeter frame prevents thermal warping over seasonal temperature swings",
"Internal anti-sag diagonal brace integrated on spans exceeding ￼",
"Adjustable M20 stainless steel grease-nipple barrel hinges included",
"Pre-drilled stainless steel strike plate pre-installed",
],
},
{
id: "prod-slender-balustrade-04",
slug: "modular-slender-balustrade-module",
name: "Slender-Bar Balustrade Panel — Model 04",
category: "railings",
categoryLabel: "Balustrade System",
eyebrow: "Continuous Architectural Guarding",
shortDescription:
"Pre-engineered structural balustrade modules featuring knife-edge vertical steel pickets and concealed base shoe fixings.",
fullDescription:
"Engineered to streamline perimeter railings for residential terraces, interior lightwells, and mezzanine galleries. Fabricated in ￼ and ￼ manufactured modules with interlocking concealed male-to-female spigot connections for continuous, gap-free lateral alignment compliant with strict building fall-protection codes.",
availability: "made_to_order",
priceDisplay: "Quotation calculated per linear meter",
isSampleData: true,
featuredImage:
"https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
galleryImages: [
"https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
],
specifications: {
material: "Precision Solid Flat Bar (￼) & Cold-Formed Top Rail",
standardDimensions: "Modules ￼",
weightApproximate: "Approx. ￼ per linear meter",
finishOptions: [
"Architectural Dead-Matte Black Fine Texture Powder Coat",
"Hand-Burnished Black Oxide with Hardwax Seal (Interior)",
"Duplex Hot-Dip Galvanized + Polyurethane Slate Grey (Exterior)",
],
interiorExterior: "Both",
customizationAvailable: true,
installationOffered: true,
anchoringSubstrate: "Concrete slab edge, steel mezzanine channel, or timber joist headers via high-tensile fasteners",
},
leadTimeWeeks: "4 – 6 weeks from structural layout confirmation",
customizationDetails: [
"Top rail profile options: Flat knife-edge, hand-radiused round, or slotted for hardwood cap",
"Sub-screed base channel mounts for completely rimless concealed emergence",
"Corner modules fabricated to custom non-￼ radial angles",
],
features: [
"Certified to withstand minimum ￼ to ￼ lateral line loads",
"Picket spacing strictly limited to maximum ￼ (exceeds ￼ sphere test code)",
"Zero exposed weld flash; joints dressed flush by hand in our atelier",
],
},
{
id: "prod-geometric-window-grille-07",
slug: "forged-geometric-window-grille",
name: "Architectural Security Window Grille — Model 07",
category: "grills",
categoryLabel: "Protective Grille",
eyebrow: "Perimeter Reveal Defense",
shortDescription:
"Subtle geometric security screen providing high-level perimeter protection without commercial industrial aesthetics.",
fullDescription:
"Interlocking solid mild steel carbon bars with forged lap joints that seat deeply into masonry window reveals. Engineered to deter forced entry while casting refined geometric shadow patterns into interior living spaces.",
availability: "custom_dimensions_only",
priceDisplay: "Quotation formulated on reveal dimensions",
isSampleData: true,
featuredImage:
"https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
galleryImages: [
"https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop",
],
specifications: {
material: "Solid ￼ Square Carbon Bar & Hand-Pierced Crossbars",
standardDimensions: "Manufactured strictly to client window reveal dimensions",
weightApproximate: "Dependent on window opening dimensions (typically ￼)",
finishOptions: [
"Hot-Dip Galvanized + High-Durability Satin Graphite",
"Aged Bronze Textured Architectural Finish",
"Traditional Linseed & Graphite Wax (For sheltered or interior reveals)",
],
interiorExterior: "Exterior",
customizationAvailable: true,
installationOffered: true,
anchoringSubstrate: "Masonry brick reveals, stone ashlar, or concrete lintels using anti-tamper shear bolts",
},
leadTimeWeeks: "3 – 4 weeks upon site dimension verification",
customizationDetails: [
"Available with side-reveal face mounts or deep-inset reveal jamb brackets",
"Removable keyed inspection panel option for emergency egress windows",
"Custom geometric density to match period or contemporary facade fenestration",
],
features: [
"Through-tenon interlocking joinery provides extreme pry-bar structural resistance",
"Shear-head security anchors break off flush upon final torquing",
"Thermally insulated mounting gaskets protect historical stonework against rust spalling",
],
},
{
id: "prod-pivot-steel-door-02",
slug: "architectural-pivot-entrance-door",
name: "Slender Glazed Steel Pivot Door — Model 02",
category: "architectural",
categoryLabel: "Feature Door Suite",
eyebrow: "Monumental Threshold Architecture",
shortDescription:
"Floor-to-ceiling slender steel pivot door engineered with heavy-duty German concealed bottom pivot hardware.",
fullDescription:
"Fabricated with precision hot-rolled solid steel T-profiles achieving an ultra-narrow ￼ visible perimeter frame. Supported by a concealed floor-mounted hydraulic pivot closer offering ￼ hold-open positions, adjustable closing speeds, and seamless integration with acoustic laminated glass panels.",
availability: "custom_dimensions_only",
priceDisplay: "Quotation formulated on structural aperture sizing",
isSampleData: true,
featuredImage:
"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
galleryImages: [
"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
],
specifications: {
material: "Precision Solid Hot-Rolled Steel Profiles & Milled Silicon Bronze Accents",
standardDimensions: "Tailored up to ￼",
weightApproximate: "Approx. ￼ (Door leaf excluding glass)",
finishOptions: [
"Thermal Black Chemical Patina with Dead-Matte Polyurethane Clear Coat",
"Fine Texture Architectural Powder Coat in Deep Bronze or Jet Black",
"Raw Brushed Steel with Microcrystalline Protective Wax",
],
interiorExterior: "Both",
customizationAvailable: true,
installationOffered: true,
anchoringSubstrate: "Reinforced concrete sub-floor and structural steel or timber lintel box header",
},
leadTimeWeeks: "6 – 8 weeks from engineering approval",
customizationDetails: [
"Configurable glazing bar grid layouts (Crittall-style multiple lights or monolithic single lite)",
"Custom integrated knurled steel or milled solid brass pull handles",
"Magnetic perimeter acoustic seals and concealed drop-down bottom door seals",
],
features: [
"Heavy-duty German hydraulic bottom pivot rated for up to ￼ leaves",
"Double silicone acoustic rebate stops eliminate metallic latch vibration",
"Precision bead-blasted and hand-burnished weld junctions",
],
},
{
id: "prod-floating-shelf-brackets-05",
slug: "heavy-duty-blackened-shelf-brackets",
name: "Architectural Heavy Cantilever Brackets — Pair",
category: "hardware",
categoryLabel: "Hardware System",
eyebrow: "Structural Millwork Armatures",
shortDescription:
"Solid ￼ carbon steel concealed floating shelf brackets engineered to carry substantial stone or solid timber loads.",
fullDescription:
"Crafted from laser-cut and hand-formed ￼ structural carbon steel plate with precision countersunk fixing apertures. Engineered to remain hidden inside routed shelf bodies or celebrated as an exposed industrial gusset support capable of supporting up to ￼ per bracket pair.",
availability: "ready_to_ship",
priceDisplay: "Quotation upon set quantity & projection",
isSampleData: true,
featuredImage:
"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
galleryImages: [
"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
],
specifications: {
material: "Structural Carbon Steel Plate (￼ thickness)",
standardDimensions: "Projections: ￼",
weightApproximate: "Approx. ￼ per pair",
finishOptions: [
"Blackened Thermal Oxide with Matte Hardwax Seal",
"Clear Satin Lacquer over Mill Scale",
"Raw Degreased Steel (Ready for client finishing)",
],
interiorExterior: "Interior",
customizationAvailable: true,
installationOffered: false,
anchoringSubstrate: "Solid brickwork, concrete block, or structural timber wall studs",
},
leadTimeWeeks: "In stock or 1 – 2 weeks for custom projections",
customizationDetails: [
"Custom projection depths up to ￼",
"Pre-drilled mounting patterns matched to specific timber stud layouts",
],
features: [
"Continuous fully penetrated fillet weld on backplate gusset",
"Heavy countersunk holes for flush M8 structural fasteners",
"Hand-dressed edges eliminate sharp burrs while maintaining crisp geometry",
],
},
{
id: "prod-forged-strap-hinge-06",
slug: "hand-forged-strap-hinge-suite",
name: "Hand-Forged Architectural Strap Hinge Suite",
category: "hardware",
categoryLabel: "Door Hardware",
eyebrow: "Traditional Smithing Hardware",
shortDescription:
"Authentic hand-forged mild steel pintle strap hinges with hand-drawn fish-tail terminals and hardened steel pivot pins.",
fullDescription:
"Forged under hammer on the anvil, this suite of heavy pintle strap hinges combines authentic craft joinery with modern carrying capacities. Engineered for heavy solid oak barn doors, courtyard gates, and heritage carriage doors.",
availability: "made_to_order",
priceDisplay: "Quotation formulated per pair & length",
isSampleData: true,
featuredImage:
"https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop",
galleryImages: [
"https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop",
],
specifications: {
material: "Hand-Forged Carbon Steel & Case-Hardened Bearing Pins",
standardDimensions: "Lengths: ￼",
weightApproximate: "Approx. ￼ per pair (￼ model)",
finishOptions: [
"Traditional Beeswax & Boiled Linseed Oil Dip (Interior / Sheltered)",
"Duplex Zinc Phosphate Base + Textured Graphite Polyurethane",
"Hand-Aged Verd Antique Dark Patina",
],
interiorExterior: "Both",
customizationAvailable: true,
installationOffered: false,
anchoringSubstrate: "Heavy hardwood timber jambs or masonry reveals using drive pintles",
},
leadTimeWeeks: "2 – 3 weeks from order",
customizationDetails: [
"Choice of Pintle-to-Bolt (through-wall plate) or Drive-Pintle (masonry wedge)",
"Terminal finial options: Fish-tail curl, spearhead, or minimalist blunt square",
],
features: [
"Seamless wrapped barrel forged without structural seam splitting",
"Case-hardened pivot pin guarantees zero sag under heavy gate weights",
"Supplied with hand-hammered pyramid-head fixing screws",
],
},
];