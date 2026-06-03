import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ПиццаФабрика — Маркетинговая стратегия 2026",
  description: "Доступное и эмоционально близкое решение для повседневного питания. Вкус, доверие, удобство — в центре всего.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
