# Design system

One visual language for every page. Tokens live in `tailwind.config.ts`; runtime variables and utilities in `styles/globals.css`.

**Idea:** iron has weight. Heavy type, hairline drawings, long settling motion, honest material colours.

## Colour
| Token | Use |
| --- | --- |
| `iron-950/900/800` | Dark grounds (hero, work, forms, footer) |
| `canvas-bg` | Paper, the light ground |
| `concrete` | Quiet alternate light ground |
| `ink-secondary`, `ink-muted` | Body and small text on light (both pass AA) |
| `accent-amber` | Accent on dark grounds |
| `accent-ink` | Accent text on light grounds (AA) |
| `accent-bronze` | Accent fills and hover states |

Accent appears only where it has a job: calls to action, active states, small labels, heat references.

## Type
Three families: **Archivo** (display and body), **Cormorant Garamond** (serif accents, italic for pull lines), **JetBrains Mono** (micro labels).

| Class | Role |
| --- | --- |
| `.display` + `.display-lg/md/sm` | Uppercase heavy headlines, fluid `clamp()` |
| `.micro` | Mono label, 11px, wide tracking |
| `font-serif italic` | Accent lines |
| body | `text-lg` lead, `text-[1rem]` copy |

## Layout components (`components/ui`)
- `Section`: tone `light | concrete | dark`, padding scale, 88rem container. Sets `data-tone`, which `Eyebrow` and `Lead` read.
- `PageHero`: opening of every inner page. Dark, grid, optional drawing, transparent header over it (`data-hero`).
- `Type`: `Eyebrow`, `Display` (masked line entrance), `Lead`, `Accent`.
- `Field`: `TextField`, `AreaField` for dark forms.
- `Tag`: labels content as `representative` or `completed`.
- `WorkVisual`: drawing for representative examples, photo plus drawing when a real photo exists.
- `IronDrawing`: the line-drawing library (gate, railing, balcony, staircase, grill, architectural, custom and process shapes).
- `LegalPage`, `ServiceFooterNav`, `StartWithType`.

## Motion (`lib/motion.ts`, `components/motion`)
One easing everywhere: `cubic-bezier(0.16, 1, 0.3, 1)`, fast start and long settle.
- `Reveal` / `LineReveal`: entrances once, on first view.
- `MagneticButton`: pulls a few pixels toward a mouse pointer. Off for touch and reduced motion.
- `usePointerParallax`: writes `--px/--py`, no re-renders.
- Above-the-fold entrances are CSS (`.line-rise`, `.fade-up`) so text paints before JavaScript.
- Framer Motion loads through `LazyMotion` (`domAnimation`, strict).
- `prefers-reduced-motion`: travel is replaced by short fades everywhere.

## Rules
1. One primary focal point per viewport.
2. Square corners and hairlines. No cards-in-cards, no shadows except floating controls.
3. Never present a representative example as a completed project (`Tag`).
4. Contrast: small text on dark is at least 55% off-white; on light use `ink-secondary`, `ink-muted`, `accent-ink`.
5. Touch targets at least 44px on mobile.

## Catalogue (`components/catalogue`)
Reuses `PageHero`, `Section`, `Type`, `MagneticButton`, `Tag` and `IronDrawing`. Product names use the serif; the image leads each card.
`DesignVisual` (photo or drawing), `ProductCard`, `ProductGrid` (repeating editorial rhythm), `CategoryNavigation` (sticky, swipeable), `CatalogueBrowser`, `ProductGallery`, `ProductSpecifications`, `FinishSelector`, `RelatedProducts`, `CustomEnquiry`, `CataloguePdfLink`.
Every optional field renders only when real data exists. Drawing geometry lives in `components/ui/drawings.ts` (server-safe, also used by the share images).
