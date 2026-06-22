# xmrtrust.uk design rescue plan — 2026-06-22

## Tool plan
Active: Mobbin MCP for visual references, SEO Pro read-only audit, local Astro refactor, local build/test/browser QA. Inactive: DNS/GSC/IndexNow, production deploy, paid APIs, CMS writes.

## Baseline
Live site is a static Astro Cake Wallet / Monero safety hub at https://xmrtrust.uk/. It is indexable, has sitemap-index and sitemap alias, but `/og-image.svg` returns 404 and the current visual direction is Apple-style cinema with weak utility density for safety searches.

## Mobbin references used
- Vanta footer/mega-navigation: dense trust footer, compliance badges, dark purple trust surface.
- Twingate footer/landing: black security SaaS shell, top announcement strip, operational footer columns, system-status cue.
- Better Stack/Vanta dashboard screen: dark operations UI, incident/status rows, checklist progress panel, compact left-navigation rhythm.

## Art direction
Selected direction: Monero wallet safety operations desk. Dark obsidian/purple base, electric blue and Monero orange accents, compact verification/status components, source-trail cards, and a dense trust footer. The site should feel like a practical pre-flight desk, not a generic crypto landing page or fake official wallet UI.

## IA/component plan
- Header: top safety strip, sticky nav, primary CTA secondary to guide reading.
- Homepage: hero + operations panel, source verification dock, cluster cards, step-by-step safety routine, source/reviewer trust section, FAQ, dense footer.
- Article template: article hero, metadata/review strip, safety checks, expanded practical sections, next links, official-source rail, FAQ, related cluster.
- SEO: add one new crawlable guide `/cake-wallet-privacy-limits/`; keep Article/FAQ/Breadcrumb schema and internal links.

## QA plan
Run `npm test`, `npm run build`, static smoke over generated routes/assets, responsive browser checks at 360/768/1024/1440, and console/network inspection. No deploy without explicit approval.
