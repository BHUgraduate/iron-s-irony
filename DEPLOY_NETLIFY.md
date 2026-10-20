# Deploying to Netlify

GitHub repository `BHugraduate/iron-s-irony` → Netlify → `https://ironsirony.hycyon.com`

## Build settings (also in `netlify.toml`)
| Setting | Value |
| --- | --- |
| Build command | `npm run check:content && npm run build` |
| Publish directory | `.next` |
| Node | 20 |
| Runtime | Netlify’s official Next.js runtime, detected and installed automatically |

This is a full Next.js app. Do not convert it to a static export: the enquiry API and dynamic routes need the server runtime.

## Environment variables
| Variable | Required | Where | Value |
| --- | --- | --- | --- |
| `ENQUIRY_WEBHOOK_URL` | Yes, for enquiries to reach you | Netlify UI only, never in Git | The URL of your webhook (Zapier, Make, Slack incoming webhook, Apps Script) |
| `FEEDBACK_WEBHOOK_URL` | No | Netlify UI only, never in Git | Where customer feedback is sent. If unset, feedback uses `ENQUIRY_WEBHOOK_URL` |
| `NEXT_PUBLIC_SITE_URL` | No | Already in `netlify.toml` | `https://ironsirony.hycyon.com` |

**After changing a variable, redeploy, then open `/api/health`** on the live site. It reports `enquiryWebhookConfigured` and `feedbackWebhookConfigured` as true or false (never the URL itself), and `build`, the commit the running deployment came from. If it says `false` after you have set the variable, check that the variable is set for the **Production** context, that its scopes include **Functions** and **Runtime**, that the name is exactly `ENQUIRY_WEBHOOK_URL`, and that you edited the Netlify site that actually serves `ironsirony.hycyon.com` (Domain management shows which one).

If `ENQUIRY_WEBHOOK_URL` is missing the site still works. The form tells the visitor nothing was sent and offers WhatsApp, phone and email with their brief pre-written. The feedback form behaves the same way.

The build runs `npm run check:content` first, which validates `data/feedback.json`. A malformed or unsafe entry (a phone number or link inside a quote, placeholder text, a duplicate) fails the deploy instead of reaching the site.

## Redirects
Defined in `next.config.mjs`: `/shop` and `/shop/*` → `/services`, `/quote` and `/start` → `/contact#start`, `/work` → `/projects`, and the two retired service slugs.

## Verify a live deployment
`node scripts/verify-live.mjs https://ironsirony.hycyon.com`
