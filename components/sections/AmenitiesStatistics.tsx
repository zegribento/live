import React from 'react';
import { ArrowRight } from 'lucide-react';

export function AmenitiesStatistics() {
  return (
    <section
      data-section="AmenitiesStatistics"
      aria-label="Seção de Comodidades e Estatísticas"
      className="mx-auto w-full max-w-[1280px] px-3.5 sm:px-6 lg:px-8 pt-4 sm:pt-8 lg:pt-10 pb-10 sm:pb-14 lg:pb-16"
    >
      {/* Inner wrapper aligned with Header, Hero, About, and GolfAcademy */}
      <div className="px-1.5 sm:px-8 lg:px-10">
        {/* TOP ROW: Left compact lime-bordered pill label + Right descriptive statement */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3.5 sm:gap-8 lg:gap-12">
          {/* Small pill label */}
          <div className="shrink-0 pt-0.5">
            <span className="inline-flex items-center justify-center rounded-full border border-[#B8D85A] bg-[#F5F9E4] px-3.5 py-1 text-[10.5px] sm:text-[11px] font-medium leading-none text-[#344810] whitespace-nowrap">
              Comodidades
            </span>
          </div>

          {/* Supporting text */}
          <p className="max-w-[740px] lg:ml-auto text-[16px] sm:text-[19px] lg:text-[22px] font-medium leading-[1.36] tracking-[-0.015em] text-[#151B0A]">
            Equipamentos de tênis e padel de última geração, vestuário exclusivo
            e serviços especializados de ajuste de raquetes. Jogue sempre que
            quiser — dias úteis, fins de semana, a qualquer hora.
          </p>
        </div>

        {/* BOTTOM ROW: Three adjacent unified information blocks */}
        <div className="mt-6 sm:mt-8 lg:mt-9 grid grid-cols-2 lg:grid-cols-[1.45fr_0.52fr_0.52fr] gap-3 sm:gap-3.5 lg:gap-4 items-stretch">
          {/* INFORMATION CARD 1: Wide light-neutral descriptive card */}
          <article className="col-span-2 lg:col-span-1 flex flex-col justify-between rounded-[16px] sm:rounded-[18px] bg-[#F6F6F7] p-5 sm:p-6 lg:p-7 min-h-[164px] sm:min-h-[180px] lg:h-[192px]">
            <p className="max-w-[470px] text-[11px] sm:text-[11.5px] lg:text-[12px] font-normal leading-[1.58] text-[#66695E]">
              Nossa missão no Live é tornar o tênis, o padel e a prática
              multidesportiva mais acessíveis e prazerosos para todos.
              Oferecemos quadras de classe mundial e orientação técnica para
              ajudar você a evoluir e alcançar seu potencial máximo.
            </p>

            <div className="mt-4 pt-2 border-t border-[#EAECE7]/80">
              <a
                href="#learn-more-amenities"
                className="inline-flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-medium text-[#66695E] transition-colors duration-150 hover:text-[#151B0A]"
              >
                <span>Saiba Mais</span>
                <ArrowRight className="h-3 w-3 stroke-[2]" />
              </a>
            </div>
          </article>

          {/* INFORMATION CARD 2: Minimal statistics card ("50+") */}
          <article className="col-span-1 flex flex-col justify-between rounded-[16px] sm:rounded-[18px] bg-[#F6F6F7] p-5 sm:p-6 min-h-[144px] sm:min-h-[168px] lg:h-[192px]">
            <div className="text-[34px] sm:text-[40px] lg:text-[44px] font-medium leading-none tracking-[-0.03em] text-[#344810] tabular-nums">
              50+
            </div>

            <div className="mt-4 pt-2 border-t border-[#EAECE7]/80">
              <span className="block text-[10.5px] sm:text-[11px] font-normal leading-none text-[#66695E]">
                Quadras
              </span>
            </div>
          </article>

          {/* INFORMATION CARD 3: Lime-green statistics card ("2M") */}
          <article className="col-span-1 flex flex-col justify-between rounded-[16px] sm:rounded-[18px] bg-[#B8D85A] p-5 sm:p-6 min-h-[144px] sm:min-h-[168px] lg:h-[192px]">
            <div className="text-[34px] sm:text-[40px] lg:text-[44px] font-medium leading-none tracking-[-0.03em] text-[#151B0A] tabular-nums">
              2M
            </div>

            <div className="mt-4 pt-2 border-t border-[#151B0A]/12">
              <span className="block text-[10.5px] sm:text-[11px] font-medium leading-none text-[#151B0A]/80">
                Jogadores
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
