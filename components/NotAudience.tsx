"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const items = [
  "Клиенты, ориентированные на высокую гастрономию и дорогие ресторанные форматы",
  "Аудитория премиального сегмента с запросами на авторскую кухню",
  "Люди, полностью отказавшиеся от фастфуда, глютена, мяса и т. п.",
];

export default function NotAudience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-[#F0F0F0] border-b border-black">
      <div className="px-6 md:px-14 py-20 md:py-28">

        {/* Заголовок */}
        <div className="overflow-hidden mb-14">
          <motion.h2
            initial={{ y: "105%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="font-black uppercase text-black leading-none"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Кто{" "}
            <span className="bg-black text-white px-2 py-0.5 inline-block leading-tight">
              не является
            </span>{" "}
            нашей аудиторией
          </motion.h2>
        </div>

        {/* Карточки */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-default relative overflow-hidden bg-white"
            >
              <div className="absolute inset-0 bg-black origin-left z-0
                             scale-x-0 group-hover:scale-x-100
                             transition-transform duration-[450ms] ease-[cubic-bezier(.22,1,.36,1)]" />
              <div className="relative z-10 p-8 md:p-10 min-h-[200px] flex flex-col justify-between">
                <span
                  className="text-black/20 group-hover:text-white/20 font-black leading-none transition-colors duration-300 mb-6"
                  style={{ fontFamily: "Arial, sans-serif", fontSize: "clamp(4rem, 7vw, 6rem)" }}
                >
                  ×
                </span>
                <p
                  className="text-black group-hover:text-white leading-relaxed transition-colors duration-300"
                  style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)" }}
                >
                  {item}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Тезис */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-black p-10 md:p-14"
        >
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 mb-8">
            Наша аудитория
          </p>
          <p
            className="font-black uppercase text-white leading-tight mb-6"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "clamp(1.6rem, 3.5vw, 3rem)",
              letterSpacing: "-0.025em",
            }}
          >
            ПиццаФабрика — для тех, кто ценит простое
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {["Доступно по цене", "Стабильно по качеству", "Вкусно по результату", "Удобно по формату"].map((tag) => (
              <span key={tag} className="text-[10px] font-bold tracking-[0.18em] uppercase bg-white/10 text-white/60 px-3 py-1.5">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-white/40 text-sm leading-relaxed">
            Для людей с живыми потребностями.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
