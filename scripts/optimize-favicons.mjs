/**
 * Builds src/app/icon.png (32×32) and apple-icon.png (180×180) from
 * src/app/favicon-source.png (preferred) or falls back to existing icon.png.
 * Lighter tile + brighter mark so the favicon reads on dark browser chrome.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const appDir = path.join(process.cwd(), "src", "app");
const preferred = path.join(appDir, "favicon-source.png");
const fallback = path.join(appDir, "icon.png");

const sourcePath = fs.existsSync(preferred) ? preferred : fallback;

if (!fs.existsSync(sourcePath)) {
  console.error(
    "Add src/app/favicon-source.png (high-res logo) or src/app/icon.png first.",
  );
  process.exit(1);
}

const sourceBuffer = fs.readFileSync(sourcePath);

/** Brighter than pure page bg for contrast on tabs */
const TILE = { r: 30, g: 42, b: 64, alpha: 1 }; // ~#1e2a40

async function renderFavicon(size) {
  const inner = Math.round(size * 0.8);

  const mark = await sharp(sourceBuffer)
    .resize(inner, inner, { fit: "inside", withoutEnlargement: false })
    .modulate({ brightness: 1.18, saturation: 1.25 })
    .gamma(1.06)
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: TILE,
    },
  })
    .composite([{ input: mark, gravity: "center" }])
    .sharpen({ sigma: size <= 32 ? 0.65 : 0.4 })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

const icon32 = await renderFavicon(32);
const apple180 = await renderFavicon(180);

fs.writeFileSync(path.join(appDir, "icon.png"), icon32);
fs.writeFileSync(path.join(appDir, "apple-icon.png"), apple180);

console.log(
  "Wrote src/app/icon.png + apple-icon.png from",
  path.basename(sourcePath),
);
