"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Goal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-black min-h-screen flex flex-col justify-center relative overflow-hidden px-6 md:px-14 py-24">

      {/* Красная линия сверху */}
      <motion.div
        className="absolute top-0 left-0 h-[3px] bg-[#FF0000]"
        initial={{ width: "0%" }}
        animate={inView ? { width: "100%" } : {}}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />

      <div ref={ref}>

        {/* Лейбл — wipe снизу */}
        <div className="overflow-hidden mb-14 md:mb-20">
          <motion.p
            className="font-black uppercase text-white/60"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "clamp(1.1rem, 2.5vw, 2rem)",
              letterSpacing: "0.08em",
            }}
            initial={{ y: "110%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Наша главная цель на 2026 год
          </motion.p>
        </div>

        {/* «Агрессивный» */}
        <div className="overflow-hidden">
          <motion.h2
            className="font-black uppercase text-white leading-[0.9]"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "clamp(2.1rem, 9.5vw, 13rem)",
              letterSpacing: "-0.03em",
            }}
            initial={{ y: "105%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Агрессивный
          </motion.h2>
        </div>

        {/* «маркетинг» — красный */}
        <div className="overflow-hidden mb-14 md:mb-20">
          <motion.h2
            className="font-black uppercase text-[#FF0000] leading-[0.9]"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "clamp(2.1rem, 9.5vw, 13rem)",
              letterSpacing: "-0.03em",
            }}
            initial={{ y: "105%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.62, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            маркетинг
          </motion.h2>
        </div>

        {/* Подзаголовок */}
        <motion.div
          className="flex items-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.05, duration: 0.7 }}
        >
          <div className="w-10 h-px bg-white/20 shrink-0" />
          <p
            className="text-white/45 leading-relaxed"
            style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
          >
            и захват доли рынка конкурентов.
          </p>
        </motion.div>

      </div>

      {/* Водяной знак 2026 */}
      <div
        className="absolute right-6 md:right-14 bottom-10 font-black
                   text-white/[0.03] select-none pointer-events-none leading-none"
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "clamp(8rem, 22vw, 26rem)",
        }}
        aria-hidden
      >
        2026
      </div>

    </section>
  );
}
