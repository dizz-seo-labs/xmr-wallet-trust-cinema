# xmrtrust.uk anti-generic production deploy smoke — 2026-06-22

## Deploy
- Production redeploy completed after anti-generic redesign.
- Live URL: https://xmrtrust.uk/
- Vercel deployment URL: https://xmr-wallet-trust-cinema-h1b3f6x6s-dizz-seo-labs.vercel.app
- Raw deployment URL may be protected; custom domain is public.

## Live HTTP smoke
- `/` 200; contains `Seed Phrase Quarantine`; old `operations desk` copy absent; new H1 present.
- `/cake-wallet-privacy-limits/` 200; canonical present; 3 JSON-LD blocks.
- `/robots.txt` 200.
- `/sitemap.xml` 200.
- `/sitemap-index.xml` 200.
- `/sitemap-0.xml` 200; 12 URLs; includes privacy-limits route.
- `/og-image.svg` 200.

## Live browser QA
- CloakBrowser loaded production homepage and confirmed the new field-manual IA/text is visible.
- Chrome DevTools homepage: 360 and 1440 widths have no horizontal overflow; 11 manual rows; 2 homepage JSON-LD blocks.
- Chrome DevTools article page `/cake-wallet-privacy-limits/`: title/H1 correct, canonical `https://xmrtrust.uk/cake-wallet-privacy-limits/`, 3 JSON-LD blocks, sponsored CTA rel `sponsored nofollow noopener`, no horizontal overflow.
- Console on article page: no console messages.
- Network on article page: document 200, CSS 200, manifest 304.

## Notes
- Context7 was used for Astro static route confirmation.
- CloakBrowser was used for live/local visual inspection.
- No DNS, GSC, IndexNow, paid API, backend, or tracking changes were made.
- Project folder is not a git repository, so no GitHub commit/push was performed.
