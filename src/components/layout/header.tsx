"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Search,
  ShoppingBag,
  Heart,
  Menu,
  X,
  Sun,
  Moon,
  Phone,
  Truck,
  RotateCcw,
  Shield,
} from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { company } from "@/config/company";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/products", label: "المنتجات" },
  { href: "/categories", label: "الأقسام" },
  { href: "/offers", label: "العروض" },
  { href: "/best-sellers", label: "الأكثر مبيعًا" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "تواصل معنا" },
];

const features = [
  { icon: Truck, text: "شحن مجاني للطلبات أكثر من 200 ر.س" },
  { icon: RotateCcw, text: "استرجاع خلال 7 أيام" },
  { icon: Shield, text: "ضمان رسمي" },
  { icon: Phone, text: company.contact.phone },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* ─── Announcement Bar ───────────────────────── */}
      <div className="bg-foreground text-white text-xs py-2 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-1.5 whitespace-nowrap">
              <f.icon className="w-3.5 h-3.5 text-gold" />
              <span>{f.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Main Header ────────────────────────────── */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-surface/95 backdrop-blur-xl shadow-md border-b border-base"
            : "bg-surface border-b border-base"
        )}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="w-9 h-9 rounded-xl gold-gradient flex items-center justify-center">
                <span className="text-white font-bold text-lg">أ</span>
              </div>
              <div className="hidden sm:block">
                <p className="font-bold text-sm leading-tight text-main">أرجوان</p>
                <p className="text-[10px] text-muted leading-tight">للإلكترونيات</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    pathname === link.href
                      ? "text-gold-dark bg-gold-subtle"
                      : "text-main hover:text-gold-dark hover:bg-surface-2"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2.5 rounded-xl hover:bg-surface-2 transition-colors"
                aria-label="بحث"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2.5 rounded-xl hover:bg-surface-2 transition-colors"
                  aria-label="تبديل الوضع"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
              )}

              {/* Wishlist */}
              <Link
                href="/wishlist"
                className="p-2.5 rounded-xl hover:bg-surface-2 transition-colors relative hidden sm:flex"
                aria-label="المفضلة"
              >
                <Heart className="w-5 h-5" />
              </Link>

              {/* Account Link removed because auth is disabled */}

              {/* Cart */}
              <Link
                href="/cart"
                className="p-2.5 rounded-xl hover:bg-surface-2 transition-colors relative"
                aria-label="السلة"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-0.5 -left-0.5 w-4.5 h-4.5 bg-gold text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  0
                </span>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl hover:bg-surface-2 transition-colors lg:hidden"
                aria-label="القائمة"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ─── Search Bar ─────────────────────────────── */}
        {isSearchOpen && (
          <div className="border-t border-base bg-surface py-3 px-4">
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
              <input
                type="search"
                placeholder="ابحث عن منتج، علامة تجارية، أو قسم..."
                className="w-full pr-10 pl-4 py-3 rounded-xl bg-surface-2 border border-base text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                autoFocus
              />
            </div>
          </div>
        )}
      </header>

      {/* ─── Mobile Menu ──────────────────────────────── */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-[280px] bg-surface z-50 lg:hidden overflow-y-auto shadow-2xl">
            <div className="p-4 border-b border-base flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center">
                  <span className="text-white font-bold">أ</span>
                </div>
                <span className="font-bold text-main">أرجوان للإلكترونيات</span>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-surface-2"
                aria-label="إغلاق القائمة"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="p-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-gold-dark bg-gold-subtle"
                      : "text-main hover:bg-surface-2"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="p-4 border-t border-base space-y-1">
              <Link
                href="/wishlist"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-main hover:bg-surface-2"
              >
                <Heart className="w-4 h-4" />
                المفضلة
              </Link>
              {/* Account Link removed because auth is disabled */}
            </div>
          </div>
        </>
      )}
    </>
  );
}
