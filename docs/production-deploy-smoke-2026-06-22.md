# xmrtrust.uk production deploy smoke — 2026-06-22

## Deploy
- Approved production deploy completed with Vercel prebuilt production flow.
- Vercel project: `xmr-wallet-trust-cinema` under `dizz-seo-labs`.
- Live custom domain: https://xmrtrust.uk/
- Vercel production deployment URL returned by CLI: https://xmr-wallet-trust-cinema-1syh10uxr-dizz-seo-labs.vercel.app
- Note: raw Vercel deployment URL returns 401 due deployment protection; custom domain is public and healthy.

## Pre-deploy gates
- `npm test` passed.
- `npm run build` passed locally.
- `vercel build --prod` passed and built 12 static pages.

## Live HTTP smoke
- `/` 200, new operations-desk homepage visible.
- `/cake-wallet-privacy-limits/` 200, title and canonical present.
- `/cake-wallet-login-safety/` 200.
- `/restore-cake-wallet/` 200.
- `/robots.txt` 200 and references `https://xmrtrust.uk/sitemap-index.xml`.
- `/sitemap.xml` 200.
- `/sitemap-index.xml` 200.
- `/sitemap-0.xml` 200 and includes `https://xmrtrust.uk/cake-wallet-privacy-limits/`; 12 URLs total.
- `/favicon.svg` 200.
- `/og-image.svg` 200.
- `/og-wallet-safety.svg` 200.
- `https://www.xmrtrust.uk/` 200.

## Live browser QA
- Homepage checked at 1440, 1024, 768, and 360 widths: no horizontal overflow.
- Mobile 360 homepage has visible CTAs: `Continue safely`, `Read the safety guides`, `Continue to Cake Wallet`.
- New `/cake-wallet-privacy-limits/` page: H1/title match, canonical is `https://xmrtrust.uk/cake-wallet-privacy-limits/`, 3 JSON-LD blocks, sponsored CTA rel is `sponsored nofollow noopener`.
- Chrome DevTools console on the new guide: no console messages found.
- Network on the new guide: document 200, CSS 200, manifest 304.

## Non-actions
- DNS was not changed.
- GSC and IndexNow were not touched.
- GitHub push/commit was not performed.
- No secrets were printed; `vercel pull` updated local `.vercel/.env.production.local` as expected.
