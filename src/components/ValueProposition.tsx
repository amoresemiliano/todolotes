import React from 'react';
import { Compass, Hammer, Coins, HeartHandshake, Sun } from 'lucide-react';

export const ValueProposition: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Ubicaciones estratégicas',
      description: 'Seleccionamos desarrollos con potencial de revalorización, accesos seguros y cercanía a servicios esenciales de San Luis.',
      icon: Compass,
      accentColor: 'text-[#C85A32]',
      bgIcon: 'bg-[#FBF1EC]'
    },
    {
      num: '02',
      title: 'Proyectos con infraestructura',
      description: 'Loteos preparados con apertura de calles, tendido de servicios y planificación territorial responsable.',
      icon: Hammer,
      accentColor: 'text-[#3D583F]',
      bgIcon: 'bg-[#F0F5F0]'
    },
    {
      num: '03',
      title: 'Financiación accesible',
      description: 'Alternativas directas en pesos o dólares pensadas para que el acceso a la tierra propia sea real y previsible.',
      icon: Coins,
      accentColor: 'text-[#C28522]',
      bgIcon: 'bg-[#FDF6E9]'
    },
    {
      num: '04',
      title: 'Acompañamiento personal',
      description: 'Asesoramiento directo y transparente durante todo el proceso: desde la primera visita al campo hasta la firma final.',
      icon: HeartHandshake,
      accentColor: 'text-[#BC542B]',
      bgIcon: 'bg-[#FAF0EA]'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Editorial Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#C85A32] font-semibold mb-2">
            <Sun className="w-3.5 h-3.5 text-[#E5A238]" />
            <span>Nuestra propuesta</span>
          </div>
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

        {/* 4 Pillars Grid with warm touches */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6.5 rounded-xl bg-[#F6F2EC] border border-[#E5DFD4] hover:border-[#C85A32]/35 transition-all duration-300 flex flex-col justify-between group shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-10 h-10 rounded-lg ${pillar.bgIcon} ${pillar.accentColor} flex items-center justify-center`}>
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <span className="font-editorial text-sm font-semibold text-[#8C8172] group-hover:text-[#C85A32] transition-colors tabular-nums">
                      {pillar.num}
                    </span>
                  </div>

                  <h3 className="font-editorial text-xl text-[#1E1B17] mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5449] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E8E1D5] text-[11px] text-[#8A8174] font-medium flex items-center justify-between">
                  <span>Principio Todo Lotes</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5A238]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

