# Deploying to Netlify

GitHub repository `BHugraduate/iron-s-irony` → Netlify → `https://ironsirony.hycyon.com`

## Build settings (also in `netlify.toml`)
| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Publish directory | `.next` |
| Node | 20 |
| Runtime | Netlify’s official Next.js runtime, detected and installed automatically |

This is a full Next.js app. Do not convert it to a static export: the enquiry API and dynamic routes need the server runtime.

## Environment variables
| Variable | Required | Where | Value |
| --- | --- | --- | --- |
| `ENQUIRY_WEBHOOK_URL` | Yes, for enquiries to reach you | Netlify UI only, never in Git | The URL of your webhook (Zapier, Make, Slack incoming webhook, Apps Script) |
| `NEXT_PUBLIC_SITE_URL` | No | Already in `netlify.toml` | `https://ironsirony.hycyon.com` |

If `ENQUIRY_WEBHOOK_URL` is missing the site still works. The form tells the visitor nothing was sent and offers WhatsApp, phone and email with their brief pre-written.

## Redirects
Defined in `next.config.mjs`: `/shop` and `/shop/*` → `/services`, `/quote` and `/start` → `/contact#start`, `/work` → `/projects`, and the two retired service slugs.

## Verify a live deployment
`node scripts/verify-live.mjs https://ironsirony.hycyon.com`
