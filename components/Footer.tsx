import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t-4 border-[#FF0000]">
      <div className="px-6 md:px-14 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <Image
          src="/logo-full.svg"
          alt="ПиццаФабрика"
          width={200}
          height={49}
          className="h-9 w-auto"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        <span
          className="text-white/30 text-[10px] tracking-[0.25em] uppercase font-bold"
        >
          Маркетинговая стратегия · 2026
        </span>
      </div>
    </footer>
  );
}
