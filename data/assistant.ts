import { COMPANY_DETAILS } from "@/data/company";
import { PROCESS_STAGES } from "@/data/home";
import { SERVICES_DATA } from "@/data/services";

/**
 * Project assistant knowledge. It is a rule-based guide, not an AI: it answers only from the site's own
 * content, names no prices, timelines, guarantees, availability or project history, and says so
 * plainly when it does not know.
 */

export interface ReplyLink {
  label: string;
  href: string;
}

export interface Reply {
  text: string;
  chips?: string[];
  links?: ReplyLink[];
  /** Offer the hand-off actions (project form and WhatsApp). */
  handoff?: boolean;
}

export const WELCOME: Reply = {
  text: "I can help you find your way around: what we make, how a project runs, what to bring, and how to get in touch. What are you thinking of building?",
  chips: ["What do you make?", "Can you work from my reference?", "What should I send you?", "How does a project run?", "Start my brief"],
};

const steps = PROCESS_STAGES.map((s) => s.title.toLowerCase()).join(", ");
const serviceList = SERVICES_DATA.map((s) => s.title.toLowerCase()).join(", ");

interface Intent {
  id: string;
  keys: string[];
  reply: Reply;
}

export const INTENTS: Intent[] = [
  {
    id: "make",
    keys: ["make", "services", "offer", "what you do", "products", "gate", "railing", "balcon", "stair", "grill", "window", "fabricat", "iron"],
    reply: {
      text: `We make ironwork for buildings: ${serviceList}. Tell me which of these is closest to what you need and I will point you to the right place.`,
      links: [{ label: "See all services", href: "/services" }],
      chips: ["Can you work from my reference?", "What should I send you?", "Start my brief"],
    },
  },
  {
    id: "custom",
    keys: ["custom", "reference", "photo of", "like this", "design", "bespoke", "sketch", "drawing", "copy", "similar", "my own"],
    reply: {
      text: "Yes, custom work is central to what we do. Bring a photograph, a sketch, a drawing or just the measured opening, and we will work out how to make something equivalent for your space.",
      links: [{ label: "Custom fabrication", href: "/services/custom-fabrication" }],
      chips: ["Can I send photos?", "What should I send you?", "Start my brief"],
    },
  },
  {
    id: "send",
    keys: ["estimate", "send you", "need from me", "information", "details", "bring", "require", "what do you need", "what should i"],
    reply: {
      text: "To start: what you want to create, what kind of space it is for, rough dimensions, where the site is, and a photo if you have one. Rough is fine. You can add the rest as we talk.",
      chips: ["Can I send photos?", "How much will it cost?", "Start my brief"],
    },
  },
  {
    id: "price",
    keys: ["price", "cost", "how much", "budget", "rate", "quote", "quotation", "charge", "afford"],
    reply: {
      text: "I do not have prices to share. Each piece is made for a particular site, so the best way to get an answer is to tell us what you have in mind and talk to us directly.",
      chips: ["Start my brief", "Contact us"],
      handoff: true,
    },
  },
  {
    id: "photos",
    keys: ["photo", "image", "picture", "whatsapp", "send", "upload", "attach", "file"],
    reply: {
      text: "Yes, photos help a lot. The quickest way is WhatsApp: send pictures of the space and anything you like. You can also describe the project in the form first and follow up with images.",
      chips: ["Start my brief", "Contact us"],
      handoff: true,
    },
  },
  {
    id: "process",
    keys: ["process", "how does", "how do", "steps", "stages", "how it works", "what happens"],
    reply: {
      text: `A project moves through ${steps}. We agree the design with you before anything is fabricated.`,
      links: [{ label: "The full process", href: "/process" }],
      chips: ["What should I send you?", "Start my brief"],
    },
  },
  {
    id: "time",
    keys: ["how long", "timeline", "lead time", "when will", "deadline", "urgent", "weeks", "days", "available", "availability"],
    reply: {
      text: "I do not have timings to quote. They depend on the piece and the site, and we talk about them once we understand the project. Tell us if you have a date in mind.",
      chips: ["Start my brief", "Contact us"],
      handoff: true,
    },
  },
  {
    id: "install",
    keys: ["install", "fitting", "fix it", "site visit", "survey", "measure"],
    reply: {
      text: "Installation is part of the process, from measuring to fixing. Arrangements depend on the project, so tell us where the site is and what is involved and we will confirm them.",
      chips: ["Start my brief", "Contact us"],
    },
  },
  {
    id: "where",
    keys: ["where", "location", "address", "visit", "workshop", "city", "hours", "open", "area"],
    reply: {
      text: COMPANY_DETAILS.contact.address
        ? `Our address is ${COMPANY_DETAILS.contact.address.lines.join(", ")}.`
        : COMPANY_DETAILS.contact.mapsUrl
        ? "You can find our location on Google Maps from the Contact page or the footer. Please call or message us before visiting, so we can arrange a time."
        : "I do not have an address to share here. The quickest way to arrange anything is to call or message us, and we will tell you where to go.",
      links: COMPANY_DETAILS.contact.mapsUrl ? [{ label: "Open Google Maps", href: COMPANY_DETAILS.contact.mapsUrl }] : undefined,
      chips: ["Contact us", "Start my brief"],
    },
  },
  {
    id: "work",
    keys: ["portfolio", "previous", "past work", "examples", "projects", "show me", "completed"],
    reply: {
      text: "The Work page shows representative examples of the kinds of piece we make, drawn to show how they come together. It does not yet show completed projects, and I would rather say so than imply otherwise. Ask us directly if you would like to see photographs of previous work.",
      links: [{ label: "See the work", href: "/projects" }],
      chips: ["Contact us", "Start my brief"],
    },
  },
  {
    id: "contact",
    keys: ["contact", "call", "phone", "email", "mail", "talk", "speak", "number", "human", "person"],
    reply: {
      text: `You can reach us on ${COMPANY_DETAILS.contact.phoneDisplay}, on WhatsApp, or at ${COMPANY_DETAILS.contact.email}.`,
      chips: ["Start my brief"],
      handoff: true,
    },
  },
];

export const FALLBACK: Reply = {
  text: "I do not have an answer to that. I can cover what we make, working from a reference, what to send us, and how a project runs. For anything else, the best next step is to start a brief or talk to us directly.",
  chips: ["Start my brief", "Contact us", "What do you make?"],
  handoff: true,
};

export const BRIEF_TYPES = ["Gate", "Railing", "Balcony", "Staircase", "Grill", "Something else"];
export const BRIEF_SPACES = ["Private home", "Apartment or housing", "Commercial or business", "Not sure yet"];

export function matchIntent(input: string): Reply {
  const q = input.toLowerCase();
  let best: { score: number; reply: Reply } | null = null;
  for (const intent of INTENTS) {
    const score = intent.keys.reduce((n, k) => (q.includes(k) ? n + (k.length > 4 ? 2 : 1) : n), 0);
    if (score > 0 && (!best || score > best.score)) best = { score, reply: intent.reply };
  }
  return best ? best.reply : FALLBACK;
}
