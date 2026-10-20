import { feedbackSchema } from "@/lib/validations";
import { feedbackSummary, toPublishEntry } from "@/lib/feedback";
import { clientIp, createLimiter, forwardToWebhook, isHoneypotFilled, json, readJson, rejectCrossOrigin } from "@/lib/server/guards";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Receives feedback from people who have worked with iron’s irony and forwards it to the owner's webhook
 * (the same one as enquiries, or FEEDBACK_WEBHOOK_URL if set). Nothing is published automatically:
 * the owner reads it, confirms it is genuine and adds it to data/feedback.json. That keeps invented or abusive
 * reviews off the site. The notification includes the ready-to-paste entry.
 */

const MAX_BODY = 8_000;
const limited = createLimiter(10 * 60 * 1000, 3);

export async function POST(request: Request) {
  const webhook = process.env.FEEDBACK_WEBHOOK_URL || process.env.ENQUIRY_WEBHOOK_URL;

  const crossOrigin = rejectCrossOrigin(request);
  if (crossOrigin) return crossOrigin;

  const read = await readJson(request, MAX_BODY);
  if ("error" in read) return read.error;
  const body = read.body;

  if (limited(clientIp(request))) return json({ ok: false, code: "rate_limited" }, 429);

  // Honeypot: pretend success so bots learn nothing.
  if (isHoneypotFilled(body)) return json({ ok: true });

  const parsed = feedbackSchema.safeParse(body);
  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const issue of parsed.error.issues) fields[String(issue.path[0])] ??= issue.message;
    return json({ ok: false, code: "invalid", fields }, 422);
  }

  if (!webhook) return json({ ok: false, code: "not_configured" }, 503);

  const { website: _website, ...data } = parsed.data;
  void _website;
  const entry = toPublishEntry(data);
  const ok = await forwardToWebhook(
    webhook,
    { kind: "feedback", submittedAt: new Date().toISOString(), text: feedbackSummary(data, entry), publishEntry: entry, data },
    "feedback",
  );
  return ok ? json({ ok: true }) : json({ ok: false, code: "delivery_failed" }, 502);
}
