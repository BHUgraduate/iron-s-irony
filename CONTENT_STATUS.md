# Content status

What is real, what is representative, and what the owner still needs to supply.
Update this file whenever content changes.

## Real (supplied by the owner in the original repository)
- Business name and tagline: iron’s irony, Building, Architectural & Decorative Ironwork
- Phone and WhatsApp: +91 88533 58005
- Email: bhugraduate@gmail.com
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
| Workshop or office address | `contact.address` | Omitted everywhere |
| Business hours | `contact.hours` | Omitted |
| Service area | `contact.serviceArea` | Omitted |
| Social media URLs | `socials` | Omitted |
| Real project photos and facts | `data/projects.ts` | Representative drawings shown |
| Enquiry destination (webhook) | env `ENQUIRY_WEBHOOK_URL` | Form tells visitors nothing was sent and offers WhatsApp, phone and email |
| Final domain | env `NEXT_PUBLIC_SITE_URL` | Placeholder `https://ironsirony.com` used in canonical, sitemap, social previews |
| Prices, timelines, guarantees (optional) | FAQ and copy | Site says these are discussed per project |

## Not used, deliberately
Hycyon (the web developer) is a separate business. Its address and details are not used as the iron’s irony address.
The previous shop catalogue, testimonials, stock photography and invented specifications were removed.
