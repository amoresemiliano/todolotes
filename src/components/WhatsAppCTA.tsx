import React from 'react';
import { MessageCircle, Phone, Clock, ArrowUpRight } from 'lucide-react';
import { buildWhatsAppLink, DISPLAY_PHONE, DISPLAY_LOCATION } from '../utils/whatsapp';

export const WhatsAppCTA: React.FC = () => {
  const whatsAppLink = buildWhatsAppLink();

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-[#EFEAE2] border-t border-[#DDD5C8]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <span className="text-xs uppercase tracking-wider text-[#665E52] font-medium block mb-2">
          Atención personalizada
        </span>

        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#1E1B17] font-normal tracking-tight mb-4">
          ¿Encontraste un lugar que te interesa?
        </h2>

        <p className="text-base sm:text-lg text-[#524B40] max-w-2xl mx-auto font-light leading-relaxed mb-8">
          Escribinos y conocé disponibilidad, precios y opciones de financiación para cada loteo. Te asesoramos sin compromiso.
        </p>

        {/* WhatsApp Main Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-[#3D553C] hover:bg-[#2D412D] active:scale-[0.99] transition-all shadow-md"
          >
            <MessageCircle className="w-5 h-5 fill-white/20" />
            <span>Consultar por WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 opacity-80" />
          </a>
        </div>

        {/* Contact info metadata */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#6A6256] pt-6 border-t border-[#DDD5C8]">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#3D553C]" />
            <span>{DISPLAY_PHONE}</span>
          </div>
          <span aria-hidden="true" className="text-[#C4BDB2]">·</span>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#3D553C]" />
            <span>Lunes a Sábados 9:00 a 19:00 hs</span>
          </div>
          <span aria-hidden="true" className="text-[#C4BDB2]">·</span>
          <div>
            <span>{DISPLAY_LOCATION}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
