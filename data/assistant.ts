import { COMPANY_DETAILS } from "@/data/company";
import { WORKSHOP_PROCESS_STEPS } from "@/data/process";

/**
 * Project assistant knowledge. Rule-based: it answers only from the site's own content
 * and never quotes prices, timelines or claims the owner has not published.
 */

export interface Reply {
  text: string;
  chips?: string[];
  /** Offer the hand-off actions (project form and WhatsApp). */
  handoff?: boolean;
}

export const WELCOME: Reply = {
  text: "Hello. I can tell you what we make, how a project runs, and what we need from you to get started. What are you thinking of building?",
  chips: ["What do you make?", "Custom work from a photo", "What do you need for an estimate?", "How does it work?", "Start my brief"],
};

const STEPS = WORKSHOP_PROCESS_STEPS.map((s) => s.title).join(", then ");

interface Intent {
  id: string;
  keys: string[];
  reply: Reply;
}

export const INTENTS: Intent[] = [
  {
    id: "make",
    keys: ["make", "services", "offer", "what you do", "products", "gate", "railing", "balcon", "stair", "grill", "grille", "window", "fabricat"],
    reply: {
      text: "Gates, railings, balconies, staircases, grills, architectural ironwork and custom fabrication, for homes, buildings and commercial spaces. If it is made of iron and fixed to a building, ask us.",
      chips: ["Custom work from a photo", "What do you need for an estimate?", "Start my brief"],
    },
  },
  {
    id: "custom",
    keys: ["custom", "reference", "photo of", "picture of", "like this", "design", "bespoke", "sketch", "drawing", "copy", "similar"],
    reply: {
      text: "Yes. Custom work is a core part of what we do. Bring a photograph, a sketch, a CAD drawing or just the measured opening. We work out how to build something equivalent for your space and agree the design before fabrication starts.",
      chips: ["Can I send photos?", "What do you need for an estimate?", "Start my brief"],
    },
  },
  {
    id: "estimate",
    keys: ["estimate", "quote", "quotation", "price", "cost", "how much", "budget", "rate", "need from me", "information"],
    reply: {
      text: "We cannot responsibly name a price without seeing the job, because cost follows size, section, finish and installation. To estimate we need: what it is (gate, railing, and so on), the approximate width and height, where the site is, whether it is new or a replacement, and a photo of the space if you have one.",
      chips: ["Can I send photos?", "Start my brief", "How does it work?"],
    },
  },
  {
    id: "photos",
    keys: ["photo", "image", "picture", "whatsapp", "send", "upload", "attach", "file"],
    reply: {
      text: "Yes, photos help a lot. The quickest way is WhatsApp: send pictures of the space, and any reference you like, to the workshop. You can also describe the job in the project form and follow up with images.",
      chips: ["Start my brief", "Contact the workshop"],
      handoff: true,
    },
  },
  {
    id: "process",
    keys: ["process", "how does", "how do", "steps", "timeline", "how long", "lead time", "when", "stages"],
    reply: {
      text: `The path runs: ${STEPS}. We agree the scope and finish with you before fabrication begins. Timelines depend on the job and are confirmed when you receive your proposal.`,
      chips: ["What do you need for an estimate?", "Do you install?", "Start my brief"],
    },
  },
  {
    id: "install",
    keys: ["install", "fitting", "fix it", "site visit", "survey", "measure"],
    reply: {
      text: "Installation and site measurement depend on the project scope and location. Tell us where the site is and we will confirm what is possible.",
      chips: ["Start my brief", "Contact the workshop"],
    },
  },
  {
    id: "where",
    keys: ["where", "location", "address", "visit", "workshop", "city", "varanasi", "hours", "open"],
    reply: {
      text: `We are in ${COMPANY_DETAILS.contact.address.city}, ${COMPANY_DETAILS.contact.address.region}. Workshop hours: ${COMPANY_DETAILS.contact.hours[0].days}, ${COMPANY_DETAILS.contact.hours[0].hours}. Please call before visiting.`,
      chips: ["Contact the workshop", "Start my brief"],
    },
  },
  {
    id: "contact",
    keys: ["contact", "call", "phone", "email", "mail", "talk", "speak", "number", "human", "person"],
    reply: {
      text: `You can reach the workshop on ${COMPANY_DETAILS.contact.phone}, on WhatsApp, or at ${COMPANY_DETAILS.contact.email}.`,
      chips: ["Start my brief"],
      handoff: true,
    },
  },
];

export const FALLBACK: Reply = {
  text: "I may not have understood that. I can cover what we make, custom work, what we need for an estimate, the process, or how to reach the workshop. Or tell me about your project and I will help you put a brief together.",
  chips: ["What do you make?", "Start my brief", "Contact the workshop"],
};

export const BRIEF_TYPES = ["Gate", "Railing", "Balcony", "Staircase", "Grill", "Something else"];
export const BRIEF_NEEDS = ["New construction", "Replacement", "Renovation", "Custom design"];

export function matchIntent(input: string): Reply {
  const q = input.toLowerCase();
  let best: { score: number; reply: Reply } | null = null;
  for (const intent of INTENTS) {
    const score = intent.keys.reduce((n, k) => (q.includes(k) ? n + (k.length > 4 ? 2 : 1) : n), 0);
    if (score > 0 && (!best || score > best.score)) best = { score, reply: intent.reply };
  }
  return best ? best.reply : FALLBACK;
}
