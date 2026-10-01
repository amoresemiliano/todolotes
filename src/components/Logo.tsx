import React from 'react';

interface LogoProps {
  variant?: 'header' | 'footer' | 'icon-only';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'header', className = '' }) => {
  const isDark = variant === 'footer';

  // SVG Isotype representing:
  // 1. Cadastral parcels / division of land (organic geometric polygon lots)
  // 2. Rising sun of San Luis (warm arch in golden mustard)
  // 3. Winding internal access road / horizon line
  const Isotype = (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 transition-transform duration-300 group-hover:scale-105"
      aria-hidden="true"
    >
      {/* Sun / Sol Puntano */}
      <circle cx="28" cy="14" r="8" fill="#E5A238" fillOpacity={isDark ? "0.9" : "0.85"} />

      {/* Horizon / Serranía backdrop line */}
      <path
        d="M2 28C9 25 18 24 26 26C33 27.8 38 25 42 23"
        stroke={isDark ? "#D9C9B4" : "#8A7E70"}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeDasharray="2 2"
        opacity="0.5"
      />

      {/* Parcel 1 (Upper Left Lot - Olive Green) */}
      <path
        d="M6 26L19 22L17 31L5 33L6 26Z"
        fill={isDark ? "#5C7D5A" : "#3D583F"}
        stroke={isDark ? "#24211D" : "#FAF8F5"}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Parcel 2 (Central Main Lot - Terracotta Earth) */}
      <path
        d="M20.5 21.5L37 18L34 28L18.5 30.5L20.5 21.5Z"
        fill={isDark ? "#DE7046" : "#C85A32"}
        stroke={isDark ? "#24211D" : "#FAF8F5"}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Parcel 3 (Lower Roadside Lot - Warm Ochre Sand) */}
      <path
        d="M7 34.5L18 32.5L22 41L11 41.5L7 34.5Z"
        fill={isDark ? "#CDB07B" : "#B89B64"}
        stroke={isDark ? "#24211D" : "#FAF8F5"}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Parcel 4 (Lower East Lot - Deep Olive/Forest) */}
      <path
        d="M20 32L35 29.5L39 39L24 40.5L20 32Z"
        fill={isDark ? "#486B49" : "#2E4830"}
        stroke={isDark ? "#24211D" : "#FAF8F5"}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Road / Internal path accent dividing line */}
      <path
        d="M19 20L17 41"
        stroke={isDark ? "#FAF8F5" : "#FAF8F5"}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );

  if (variant === 'icon-only') {
    return <div className={`inline-flex items-center ${className}`}>{Isotype}</div>;
  }

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 group ${className}`}>
      {Isotype}
      <div className="flex flex-col text-left">
        <span
          className={`font-editorial text-[22px] sm:text-[25px] font-semibold leading-none tracking-tight transition-colors ${
            isDark
              ? 'text-white group-hover:text-[#E5A238]'
              : 'text-[#1E1B17] group-hover:text-[#3D583F]'
          }`}
        >
          Todo Lotes
        </span>
        <span
          className={`text-[9.5px] uppercase tracking-wider font-medium mt-1 leading-none ${
            isDark ? 'text-[#B8AA97]' : 'text-[#7D7263]'
          }`}
        >
          San Luis · Desarrollos
        </span>
      </div>
    </div>
  );
};
