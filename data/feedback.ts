import raw from "./feedback.json";
import { PROJECT_TYPES, ROLES } from "@/lib/validations";

/**
 * Customer feedback that appears on the site.
 *
 * Nothing is ever shown unless it is in `feedback.json`, and an entry is added only after the person has agreed
 * to it being published. The list starts empty on purpose: no invented praise. To publish a submission, paste the
 * ready-made entry from the notification into the array in `data/feedback.json` and deploy. `npm run check:content`
 * rejects entries that are incomplete, duplicated or look like placeholder text.
 */
export interface FeedbackEntry {
  /** Unique, stable. e.g. "2026-11-02-ravi" */
  id: string;
  /** Their words, exactly as sent apart from fixing typos. Plain text. */
  quote: string;
  /** Exactly as they agreed to be named: full name or first name. */
  name: string;
  role: (typeof ROLES)[number]["value"];
  /** What we made for them, if they said. */
  projectType?: (typeof PROJECT_TYPES)[number];
  /** Town or city, if they said. */
  place?: string;
  /** Date the feedback was received, ISO (YYYY-MM-DD). */
  date: string;
}

export const FEEDBACK = raw as FeedbackEntry[];

export const roleLabel = (role: FeedbackEntry["role"]) => ROLES.find((r) => r.value === role)?.label ?? "Customer";
