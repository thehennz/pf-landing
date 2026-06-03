"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "./SectionLabel";

function Bar({ label, pct, delay }: { label: string; pct: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-xs">
        <span className="text-black/60">{label}</span>
        <span className="font-bold">{pct}%</span>
      </div>
      <div className="h-1 bg-black/10 overflow-hidden">
        <motion.div
          className="h-full bg-[#FF0000]"
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1.3, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

const tools = [
  {
    title: "Digital-реклама",
    items: ["Таргетированная реклама в соцсетях", "Контекстная реклама и программатик", "Ретаргетинг и A/B-тесты", "Продвижение на агрегаторах"],
  },
  {
    title: "Собственные каналы",
    items: ["Push-уведомления и email-рассылки", "CRM-маркетинг и персональные офферы", "Промо в приложении и на сайте"],
  },
  {
    title: "Дисконтная политика",
    items: ["Акции «2 по цене 1», «Пицца дня»", "Сезонные и лимитированные предложения", "Программа лояльности с бонусами", "Промокоды для «спящих» клиентов"],
  },
  {
    title: "Офлайн и PR",
    items: ["Наружная реклама, листовки, радио", "Коллаборации с локальными бизнесами", "Инфлюенсеры и digital-PR", "Социальная ответственность"],
  },
];

export default function Promo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="promo" className="bg-white border-b border-black">
      <div className="px-6 md:px-14 py-20 md:py-28">
        <SectionLabel label="Продвижение" title="Распределение бюджета" lead="Стратегия зависит от зрелости рынка: зрелые — digital, развивающиеся — офлайн." />

        <div ref={ref} className="grid md:grid-cols-2 gap-px bg-black border border-black mb-16">
          {[
            { title: "Зрелые рынки", items: [{ label: "Digital", pct: 50 }, { label: "CRM / Push / Email", pct: 40 }, { label: "Офлайн", pct: 10 }] },
            { title: "Развивающиеся рынки", items: [{ label: "Digital", pct: 30 }, { label: "CRM / Push / Email", pct: 10 }, { label: "Офлайн", pct: 60 }] },
          ].map((m, mi) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: mi * 0.15, duration: 0.6 }}
              className="bg-white p-8 md:p-10"
            >
              <h3 className="font-bold text-sm uppercase tracking-widest mb-6">{m.title}</h3>
              <div className="space-y-5">
                {m.items.map((item, ii) => (
                  <Bar key={item.label} label={item.label} pct={item.pct} delay={mi * 0.2 + ii * 0.15} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-black/40 mb-6">Инструменты продвижения</p>
        <div className="grid sm:grid-cols-2 gap-px bg-black border border-black">
          {tools.map((t, i) => {
            const ref2 = useRef<HTMLDivElement>(null);
            const inView2 = useInView(ref2, { once: true, margin: "-40px" });
            return (
              <motion.div
                key={t.title}
                ref={ref2}
                initial={{ opacity: 0, y: 20 }}
                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.09, duration: 0.6 }}
                className="bg-white p-8 hover:bg-[#F8F8F8] transition-colors duration-300"
              >
                <h3 className="font-bold text-sm uppercase tracking-wide mb-5">{t.title}</h3>
                <ul className="space-y-2.5">
                  {t.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-xs text-black/50 leading-relaxed">
                      <span className="text-[#FF0000] mt-0.5 shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
