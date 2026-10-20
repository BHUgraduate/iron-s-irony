import { NextResponse } from "next/server";

/**
 * Protections shared by the public form endpoints (/api/enquiry, /api/feedback).
 * Best effort by design: on serverless hosts each instance keeps its own memory, so the limiter slows casual abuse
 * but is not a hard guarantee. Put a platform firewall rule in front for stronger protection.
 */

export const json = (body: Record<string, unknown>, status = 200) => NextResponse.json(body, { status });

/** Same-origin only: blocks other sites posting to an endpoint from a browser. Returns a 403 response, or null if fine. */
export function rejectCrossOrigin(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) return json({ ok: false, code: "forbidden" }, 403);
    } catch {
      return json({ ok: false, code: "forbidden" }, 403);
    }
  }
  return null;
}

export function clientIp(request: Request) {
  // Netlify sets x-nf-client-connection-ip; x-forwarded-for covers other hosts.
  return (request.headers.get("x-nf-client-connection-ip") ?? request.headers.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
}

/** A sliding-window limiter. Each endpoint creates its own so one cannot starve the other. */
export function createLimiter(windowMs: number, max: number) {
  const hits = new Map<string, number[]>();
  return (ip: string) => {
    const now = Date.now();
    const recent = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);
    recent.push(now);
    hits.set(ip, recent);
    if (hits.size > 5000) for (const [k, v] of hits) if (!v.some((t) => now - t < windowMs)) hits.delete(k);
    return recent.length > max;
  };
}

/** Reads a small JSON body. Returns the parsed value, or a ready error response. */
export async function readJson(request: Request, maxBytes: number): Promise<{ body: unknown } | { error: NextResponse }> {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return { error: json({ ok: false, code: "bad_request" }, 415) };
  }
  const raw = await request.text();
  if (raw.length > maxBytes) return { error: json({ ok: false, code: "too_large" }, 413) };
  try {
    return { body: JSON.parse(raw) };
  } catch {
    return { error: json({ ok: false, code: "bad_request" }, 400) };
  }
}

/** The honeypot field is invisible to people, so anything in it is a bot. Callers answer with a fake success. */
export const isHoneypotFilled = (body: unknown) =>
  typeof body === "object" && body !== null && typeof (body as Record<string, unknown>).website === "string" && ((body as { website: string }).website.length > 0);

const DISCORD_LIMIT = 2000;

/** Discord webhooks live at discord.com/api/webhooks/... and use a different message format from generic JSON hooks. */
export function isDiscordWebhook(url: string) {
  try {
    const u = new URL(url);
    return /(^|\.)discord(app)?\.com$/i.test(u.hostname) || u.pathname.startsWith("/api/webhooks/");
  } catch {
    return false;
  }
}

/**
 * What to send. Generic hooks (Zapier, Make, Slack, Apps Script, your own endpoint) get the full payload.
 * Discord refuses anything without `content`, caps it at 2000 characters, and would otherwise act on @everyone or
 * @here typed into a public form, so mentions are switched off and the message is trimmed to fit.
 */
export function webhookBody(url: string, payload: Record<string, unknown>) {
  if (!isDiscordWebhook(url)) return payload;
  const text = String(payload.text ?? "");
  // Put a ready-to-copy entry in a code block so it can be copied cleanly on a phone.
  const marker = "\nTo publish";
  const entry = payload.publishEntry ? JSON.stringify(payload.publishEntry, null, 2) : null;
  const head = entry && text.includes(marker) ? text.slice(0, text.indexOf(marker)) : text;
  const tail = entry ? `\n\nAfter you have confirmed it is genuine, add this to the list in data/feedback.json:\n\`\`\`json\n${entry}\n\`\`\`` : "";
  const header = `**${payload.kind === "feedback" ? "New feedback" : "New enquiry"}**\n`;
  const note = "\n…(shortened to fit Discord)";
  // If it is too long, shorten the descriptive part and keep the copy-ready entry whole.
  const room = DISCORD_LIMIT - header.length - tail.length;
  const body = head.length > room ? head.slice(0, Math.max(0, room - note.length)) + note : head;
  const content = (header + body + tail).slice(0, DISCORD_LIMIT);
  return { username: "iron’s irony website", content, allowed_mentions: { parse: [] } };
}

/** POSTs a payload to the owner's webhook. Never throws, and never logs the URL. */
export async function forwardToWebhook(url: string, payload: Record<string, unknown>, label: string) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(webhookBody(url, payload)),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      // The status and the service's short error message are enough to diagnose; neither contains a secret.
      const detail = (await res.text().catch(() => "")).replace(/\s+/g, " ").slice(0, 160);
      console.error(`[${label}] webhook responded ${res.status}${detail ? `: ${detail}` : ""}`);
      return false;
    }
    return true;
  } catch (err) {
    console.error(`[${label}] webhook request failed`, err instanceof Error ? err.name : "error");
    return false;
  }
}
