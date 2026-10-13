import { NextResponse } from "next/server";
import type { ZodSchema } from "zod";

export async function handleSubmission(
  request: Request,
  schema: ZodSchema,
  webhookUrl: string | undefined,
  kind: string
) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Validation failed." }, { status: 422 });
  }

  if (!webhookUrl) {
    return NextResponse.json(
      { ok: false, error: "Submissions are not configured on this server." },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind, submittedAt: new Date().toISOString(), data: parsed.data }),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Delivery failed." }, { status: 502 });
  }
}
