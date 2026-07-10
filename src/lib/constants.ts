export const APP_NAME = "أرجوان";
export const APP_NAME_FULL = "مؤسسة أرجوان أحمد الشريف";
export const APP_NAME_EN = "Arjwan Electronics";
export const APP_DESCRIPTION_AR = "متجر الإلكترونيات الأول في المملكة العربية السعودية — هواتف، ساعات ذكية، إكسسوارات وأكثر";
export const APP_DESCRIPTION_EN = "Saudi Arabia's premier electronics store — phones, smart watches, accessories and more";

export const CONTACT = {
  phone: "+966 56 623 5108",
  phoneDisplay: "٠٥٦٦٢٣٥١٠٨",
  email: "orjuwanalshar@gmail.com",
  address: "مكة المكرمة - حي العوالي - شارع مسجد إمام الدعوة",
  addressEn: "Makkah - Al-Awali District - Imam Al-Da'wah Mosque Street",
  workingHours: "السبت – الخميس: ٩ص – ١٠م",
  workingHoursEn: "Sat – Thu: 9AM – 10PM",
  whatsapp: "https://wa.me/966566235108",
  instagram: "https://instagram.com/arjwan.sa",
  twitter: "https://twitter.com/arjwan_sa",
  snapchat: "https://snapchat.com/add/arjwan_sa",
};

export const VAT_RATE = 0.15;
export const FREE_SHIPPING_THRESHOLD = 299;
export const SHIPPING_COST = 29;
export const MAX_COMPARE_ITEMS = 4;
export const PRODUCTS_PER_PAGE = 24;

export const SAUDI_CITIES = [
  { ar: "الرياض", en: "Riyadh" },
  { ar: "جدة", en: "Jeddah" },
  { ar: "مكة المكرمة", en: "Makkah" },
  { ar: "المدينة المنورة", en: "Madinah" },
  { ar: "الدمام", en: "Dammam" },
  { ar: "الخبر", en: "Khobar" },
  { ar: "الظهران", en: "Dhahran" },
  { ar: "تبوك", en: "Tabuk" },
  { ar: "أبها", en: "Abha" },
  { ar: "الطائف", en: "Taif" },
  { ar: "بريدة", en: "Buraidah" },
  { ar: "نجران", en: "Najran" },
];

export const PAYMENT_METHODS = [
  { id: "visa",       label: "Visa",        icon: "/icons/visa.svg" },
  { id: "mastercard", label: "Mastercard",  icon: "/icons/mastercard.svg" },
  { id: "mada",       label: "Mada",        icon: "/icons/mada.svg" },
  { id: "stcpay",     label: "STC Pay",     icon: "/icons/stcpay.svg" },
  { id: "applepay",   label: "Apple Pay",   icon: "/icons/applepay.svg" },
  { id: "googlepay",  label: "Google Pay",  icon: "/icons/googlepay.svg" },
  { id: "cod",        label: "الدفع عند الاستلام", icon: "/icons/cod.svg" },
];

export const SORT_OPTIONS = [
  { value: "featured",   labelAr: "الأكثر تميزاً",   label: "Featured"     },
  { value: "bestseller", labelAr: "الأكثر مبيعاً",   label: "Best Sellers" },
  { value: "newest",     labelAr: "الأحدث",           label: "Newest"       },
  { value: "price-asc",  labelAr: "السعر: الأقل أولاً", label: "Price: Low to High" },
  { value: "price-desc", labelAr: "السعر: الأعلى أولاً", label: "Price: High to Low" },
  { value: "rating",     labelAr: "الأعلى تقييماً",  label: "Top Rated"    },
];

export const NAV_LINKS = [
  { label: "Home",       labelAr: "الرئيسية",   href: "/"          },
  { label: "Products",   labelAr: "المنتجات",   href: "/products"  },
  { label: "Categories", labelAr: "التصنيفات",  href: "/categories"},
  { label: "Deals",      labelAr: "العروض",     href: "/products?filter=deals" },
  { label: "About",      labelAr: "من نحن",     href: "/about"     },
  { label: "Contact",    labelAr: "تواصل معنا", href: "/contact"   },
];
