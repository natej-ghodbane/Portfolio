import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Natej Ghodbane | Data Science & AI Engineer",
  description:
    "Portfolio of a Data Science & AI Engineer showcasing ML, MLOps and full-stack projects.",
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
