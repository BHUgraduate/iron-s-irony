import { json } from "@/lib/server/guards";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * A quick way to see whether the running server can use the form webhooks. It reports yes or no only: it never
 * returns a webhook URL or any other secret. Open /api/health on the live site after changing environment variables.
 */
export async function GET() {
  const enquiry = Boolean(process.env.ENQUIRY_WEBHOOK_URL);
  const feedback = Boolean(process.env.FEEDBACK_WEBHOOK_URL || process.env.ENQUIRY_WEBHOOK_URL);
  const res = json({
    ok: true,
    enquiryWebhookConfigured: enquiry,
    feedbackWebhookConfigured: feedback,
    // The commit this deployment was built from (set at build time on Netlify), to confirm the latest code is live.
    build: process.env.NEXT_PUBLIC_BUILD || null,
    hint: enquiry
      ? "The server can see the webhook. Enquiries and feedback will be forwarded."
      : "The server cannot see ENQUIRY_WEBHOOK_URL. In Netlify, set it for the Production context with the Functions and Runtime scopes, then redeploy.",
  });
  res.headers.set("Cache-Control", "no-store");
  return res;
}
