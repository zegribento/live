'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const ABOUT_TABS = [
  { id: 'our-story', label: 'Nossa História' },
  { id: 'about-us', label: 'Sobre nós' },
  { id: 'game', label: 'O Jogo' },
] as const;

export function About() {
  const [activeTab, setActiveTab] = useState<string>('our-story');

  return (
    <section
      data-section="About"
      aria-label="Seção Nossa História"
      className="mx-auto w-full max-w-[1280px] px-3.5 sm:px-6 lg:px-8 pt-6 sm:pt-10 lg:pt-12 pb-10 sm:pb-14 lg:pb-16"
    >
      {/* Inner wrapper aligns horizontally with sections below */}
      <div className="px-1.5 sm:px-8 lg:px-10">
        {/* 1. SECTION NAVIGATION: Three compact pill-shaped labels */}
        <div
          role="tablist"
          aria-label="Abas da seção sobre"
          className="flex flex-wrap items-center gap-2"
        >
          {ABOUT_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center justify-center rounded-full px-3.5 py-1.5 text-[11px] sm:text-[11.5px] font-medium leading-none transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#E5F2B8] text-[#151B0A]'
                    : 'bg-[#F3F4F2] text-[#66695E] hover:bg-[#EAECE7] hover:text-[#151B0A]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 2. HEADING COMPOSITION: Editorial two-column introduction */}
        <div className="mt-4 sm:mt-5 grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-3 sm:gap-6 lg:gap-7 items-end">
          {/* LEFT: Main Heading */}
          <div>
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-medium leading-[1.15] tracking-[-0.02em] text-[#151B0A]">
              Um Destino de Tênis
              <br />
              e Padel de Elite
            </h2>
          </div>

          {/* RIGHT: Introductory paragraph aligned vertically with the heading region */}
          <div className="lg:pb-1">
            <p className="max-w-[390px] text-[11.5px] sm:text-[12.5px] font-normal leading-[1.55] text-[#66695E]">
              Projetado segundo os mais altos padrões ATP e FIP, o Live Club
              desafia atletas competitivos e acolhe jogadores sociais no tênis,
              padel e multidesportos.
            </p>
          </div>
        </div>

        {/* 3. & 4. ASYMMETRICAL IMAGE COMPOSITION & SUPPORTING INFORMATION */}
        <div className="mt-6 sm:mt-7 lg:mt-8 grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-6 lg:gap-7 items-stretch">
          {/* LEFT IMAGE CARD: Near-square / vertical photograph with bottom text & Discover CTA */}
          <div className="relative w-full overflow-hidden rounded-[18px] sm:rounded-[20px] bg-[#344810] min-h-[360px] sm:min-h-[420px] lg:h-[476px]">
            <Image
              src="/assets/images/live_about_tennis_swing_1794044289390.jpg"
              alt="Tenista de polo branca e bermuda creme completando a terminação do golpe em quadra de grama verde"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              referrerPolicy="no-referrer"
              className="object-cover object-[center_22%]"
            />

            {/* Subtle dark gradient near the bottom for white overlay readability */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-black/60 via-black/25 to-transparent"
            />

            {/* Bottom-Left Overlay Content */}
            <div className="relative z-10 flex h-full min-h-[360px] sm:min-h-[420px] lg:h-[476px] flex-col justify-end p-5 sm:p-6 lg:p-7">
              <div className="max-w-[320px]">
                <h3 className="text-[20px] sm:text-[23px] lg:text-[25px] font-medium leading-[1.16] tracking-[-0.015em] text-white">
                  Relaxe, Jogue e
                  <br />
                  Aperfeiçoe Seu Jogo
                </h3>
                <p className="mt-2 text-[10.5px] sm:text-[11px] font-normal leading-[1.48] text-white/80">
                  Uma experiência de campeonato espera por você em quadras de
                  tênis e padel de classe mundial. Sua Próxima Partida Lendária
                  Começa Aqui
                </p>
                <div className="mt-3.5 sm:mt-4">
                  <a
                    href="#discover-destination"
                    className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/15 px-4 sm:px-5 py-1.5 sm:py-2 text-[10.5px] sm:text-[11px] font-medium leading-none text-white backdrop-blur-md transition-colors duration-150 hover:bg-white/25 whitespace-nowrap"
                  >
                    Descubra
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Wide Horizontal Photograph on Top + Supporting Information & CTA Below */}
          <div className="flex flex-col justify-between gap-6 lg:gap-0 lg:h-[476px]">
            {/* Top Wide Horizontal Photograph */}
            <div className="relative w-full overflow-hidden rounded-[18px] sm:rounded-[20px] bg-[#344810] aspect-[1.9/1] lg:aspect-auto lg:h-[248px]">
              <Image
                src="/assets/images/live_about_padel_closeup_1794044291159.jpg"
                alt="Close de jogadora de padel posicionando a bola na linha branca com raquete de fibra de carbono ao nascer do sol"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                referrerPolicy="no-referrer"
                className="object-cover object-center"
              />
            </div>

            {/* Supporting Information & CTA aligned with the bottom of the left card */}
            <div className="flex flex-col items-start justify-end lg:pt-4">
              <p className="max-w-[465px] text-[15px] sm:text-[16.5px] lg:text-[17.5px] font-normal leading-[1.48] tracking-[-0.01em] text-[#151B0A]/85">
                Fundado em{' '}
                <span className="font-semibold text-[#94BE39]">1986</span>, o
                Live Clube Desportivo e de Raquetes estende-se por mais de{' '}
                <span className="font-semibold text-[#94BE39]">150</span> acres
                de quadras de tênis de campeonato, arenas panorâmicas de padel e
                instalações multidesportivas.
              </p>

              <div className="mt-5 sm:mt-6">
                <a
                  href="#join-team"
                  className="group inline-flex items-center gap-2 sm:gap-2.5 rounded-full bg-[#151B0A] pl-3.5 sm:pl-4 pr-1 sm:pr-1.5 py-1 sm:py-1.5 text-[9.5px] sm:text-[10.5px] font-semibold uppercase tracking-[0.03em] text-white transition-transform duration-150 hover:scale-[1.02] active:scale-[0.99] whitespace-nowrap shrink-0"
                >
                  <span>JUNTE-SE A NÓS</span>
                  <span className="flex h-5.5 w-5.5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-[#B8D85A] text-[#151B0A] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 stroke-[2.3]" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
