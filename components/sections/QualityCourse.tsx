import React from 'react';
import Image from 'next/image';

export function QualityCourse() {
  return (
    <section
      data-section="QualityCourse"
      aria-label="Seção Quadras de Qualidade"
      className="mx-auto w-full max-w-[1280px] px-3.5 sm:px-6 lg:px-8 pt-6 sm:pt-10 lg:pt-12 pb-10 sm:pb-14 lg:pb-16"
    >
      {/* Inner wrapper aligned with Header, Hero, About, GolfAcademy, and AmenitiesStatistics */}
      <div className="px-1.5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN: Heading, compact descriptions, and EXPLORE MAIS CTA */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-medium leading-[1.15] tracking-[-0.02em] text-[#151B0A]">
              Quadras de Qualidade,
              <br />
              Jogadas com Confiança
            </h2>

            <div className="mt-4 sm:mt-5 space-y-3.5 max-w-[435px] text-[11px] sm:text-[12px] font-normal leading-[1.6] text-[#66695E]">
              <p>
                Seja você iniciante pegando uma raquete pela primeira vez ou
                competidor em torneios, nossos instrutores certificados ATP e
                FIP dedicam-se a elevar o seu nível em clínicas de tênis, padel
                e multidesportos.
              </p>
              <p>
                Nosso Live Clubhouse é o lugar ideal para recarregar as energias
                após uma partida intensa. Saboreie uma refeição fresca em nosso
                restaurante ou relaxe com uma bebida no terraço apreciando a
                vista das quadras.
              </p>
            </div>

            <div className="mt-6 sm:mt-7">
              <a
                href="#explore-courts"
                className="inline-flex items-center justify-center rounded-full bg-[#A6CD4E] px-5 sm:px-6 py-2 sm:py-2.5 text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-[0.04em] text-white shadow-2xs transition-colors duration-150 hover:bg-[#97be40] whitespace-nowrap shrink-0"
              >
                EXPLORE MAIS
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Realistic Tennis & Padel Training Photographic Composition */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] lg:max-w-[440px] aspect-[1/1.02] overflow-hidden rounded-[18px] sm:rounded-[20px] bg-white">
              <Image
                src="/assets/images/live_quality_court_training_1794044299185.jpg"
                alt="Jogador de tênis e padel de camisa polo cinza e bermuda cáqui treinando em quadra de grama verde"
                fill
                sizes="(max-width: 1024px) 100vw, 440px"
                referrerPolicy="no-referrer"
                className="object-cover object-center"
              />

              {/* Subtle 3x3 architectural grid overlay matching the reference composition */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 grid grid-cols-3 grid-rows-3"
              >
                {/* Top-left and top-right sky corner cutouts matching the reference's stepped top silhouette */}
                <div className="bg-white rounded-br-[12px] border-r-[2px] border-b-[2px] border-white" />
                <div className="border-r-[2px] border-b-[2px] border-white/95 rounded-t-[14px]" />
                <div className="bg-white rounded-bl-[12px] border-b-[2px] border-white" />

                {/* Middle row cells */}
                <div className="border-r-[2px] border-b-[2px] border-white/95" />
                <div className="border-r-[2px] border-b-[2px] border-white/95" />
                <div className="border-b-[2px] border-white/95" />

                {/* Bottom row cells */}
                <div className="border-r-[2px] border-white/95" />
                <div className="border-r-[2px] border-white/95" />
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
