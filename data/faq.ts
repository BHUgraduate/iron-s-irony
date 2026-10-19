export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

/** Answers are limited to what the business has confirmed. Do not add prices, timelines or guarantees until the owner supplies them. */
export const FAQ_DATA: FAQItem[] = [
  {
    id: "what",
    question: "What do you make?",
    answer:
      "Ironwork for buildings: gates, railings, balconies, staircases, grills, architectural ironwork and custom fabrication, for homes, commercial premises and architectural projects.",
  },
  {
    id: "custom",
    question: "Can you make something to my own design or reference?",
    answer:
      "Yes. Custom work is central to what we do. Bring a photograph, a sketch, a drawing, or just the measured opening, and we will work out how to make something equivalent for your space.",
  },
  {
    id: "photos",
    question: "Can I send photos?",
    answer:
      "Please do. Photos of the space and of anything you like are the most useful thing you can share. The quickest route is WhatsApp, and you can describe the project through the Start a Project form first.",
  },
  {
    id: "estimate",
    question: "What do you need to give me an estimate?",
    answer:
      "What you want to create, what kind of space it is for, approximate dimensions, where the site is, and a photograph if you have one. Rough information is enough to start the conversation.",
  },
  {
    id: "price",
    question: "How much will it cost?",
    answer:
      "Every piece is made for a particular site, so we do not publish prices. Tell us what you have in mind and we will discuss it with you.",
  },
  {
    id: "time",
    question: "How long will it take?",
    answer: "It depends on the piece and the site. We will talk about timing once we understand the project.",
  },
  {
    id: "install",
    question: "Do you install as well as make?",
    answer:
      "Installation is part of the process from design to fixing. Tell us where the site is and what is involved, and we will confirm the arrangements for your project.",
  },
  {
    id: "architects",
    question: "Do you work with architects and designers?",
    answer:
      "Yes. If you have drawings, send them with your enquiry. If you only have a concept, we can develop the design together.",
  },
];
