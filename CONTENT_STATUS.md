# Content status

What is real, what is representative, and what the owner still needs to supply.
Update this file whenever content changes.

## Real (supplied by the owner in the original repository)
- Business name and tagline: iron’s irony, Building, Architectural & Decorative Ironwork
- Phone and WhatsApp: +91 88533 58005
- Email: bhugraduate@gmail.com
- Location: Google Maps link (`contact.mapsUrl`). The street address text itself has not been supplied
- The categories of work: building, architectural and decorative ironwork, gates, railings, grills, balconies, staircases, custom fabrication
- The process: measure, design, fabricate, finish, install

## Written by us from the brief (statements of approach, not facts)
Copy on every page: services descriptions, "what we decide together", about page beliefs, FAQ answers, privacy and terms.
These contain no counts, dates, prices, timelines, materials, standards, clients or guarantees.
**Legal text (privacy, terms) should be reviewed by the owner before launch.**

## Representative examples (not real projects)
`data/projects.ts`: six briefs drawn as line drawings. Each is tagged "Representative example" on the site.
To publish a real project: set `status: "completed"`, add a photo in `public/work/`, and fill `real` with only what is true.

## Needed from the owner
| Item | Where it goes | Behaviour until supplied |
| --- | --- | --- |
| Confirm phone, WhatsApp and email are correct | `data/company.ts` | Current values are used |
| Workshop or office address as text | `contact.address` | Omitted. The owner’s Google Maps link is shown as "Find us on Google Maps" |
| Business hours | `contact.hours` | Omitted |
| Service area | `contact.serviceArea` | Omitted |
| Social media URLs | `socials` | Omitted |
| Real project photos and facts | `data/projects.ts` | Representative drawings shown |
| Enquiry destination (webhook) | env `ENQUIRY_WEBHOOK_URL` | Form tells visitors nothing was sent and offers WhatsApp, phone and email |
| Production domain | `netlify.toml` / env `NEXT_PUBLIC_SITE_URL` | https://ironsirony.hycyon.com |
| Feedback destination (webhook) | env `FEEDBACK_WEBHOOK_URL`, or `ENQUIRY_WEBHOOK_URL` | Form tells people nothing was sent and offers WhatsApp and email |
| Prices, timelines, guarantees (optional) | FAQ and copy | Site says these are discussed per project |

## Customer feedback
`data/feedback.json` is empty on purpose. No testimonials, counts or ratings have been supplied, so none are shown, and none will be written by us. The `/feedback` page collects real feedback; it is published only after the owner has read it, confirmed it is genuine, and the person has agreed (full name, first name only, or private). See README, "Customer feedback".

## Not used, deliberately
Hycyon (the web developer) is a separate business. Its address and details are not used as the iron’s irony address.
The previous shop catalogue, testimonials, stock photography and invented specifications were removed.

## Catalogue (`/catalogue`)
Built only from real data: categories are the services in `data/services.ts`; each design is a catalogue entry (`data/catalogue.ts`) for a work entry in `data/projects.ts`. All six designs are still **representative drawings** and are labelled as such.

| Item | Where it goes | Behaviour until supplied |
| --- | --- | --- |
| Photographs of each design | `gallery` in `data/catalogue.ts`, files in `public/catalogue/<slug>/` | Line drawing shown; gallery paging, thumbnails and fullscreen switch on with 2+ photos |
| Verified specifications (material, dimensions, finish, infill, hardware) | `specs` | Not listed; the sheet says these are settled per project |
| Finishes and materials, with swatch photos | `finishes` | Finish selector is hidden |
| Official catalogue PDF | `CATALOGUE_PDF` | No download button is shown anywhere |
| Railings design (no drawing exists yet) | add to `data/projects.ts` then `CATALOGUE` | Listed under "Also made to order", linking to the service page |
| Named collections (Contemporary, Classic…) | not built | Needs enough real designs to group |
| Search, style/material filters, compare | not built | Not justified by six designs |

The enquiry reuses the project configurator; the chosen design is carried into its optional "Style" line as "Catalogue design: …". Photo upload is not supported by the Discord webhook, so photos are sent on WhatsApp.
