import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { company } from "@/config/company";

const shopLinks = [
  { href: "/products", label: "جميع المنتجات" },
  { href: "/categories", label: "الأقسام" },
  { href: "/offers", label: "العروض" },
  { href: "/best-sellers", label: "الأكثر مبيعًا" },
  { href: "/new-arrivals", label: "وصل حديثًا" },
];

const supportLinks = [
  { href: "/contact", label: "تواصل معنا" },
  { href: "/faq", label: "الأسئلة الشائعة" },
  { href: "/shipping-policy", label: "سياسة الشحن" },
  { href: "/return-policy", label: "الاستبدال والاسترجاع" },
  { href: "/track-order", label: "تتبع الطلب" },
];

const legalLinks = [
  { href: "/about", label: "من نحن" },
  { href: "/privacy-policy", label: "سياسة الخصوصية" },
  { href: "/terms", label: "الشروط والأحكام" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-white mt-auto">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center">
                <span className="text-white font-bold text-xl">أ</span>
              </div>
              <div>
                <p className="font-bold text-base">{company.brand.ar}</p>
                <p className="text-xs text-gray-400">{company.brand.en}</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              وجهتك الأولى للإلكترونيات والأجهزة الذكية في المملكة العربية السعودية. نقدم أفضل المنتجات بأسعار منافسة مع ضمان رسمي وشحن سريع.
            </p>
            <div className="flex items-center gap-3">
              {/* Social links removed due to missing lucide icons */}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-bold text-sm mb-4 text-gold">تسوّق</h3>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-bold text-sm mb-4 text-gold">المساعدة</h3>
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-sm mb-4 text-gold">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a
                  href={`tel:${company.contact.phone}`}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                  dir="ltr"
                >
                  {company.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a
                  href={`mailto:${company.contact.email}`}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {company.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">
                  {company.contact.address.ar}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">
                  {company.workingHours.ar}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment Methods + Legal */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">{company.copyright.ar}</p>
          <div className="flex items-center gap-3">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
