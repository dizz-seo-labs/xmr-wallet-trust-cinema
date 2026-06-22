# xmrtrust.uk anti-generic redesign report — 2026-06-22

## User feedback addressed
The previous live design looked like a generated AI/SaaS template. I stopped that direction and rebuilt the site around a concrete visual metaphor: `Seed Phrase Quarantine Field Manual`.

## Diagnosis of the previous version
- Generic split hero: big text left, dashboard widget right.
- Generic dark gradient background and repeated rounded cards.
- Fake product-dashboard signals: `72%`, `PASS`, `HOLD`, `CHECK` looked decorative.
- Generic copy: “operations desk”, “with more confidence”, “calm by design”.
- Weak business logic: the design did not embody the actual dangerous moment — a user about to paste seed words or trust fake support.

## Tools and references used
- Context7: Astro docs confirmed static dynamic guide routes should keep `getStaticPaths()` for SSG output.
- CloakBrowser: inspected the current live page and the revised local page visually.
- Mobbin: used only as pattern inspiration, not copying: 1Password security clarity, mymind editorial `No...` rhythm, Wise practical trust blocks.
- Chrome DevTools: responsive, console, network, metadata checks.

## New direction selected
`Seed Phrase Quarantine Field Manual`: warm paper, black ink, Monero orange warning stamp, redacted seed slip, tactile dossier, moment router, numbered safe route, ledger-style guide index.

## Implemented locally
- Rebuilt homepage in `src/pages/index.astro`.
- Rebuilt article template in `src/pages/[slug].astro`.
- Updated `DESIGN.md` with the anti-generic diagnosis and new art direction.
- Added `docs/anti-generic-redesign-plan-2026-06-22.md`.
- Updated tests in `tests/site-content.test.mjs`.
- Preserved canonical host, sitemap, JSON-LD, guide routes, no-seed boundaries, and sponsored `rel="sponsored nofollow noopener"`.

## Local verification
- `npm test` passed: `xmrtrust seed-phrase field-manual redesign tests passed`.
- `npm run build` passed: Astro built 12 pages.
- Local HTTP smoke passed for `/`, `/cake-wallet-privacy-limits/`, `/robots.txt`, `/sitemap-0.xml`, `/og-image.svg`.
- CloakBrowser visual pass: revised homepage no longer reads as generic dashboard/SaaS; the field-manual metaphor is visible above the fold.
- Chrome DevTools: 360/768/1024/1440 no horizontal overflow.
- New guide metadata: canonical correct, 3 JSON-LD blocks, sponsored rel correct.
- Console on local new guide: no messages. Network: document 200, CSS 200, manifest 304.

## QA screenshots
- `docs/field-manual-desktop-1440.png`
- `docs/field-manual-mobile-360.png`
