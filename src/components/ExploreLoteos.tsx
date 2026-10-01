import React, { useState, useMemo } from 'react';
import { ArrowRight, MapPin, Layers, CheckCircle2, Search } from 'lucide-react';
import { Loteo } from '../types';
import { SafeImage } from './SafeImage';

interface ExploreLoteosProps {
  loteos: Loteo[];
  onSelectLoteo: (slug: string) => void;
}

export const ExploreLoteos: React.FC<ExploreLoteosProps> = ({
  loteos,
  onSelectLoteo
}) => {
  const [activeZone, setActiveZone] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const zones = useMemo(() => {
    const list = Array.from(new Set(loteos.map((l) => l.zone)));
    return ['todos', ...list];
  }, [loteos]);

  const filteredLoteos = useMemo(() => {
    return loteos.filter((item) => {
      const matchesZone =
        activeZone === 'todos' || item.zone.toLowerCase() === activeZone.toLowerCase();
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesZone && matchesSearch;
    });
  }, [loteos, activeZone, searchQuery]);

  return (
    <section id="loteos" className="py-16 sm:py-24 border-t border-[#EAE4DC] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="text-xs uppercase tracking-wider text-[#696155] font-medium block mb-2">
            Catálogo de desarrollos
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#1E1B17] font-normal tracking-tight">
            Encontrá el lugar para tu próximo proyecto
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5E564B] font-light">
            Conocé nuestros desarrollos y descubrí dónde puede empezar tu próxima historia.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#EAE4DC]">
          {/* Segmented Filter Buttons (functional filter controls, not static pills) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {zones.map((zone) => {
              const label = zone === 'todos' ? 'Todos los loteos' : zone;
              const isActive = activeZone === zone;
              return (
                <button
                  key={zone}
                  onClick={() => setActiveZone(zone)}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#3D553C] text-white shadow-xs'
                      : 'bg-[#EFEAE2] text-[#595247] hover:text-[#1E1B17] hover:bg-[#E5DFD4]'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64 shrink-0">
            <Search className="w-4 h-4 text-[#7A7165] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por zona o nombre..."
              className="w-full pl-9 pr-3 py-1.5 bg-[#FAF8F5] border border-[#DDD5C9] rounded-md text-xs sm:text-sm text-[#26221D] placeholder:text-[#8C8376] focus:outline-none focus:border-[#3D553C] transition-colors"
            />
          </div>
        </div>

        {/* Empty State */}
        {filteredLoteos.length === 0 && (
          <div className="text-center py-16 px-4 bg-[#F5EFE6] rounded-xl border border-[#E8E2D8]">
            <p className="font-editorial text-xl text-[#26221D] mb-2">
              No encontramos loteos con ese criterio de búsqueda
            </p>
            <p className="text-sm text-[#6A6256] mb-6">
              Probá seleccionando otra zona o borrando el término de búsqueda.
            </p>
            <button
              onClick={() => {
                setActiveZone('todos');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#3D553C] text-white rounded-lg text-xs font-medium"
            >
              Restablecer filtros
            </button>
          </div>
        )}

        {/* Dynamic Editorial Layout: Asymmetric Composition */}
        <div className="space-y-10 sm:space-y-14">
          {filteredLoteos.map((loteo, index) => {
            // Alternating layouts: First is wide featured horizontal, next are two-column, then full-width banner
            const isFullHero = index === 0 && activeZone === 'todos' && searchQuery === '';
            const isWideAccent = index === 3 && activeZone === 'todos' && searchQuery === '';

            if (isFullHero) {
              return (
                <div
                  key={loteo.id}
                  onClick={() => onSelectLoteo(loteo.slug)}
                  className="group cursor-pointer rounded-2xl bg-[#F5F1EB] border border-[#E5DFD4] overflow-hidden transition-all duration-300 hover:border-[#3D553C]/40 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)]"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[460px] overflow-hidden">
                      <SafeImage
                        src={loteo.coverImage}
                        alt={loteo.name}
                        fallbackTitle={loteo.name}
                        fallbackSubtitle={loteo.location}
                        className="w-full h-full object-cover img-hover-zoom"
                        containerClassName="w-full h-full"
                      />
                    </div>
                    <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
                      <div>
                        {/* Unboxed metadata with typographic separators */}
                        <div className="flex items-center gap-2 text-xs text-[#70675B] mb-2">
                          <span className="flex items-center gap-1 font-medium text-[#3D553C]">
                            <MapPin className="w-3.5 h-3.5" />
                            {loteo.location}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{loteo.status}</span>
                        </div>

                        <h3 className="font-editorial text-2xl sm:text-3xl text-[#1E1B17] group-hover:text-[#3D553C] transition-colors mb-3">
                          {loteo.name}
                        </h3>

                        <p className="text-sm sm:text-base text-[#524B40] leading-relaxed font-light mb-6">
                          {loteo.shortDescription}
                        </p>

                        {/* Specs grid */}
                        <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#E5DFD4] mb-6 text-xs text-[#3D372F]">
                          <div>
                            <span className="text-[#787063] block mb-0.5">Disponibilidad</span>
                            <span className="font-semibold text-sm text-[#1E1B17] tabular-nums">
                              {loteo.lotCount} lotes
                            </span>
                          </div>
                          <div>
                            <span className="text-[#787063] block mb-0.5">Superficie</span>
                            <span className="font-semibold text-sm text-[#1E1B17] tabular-nums">
                              Desde {loteo.minSurfaceM2} m²
                            </span>
                          </div>
                          <div className="col-span-2">
                            <span className="text-[#787063] block mb-0.5">Infraestructura</span>
                            <span className="text-xs text-[#332E27] font-medium leading-snug">
                              Agua potable · Electricidad · Calles consolidadas
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs text-[#6E6659] font-light">
                          {loteo.stage}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#3D553C] group-hover:translate-x-1 transition-transform">
                          Ver desarrollo
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            if (isWideAccent) {
              return (
                <div
                  key={loteo.id}
                  onClick={() => onSelectLoteo(loteo.slug)}
                  className="group cursor-pointer rounded-2xl bg-[#EFEAE2] border border-[#DDD6C8] overflow-hidden transition-all duration-300 hover:border-[#3D553C]/40 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)]"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12">
                    <div className="md:col-span-6 p-6 sm:p-10 flex flex-col justify-between order-2 md:order-1">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-[#70675B] mb-2">
                          <span className="font-medium text-[#3D553C]">{loteo.location}</span>
                          <span aria-hidden="true">·</span>
                          <span>{loteo.status}</span>
                        </div>
                        <h3 className="font-editorial text-2xl sm:text-3xl text-[#1E1B17] group-hover:text-[#3D553C] transition-colors mb-3">
                          {loteo.name}
                        </h3>
                        <p className="text-sm sm:text-base text-[#524B40] leading-relaxed font-light mb-6">
                          {loteo.shortDescription}
                        </p>
                        <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs text-[#3D372F] py-3 border-y border-[#DDD6C8] mb-6">
                          <div>
                            <span className="text-[#787063]">Lotes:</span>{' '}
                            <strong className="text-[#1E1B17] tabular-nums">{loteo.lotCount}</strong>
                          </div>
                          <div>
                            <span className="text-[#787063]">Dimensiones:</span>{' '}
                            <strong className="text-[#1E1B17] tabular-nums">Desde {loteo.minSurfaceM2} m²</strong>
                          </div>
                          <div>
                            <span className="text-[#787063]">Financiación:</span>{' '}
                            <strong className="text-[#1E1B17]">Accesible</strong>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#6E6659]">{loteo.financing}</span>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#3D553C] group-hover:translate-x-1 transition-transform">
                          Ver desarrollo
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                    <div className="md:col-span-6 relative aspect-[16/10] md:aspect-auto md:h-full min-h-[300px] overflow-hidden order-1 md:order-2">
                      <SafeImage
                        src={loteo.coverImage}
                        alt={loteo.name}
                        fallbackTitle={loteo.name}
                        fallbackSubtitle={loteo.location}
                        className="w-full h-full object-cover img-hover-zoom"
                        containerClassName="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              );
            }

            // Standard elegant card
            return (
              <div
                key={loteo.id}
                onClick={() => onSelectLoteo(loteo.slug)}
                className="group cursor-pointer rounded-2xl bg-[#F5F1EB] border border-[#E5DFD4] overflow-hidden transition-all duration-300 hover:border-[#3D553C]/40 hover:shadow-[0_12px_32px_rgba(0,0,0,0.05)] flex flex-col md:flex-row"
              >
                <div className="md:w-5/12 relative aspect-[16/10] md:aspect-auto min-h-[260px] md:min-h-[320px] overflow-hidden">
                  <SafeImage
                    src={loteo.coverImage}
                    alt={loteo.name}
                    fallbackTitle={loteo.name}
                    fallbackSubtitle={loteo.location}
                    className="w-full h-full object-cover img-hover-zoom"
                    containerClassName="w-full h-full"
                  />
                  {/* Status label as subtle overlay text */}
                  <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-medium text-[#2E2822]">
                    {loteo.status}
                  </div>
                </div>

                <div className="md:w-7/12 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    {/* Unboxed metadata */}
                    <div className="flex items-center gap-2 text-xs text-[#70675B] mb-1.5">
                      <span className="font-medium text-[#3D553C]">{loteo.location}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{loteo.launchYear}</span>
                    </div>

                    <h3 className="font-editorial text-2xl text-[#1E1B17] group-hover:text-[#3D553C] transition-colors mb-2.5">
                      {loteo.name}
                    </h3>

                    <p className="text-sm text-[#524B40] leading-relaxed font-light mb-4 line-clamp-2 sm:line-clamp-none">
                      {loteo.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#4A433A] mb-4">
                      <div>
                        <span className="text-[#787063]">Lotes:</span>{' '}
                        <span className="font-medium text-[#1E1B17] tabular-nums">{loteo.lotCount}</span>
                      </div>
                      <span aria-hidden="true" className="text-[#C4BDB2]">·</span>
                      <div>
                        <span className="text-[#787063]">Superficie:</span>{' '}
                        <span className="font-medium text-[#1E1B17] tabular-nums">Desde {loteo.minSurfaceM2} m²</span>
                      </div>
                      <span aria-hidden="true" className="text-[#C4BDB2]">·</span>
                      <div>
                        <span className="text-[#787063]">Infraestructura:</span>{' '}
                        <span className="font-medium text-[#1E1B17]">Calles + Agua + Luz</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#E5DFD4]">
                    <span className="text-xs text-[#6E6659]">{loteo.stage}</span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#3D553C] group-hover:translate-x-1 transition-transform">
                      Ver desarrollo
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
