"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "./SectionLabel";

const channels = [
  { num: "01", name: "Собственная доставка", desc: "Флагманский канал. Полный контроль сервиса и экономики. Среднее время — 30–35 минут.", tag: "Приоритет", tagColor: "bg-[#FF0000] text-white" },
  { num: "02", name: "Мобильное приложение", desc: "Ключевой digital-инструмент. Быстрый заказ, история, персональные предложения, программа лояльности.", tag: "Digital-центр", tagColor: "bg-[#1FC139] text-white" },
  { num: "03", name: "Официальный сайт", desc: "Полноценный канал продаж. Доставка, самовывоз, SEO-трафик, информационная платформа бренда.", tag: "Основной", tagColor: "bg-black text-white" },
  { num: "04", name: "Агрегаторы", desc: "Яндекс Еда, Delivery Club, Чиббис. Привлечение новой аудитории. Задача — перевод в собственные каналы.", tag: "Доп. трафик", tagColor: "bg-[#F8F8F8] text-black border border-black/20" },
  { num: "05", name: "Самовывоз", desc: "Для клиентов рядом с точкой. Бонусы и спецпредложения. Быстрая сборка, приоритетная выдача.", tag: "Локальный", tagColor: "bg-[#F8F8F8] text-black border border-black/20" },
  { num: "06", name: "Зал", desc: "Меньшая доля в выручке, но важная роль. Узнаваемость, эмоциональная связь, семейный центр, B2B.", tag: "Бренд", tagColor: "bg-[#FFC800] text-black" },
];

export default function Channels() {
  return (
    <section id="channels" className="bg-[#F8F8F8] border-b border-black">
      <div className="px-6 md:px-14 py-20 md:py-28">
        <SectionLabel label="Каналы продаж" title="Омниканальность" lead="Единое меню, акции и программа лояльности во всех каналах." />
        <div className="border border-black divide-y divide-black">
          {channels.map((c, i) => {
            const ref = useRef<HTMLDivElement>(null);
            const inView = useInView(ref, { once: true, margin: "-40px" });
            return (
              <motion.div
                key={c.num}
                ref={ref}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-4 md:gap-8 bg-white px-4 md:px-8 py-5 group cursor-default hover:bg-black transition-colors duration-300"
              >
                <span
                  className="text-xl font-black text-black/10 group-hover:text-[#FF0000] transition-colors duration-300 w-10 shrink-0 hidden md:block"
                  style={{ fontFamily: "'Unbounded', sans-serif" }}
                >
                  {c.num}
                </span>
                <span className="font-bold text-sm uppercase tracking-wide w-44 shrink-0 group-hover:text-white transition-colors duration-300">
                  {c.name}
                </span>
                <span className="text-xs text-black/50 group-hover:text-white/60 leading-relaxed flex-1 transition-colors duration-300 hidden sm:block">
                  {c.desc}
                </span>
                <span className={`text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 shrink-0 ${c.tagColor}`}>
                  {c.tag}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
