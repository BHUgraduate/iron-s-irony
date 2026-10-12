export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "fabrication" | "finishes" | "installation";
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-custom-quotes",
    question: "How do you calculate quotations for custom ironwork?",
    answer:
      "Every quote is calculated based on exact project variables: linear or square meterage, steel gauge and profile, degree of hand-forging or CNC cutting required, choice of corrosion-resistant finish (e.g., hot-dip galvanizing vs. interior patina), and whether site installation is required. We provide transparent, itemized proposals following an initial blueprint or dimension review.",
    category: "general",
  },
  {
    id: "faq-corrosion-defense",
    question: "How do you protect exterior ironwork against rust and corrosion?",
    answer:
      "For outdoor applications, our gold standard is a duplex protective system: the fabricated piece is hot-dip galvanized by submerging it in molten zinc ($450^\\circ\\text{C}$), followed by chemical etching, an epoxy zinc-rich primer, and an architectural-grade polyurethane or electrostatic powder topcoat. This ensures decades of protection against weather and moisture.",
    category: "finishes",
  },
  {
    id: "faq-shop-vs-custom",
    question: "What is the difference between your Shop catalog items and Custom Fabrication?",
    answer:
      "Our Shop showcases pre-engineered models (such as standardized gate frameworks, modular balustrade panels, and architectural grilles) with proven proportions that can be ordered directly or sized to fit your opening. Custom Fabrication involves starting from zero: drafting custom engineering solutions for unusual architectural dimensions, historic replications, or unique designer blueprints.",
    category: "fabrication",
  },
  {
    id: "faq-working-with-architects",
    question: "Do you collaborate with architects and contractors directly?",
    answer:
      "Yes. A significant portion of our work involves direct collaboration with architectural practices, interior designers, and general contractors. We review CAD drawings, offer constructability feedback, recommend optimal metal sections, provide finish samples, and ensure fabricated assemblies comply with relevant building safety codes.",
    category: "general",
  },
  {
    id: "faq-lead-times",
    question: "What are your standard fabrication lead times?",
    answer:
      "Fabrication timelines typically range from 3 to 6 weeks following engineering drawing sign-off and material procurement. Complex decorative forging or large-scale architectural commissions with multi-coat finishes may require additional time. Exact timelines are committed to upon quotation acceptance.",
    category: "fabrication",
  },
  {
    id: "faq-delivery-installation",
    question: "Do you handle site measurement and physical installation?",
    answer:
      "Depending on the project scope and location, our workshop provides direct site survey and professional installation services. For commissions outside our direct installation radius, we package and ship completed ironwork with detailed installation brackets, mounting hardware, and structural guidelines for your local contractor.",
    category: "installation",
  },
];