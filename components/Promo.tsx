"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import SectionLabel from "./SectionLabel";
import Accent from "./Accent";

/* ── Счётчик ── */
function useCounter(target: number, inView: boolean, delay: number) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.8, delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return controls.stop;
  }, [inView, target, delay]);
  return value;
}

/* ── Размер шрифта пропорционально % ── */
function getFontSize(pct: number): string {
  const remMax = Math.max(3, (pct / 50) * 9);
  const remMin = Math.max(2.5, remMax * 0.55);
  const vw = (pct * 0.18).toFixed(1);
  return `clamp(${remMin.toFixed(1)}rem, ${vw}vw, ${remMax.toFixed(1)}rem)`;
}

/* ── Строка метрики ── */
function MetricRow({ label, pct, color, inView, delay }: {
  label: string; pct: number; color: string; inView: boolean; delay: number;
}) {
  const count = useCounter(pct, inView, delay);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-3"
    >
      {/* Лейбл + число */}
      <div className="flex items-end justify-between gap-4">
        <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-black/40 pb-1">
          {label}
        </span>
        <div className="flex items-start leading-none shrink-0" style={{ color }}>
          <span
            className="font-black tabular-nums"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: getFontSize(pct),
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            {count}
          </span>
          <span
            className="font-black"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.6rem)",
              opacity: 0.4,
              lineHeight: 1,
              marginTop: "0.1em",
            }}
          >
            %
          </span>
        </div>
      </div>

      {/* Бар на всю ширину */}
      <div className="h-[2px] w-full bg-black/[0.08] overflow-hidden">
        <motion.div
          className="h-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1.6, delay: delay + 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}

/* ── Данные ── */
const markets = [
  {
    title: "Зрелые рынки",
    sub: "Бренд известен",
    items: [
      { label: "Digital",    pct: 50, color: "#FF0000" },
      { label: "CRM / Push", pct: 40, color: "#FFC800" },
      { label: "Офлайн",     pct: 10, color: "#1A1A1A" },
    ],
  },
  {
    title: "Развивающиеся рынки",
    sub: "Рост знания бренда",
    items: [
      { label: "Digital",    pct: 30, color: "#FF0000" },
      { label: "CRM / Push", pct: 10, color: "#FFC800" },
      { label: "Офлайн",     pct: 60, color: "#1A1A1A" },
    ],
  },
];

const tools = [
  {
    title: "Digital-реклама",
    items: ["Таргетированная реклама в соцсетях", "Контекстная реклама и программатик", "Ретаргетинг и A/B-тесты", "Продвижение на агрегаторах"],
  },
  {
    title: "Собственные каналы",
    items: ["Push-уведомления и email-рассылки", "CRM-маркетинг и персональные офферы", "Промо в приложении и на сайте"],
  },
  {
    title: "Дисконтная политика",
    items: ["Стимулирование повторных заказов", "Увеличение среднего чека", "Повышение лояльности гостей", "Привлечение новых клиентов"],
  },
  {
    title: "OFFLINE-РЕКЛАМА",
    items: ["Наружная реклама", "Радио", "Коллаборации", "Остановки", "Лифты"],
  },
];

