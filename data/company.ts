export interface NavigationLink {
  label: string;
  href: string;
  description?: string;
}

export const MAIN_NAVIGATION: NavigationLink[] = [
  { label: "Work", href: "/projects", description: "Selected commissions" },
  { label: "Services", href: "/services", description: "Building, architectural & decorative fabrication" },
  { label: "Process", href: "/#process", description: "From measuring to installation" },
  { label: "About", href: "/about", description: "How we think about iron" },
  { label: "Contact", href: "/contact", description: "Talk to the workshop" },
];

/** Still live, no longer top-level: surfaced in the menu overlay and footer. */
export const SECONDARY_NAVIGATION: NavigationLink[] = [
  { label: "Shop", href: "/shop", description: "Catalog items and made-to-order metalwork" },
  { label: "Who we work with", href: "/customers" },
  { label: "FAQ", href: "/faq" },
];

export const START_PROJECT_HREF = "/#start";

export const SERVICE_NAV_LINKS: NavigationLink[] = [
  { label: "Building Ironwork", href: "/services/building-ironwork" },
  { label: "Architectural Ironwork", href: "/services/architectural-ironwork" },
  { label: "Decorative Ironwork", href: "/services/decorative-ironwork" },
  { label: "Custom Fabrication", href: "/services/custom-fabrication" },
];

export const COMPANY_DETAILS = {
  name: "iron’s irony",
  legalName: "iron’s irony",
  tagline: "Building, Architectural & Decorative Ironwork",
  mission:
    "Engineering structural integrity and sculptural permanence through architectural metalwork and custom-forged iron.",
  developer: {
    name: "hycyon",
    role: "Digital Product Studio & Engineering",
  },
  contact: {
    phone: "+918853358005",
    email: "bhugraduate@gmail.com",
    whatsApp: "8853358005",
    address: {
      line1: "Hycyon Technologies, Near Rudra fitness",
      line2: "Paramhansh Ashram road, Chhittupur",
      city: "Varanasi",
      region: "Uttar Pradesh",
      postalCode: "221005",
      country: "India",
    },
    hours: [
      { days: "Monday – Friday", hours: "08:00 – 17:00" },
      { days: "Saturday", hours: "[By Appointment Only]" },
      { days: "Sunday", hours: "Closed" },
    ],
  },
  socials: {
    instagram: "[Instagram Account]",
    pinterest: "[Pinterest Account]",
    linkedin: "[LinkedIn Account]",
  },
};