import "./globals.css";
import type { Metadata } from "next";
import { cookies } from "next/headers";

import { DEFAULT_LOCALE, isLocale, LOCALE_COOKIE } from "@/lib/i18n-config";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Localized portfolio website.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localeCookie = (await cookies()).get(LOCALE_COOKIE)?.value;
  const htmlLang = isLocale(localeCookie ?? "") ? localeCookie : DEFAULT_LOCALE;

  return (
    <html lang={htmlLang} suppressHydrationWarning>
      <body className="app-root">{children}</body>
    </html>
  );
}
