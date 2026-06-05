"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const docs = [
  {
    url: "https://docs.google.com/document/d/1tfCYIzCYfUK58mV4jzhB-KfyOG4amMnunVq11a4xOL8/edit?tab=t.0#heading=h.ryjexyfqcuhy",
    label: "Прочитать полную стратегию",
    sub: "Google Docs",
  },
  {
    url: "https://docs.google.com/spreadsheets/d/1DD5ULLz67sjAcgo60oJqjSdqnqbAtJ1nyr4ERLu_-So/edit?gid=334584076#gid=334584076",
    label: "Таблица показателей сети",
    sub: "Google Sheets",
  },
];

function qrSrc(url: string) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(url)}&margin=12&color=1A1A1A&bgcolor=F8F8F8`;
}

export default function Final() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-black border-t border-white/10">
      <div className="px-6 md:px-14 py-20 md:py-28">

        {/* Заголовок */}
        <div className="overflow-hidden mb-16 md:mb-20">
          <motion.h2
            className="font-black uppercase text-white leading-none"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "clamp(2rem, 7vw, 7rem)",
              letterSpacing: "-0.03em",
            }}
            initial={{ y: "105%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Документация
          </motion.h2>
        </div>

        {/* QR-карточки */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 max-w-2xl">
          {docs.map((doc, i) => (
            <motion.a
              key={doc.label}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="bg-[#F8F8F8] p-8 flex flex-col items-center gap-6 group cursor-pointer"
            >
              {/* QR */}
              <img
                src={qrSrc(doc.url)}
                alt={doc.label}
                width={200}
                height={200}
                className="w-48 h-48 md:w-52 md:h-52"
              />

              {/* Подпись */}
              <div className="text-center">
                <p className="text-[9px] font-bold tracking-[0.22em] uppercase text-black/30 mb-1">
                  {doc.sub}
                </p>
                <p
                  className="font-black uppercase text-black leading-tight
                             group-hover:text-[#FF0000] transition-colors duration-300"
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {doc.label}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
