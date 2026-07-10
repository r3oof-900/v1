/**
 * مؤسسة أرجوان أحمد الشريف — بيانات الشركة المركزية
 */

export const company = {
  name: {
    ar: "مؤسسة أرجوان أحمد الشريف",
    en: "Arjwan Electronics",
  },
  brand: {
    ar: "أرجوان للإلكترونيات",
    en: "Arjwan",
  },
  contact: {
    phone: "+966 56 623 5108",
    whatsapp: "+966566235108",
    email: "orjuwanalshar@gmail.com",
    address: {
      ar: "مكة المكرمة - حي العوالي - شارع مسجد إمام الدعوة",
      en: "Makkah - Al-Awali District - Imam Al-Da'wah Mosque Street",
    },
    locationUrl: "https://maps.google.com/?q=21.3891,39.8579",
  },
  // TODO: Replace with real registration numbers before production.
  legal: {
    commercialRegistration: "0000000000",
    vatNumber: "300000000000003",
  },
  workingHours: {
    ar: "السبت إلى الخميس، 9:00 صباحًا — 10:00 مساءً",
    en: "Saturday to Thursday, 9:00 AM — 10:00 PM",
  },
  // TODO: Replace with real social media links before production.
  social: {
    twitter: "https://twitter.com/arjwan_example",
    instagram: "https://instagram.com/arjwan_example",
    snapchat: "https://snapchat.com/add/arjwan_example",
    tiktok: "https://tiktok.com/@arjwan_example",
    facebook: "https://facebook.com/arjwan_example",
  },
  whatsapp: {
    enabled: true,
    defaultMessage: "مرحبًا، أود الاستفسار عن أحد المنتجات في متجر أرجوان.",
  },
  copyright: {
    ar: `© ${new Date().getFullYear()} مؤسسة أرجوان أحمد الشريف. جميع الحقوق محفوظة.`,
    en: `© ${new Date().getFullYear()} Arjwan Electronics. All rights reserved.`,
  },
  currency: {
    code: "SAR",
    symbol: "ر.س",
    locale: "ar-SA",
  },
  seo: {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://arjwan.example",
    titleTemplate: "%s | أرجوان للإلكترونيات",
    defaultTitle: "أرجوان للإلكترونيات — متجر الإلكترونيات الفاخر",
    defaultDescription:
      "تسوق أحدث الأجهزة الإلكترونية والهواتف الذكية والإكسسوارات من أرجوان للإلكترونيات. شحن سريع، ضمان رسمي، وأفضل الأسعار في المملكة العربية السعودية.",
    ogImage: "/images/og-default.jpg",
  },
  shipping: {
    freeShippingThreshold: 200, // SAR
    estimatedDays: {
      riyadh: "1-2",
      majorCities: "2-3",
      other: "3-5",
    },
  },
  policies: {
    returnDays: 7,
    warrantyDefault: "ضمان الوكيل الرسمي",
  },
} as const;

export type Company = typeof company;
