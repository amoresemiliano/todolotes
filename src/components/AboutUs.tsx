import React from 'react';
import { ShieldCheck, MapPin, Sparkles, PhoneCall } from 'lucide-react';
import { SafeImage } from './SafeImage';
import { buildWhatsAppLink } from '../utils/whatsapp';

export const AboutUs: React.FC = () => {
  const whatsAppLink = buildWhatsAppLink({ messageType: 'visita' });

  return (
    <section id="nosotros" className="py-16 sm:py-24 bg-[#EFEAE2] border-t border-[#DFD8CC]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-wider text-[#696155] font-medium block mb-2">
              Quiénes somos
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#1E1B17] font-normal tracking-tight mb-6">
              Mucho más que vender terrenos.
            </h2>

            <div className="space-y-4 text-base text-[#524B40] leading-relaxed font-light mb-8">
              <p>
                Somos una plataforma especializada en comercialización de lotes y terrenos en San Luis.
                Creemos que comprar un terreno no debería ser un proceso complejo ni generar incertidumbre.
              </p>
              <p>
                Por eso combinamos asesoramiento experto, desarrollos seleccionados, ubicaciones privilegiadas y atención directa para que dar el paso hacia tu lote propio sea simple, rápido y seguro.
              </p>
              <p className="text-sm text-[#665E51]">
                Caminamos cada fracción de campo antes de ofrecerla. Conocemos el régimen de aguas, la topografía, los accesos y los planes de expansión de los municipios de San Luis para asegurarte una inversión sólida y con proyección.
              </p>
            </div>

            {/* Quiet human facts */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#DDD6C8] mb-8 text-xs text-[#3D372F]">
              <div>
                <span className="font-editorial text-2xl font-normal text-[#1E1B17] block mb-0.5 tabular-nums">
                  +10 años
                </span>
                <span className="text-[#6D6559]">De trayectoria en el territorio de San Luis</span>
              </div>
              <div>
                <span className="font-editorial text-2xl font-normal text-[#1E1B17] block mb-0.5 tabular-nums">
                  100%
                </span>
                <span className="text-[#6D6559]">Desarrollos con verificación legal y técnica previa</span>
              </div>
            </div>

            <a
              href={whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#3D553C] hover:text-[#2D412D] transition-colors"
            >
              <span>Coordinar una visita o charla informativa</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.06)] border border-[#DDD6C8] aspect-[4/3] sm:aspect-[16/11]">
              <SafeImage
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80"
                alt="Recorriendo el terreno con asesoramiento en San Luis"
                fallbackTitle="Todo Lotes en San Luis"
                fallbackSubtitle="Presencia territorial y cercanía humana"
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="font-editorial text-lg block text-white/95">
                  Conocemos cada rincón de San Luis
                </span>
                <span className="text-white/80 text-xs font-light">
                  Acompañamiento en el lote para que pises tu tierra antes de decidir
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
