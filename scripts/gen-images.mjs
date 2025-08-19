import fs from 'fs';
import path from 'path';

const SRC = path.resolve('src/assets');
const OUT = path.resolve('public/optimized');

async function main() {
  if (process.env.CI || process.env.SKIP_IMAGE_GEN) {
    console.log('[gen-images] Skipping image generation on CI');
    return;
  }
  let sharp;
  try {
    sharp = (await import('sharp')).default;
  } catch (err) {
    console.warn('[gen-images] sharp not available, skipping.');
    return;
  }

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

  try {
    await ensure(OUT);
    const files = await fs.promises.readdir(SRC);
    const targets = files.filter(f => /\.(png|jpg|jpeg)$/i.test(f));
    for (const f of targets) {
      console.log('[gen-images] Optimizing', f);
      await processImage(f);
    }
  } catch (e) {
    console.warn('[gen-images] Failed, but continuing build:', e?.message || e);
  }
}

main();


