import { enquirySchema } from "@/lib/validations";
import { clientIp, createLimiter, forwardToWebhook, isHoneypotFilled, json, readJson, rejectCrossOrigin } from "@/lib/server/guards";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Receives project enquiries and forwards them to a webhook you control
 * (Zapier, Make, Slack incoming webhook, Google Apps Script, your own endpoint).
 * The destination lives only in ENQUIRY_WEBHOOK_URL on the server and never reaches the browser.
 */

const MAX_BODY = 20_000;
const limited = createLimiter(10 * 60 * 1000, 5);

export async function POST(request: Request) {
  const webhook = process.env.ENQUIRY_WEBHOOK_URL;

  const crossOrigin = rejectCrossOrigin(request);
  if (crossOrigin) return crossOrigin;

  const read = await readJson(request, MAX_BODY);
  if ("error" in read) return read.error;
  const body = read.body;

  if (limited(clientIp(request))) return json({ ok: false, code: "rate_limited" }, 429);

  // Honeypot: pretend success so bots learn nothing.
  if (isHoneypotFilled(body)) return json({ ok: true });

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const issue of parsed.error.issues) fields[String(issue.path[0])] ??= issue.message;
    return json({ ok: false, code: "invalid", fields }, 422);
  }

  if (!webhook) return json({ ok: false, code: "not_configured" }, 503);

  const { website: _website, ...data } = parsed.data;
  void _website;
  const summary = [
    `New enquiry: ${data.projectType} (${data.need}) for ${data.space}`,
    `Name: ${data.fullName}`,
    `Phone: ${data.phone}`,
    data.email && `Email: ${data.email}`,
    `Prefers: ${data.reach}`,
    data.catalogueDesign && `Catalogue design: ${data.catalogueDesign}`,
    data.location && `Location: ${data.location}`,
    data.dimensions && `Size: ${data.dimensions}`,
    `Brief: ${data.description}`,
    data.style && `Style: ${data.style}`,
    data.materialPreference && `Material or finish: ${data.materialPreference}`,
    data.referenceLinks && `References: ${data.referenceLinks}`,
  ]
    .filter(Boolean)
    .join("\n");

  const ok = await forwardToWebhook(
    webhook,
    { kind: "enquiry", submittedAt: new Date().toISOString(), text: summary, data },
    "enquiry",
  );
  return ok ? json({ ok: true }) : json({ ok: false, code: "delivery_failed" }, 502);
}
