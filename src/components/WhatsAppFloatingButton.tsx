import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { buildWhatsAppLink, DISPLAY_PHONE } from '../utils/whatsapp';

interface WhatsAppFloatingButtonProps {
  currentLoteoName?: string;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({ currentLoteoName }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsAppLink = buildWhatsAppLink({
    loteoName: currentLoteoName,
    messageType: currentLoteoName ? 'loteo' : 'general'
  });

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3">
      {/* Tooltip banner on desktop hover */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white/95 text-[#24211D] px-3.5 py-2 rounded-xl shadow-lg border border-[#DDD5C9] text-xs font-medium animate-fadeIn">
          <span>¿Tenés dudas? Escribinos por WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#8C8376] hover:text-[#24211D] ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating button */}
      <a
        href={whatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        aria-label="Contactar a Todo Lotes por WhatsApp"
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20BE5B] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 group focus-visible:outline-2 focus-visible:outline-[#25D366]"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="sr-only">Consultar por WhatsApp</span>
      </a>
    </div>
  );
};