/* ── Компонент ── */
export default function Promo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="promo" className="bg-white border-b border-black">
      <div className="px-6 md:px-14 py-20 md:py-28">
        <SectionLabel
          label="Продвижение"
          title={<>Распределение <Accent>бюджета</Accent></>}
          lead="Стратегия зависит от зрелости рынка: зрелые — digital, развивающиеся — офлайн."
        />

        {/* ── Карточки с графиками ── */}
        <div ref={sectionRef} className="grid md:grid-cols-2 gap-6 md:gap-10 mb-16">
          {markets.map((m, mi) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: mi * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#F8F8F8] px-8 md:px-10 pt-8 pb-10"
            >
              {/* Заголовок */}
              <motion.div
                className="mb-10"
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: mi * 0.15 + 0.2 }}
              >
                <p className="text-[9px] font-bold tracking-[0.28em] uppercase text-black/30 mb-1">
                  {m.sub}
                </p>
                <h3
                  className="font-black uppercase text-black leading-tight"
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: "clamp(1.1rem, 2vw, 1.6rem)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {m.title}
                </h3>
              </motion.div>

              {/* Строки метрик — от большего к меньшему */}
              <div className="flex flex-col gap-8">
                {[...m.items].sort((a, b) => b.pct - a.pct).map((item, ii) => (
                  <MetricRow
                    key={item.label}
                    label={item.label}
                    pct={item.pct}
                    color={item.color}
                    inView={inView}
                    delay={mi * 0.15 + ii * 0.14 + 0.35}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Инструменты продвижения ── */}
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-black/40 mb-6">
          Инструменты продвижения
        </p>
        <div className="grid sm:grid-cols-2 gap-6 md:gap-10 mb-20">
          {tools.map((t, i) => {
            const ref2 = useRef<HTMLDivElement>(null);
            const inView2 = useInView(ref2, { once: true, margin: "-40px" });
            return (
              <motion.div
                key={t.title}
                ref={ref2}
                initial={{ opacity: 0, y: 20 }}
                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.09, duration: 0.6 }}
                className="bg-[#F8F8F8] px-8 md:px-10 pt-8 pb-10"
              >
                <h3
                  className="font-black uppercase text-black leading-none mb-8"
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {t.title}
                </h3>
                <div className="text-base text-black/45 leading-relaxed space-y-2">
                  {t.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-black/20 shrink-0">·</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── PR блоки — обведены красной границей ── */}
        <div className="border-2 border-[#FF0000]">
          <PRBlock />
          <PRDirectionsBlock />
          <PRMetricsBlock />
        </div>

        {/* ── Основные инструменты скидок ── */}
        <DiscountToolsBlock />

        {/* ── Принципы дисконтной политики ── */}
        <DiscountPrinciplesBlock />
      </div>
    </section>
  );
}

function PRDirectionsBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const directions = [
    "Медиа и инфоповоды",
    "Социальная ответственность и локальные проекты",
    "Корпоративный PR",
    "Антикризисные коммуникации",
    "Digital-PR и инфлюенсеры",
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: tools.length * 0.09 + 0.1, duration: 0.6 }}
      className="bg-[#F8F8F8] px-8 md:px-10 pt-8 pb-10"
    >
      <h3
        className="font-black uppercase text-black leading-none mb-8"
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "clamp(1.6rem, 3.5vw, 3.2rem)",
          letterSpacing: "-0.03em",
        }}
      >
        Основные направления PR
      </h3>
      <div className="text-base text-black/45 leading-relaxed space-y-2">
        {directions.map((dir, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <span className="text-black/20 shrink-0">·</span>
            <span>{dir}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function PRMetricsBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const metrics = [
    "Упоминания в СМИ",
    "Медиаохват",
    "Доля позитивных публикаций",
    "Рост узнаваемости бренда",
    "Динамика репутационных показателей",
    "Рост доверия к бренду (опросы, NPS)",
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: tools.length * 0.09 + 0.2, duration: 0.6 }}
      className="bg-[#F8F8F8] px-8 md:px-10 pt-8 pb-10"
    >
      <h3
        className="font-black uppercase text-black leading-none mb-8"
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "clamp(1.35rem, 3.5vw, 3.2rem)",
          letterSpacing: "-0.03em",
        }}
      >
        Метрики эффективности PR
      </h3>
      <div className="text-base text-black/45 leading-relaxed space-y-2">
        {metrics.map((metric, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <span className="text-black/20 shrink-0">·</span>
            <span>{metric}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function DiscountToolsBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const sections = [
    {
      title: "Акции и промо",
      items: [
        "Временные скидки на популярные позиции",
        "Комбо по выгодной цене",
        "Акции формата «2 по цене 1», «Пицца дня», «Счастливые часы»",
        "Сезонные предложения и лимитированные продукты",
      ],
    },
    {
      title: "Персональные предложения",
      items: [
        "Индивидуальные скидки через CRM",
        "Промокоды для возврата «спящих» клиентов",
        "Специальные предложения на основе истории заказов и персональные миссии",
      ],
    },
    {
      title: "Программа лояльности",
      items: [
        "Начисление бонусов за заказы",
        "Возможность оплаты части заказа бонусами",
        "Дополнительные бонусы за регистрацию / в день рождения",
      ],
    },
    {
      title: "Скидки в зале",
      items: [
        "Специальные предложения для гостей ресторана",
        "Акции для семей",
        "Привязка скидок к мероприятиям",
      ],
    },
    {
      title: "Digital-скидки",
      items: [
        "Эксклюзивные предложения в мобильном приложении",
        "Промокоды в соцсетях",
        "Механики «только онлайн» для стимулирования цифровых заказов",
      ],
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mt-20 pt-20 border-t border-black bg-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="font-black uppercase text-black leading-none mb-12"
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
          letterSpacing: "-0.03em",
        }}
      >
        Основные <Accent>инструменты</Accent> скидок
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {sections.map((section, si) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + si * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#F8F8F8] p-8 md:p-10"
          >
            <h3
              className="font-black uppercase text-black leading-none mb-6"
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                letterSpacing: "-0.02em",
              }}
            >
              {section.title}
            </h3>
            <div className="text-base text-black/45 leading-relaxed space-y-3">
              {section.items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-black/20 shrink-0 mt-0.5">·</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function DiscountPrinciplesBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const principles = [
    "Контролируемая маржинальность",
    "Гибкость",
    "Персонализация",
    "Омниканальность",
    "Аналитика",
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mt-20 pt-20 border-t border-black bg-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="font-black uppercase text-black leading-none mb-12"
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
          letterSpacing: "-0.03em",
        }}
      >
        <Accent>Принципы</Accent> дисконтной политики
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
        {principles.map((principle, idx) => (
          <motion.div
            key={principle}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 + idx * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group cursor-default relative overflow-hidden bg-[#F8F8F8]
                       last:col-span-2 md:last:col-span-1"
          >
            <div className="absolute inset-0 bg-black origin-left z-0
                           scale-x-0 group-hover:scale-x-100
                           transition-transform duration-[450ms] ease-[cubic-bezier(.22,1,.36,1)]" />
            <div className="relative z-10 p-5 md:p-10 min-h-[110px] md:min-h-[160px] flex items-center justify-center">
              <p className="font-black uppercase text-center text-black group-hover:text-white transition-colors duration-300 leading-tight"
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "clamp(1.25rem, 2vw, 1.4rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                {principle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function PRBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const goals = [
    "Повышение узнаваемости бренда в городах присутствия",
    "Формирование образа сильного федерального игрока",
    "Усиление доверия к качеству продукта",
    "Поддержка позиционирования",
    "Формирование имиджа надёжного работодателя",
    "Укрепление отношений с локальными сообществами",
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: tools.length * 0.09, duration: 0.6 }}
      className="bg-[#E8E8E8] px-8 md:px-10 pt-8 pb-10"
    >
      <h3
        className="font-black uppercase text-black leading-none mb-8"
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
          letterSpacing: "-0.03em",
        }}
      >
        PR
      </h3>
      <div className="text-base text-black/45 leading-relaxed space-y-2">
        {goals.map((goal, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <span className="text-black/20 shrink-0">·</span>
            <span>{goal}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
