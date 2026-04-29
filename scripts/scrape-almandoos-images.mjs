import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE_URL = "https://www.almandoosgroup.com/";
const WORKSPACE_ROOT = process.cwd();
const PRODUCTS_FILE = path.join(WORKSPACE_ROOT, "data", "products.json");
const OUTPUT_DIR = path.join(WORKSPACE_ROOT, "public", "product-images");
const OUTPUT_MAP_FILE = path.join(WORKSPACE_ROOT, "data", "product-images.json");

function extractImageSources(html) {
  const imageSources = new Set();
  const imgTagRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;

  let match;
  while ((match = imgTagRegex.exec(html)) !== null) {
    const src = (match[1] || "").trim();
    if (!src) continue;
    if (!src.includes("images-products/")) continue;
    imageSources.add(src);
  }

  return [...imageSources];
}

function extractDetailLinks(html) {
  const detailLinks = new Set();
  const detailLinkRegex = /product-details\.php\?id=\d+/gi;
  let match;

  while ((match = detailLinkRegex.exec(html)) !== null) {
    detailLinks.add(match[0]);
  }

  return [...detailLinks];
}

function toAbsoluteUrl(urlOrPath) {
  return new URL(urlOrPath, BASE_URL).href;
}

function safeFileName(fileName) {
  return fileName.replace(/[^a-zA-Z0-9._-]/g, "_");
}

async function fetchHtml(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }
  return response.text();
}

async function downloadImage(url, outputPath) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed image download ${url}: ${response.status}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  await writeFile(outputPath, Buffer.from(arrayBuffer));
}

async function main() {
  const raw = await readFile(PRODUCTS_FILE, "utf8");
  const products = JSON.parse(raw);

  await mkdir(OUTPUT_DIR, { recursive: true });
  const imageMap = {};

  for (const product of products) {
    const productUrl = `${BASE_URL}product.php?prdtcat_id=${product.id}`;
    const productHtml = await fetchHtml(productUrl);

    const detailLinks = extractDetailLinks(productHtml);
    const allImageUrls = new Set(
      extractImageSources(productHtml).map((src) => toAbsoluteUrl(src)),
    );

    for (const detailLink of detailLinks) {
      const detailUrl = toAbsoluteUrl(detailLink);
      try {
        const detailHtml = await fetchHtml(detailUrl);
        for (const imageSrc of extractImageSources(detailHtml)) {
          allImageUrls.add(toAbsoluteUrl(imageSrc));
        }
      } catch (error) {
        console.error(`Skipping detail page ${detailUrl}:`, error.message);
      }
    }

    const productOutputDir = path.join(OUTPUT_DIR, product.slug);
    await mkdir(productOutputDir, { recursive: true });

    const usedNames = new Set();
    const localImages = [];
    let index = 1;

    for (const imageUrl of allImageUrls) {
      const parsed = new URL(imageUrl);
      const baseName = safeFileName(path.basename(parsed.pathname) || `image-${index}.jpg`);

      let finalName = baseName;
      let counter = 1;
      while (usedNames.has(finalName)) {
        const ext = path.extname(baseName);
        const name = path.basename(baseName, ext);
        finalName = `${name}-${counter}${ext}`;
        counter += 1;
      }
      usedNames.add(finalName);

      const outputPath = path.join(productOutputDir, finalName);
      try {
        await downloadImage(imageUrl, outputPath);
        localImages.push(`/product-images/${product.slug}/${finalName}`);
      } catch (error) {
        console.error(`Skipping image ${imageUrl}:`, error.message);
      }
      index += 1;
    }

    imageMap[product.slug] = localImages;
    console.log(
      `${product.slug}: downloaded ${localImages.length} images (${allImageUrls.size} found)`,
    );
  }

  await writeFile(OUTPUT_MAP_FILE, JSON.stringify(imageMap, null, 2));
  console.log(`Saved image mapping to ${OUTPUT_MAP_FILE}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
