# iron’s irony

Website for iron’s irony: gates, railings, balconies, staircases, grills and custom ironwork.
Built with Next.js 14 (App Router), TypeScript, Tailwind CSS and Framer Motion. Website by Hycyon.

## Run
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run lint
```

## Structure
```
app/            routes: /, /services, /services/[slug], /projects, /projects/[slug], /process,
                /about, /contact, /customers, /faq, /privacy, /terms, /api/enquiry, OG and icons
components/
  ui/           design system (Section, PageHero, Type, Field, Tag, WorkVisual, IronDrawing, …)
  motion/       Reveal, MagneticButton, usePointerParallax, MotionProvider
  sections/     homepage sections (Hero, Transformation, Services, Work, Process, Custom, Trust)
  forms/        ProjectConfigurator
  chat/         ChatAssistant (rule-based project guide)
  layout/       Header, MobileMenu, Footer, StickyCta, StartLink
data/           all copy and business details (company, services, projects, faq, about, customers, home, assistant)
lib/            motion primitives, validations, enquiry helpers, SEO
```
Docs: `DESIGN_SYSTEM.md` (tokens and components), `CONTENT_STATUS.md` (real vs representative vs needed).

## Enquiries
The Start a Project flow posts to `/api/enquiry`, which validates on the server (same Zod schema as the browser), checks same-origin, rate-limits, drops honeypot spam and forwards to a webhook you control.

Set in the host’s environment (never commit it):
```
ENQUIRY_WEBHOOK_URL=https://…      # Zapier, Make, Slack incoming webhook, Apps Script, your own endpoint
NEXT_PUBLIC_SITE_URL=https://ironsirony.hycyon.com   # already set in netlify.toml
```
Payload: `{ kind: "enquiry", submittedAt, text, data }`. `text` is a readable summary for Slack-style hooks.
Without a webhook the form says nothing was sent and offers WhatsApp, phone and email, with the visitor’s brief pre-written.

The rate limiter is in-memory and best effort; on serverless hosts add a platform firewall rule for stronger protection.

## Customer feedback
People who have worked with us can share how it went at `/feedback`. The form posts to `/api/feedback` (same protections as enquiries: same-origin, size limit, honeypot, rate limit of 3 per 10 minutes, server-side validation) and is forwarded to `FEEDBACK_WEBHOOK_URL`, or `ENQUIRY_WEBHOOK_URL` if that is not set. Payload: `{ kind: "feedback", submittedAt, text, publishEntry, data }`.

**Nothing is published automatically.** That keeps invented or abusive reviews off a business site. The owner reads the message, confirms it is genuine using the contact the person gave (which is never published), and adds the ready-made `publishEntry` from the notification to the array in `data/feedback.json`. The next deploy shows it on `/feedback` and on the home page. Each person chooses: full name, first name only, or private (private feedback has no `publishEntry`).

```
data/feedback.json         the published entries (starts empty: no invented praise)
data/feedback.ts           types and helpers
components/sections/Voices.tsx   the wall: newest quote featured, the rest as plaques topped with gate spears
components/forms/FeedbackForm.tsx
lib/feedback.ts            builds the notification and the publish entry (first-name consent publishes only the first name)
scripts/check-content.mjs  runs before every deploy (npm run check:content)
```
Editing on a phone works: open `data/feedback.json` in the GitHub app or website, paste the entry inside the `[ ]`, add a comma between entries, and commit. Netlify rebuilds, and the checker refuses to deploy a bad entry.

## Project assistant
`ChatAssistant` is rule-based, not AI. It answers only from `data/assistant.ts` and the site’s own data, never quotes prices, timelines or guarantees, and says so when it does not know.

## Hosting
Deployed on Netlify from GitHub at https://ironsirony.hycyon.com. It is a full Next.js app (API route, dynamic routes), not a static export. See `DEPLOY_NETLIFY.md`.
