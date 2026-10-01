import React from 'react';
import { ArrowRight, Check, Compass, ShieldCheck } from 'lucide-react';
import { Loteo } from '../types';
import { SafeImage } from './SafeImage';

interface FeaturedDevelopmentProps {
  loteo: Loteo;
  onSelectLoteo: (slug: string) => void;
}

export const FeaturedDevelopment: React.FC<FeaturedDevelopmentProps> = ({
  loteo,
  onSelectLoteo
}) => {
  return (
    <section className="py-16 sm:py-24 bg-[#F2EDE4] border-y border-[#E2DBD0]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* 60% Photography Block (7 columns out of 12) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] shadow-[0_16px_40px_rgba(0,0,0,0.06)] border border-[#DDD5C8]">
              <SafeImage
                src={loteo.coverImage}
                alt={loteo.name}
                fallbackTitle={loteo.name}
                fallbackSubtitle={loteo.location}
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF8F5]/90 backdrop-blur-xs p-4 rounded-xl border border-white/60 flex items-center justify-between text-xs text-[#3A332B]">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#3D553C]" />
                  <span className="font-medium">Potrero de los Funes</span>
                </div>
                <span className="text-[#6D6559]">A 18 min del centro de San Luis</span>
              </div>
            </div>
          </div>

          {/* 40% Editorial Content Block (5 columns out of 12) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Kicker - unboxed text */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#696155] font-medium mb-3">
              <span>Desarrollo destacado</span>
              <span aria-hidden="true" className="text-[#A89F94]">·</span>
              <span className="text-[#3D553C] font-semibold">{loteo.status}</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl text-[#1E1B17] font-normal tracking-tight mb-2">
              {loteo.name}
            </h2>

            <p className="text-sm font-medium text-[#70675B] mb-4">
              {loteo.location}
            </p>

            <p className="text-sm sm:text-base text-[#524B40] leading-relaxed font-light mb-6">
              {loteo.fullDescription}
            </p>

            {/* Quick Specs editorial table */}
            <div className="border-t border-[#DDD5C8] divide-y divide-[#E5DFD4] text-xs mb-8">
              <div className="py-2.5 flex justify-between items-center">
                <span className="text-[#787063]">Cantidad de lotes</span>
                <span className="font-semibold text-[#1E1B17] tabular-nums">{loteo.lotCount} parcelas</span>
              </div>
              <div className="py-2.5 flex justify-between items-center">
                <span className="text-[#787063]">Superficie</span>
                <span className="font-semibold text-[#1E1B17] tabular-nums">Desde {loteo.minSurfaceM2} m² hasta {loteo.maxSurfaceM2} m²</span>
              </div>
              <div className="py-2.5 flex justify-between items-center">
                <span className="text-[#787063]">Servicios previstos</span>
                <span className="font-medium text-[#1E1B17]">Agua de red + Luz + Calles consolidadas</span>
              </div>
              <div className="py-2.5 flex justify-between items-center">
                <span className="text-[#787063]">Financiación</span>
                <span className="font-semibold text-[#3D553C]">{loteo.financing}</span>
              </div>
              <div className="py-2.5 flex justify-between items-center">
                <span className="text-[#787063]">Estado de obra</span>
                <span className="font-medium text-[#1E1B17]">{loteo.stage}</span>
              </div>
            </div>

            {/* Action CTA */}
            <div>
              <button
                onClick={() => onSelectLoteo(loteo.slug)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-medium text-white bg-[#3D553C] hover:bg-[#2D412D] active:scale-[0.99] transition-all shadow-sm cursor-pointer"
              >
                <span>Conocer el loteo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
