# xmrtrust.uk SEO Pro hardening report — 2026-06-22

## Why the site was weak in search

The live index check showed Google already knows several URLs, but the snippets were from the older/thinner version. The main risk was not basic crawlability; the larger risk was quality/trust for a YMYL-adjacent crypto-wallet safety site.

1. Some guide routes were thin: direct answer + checklist + repeated related links, not enough original practical depth.
2. The site has a sponsored CTA, so thin-affiliate risk needed to be reduced with stronger standalone value before any outbound click.
3. Wallet safety and crypto recovery are sensitive topics; Google’s helpful-content guidance expects clearer sourcing, trust, site background, and people-first usefulness.
4. Google spam policies call out doorway abuse, scaled-content abuse, hidden text, cloaking, misleading affiliate/link patterns, and thin affiliation; the site needed explicit guards against those signals.
5. FAQPage rich results were removed from Google Search in 2026, so FAQPage JSON-LD was not a useful SEO tactic. Visible FAQs remain; deprecated rich-result markup was removed.

## Google policy checks used

- Google Spam Policies for Web Search, last updated 2026-05-15: spam policies apply to Search visibility and generative AI responses; violations can lower ranking or remove pages.
- Google Helpful, Reliable, People-First Content guidance: original practical usefulness, clear sourcing, trust, no SEO-first stuffing, no artificial word-count strategy.
- Google Search documentation updates: FAQ rich result documentation removed in June 2026 because FAQ rich results no longer appear in Google Search.

## Implemented SEO upgrades

- Replaced sponsored CTA destination with the approved new referral link: `https://webcakewallet.com/?ref=Id542`.
- Removed the old dashboard-tracking and alternate sponsored-destination links from public source and built output.
- Added `src/data/seoExtras.js` with editorial policy, source trail, per-page quick answers, stop signals, and deeper practical sections.
- Expanded all 11 guide routes into stronger field-manual entries with:
  - quick-answer bullets;
  - trust/E-E-A-T panel;
  - source trail cards;
  - stop conditions;
  - richer practical notes;
  - visible editorial/review status;
  - preserved CTA disclosure and sponsored rel.
- Added `/about/` for site purpose, non-affiliation, source boundaries, and no-wallet-data policy.
- Added `/editorial-policy/` for review standards, source policy, affiliate disclosure, correction policy, and safety boundaries.
- Added visible Google Search Central policy sources to the source trail.
- Replaced FAQPage JSON-LD with more current schema:
  - homepage: `WebSite` + `CollectionPage` with `ItemList`;
  - articles: `Article` + `BreadcrumbList`, with `reviewedBy`, `citation`, `isPartOf`, and visible matching content;
  - About page: `AboutPage`;
  - Editorial policy: `WebPage`.
- Sitemap now has 14 URLs: homepage, 11 guides, about, editorial policy.
- Updated tests to enforce new referral link, no old referral domains, no deprecated FAQPage schema, no internal/Dizz attribution leakage, and no dangerous guarantee/risk-free claims.

## Verification

- `npm test` passed: `xmrtrust SEO Pro content and policy tests passed`.
- `npm run build` passed: Astro built 14 pages.
- Built-output check passed: new referral link present on CTA pages; old referral domains absent; FAQPage absent; sitemap has 14 URLs.
- Local HTTP smoke passed for `/`, `/about/`, `/editorial-policy/`, `/cake-wallet-login-safety/`, `/cake-wallet-privacy-limits/`, robots/sitemaps/OG/favicon.
- Local Chrome QA passed:
  - homepage 360px: no overflow, new ref present, old ref absent, FAQPage absent, JSON-LD WebSite + CollectionPage;
  - homepage 1440px: no overflow, 11 manual rows, about/editorial links present;
  - article page: canonical correct, Article + BreadcrumbList JSON-LD, 3 source cards, 4 trust cards, sponsored rel correct, no console errors.

## Production deploy

- Deployed to Vercel production.
- Live URL: https://xmrtrust.uk/
- Deployment URL: https://xmr-wallet-trust-cinema-ovh08n9s2-dizz-seo-labs.vercel.app

## Production smoke

- `/` 200; new referral link present; old referral links absent; FAQPage absent.
- `/about/` 200.
- `/editorial-policy/` 200.
- `/cake-wallet-login-safety/` 200; new referral link present; old referral links absent; FAQPage absent.
- `/cake-wallet-privacy-limits/` 200; new referral link present; old referral links absent; FAQPage absent.
- `/robots.txt`, `/sitemap.xml`, `/sitemap-index.xml`, `/sitemap-0.xml`, `/og-image.svg`, `/favicon.svg` all 200.
- `/sitemap-0.xml` has 14 URLs and includes `/about/` plus `/editorial-policy/`.
- Production Chrome QA passed:
  - homepage 360px and 1440px: no horizontal overflow;
  - homepage JSON-LD: `WebSite`, `CollectionPage`;
  - article JSON-LD: `Article`, `BreadcrumbList`;
  - article source/trust cards visible;
  - sponsored link rel `sponsored nofollow noopener`;
  - console empty; network document/CSS 200 and manifest 304.

## GitHub

Created and pushed source repository: https://github.com/dizz-seo-labs/xmr-wallet-trust-cinema

Commit: `78214d1 feat: harden xmrtrust SEO field manual`

Build artifacts, `.vercel`, `node_modules`, local QA logs, and screenshots are ignored.

## Not done

- No DNS changes.
- No GSC URL Inspection or sitemap submission.
- No IndexNow.
