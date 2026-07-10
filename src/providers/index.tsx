"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Toaster
        position="top-center"
        dir="rtl"
        toastOptions={{
          style: {
            fontFamily: "var(--font-alexandria), Alexandria, sans-serif",
          },
        }}
        richColors
        closeButton
      />
    </NextThemesProvider>
  );
}
