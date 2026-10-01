import React from 'react';
import { Compass, Hammer, Coins, HeartHandshake } from 'lucide-react';

export const ValueProposition: React.FC = () => {
  const pillars = [
    {
      title: 'Ubicaciones estratégicas',
      description: 'Seleccionamos desarrollos con potencial de revalorización, accesos seguros y cercanía a servicios esenciales de San Luis.',
      icon: Compass
    },
    {
      title: 'Proyectos con infraestructura',
      description: 'Loteos preparados con apertura de calles, tendido de servicios y planificación territorial responsable.',
      icon: Hammer
    },
    {
      title: 'Financiación accesible',
      description: 'Alternativas directas en pesos o dólares pensadas para que el acceso a la tierra propia sea real y previsible.',
      icon: Coins
    },
    {
      title: 'Acompañamiento personal',
      description: 'Asesoramiento directo y transparente durante todo el proceso: desde la primera visita al campo hasta la firma final.',
      icon: HeartHandshake
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Editorial Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-wider text-[#696155] font-medium block mb-2">
            Nuestra propuesta
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#1E1B17] font-normal tracking-tight">
            Comprar un terreno puede ser simple.
          </h2>
          <div className="mt-4 space-y-3 text-base sm:text-lg text-[#524B40] leading-relaxed font-light">
            <p>
              En <strong>Todo Lotes</strong> transformamos el acceso a la tierra propia en San Luis.
              Conectamos a las personas con desarrollos inmobiliarios estratégicos, transparentes y con opciones de financiación accesibles.
            </p>
            <p className="text-sm sm:text-base text-[#6E6659]">
              No vendemos solamente metros cuadrados: acompañamos a cada persona a construir su futuro y su inversión con el respaldo y la confianza que necesita.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid (Architectural, quiet, unboxed, subtle hairline borders) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-xl bg-[#F5F1EB] border border-[#E5DFD4] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#EAE3D8] text-[#3D553C] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <h3 className="font-editorial text-xl text-[#1E1B17] mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5449] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E8E1D5] text-[11px] text-[#8A8174] font-medium">
                  <span>0{idx + 1} · Principio Todo Lotes</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
