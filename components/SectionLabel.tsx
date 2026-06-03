"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  label: string;
  title: string;
  lead?: string;
  dark?: boolean;
}

export default function SectionLabel({ label, title, lead, dark }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="mb-14 md:mb-20">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-[#FF0000] text-[10px] tracking-[0.3em] uppercase font-bold mb-4"
      >
        {label}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className={`uppercase font-black ${dark ? "text-white" : "text-black"}`}
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
          lineHeight: 1.05,
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </motion.h2>
      {lead && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.16 }}
          className={`mt-4 max-w-xl text-base leading-relaxed ${dark ? "text-white/40" : "text-black/50"}`}
        >
          {lead}
        </motion.p>
      )}
    </div>
  );
}
