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
NEXT_PUBLIC_SITE_URL=https://your-domain   # optional; defaults to the Vercel production URL
```
Payload: `{ kind: "enquiry", submittedAt, text, data }`. `text` is a readable summary for Slack-style hooks.
Without a webhook the form says nothing was sent and offers WhatsApp, phone and email, with the visitor’s brief pre-written.

The rate limiter is in-memory and best effort; on serverless hosts add a platform firewall rule for stronger protection.

## Project assistant
`ChatAssistant` is rule-based, not AI. It answers only from `data/assistant.ts` and the site’s own data, never quotes prices, timelines or guarantees, and says so when it does not know.

## Hosting
Needs a Node host (for example Vercel) because of the API route. It cannot run as a static GitHub Pages export.
