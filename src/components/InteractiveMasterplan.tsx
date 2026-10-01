import React, { useState } from 'react';
import { Parcel, Loteo } from '../types';
import { buildWhatsAppLink } from '../utils/whatsapp';
import { CheckCircle2, Clock, Ban, ArrowRight, MessageCircle } from 'lucide-react';

interface InteractiveMasterplanProps {
  loteo: Loteo;
}

export const InteractiveMasterplan: React.FC<InteractiveMasterplanProps> = ({ loteo }) => {
  const [selectedParcel, setSelectedParcel] = useState<Parcel | null>(
    loteo.parcels.find((p) => p.status === 'Disponible') || loteo.parcels[0] || null
  );

  const getStatusColor = (status: Parcel['status']) => {
    switch (status) {
      case 'Disponible':
        return 'bg-[#3D553C] text-white hover:bg-[#2D412D] border-[#3D553C]';
      case 'Reservado':
        return 'bg-[#C28E46] text-white hover:bg-[#A87936] border-[#C28E46]';
      case 'Vendido':
        return 'bg-[#DDD5C9] text-[#787063] cursor-not-allowed border-[#DDD5C9] opacity-75';
    }
  };

  const getStatusBadge = (status: Parcel['status']) => {
    switch (status) {
      case 'Disponible':
        return <span className="text-[#3D553C] font-semibold">Disponible para compra</span>;
      case 'Reservado':
        return <span className="text-[#A87936] font-semibold">En proceso de reserva</span>;
      case 'Vendido':
        return <span className="text-[#8A8174] font-medium">Vendido</span>;
    }
  };

  return (
    <div className="bg-[#F5F1EB] rounded-2xl p-6 sm:p-10 border border-[#E5DFD4]">
      {/* Header and Legend */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#E2DBD0] mb-8">
        <div>
          <span className="text-xs uppercase tracking-wider text-[#6D6558] font-medium block mb-1">
            Plano y parcelamiento
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl text-[#1E1B17]">
            Masterplan & Disponibilidad
          </h3>
          <p className="text-xs sm:text-sm text-[#5C5449] font-light mt-1 max-w-xl">
            {loteo.masterplanNote}
          </p>
        </div>

        {/* Legend - unboxed status indicators */}
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-xs bg-[#3D553C]" />
            <span className="text-[#332D26]">Disponible</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-xs bg-[#C28E46]" />
            <span className="text-[#332D26]">Reservado</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-xs bg-[#DDD5C9]" />
            <span className="text-[#7A7165]">Vendido</span>
          </div>
        </div>
      </div>

      {/* Interactive Parcel Grid Scheme */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Parcel Cadastral Map Representation */}
        <div className="lg:col-span-8 bg-[#FAF8F5] p-6 rounded-xl border border-[#E5DFD4]">
          <div className="flex items-center justify-between text-xs text-[#70675B] mb-4 pb-2 border-b border-[#EFEAE2]">
            <span>Esquema preliminar de manzanas y lotes</span>
            <span>Hacé clic en una parcela para consultar</span>
          </div>

          {/* Grid of parcels */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {loteo.parcels.map((parcel) => {
              const isSelected = selectedParcel?.id === parcel.id;
              return (
                <button
                  key={parcel.id}
                  onClick={() => setSelectedParcel(parcel)}
                  className={`p-3.5 rounded-lg border text-left transition-all relative flex flex-col justify-between min-h-[92px] ${
                    isSelected
                      ? 'ring-2 ring-[#3D553C] ring-offset-2 ring-offset-[#FAF8F5] shadow-sm'
                      : ''
                  } ${
                    parcel.status === 'Disponible'
                      ? 'bg-white hover:border-[#3D553C] border-[#DDD5C9]'
                      : parcel.status === 'Reservado'
                      ? 'bg-[#FBF6EE] border-[#ECD8BE]'
                      : 'bg-[#EAE4DC]/60 border-[#DDD5C9] opacity-75'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs text-[#1E1B17]">
                      {parcel.code}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        parcel.status === 'Disponible'
                          ? 'bg-[#3D553C]'
                          : parcel.status === 'Reservado'
                          ? 'bg-[#C28E46]'
                          : 'bg-[#9C9387]'
                      }`}
                    />
                  </div>
                  <div>
                    <span className="font-editorial text-sm sm:text-base text-[#2E2821] block tabular-nums">
                      {parcel.surfaceM2} m²
                    </span>
                    <span className="text-[11px] text-[#7A7165]">
                      {parcel.orientation ? `Frente ${parcel.orientation}` : parcel.dimensions || ''}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-[#EFEAE2] flex items-center justify-between text-[11px] text-[#857C70]">
            <span>* Las dimensiones definitivas surgen del plano de mensura aprobado.</span>
            <span>Todo Lotes San Luis</span>
          </div>
        </div>

        {/* Right: Selected Parcel Details & Direct WhatsApp Consultation */}
        <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-[#DDD5C9] shadow-xs">
          {selectedParcel ? (
            <div>
              <div className="text-xs uppercase tracking-wider text-[#70675B] font-medium mb-1">
                Detalle de Parcela
              </div>
              <h4 className="font-editorial text-2xl text-[#1E1B17] mb-1">
                {selectedParcel.code}
              </h4>
              <div className="text-xs mb-4">
                {getStatusBadge(selectedParcel.status)}
              </div>

              <div className="space-y-3 py-3 border-y border-[#EFEAE2] text-xs mb-6">
                <div className="flex justify-between">
                  <span className="text-[#787063]">Superficie total:</span>
                  <strong className="text-[#1E1B17] tabular-nums font-semibold">
                    {selectedParcel.surfaceM2} m²
                  </strong>
                </div>
                {selectedParcel.dimensions && (
                  <div className="flex justify-between">
                    <span className="text-[#787063]">Medidas aprox:</span>
                    <span className="text-[#1E1B17] tabular-nums font-medium">
                      {selectedParcel.dimensions}
                    </span>
                  </div>
                )}
                {selectedParcel.orientation && (
                  <div className="flex justify-between">
                    <span className="text-[#787063]">Orientación:</span>
                    <span className="text-[#1E1B17]">{selectedParcel.orientation}</span>
                  </div>
                )}
                {selectedParcel.featureNote && (
                  <div className="pt-2 text-[11px] text-[#554D43] italic border-t border-dashed border-[#EAE4DC]">
                    Nota: {selectedParcel.featureNote}
                  </div>
                )}
              </div>

              {selectedParcel.status === 'Disponible' ? (
                <a
                  href={buildWhatsAppLink({
                    loteoName: loteo.name,
                    parcelCode: selectedParcel.code,
                    surfaceM2: selectedParcel.surfaceM2,
                    messageType: 'parcel'
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#3D553C] hover:bg-[#2D412D] text-white text-xs font-semibold transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Consultar por {selectedParcel.code}</span>
                </a>
              ) : selectedParcel.status === 'Reservado' ? (
                <div className="space-y-3">
                  <p className="text-xs text-[#70675B] leading-relaxed">
                    Este lote se encuentra reservado. Podés anotarte en lista de espera o consultar por parcelas contiguas similares.
                  </p>
                  <a
                    href={buildWhatsAppLink({
                      loteoName: loteo.name,
                      parcelCode: selectedParcel.code,
                      messageType: 'general'
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#EFEAE2] hover:bg-[#E5DFD4] text-[#24211D] text-xs font-medium transition-colors"
                  >
                    <span>Consultar alternativas en este desarrollo</span>
                  </a>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-xs text-[#7A7165]">
                    Lote vendido. Elegí una parcela con indicador verde para consultar su disponibilidad.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-8 text-xs text-[#7A7165]">
              Seleccioná un lote en el plano para ver sus características y consultar.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
