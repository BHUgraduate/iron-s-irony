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
72 real, photographed designs (41 gates, 21 grills, 4 staircases, 3 railings, 1 balcony, 2 custom fabrication) supplied by the owner, in `data/catalogue.ts`. Photographs live in `public/catalogue/<slug>/`, prepared by `scripts/prepare-catalogue-photos.py` from `scripts/catalogue-photos.json`.

iron’s irony is a made-to-order workshop, so a design is a starting point, not a fixed product. Nothing in the specification is invented:

- Populated from what the photographs show: name, category, type, a one-line summary, pattern, and (only where a house frontage is visible) application.
- **Not populated, shown as "Custom / as per project":** material, dimensions, finish, colour, hardware, installation.
- To state a real value, set the field on that design (`material: "Mild steel"`, `finish: ["Powder coated"]`, …). Only fields with a value are shown as facts.

| Item | Where it goes | Behaviour until supplied |
| --- | --- | --- |
| Material, finish, colour, hardware, dimensions per design | the design’s entry in `data/catalogue.ts` | "Custom / as per project" |
| Photographs of balconies, railings, grills, staircases, architectural pieces | `scripts/catalogue-photos.json` + a new entry | Those services appear under "Also made to order" |
| Names for the designs | `name` | Descriptive working names, edit freely |
| Official catalogue PDF | `CATALOGUE_PDF` | No download button is shown |
| Search, filters, compare, named collections | not built | Add once there are enough designs to need them |

The enquiry reuses the project configurator. The design name, category and link travel in a `catalogueDesign` field to the form, the webhook message and WhatsApp.

Reference ideas: 87 publicly available images (19 balconies, 10 gates and doors, 23 grill and screen patterns, 35 stairs and railings; photographs, drawings, inspiration) shown in their own section, always labelled "Reference" and "not iron’s irony’s work". They are never listed among the designs. Public availability is not the same as a licence to reuse: keep them only if the owner is comfortable with that.

Brightness: 16 of the designs' own photographs that were clearly dark received a gentle gamma lift (never stronger than 0.78). Reference images are untouched. `data/catalogue-images.json` records which photos were adjusted (`gamma`).

Photos not used (first batch): 38261 (shows a third-party shop sign and phone number), 68325 and 88190 (graphics or renders, not photographs), 2341-duplicate 77513 and 21208-duplicate 40887, 51151 and 756 (close-up details that could not be tied to one design), and 46512, 57165, 87712 (files are corrupt WebP data and could not be opened).

Photos not used (second batch): 64728 and 78617 (carry a worker's phone-brand stamp), 93503 and 94855 (corrupt files).

Third batch: 6 designs added (railings, balcony, staircases); 35 staircase and railing images added as references. 93330 had black letterbox bars cropped off (the picture itself is unchanged). The 3 truncated-file warnings are harmless.

Fourth batch: IMG_0331-0337 (iPhone HEIC, converted; GPS location removed) became the Fabricated Drum Frame design under Custom fabrication. IMG_0334 left out (close-up of a person's face). IMG_0349-0350 (photographs of worn prints) and IMG_0361-0372 (small web images, 400-650px) are references.

Owner confirmed IMG_0361, 0367, 0368 and 0371 are their work: 3 new gate designs, and 0367 added to Studded Louvre Gate. 0349 and 0350 remain references.

Fifth batch: 19 balcony images added as references (they look like web or architectural photographs, not workshop photos). Owner to confirm any that are their own work so they can become designs.
