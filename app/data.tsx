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
  { id: "print", label: "Печать и копии" },
  { id: "photo", label: "Фотографии" },
  { id: "design", label: "Дизайн" },
  { id: "souvenirs", label: "Сувениры" },
];

export const portfolioItems: Record<string, any> = {
  print: [
    {
      id: 1,
      src: "/example.png",
      alt: "Цветная печать",
      label: "Цветная печать A3",
      color: "from-orange-900 to-orange-700",
    },
    {
      id: 2,
      src: "/example.png",
      alt: "Ксерокопия документов",
      label: "Ксерокопия документов",
      color: "from-slate-700 to-slate-500",
    },
    {
      id: 3,
      src: "/example.png",
      alt: "Печать на фотобумаге",
      label: "Печать на фотобумаге",
      color: "from-amber-800 to-yellow-600",
    },
    {
      id: 4,
      src: "/example.png",
      alt: "Брошюра",
      label: "Брошюры и буклеты",
      color: "from-stone-700 to-stone-500",
    },
    {
      id: 5,
      src: "/example.png",
      alt: "Самоклеящаяся бумага",
      label: "Самоклеящаяся плёнка",
      color: "from-orange-800 to-red-700",
    },
    {
      id: 6,
      src: "/example.png",
      alt: "Неоновая бумага",
      label: "Печать на неоновой бумаге",
      color: "from-yellow-600 to-lime-500",
    },
  ],
  photo: [
    {
      id: 7,
      src: "/example.png",
      alt: "Фото на паспорт",
      label: "Фото на паспорт",
      color: "from-blue-900 to-blue-700",
    },
    {
      id: 8,
      src: "/example.png",
      alt: "Восстановление фото",
      label: "Реставрация старых фото",
      color: "from-amber-900 to-amber-600",
    },
    {
      id: 9,
      src: "/example.png",
      alt: "Печать фотографий",
      label: "Печать фотографий 10×15",
      color: "from-rose-900 to-pink-700",
    },
    {
      id: 10,
      alt: "Ретушь",
      src: "/example.png",
      label: "Профессиональная ретушь",
      color: "from-purple-900 to-purple-700",
    },
  ],
  design: [
    {
      id: 11,
      alt: "Визитки",
      src: "/example.png",
      label: "Визитки под ключ",
      color: "from-emerald-900 to-teal-700",
    },
    {
      id: 12,
      alt: "Баннер",
      src: "/example.png",
      label: "Рекламный баннер",
      color: "from-cyan-900 to-sky-700",
    },
    {
      id: 13,
      alt: "Объявление",
      src: "/example.png",
      label: "Объявления и листовки",
      color: "from-indigo-900 to-violet-700",
    },
    {
      id: 14,
      alt: "Вывеска",
      src: "/example.png",
      label: "Оформление вывески",
      color: "from-orange-900 to-amber-700",
    },
    {
      id: 15,
      label: "Флаеры",
      src: "/example.png",
      alt: "Дизайн флаера",
      color: "from-fuchsia-900 to-pink-700",
    },
    {
      id: 16,
      alt: "Плакат",
      src: "/example.png",
      label: "Плакаты А1",
      color: "from-lime-900 to-green-700",
    },
  ],
  souvenirs: [
    {
      id: 17,
      alt: "Магниты",
      src: "/example.png",
      label: "Фотомагниты",
      color: "from-red-900 to-rose-700",
    },
    {
      id: 18,
      alt: "3D-стикер",
      src: "/example.png",
      label: "3D-стикеры",
      color: "from-blue-900 to-indigo-700",
    },
    {
      id: 19,
      alt: "Календарь",
      src: "/example.png",
      label: "Настенные календари",
      color: "from-amber-900 to-orange-700",
    },
    {
      id: 20,
      src: "/example.png",
      alt: "Фотокалендарь",
      label: "Карманные календари",
      color: "from-teal-900 to-cyan-700",
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
];
