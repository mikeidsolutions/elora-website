import puppeteer from 'puppeteer';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(root, 'temporary screenshots');

const [, , url, label, widthArg] = process.argv;

if (!url) {
  console.error('Usage: node screenshot.mjs <url> [label] [width]');
  process.exit(1);
}

const viewportWidth = widthArg ? parseInt(widthArg, 10) : 1440;
const viewportHeight = viewportWidth < 500 ? 844 : 900;

fs.mkdirSync(outDir, { recursive: true });

const existing = fs.readdirSync(outDir)
  .map((f) => {
    const m = f.match(/^screenshot-(\d+)/);
    return m ? parseInt(m[1], 10) : 0;
  });
const n = (existing.length ? Math.max(...existing) : 0) + 1;

const fileName = label ? `screenshot-${n}-${label}.png` : `screenshot-${n}.png`;
const outPath = path.join(outDir, fileName);

const browser = await puppeteer.launch();
try {
  const page = await browser.newPage();
  await page.setViewport({ width: viewportWidth, height: viewportHeight });
  await page.goto(url, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: outPath, fullPage: true });
  console.log(`Saved ${outPath}`);
} finally {
  await browser.close();
}
