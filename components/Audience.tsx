"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "./SectionLabel";

const segments = [
  { age: "18–35 лет", title: "Молодые взрослые", tags: ["Студенты", "Пары", "Соцсети"], text: "Ценят скорость, акции, кешбэк. Заказывают пиццу, роллы, комбо. Приходят через агрегаторы и приложение." },
  { age: "25–45 лет", title: "Семьи с детьми", tags: ["Родители", "Качество", "Дети"], text: "Важно качество ингредиентов и забота о детях. Ценят детские комнаты, семейные комбо и безопасность состава." },
  { age: "25–45 лет", title: "Офисные сотрудники", tags: ["Обеды", "Корпоративы", "Самовывоз"], text: "Обеды, пятничные перекусы, корпоративные заказы. Ждут стабильности, чёткой логистики и простоты заказа." },
  { age: "14–18 лет", title: "Подростки", tags: ["Соцсети", "Новинки", "Снэки"], text: "Высокая вовлечённость в визуальный контент. Важно: вкусно, недорого, интерес к новинкам." },
];

export default function Audience() {
  return (
    <section id="audience" className="bg-black border-t-4 border-[#FF0000]">
      <div className="px-6 md:px-14 py-20 md:py-28">
        <SectionLabel dark label="Целевая аудитория" title="Ключевые сегменты" lead="ПиццаФабрика — для тех, кто ценит простое. Доступно, стабильно, вкусно, удобно." />
        <div className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {segments.map((s, i) => {
            const ref = useRef<HTMLDivElement>(null);
            const inView = useInView(ref, { once: true, margin: "-40px" });
            return (
              <motion.div
                key={s.title}
                ref={ref}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#111] p-8 md:p-10 group cursor-default hover:bg-[#FF0000] transition-colors duration-400"
              >
                <div
                  className="text-[#FFC800] text-xs font-bold tracking-widest uppercase mb-3 group-hover:text-white transition-colors duration-300"
                  style={{ fontFamily: "'Unbounded', sans-serif" }}
                >
                  {s.age}
                </div>
                <h3 className="font-bold text-base uppercase tracking-wide text-white mb-4" style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "0.85rem" }}>
                  {s.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {s.tags.map((tag) => (
                    <span key={tag} className="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 bg-white/8 text-white/40 group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-white/40 group-hover:text-white/85 leading-relaxed transition-colors duration-300">{s.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
