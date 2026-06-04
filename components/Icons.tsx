interface IconProps {
  className?: string;
}

/* Пицца — кусок сверху, заполненный */
export const IconPizza = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor">
    <path d="M32 4L4 56h56L32 4z" opacity="0.15"/>
    <path d="M32 10L8 52h48L32 10z"/>
    <circle cx="32" cy="30" r="4"/>
    <circle cx="22" cy="42" r="3"/>
    <circle cx="42" cy="42" r="3"/>
    <circle cx="32" cy="46" r="2"/>
  </svg>
);

/* Роллы — вид сверху, концентрические круги */
export const IconRoll = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor">
    <circle cx="32" cy="32" r="30"/>
    <circle cx="32" cy="32" r="20" fill="white" opacity="0.9" className="mix-blend-difference" style={{fill: 'var(--bg, white)', opacity: 0.15}}/>
    <circle cx="32" cy="32" r="20" style={{fill: 'transparent'}} stroke="currentColor" strokeWidth="4"/>
    <circle cx="32" cy="32" r="10" style={{fill: 'transparent'}} stroke="currentColor" strokeWidth="4"/>
    <circle cx="32" cy="32" r="4"/>
  </svg>
);

/* Стритфуд — коробка картошки фри */
export const IconFries = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor">
    <path d="M14 28h36l-6 32H20L14 28z"/>
    <rect x="10" y="22" width="44" height="8" rx="2"/>
    <rect x="20" y="4" width="6" height="22" rx="3"/>
    <rect x="29" y="2" width="6" height="22" rx="3"/>
    <rect x="38" y="4" width="6" height="22" rx="3"/>
  </svg>
);

/* Детское меню — звезда */
export const IconChild = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor">
    <path d="M32 4l7 15 16 2-12 11 3 16-14-8-14 8 3-16L9 21l16-2z"/>
    <circle cx="32" cy="42" r="10" opacity="0.4"/>
  </svg>
);

/* Упаковка — открытая коробка */
export const IconBox = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor">
    <path d="M8 24l24-12 24 12v28L32 64 8 52V24z" opacity="0.5"/>
    <path d="M8 24l24 12 24-12"/>
    <path d="M32 36V64" stroke="currentColor" strokeWidth="3" fill="none"/>
    <path d="M8 24l24-12 24 12-24 12L8 24z"/>
    <path d="M20 18l24 12" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
  </svg>
);

/* Обновление меню — круговая стрелка */
export const IconRefresh = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor">
    <path d="M32 8C18.7 8 8 18.7 8 32s10.7 24 24 24 24-10.7 24-24" opacity="0.25"/>
    <path fillRule="evenodd" d="M32 12C20.9 12 12 20.9 12 32s8.9 20 20 20 20-8.9 20-20c0-3.3-.8-6.4-2.2-9.1l4.5-2.5C56.7 23.7 58 27.7 58 32c0 14.4-11.6 26-26 26S6 46.4 6 32 17.6 6 32 6c6.2 0 11.9 2.2 16.3 5.8l-3.2 3.8C41.5 13.1 37 12 32 12z"/>
    <path d="M44 4l8 10-12 2 4-12z"/>
  </svg>
);

/* Горячие блюда — тарелка с паром */
export const IconHot = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor">
    <path d="M10 40h44a22 22 0 01-44 0z"/>
    <rect x="8" y="36" width="48" height="6" rx="3"/>
    <rect x="16" y="54" width="32" height="5" rx="2.5"/>
    <path d="M22 28c0-6 6-6 6-12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <path d="M32 26c0-6 6-6 6-12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <path d="M42 28c0-6 6-6 6-12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

/* Закуски — стакан/кубок со снеком */
export const IconSnack = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor">
    <path d="M16 20h32l-6 36H22L16 20z"/>
    <rect x="12" y="14" width="40" height="8" rx="4"/>
    <rect x="24" y="4" width="5" height="14" rx="2.5"/>
    <rect x="32" y="2" width="5" height="14" rx="2.5"/>
    <rect x="40" y="4" width="5" height="14" rx="2.5"/>
    <path d="M22 32h20M22 40h14" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.4"/>
  </svg>
);

/* Салаты / Детское меню — миска с листьями */
export const IconSalad = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor">
    <path d="M8 36h48a24 24 0 01-48 0z"/>
    <rect x="6" y="32" width="52" height="6" rx="3"/>
    <rect x="18" y="54" width="28" height="5" rx="2.5"/>
    <path d="M20 32c0 0 2-10 10-14 0 0-2 8 2 14" opacity="0.7"/>
    <path d="M32 32c0 0 0-12 8-16 0 0-4 10 0 16" opacity="0.7"/>
    <path d="M26 32c0 0-4-8 2-14 0 0 4 6 4 14" opacity="0.5"/>
    <circle cx="44" cy="22" r="5" opacity="0.4"/>
    <circle cx="44" cy="22" r="2.5"/>
  </svg>
);

/* Target */
export const IconTarget = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor">
    <circle cx="32" cy="32" r="30" opacity="0.15"/>
    <circle cx="32" cy="32" r="22" opacity="0.25"/>
    <circle cx="32" cy="32" r="14" opacity="0.4"/>
    <circle cx="32" cy="32" r="6"/>
    <rect x="30" y="2" width="4" height="14" rx="2"/>
    <rect x="30" y="48" width="4" height="14" rx="2"/>
    <rect x="2" y="30" width="14" height="4" rx="2"/>
    <rect x="48" y="30" width="14" height="4" rx="2"/>
  </svg>
);

