import productsData from "@/data/products.json";
import productImagesData from "@/data/product-images.json";

export type ProductCategory = {
  id: number;
  name: string;
  slug: string;
  shortDescription: string;
  detailedDescription: string;
  keywords: string[];
  serviceDetails: string[];
  models: string[];
};

export const products = productsData as ProductCategory[];
export const productImages = productImagesData as Record<string, string[]>;

export function getProductBySlug(slug: string): ProductCategory | undefined {
  return products.find((product) => product.slug === slug);
}

export function getTopProducts(limit = 8): ProductCategory[] {
  return products.slice(0, limit);
}

export function getProductImages(slug: string): string[] {
  return productImages[slug] ?? [];
}
