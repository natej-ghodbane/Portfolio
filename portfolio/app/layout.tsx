import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Data Science & AI Engineer",
  description:
    "Portfolio of a creative Data Science & AI Engineer showcasing ML, MLOps and full-stack projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="app-root">{children}</body>
    </html>
  );
}
