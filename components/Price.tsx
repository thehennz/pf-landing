"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { IconStack, IconDiamond, IconSliders } from "./Icons";

const cards = [
  {
    Icon: IconStack,
    label: "Структура",
    num: "02",
    title: "Комбо и наборы",
    text: "«Больше за меньшие деньги» — готовые решения для семьи, компании, обеда или детского стола.",
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
    text: "Цены адаптируются под локальную экономику. Акции рассчитываются с фокусом на маржинальность.",
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
          title="Стратегия цены"
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
              <p className="text-sm text-white/55 group-hover:text-white/80 leading-relaxed transition-colors duration-300 max-w-xs">
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
    </section>
  );
}
