import productsData from "@/data/products.json";

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

export function getProductBySlug(slug: string): ProductCategory | undefined {
  return products.find((product) => product.slug === slug);
}

export function getTopProducts(limit = 8): ProductCategory[] {
  return products.slice(0, limit);
}
