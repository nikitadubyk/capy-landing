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
      alt: "Цветная печать",
      color: "from-orange-900 to-orange-700",
      label: "Цветная печать A3",
    },
    {
      id: 2,
      alt: "Ксерокопия документов",
      color: "from-slate-700 to-slate-500",
      label: "Ксерокопия документов",
    },
    {
      id: 3,
      alt: "Печать на фотобумаге",
      color: "from-amber-800 to-yellow-600",
      label: "Печать на фотобумаге",
    },
    {
      id: 4,
      alt: "Брошюра",
      color: "from-stone-700 to-stone-500",
      label: "Брошюры и буклеты",
    },
    {
      id: 5,
      alt: "Самоклеящаяся бумага",
      color: "from-orange-800 to-red-700",
      label: "Самоклеящаяся плёнка",
    },
    {
      id: 6,
      alt: "Неоновая бумага",
      color: "from-yellow-600 to-lime-500",
      label: "Печать на неоновой бумаге",
    },
  ],
  photo: [
    {
      id: 7,
      alt: "Фото на паспорт",
      color: "from-blue-900 to-blue-700",
      label: "Фото на паспорт",
    },
    {
      id: 8,
      alt: "Восстановление фото",
      color: "from-amber-900 to-amber-600",
      label: "Реставрация старых фото",
    },
    {
      id: 9,
      alt: "Печать фотографий",
      color: "from-rose-900 to-pink-700",
      label: "Печать фотографий 10×15",
    },
    {
      id: 10,
      alt: "Ретушь",
      color: "from-purple-900 to-purple-700",
      label: "Профессиональная ретушь",
    },
  ],
  design: [
    {
      id: 11,
      alt: "Визитки",
      color: "from-emerald-900 to-teal-700",
      label: "Визитки под ключ",
    },
    {
      id: 12,
      alt: "Баннер",
      color: "from-cyan-900 to-sky-700",
      label: "Рекламный баннер",
    },
    {
      id: 13,
      alt: "Объявление",
      color: "from-indigo-900 to-violet-700",
      label: "Объявления и листовки",
    },
    {
      id: 14,
      alt: "Вывеска",
      color: "from-orange-900 to-amber-700",
      label: "Оформление вывески",
    },
    {
      id: 15,
      alt: "Дизайн флаера",
      color: "from-fuchsia-900 to-pink-700",
      label: "Флаеры",
    },
    {
      id: 16,
      alt: "Плакат",
      color: "from-lime-900 to-green-700",
      label: "Плакаты А1",
    },
  ],
  souvenirs: [
    {
      id: 17,
      alt: "Магниты",
      color: "from-red-900 to-rose-700",
      label: "Фотомагниты",
    },
    {
      id: 18,
      alt: "3D-стикер",
      color: "from-blue-900 to-indigo-700",
      label: "3D-стикеры",
    },
    {
      id: 19,
      alt: "Календарь",
      color: "from-amber-900 to-orange-700",
      label: "Настенные календари",
    },
    {
      id: 20,
      alt: "Фотокалендарь",
      color: "from-teal-900 to-cyan-700",
      label: "Карманные календари",
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
