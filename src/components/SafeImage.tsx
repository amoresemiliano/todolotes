import React, { useState } from 'react';
import { Mountain, Trees, Sun } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  className?: string;
  containerClassName?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = 'Desarrollo en San Luis',
  fallbackTitle,
  fallbackSubtitle = 'San Luis, Argentina',
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-[#EFEAE2] via-[#E8DFCFCF] to-[#DFCDBA] flex flex-col items-center justify-center p-6 text-center text-[#554D43] select-none ${containerClassName}`}
      >
        {/* Subtle topographic contour vector background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contour-pattern-sl" width="70" height="70" patternUnits="userSpaceOnUse">
                <path d="M0 35 Q 17.5 20, 35 35 T 70 35" fill="none" stroke="#3D583F" strokeWidth="1" />
                <path d="M0 50 Q 17.5 38, 35 50 T 70 50" fill="none" stroke="#C85A32" strokeWidth="0.8" opacity="0.6" />
                <path d="M0 62 Q 17.5 54, 35 62 T 70 62" fill="none" stroke="#3D583F" strokeWidth="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contour-pattern-sl)" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center max-w-xs">
          <div className="w-12 h-12 rounded-full bg-[#FAF8F5] flex items-center justify-center mb-3 text-[#3D583F] shadow-xs border border-[#E2DBD0]">
            <Mountain className="w-5 h-5 stroke-[1.6]" />
          </div>
          <span className="font-editorial text-lg text-[#26221D] leading-tight mb-1">
            {fallbackTitle || alt || 'Todo Lotes San Luis'}
          </span>
          <span className="text-xs text-[#7A7165] tracking-wide">
            {fallbackSubtitle}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#EFEAE2] ${containerClassName}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#E8E0D4] animate-pulse flex items-center justify-center">
          <Trees className="w-6 h-6 text-[#9A8E7E] opacity-50" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        {...props}
      />
    </div>
  );
};
