import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const SRC = path.resolve('src/assets');
const OUT = path.resolve('public/optimized');

async function ensure(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function processImage(file) {
  const input = path.join(SRC, file);
  const basename = path.parse(file).name;
  const outDir = path.join(OUT);
  await ensure(outDir);
  const img = sharp(input).resize({ width: 1600, withoutEnlargement: true });
  await img.avif({ quality: 55 }).toFile(path.join(outDir, `${basename}.avif`));
  await img.webp({ quality: 70 }).toFile(path.join(outDir, `${basename}.webp`));
}

async function run() {
  await ensure(OUT);
  const files = await fs.promises.readdir(SRC);
  const targets = files.filter(f => /\.(png|jpg|jpeg)$/i.test(f));
  for (const f of targets) {
    // eslint-disable-next-line no-console
    console.log('Optimizing', f);
    await processImage(f);
  }
}

run().catch((e) => { console.error(e); process.exit(1); });


