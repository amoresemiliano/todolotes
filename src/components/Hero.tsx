import React from 'react';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../utils/whatsapp';
import { SafeImage } from './SafeImage';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const whatsAppLink = buildWhatsAppLink();

  return (
    <section id="inicio" className="relative pt-24 sm:pt-28 pb-12 sm:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Editorial Sub-header trust line - unboxed text */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#70675B] mb-5">
          <span>San Luis, Argentina</span>
          <span aria-hidden="true" className="text-[#A89F94]">·</span>
          <span>Desarrollos con infraestructura</span>
          <span aria-hidden="true" className="text-[#A89F94]">·</span>
          <span>Financiación accesible</span>
        </div>

        {/* Main Header typography */}
        <div className="max-w-4xl mb-8 sm:mb-12">
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] text-[#1E1B17] font-normal tracking-tight balance">
            Tu próximo terreno, más fácil y seguro.
          </h1>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-[#524B40] leading-relaxed max-w-3xl font-light">
            Encontrá terrenos y desarrollos inmobiliarios en ubicaciones estratégicas de San Luis, con financiación accesible y el acompañamiento que necesitás para dar el próximo paso.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-medium text-white bg-[#3D553C] hover:bg-[#2D412D] active:scale-[0.99] transition-all shadow-sm cursor-pointer"
            >
              <span>Ver loteos disponibles</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <a
              href={whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-medium text-[#2E2822] bg-[#EFEAE2] hover:bg-[#E5DFD4] transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#3D553C]" />
              <span>Hablar por WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Panoramic Landscape Hero Photo */}
        <div className="relative rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.06)] aspect-[16/9] md:aspect-[21/9] max-h-[560px] border border-[#E8E2D8]">
          <SafeImage
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2200&q=85"
            alt="Paisaje panorámico de las sierras y valles de San Luis"
            fallbackTitle="Sierras de San Luis"
            fallbackSubtitle="Desarrollos residenciales y loteos planificados"
            className="w-full h-full object-cover"
            containerClassName="w-full h-full"
          />

          {/* Subtle gradient scrim only for natural contrast, no artificial neon */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

          {/* Bottom caption with territorial pride */}
          <div className="absolute bottom-4 sm:bottom-6 left-5 sm:left-8 right-5 sm:right-8 flex items-end justify-between text-white text-xs sm:text-sm">
            <div className="drop-shadow-xs">
              <span className="font-editorial text-base sm:text-lg block text-white/95">
                Valle y Sierras Centrales de San Luis
              </span>
              <span className="text-white/80 font-light text-xs sm:text-xs">
                Naturaleza, aire puro y proyección urbana planificada
              </span>
            </div>
            <div className="hidden sm:block text-right text-white/80 text-xs">
              <span>Posesión directa · Financiación propia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
