"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { IconTarget, IconMoney, IconGear } from "./Icons";

const cards = [
  { Icon: IconTarget, label: "Подход", title: "Доступное качество", text: "Цены понятны и привлекательны. Качество превышает ожидания для своего ценового сегмента. Без демпинга." },
  { Icon: IconMoney, label: "Структура", title: "Комбо и наборы", text: "«Больше за меньшие деньги» — готовые решения для семьи, компании, обеда или детского стола.", highlight: true },
  { Icon: IconGear, label: "Гибкость", title: "Региональная адаптация", text: "Цены адаптируются под локальную экономику. Акции рассчитываются с фокусом на маржинальность." },
];

export default function Price() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="price" className="bg-white border-b border-black">
      <div className="px-6 md:px-14 py-20 md:py-28">
        <SectionLabel label="Ценообразование" title="Стратегия цены" lead="Средний, ближе к доступному сегменту. Клиент платит адекватную цену за вкусный и сытный продукт." />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black border border-black">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`p-8 md:p-10 ${c.highlight ? "bg-[#FF0000]" : "bg-white hover:bg-[#F8F8F8]"} transition-colors duration-300`}
            >
              <c.Icon className={`w-7 h-7 mb-5 ${c.highlight ? "text-white/70" : "text-black/30"}`} />
              <div className={`text-[9px] font-bold tracking-[0.2em] uppercase mb-2 ${c.highlight ? "text-white/60" : "text-black/40"}`}>{c.label}</div>
              <h3 className={`font-bold text-[13px] uppercase tracking-wider mb-3 ${c.highlight ? "text-white" : "text-black"}`}>{c.title}</h3>
              <p className={`text-sm leading-relaxed ${c.highlight ? "text-white/75" : "text-black/50"}`}>{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
