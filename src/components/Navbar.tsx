import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { buildWhatsAppLink } from '../utils/whatsapp';
import { Logo } from './Logo';

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
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE4DC] shadow-[0_2px_14px_rgba(0,0,0,0.03)] py-3'
          : 'bg-[#FAF8F5]/80 backdrop-blur-xs border-b border-[#EAE4DC]/60 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Zone 1: Distinctive SVG Logo System */}
        <button
          onClick={() => {
            if (activeView !== 'home' && onBackToHome) {
              onBackToHome();
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="text-left cursor-pointer focus-visible:outline-none"
          aria-label="Todo Lotes - Inicio"
        >
          <Logo variant="header" />
        </button>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-[14px] font-medium text-[#595247]">
          <button
            onClick={() => handleLinkClick('inicio')}
            className="hover:text-[#C85A32] transition-colors cursor-pointer py-1"
          >
            Inicio
          </button>
          <button
            onClick={() => handleLinkClick('loteos')}
            className="hover:text-[#C85A32] transition-colors cursor-pointer py-1"
          >
            Loteos
          </button>
          <button
            onClick={() => handleLinkClick('nosotros')}
            className="hover:text-[#C85A32] transition-colors cursor-pointer py-1"
          >
            Nosotros
          </button>
          <button
            onClick={() => handleLinkClick('como-comprar')}
            className="hover:text-[#C85A32] transition-colors cursor-pointer py-1"
          >
            Cómo comprar
          </button>
          <button
            onClick={() => handleLinkClick('contacto')}
            className="hover:text-[#C85A32] transition-colors cursor-pointer py-1"
          >
            Contacto
          </button>
        </nav>

        {/* Zone 3: Primary action button with warm terracotta subtle touch */}
        <div className="flex items-center gap-3">
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#3D583F] hover:bg-[#2F4932] active:scale-[0.98] transition-all shadow-xs whitespace-nowrap hover:shadow-sm"
          >
            <span>Consultar por WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#E5A238]" />
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="md:hidden p-2 text-[#24211D] hover:text-[#C85A32] focus:outline-none"
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
              className="text-left py-2 border-b border-[#EFEAE2] hover:text-[#C85A32]"
            >
              Inicio
            </button>
            <button
              onClick={() => handleLinkClick('loteos')}
              className="text-left py-2 border-b border-[#EFEAE2] hover:text-[#C85A32]"
            >
              Loteos
            </button>
            <button
              onClick={() => handleLinkClick('nosotros')}
              className="text-left py-2 border-b border-[#EFEAE2] hover:text-[#C85A32]"
            >
              Nosotros
            </button>
            <button
              onClick={() => handleLinkClick('como-comprar')}
              className="text-left py-2 border-b border-[#EFEAE2] hover:text-[#C85A32]"
            >
              Cómo comprar
            </button>
            <button
              onClick={() => handleLinkClick('contacto')}
              className="text-left py-2 border-b border-[#EFEAE2] hover:text-[#C85A32]"
            >
              Contacto
            </button>
            <div className="pt-3">
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-[#3D583F] hover:bg-[#2F4932] transition-colors"
              >
                <span>Consultar por WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-[#E5A238]" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

