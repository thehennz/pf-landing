"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { IconPhone, IconChat, IconMonitor, IconTarget, IconUsers, IconHome, IconScooter, IconChart } from "./Icons";

const principles = [
  { word: "Скорость", text: "Среднее время — 35 мин. Автоматизированная логистика." },
  { word: "Точность", text: "Строгий контроль комплектации, упаковки и температуры." },
  { word: "Человечность", text: "Каждый сотрудник — лицо бренда. Система компенсаций." },
];

const items = [
  { Icon: IconPhone, title: "Мобильное приложение", text: "Интуитивность, персонализация, отслеживание заказа, акции в фокусе, поддержка внутри приложения." },
  { Icon: IconChat, title: "Работа с клиентами", text: "Поддержка через приложение, мессенджеры, телефон. Работа с отзывами с фокусом на решение проблем." },
  { Icon: IconMonitor, title: "Цифровой опыт", text: "Удобные интерфейсы сайта и приложения. Личный кабинет с историей. Функция быстрого повтора заказа." },
  { Icon: IconTarget, title: "Цель сервиса", text: "Сформировать желание заказывать именно здесь снова и снова. Положительный опыт = возврат клиента." },
];

const challenges = [
  { Icon: IconUsers, title: "Новые клиенты", text: "Без притока новых гостей база «выгорает» и выручка снижается. Нужен стабильный поток входящих." },
  { Icon: IconHome, title: "Отток из зала", text: "Снижение трафика в зале = потеря выручки и ослабление бренда на локальном рынке." },
  { Icon: IconScooter, title: "Отток доставки", text: "Падение заказов в доставке ведёт к прямой потере основного канала продаж." },
  { Icon: IconChart, title: "Средний чек", text: "Если средний чек не растёт, гости тратят меньше — прибыль снижается при стабильном трафике." },
];

export default function Service() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <section id="service" className="bg-white border-t border-black border-b border-black">
        <div className="px-6 md:px-14 py-20 md:py-28">
          <SectionLabel label="Сервис" title="Три принципа" lead="Сервис начинается с первого касания. Положительный опыт — возврат клиента." />

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black border border-black border-t-4 border-t-[#FFC800] mb-16">
            {principles.map((p, i) => (
              <motion.div
                key={p.word}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="bg-white p-8 md:p-10 group hover:bg-[#FFC800] transition-colors duration-300 cursor-default"
              >
                <div className="font-black text-base uppercase tracking-wider mb-3 group-hover:text-black transition-colors duration-300">
                  {p.word}
                </div>
                <p className="text-sm text-black/50 group-hover:text-black/70 leading-relaxed transition-colors duration-300">{p.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-black border border-black">
            {items.map((item, i) => {
              const r = useRef<HTMLDivElement>(null);
              const v = useInView(r, { once: true, margin: "-40px" });
              return (
                <motion.div
                  key={item.title}
                  ref={r}
                  initial={{ opacity: 0, y: 20 }}
                  animate={v ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.09, duration: 0.6 }}
                  className="bg-white p-8 hover:bg-[#F8F8F8] transition-colors duration-300"
                >
                  <item.Icon className="w-7 h-7 text-black/25 mb-4" />
                  <h3 className="font-bold text-[13px] uppercase tracking-wider mb-2">{item.title}</h3>
                  <p className="text-xs text-black/50 leading-relaxed">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-[#F8F8F8] border-b border-black">
        <div className="px-6 md:px-14 py-20 md:py-28">
          <SectionLabel label="Фокус задач" title="Ключевые боли бизнеса" lead="На чём сосредоточить усилия маркетинговой команды в первую очередь." />
          <div className="border border-black divide-y divide-black">
            {challenges.map((c, i) => {
              const r = useRef<HTMLDivElement>(null);
              const v = useInView(r, { once: true, margin: "-40px" });
              return (
                <motion.div
                  key={c.title}
                  ref={r}
                  initial={{ opacity: 0, x: -20 }}
                  animate={v ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.09, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-5 items-start bg-white px-6 md:px-10 py-6 group cursor-default hover:bg-black border-l-4 border-[#FF0000] transition-colors duration-300"
                >
                  <c.Icon className="w-6 h-6 shrink-0 mt-0.5 text-black/30 group-hover:text-white/40 transition-colors duration-300" />
                  <div>
                    <h3 className="font-bold text-[13px] uppercase tracking-wider mb-1 group-hover:text-white transition-colors duration-300">{c.title}</h3>
                    <p className="text-xs text-black/50 group-hover:text-white/50 leading-relaxed transition-colors duration-300">{c.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
