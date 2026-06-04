"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "./SectionLabel";
import Accent from "./Accent";
import { IconPizza, IconRoll, IconFries, IconHot, IconSnack, IconSalad, IconChild } from "./Icons";

const positioning = [
  { num: "01", title: "Доступность", text: "Стратегия доступного качества: цены привлекательны для широкой аудитории, без демпинга и без ухода в премиум." },
  { num: "02", title: "Эмоциональная близость", text: "Продукт «для себя и для своих» — понятный вкус, который нравится семье, друзьям, коллегам." },
  { num: "03", title: "Качество без компромиссов", text: "Натуральные проверенные ингредиенты. Стабильный стандарт вкуса на каждой точке." },
  { num: "04", title: "Удобство", text: "Любой канал — доставка, зал, самовывоз, агрегаторы. Единое меню и программа лояльности везде." },
  { num: "05", title: "Вкус", text: "Стабильный вкус — не случайность, а стандарт. Контроль на каждом этапе: от ингредиентов до готового блюда." },
];

const products = [
  { Icon: IconPizza,  title: "Пицца",                  badge: "Ключевая категория", text: "Главный драйвер продаж. Три размера, классика и актуальные новинки. Регулярное обновление ассортимента.",      tier: "primary",
    points: ["Высококачественное тесто", "Тянущийся сыр от надёжных поставщиков", "Только проверенные ингредиенты"] },
  { Icon: IconRoll,   title: "Роллы",                  badge: "2-я по значимости",  text: "Ключевые вкусовые предпочтения. Тренды. Доступный ценовой сегмент.",                           tier: "primary",
    points: ["Простой и понятный вкус", "Свежесть продукта", "Часто заказывается как дополнение к пицце", "Визуальная подача"] },
  { Icon: IconHot,    title: "Горячие блюда",          badge: null,                 text: "Расширяет меню для тех, кто хочет полноценный горячий обед. Стабильное качество и стандарты.",                   tier: "secondary" },
  { Icon: IconFries,  title: "Стритфуд",               badge: null,                 text: "Картофель фри, наггетсы и другие бестселлеры. Идеально как дополнение к основному заказу.",                    tier: "secondary",
    points: ["Простой и понятный продукт", "Стабильное качество", "Повышенный контроль качества"] },
  { Icon: IconSnack,  title: "Закуски",                badge: null,                 text: "Лёгкие и быстрые позиции — для компании, офиса или дополнения к основному блюду.",                              tier: "secondary" },
  { Icon: IconSalad,  title: "Салаты",                 badge: null,                 text: "Свежие и лёгкие позиции для тех, кто ценит баланс в питании.",                                              tier: "secondary" },
];

const utp = [
  "Мультиформат для любой ситуации",
  "Максимум качества при доступной цене",
  "Сильная фокусная категория — пицца",
  "Регулярное обновление ассортимента",
  "Сбалансированные роллы без переплаты",
  "Контроль качества в простых категориях",
  "Детское меню, которому доверяют родители",
  "Упаковка как часть продукта",
  "Простота и понятность вкусов",
  "Продукт «для себя и для своих»",
];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

const packagingFeatures = [
  { word: "Впечатление", sub: "с первого касания" },
  { word: "Доверие",     sub: "с первого взгляда" },
  { word: "Вкус",        sub: "сохранён до конца" },
];

function PackagingBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div className="border-b border-black bg-white">
      <div className="px-6 md:px-14 py-20 md:py-28">
        <FadeIn>
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#FF0000] mb-3">
            Продукт
          </p>
          <div className="overflow-hidden mb-14">
            <motion.h2
              className="font-black uppercase text-black leading-none"
              style={{ fontFamily: "Arial, sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.03em" }}
              initial={{ y: "105%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Упаковка это{" "}
              <span className="bg-[#FF0000] text-white px-3 py-1 inline-block">
                часть продукта
              </span>
            </motion.h2>
          </div>
        </FadeIn>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {packagingFeatures.map((f, i) => (
            <motion.div
              key={f.word}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-default relative overflow-hidden bg-[#F8F8F8]"
            >
              <div className="absolute inset-0 bg-black origin-left z-0
                             scale-x-0 group-hover:scale-x-100
                             transition-transform duration-[450ms] ease-[cubic-bezier(.22,1,.36,1)]" />
              <div className="relative z-10 flex flex-col p-8 md:p-10 min-h-[220px]">
                <h3
                  className="font-black uppercase leading-none mt-auto mb-3
                             text-black group-hover:text-white transition-colors duration-300"
                  style={{ fontFamily: "Arial, sans-serif", fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)", letterSpacing: "-0.03em" }}
                >
                  {f.word}
                </h3>
                <p className="text-sm text-black/45 group-hover:text-white/65 transition-colors duration-300">
                  {f.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Product() {
  return (
    <section id="product" className="bg-white">

      {/* Positioning — vertical editorial list */}
      <div className="border-b border-black">
        <div className="px-6 md:px-14 pt-20 md:pt-28 pb-0">
          <SectionLabel label="Продукт" title={<>Позиционирование и <Accent>концепция</Accent></>} lead="Максимальное качество при доступной цене. Просто, понятно, для всех." />
        </div>

        {positioning.map((p, i) => {
          const ref = useRef<HTMLDivElement>(null);
          const inView = useInView(ref, { once: true, margin: "-60px" });
          return (
            <motion.div
              key={p.num}
              ref={ref}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group cursor-default border-t border-black hover:bg-black transition-colors duration-500 relative overflow-hidden"
            >
              {/* Animated fill on hover */}
              <motion.div
                className="absolute inset-0 bg-black origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />

              <div className="relative z-10 grid grid-cols-[80px_1fr] md:grid-cols-[140px_1fr_1fr] items-center gap-0 px-6 md:px-14 py-8 md:py-10">

                {/* Number */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="font-black leading-none text-black/12 group-hover:text-[#FFC800] transition-colors duration-300 self-center"
                  style={{ fontFamily: "Arial, sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
                >
                  {p.num}
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.65, delay: i * 0.1 + 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="font-black uppercase leading-none text-black group-hover:text-white transition-colors duration-300 self-center"
                  style={{ fontFamily: "Arial, sans-serif", fontSize: "clamp(1.3rem, 2.2vw, 2.2rem)", letterSpacing: "-0.02em" }}
                >
                  {p.title}
                </motion.h3>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                  className="hidden md:flex flex-col gap-3 pl-10 border-l border-black/10 group-hover:border-white/15 transition-colors duration-300"
                >
                  <p className="text-sm text-black/40 group-hover:text-white/55 leading-relaxed transition-colors duration-300 max-w-sm">
                    {p.text}
                  </p>
                </motion.div>

              </div>
            </motion.div>
          );
        })}

        {/* Акцентная фраза */}
        {(() => {
          const ref = useRef<HTMLDivElement>(null);
          const inView = useInView(ref, { once: true, margin: "-60px" });
          return (
            <div ref={ref} className="overflow-hidden border-t border-black">
              <motion.div
                initial={{ x: "-100%" }}
                animate={inView ? { x: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#FF0000] px-6 md:px-14 py-8 md:py-10 flex items-center gap-6"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-white font-black uppercase leading-none"
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Эмоционально.{" "}
                  <span className="text-white/80">Близко.</span>{" "}
                  <span className="text-white/60">Повседневно.</span>
                </motion.span>
              </motion.div>
            </div>
          );
        })()}

      </div>

      {/* Упаковка как часть продукта */}
      <PackagingBlock />

      {/* Под любую ситуацию */}
      <div className="border-b border-black">
        <div className="px-6 md:px-14 pt-20 md:pt-28 pb-0">
          <SectionLabel label="Применение" title={<>Продукт под любую <Accent>ситуацию</Accent></>} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border-t border-black">

          {[
            {
              num: "01",
              title: "Для семьи",
              desc: "Большие комбо, детское меню, семейные залы. Один заказ — и все довольны.",
              bg: "bg-black",
              dark: true,
            },
            {
              num: "02",
              title: "Для офиса",
              desc: "Корпоративные заказы, стабильное время доставки, простое оформление для команды.",
              bg: "bg-white",
              dark: false,
            },
            {
              num: "03",
              title: "Для компании друзей",
              desc: "Широкий ассортимент, акции на большие заказы, быстрая доставка в любую точку.",
              bg: "bg-[#F8F8F8]",
              dark: false,
            },
            {
              num: "04",
              title: "Для индивидуального заказа",
              desc: "Личный кабинет, история заказов, быстрый повтор любимого набора.",
              bg: "bg-[#FF0000]",
              dark: true,
            },
          ].map((s, i) => {
            const ref = useRef<HTMLDivElement>(null);
            const inView = useInView(ref, { once: true, margin: "-60px" });
            return (
              <motion.div
                key={s.num}
                ref={ref}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`${s.bg} group cursor-default hover:bg-black transition-colors duration-500 relative overflow-hidden min-h-[280px] md:min-h-[320px] flex flex-col justify-between p-8 md:p-12`}
              >
                <div
                  className={`absolute -bottom-4 -right-2 font-black leading-none pointer-events-none select-none transition-colors duration-500 ${s.dark ? "text-white/6 group-hover:text-white/8" : "text-black/5 group-hover:text-white/6"}`}
                  style={{ fontFamily: "Arial, sans-serif", fontSize: "clamp(8rem, 16vw, 14rem)" }}
                >
                  {s.num}
                </div>
                <div className="relative z-10">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: i * 0.1 + 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className={`font-black uppercase leading-none mb-4 transition-colors duration-300 ${s.dark ? "text-white" : "text-black group-hover:text-white"}`}
                    style={{ fontFamily: "Arial, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)", letterSpacing: "-0.03em" }}
                  >
                    {s.title}
                  </motion.h3>
                  <p className={`text-sm leading-relaxed max-w-xs transition-colors duration-300 ${s.dark ? "text-white/45 group-hover:text-white/65" : "text-black/40 group-hover:text-white/55"}`}>
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Products — large cards */}
      <div className="px-6 md:px-14 py-20 md:py-28 bg-[#F8F8F8] border-b border-black">
        <SectionLabel label="Ассортимент" title={<>Продуктовая <Accent>матрица</Accent></>} lead="Всё в одном месте — для семьи, офиса, компании или индивидуального заказа." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black border border-black">
          {products.map((p, i) => {
            const isPrimary = p.tier === "primary";
            return (
            <FadeIn key={p.title} delay={i * 0.07}>
              <div className={`group cursor-default h-full flex flex-col transition-colors duration-500 relative overflow-hidden p-8 md:p-10
                ${isPrimary
                  ? "bg-black hover:bg-[#FF0000] min-h-[320px]"
                  : "bg-[#F8F8F8] hover:bg-black min-h-[280px]"
                }`}>

                <div className="flex items-start justify-between h-10 shrink-0">
                  {p.badge
                    ? <span className={`text-[11px] font-bold tracking-wider uppercase px-4 py-2 transition-colors duration-300 self-start
                        ${isPrimary ? "bg-white/15 text-white group-hover:bg-white/25" : "bg-black text-white group-hover:bg-white group-hover:text-black"}`}>
                        {p.badge}
                      </span>
                    : <span />
                  }
                  <span className={`font-black tabular-nums leading-none transition-colors duration-300
                    ${isPrimary ? "text-white/20 group-hover:text-white/30" : "text-black/10 group-hover:text-white/20"}`}
                    style={{ fontFamily: "Arial, sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="absolute -right-12 top-1/2 -translate-y-1/2 pointer-events-none">
                  <p.Icon className={`transition-all duration-500
                    ${isPrimary ? "text-white/10 group-hover:text-white/15" : "text-black/6 group-hover:text-white/10"}
                    ${isPrimary ? "w-44 h-44 md:w-52 md:h-52" : "w-36 h-36 md:w-40 md:h-40"}`} />
                </div>

                <div className="flex-1" />

                <div className="relative z-10">
                  <h3 className={`font-black uppercase leading-none mb-3 transition-colors duration-300
                    ${isPrimary ? "text-white" : "text-black/60 group-hover:text-white"}`}
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                      letterSpacing: "-0.03em"
                    }}>
                    {p.title}
                  </h3>

                  <div className="relative min-h-[4rem]">
                    {'points' in p && p.points ? (
                      <>
                        <p className={`text-xs leading-relaxed transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2
                          ${isPrimary ? "text-white/45" : "text-black/35"}`}>
                          {p.text}
                        </p>
                        <ul className="absolute inset-0 flex flex-col gap-1.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          {p.points.map((point: string, pi: number) => (
                            <li key={pi}
                              className="flex items-start gap-2 text-xs leading-snug text-white"
                              style={{ transitionDelay: `${pi * 60}ms` }}>
                              <span className="shrink-0 mt-0.5 w-3 h-px bg-white/60 inline-block translate-y-[5px]" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <p className={`text-xs leading-relaxed transition-colors duration-300
                        ${isPrimary ? "text-white/45 group-hover:text-white/80" : "text-black/35 group-hover:text-white/55"}`}>
                        {p.text}
                      </p>
                    )}
                  </div>
                </div>

              </div>
            </FadeIn>
            );
          })}
        </div>
        {/* Детское меню — отдельный акцентный блок */}
        <FadeIn delay={0.3}>
          <div className="border border-t-0 border-black bg-[#FFC800] group cursor-default hover:bg-[#FF0000] transition-colors duration-500 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 p-8 md:p-12 relative z-10">
              <div className="flex-1">
                <span className="inline-block text-[11px] font-bold tracking-wider uppercase bg-black text-white px-4 py-2 mb-5 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  Наша отличительная черта
                </span>
                <h3
                  className="font-black uppercase leading-none text-black group-hover:text-white transition-colors duration-500 mb-4"
                  style={{ fontFamily: "Arial, sans-serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}
                >
                  Детское меню
                </h3>
                <p className="text-sm text-black/60 group-hover:text-white/60 leading-relaxed max-w-lg transition-colors duration-300">
                  Специальные позиции, разработанные для детей. Строгий контроль качества
                  и безопасности состава — родитель спокоен, ребёнок доволен.
                  Детские зоны в каждом ресторане.
                </p>
              </div>
            </div>
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 pointer-events-none">
              <IconChild className="w-48 h-48 md:w-64 md:h-64 text-black/8 group-hover:text-white/8 transition-colors duration-500" />
            </div>
          </div>
        </FadeIn>

      </div>

      {/* UTP */}
      <div className="bg-[#FFC800]">
        <div className="px-6 md:px-14 pt-20 md:pt-28 pb-0">
          <SectionLabel label="УТП продукта" title={<>10 ключевых <Accent>преимуществ</Accent></>} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-black">
          {utp.map((item, i) => {
            const ref = useRef<HTMLDivElement>(null);
            const inView = useInView(ref, { once: true, margin: "-40px" });
            return (
              <motion.div
                key={i}
                ref={ref}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`group cursor-default border-b border-black hover:bg-black transition-colors duration-300 relative
                  ${i % 2 === 0 ? "md:border-r border-black" : ""}`}
              >
                <div className="flex items-center gap-6 md:gap-8 px-6 md:px-10 py-6 md:py-8">
                  {/* Number */}
                  <span
                    className="font-black leading-none shrink-0 text-black/20 group-hover:text-white/20 transition-colors duration-300 w-12 md:w-16"
                    style={{ fontFamily: "Arial, sans-serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Text */}
                  <span
                    className="font-black uppercase leading-tight text-black group-hover:text-white transition-colors duration-300"
                    style={{ fontFamily: "Arial, sans-serif", fontSize: "clamp(1rem, 1.8vw, 1.5rem)", letterSpacing: "-0.02em" }}
                  >
                    {item}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
