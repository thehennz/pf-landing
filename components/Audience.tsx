"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "./SectionLabel";
import Accent from "./Accent";

const segments = [
  {
    age: "18 – 35",
    title: "Молодые взрослые",
    tags: ["Студенты", "Пары", "Соцсети"],
    text: "Ценят скорость, акции, кешбэк. Заказывают пиццу, роллы, комбо. Приходят через агрегаторы и приложение.",
  },
  {
    age: "25 – 45",
    title: "Семьи с детьми",
    tags: ["Родители", "Качество", "Дети"],
    text: "Важно качество ингредиентов и забота о детях. Ценят детские комнаты, семейные комбо и безопасность состава.",
  },
  {
    age: "25 – 45",
    title: "Офисные сотрудники",
    tags: ["Обеды", "Корпоративы", "Самовывоз"],
    text: "Обеды, пятничные перекусы, корпоративные заказы. Ждут стабильности, чёткой логистики и простоты заказа.",
  },
  {
    age: "14 – 18",
    title: "Подростки",
    tags: ["Соцсети", "Новинки", "Снэки"],
    text: "Высокая вовлечённость в визуальный контент. Важно: вкусно, недорого, интерес к новинкам.",
  },
];

export default function Audience() {
  return (
    <section id="audience" className="bg-white border-b border-black">
      <div className="px-6 md:px-14 py-20 md:py-28">
        <SectionLabel
          label="Целевая аудитория"
          title={<>Ключевые <Accent>сегменты</Accent></>}
          lead="ПиццаФабрика — для тех, кто ценит простое. Доступно, стабильно, вкусно, удобно."
        />

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
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
                className="group cursor-default relative overflow-hidden bg-[#F8F8F8]"
              >
                {/* Sweep-анимация при наведении */}
                <div className="absolute inset-0 bg-black origin-left z-0
                               scale-x-0 group-hover:scale-x-100
                               transition-transform duration-[450ms] ease-[cubic-bezier(.22,1,.36,1)]" />

                <div className="relative z-10 flex flex-col gap-6 p-8 md:p-10 min-h-[300px]">

                  {/* Возраст — главный акцент */}
                  <div className="flex items-baseline gap-2 leading-none">
                    <span
                      className="font-black text-[#FF0000] leading-none"
                      style={{
                        fontFamily: "Arial, sans-serif",
                        fontSize: "clamp(3.5rem, 7vw, 6rem)",
                        letterSpacing: "-0.04em",
                      }}
                    >
                      {s.age}
                    </span>
                    <span
                      className="font-bold text-[#FF0000]/50 group-hover:text-[#FF0000]/70 transition-colors duration-300"
                      style={{ fontSize: "clamp(1rem, 1.8vw, 1.4rem)" }}
                    >
                      лет
                    </span>
                  </div>

                  {/* Заголовок сегмента */}
                  <h3
                    className="font-black uppercase leading-tight
                               text-black group-hover:text-white
                               transition-colors duration-300"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "clamp(1.3rem, 2.5vw, 2.1rem)",
                      letterSpacing: "-0.025em",
                    }}
                  >
                    {s.title}
                  </h3>

                  {/* Плашки */}
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-bold tracking-[0.18em] uppercase
                                   px-3 py-1.5
                                   bg-black/[0.07] text-black/55
                                   group-hover:bg-white/15 group-hover:text-white
                                   transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Описание — прижато к низу */}
                  <p
                    className="text-sm text-black/45 group-hover:text-white/65
                               leading-relaxed transition-colors duration-300 mt-auto"
                  >
                    {s.text}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
