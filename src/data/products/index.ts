import type { Product } from "@/types";

import smartphonesData from "./smartphones.json";
import smartWatchesData from "./smart-watches.json";
import earbudsData from "./earbuds.json";
import headphonesData from "./headphones.json";
import chargersData from "./chargers.json";
import cablesData from "./cables.json";
import powerBanksData from "./power-banks.json";
import routersData from "./routers.json";
import camerasData from "./cameras.json";
import gamingData from "./gaming.json";
import tabletsData from "./tablets.json";
import laptopsData from "./laptops.json";
import streamingData from "./streaming.json";
import smartHomeData from "./smart-home.json";
import carAccessoriesData from "./car-accessories.json";

// Cast all data to Product type
const allProducts: Product[] = [
  ...(smartphonesData as unknown as Product[]),
  ...(smartWatchesData as unknown as Product[]),
  ...(earbudsData as unknown as Product[]),
  ...(headphonesData as unknown as Product[]),
  ...(chargersData as unknown as Product[]),
  ...(cablesData as unknown as Product[]),
  ...(powerBanksData as unknown as Product[]),
  ...(routersData as unknown as Product[]),
  ...(camerasData as unknown as Product[]),
  ...(gamingData as unknown as Product[]),
  ...(tabletsData as unknown as Product[]),
  ...(laptopsData as unknown as Product[]),
  ...(streamingData as unknown as Product[]),
  ...(smartHomeData as unknown as Product[]),
  ...(carAccessoriesData as unknown as Product[]),
];

export default allProducts;

export function getAllProducts(): Product[] {
  return allProducts;
}

export function getProductById(id: string): Product | undefined {
  return allProducts.find((p) => p.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return allProducts.filter((p) => p.category === categoryId || p.categoryId === categoryId);
}

export function getProductsByBrand(brandId: string): Product[] {
  return allProducts.filter((p) => p.brandId === brandId);
}

export function getFeaturedProducts(): Product[] {
  return allProducts.filter((p) => p.isFeatured);
}

export function getBestSellers(): Product[] {
  return allProducts.filter((p) => p.isBestSeller);
}

export function getNewArrivals(): Product[] {
  return allProducts.filter((p) => p.isNew);
}

export function getDeals(): Product[] {
  return allProducts.filter((p) => p.isDeal && p.discount && p.discount > 0);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return allProducts.filter(
    (p) =>
      p.nameAr.toLowerCase().includes(q) ||
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.tags && p.tags.some((t) => t.toLowerCase().includes(q)))
  );
}

export function getRelatedProducts(productId: string, limit = 4): Product[] {
  const product = getProductById(productId);
  if (!product) return [];
  const related = (product.relatedProducts || [])
    .map((id) => getProductById(id))
    .filter(Boolean) as Product[];
  if (related.length >= limit) return related.slice(0, limit);
  // Fill remaining with same category
  const sameCat = allProducts
    .filter((p) => p.category === product.category && p.id !== productId && !related.some((r) => r.id === p.id))
    .slice(0, limit - related.length);
  return [...related, ...sameCat];
}
