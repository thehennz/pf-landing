"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";


export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen bg-black overflow-hidden flex flex-col justify-end">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#FF0000] z-10" />

      {/* Background noise */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      {/* Background sign — акцентный элемент справа */}
      <motion.div
        style={{ y }}
        className="absolute inset-y-0 right-0 flex items-center pointer-events-none select-none"
        aria-hidden
      >
        <div className="w-[104vw] max-w-[1320px] opacity-[0.12] mr-[-8vw]">
          <Image
            src="/logo.svg"
            alt=""
            width={1320}
            height={968}
            className="w-full h-auto"
            style={{ filter: "invert(1)" }}
            priority
          />
        </div>
      </motion.div>

      {/* Year watermark */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 md:top-16 left-6 md:left-14 select-none pointer-events-none text-white/[0.12]"
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "clamp(5rem, 15vw, 13rem)",
          fontWeight: 900,
          lineHeight: 1,
        }}
        aria-hidden
      >
        2026
      </motion.div>

      {/* Main content */}
      <motion.div style={{ opacity }} className="relative z-10 px-6 md:px-14 pb-36 md:pb-24 max-w-[900px]">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[#FF0000] text-[16px] tracking-[0.15em] uppercase font-bold mb-6"
        >
          ПИЦЦАФАБРИКА <span className="opacity-40 mx-2">·</span> 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-white uppercase font-black mb-8 leading-none"
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "clamp(1.85rem, 7vw, 7rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Маркетинговая<br />стратегия
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="text-white/40 text-base md:text-lg max-w-lg leading-relaxed mb-10"
        >
          Доступное и эмоционально близкое решение для повседневного питания.
          Вкус, доверие, удобство — в центре всего.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col gap-2"
        >
          {/* Mobile: 3+2+2 */}
          {([
            [
              { label: "Продукт",       href: "#product",   d: 0 },
              { label: "Цена",          href: "#price",     d: 1 },
              { label: "Каналы продаж", href: "#channels",  d: 2 },
            ],
            [
              { label: "Продвижение",       href: "#promo",    d: 3 },
              { label: "Сервис",            href: "#service",  d: 4 },
            ],
            [
              { label: "Целевая аудитория", href: "#audience", d: 5 },
              { label: "Цели бизнеса",      href: "#focus",    d: 6 },
            ],
          ] as { label: string; href: string; d: number }[][]).map((row, ri) => (
            <div key={`m-${ri}`} className="flex items-center gap-2 md:hidden">
              {row.map(({ label, href, d }) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + d * 0.07 }}
                  className="border border-white/15 text-white/50
                             px-4 py-2 text-[10px] font-bold tracking-[0.18em] uppercase
                             hover:border-white/35 hover:text-white/80
                             transition-colors duration-300 cursor-pointer
                             whitespace-nowrap inline-flex items-center"
                >
                  {label}
                </motion.a>
              ))}
            </div>
          ))}

          {/* Desktop: 4+3 */}
          {([
            [
              { label: "Продукт",       href: "#product",   d: 0 },
              { label: "Цена",          href: "#price",     d: 1 },
              { label: "Каналы продаж", href: "#channels",  d: 2 },
              { label: "Продвижение",   href: "#promo",     d: 3 },
            ],
            [
              { label: "Сервис",            href: "#service",  d: 4 },
              { label: "Целевая аудитория", href: "#audience", d: 5 },
              { label: "Цели бизнеса",      href: "#focus",    d: 6 },
            ],
          ] as { label: string; href: string; d: number }[][]).map((row, ri) => (
            <div key={`d-${ri}`} className="hidden md:flex items-center gap-2">
              {row.map(({ label, href, d }) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + d * 0.07 }}
                  className="border border-white/15 text-white/50
                             px-4 py-2 text-[10px] font-bold tracking-[0.18em] uppercase
                             hover:border-white/35 hover:text-white/80
                             transition-colors duration-300 cursor-pointer
                             whitespace-nowrap inline-flex items-center"
                >
                  {label}
                </motion.a>
              ))}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden
      >
        <span className="text-white/20 text-[9px] tracking-[0.3em] uppercase font-bold">Листай вниз</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent"
        />
      </motion.div>
    </section>
  );
}
