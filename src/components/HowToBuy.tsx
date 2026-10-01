import React from 'react';
import { ArrowDown, Search, MessageSquare, KeyRound, Sun } from 'lucide-react';

interface HowToBuyProps {
  onExploreClick: () => void;
}

export const HowToBuy: React.FC<HowToBuyProps> = ({ onExploreClick }) => {
  const steps = [
    {
      num: '01',
      title: 'Encontrá tu lugar',
      description: 'Explorá los desarrollos disponibles y elegí el que mejor se adapte a lo que buscás: paisaje, dimensiones y cercanía.',
      icon: Search,
      numColor: 'text-[#C85A32]',
      iconBg: 'bg-[#FAF0EA]',
      iconColor: 'text-[#C85A32]'
    },
    {
      num: '02',
      title: 'Hablemos',
      description: 'Consultanos disponibilidad, financiación y características del lote. Te enviamos planos, videos y coordenadas exactas.',
      icon: MessageSquare,
      numColor: 'text-[#C28522]',
      iconBg: 'bg-[#FDF6E9]',
      iconColor: 'text-[#C28522]'
    },
    {
      num: '03',
      title: 'Elegí tu terreno',
      description: 'Te acompañamos durante todo el proceso —visita presencial, reserva transparente y boleto— para que avances con total tranquilidad.',
      icon: KeyRound,
      numColor: 'text-[#3D583F]',
      iconBg: 'bg-[#F0F5F0]',
      iconColor: 'text-[#3D583F]'
    }
  ];

  return (
    <section id="como-comprar" className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-[#EAE4DC] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#C85A32] font-semibold mb-2">
            <Sun className="w-3.5 h-3.5 text-[#E5A238]" />
            <span>El proceso</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#1E1B17] font-normal tracking-tight">
            Tu lote, paso a paso
          </h2>
          <p className="mt-3 text-base text-[#5C5449] font-light">
            Un camino claro, seguro y sin letra chica para acceder a tu propia tierra.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-8 rounded-xl bg-[#F6F2EC] border border-[#E5DFD4] hover:border-[#C85A32]/35 transition-all duration-300 relative flex flex-col justify-between group shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`font-editorial text-3xl font-medium ${step.numColor} tabular-nums`}>
                      {step.num}
                    </span>
                    <div className={`w-10 h-10 rounded-full ${step.iconBg} ${step.iconColor} flex items-center justify-center`}>
                      <Icon className="w-4.5 h-4.5 stroke-[1.75]" />
                    </div>
                  </div>
                  <h3 className="font-editorial text-xl text-[#1E1B17] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#5C5449] leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E8E1D5] text-[11px] text-[#80776A] flex items-center justify-between">
                  <span>Paso {step.num} de 03</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5A238]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <button
            onClick={onExploreClick}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-medium text-white bg-[#3D583F] hover:bg-[#2F4932] active:scale-[0.99] transition-all shadow-xs cursor-pointer hover:shadow-sm"
          >
            <span>Quiero conocer los lotes disponibles</span>
            <ArrowDown className="w-4 h-4 text-[#E5A238]" />
          </button>
        </div>
      </div>
    </section>
  );
};

