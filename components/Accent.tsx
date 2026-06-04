/**
 * Accent — выделение слова(слов) в заголовке красным блоком с белым текстом.
 * Правило: в каждом заголовке секции 1–2 слова через <Accent>.
 *
 * Пример: Продуктовая <Accent>матрица</Accent>
 */
export default function Accent({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-[#FF0000] text-white px-2 py-0.5 inline-block leading-tight">
      {children}
    </span>
  );
}
