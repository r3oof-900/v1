import type { Brand } from "@/types";

export const brands: Brand[] = [
  { id: "apple", name: "Apple", nameAr: "ابل", slug: "apple", logo: "/images/brands/apple.svg", country: "US", featured: true },
  { id: "samsung", name: "Samsung", nameAr: "سامسونج", slug: "samsung", logo: "/images/brands/samsung.svg", country: "KR", featured: true },
  { id: "xiaomi", name: "Xiaomi", nameAr: "شاومي", slug: "xiaomi", logo: "/images/brands/xiaomi.svg", country: "CN", featured: true },
  { id: "nothing", name: "Nothing", nameAr: "ناثينج", slug: "nothing", logo: "/images/brands/nothing.svg", country: "UK", featured: true },
  { id: "anker", name: "Anker", nameAr: "انكر", slug: "anker", logo: "/images/brands/anker.svg", country: "CN", featured: true },
  { id: "soundcore", name: "Soundcore", nameAr: "ساوندكور", slug: "soundcore", logo: "/images/brands/soundcore.svg", country: "CN", featured: false },
  { id: "baseus", name: "Baseus", nameAr: "باسيوس", slug: "baseus", logo: "/images/brands/baseus.svg", country: "CN", featured: true },
  { id: "jbl", name: "JBL", nameAr: "جي بي ال", slug: "jbl", logo: "/images/brands/jbl.svg", country: "US", featured: true },
  { id: "tp-link", name: "TP-Link", nameAr: "تي بي لينك", slug: "tp-link", logo: "/images/brands/tp-link.svg", country: "CN", featured: false },
  { id: "ezviz", name: "EZVIZ", nameAr: "إي في آي زد", slug: "ezviz", logo: "/images/brands/ezviz.svg", country: "CN", featured: false },
  { id: "sony", name: "Sony", nameAr: "سوني", slug: "sony", logo: "/images/brands/sony.svg", country: "JP", featured: true },
  { id: "honor", name: "Honor", nameAr: "هونر", slug: "honor", logo: "/images/brands/honor.svg", country: "CN", featured: false },
  { id: "huawei", name: "Huawei", nameAr: "هواوي", slug: "huawei", logo: "/images/brands/huawei.svg", country: "CN", featured: true },
  { id: "google", name: "Google", nameAr: "قوقل", slug: "google", logo: "/images/brands/google.svg", country: "US", featured: false },
  { id: "oneplus", name: "OnePlus", nameAr: "ون بلس", slug: "oneplus", logo: "/images/brands/oneplus.svg", country: "CN", featured: false },
  { id: "oppo", name: "Oppo", nameAr: "اوبو", slug: "oppo", logo: "/images/brands/oppo.svg", country: "CN", featured: false },
  { id: "tecno", name: "Tecno", nameAr: "تكنو", slug: "tecno", logo: "/images/brands/tecno.svg", country: "CN", featured: false },
  { id: "amazfit", name: "Amazfit", nameAr: "امازفت", slug: "amazfit", logo: "/images/brands/amazfit.svg", country: "CN", featured: false },
  { id: "dji", name: "DJI", nameAr: "دي جي آي", slug: "dji", logo: "/images/brands/dji.svg", country: "CN", featured: false },
  { id: "oraimo", name: "Oraimo", nameAr: "اورايمو", slug: "oraimo", logo: "/images/brands/oraimo.svg", country: "CN", featured: false },
];

export function getBrandById(id: string): Brand | undefined {
  return brands.find((b) => b.id === id);
}

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

export function getFeaturedBrands(): Brand[] {
  return brands.filter((b) => b.featured);
}
