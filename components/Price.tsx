"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "./SectionLabel";
import Accent from "./Accent";
import { IconStack, IconDiamond, IconSliders } from "./Icons";

const cards = [
  {
    Icon: IconStack,
    label: "Структура",
    num: "02",
    title: "Комбо и наборы",
    text: "«Больше за меньшие деньги» — готовые решения для семьи, компании, обеда или детского стола. Разнообразие цен за счёт размеров, порций и состава.",
    highlight: true,
  },
  {
    Icon: IconDiamond,
    label: "Подход",
    num: "01",
    title: "Доступное качество",
    text: "Цены понятны и привлекательны. Качество превышает ожидания для своего ценового сегмента. Без демпинга.",
    highlight: false,
  },
  {
    Icon: IconSliders,
    label: "Гибкость",
    num: "03",
    title: "Региональная адаптация",
    text: "Цены адаптируются под покупательскую способность в каждом регионе присутствия. Акции рассчитываются с фокусом на маржинальность.",
    highlight: false,
  },
];

export default function Price() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [main, ...rest] = cards;

  return (
    <section id="price" className="bg-white border-b border-black">
      <div className="px-6 md:px-14 py-20 md:py-28">
        <SectionLabel
          label="Ценообразование"
          title={<>Стратегия <Accent>цены</Accent></>}
          lead="Средний, ближе к доступному сегменту. Клиент платит адекватную цену за вкусный и сытный продукт."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border border-black">

          {/* Главная карточка — highlight, занимает 2 строки */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0, ease: [0.22, 1, 0.36, 1] }}
            className="md:row-span-2 group cursor-default bg-[#FF0000] hover:bg-black
                       transition-colors duration-500 relative overflow-hidden
                       min-h-[360px] md:min-h-[520px] flex flex-col p-8 md:p-10"
          >
            {/* Верх: лейбл + номер */}
            <div className="flex items-start justify-between mb-auto">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase
                               bg-white/20 text-white px-3 py-1.5
                               group-hover:bg-white/10 transition-colors duration-300">
                {main.label}
              </span>
              <span
                className="font-black leading-none text-white/20
                           group-hover:text-white/25 transition-colors duration-300"
                style={{ fontFamily: "Arial, sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
              >
                {main.num}
              </span>
            </div>

            {/* Фоновая иконка */}
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 pointer-events-none">
              <main.Icon className="w-56 h-56 md:w-72 md:h-72 text-white/10 group-hover:text-white/12 transition-colors duration-500" />
            </div>

            {/* Низ: заголовок + текст */}
            <div className="mt-auto relative z-10">
              <h3
                className="font-black uppercase leading-none text-white mb-4"
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                {main.title}
              </h3>
              <p className="text-sm text-white/55 group-hover:text-white/80 leading-relaxed transition-colors duration-300 max-w-sm">
                {main.text}
              </p>
            </div>
          </motion.div>

          {/* Остальные карточки */}
          {rest.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: (i + 1) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-default bg-[#F8F8F8] hover:bg-black
                         transition-colors duration-500 relative overflow-hidden
                         min-h-[240px] md:min-h-[260px] flex flex-col p-8 md:p-10"
            >
              {/* Верх: лейбл + номер */}
              <div className="flex items-start justify-between mb-auto">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase
                                 bg-black text-white px-3 py-1.5
                                 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  {c.label}
                </span>
                <span
                  className="font-black leading-none text-black/10
                             group-hover:text-white/20 transition-colors duration-300"
                  style={{ fontFamily: "Arial, sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
                >
                  {c.num}
                </span>
              </div>

              {/* Фоновая иконка */}
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 pointer-events-none">
                <c.Icon className="w-40 h-40 md:w-48 md:h-48 text-black/6 group-hover:text-white/10 transition-colors duration-500" />
              </div>

              {/* Низ: заголовок + текст */}
              <div className="mt-auto relative z-10">
                <h3
                  className="font-black uppercase leading-none mb-3
                             text-black/60 group-hover:text-white transition-colors duration-300"
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {c.title}
                </h3>
                <p className="text-xs text-black/35 group-hover:text-white/55 leading-relaxed transition-colors duration-300 max-w-xs">
                  {c.text}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
      {/* Психология цены */}
      <PsychologyBlock />

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
                style={{ fontFamily: "Arial, sans-serif", fontSize: "clamp(1.8rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
              >
                Качество.{" "}
                <span className="text-white/80">Простота.</span>{" "}
                <span className="text-white/60">Выгода.</span>
              </motion.span>
            </motion.div>
          </div>
        );
      })()}
    </section>
  );
}

function PsychologyBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const blocks = [
    {
      num: "01",
      title: "Форматы акций",
      items: [
        "Регулярные сетевые акции и локальные спецпредложения под каждый рынок",
        "Персонализированные офферы в приложении — на основе истории заказов",
        "Промокоды, реферальные механики и предложения для первого заказа",
      ],
    },
    {
      num: "02",
      title: "Психологические приёмы",
      items: [
        "«Красивые цены» — визуально понятные, без лишних дробей",
        "Акцент на выгоде в комбо-наборах: клиент видит экономию, а не стоимость",
        "Готовые решения упрощают выбор и снижают барьер входа",
      ],
    },
  ];

  return (
    <div className="border-t border-black bg-black">
      <div className="px-6 md:px-14 pt-20 md:pt-28 pb-0">
        <SectionLabel
          dark
          label="Ценообразование"
          title={<><Accent>Психология</Accent> цены. Скидки и акции.</>}
          lead="Как мы формируем восприятие цены и превращаем скидки в инструмент роста."
        />
      </div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border-t border-white/10 pb-20 md:pb-28">
        {blocks.map((block, bi) => (
          <motion.div
            key={block.num}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: bi * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-black px-6 md:px-14 py-10 md:py-12 group"
          >
            {/* Заголовок блока */}
            <div className="flex items-center gap-4 mb-8">
              <span className="font-black text-[#FFC800] text-2xl leading-none"
                style={{ fontFamily: "Arial, sans-serif" }}>
                {block.num}
              </span>
              <h3 className="font-black uppercase text-white tracking-wide"
                style={{ fontFamily: "Arial, sans-serif", fontSize: "clamp(1.2rem, 2.2vw, 1.56rem)", letterSpacing: "-0.01em" }}>
                {block.title}
              </h3>
            </div>

            {/* Список */}
            <ul className="flex flex-col gap-0 border-t border-white/10">
              {block.items.map((item, ii) => (
                <motion.li
                  key={ii}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: bi * 0.15 + ii * 0.1 + 0.2 }}
                  className="flex items-start gap-4 py-5 border-b border-white/10 group/item"
                >
                  <span className="shrink-0 w-1 h-1 rounded-full bg-[#FF0000] mt-2" />
                  <span className="text-base text-white/50 leading-relaxed group-hover/item:text-white/80 transition-colors duration-200">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
