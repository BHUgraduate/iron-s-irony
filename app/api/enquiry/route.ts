import { NextResponse } from "next/server";
import { enquirySchema } from "@/lib/validations";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Receives project enquiries and forwards them to a webhook you control
 * (Zapier, Make, Slack incoming webhook, Google Apps Script, your own endpoint).
 * The destination lives only in ENQUIRY_WEBHOOK_URL on the server and never reaches the browser.
 */

const MAX_BODY = 20_000;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

// Best-effort limiter. On serverless each instance has its own memory, so this slows casual abuse
// but is not a hard guarantee; put a platform firewall rule in front for stronger protection.
const hits = new Map<string, number[]>();

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) for (const [k, v] of hits) if (!v.some((t) => now - t < WINDOW_MS)) hits.delete(k);
  return recent.length > MAX_PER_WINDOW;
}

const json = (body: Record<string, unknown>, status = 200) => NextResponse.json(body, { status });

export async function POST(request: Request) {
  const webhook = process.env.ENQUIRY_WEBHOOK_URL || process.env.QUOTE_FORM_WEBHOOK_URL;

  // Same-origin only: blocks other sites posting to this endpoint from a browser.
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) return json({ ok: false, code: "forbidden" }, 403);
    } catch {
      return json({ ok: false, code: "forbidden" }, 403);
    }
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return json({ ok: false, code: "bad_request" }, 415);
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY) return json({ ok: false, code: "too_large" }, 413);

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ ok: false, code: "bad_request" }, 400);
  }

  const ip = (request.headers.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
  if (limited(ip)) return json({ ok: false, code: "rate_limited" }, 429);

  // Honeypot: pretend success so bots learn nothing.
  if (typeof body === "object" && body && typeof (body as Record<string, unknown>).website === "string" && (body as { website: string }).website.length > 0) {
    return json({ ok: true });
  }

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
    data.location && `Location: ${data.location}`,
    data.dimensions && `Size: ${data.dimensions}`,
    `Brief: ${data.description}`,
    data.style && `Style: ${data.style}`,
    data.materialPreference && `Material or finish: ${data.materialPreference}`,
    data.referenceLinks && `References: ${data.referenceLinks}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind: "enquiry", submittedAt: new Date().toISOString(), text: summary, data }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      console.error(`[enquiry] webhook responded ${res.status}`);
      return json({ ok: false, code: "delivery_failed" }, 502);
    }
    return json({ ok: true });
  } catch (err) {
    console.error("[enquiry] webhook request failed", err instanceof Error ? err.name : "error");
    return json({ ok: false, code: "delivery_failed" }, 502);
  }
}
