import { JSX } from "react";
import {
  Gift,
  Image,
  Wand2,
  Frame,
  Camera,
  Layers,
  Folder,
  Printer,
  PenLine,
  FileText,
  ScanLine,
  Keyboard,
  FileStack,
} from "lucide-react";

type Service = {
  desc: string;
  title: string;
  icon: JSX.Element;
};

export const services: Service[] = [
  {
    icon: <FileText />,
    title: "Ксерокопия и печать",
    desc: "Ч/б и цветная ксерокопия, печать с флешки и телефона в несколько кликов.",
  },
  {
    icon: <Camera />,
    title: "Фото на документы",
    desc: "Любой формат. Возможна подставка форменной одежды, ретушь и коррекция.",
  },
  {
    icon: <Printer />,
    title: "Цветная печать",
    desc: "Бумага на выбор: неоновая, самоклеящаяся, глянцевая и матовая фотобумага.",
  },
  {
    icon: <ScanLine />,
    title: "Сканирование",
    desc: "Отправим документ на телефон, мессенджер или e-mail в нужном формате.",
  },
  {
    icon: <Image />,
    title: "Визитки и баннеры",
    desc: "Дизайн и печать визиток, рекламных вывесок, баннеров любого размера.",
  },
  {
    icon: <Gift />,
    title: "Магниты и сувениры",
    desc: "Магниты, 3D-стикеры и календари с вашими фотографиями на память.",
  },
  {
    icon: <Layers />,
    title: "Ламинирование",
    desc: "Защищаем документы, фото, объявления плёнкой любого формата.",
  },
  {
    icon: <Wand2 />,
    title: "Обработка фотографий",
    desc: "Реставрация, ретушь, восстановление, цветокоррекция и увеличение фото.",
  },
  {
    icon: <Keyboard />,
    title: "Набор текста",
    desc: "Быстрый профессиональный набор текстов, объявлений, заявлений.",
  },
];

export const portfolioTabs = [
  { id: "restovration", label: "Реставрации" },
  { id: "design", label: "Дизайн" },
  { id: "souvenirs", label: "Сувениры" },
];

export const portfolioItems: Record<string, any> = {
  restovration: [
    {
      alt: "Реставрация",
      src: "/restovration/1.jpg",
      label: "Реставрация фотографии",
    },
    {
      alt: "Реставрация",
      src: "/restovration/2.jpg",
      label: "Реставрация фотографии",
    },
    {
      src: "/restovration/3.jpg",
      alt: "Реставрация",
      label: "Реставрация фотографии",
    },
    {
      src: "/restovration/4.jpg",
      alt: "Реставрация",
      label: "Реставрация фотографии",
    },
    {
      src: "/restovration/5.jpg",
      alt: "Реставрация",
      label: "Реставрация фотографии",
    },
    {
      src: "/restovration/6.jpg",
      alt: "Реставрация",
      label: "Реставрация фотографии",
    },
    {
      src: "/restovration/7.jpg",
      alt: "Увеличение фото с реставрацией",
      label: "Увеличение фото с реставрацией",
    },
  ],
  design: [
    {
      alt: "Визитки",
      src: "/design/1.jpg",
      label: "Визитки под ключ",
    },
    {
      alt: "Визитки",
      src: "/design/2.jpg",
      label: "Визитки под ключ",
    },
    {
      alt: "Объявление",
      src: "/design/3.jpg",
      label: "Дизайн объявления",
    },
    {
      alt: "Объявление",
      src: "/design/4.jpg",
      label: "Дизайн объявления",
    },
    {
      alt: "Визитки",
      src: "/design/5.jpg",
      label: "Визитки под ключ",
    },
    {
      alt: "Объявление",
      src: "/design/6.jpg",
      label: "Дизайн объявления",
    },
  ],
  souvenirs: [
    {
      alt: "Печать на кружке",
      src: "/souvenirs/1.jpg",
      label: "Печать на кружке",
    },
    {
      alt: "Печать на кружке",
      src: "/souvenirs/2.jpg",
      label: "Печать на кружке",
    },
    {
      alt: "Печать на кружке",
      src: "/souvenirs/3.jpg",
      label: "Печать на кружке",
    },
    {
      src: "/souvenirs/4.jpg",
      alt: "3D-стикер",
      label: "3D-стикер",
    },
    {
      src: "/souvenirs/5.jpg",
      alt: "3D-стикеры",
      label: "3D-стикеры",
    },
    {
      alt: "Календарь",
      src: "/souvenirs/6.jpg",
      label: "Календарь с вашим фото",
    },
    {
      alt: "Магниты",
      label: "Магниты",
      src: "/souvenirs/7.jpg",
    },
    {
      alt: "Полароид",
      label: "Полароид",
      src: "/souvenirs/8.jpg",
    },
  ],
};

export const storeItemsWithIcons = [
  { label: "Канцтовары", icon: <PenLine /> },
  { label: "Обложки на документы", icon: <Folder /> },
  { label: "Фоторамки", icon: <Frame /> },
  { label: "Фотоальбомы", icon: <Camera /> },
  { label: "Бумага для принтера", icon: <FileStack /> },
];

export const links = [
  { href: "#services", label: "Услуги" },
  { href: "#portfolio", label: "Примеры работ" },
  { href: "#app", label: "Приложение" },
  { href: "#store", label: "Товары" },
  { href: "#contacts", label: "Контакты" },
  { href: "/blog", label: "Блог" },
];

export const jsonLd = {
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
