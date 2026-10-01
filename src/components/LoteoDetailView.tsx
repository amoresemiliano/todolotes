import React, { useState } from 'react';
import {
  ArrowLeft,
  MapPin,
  CheckCircle2,
  Clock,
  Car,
  MessageCircle,
  Share2,
  ChevronRight,
  Shield,
  Layers,
  Sparkles
} from 'lucide-react';
import { Loteo } from '../types';
import { SafeImage } from './SafeImage';
import { buildWhatsAppLink, DISPLAY_PHONE } from '../utils/whatsapp';
import { InteractiveMasterplan } from './InteractiveMasterplan';

interface LoteoDetailViewProps {
  loteo: Loteo;
  onBack: () => void;
  onSelectOtherLoteo: (slug: string) => void;
  allLoteos: Loteo[];
}

export const LoteoDetailView: React.FC<LoteoDetailViewProps> = ({
  loteo,
  onBack,
  onSelectOtherLoteo,
  allLoteos
}) => {
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string>(loteo.gallery[0] || loteo.coverImage);
  const [isCopied, setIsCopied] = useState(false);

  const whatsAppLink = buildWhatsAppLink({
    loteoName: loteo.name,
    messageType: 'loteo'
  });

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${loteo.name} | Todo Lotes San Luis`,
          text: `Conocé el desarrollo ${loteo.name} en ${loteo.location}`,
          url: window.location.href
        });
      } catch (err) {
        // user cancelled or share failed
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  const otherLoteos = allLoteos.filter((l) => l.id !== loteo.id).slice(0, 2);

  return (
    <article className="pt-24 sm:pt-28 pb-20 bg-[#FAF8F5]">
      {/* Top Breadcrumb & Action bar */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-6">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#595247] hover:text-[#1E1B17] transition-colors py-1 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a todos los desarrollos</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-xs text-[#6A6256] hover:text-[#1E1B17] bg-[#EFEAE2] hover:bg-[#E5DFD4] px-3 py-1.5 rounded-md transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{isCopied ? '¡Enlace copiado!' : 'Compartir loteo'}</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-12 sm:mb-16">
        <div className="max-w-4xl mb-8">
          <div className="flex items-center gap-2 text-xs text-[#70675B] mb-3">
            <span className="font-semibold text-[#3D553C] flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {loteo.location}
            </span>
            <span aria-hidden="true">·</span>
            <span>{loteo.status}</span>
            <span aria-hidden="true">·</span>
            <span>Lanzamiento {loteo.launchYear}</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#1E1B17] font-normal tracking-tight mb-4">
            {loteo.name}
          </h1>

          <p className="text-lg sm:text-xl text-[#524B40] font-light leading-relaxed mb-6">
            {loteo.concept}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#3D553C] hover:bg-[#2D412D] transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Consultar disponibilidad y precios</span>
            </a>
          </div>
        </div>

        {/* Panoramic Large Hero Photo */}
        <div className="rounded-2xl overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.06)] aspect-[16/9] md:aspect-[21/9] max-h-[580px] border border-[#E8E2D8]">
          <SafeImage
            src={loteo.coverImage}
            alt={loteo.name}
            fallbackTitle={loteo.name}
            fallbackSubtitle={loteo.location}
            className="w-full h-full object-cover"
            containerClassName="w-full h-full"
          />
        </div>
      </div>

      {/* Quick Specs Strip */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-16">
        <div className="bg-[#F5F1EB] rounded-2xl p-6 sm:p-8 border border-[#E5DFD4]">
          <span className="text-xs uppercase tracking-wider text-[#70675B] font-medium block mb-4">
            Ficha técnica del desarrollo
          </span>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-xs divide-y sm:divide-y-0 sm:divide-x divide-[#DDD5C9]">
            <div className="pt-2 sm:pt-0 sm:px-3 first:pl-0">
              <span className="text-[#787063] block mb-1">Superficie lotes</span>
              <strong className="text-sm font-semibold text-[#1E1B17] tabular-nums block">
                {loteo.minSurfaceM2} a {loteo.maxSurfaceM2} m²
              </strong>
            </div>
            <div className="pt-2 sm:pt-0 sm:px-3">
              <span className="text-[#787063] block mb-1">Total de parcelas</span>
              <strong className="text-sm font-semibold text-[#1E1B17] tabular-nums block">
                {loteo.lotCount} unidades
              </strong>
            </div>
            <div className="pt-2 sm:pt-0 sm:px-3">
              <span className="text-[#787063] block mb-1">Servicios previstos</span>
              <strong className="text-sm font-semibold text-[#1E1B17] block">
                Agua + Luz + Calles
              </strong>
            </div>
            <div className="pt-2 sm:pt-0 sm:px-3">
              <span className="text-[#787063] block mb-1">Financiación</span>
              <strong className="text-sm font-semibold text-[#3D553C] block">
                Accesible en cuotas
              </strong>
            </div>
            <div className="pt-2 sm:pt-0 sm:px-3">
              <span className="text-[#787063] block mb-1">Estado de obra</span>
              <strong className="text-sm font-semibold text-[#1E1B17] block">
                {loteo.stage}
              </strong>
            </div>
            <div className="pt-2 sm:pt-0 sm:px-3">
              <span className="text-[#787063] block mb-1">Plazo de posesión</span>
              <strong className="text-sm font-semibold text-[#1E1B17] block">
                {loteo.deliveryTime}
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid: Description & Infrastructure */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-16 sm:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Description & Highlights */}
          <div className="lg:col-span-7">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#1E1B17] mb-6">
              Sobre el desarrollo
            </h2>
            <div className="space-y-4 text-base text-[#474035] leading-relaxed font-light mb-8">
              <p>{loteo.fullDescription}</p>
              <p>
                Cada parcela fue delineada respetando la topografía original del lugar, permitiendo aprovechar las pendientes naturales para desagües pluviales y captación de visuales abiertas hacia los cerros y atardeceres de San Luis.
              </p>
            </div>

            {/* Highlights */}
            <div className="p-6 rounded-xl bg-[#F5EFE6] border border-[#E5DFD4] mb-8">
              <h3 className="font-editorial text-lg text-[#1E1B17] mb-4">
                Puntos destacados del proyecto
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#4A433A]">
                {loteo.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3D553C] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Infrastructure Details */}
          <div className="lg:col-span-5">
            <div className="bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#E5DFD4]">
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-5 h-5 text-[#3D553C]" />
                <h3 className="font-editorial text-2xl text-[#1E1B17]">
                  Infraestructura planificada
                </h3>
              </div>
              <p className="text-xs text-[#6E6659] mb-6">
                Obras y servicios certificados para este fraccionamiento. Solo informamos los servicios efectivamente proyectados y en curso:
              </p>

              <div className="space-y-3.5 text-xs sm:text-sm text-[#38322A]">
                {loteo.infrastructure.map((infra, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg bg-[#F5F1EB] border border-[#EAE3D8]"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#E8E1D5] text-[#3D553C] flex items-center justify-center shrink-0 text-xs font-semibold">
                      ✓
                    </span>
                    <span className="leading-snug">{infra}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-[#EAE4DC] text-xs text-[#70675B]">
                <p>
                  <strong>Financiación Todo Lotes:</strong> {loteo.financing}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* High-Impact Photo Gallery */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-16 sm:mb-20">
        <div className="mb-6">
          <span className="text-xs uppercase tracking-wider text-[#70675B] font-medium block mb-1">
            Registro visual
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl text-[#1E1B17]">
            Galería del lugar y su entorno
          </h2>
        </div>

        {/* Big Preview Image */}
        <div className="rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[21/9] max-h-[500px] mb-4 border border-[#E5DFD4]">
          <SafeImage
            src={selectedGalleryImg}
            alt={`${loteo.name} fotografía`}
            fallbackTitle={loteo.name}
            className="w-full h-full object-cover"
            containerClassName="w-full h-full"
          />
        </div>

        {/* Thumbnail Selector (clean, unboxed cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {loteo.gallery.map((imgUrl, i) => (
            <button
              key={i}
              onClick={() => setSelectedGalleryImg(imgUrl)}
              className={`rounded-xl overflow-hidden aspect-[4/3] border-2 transition-all cursor-pointer ${
                selectedGalleryImg === imgUrl
                  ? 'border-[#3D553C] ring-2 ring-[#3D553C]/20 shadow-sm'
                  : 'border-transparent hover:border-[#DDD5C9] opacity-80 hover:opacity-100'
              }`}
            >
              <SafeImage
                src={imgUrl}
                alt={`${loteo.name} foto ${i + 1}`}
                fallbackTitle={`Foto ${i + 1}`}
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Masterplan & Parcel Availability */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-16 sm:mb-20">
        <InteractiveMasterplan loteo={loteo} />
      </div>

      {/* Location and Distances */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-16 sm:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-wider text-[#70675B] font-medium block mb-2">
              Ubicación & Conectividad
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#1E1B17] mb-4">
              {loteo.locationDetails.address}
            </h2>
            <p className="text-xs text-[#70675B] mb-4">
              {loteo.locationDetails.department}
            </p>
            <p className="text-sm text-[#524B40] leading-relaxed font-light mb-8">
              {loteo.locationDetails.accessNotes}
            </p>

            {/* Distances Table */}
            <div className="bg-[#F5F1EB] rounded-xl p-5 border border-[#E5DFD4]">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#50493F] mb-3">
                Distancias y tiempos de viaje estimados
              </h4>
              <div className="divide-y divide-[#E2DBD0] text-xs">
                {loteo.locationDetails.distances.map((dist, i) => (
                  <div key={i} className="py-2.5 flex items-center justify-between">
                    <span className="text-[#3A342C] font-medium">{dist.place}</span>
                    <div className="flex items-center gap-3 text-[#6E6659]">
                      <span className="tabular-nums font-semibold text-[#1E1B17]">{dist.time}</span>
                      <span aria-hidden="true" className="text-[#BDB4A8]">·</span>
                      <span className="tabular-nums text-[#7A7165]">{dist.distance}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map Representation Container */}
          <div className="lg:col-span-6 bg-[#EFEAE2] rounded-2xl p-6 sm:p-8 border border-[#DDD6C8] flex flex-col justify-between min-h-[320px]">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#70675B] mb-2">
                <MapPin className="w-4 h-4 text-[#3D553C]" />
                <span className="font-medium text-[#24211D]">Coordenadas & Accesibilidad</span>
              </div>
              <h4 className="font-editorial text-xl text-[#1E1B17] mb-3">
                Cómo llegar a {loteo.name}
              </h4>
              <p className="text-xs text-[#5C5449] leading-relaxed mb-6 font-light">
                Coordinamos visitas presenciales de lunes a sábados. Nuestro equipo te espera en el acceso o en nuestras oficinas para acompañarte a recorrer el loteo.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/80 border border-[#DDD5C9] space-y-3">
              <div className="text-xs text-[#332D25]">
                <strong className="block mb-0.5">Visita guiada en vehículo 4x4 o particular:</strong>
                <span>Te facilitamos la ubicación GPS en tiempo real al coordinar por WhatsApp.</span>
              </div>
              <a
                href={buildWhatsAppLink({
                  loteoName: loteo.name,
                  messageType: 'visita'
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#3D553C] hover:text-[#2D412D]"
              >
                <span>Agendar visita presencial este fin de semana</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Final Inquiry CTA Block */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center pt-8 border-t border-[#EAE4DC]">
        <h3 className="font-editorial text-3xl sm:text-4xl text-[#1E1B17] mb-3">
          Consultá disponibilidad y financiación en {loteo.name}
        </h3>
        <p className="text-sm sm:text-base text-[#524B40] max-w-xl mx-auto mb-8 font-light">
          Hablemos por WhatsApp. Te enviamos la lista de precios actualizada, el plano de mensura y las opciones de cuotas a medida.
        </p>
        <a
          href={whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-[#3D553C] hover:bg-[#2D412D] active:scale-[0.99] transition-all shadow-md"
        >
          <MessageCircle className="w-5 h-5 fill-white/20" />
          <span>Consultar por WhatsApp ahora</span>
        </a>
      </div>

      {/* Other Developments Suggestion */}
      {otherLoteos.length > 0 && (
        <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-20 pt-12 border-t border-[#EAE4DC]">
          <span className="text-xs uppercase tracking-wider text-[#70675B] font-medium block mb-4">
            Otros desarrollos en San Luis
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherLoteos.map((other) => (
              <div
                key={other.id}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  onSelectOtherLoteo(other.slug);
                }}
                className="group cursor-pointer p-4 rounded-xl bg-[#F5F1EB] border border-[#E5DFD4] hover:border-[#3D553C]/40 flex items-center gap-4 transition-all"
              >
                <div className="w-24 h-20 rounded-lg overflow-hidden shrink-0">
                  <SafeImage
                    src={other.coverImage}
                    alt={other.name}
                    fallbackTitle={other.name}
                    className="w-full h-full object-cover img-hover-zoom"
                    containerClassName="w-full h-full"
                  />
                </div>
                <div className="grow">
                  <span className="text-[11px] text-[#3D553C] font-semibold block">
                    {other.location}
                  </span>
                  <h4 className="font-editorial text-lg text-[#1E1B17] group-hover:text-[#3D553C] transition-colors">
                    {other.name}
                  </h4>
                  <span className="text-xs text-[#70675B]">
                    Desde {other.minSurfaceM2} m² · {other.lotCount} lotes
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-[#8A8174] group-hover:translate-x-1 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};
