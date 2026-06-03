interface IconProps {
  className?: string;
}

export const IconPizza = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 20h20L12 2z"/>
    <circle cx="12" cy="10" r="1.5" fill="currentColor" stroke="none"/>
    <circle cx="8" cy="15" r="1.2" fill="currentColor" stroke="none"/>
    <circle cx="16" cy="15" r="1.2" fill="currentColor" stroke="none"/>
    <path d="M2 20h20"/>
  </svg>
);

export const IconRoll = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>
  </svg>
);

export const IconFries = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 13h14l-2 8H7l-2-8z"/>
    <path d="M8 13V5m4 8V3m4 10V5"/>
  </svg>
);

export const IconChild = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="2.5"/>
    <path d="M8 21v-6l-2-4h12l-2 4v6"/>
    <path d="M9 21h6"/>
    <path d="M8 11l-2 2m10-2l2 2"/>
  </svg>
);

export const IconBox = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
    <path d="M9 22V12h6v10"/>
  </svg>
);

export const IconRefresh = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4v5h5"/>
    <path d="M20 20v-5h-5"/>
    <path d="M4 9a9 9 0 0114.6-3.6L20 7M4 17l1.4 1.6A9 9 0 0020 15"/>
  </svg>
);

export const IconTarget = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

export const IconMoney = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="20" height="13" rx="2"/>
    <circle cx="12" cy="12.5" r="2.5"/>
    <path d="M6 6V5a2 2 0 012-2h8a2 2 0 012 2v1"/>
  </svg>
);

export const IconGear = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
  </svg>
);

export const IconPhone = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="7" y="2" width="10" height="20" rx="2"/>
    <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none"/>
    <path d="M10 5h4"/>
  </svg>
);

export const IconChat = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"/>
  </svg>
);

export const IconMonitor = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8M12 17v4"/>
  </svg>
);

export const IconUsers = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="3"/>
    <path d="M3 21v-2a5 5 0 0110 0v2"/>
    <path d="M16 3.13a4 4 0 010 7.75"/>
    <path d="M21 21v-2a4 4 0 00-3-3.87"/>
  </svg>
);

export const IconHome = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12l9-9 9 9"/>
    <path d="M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9"/>
  </svg>
);

export const IconScooter = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="5.5" cy="17.5" r="2.5"/>
    <circle cx="18.5" cy="17.5" r="2.5"/>
    <path d="M8 17.5H14.5V12L11 8H7l-1.5 4.5"/>
    <path d="M14.5 12h2.5l1.5 2.5"/>
    <path d="M14 8h4l-1.5-3H14"/>
  </svg>
);

export const IconChart = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 20h18M5 20V12M9 20V8M13 20V4M17 20v-8"/>
  </svg>
);
