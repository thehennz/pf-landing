# ПиццаФабрика 2026 — Маркетинговая стратегия
## Технический разбор проекта

---

## Стек

```
Next.js 16 (App Router) + TypeScript
Tailwind CSS
Framer Motion
Docker + Caddy (деплой)
```

---

## Архитектура

**Single Page Application** с 12 секциями:
`Nav → Hero → Goal → Product → Price → Channels → Promo → Audience → NotAudience → Service → Final → Footer`

Каждая секция — отдельный компонент. Общие переиспользуемые элементы:
- `SectionLabel` — единый заголовок секции (label + title + lead)
- `Accent` — красный блок с белым текстом для акцента в заголовках
- `Icons.tsx` — кастомные SVG-иконки

---

## Дизайн-система

**Палитра** — только 5 цветов: `#FF0000`, `#FFC800`, `#000`, `#FFF`, `#F8F8F8`. Максимум 2–3 в одном блоке.

**Типографика** — Arial everywhere, uppercase, `font-weight: 900`. Размеры через `clamp()` для плавного адаптива без брейкпоинтов:
```css
font-size: clamp(2rem, 7vw, 7rem);
```

**Правило акцента** — одно ключевое слово в заголовке оборачивается в красный блок.

---

## Анимации (Framer Motion)

**Scroll-triggered** — через `useInView`:
- Wipe снизу (`y: "110%" → 0`) для заголовков внутри `overflow-hidden`
- Fade + slide up для карточек
- Sweep красной/чёрной линии сверху (`width: 0% → 100%`)

**Hover-эффект «шторка»** — на всех карточках:
```jsx
<div className="absolute inset-0 bg-black origin-left scale-x-0
                group-hover:scale-x-100 transition-transform duration-[450ms]" />
```
Чёрная заливка выезжает слева (scaleX: 0→1), текст меняет цвет через `group-hover:`.

**Параллакс в Hero** — логотип смещается при скролле через `useScroll + useTransform`.

**Scroll opacity** — весь контент Hero плавно исчезает при скролле вниз.

**Счётчики** — числа анимируются от 0 до значения при появлении (секция Продвижение, budget charts).

**Числа-watermark** — огромные цифры `01–05` позиционированы абсолютно за контентом с `opacity 6–10%`, создают глубину без отвлечения.

---

## Типовые паттерны вёрстки

**Editorial list** — строки с большой цифрой-watermark слева, контент с padding-left:
```
[огромная цифра absolute]  НАЗВАНИЕ КАНАЛА
                           описание
```

**Grid с неравномерными карточками** — `md:row-span-2` для главной карточки в секции Цена.

**Responsive числа** — `left-2 md:-left-[0.32em]`: на мобилке внутри контейнера, на десктопе частично вылезают за левый край (дизайнерский приём).

**Принципы** с адаптивным `col-span`: длинные слова — `col-span-2 md:col-span-1`, короткие — `col-span-1`. Разная сетка на мобилке и десктопе.

**Adaptive layout без JS** — разные раскладки кнопок в Hero через `md:hidden` / `hidden md:flex`.

---

## Мобильная полировка (детально)

Провели несколько итераций мобильной отладки:

- `flex-wrap` на кнопках навигации + `whitespace-nowrap` + расчёт минимального `px` чтобы всё влезало даже на 375px iPhone SE
- `justify-start md:justify-center` — контент в Goal секции начинается сверху на мобилке, центрируется на десктопе
- `clamp()` минимумы — подбирали так чтобы заголовки не обрезались и не переполняли контейнер
- Числа-watermark: `left-2 md:-left-[0.32em]` — вычислили минимальный `pl` под каждый компонент, чтобы числа не накрывали текст
- `break-words` + уменьшение `clamp` минимума для заголовков в Каналах
- `hyphens: auto` + `overflowWrap: break-word` в блоке Принципов

---

## Инфраструктура

**Деплой:** Docker + Caddy на VPS (vdsina).

**SSL:** автоматически через Caddy + Let's Encrypt.

**Домен:** `стратегия.пиццафабрика.рф`

**Безопасность:** SSH-ключи, fail2ban, ufw, автообновления пакетов.

**SEO:** `robots.txt`, `sitemap.ts` (Next.js native), полный `metadata` с OpenGraph и Twitter Card, `lang="ru"`, canonical URL.

---

## Интересные технические решения

**`clamp()` для watermark чисел:**
```css
font-size: clamp(8rem, 16vw, 14rem);
left: 0.5rem;       /* mobile — внутри блока */
left: -0.32em;      /* desktop — частично за левым краем */
/* em относительно своего font-size — масштабируется автоматически */
```

**CSS `hyphens: auto` с `lang="ru"`** — автоматические переносы для кириллицы в компактных карточках.

**`last:col-span-2 md:last:col-span-1`** — последний элемент занимает всю ширину на мобилке и одну колонку из пяти на десктопе. Одна разметка, разное поведение.

**Числа-счётчики через Framer Motion:**
```js
animate(0, target, {
  duration: 1.8,
  ease: [0.22, 1, 0.36, 1],
  onUpdate: (v) => setValue(Math.round(v)),
})
```

---

## Тестирование мобильной вёрстки

Вся отладка проводилась **программно** через JS в браузере:
```js
// Горизонтальное переполнение
document.documentElement.scrollWidth > window.innerWidth

// Gap между числом и заголовком
titleLeft - numRight  // должен быть > 0

// Кнопки в пределах экрана
btn.getBoundingClientRect().right <= window.innerWidth
```

Субъективная полировка — на реальном iPhone 17.

---

## Оценка стоимости

| Исполнитель | Цена |
|---|---|
| Опытный фрилансер | 120 000–220 000 ₽ |
| Студия среднего уровня | 200 000–400 000 ₽ |
| Хорошая московская студия | 350 000–700 000 ₽ |

Данный проект — **~150 000–250 000 ₽** у опытного фрилансера.

---

## GitHub

Репозиторий: [github.com/thehennz/pf-landing](https://github.com/thehennz/pf-landing)  
Сайт: [стратегия.пиццафабрика.рф](https://стратегия.пиццафабрика.рф)
