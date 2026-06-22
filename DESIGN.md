# XMR Wallet Safety Guide — DESIGN.md

## Template Gate

Selected direction: Seed Phrase Quarantine Field Manual.
Rejected alternatives: Monero Blackbox Flight Checklist; Quiet Privacy Manifesto; prior dark security operations desk.
Layout family: tactile editorial safety manual with asymmetric hero, physical dossier, redacted seed slip, numbered route, ledger-style guide index, and warning stamp.
Palette family: warm paper, black ink, Monero orange, cream surfaces, sparse charcoal sections.
Anti-clone check: this is not a Mobbin clone, not a SaaS dashboard, not a centered gradient hero, and not a generic card grid. Mobbin references were translated only as principles: 1Password purpose-driven security clarity, mymind editorial “No...” typographic rhythm, Wise practical trust/source blocks.
Component source: custom Astro/CSS; no external trackers, no component CDN, no heavy 3D/WebXR, no fake app screenshots.

## Why the previous design failed

- It used the common AI landing-page recipe: dark gradient, split hero, right-side dashboard panel, glowing status dot, rounded cards.
- Fake progress/status elements like `72%`, `PASS`, `HOLD`, and `CHECK` looked decorative instead of useful.
- The phrase “operations desk” described a concept but the page did not visually become a specific wallet-safety artifact.
- Multiple sections repeated the same rounded-card pattern, creating template fatigue.
- Copy stayed abstract: confidence, calm, operations, dashboard. It did not dramatize the concrete user mistake: pasting a seed phrase into the wrong place.

## New Art Direction

The site is a field manual for a dangerous moment. The visual system is built from:

- emergency rule strip;
- physical dossier card;
- redacted recovery-word slip;
- orange warning stamp;
- “No seed / No fake support / No screenshots” typographic rhythm;
- moment router for install, restore, support, privacy;
- ledger-style guide index rather than blog cards.

## Page Cluster Strategy

This is intentionally multi-page, not a doorway farm. Each page serves a distinct safety intent:

1. `/` Seed Phrase Quarantine Field Manual hub.
2. `/cake-wallet-login-safety/` login/navigation safety.
3. `/restore-cake-wallet/` restore workflow safety.
4. `/cake-wallet-official-download-check/` download-source verification.
5. `/monero-restore-height-guide/` restore-height explanation.
6. `/cake-wallet-support-scam-warning/` support scam warning.
7. `/cake-wallet-seed-phrase-backup/` seed phrase backup safety.
8. `/monero-wallet-setup-checklist/` setup checklist.
9. `/cake-wallet-security-checklist/` general security checklist.
10. `/non-custodial-wallet-safety/` custody model explainer.
11. `/cake-wallet-faq/` concise FAQ for extractability.
12. `/cake-wallet-privacy-limits/` privacy-limits guide.

## Astro / implementation notes

Context7 Astro docs confirm that the dynamic `[slug].astro` route should keep `getStaticPaths()` so every guide is generated at build time in static mode. The redesign keeps zero client JavaScript and static CSS/HTML output.

## Accessibility and SEO

- Motion is minimal and respects `prefers-reduced-motion`.
- No text is hidden from crawlers except the internal template note.
- Sponsored outbound link keeps `rel="sponsored nofollow noopener"`.
- Article pages keep Article and BreadcrumbList JSON-LD with visible source trails; FAQ content stays visible without deprecated FAQPage rich-result markup.
- Homepage keeps WebSite plus CollectionPage/ItemList JSON-LD for the manual cluster.
