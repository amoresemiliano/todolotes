import React from 'react';
import { MessageCircle, Phone, Mail, Clock, ArrowUpRight, Sun } from 'lucide-react';
import { buildWhatsAppLink, DISPLAY_PHONE, DISPLAY_EMAIL, DISPLAY_LOCATION } from '../utils/whatsapp';

export const WhatsAppCTA: React.FC = () => {
  const whatsAppLink = buildWhatsAppLink();

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-[#EFEAE2] border-t border-[#DDD5C8] relative overflow-hidden">
      {/* Delicate warm radial accent in background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-gradient-to-t from-[#E8DFCFCF] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#C85A32] font-semibold mb-2.5">
          <Sun className="w-3.5 h-3.5 text-[#E5A238]" />
          <span>Atención personalizada</span>
        </div>

        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#1E1B17] font-normal tracking-tight mb-4">
          ¿Encontraste un lugar que te interesa?
        </h2>

        <p className="text-base sm:text-lg text-[#524B40] max-w-2xl mx-auto font-light leading-relaxed mb-8">
          Escribinos y conocé disponibilidad, precios y opciones de financiación para cada loteo. Te asesoramos directamente y coordinamos una visita al campo.
        </p>

        {/* WhatsApp Main Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-[#3D583F] hover:bg-[#2F4932] active:scale-[0.99] transition-all shadow-md hover:shadow-lg"
          >
            <MessageCircle className="w-5 h-5 fill-white/20 text-white" />
            <span>Consultar por WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 text-[#E5A238]" />
          </a>
        </div>

        {/* Contact info metadata */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-[#5C5346] pt-6 border-t border-[#DDD5C8]">
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#C85A32] transition-colors font-medium text-[#2E2822]"
          >
            <Phone className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>{DISPLAY_PHONE}</span>
          </a>

          <span aria-hidden="true" className="text-[#C4BDB2]">·</span>

          <a
            href={`mailto:${DISPLAY_EMAIL}`}
            className="flex items-center gap-1.5 hover:text-[#C85A32] transition-colors font-medium text-[#2E2822]"
          >
            <Mail className="w-3.5 h-3.5 text-[#3D583F]" />
            <span>{DISPLAY_EMAIL}</span>
          </a>

          <span aria-hidden="true" className="text-[#C4BDB2]">·</span>

          <div className="flex items-center gap-1.5 text-[#665D4F]">
            <Clock className="w-3.5 h-3.5 text-[#E5A238]" />
            <span>Lunes a Sábados 9:00 a 19:00 hs</span>
          </div>

          <span aria-hidden="true" className="text-[#C4BDB2]">·</span>

          <div className="text-[#665D4F]">
            <span>{DISPLAY_LOCATION}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

