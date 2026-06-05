"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "./SectionLabel";
import Accent from "./Accent";

/* ── Данные ── */
const principles = [
  { num: "01", word: "Скорость",     text: "Среднее время — 35 мин. Автоматизированная логистика." },
  { num: "02", word: "Точность",     text: "Строгий контроль комплектации, упаковки и температуры." },
  { num: "03", word: "Человечность", text: "Каждый сотрудник — лицо бренда. Система компенсаций." },
];

const items = [
  {
    title: "Доставка",
    bullets: [
      "Среднее время по сети — 35 минут",
      "Автоматизированная логистика",
      "Прозрачное отслеживание заказов",
    ]
  },
  {
    title: "Качество сборки",
    bullets: [
      "Строго по стандартам",
      "Обязательная проверка: комплектация, упаковка, температура",
    ]
  },
  {
    title: "Работа с клиентами",
    bullets: [
      "Поддержка: приложение, мессенджеры, телефон",
      "Отзывы — с фокусом на решение проблем",
      "Система компенсаций и признания ошибок",
    ]
  },
  {
    title: "Цифровой опыт",
    bullets: [
      "Удобные и понятные интерфейсы сайта и приложения",
      "Личный кабинет с историей заказов",
      "Функция быстрого повтора",
    ]
  },
];

const challenges = [
  { num: "01", title: "Новые клиенты",    text: "Без притока новых гостей база «выгорает» и выручка снижается. Нужен стабильный поток входящих." },
  { num: "02", title: "Отток из зала",    text: "Снижение трафика в зале = потеря выручки и ослабление бренда на локальном рынке." },
  { num: "03", title: "Отток доставки",   text: "Падение заказов в доставке ведёт к прямой потере основного канала продаж." },
  { num: "04", title: "Средний чек",      text: "Если средний чек не растёт, гости тратят меньше — прибыль снижается при стабильном трафике." },
];

/* ── Карточка принципа ── */
function PrincipleCard({ num, word, text, delay, inView }: {
  num: string; word: string; text: string; delay: number; inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-default relative overflow-hidden bg-[#F8F8F8]"
    >
      <div className="absolute inset-0 bg-black origin-left z-0
                     scale-x-0 group-hover:scale-x-100
                     transition-transform duration-[450ms] ease-[cubic-bezier(.22,1,.36,1)]" />
      <div className="relative z-10 flex flex-col p-8 md:p-10 min-h-[240px]">
        <h3
          className="font-black uppercase leading-none mb-4 mt-auto
                     text-black group-hover:text-white transition-colors duration-300"
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            letterSpacing: "-0.03em",
            overflowWrap: "break-word",
          }}
        >
          {word}
        </h3>
        <p className="text-sm text-black/45 group-hover:text-white/65 leading-relaxed transition-colors duration-300">
          {text}
        </p>
      </div>
    </motion.div>
  );
}

