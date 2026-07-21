/**
 * Scrapes Google Maps reviews for the business listing and saves 4+ star reviews
 * to src/data/reviews.json for static display on /opinie.
 *
 * Setup:
 *   1. Set GOOGLE_MAPS_URL env var to your full Google Maps listing URL
 *      (the URL you see when you open your business on maps.google.com)
 *      e.g. https://www.google.com/maps/place/Dziadek+Komodor/@...
 *   2. Run: npx playwright install --with-deps chromium  (one-time setup)
 *   3. Run: npm run fetch-reviews
 *
 * If selectors break after a Google Maps redesign:
 *   - Open the Maps listing in DevTools
 *   - Find the review container (look for data-review-id attribute)
 *   - Find the star element (look for role="img" with aria-label containing a number)
 *   - Update SELECTORS below
 */

import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const OUT   = join(__dir, '../src/data/reviews.json');

const MAPS_URL  = process.env.GOOGLE_MAPS_URL
  || 'https://www.google.com/maps/place/Dziadek+Komodor/@53.1958953,17.1981741,17z/data=!4m15!1m8!3m7!1s0x4703bf25becd5863:0x5e70f382ddbdef16!2sDziadek+Komodor!8m2!3d53.1959414!4d17.198368!10e1!16s%2Fg%2F11zd36jjy6!3m5!1s0x4703bf25becd5863:0x5e70f382ddbdef16!8m2!3d53.1959414!4d17.198368!16s%2Fg%2F11zd36jjy6?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D';
const MIN_STARS = 4;

// ponytail: selector-based — update these if Google redesigns Maps HTML
const SELECTORS = {
  consent:   'button[aria-label*="Zaakceptuj"], button[aria-label*="Accept all"], form[action*="consent"] button',
  reviewsTab:'button[data-tab-index="1"], [role="tab"][aria-label*="Opinie"], [role="tab"][aria-label*="Reviews"]',
  feed:      '[role="feed"], .m6QErb[aria-label], .m6QErb[tabindex]',
  moreBtn:   'button[aria-label*="Więcej"], button[aria-label*="See more"], button[jsaction*="pane.review.expandReview"]',
  container: '[data-review-id]',
  rating:    '[role="img"][aria-label]',
  author:    '.d4r55, button[jsaction*="reviewer"], a[href*="contrib"]',
  photo:     'img.NBa7we, img[src*="googleusercontent"][width="45"], img[src*="googleusercontent"][width="40"]',
  text:      '.wiI7pd, [data-expandable-section] span:last-child, .MyEned + div span',
  date:      '.rsqaWe, span[aria-label*="temu"], span[aria-label*="ago"]',
};


async function run() {
  console.log('🔍  Opening browser…');
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    locale: 'pl-PL',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 900 },
  });
  const page = await ctx.newPage();

  try {
    console.log('🌐  Navigating to listing…');
    await page.goto(MAPS_URL, { waitUntil: 'domcontentloaded', timeout: 30_000 });
    await page.waitForTimeout(2000);

    // Dismiss EU consent banner if shown
    const consent = page.locator(SELECTORS.consent).first();
    if (await consent.isVisible({ timeout: 4000 }).catch(() => false)) {
      await consent.click();
      await page.waitForTimeout(1000);
    }

    // Click Reviews tab
    const tab = page.locator(SELECTORS.reviewsTab).first();
    if (await tab.isVisible({ timeout: 5000 }).catch(() => false)) {
      await tab.click();
      await page.waitForTimeout(2000);
    }

    // Sort by newest so we always pick up fresh reviews
    const sortBtn = page.locator('button[aria-label*="Sortuj"], button[data-value*="sort"], [aria-label*="Sort"]').first();
    if (await sortBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
      await sortBtn.click();
      await page.waitForTimeout(500);
      const newestOpt = page.locator('[role="menuitemradio"][aria-label*="Najnow"], [role="option"][aria-label*="Najnow"], [role="menuitemradio"][aria-label*="Newest"]').first();
      if (await newestOpt.isVisible({ timeout: 2000 }).catch(() => false)) {
        await newestOpt.click();
        await page.waitForTimeout(1500);
      }
    }

    // Scroll the feed to load more reviews (up to ~40)
    const feed = page.locator(SELECTORS.feed).first();
    for (let i = 0; i < 10; i++) {
      const scrolled = await feed.evaluate(el => {
        el.scrollTop += 1500;
        return el.scrollHeight > 0;
      }).catch(() => false);
      if (!scrolled) await page.evaluate(() => window.scrollBy(0, 1500));
      await page.waitForTimeout(700);
    }

    // Expand truncated reviews
    const moreBtns = page.locator(SELECTORS.moreBtn);
    for (const btn of await moreBtns.all()) {
      await btn.click().catch(() => {});
      await page.waitForTimeout(80);
    }

    // Extract
    const raw = await page.evaluate(({ sel, minStars }) => {
      const results = [];
      const containers = document.querySelectorAll(sel.container);

      for (const el of containers) {
        // Rating
        const ratingEl = el.querySelector(sel.rating);
        const ratingLabel = ratingEl?.getAttribute('aria-label') || '';
        const ratingMatch = ratingLabel.match(/(\d+)/);
        const rating = ratingMatch ? parseInt(ratingMatch[1]) : 0;
        if (rating < minStars) continue;

        // Author
        const authorEl = el.querySelector(sel.author);
        const author = authorEl?.textContent?.trim() || '';
        if (!author) continue;

        // Profile photo
        const photoEl = el.querySelector(sel.photo);
        const photoUrl = photoEl?.src || null;

        // Review text
        const textEl = el.querySelector(sel.text);
        const text = textEl?.innerText?.trim() || textEl?.textContent?.trim() || '';

        // Date
        const dateEl = el.querySelector(sel.date);
        const date = dateEl?.getAttribute('aria-label') || dateEl?.textContent?.trim() || '';

        results.push({ author, rating, text, photoUrl, date });
      }
      return results;
    }, { sel: SELECTORS, minStars: MIN_STARS });

    if (raw.length === 0) {
      console.warn('⚠️   No reviews found — selectors may have changed or the page blocked the scrape.');
      console.warn('    Existing reviews.json is unchanged.');
      console.warn('    To fix: open the Maps listing in DevTools and update SELECTORS in this script.');
      process.exit(0);
    }

    writeFileSync(OUT, JSON.stringify({ fetchedAt: new Date().toISOString(), reviews: raw }, null, 2), 'utf8');
    console.log(`✅  Saved ${raw.length} reviews (${MIN_STARS}+ ★ only) → src/data/reviews.json`);

  } catch (err) {
    console.error('❌  Scrape failed:', err.message);
    console.error('    Existing reviews.json is unchanged.');
    process.exit(1);
  } finally {
    await browser.close();
  }
}

run();
