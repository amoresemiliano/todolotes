import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { buildWhatsAppLink, DISPLAY_PHONE, DISPLAY_EMAIL, DISPLAY_LOCATION } from '../utils/whatsapp';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onBackToHome?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onBackToHome }) => {
  const currentYear = 2026;
  const whatsAppLink = buildWhatsAppLink();

  const handleLink = (id: string) => {
    if (onBackToHome) {
      onBackToHome();
      setTimeout(() => onNavigate(id), 100);
    } else {
      onNavigate(id);
    }
  };

  return (
    <footer className="bg-[#211E1B] text-[#ECE7DF] pt-16 pb-12 border-t border-[#3A352F] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-[#38332D]">
          {/* Brand Col with SVG Logo */}
          <div className="md:col-span-5">
            <div className="mb-4">
              <Logo variant="footer" />
            </div>
            <p className="text-sm text-[#A89F93] font-light max-w-sm leading-relaxed mb-6">
              Tu próximo terreno, más fácil y seguro. Comercialización y desarrollo de loteos con infraestructura en la provincia de San Luis, Argentina.
            </p>
            <div className="text-xs text-[#8A8174] space-y-1">
              <p className="text-[#C8BDB0]">{DISPLAY_LOCATION}</p>
              <p>Atención personalizada y recorridas en el terreno</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <span className="text-xs uppercase tracking-wider text-[#E5A238] font-semibold block mb-4">
              Navegación
            </span>
            <ul className="space-y-2.5 text-sm text-[#D1C9BE]">
              <li>
                <button
                  onClick={() => handleLink('inicio')}
                  className="hover:text-[#E5A238] transition-colors cursor-pointer"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('loteos')}
                  className="hover:text-[#E5A238] transition-colors cursor-pointer"
                >
                  Loteos disponibles
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('nosotros')}
                  className="hover:text-[#E5A238] transition-colors cursor-pointer"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('como-comprar')}
                  className="hover:text-[#E5A238] transition-colors cursor-pointer"
                >
                  Cómo comprar
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('contacto')}
                  className="hover:text-[#E5A238] transition-colors cursor-pointer"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Social Links */}
          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-wider text-[#C85A32] font-semibold block mb-4">
              Contacto directo
            </span>
            <div className="space-y-3.5 text-sm text-[#D1C9BE] mb-6">
              <div>
                <span className="text-xs text-[#8A8174] block">WhatsApp comercial</span>
                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#E5A238] transition-colors font-medium text-white"
                >
                  <span>{DISPLAY_PHONE}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E5A238]" />
                </a>
              </div>
              <div>
                <span className="text-xs text-[#8A8174] block">Correo electrónico</span>
                <a
                  href={`mailto:${DISPLAY_EMAIL}`}
                  className="hover:text-[#E5A238] transition-colors font-medium text-white"
                >
                  {DISPLAY_EMAIL}
                </a>
              </div>
              <div>
                <span className="text-xs text-[#8A8174] block">Redes sociales</span>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#E5A238] transition-colors"
                >
                  <span>Instagram @todolotes.sl</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A89F93]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A8174] gap-4">
          <p>
            © {currentYear} Todo Lotes. Todos los derechos reservados. San Luis, República Argentina.
          </p>
          <div className="flex items-center gap-4">
            <span>Términos y condiciones</span>
            <span aria-hidden="true">·</span>
            <span>Política de privacidad</span>
            <span aria-hidden="true">·</span>
            <span>Información catastral sujeta a mensura</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

