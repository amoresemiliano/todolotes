import React, { useState } from 'react';
import { Parcel, Loteo } from '../types';
import { buildWhatsAppLink } from '../utils/whatsapp';
import { MessageCircle, Sun } from 'lucide-react';

interface InteractiveMasterplanProps {
  loteo: Loteo;
}

export const InteractiveMasterplan: React.FC<InteractiveMasterplanProps> = ({ loteo }) => {
  const [selectedParcel, setSelectedParcel] = useState<Parcel | null>(
    loteo.parcels.find((p) => p.status === 'Disponible') || loteo.parcels[0] || null
  );

  const getStatusBadge = (status: Parcel['status']) => {
    switch (status) {
      case 'Disponible':
        return <span className="text-[#3D583F] font-semibold">Disponible para compra inmediata</span>;
      case 'Reservado':
        return <span className="text-[#C28522] font-semibold">En proceso de reserva</span>;
      case 'Vendido':
        return <span className="text-[#8A8174] font-medium">Vendido</span>;
    }
  };

  return (
    <div className="bg-[#F6F2EC] rounded-2xl p-6 sm:p-10 border border-[#E5DFD4]">
      {/* Header and Legend */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#E2DBD0] mb-8">
        <div>
          <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#C85A32] font-semibold mb-1">
            <Sun className="w-3.5 h-3.5 text-[#E5A238]" />
            <span>Plano y parcelamiento</span>
          </div>
          <h3 className="font-editorial text-2xl sm:text-3xl text-[#1E1B17]">
            Masterplan & Disponibilidad
          </h3>
          <p className="text-xs sm:text-sm text-[#5C5449] font-light mt-1 max-w-xl">
            {loteo.masterplanNote}
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-xs bg-[#3D583F]" />
            <span className="text-[#332D26] font-medium">Disponible</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-xs bg-[#E5A238]" />
            <span className="text-[#332D26] font-medium">Reservado</span>
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
            <span className="text-[#C85A32] font-medium">Hacé clic en una parcela para consultar</span>
          </div>

          {/* Grid of parcels */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {loteo.parcels.map((parcel) => {
              const isSelected = selectedParcel?.id === parcel.id;
              return (
                <button
                  key={parcel.id}
                  onClick={() => setSelectedParcel(parcel)}
                  className={`p-3.5 rounded-lg border text-left transition-all relative flex flex-col justify-between min-h-[92px] cursor-pointer ${
                    isSelected
                      ? 'ring-2 ring-[#C85A32] ring-offset-2 ring-offset-[#FAF8F5] shadow-xs'
                      : ''
                  } ${
                    parcel.status === 'Disponible'
                      ? 'bg-white hover:border-[#3D583F] border-[#DDD5C9]'
                      : parcel.status === 'Reservado'
                      ? 'bg-[#FDF7EE] border-[#F0DCBE]'
                      : 'bg-[#EAE4DC]/60 border-[#DDD5C9] opacity-75'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs text-[#1E1B17]">
                      {parcel.code}
                    </span>
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        parcel.status === 'Disponible'
                          ? 'bg-[#3D583F]'
                          : parcel.status === 'Reservado'
                          ? 'bg-[#E5A238]'
                          : 'bg-[#9C9387]'
                      }`}
                    />
                  </div>
                  <div>
                    <span className="font-editorial text-sm sm:text-base text-[#2E2821] block tabular-nums font-semibold">
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
            <span>* Las medidas definitivas surgen del plano de mensura aprobado.</span>
            <span className="text-[#3D583F] font-medium">Todo Lotes San Luis</span>
          </div>
        </div>

        {/* Right: Selected Parcel Details & Direct WhatsApp Consultation */}
        <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-[#DDD5C9] shadow-xs">
          {selectedParcel ? (
            <div>
              <div className="text-xs uppercase tracking-wider text-[#C85A32] font-semibold mb-1">
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
                  <div className="pt-2 text-[11px] text-[#635748] italic border-t border-dashed border-[#EAE4DC]">
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
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg bg-[#3D583F] hover:bg-[#2F4932] text-white text-xs font-semibold transition-colors shadow-xs hover:shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#E5A238]" />
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
                      messageType: 'loteo'
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#EFEAE2] hover:bg-[#E7DFC5] text-[#24211D] text-xs font-medium transition-colors"
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

