import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  onSelectLoteo?: (slug: string) => void;
  activeView: 'home' | 'detail';
  onBackToHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigate,
  activeView,
  onBackToHome
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    if (activeView !== 'home' && onBackToHome) {
      onBackToHome();
      setTimeout(() => onNavigate(id), 120);
    } else {
      onNavigate(id);
    }
  };

  const whatsAppLink = buildWhatsAppLink();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE4DC] shadow-[0_2px_12px_rgba(0,0,0,0.03)] py-3.5'
          : 'bg-[#FAF8F5]/70 backdrop-blur-xs border-b border-[#EAE4DC]/60 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Zone 1: Single clean text element wordmark */}
        <button
          onClick={() => {
            if (activeView !== 'home' && onBackToHome) {
              onBackToHome();
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="text-left group cursor-pointer focus-visible:outline-none"
        >
          <span className="font-editorial text-2xl sm:text-[26px] font-semibold tracking-tight text-[#24211D] group-hover:text-[#3D553C] transition-colors">
            Todo Lotes
          </span>
        </button>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[#595247]">
          <button
            onClick={() => handleLinkClick('inicio')}
            className="hover:text-[#24211D] transition-colors cursor-pointer py-1"
          >
            Inicio
          </button>
          <button
            onClick={() => handleLinkClick('loteos')}
            className="hover:text-[#24211D] transition-colors cursor-pointer py-1"
          >
            Loteos
          </button>
          <button
            onClick={() => handleLinkClick('nosotros')}
            className="hover:text-[#24211D] transition-colors cursor-pointer py-1"
          >
            Nosotros
          </button>
          <button
            onClick={() => handleLinkClick('como-comprar')}
            className="hover:text-[#24211D] transition-colors cursor-pointer py-1"
          >
            Cómo comprar
          </button>
          <button
            onClick={() => handleLinkClick('contacto')}
            className="hover:text-[#24211D] transition-colors cursor-pointer py-1"
          >
            Contacto
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#3D553C] hover:bg-[#2D412D] active:scale-[0.98] transition-all shadow-xs whitespace-nowrap"
          >
            <span>Consultar por WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="md:hidden p-2 text-[#24211D] hover:text-[#3D553C] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#EAE4DC] bg-[#FAF8F5] px-6 py-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#4A433A]">
            <button
              onClick={() => handleLinkClick('inicio')}
              className="text-left py-2 border-b border-[#EFEAE2] hover:text-[#24211D]"
            >
              Inicio
            </button>
            <button
              onClick={() => handleLinkClick('loteos')}
              className="text-left py-2 border-b border-[#EFEAE2] hover:text-[#24211D]"
            >
              Loteos
            </button>
            <button
              onClick={() => handleLinkClick('nosotros')}
              className="text-left py-2 border-b border-[#EFEAE2] hover:text-[#24211D]"
            >
              Nosotros
            </button>
            <button
              onClick={() => handleLinkClick('como-comprar')}
              className="text-left py-2 border-b border-[#EFEAE2] hover:text-[#24211D]"
            >
              Cómo comprar
            </button>
            <button
              onClick={() => handleLinkClick('contacto')}
              className="text-left py-2 border-b border-[#EFEAE2] hover:text-[#24211D]"
            >
              Contacto
            </button>
            <div className="pt-3">
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-[#3D553C] hover:bg-[#2D412D] transition-colors"
              >
                <span>Consultar por WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
