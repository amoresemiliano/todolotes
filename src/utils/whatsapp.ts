export const TODO_LOTES_WHATSAPP = '5492664586836';
export const DISPLAY_PHONE = '+54 9 2664 586 836';
export const DISPLAY_EMAIL = 'info@todolotes.ar';
export const DISPLAY_LOCATION = 'San Luis Capital & Sierras, Argentina';

interface WhatsAppOptions {
  loteoName?: string;
  parcelCode?: string;
  surfaceM2?: number;
  messageType?: 'general' | 'loteo' | 'parcel' | 'visita';
}

export function buildWhatsAppLink(options: WhatsAppOptions = {}): string {
  const { loteoName, parcelCode, messageType = 'general' } = options;

  let text = 'Hola, estuve viendo la web de Todo Lotes y quisiera recibir más información sobre los desarrollos disponibles.';

  if (messageType === 'parcel' && loteoName && parcelCode) {
    text = `Hola, estoy interesado/a en el lote ${parcelCode} del desarrollo ${loteoName}. Quisiera recibir más información.`;
  } else if (messageType === 'loteo' && loteoName) {
    text = `Hola, estoy interesado/a en ${loteoName} y quisiera consultar disponibilidad, precios y financiación.`;
  } else if (messageType === 'visita') {
    text = 'Hola, quisiera coordinar una visita personalizada a los loteos en San Luis.';
  } else if (loteoName) {
    text = `Hola, estoy interesado/a en ${loteoName} y quisiera consultar disponibilidad, precios y financiación.`;
  }

  return `https://wa.me/${TODO_LOTES_WHATSAPP}?text=${encodeURIComponent(text)}`;
}
