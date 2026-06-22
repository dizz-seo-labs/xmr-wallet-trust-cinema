# xmrtrust.uk anti-generic redesign diagnosis — 2026-06-22

## Why the live result looked generic
1. Layout: default SaaS split hero, gradient background, right-side dashboard card, repeated card grids.
2. Copy: phrases like “operations desk”, “with more confidence”, and “calm by design” sounded like generic AI product copy rather than a wallet-safety artifact.
3. Sections: source cards, guide cards, routine cards, proof cards all used the same rounded-card pattern, so the page felt assembled from common components.
4. Visual choices: purple/orange gradients, glowing status dot, fake 72% progress, PASS/HOLD/CHECK badges, and diamond logo looked arbitrary.
5. Business purpose: the page said “safety” but did not visually embody the exact anxiety: a user about to paste a seed, install a fake app, or DM “support”.
6. Interactions: sticky nav and hover cards were harmless, but no interaction helped the user make a safer decision.

## Three art directions considered

### 1. Seed Phrase Quarantine Field Manual — selected
A tactile editorial/manual interface: cream paper, black ink, Monero orange warning stamps, redacted seed strips, route cards for “install / restore / support / privacy”. It looks like a physical safety sheet rather than a SaaS product. Strongest because it turns the site’s core rule — never type a seed into a website — into the visual system.

### 2. Monero Blackbox Flight Checklist
A cockpit/pre-flight checklist with technical panels, but stripped of fake metrics. Strong for process, weaker because it can still drift into dashboard clichés.

### 3. Quiet Privacy Manifesto
A minimal mymind-style editorial page with “No seed / No fake support / No screenshots” typography and huge whitespace. Beautiful, but less useful for SEO clusters and guide navigation.

## Chosen IA
- Top emergency rule: no seed phrase on websites.
- Hero as field manual, not product promise.
- “If you are here because…” moment router.
- Four-step safe route: source, device, restore context, small test.
- Guide library as numbered manual entries, not cards.
- Source ladder and stop conditions.
- Dense footer with only useful guide links.

## Component plan
- Static Astro pages; keep `getStaticPaths()` for guide pages per Context7 Astro docs.
- Zero client JS; CSS-only details/links.
- Homepage components: rule strip, manual hero, redacted seed slip, moment router, numbered route, guide ledger, source ladder, stop panel, footer.
- Article components: case-file hero, emergency rule strip, checklist, body sections, source trail, next-guide links, FAQ.

## QA plan
- `npm test`, `npm run build`.
- HTTP smoke for core pages/assets/sitemaps.
- CloakBrowser visual + screenshot inspection.
- Chrome DevTools responsive checks 360/768/1024/1440, console/network, metadata/schema checks.
- Deploy only if gates pass and preserve no DNS/GSC/IndexNow changes.
