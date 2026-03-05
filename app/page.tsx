"use client";

import Image from "next/image";
import "yet-another-react-lightbox/styles.css";
import { useState, useEffect, useRef } from "react";
import YALightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/plugins/captions.css";
import Captions from "yet-another-react-lightbox/plugins/captions";

import { useFadeIn } from "@/hooks";

import {
  links,
  services,
  portfolioTabs,
  portfolioItems,
  storeItemsWithIcons,
} from "./data";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      role="banner"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-ink-950/95 backdrop-blur-md border-b border-ink-800/50"
    >
      <nav
        aria-label="Главное меню"
        className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16"
      >
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center text-white font-bold text-sm">
            К
          </span>
          <span className="text-white font-semibold text-lg leading-none">
            Копицентр
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="nav-link text-ink-300 hover:text-white text-sm transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacts"
          className="hidden md:inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Связаться
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Открыть меню"
        >
          <div className="w-5 space-y-1">
            <span
              className={`block h-px bg-white transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`block h-px bg-white transition-all ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px bg-white transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ink-950/98 backdrop-blur-lg border-t border-ink-800/50 px-4 py-4">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="block py-3 text-ink-300 hover:text-white transition-colors border-b border-ink-800/30 text-sm"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      aria-label="Главный экран"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-ink-950" />
      <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-950 to-primary-950/40" />
      {/* Decorative circle */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary-500/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-primary-600/8 blur-3xl" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#f17015 1px, transparent 1px), linear-gradient(90deg, #f17015 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16 py-4">
        <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
          <span className="text-primary-400 text-sm font-medium">
            Работаем с вторника по воскресенье с 8:00
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Копицентр на
          <br />
          <span className="text-primary-400">Центральном рынке</span>
        </h1>

        <p className="text-ink-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Доступные цены, профессиональная техника, оригинальные материалы.
          Быстро и качественно&nbsp;— так работаем мы.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#services"
            className="w-full sm:w-auto bg-primary-500 hover:bg-primary-400 text-white font-semibold px-8 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary-500/20 hover:-translate-y-0.5"
          >
            Наши услуги
          </a>
          <a
            href="#contacts"
            className="w-full sm:w-auto border border-ink-600 hover:border-primary-500 text-ink-200 hover:text-primary-400 font-semibold px-8 py-3.5 rounded-xl transition-all"
          >
            Как нас найти
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { value: "2+", label: "Года работы" },
            { value: "30+", label: "Видов услуг" },
            { value: "1000+", label: "Клиентов в месяц" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-bold text-primary-400">{value}</div>
              <div className="text-ink-400 text-xs mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-600 flex flex-col items-center gap-1">
        <span className="text-xs">Прокрутите вниз</span>
        <div className="w-px h-8 bg-gradient-to-b from-ink-600 to-transparent" />
      </div>
    </section>
  );
}

function Services() {
  const ref = useRef(null);
  useFadeIn(ref);

  return (
    <section
      id="services"
      className="py-24 px-4 sm:px-6"
      aria-labelledby="services-heading"
    >
      <div ref={ref} className="section-fade max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary-500 text-sm font-semibold uppercase tracking-widest">
            Что мы делаем
          </span>
          <h2
            id="services-heading"
            className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4"
          >
            Наши услуги
          </h2>
          <p className="text-ink-400 max-w-xl mx-auto">
            Широкий спектр услуг для частных лиц и бизнеса по доступным ценам.
          </p>
        </div>

        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          role="list"
        >
          {services.map((s) => (
            <li
              key={s.title}
              className="service-card group bg-ink-900/60 border border-ink-800/50 hover:border-primary-500/30 rounded-2xl p-6 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-ink-800 flex items-center justify-center text-2xl mb-4 group-hover:bg-primary-500/10 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {s.title}
              </h3>
              <p className="text-ink-400 text-sm leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Lightbox({
  item,
  onClose,
}: {
  onClose: () => void;
  item: { alt: string; src?: string; color: string; label: string };
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      onClick={onClose}
      aria-modal="true"
      aria-label={item.alt}
      className="lightbox-overlay"
    >
      <button
        onClick={onClose}
        aria-label="Закрыть"
        className="absolute top-4 right-4 text-white/60 hover:text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-xl transition-colors"
      >
        ✕
      </button>
      <div
        className="max-w-2xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br ${item.color} flex items-end p-6 shadow-2xl`}
        >
          {item.src && (
            <Image
              fill
              priority
              src={item.src}
              alt={item.alt}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          )}
          <div className="absolute inset-0 bg-black/20" />
          <div className="bg-black/40 backdrop-blur-sm rounded-xl px-4 py-2">
            <p className="text-white font-semibold">{item.label}</p>
            <p className="text-white/60 text-sm mt-0.5">
              Пример работы · Копицентр Горловка
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Portfolio() {
  const ref = useRef(null);
  const [activeTab, setActiveTab] = useState("print");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  useFadeIn(ref);

  const currentItems = portfolioItems[activeTab];

  const slides = currentItems.map(
    (item: { src?: string; alt: string; label: string }) => ({
      src: item.src ?? "/placeholder.png",
      alt: item.alt,
      title: item.label,
      description: "Пример работы · Копицентр Горловка",
    }),
  );

  return (
    <section
      id="portfolio"
      className="py-24 px-4 sm:px-6 bg-ink-900/30"
      aria-labelledby="portfolio-heading"
    >
      <div ref={ref} className="section-fade max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary-500 text-sm font-semibold uppercase tracking-widest">
            Наши работы
          </span>
          <h2
            id="portfolio-heading"
            className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4"
          >
            Примеры работ
          </h2>
          <p className="text-ink-400 max-w-xl mx-auto">
            Посмотрите на результаты нашей работы. Нажмите на фото для
            просмотра.
          </p>
        </div>

        {/* Tabs */}
        <div
          className="flex gap-1 flex-wrap justify-center mb-10"
          role="tablist"
          aria-label="Категории работ"
        >
          {portfolioTabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-primary-500 text-white shadow-lg shadow-primary-500/20"
                  : "bg-ink-800/60 text-ink-400 hover:text-white hover:bg-ink-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          role="tabpanel"
          aria-label={portfolioTabs.find((t) => t.id === activeTab)?.label}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
        >
          {currentItems.map(
            (
              item: {
                id: string;
                alt: string;
                src?: string;
                color: string;
                label: string;
              },
              idx: number,
            ) => (
              <button
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                aria-label={`Открыть: ${item.label}`}
                className="photo-grid-item aspect-[4/3] relative rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-500 text-left"
              >
                {item.src ? (
                  <Image
                    fill
                    src={item.src}
                    alt={item.alt}
                    className="object-cover transition-transform duration-400 hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} transition-transform duration-400 hover:scale-105`}
                  />
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white text-xs font-medium">
                    {item.label}
                  </span>
                </div>

                {!item.src && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white/40"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </button>
            ),
          )}
        </div>
      </div>

      <YALightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
        plugins={[Captions]}
      />
    </section>
  );
}

function AppSection() {
  const ref = useRef(null);
  useFadeIn(ref);

  return (
    <section
      id="app"
      className="py-24 px-4 sm:px-6"
      aria-labelledby="app-heading"
    >
      <div ref={ref} className="section-fade max-w-5xl mx-auto">
        <div className="relative bg-gradient-to-br from-primary-900/40 via-ink-900 to-ink-900 border border-primary-500/20 rounded-3xl p-8 sm:p-12 overflow-hidden amber-glow">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-3 py-1 mb-6">
                <span className="text-primary-400 text-sm">
                  📱 Мобильное приложение
                </span>
              </div>
              <h2
                id="app-heading"
                className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight"
              >
                Закажи печать
                <br />
                <span className="text-primary-400">заранее с телефона</span>
              </h2>
              <p className="text-ink-300 mb-6 leading-relaxed">
                Уникальная возможность: сделайте заказ прямо с телефона и
                заберите готовые распечатки в удобное для вас время. Никаких
                очередей!
              </p>
              <ul className="space-y-3 text-sm text-ink-300">
                {[
                  "Выберите нужное время получения",
                  "Загрузите файлы прямо из телефона",
                  "Придите и заберите — всё готово",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400 text-xs flex-shrink-0">
                      ✓
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  target="_blank"
                  href="https://t.me/capyprintbot"
                  className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5"
                >
                  Узнать подробнее →
                </a>
              </div>
            </div>

            {/* Phone mockup */}
            <div className="flex justify-center">
              <div className="relative w-48 h-80 bg-ink-800 rounded-[2.5rem] border-4 border-ink-700 shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-ink-900" />
                <div className="relative z-10 text-center px-4">
                  <div className="text-5xl mb-3">🖨️</div>
                  <div className="text-white font-semibold text-sm">
                    КопиЦентр
                  </div>
                  <div className="text-ink-400 text-xs mt-1">Заказ печати</div>
                </div>
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-ink-950 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoreSection() {
  const ref = useRef(null);
  useFadeIn(ref);

  return (
    <section
      id="store"
      className="py-24 px-4 sm:px-6 bg-ink-900/20"
      aria-labelledby="store-heading"
    >
      <div ref={ref} className="section-fade max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary-500 text-sm font-semibold uppercase tracking-widest">
            Магазин
          </span>
          <h2
            id="store-heading"
            className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4"
          >
            Всегда в наличии
          </h2>
          <p className="text-ink-400 max-w-xl mx-auto">
            Помимо услуг, у нас всегда есть широкий ассортимент канцелярских
            товаров.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {storeItemsWithIcons.map((item, i) => (
            <div
              key={i}
              className="bg-ink-800/50 border border-ink-700/40 hover:border-primary-500/30 rounded-2xl p-5 text-center transition-all hover:-translate-y-1 cursor-default"
            >
              <div className="flex justify-center mb-3">{item.icon}</div>
              <p className="text-ink-200 text-sm font-medium leading-tight">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacts() {
  const ref = useRef(null);
  useFadeIn(ref);

  const schedule = [
    { days: "Вторник — Пятница", hours: "08:00 – 13:30" },
    { days: "Суббота – Воскресенье", hours: "08:00 – 12:00" },
    { days: "Понедельник", hours: "Выходной" },
  ];

  return (
    <section
      id="contacts"
      className="py-24 px-4 sm:px-6"
      aria-labelledby="contacts-heading"
    >
      <div ref={ref} className="section-fade max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary-500 text-sm font-semibold uppercase tracking-widest">
            Контакты
          </span>
          <h2
            id="contacts-heading"
            className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4"
          >
            Где нас найти
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Info */}
          <div className="bg-ink-900/60 border border-ink-800/50 rounded-2xl p-8 space-y-8">
            {/* Address */}
            <div>
              <div className="text-primary-500 text-xs font-semibold uppercase tracking-wider mb-3">
                📍 Адрес
              </div>
              <address className="not-italic text-ink-200 leading-relaxed">
                <strong className="text-white">Горловка, ул. Изотова, 7</strong>
                <br />
                На пересечении ул. М. Тореза и Изотова,
                <br />
                рядом с ТД Донбасс (Стройленд)
              </address>
            </div>

            {/* Schedule */}
            <div>
              <div className="text-primary-500 text-xs font-semibold uppercase tracking-wider mb-3">
                🕐 График работы
              </div>
              <ul className="space-y-2">
                {schedule.map(({ days, hours }) => (
                  <li
                    key={days}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className="text-ink-400">{days}</span>
                    <span
                      className={`font-semibold ${hours === "Выходной" ? "text-ink-500" : "text-white"}`}
                    >
                      {hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Note */}
            <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-4">
              <p className="text-primary-300 text-sm leading-relaxed">
                <strong>Удобное расположение:</strong> Центральный рынок
                Горловки — легко добраться на любом транспорте.
              </p>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-ink-900/60 border border-ink-800/50 rounded-2xl overflow-hidden relative min-h-64">
            <div className="absolute inset-0 bg-gradient-to-br from-ink-800 to-ink-950 flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary-500/10 flex items-center justify-center text-3xl">
                📍
              </div>
              <div className="text-center">
                <p className="text-white font-semibold">ул. Изотова, 7</p>
                <p className="text-ink-400 text-sm">Горловка</p>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://maps.google.com/?q=Горловка+Изотова+7"
                className="bg-primary-500 hover:bg-primary-400 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-colors"
              >
                Открыть на картах
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="border-t border-ink-800/50 py-8 px-4 sm:px-6"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-ink-500">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-primary-500/80 flex items-center justify-center text-white text-xs font-bold">
            К
          </span>
          <span>Копицентр на Центральном рынке, Горловка</span>
        </div>
        <div>ул. Изотова, 7 · Вт–Пт 08:00–13:30 · Сб–Вс 08:00–12:00</div>
        <div className="text-ink-600">
          © {new Date().getFullYear()} Все права защищены
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <AppSection />
      <StoreSection />
      <Contacts />
      <Footer />
    </main>
  );
}
