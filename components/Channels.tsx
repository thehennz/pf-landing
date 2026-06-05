"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "./SectionLabel";
import Accent from "./Accent";

function KeywordsBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="overflow-hidden border-t border-black">
      <motion.div
        initial={{ x: "-100%" }}
        animate={inView ? { x: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="bg-black px-6 md:px-14 py-8 md:py-10"
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
          Доступность.{" "}
          <span className="text-white/60">Омниканальность.</span>{" "}
          <span className="text-white/35">Цифровизация.</span>
        </motion.span>
      </motion.div>
    </div>
  );
}

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
    name: "Агрегаторы",
    desc: "Яндекс Еда, Delivery Club, Чиббис. Привлечение новой аудитории. Задача — перевод в собственные каналы.",
    priority: false,
  },
];

const appFeatures = [
  "Быстрый заказ в несколько кликов",
  "История заказов, персональные предложения, push-уведомления",
  "Отслеживание доставки, программа лояльности, самовывоз",
  "Усиливает повторные заказы и частотность",
];

function AppBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="border border-t-0 border-black bg-black group cursor-default relative overflow-hidden"
    >
      {/* Sweep красным при наведении */}
      <div className="absolute inset-0 bg-[#FF0000] origin-left z-0
                     scale-x-0 group-hover:scale-x-100
                     transition-transform duration-[450ms] ease-[cubic-bezier(.22,1,.36,1)]" />

      <div className="relative z-10 flex flex-col md:flex-row items-center p-8 md:p-12 gap-12 md:gap-24">

        {/* Левая часть — заголовок */}
        <div className="md:w-72 shrink-0 flex flex-col">
          <div>
            <span className="inline-flex items-center gap-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF0000]" />
              <span className="text-[9px] font-bold tracking-[0.22em] uppercase text-[#FF0000]">
                Приоритет
              </span>
            </span>
            <h3
              className="font-black uppercase text-white leading-none"
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Мобильное приложение
            </h3>
          </div>
          <p className="text-white/35 text-base leading-relaxed mt-10">
            Ключевой digital-инструмент
          </p>
        </div>

        {/* Правая часть — фичи */}
        <div className="flex-1 divide-y divide-white/[0.07] md:border-l md:border-white/[0.07] md:pl-64">
          {appFeatures.map((f, i) => (
            <motion.div
              key={f}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 + i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-4 py-6"
            >
              <span className="text-[#FF0000] shrink-0 font-bold mt-0.5">—</span>
              <p className="text-white/65 text-sm md:text-base leading-relaxed">{f}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  );
}

export default function Channels() {
  return (
    <section id="channels" className="bg-white border-b border-black">
      <div className="px-6 md:px-14 py-20 md:py-28">
        <SectionLabel
          label="Каналы продаж"
          title={<><Accent>Омни</Accent>канальность</>}
          lead="Единое меню, акции и программа лояльности во всех каналах."
        />

        {/* Список каналов */}
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

                {/* Огромная цифра */}
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

                {/* Контент */}
                <div
                  className="relative z-20 flex items-center justify-between gap-6
                             py-9 md:py-12 pr-6 md:pr-10
                             pl-[9rem] sm:pl-[12rem] md:pl-[16rem] xl:pl-[20rem]"
                >
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

                  <div className="shrink-0 flex items-center justify-end w-28 md:w-40">
                    {c.priority ? (
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF0000] shrink-0" />
                        <span className="text-[9px] font-bold tracking-[0.22em] uppercase text-[#FF0000]">
                          Приоритет
                        </span>
                      </span>
                    ) : (
                      <span className="text-[9px] font-bold tracking-[0.15em]
                                       text-black/15 group-hover:text-white/20
                                       transition-colors duration-300">
                        ——
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Мобильное приложение — отдельный блок */}
        <AppBlock />
      </div>

      {/* Ключевые слова */}
      <KeywordsBlock />
    </section>
  );
}
