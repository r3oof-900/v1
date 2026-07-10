// ============================================================
// ARJWAN STORE — TypeScript Interfaces
// ============================================================

// ─── Brand ───────────────────────────────────────────────────
export interface Brand {
  id: string;
  name: string;
  nameAr: string;
  slug: string;
  logo: string;
  country: string;
  featured: boolean;
}

// ─── Category ────────────────────────────────────────────────
export interface SubCategory {
  id: string;
  name: string;
  nameAr: string;
  slug: string;
  icon?: string;
}

export interface Category {
  id: string;
  name: string;
  nameAr: string;
  slug: string;
  icon: string;
  image: string;
  color: string;
  subCategories: SubCategory[];
  productCount?: number;
}

// ─── Product ─────────────────────────────────────────────────
export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  altAr: string;
}

export interface ProductVariant {
  id: string;
  type: 'color' | 'storage' | 'ram';
  value: string;
  label: string;
  labelAr: string;
  priceModifier: number;
  inStock: boolean;
  hex?: string;
}

export interface ProductSpecification {
  key: string;
  keyAr: string;
  value: string;
  valueAr: string;
  group: string;
  groupAr: string;
}

export interface ProductFAQ {
  question: string;
  questionAr: string;
  answer: string;
  answerAr: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  nameAr: string;
  brand: string;
  brandId: string;
  category: string;
  categoryId: string;
  subCategory?: string;
  sku: string;
  barcode: string;

  // Pricing
  price: number;
  oldPrice?: number;
  discount?: number;

  // Stock
  stock: number;
  inStock: boolean;

  // Media
  images: ProductImage[];
  thumbnail: string;

  // Physical
  weight: string;
  dimensions: string;
  warranty: string;

  // Key specs (for quick display)
  ram?: string;
  storage?: string;
  processor?: string;
  battery?: string;
  camera?: string;
  display?: string;
  connectivity?: string;

  // Variants
  colors: ProductVariant[];
  storageOptions: ProductVariant[];

  // Content
  description: string;
  descriptionAr: string;
  features: string[];
  featuresAr: string[];
  inTheBox: string[];
  inTheBoxAr: string[];
  specifications: ProductSpecification[];
  faqs: ProductFAQ[];

  // Meta
  rating: number;
  reviewCount: number;
  tags: string[];
  isNew: boolean;
  isFeatured: boolean;
  isBestSeller: boolean;
  isDeal: boolean;
  dealEndsAt?: string;

  // Relations
  relatedProducts: string[];
  frequentlyBoughtWith: string[];
}

// ─── Review ──────────────────────────────────────────────────
export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  userNameAr: string;
  userCity: string;
  userCityAr: string;
  rating: number;
  title: string;
  titleAr: string;
  body: string;
  bodyAr: string;
  date: string;
  helpfulCount: number;
  verified: boolean;
  images?: string[];
}

// ─── Cart ────────────────────────────────────────────────────
export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  selectedColor?: ProductVariant;
  selectedStorage?: ProductVariant;
  price: number;
}

export interface Coupon {
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  minOrder: number;
  maxDiscount?: number;
  expiry: string;
}

export interface Cart {
  items: CartItem[];
  coupon?: Coupon;
  subtotal: number;
  discount: number;
  shipping: number;
  vat: number;
  total: number;
}

// ─── Order ───────────────────────────────────────────────────
export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'out_for_delivery'
  | 'delivered'
  | 'cancelled'
  | 'returned';

export interface OrderItem {
  productId: string;
  productName: string;
  productNameAr: string;
  thumbnail: string;
  quantity: number;
  price: number;
  selectedColor?: string;
  selectedStorage?: string;
}

export interface ShippingAddress {
  fullName: string;
  phone: string;
  city: string;
  district: string;
  street: string;
  building?: string;
  postalCode?: string;
  notes?: string;
}

export interface OrderTimeline {
  status: OrderStatus;
  label: string;
  labelAr: string;
  date: string;
  completed: boolean;
}

export interface Order {
  id: string;
  orderNumber: string;
  status: OrderStatus;
  items: OrderItem[];
  shippingAddress: ShippingAddress;
  subtotal: number;
  discount: number;
  shipping: number;
  vat: number;
  total: number;
  paymentMethod: string;
  couponCode?: string;
  timeline: OrderTimeline[];
  createdAt: string;
  estimatedDelivery: string;
}

// ─── User ────────────────────────────────────────────────────
export interface Address {
  id: string;
  label: string;
  labelAr: string;
  fullName: string;
  phone: string;
  city: string;
  district: string;
  street: string;
  building?: string;
  postalCode?: string;
  isDefault: boolean;
}

export interface User {
  id: string;
  name: string;
  nameAr: string;
  email: string;
  phone: string;
  avatar?: string;
  addresses: Address[];
  createdAt: string;
}

// ─── Banner ──────────────────────────────────────────────────
export interface Banner {
  id: string;
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
  description?: string;
  descriptionAr?: string;
  image: string;
  mobileImage?: string;
  link: string;
  badge?: string;
  badgeAr?: string;
  ctaLabel: string;
  ctaLabelAr: string;
  theme: 'light' | 'dark';
  accentColor?: string;
}

// ─── Navigation ──────────────────────────────────────────────
export interface NavItem {
  label: string;
  labelAr: string;
  href: string;
  icon?: string;
  children?: NavItem[];
}

// ─── Filter ──────────────────────────────────────────────────
export interface FilterState {
  categories: string[];
  brands: string[];
  priceRange: [number, number];
  rating: number | null;
  inStock: boolean;
  isNew: boolean;
  isDeal: boolean;
}

export type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'newest' | 'rating' | 'bestseller';

// ─── API ─────────────────────────────────────────────────────
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface ApiError {
  message: string;
  messageAr: string;
  code: string;
}
