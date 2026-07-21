/**
 * Exports regulamin and polityka-prywatnosci as PDFs from the live site.
 * PDFs are saved to docs/ at the project root.
 *
 * Run: npm run export-pdfs
 */

import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const OUT   = join(__dir, '../docs');

const PAGES = [
  { url: 'https://dziadekkomodor.pl/regulamin',             file: 'regulamin.pdf' },
  { url: 'https://dziadekkomodor.pl/polityka-prywatnosci',  file: 'polityka-prywatnosci.pdf' },
];

mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page    = await browser.newPage();

for (const { url, file } of PAGES) {
  console.log(`📄  ${url}`);
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30_000 });
  await page.pdf({
    path: join(OUT, file),
    format: 'A4',
    margin: { top: '20mm', bottom: '20mm', left: '20mm', right: '20mm' },
    printBackground: false,
  });
  console.log(`    ✅  docs/${file}`);
}

await browser.close();
console.log('\nDone. PDFs are in the docs/ folder.');