/* ── Карточка сервиса ── */
function ServiceItem({ title, bullets, delay }: { title: string; bullets: string[]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="group cursor-default relative overflow-hidden bg-[#F8F8F8]"
    >
      <div className="absolute inset-0 bg-black origin-left z-0
                     scale-x-0 group-hover:scale-x-100
                     transition-transform duration-[450ms] ease-[cubic-bezier(.22,1,.36,1)]" />
      <div className="relative z-10 px-8 md:px-10 pt-8 pb-10 flex flex-col min-h-[280px]">
        <h3
          className="font-black uppercase leading-tight mb-6
                     text-black group-hover:text-white transition-colors duration-300"
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h3>
        <div className="text-sm text-black/45 group-hover:text-white/65 leading-relaxed transition-colors duration-300 space-y-2.5">
          {bullets.map((bullet, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="text-black/20 group-hover:text-white/20 shrink-0 mt-0.5">·</span>
              <span>{bullet}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Строка боли ── */
function ChallengeRow({ num, title, text, delay }: {
  num: string; title: string; text: string; delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-default relative overflow-hidden"
    >
      {/* Sweep */}
      <div className="absolute inset-0 bg-black origin-left z-0
                     scale-x-0 group-hover:scale-x-100
                     transition-transform duration-[450ms] ease-[cubic-bezier(.22,1,.36,1)]" />

      {/* Пикающий номер */}
      <span
        className="absolute top-1/2 -translate-y-1/2 font-black leading-none
                   select-none pointer-events-none z-10
                   text-black/[0.06] group-hover:text-white/20 transition-colors duration-500"
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "clamp(8rem, 16vw, 14rem)",
          left: "-0.32em",
        }}
      >
        {num}
      </span>

      {/* Контент */}
      <div className="relative z-20 flex items-center gap-6
                     py-9 md:py-11 pr-6 md:pr-10
                     pl-[9rem] sm:pl-[12rem] md:pl-[16rem] xl:pl-[20rem]">
        <div className="flex-1 min-w-0">
          <h3
            className="font-black uppercase leading-tight mb-2
                       text-black group-hover:text-white transition-colors duration-300"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "clamp(1.3rem, 3vw, 2.6rem)",
              letterSpacing: "-0.025em",
            }}
          >
            {title}
          </h3>
          <p
            className="text-black/45 group-hover:text-white/55 leading-relaxed transition-colors duration-300"
            style={{ fontSize: "clamp(0.8rem, 1.2vw, 0.95rem)" }}
          >
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Компонент ── */
export default function Service() {
  const principlesRef = useRef<HTMLDivElement>(null);
  const principlesInView = useInView(principlesRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* ── Три принципа + сервис ── */}
      <section id="service" className="bg-white border-b border-black">
        <div className="px-6 md:px-14 py-20 md:py-28">
          <SectionLabel
            label="Сервис"
            title={<>Три <Accent>принципа</Accent></>}
            lead="Сервис начинается с первого касания. Положительный опыт — возврат клиента."
          />

          {/* Принципы */}
          <div ref={principlesRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {principles.map((p, i) => (
              <PrincipleCard
                key={p.word}
                num={p.num}
                word={p.word}
                text={p.text}
                delay={i * 0.12}
                inView={principlesInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Ключевые характеристики ── */}
      <section className="bg-white border-b border-black">
        <div className="px-6 md:px-14 py-20 md:py-28">
          <SectionLabel
            label="Сервис"
            title={<>Ключевые <Accent>характеристики</Accent></>}
            lead="Комплексный подход к сервису на каждом этапе взаимодействия с гостем."
          />

          {/* Детали сервиса */}
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {items.map((item, i) => (
              <ServiceItem key={item.title} title={item.title} bullets={item.bullets} delay={i * 0.09} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Цель сервиса ── */}
      {(() => {
        const ref = useRef<HTMLDivElement>(null);
        const inView = useInView(ref, { once: true, margin: "-60px" });
        return (
          <div ref={ref} className="overflow-hidden border-b border-black">
            <motion.div
              initial={{ x: "-100%" }}
              animate={inView ? { x: 0 } : {}}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#FF0000] px-6 md:px-14 py-10 md:py-12"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="text-white/50 font-bold uppercase tracking-[0.25em] mb-3"
                style={{ fontFamily: "Arial, sans-serif", fontSize: "clamp(0.7rem, 0.9vw, 0.85rem)" }}
              >
                Цель сервиса
              </motion.p>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="font-black uppercase text-white leading-tight"
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                Сформировать желание заказывать именно здесь снова и снова
              </motion.h2>
            </motion.div>
          </div>
        );
      })()}

      {/* ── Ключевые боли ── */}
      <section id="focus" className="bg-white border-b border-black">
        <div className="px-6 md:px-14 py-20 md:py-28">
          <SectionLabel
            label="Цели бизнеса"
            title={<>Ключевые <Accent>боли</Accent> бизнеса</>}
            lead="На чём сосредоточить усилия маркетинговой команды в первую очередь."
          />
          <div className="border border-black divide-y divide-black">
            {challenges.map((c, i) => (
              <ChallengeRow
                key={c.title}
                num={c.num}
                title={c.title}
                text={c.text}
                delay={i * 0.07}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
