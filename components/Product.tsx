"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { IconPizza, IconRoll, IconFries, IconChild, IconBox, IconRefresh } from "./Icons";

const positioning = [
  { num: "01", title: "Доступность", text: "Стратегия доступного качества: цены привлекательны для широкой аудитории, без демпинга и без ухода в премиум." },
  { num: "02", title: "Эмоциональная близость", text: "Продукт «для себя и для своих» — понятный вкус, который нравится семье, друзьям, коллегам." },
  { num: "03", title: "Качество без компромиссов", text: "Натуральные проверенные ингредиенты. Стабильный стандарт вкуса на каждой точке." },
  { num: "04", title: "Удобство", text: "Любой канал — доставка, зал, самовывоз, агрегаторы. Единое меню и программа лояльности везде." },
];

const products = [
  { Icon: IconPizza, title: "Пицца", badge: "Ключевая категория", text: "Главный драйвер продаж. Три размера, от классики до актуальных новинок. Регулярное обновление." },
  { Icon: IconRoll, title: "Роллы", badge: "2-я по значимости", text: "Закрывает ключевые вкусовые предпочтения. Доступный сегмент, тренды (роллы без риса)." },
  { Icon: IconFries, title: "Стритфуд", badge: null, text: "Бестселлеры — картофель фри, наггетсы. Повышенный контроль качества." },
  { Icon: IconChild, title: "Детское меню", badge: null, text: "Только то, что нравится детям. Строгий контроль качества и безопасности." },
  { Icon: IconBox, title: "Упаковка", badge: null, text: "Качественная упаковка сохраняет вкус и создаёт впечатление с первого касания." },
  { Icon: IconRefresh, title: "Обновление меню", badge: null, text: "10–15% меню обновляется ежеквартально. Баланс знакомых вкусов и экспериментов." },
];

const utp = [
  "Мультиформат для любой ситуации",
  "Максимум качества при доступной цене",
  "Сильная фокусная категория — пицца",
  "Регулярное обновление ассортимента",
  "Сбалансированные роллы без переплаты",
  "Контроль качества в простых категориях",
  "Детское меню, которому доверяют родители",
  "Упаковка как часть продукта",
  "Простота и понятность вкусов",
  "Продукт «для себя и для своих»",
];

function FadeCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Product() {
  return (
    <section id="product" className="bg-white">
      {/* Positioning */}
      <div className="px-6 md:px-14 py-20 md:py-28 border-b border-black">
        <SectionLabel label="Продукт" title="Позиционирование и концепция" lead="Максимальное качество при доступной цене. Просто, понятно, для всех." />
        <div className="grid grid-cols-1 md:grid-cols-2 border border-black">
          {positioning.map((p, i) => (
            <FadeCard key={p.num} delay={i * 0.08}>
              <div
                className={`p-8 md:p-10 group cursor-default transition-colors duration-300 hover:bg-black ${
                  i % 2 === 0 ? "border-r border-black" : ""
                } ${i < 2 ? "border-b border-black" : ""}`}
              >
                <div className="text-3xl font-black mb-4 text-black/10 group-hover:text-[#FF0000] transition-colors duration-300" style={{ fontFamily: "Arial, sans-serif" }}>
                  {p.num}
                </div>
                <h3 className="font-bold text-[13px] uppercase tracking-wider mb-2 group-hover:text-white transition-colors duration-300">{p.title}</h3>
                <p className="text-sm text-black/50 group-hover:text-white/60 leading-relaxed transition-colors duration-300">{p.text}</p>
              </div>
            </FadeCard>
          ))}
        </div>
      </div>

      {/* Products grid */}
      <div className="px-6 md:px-14 py-20 md:py-28 bg-[#F8F8F8] border-b border-black">
        <SectionLabel label="Ассортимент" title="Продуктовая матрица" lead="Всё в одном месте — для семьи, офиса, компании или индивидуального заказа." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black border border-black">
          {products.map((p, i) => (
            <FadeCard key={p.title} delay={i * 0.07}>
              <div className="bg-white p-8 group cursor-default hover:bg-[#FF0000] transition-colors duration-300 h-full">
                {p.badge && (
                  <span className="inline-block text-[9px] font-bold tracking-widest uppercase bg-[#FF0000] text-white px-2 py-1 mb-5 group-hover:bg-white group-hover:text-[#FF0000] transition-colors duration-300">
                    {p.badge}
                  </span>
                )}
                <p.Icon className="w-7 h-7 text-black/30 mb-4 group-hover:text-white/70 transition-colors duration-300" />
                <h3 className="font-bold text-[13px] uppercase tracking-wider mb-2 group-hover:text-white transition-colors duration-300">{p.title}</h3>
                <p className="text-xs text-black/50 group-hover:text-white/80 leading-relaxed transition-colors duration-300">{p.text}</p>
              </div>
            </FadeCard>
          ))}
        </div>
      </div>

      {/* UTP */}
      <div className="bg-black py-20 md:py-28 border-t-4 border-[#FFC800]">
        <div className="px-6 md:px-14">
          <SectionLabel dark label="УТП продукта" title="10 ключевых преимуществ" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 border border-white/10">
            {utp.map((item, i) => (
              <FadeCard key={i} delay={i * 0.05}>
                <div className="bg-black p-6 group cursor-default hover:bg-[#FF0000] transition-colors duration-300">
                  <div className="text-2xl font-black text-[#FFC800] mb-3 group-hover:text-white transition-colors duration-300" style={{ fontFamily: "Arial, sans-serif" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-xs text-white/50 group-hover:text-white leading-relaxed transition-colors duration-300">{item}</p>
                </div>
              </FadeCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
