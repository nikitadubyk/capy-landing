import "./globals.css";

import { Playfair_Display } from "next/font/google";
import { jsonLd } from "./data";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    template: "%s | Копицентр Горловка",
    default: "Копицентр на Центральном рынке | Горловка, ул. Изотова 7",
  },
  description:
    "Копицентр в Горловке на Центральном рынке. Ксерокопия, цветная печать, фото на документы, ламинирование, реставрация старых фотографий, сканирование, печать визиток, баннеров. Работаем ежедневно. Приложение для предзаказа печати.",
  keywords: [
    "копицентр Горловка",
    "ксерокопия Горловка",
    "канцтовары Горловка",
    "распечатать с телефона Горловка",
    "цветная ксерокопия Горловка",
    "запись на флешку Горловка",
    "запись на диск Горловка",
    "распечатать с диска Горловка",
    "купить флешку Горловка",
    "подставить форму Горловка",
    "фото в военной форме Горловка",
    "печать фото Горловка",
    "фото на документы Горловка",
    "ламинирование Горловка",
    "цветная печать Горловка",
    "печать визиток Горловка",
    "сканирование Горловка",
    "раскрасить фото Горловка",
    "реставрация Горловка",
    "реставрация фотографий Горловка",
    "реставрация старых фотографий Горловка",
    "набор текста Горловка",
    "дизайн визиток Горловка",
    "дизайн листовок Горловка",
    "Центральный рынок Горловка",
    "копицентр Изотова 7",
  ],
  authors: [{ name: "Копицентр Горловка" }],
  creator: "Копицентр Горловка",
  publisher: "Копицентр Горловка",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Копицентр Горловка",
    title: "Копицентр на Центральном рынке | Горловка",
    description:
      "Ксерокопия, печать, фото на документы, ламинирование, печать визиток и баннеров. Горловка, ул. Изотова 7.",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/og-image.png",
        alt: "Копицентр Горловка",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={playfair.variable}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicon/favicon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicon/favicon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon/favicon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/favicon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon/favicon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/favicon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/favicon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/favicon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/favicon-180x180.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/favicon-192x192.png"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/favicon/favicon.ico"
        />
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/favicon-144x144.png"
        />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
