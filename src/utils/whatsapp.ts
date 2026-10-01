export const TODO_LOTES_WHATSAPP = '5492664589012'; // San Luis, Argentina area code 266
export const DISPLAY_PHONE = '+54 9 266 458-9012';
export const DISPLAY_EMAIL = 'contacto@todolotes.com.ar';
export const DISPLAY_LOCATION = 'San Luis Capital & Interior, Argentina';

interface WhatsAppOptions {
  loteoName?: string;
  parcelCode?: string;
  surfaceM2?: number;
  messageType?: 'general' | 'loteo' | 'parcel' | 'visita';
}

export function buildWhatsAppLink(options: WhatsAppOptions = {}): string {
  const { loteoName, parcelCode, surfaceM2, messageType = 'general' } = options;

  let text = 'Hola Todo Lotes, me gustaría recibir asesoramiento.';

  if (messageType === 'parcel' && loteoName && parcelCode) {
    text = `Hola Todo Lotes! Me interesa consultar por el lote ${parcelCode} (${surfaceM2 ? surfaceM2 + ' m²' : ''}) en el desarrollo "${loteoName}". ¿Podrían brindarme información de disponibilidad y opciones de financiación? Muchas gracias.`;
  } else if (loteoName) {
    text = `Hola Todo Lotes! Vi el desarrollo "${loteoName}" en la web y me gustaría recibir más información sobre disponibilidad, valores y financiación. Muchas gracias.`;
  } else if (messageType === 'visita') {
    text = 'Hola Todo Lotes! Quisiera coordinar una visita personalizada a los loteos disponibles en San Luis. ¿Qué días tienen agendadas recorridas?';
  } else {
    text = 'Hola Todo Lotes! Estuve recorriendo su sitio web y me gustaría que me asesoren sobre los loteos y terrenos disponibles en San Luis.';
  }

  return `https://wa.me/${TODO_LOTES_WHATSAPP}?text=${encodeURIComponent(text)}`;
}
