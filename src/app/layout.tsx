import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import { Providers } from "@/providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { company } from "@/config/company";
import "./globals.css";

const alexandria = Alexandria({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-alexandria",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: company.seo.defaultTitle,
    template: company.seo.titleTemplate,
  },
  description: company.seo.defaultDescription,
  metadataBase: new URL(company.seo.siteUrl),
  openGraph: {
    type: "website",
    locale: "ar_SA",
    siteName: company.brand.ar,
    title: company.seo.defaultTitle,
    description: company.seo.defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: company.seo.defaultTitle,
    description: company.seo.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${alexandria.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-main text-main" suppressHydrationWarning>
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
