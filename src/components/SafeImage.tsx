import React, { useState } from 'react';
import { Mountain, Trees } from 'lucide-react';

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
        className={`relative overflow-hidden bg-gradient-to-br from-[#EAE4DC] via-[#E2DACF] to-[#D5C9BC] flex flex-col items-center justify-center p-6 text-center text-[#5A5248] select-none ${containerClassName}`}
      >
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contour-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M0 30 Q 15 15, 30 30 T 60 30" fill="none" stroke="#2D3A29" strokeWidth="1" />
                <path d="M0 45 Q 15 35, 30 45 T 60 45" fill="none" stroke="#2D3A29" strokeWidth="0.75" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contour-pattern)" />
          </svg>
        </div>
        <div className="relative z-10 flex flex-col items-center max-w-xs">
          <div className="w-12 h-12 rounded-full bg-[#FAF8F5]/80 flex items-center justify-center mb-3 text-[#3D553C] shadow-sm">
            <Mountain className="w-6 h-6 stroke-[1.5]" />
          </div>
          <span className="font-editorial text-lg text-[#2A2621] leading-tight mb-1">
            {fallbackTitle || alt || 'Todo Lotes'}
          </span>
          <span className="text-xs text-[#736B60] tracking-wide">
            {fallbackSubtitle}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#EAE4DC] ${containerClassName}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#E8E2D9] animate-pulse flex items-center justify-center">
          <Trees className="w-6 h-6 text-[#9A8F82] opacity-40" />
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
