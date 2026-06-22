import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { pageCluster, SITE } from '../src/data/pages.js';
import { pageDepth, coreSources, editorial } from '../src/data/seoExtras.js';

const forbiddenClaims = [
  'guaranteed anonymity',
  'bypass KYC',
  '100% private',
  'official Cake Wallet site',
  'Dizz SEO Labs',
  'doorway garbage',
  'Maximum intent',
  'SERP',
  'Google and AI agents',
  'one giant soup',
  'risk-free',
  'guaranteed recovery'
];

const indexPath = new URL('../src/pages/index.astro', import.meta.url);
const slugPath = new URL('../src/pages/[slug].astro', import.meta.url);
const aboutPath = new URL('../src/pages/about.astro', import.meta.url);
const editorialPath = new URL('../src/pages/editorial-policy.astro', import.meta.url);
const designPath = new URL('../DESIGN.md', import.meta.url);
const configPath = new URL('../astro.config.mjs', import.meta.url);
for (const path of [indexPath, slugPath, aboutPath, editorialPath, designPath, configPath]) assert.equal(existsSync(path), true, `${path.pathname} should exist`);
const index = readFileSync(indexPath, 'utf8');
const slug = readFileSync(slugPath, 'utf8');
const about = readFileSync(aboutPath, 'utf8');
const editorialPage = readFileSync(editorialPath, 'utf8');
const design = readFileSync(designPath, 'utf8');
const config = readFileSync(configPath, 'utf8');

assert.equal(pageCluster.length, 11, 'cluster should contain 11 supporting pages after the SEO expansion');
assert.equal(Object.keys(pageDepth).length, pageCluster.length, 'every guide should have depth content');
assert.ok(coreSources.length >= 4, 'visible source trail should contain multiple sources');
assert.ok(editorial.policy.includes('financial advice'), 'editorial policy should disclose no financial advice');
assert.equal(SITE.referralUrl, 'https://webcakewallet.com/?ref=Id542', 'approved sponsored CTA URL should be embedded');
assert.equal(SITE.referralDestination, 'https://webcakewallet.com/?ref=Id542', 'approved sponsored campaign destination should remain explicit');
assert.equal(SITE.url, 'https://xmrtrust.uk', 'custom-domain canonical host should be explicit');

for (const page of pageCluster) {
  assert.ok(page.slug && page.title && page.description && page.directAnswer, `page contract should be complete for ${page.slug}`);
  assert.ok(page.directAnswer.length >= 140, `direct answer should be substantive for ${page.slug}`);
  assert.ok(pageDepth[page.slug]?.sections?.length >= 4, `guide should have at least four practical sections: ${page.slug}`);
  assert.ok(pageDepth[page.slug]?.summary?.length >= 3, `guide should have quick-answer bullets: ${page.slug}`);
}

for (const needle of [
  'Cake Wallet Safety Field Manual',
  'Do not let a rushed wallet moment become a',
  'seed on websites',
  'Seed Phrase Quarantine',
  'If you are here because',
  'Manual entries, not generic blog cards.',
  'CollectionPage',
  'ItemList',
  'reviewedBy',
  'Editorial policy',
  'Continue to Cake Wallet',
  'rel="sponsored nofollow noopener"'
]) assert.ok(index.includes(needle), `index should include ${needle}`);

for (const needle of [
  'getStaticPaths',
  'Article',
  'BreadcrumbList',
  'reviewedBy',
  'citation',
  'og:image',
  'Quick answer',
  'Why trust this guide',
  'Source trail',
  'Stop conditions',
  'Back to field manual',
  'Continue to Cake Wallet',
  'rel="sponsored nofollow noopener"'
]) assert.ok(slug.includes(needle), `slug page should include ${needle}`);

for (const needle of ['AboutPage', 'Does not collect wallet data', 'Public source trail']) assert.ok(about.includes(needle), `about page should include ${needle}`);
for (const needle of ['Editorial policy', 'Review standards', 'Affiliate and sponsored links', 'Correction policy']) assert.ok(editorialPage.includes(needle), `editorial page should include ${needle}`);
for (const needle of ['Selected direction: Seed Phrase Quarantine Field Manual', 'Rejected alternatives:', 'Anti-clone check:', 'Component source: custom Astro/CSS']) {
  assert.ok(design.includes(needle), `DESIGN.md should include ${needle}`);
}
assert.ok(!index.includes('FAQPage'), 'homepage should not mark up deprecated FAQ rich-result schema');
assert.ok(!slug.includes('FAQPage'), 'article template should not mark up deprecated FAQ rich-result schema');
assert.ok(config.includes('@astrojs/sitemap'), 'sitemap integration should be configured');
assert.ok(config.includes('https://xmrtrust.uk'), 'Astro site config should use custom domain');
const robots = readFileSync(new URL('../public/robots.txt', import.meta.url), 'utf8');
const sitemapAlias = readFileSync(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
const manifest = readFileSync(new URL('../public/site.webmanifest', import.meta.url), 'utf8');
assert.ok(robots.includes('https://xmrtrust.uk/sitemap-index.xml'), 'robots should point at custom-domain sitemap');
assert.ok(sitemapAlias.includes('https://xmrtrust.uk/sitemap-0.xml'), 'sitemap.xml alias should point at generated sitemap');
assert.ok(manifest.includes('XMR Wallet Safety Guide'), 'manifest should use public brand, not internal codename');

const publicDataCopy = pageCluster.map((p) => [p.slug, p.title, p.description, p.intent, p.directAnswer, p.scene, ...p.checks, ...p.faqs.flat()].join(' ')).join(' ');
const depthCopy = JSON.stringify({ pageDepth, coreSources, editorial });
const publicCopy = [index, slug, about, editorialPage, publicDataCopy, depthCopy, JSON.stringify(SITE)].join('\n');
assert.ok(!/[А-Яа-яЁё]/.test(publicCopy), 'public source copy must not contain Cyrillic text');
for (const forbidden of forbiddenClaims) assert.ok(!publicCopy.toLowerCase().includes(forbidden.toLowerCase()), `forbidden/internal claim should be absent: ${forbidden}`);
for (const internal of ['Variant C', 'Search architecture', 'SEO work', 'takes more search real estate', 'crawlable substance', 'doorway garbage', 'Maximum intent', 'Google and AI agents', 'one giant soup', 'Intent:', 'XMR Trust Cinema', 'XMR Wallet Trust Cinema']) {
  assert.ok(!publicCopy.includes(internal), `public copy should not expose internal production phrasing: ${internal}`);
}
assert.ok(!publicCopy.includes('dizz-seo-lab-dashboard'), 'old dashboard referral link should be removed from public source');
assert.ok(!publicCopy.includes('cakewallet.cam'), 'old sponsored destination should be removed from public source');
assert.ok(publicCopy.includes('webcakewallet.com/?ref=Id542'), 'new sponsored referral link should be present');
console.log('xmrtrust SEO Pro content and policy tests passed');
