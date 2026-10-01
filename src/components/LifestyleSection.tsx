import React from 'react';
import { SafeImage } from './SafeImage';

export const LifestyleSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="relative rounded-3xl overflow-hidden min-h-[480px] sm:min-h-[560px] flex items-center shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[#E0D8CB]">
          {/* Background Scenic Landscape Photo */}
          <div className="absolute inset-0">
            <SafeImage
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85"
              alt="Hogar y naturaleza en San Luis"
              fallbackTitle="Vida en las Sierras"
              fallbackSubtitle="San Luis, Argentina"
              className="w-full h-full object-cover"
              containerClassName="w-full h-full"
            />
            {/* Natural warm overlay scrim for readable contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent sm:w-3/4" />
          </div>

          {/* Emotional Copy */}
          <div className="relative z-10 p-8 sm:p-14 max-w-xl text-white">
            <span className="text-xs uppercase tracking-widest text-[#E2DACF] font-medium block mb-3">
              Estilo de vida & Inversión
            </span>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-white mb-6">
              Un terreno puede ser el comienzo de muchas cosas.
            </h2>

            <div className="space-y-2 text-lg sm:text-xl font-light text-white/90 mb-8 border-l border-white/40 pl-4">
              <p>Tu casa.</p>
              <p>Un lugar para descansar.</p>
              <p>Un proyecto familiar.</p>
              <p>Una inversión para el futuro.</p>
            </div>

            <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed max-w-md">
              Elegir dónde echar raíces es una de las decisiones más importantes. En San Luis encontrás el espacio, el cielo abierto y el ritmo sereno que siempre imaginaste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
