import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://стратегия.пиццафабрика.рф";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: "ПиццаФабрика — Маркетинговая стратегия 2026",
  description:
    "Маркетинговая стратегия ПиццаФабрика на 2026 год: агрессивный рост, омниканальные продажи, доступное качество. Продукт, цена, каналы, продвижение и сервис.",

  keywords: [
    "ПиццаФабрика",
    "маркетинговая стратегия 2026",
    "пицца доставка",
    "ресторан пицца",
    "маркетинг пиццерии",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "ПиццаФабрика",
    title: "ПиццаФабрика — Маркетинговая стратегия 2026",
    description:
      "Агрессивный маркетинг и захват доли рынка. Омниканальные продажи, доступное качество, цифровизация — полная стратегия на 2026 год.",
    locale: "ru_RU",
  },

  twitter: {
    card: "summary_large_image",
    title: "ПиццаФабрика — Маркетинговая стратегия 2026",
    description:
      "Агрессивный маркетинг и захват доли рынка. Омниканальные продажи, доступное качество, цифровизация.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
