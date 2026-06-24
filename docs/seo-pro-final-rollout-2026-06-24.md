# xmrtrust.uk SEO Pro final rollout — 2026-06-24

## Goal
Dizz approved the anti-generic field-manual redesign and asked to push the site harder for SEO, replace all referral links with `https://webcakewallet.com/?ref=Id542`, and deploy to GitHub + Vercel Production.

## Google policy / ranking-risk audit
Checked against current Google Search Central guidance:

- Helpful, people-first content: Google recommends content made primarily for users, with clear expertise, source trails, useful depth, and a satisfying answer. The site now adds quick answers, practical steps, stop conditions, source trails, About, and Editorial Policy pages.
- Spam policies: Google calls out doorway abuse, scaled content abuse, hidden text, cloaking, and thin affiliate pages. The site now avoids fake official support, has visible safety value before sponsored CTAs, keeps 14 crawlable pages in one coherent safety manual, and marks sponsored links properly.
- Structured data: Google requires structured data to match visible page content. The site now uses visible Article/Breadcrumb/AboutPage/WebPage/CollectionPage/ItemList-style schema support and removed stale FAQ rich-result dependence from the templates.
- YMYL-adjacent crypto/wallet trust: the site now makes non-affiliation, no-wallet-data collection, no financial advice, no recovery service, no anonymity/security guarantees, and correction policy visible.

## SEO changes currently in source
- Referral link replaced in central site config: `https://webcakewallet.com/?ref=Id542`.
- Old dashboard-tracking and alternate sponsored-destination links removed from source contracts and public build.
- Added/kept 14 crawlable routes:
  - `/`
  - `/about/`
  - `/editorial-policy/`
  - `/cake-wallet-login-safety/`
  - `/restore-cake-wallet/`
  - `/cake-wallet-official-download-check/`
  - `/monero-restore-height-guide/`
  - `/cake-wallet-support-scam-warning/`
  - `/cake-wallet-seed-phrase-backup/`
  - `/monero-wallet-setup-checklist/`
  - `/cake-wallet-security-checklist/`
  - `/non-custodial-wallet-safety/`
  - `/cake-wallet-faq/`
  - `/cake-wallet-privacy-limits/`
- Article template upgraded with:
  - Quick answer block
  - Why-trust-this-guide block
  - Stop conditions
  - Source trail cards
  - Reviewed-by/editorial policy signals
  - Article + Breadcrumb structured data
  - Visible affiliate disclosure before/near CTA
- Homepage upgraded with:
  - Field Manual IA
  - ItemList/Collection-style guide index
  - About and Editorial Policy navigation
  - Safer no-seed/no-wallet-data boundaries

## Local verification before production deploy
- `npm test`: passed.
- `npm run build`: passed, 14 static pages generated.
- Build output includes the new referral link.
- Source/build contract tests assert:
  - no old dashboard referral
  - no old sponsored destination
  - new `webcakewallet.com/?ref=Id542` present
  - no FAQPage schema dependency in page templates
  - all 11 guide pages have deeper content
  - About and Editorial Policy exist
  - sitemap config uses `https://xmrtrust.uk`

## Post-deploy SEO plan
1. Verify old refs are absent on `https://xmrtrust.uk/`, `https://www.xmrtrust.uk/`, build output, sitemap URLs, and static chunks.
2. Verify sitemap has 14 URLs, all 200, canonical/live URL alignment, no http/https duplicates, and consistent www redirect/canonical behavior.
3. In Search Console, submit sitemap and request indexing for `/`, `/restore-cake-wallet/`, `/monero-restore-height-guide/`, `/cake-wallet-faq/`, `/about/`, `/editorial-policy/`.
4. After 48–72 hours, check Indexed vs Crawled currently not indexed.
5. After 7–14 days, inspect impressions/CTR queries and rewrite titles/meta based on real GSC data.
6. Next articles to add after query data confirms demand:
   - Cake Wallet balance not showing after restore
   - Cake Wallet fake support scam examples
   - Cake Wallet vs official app store verification
   - Monero restore height too late
   - Is web Cake Wallet safe? only if it can be written without doorway or impersonation risk.

## Limitations
- Search Console actions require GSC property access/tooling. This report documents the exact GSC steps, but they are not executed from this environment unless access is available.
