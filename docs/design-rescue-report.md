# xmrtrust.uk design rescue report — 2026-06-22

## Scope completed locally
- Rebuilt homepage from Apple-style cinema into a dark security-operations desk inspired by Mobbin references: Vanta footer density, Twingate dark security shell/footer, Better Stack incident/checklist dashboard.
- Added project guardrails in `AGENTS.md` for independent/non-official crypto wallet safety boundaries.
- Added a new SEO guide: `/cake-wallet-privacy-limits/` with Article, FAQPage, and BreadcrumbList structured data.
- Updated article template to reduce thin-page risk: metadata strip, reviewed date, practical safety sections, official-source trail, next safety links, related pages, and safer CTA/disclosure placement.
- Added `/og-image.svg` alias so the OG-image route no longer 404s in the built static artifact.
- Updated tests and design documentation for the new operations-desk direction.

## Files changed
- `AGENTS.md`
- `DESIGN.md`
- `docs/design-rescue-plan.md`
- `docs/design-rescue-report.md`
- `src/pages/index.astro`
- `src/pages/[slug].astro`
- `src/data/pages.js`
- `public/og-image.svg`
- `tests/site-content.test.mjs`
- QA screenshots: `docs/home-desktop-1440.png`, `docs/home-mobile-360.png`, `docs/privacy-guide-mobile-360.png`

## Verification
- `npm test` passed: xmrtrust security-operations design and SEO cluster tests passed.
- `npm run build` passed: Astro built 12 pages, including `/cake-wallet-privacy-limits/`.
- Static HTTP smoke passed locally for `/`, `/cake-wallet-privacy-limits/`, `/cake-wallet-login-safety/`, `/restore-cake-wallet/`, `robots.txt`, `sitemap.xml`, `sitemap-index.xml`, `sitemap-0.xml`, `favicon.svg`, `og-image.svg`, and `og-wallet-safety.svg`.
- Chrome DevTools QA passed on local build: no console messages on the new guide, no horizontal overflow at 360/768/1024/1440, homepage and article CTAs visible, article canonical is `https://xmrtrust.uk/cake-wallet-privacy-limits/`, JSON-LD count is 3 on the article.
- Safety smoke passed for checked pages: no `Dizz SEO Labs`, `Google and AI agents`, `official Cake Wallet site`, `guaranteed anonymity`, `bypass KYC`, or `100% private` in tested built output.

## Not done
- No production deploy, DNS, GSC, IndexNow, or dashboard link changes were performed. Approval needed before publishing.
