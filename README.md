# Копицентр — Сайт

## Запуск

```bash
npm install
npm run dev
```

## Сборка для продакшена

```bash
npm run build
npm start
```

## Структура

- `app/layout.js` — SEO метаданные, JSON-LD разметка, шрифты
- `app/page.js` — Весь контент: Hero, Услуги, Портфолио, Приложение, Товары, Контакты
- `app/globals.css` — Стили + кастомные анимации
- `app/sitemap.js` — Автоматическая карта сайта
- `app/robots.txt` — Инструкции для поисковых роботов

## SEO

- ✅ Метатеги title, description, keywords
- ✅ Open Graph для соцсетей
- ✅ JSON-LD разметка (LocalBusiness Schema)
- ✅ Семантические HTML-теги (main, section, nav, header, footer, address, h1, h2, h3)
- ✅ ARIA атрибуты для доступности
- ✅ robots.txt
- ✅ Sitemap
- ✅ Canonical URL
