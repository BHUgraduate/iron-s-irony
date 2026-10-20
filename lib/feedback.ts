import type { FeedbackValues } from "@/lib/validations";
import type { FeedbackEntry } from "@/data/feedback";

/** A validated submission without the honeypot field. */
export type FeedbackInput = Omit<FeedbackValues, "website">;

const slug = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 24) || "customer";

/** The name exactly as the person agreed to be shown. */
export function displayName(fullName: string, consent: FeedbackInput["consent"]) {
  const name = fullName.trim().replace(/\s+/g, " ");
  return consent === "first-name" ? name.split(" ")[0] : name;
}

/**
 * The entry to paste into data/feedback.json once the owner has read and approved the feedback.
 * Returns null for private feedback: it must never be published.
 */
export function toPublishEntry(v: FeedbackInput, now = new Date()): FeedbackEntry | null {
  if (v.consent === "private") return null;
  const date = now.toISOString().slice(0, 10);
  const name = displayName(v.fullName, v.consent);
  return {
    id: `${date}-${slug(name)}`,
    quote: v.message.trim().replace(/\s+/g, " "),
    name,
    role: v.role,
    ...(v.projectType ? { projectType: v.projectType } : {}),
    ...(v.place ? { place: v.place } : {}),
    date,
  };
}

/** A readable message for Slack-style webhooks. */
export function feedbackSummary(v: FeedbackInput, entry: FeedbackEntry | null) {
  const consentText = { "full-name": "May publish with full name", "first-name": "May publish with first name only", private: "Private: do NOT publish" }[v.consent];
  return [
    `New feedback from ${v.fullName.trim()} (${v.role})`,
    consentText,
    v.projectType && `Project: ${v.projectType}`,
    v.place && `Place: ${v.place}`,
    `Their words: ${v.message.trim()}`,
    `Contact to confirm (private, never publish): ${v.contact.trim()}`,
    entry
      ? `\nTo publish, after you have confirmed it is genuine, add this to the list in data/feedback.json:\n${JSON.stringify(entry, null, 2)}`
      : "\nNothing to publish.",
  ]
    .filter(Boolean)
    .join("\n");
}