/* Money */
export const IconMoney = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor">
    <rect x="4" y="16" width="56" height="36" rx="4" opacity="0.2"/>
    <rect x="4" y="20" width="56" height="32" rx="4"/>
    <circle cx="32" cy="36" r="9" opacity="0.3" style={{fill: 'transparent', stroke: 'currentColor', strokeWidth: 3}}/>
    <circle cx="32" cy="36" r="9" fill="none" stroke="currentColor" strokeWidth="3"/>
    <path d="M32 28v2m0 12v2m-4-8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

/* Gear */
export const IconGear = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor">
    <path fillRule="evenodd" d="M32 20a12 12 0 100 24 12 12 0 000-24zm0 4a8 8 0 110 16 8 8 0 010-16z"/>
    <path d="M28 4h8l2 8a20 20 0 014.2 2.4l7.8-3 5.6 5.6-3 7.8A20 20 0 0154 29v2a20 20 0 01-1.4 4.2l3 7.8-5.6 5.6-7.8-3A20 20 0 0138 47l-2 8h-8l-2-8a20 20 0 01-4.2-1.4l-7.8 3-5.6-5.6 3-7.8A20 20 0 0110 31v-2a20 20 0 011.4-4.2l-3-7.8 5.6-5.6 7.8 3A20 20 0 0126 12l2-8z" opacity="0.6"/>
  </svg>
);

/* Phone */
export const IconPhone = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor">
    <rect x="14" y="4" width="36" height="56" rx="6"/>
    <rect x="18" y="10" width="28" height="38" rx="2" opacity="0.15" style={{fill: 'white'}}/>
    <rect x="18" y="10" width="28" height="38" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
    <circle cx="32" cy="54" r="2.5" style={{fill: 'white'}} opacity="0.6"/>
    <rect x="26" y="7" width="12" height="2.5" rx="1.25" style={{fill: 'white'}} opacity="0.5"/>
  </svg>
);

/* Chat */
export const IconChat = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor">
    <path d="M6 8h52a4 4 0 014 4v30a4 4 0 01-4 4H18l-12 10V12a4 4 0 014-4z"/>
    <rect x="16" y="22" width="24" height="4" rx="2" style={{fill: 'white'}} opacity="0.5"/>
    <rect x="16" y="30" width="16" height="4" rx="2" style={{fill: 'white'}} opacity="0.5"/>
  </svg>
);

/* Monitor */
export const IconMonitor = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor">
    <rect x="4" y="8" width="56" height="38" rx="4"/>
    <rect x="8" y="12" width="48" height="30" rx="2" style={{fill: 'white'}} opacity="0.15"/>
    <rect x="22" y="48" width="20" height="5" rx="1"/>
    <rect x="16" y="53" width="32" height="4" rx="2"/>
  </svg>
);

/* Users */
export const IconUsers = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor">
    <circle cx="22" cy="18" r="10"/>
    <path d="M2 54c0-11 9-20 20-20s20 9 20 20H2z"/>
    <circle cx="46" cy="16" r="8" opacity="0.5"/>
    <path d="M38 54c0-9 6.3-17 15-19.3V54H38z" opacity="0.5"/>
  </svg>
);

/* Home */
export const IconHome = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor">
    <path d="M32 6L4 30h8v26h14V40h12v16h14V30h8L32 6z"/>
    <path d="M32 6L4 30h8v26h14V40h12v16h14V30h8L32 6z" opacity="0.2" transform="translate(3,3)"/>
  </svg>
);

/* Scooter */
export const IconScooter = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor">
    <circle cx="14" cy="46" r="10"/>
    <circle cx="50" cy="46" r="10"/>
    <circle cx="14" cy="46" r="5" style={{fill: 'white'}} opacity="0.4"/>
    <circle cx="50" cy="46" r="5" style={{fill: 'white'}} opacity="0.4"/>
    <path d="M24 46h12l4-14h10l-2-6H36l-4 8h-8"/>
    <path d="M36 32l6-14h-8l-4 14"/>
    <rect x="38" y="14" width="10" height="5" rx="2"/>
  </svg>
);

/* Diamond — доступное качество */
export const IconDiamond = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor">
    <path d="M32 4L56 26L32 60L8 26L32 4z" opacity="0.12"/>
    <path d="M32 10L52 28L32 56L12 28L32 10z"/>
    <path d="M12 28h40" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" opacity="0.35"/>
    <path d="M22 28L32 10l10 18z" opacity="0.55"/>
  </svg>
);

/* Stack — комбо и наборы */
export const IconStack = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor">
    <rect x="6"  y="7"  width="52" height="14" rx="3" opacity="0.18"/>
    <rect x="6"  y="26" width="52" height="14" rx="3" opacity="0.55"/>
    <rect x="6"  y="45" width="52" height="14" rx="3"/>
  </svg>
);

/* Sliders — региональная адаптация */
export const IconSliders = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor">
    <rect x="6" y="11" width="52" height="5" rx="2.5" opacity="0.2"/>
    <circle cx="20" cy="13.5" r="9"/>
    <rect x="6" y="29" width="52" height="5" rx="2.5" opacity="0.2"/>
    <circle cx="42" cy="31.5" r="9"/>
    <rect x="6" y="47" width="52" height="5" rx="2.5" opacity="0.2"/>
    <circle cx="26" cy="49.5" r="9"/>
  </svg>
);

/* Chart */
export const IconChart = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor">
    <rect x="6" y="38" width="10" height="20" rx="2"/>
    <rect x="20" y="26" width="10" height="32" rx="2"/>
    <rect x="34" y="14" width="10" height="44" rx="2"/>
    <rect x="48" y="4" width="10" height="54" rx="2"/>
    <rect x="4" y="58" width="56" height="4" rx="2" opacity="0.4"/>
  </svg>
);
