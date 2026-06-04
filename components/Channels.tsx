"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "./SectionLabel";
import Accent from "./Accent";

const channels = [
  {
    num: "01",
    name: "Собственная доставка",
    desc: "Флагманский канал. Полный контроль сервиса и экономики. Среднее время — 30–35 минут.",
    priority: true,
  },
  {
    num: "02",
    name: "Официальный сайт",
    desc: "Полноценный канал продаж. Доставка, самовывоз, SEO-трафик, информационная платформа бренда.",
    priority: true,
  },
  {
    num: "03",
    name: "Зал",
    desc: "Меньшая доля в выручке, но важная роль. Узнаваемость, эмоциональная связь, семейный центр, B2B.",
    priority: false,
  },
  {
    num: "04",
    name: "Самовывоз",
    desc: "Для клиентов рядом с точкой. Бонусы и спецпредложения. Быстрая сборка, приоритетная выдача.",
    priority: false,
  },
  {
    num: "05",
    name: "Мобильное приложение",
    desc: "Ключевой digital-инструмент. Быстрый заказ, история, персональные предложения, программа лояльности.",
    priority: true,
  },
  {
    num: "06",
    name: "Агрегаторы",
    desc: "Яндекс Еда, Delivery Club, Чиббис. Привлечение новой аудитории. Задача — перевод в собственные каналы.",
    priority: false,
  },
];

export default function Channels() {
  return (
    <section id="channels" className="bg-white border-b border-black">
      <div className="px-6 md:px-14 py-20 md:py-28">
        <SectionLabel
          label="Каналы продаж"
          title={<><Accent>Омни</Accent>канальность</>}
          lead="Единое меню, акции и программа лояльности во всех каналах."
        />

        <div className="border border-black divide-y divide-black">
          {channels.map((c, i) => {
            const ref = useRef<HTMLDivElement>(null);
            const inView = useInView(ref, { once: true, margin: "-30px" });
            return (
              <motion.div
                key={c.num}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-default relative overflow-hidden"
              >
                {/* Заливка при hover */}
                <div className="absolute inset-0 bg-black origin-left z-0
                               scale-x-0 group-hover:scale-x-100
                               transition-transform duration-[450ms] ease-[cubic-bezier(.22,1,.36,1)]" />

                {/* Огромная цифра — вылезает из левого угла */}
                <span
                  className="absolute top-1/2 -translate-y-1/2 font-black leading-none
                             select-none pointer-events-none z-10
                             text-black/[0.06] group-hover:text-white/20
                             transition-colors duration-500"
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: "clamp(8rem, 16vw, 14rem)",
                    left: "-0.32em",
                  }}
                >
                  {c.num}
                </span>

                {/* Контент — с отступом под цифру */}
                <div
                  className="relative z-20 flex items-center justify-between gap-6
                             py-9 md:py-12 pr-6 md:pr-10
                             pl-[9rem] sm:pl-[12rem] md:pl-[16rem] xl:pl-[20rem]"
                >
                  {/* Название + описание */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-black uppercase leading-tight mb-2
                                 text-black group-hover:text-white
                                 transition-colors duration-300"
                      style={{
                        fontFamily: "Arial, sans-serif",
                        fontSize: "clamp(1.5rem, 3vw, 2.6rem)",
                        letterSpacing: "-0.025em",
                      }}
                    >
                      {c.name}
                    </h3>
                    <p
                      className="text-black/45 group-hover:text-white/55
                                 leading-relaxed transition-colors duration-300"
                      style={{ fontSize: "clamp(0.8rem, 1.2vw, 0.95rem)" }}
                    >
                      {c.desc}
                    </p>
                  </div>

                  {/* Плашка приоритета */}
                  <div className="shrink-0 flex items-center justify-end w-28 md:w-40">
                    {c.priority ? (
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF0000] shrink-0" />
                        <span className="text-[9px] font-bold tracking-[0.22em] uppercase text-[#FF0000]">
                          Приоритет
                        </span>
                      </span>
                    ) : (
                      <span
                        className="text-[9px] font-bold tracking-[0.15em]
                                   text-black/15 group-hover:text-white/20
                                   transition-colors duration-300"
                      >
                        ——
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
