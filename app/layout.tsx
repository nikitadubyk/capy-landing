import "./globals.css";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | Копицентр Горловка",
    default: "Копицентр на Центральном рынке | Горловка, ул. Изотова 7",
  },
  description:
    "Копицентр в Горловке на Центральном рынке. Ксерокопия, цветная печать, фото на документы, ламинирование, реставрация старых фотографий, сканирование, печать визиток, баннеров. Работаем ежедневно. Приложение для предзаказа печати.",
  keywords: [
    "копицентр Горловка",
    "ксерокопия Горловка",
    "печать фото Горловка",
    "фото на документы Горловка",
    "ламинирование Горловка",
    "цветная печать Горловка",
    "печать визиток Горловка",
    "сканирование Горловка",
    "реставрация фотографий Горловка",
    "реставрация старых фотографий Горловка",
    "набор текста Горловка",
    "дизайн визиток Горловка",
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
        url: "/og-image.jpg",
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
  const jsonLd = {
    "@type": "LocalBusiness",
    "@context": "https://schema.org",
    name: "Копицентр на Центральном рынке",
    description:
      "Профессиональный копицентр в Горловке. Ксерокопия, печать, фото на документы, ламинирование, визитки, баннеры.",
    address: {
      addressCountry: "UA",
      "@type": "PostalAddress",
      addressLocality: "Горловка",
      streetAddress: "ул. Изотова, 7",
    },
    geo: {
      latitude: "48.2836",
      longitude: "38.0542",
      "@type": "GeoCoordinates",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "13:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "08:00",
        closes: "12:00",
      },
    ],
    priceRange: "₽",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Услуги копицентра",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Ксерокопия" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Цветная печать" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Фото на документы" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Ламинирование" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Печать визиток" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Сканирование" },
        },
      ],
    },
  };

  return (
    <html lang="ru" className={playfair.variable}>
      <head>
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
