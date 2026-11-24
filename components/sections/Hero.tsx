'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface HeroCategoryControl {
  id: string;
  label: string;
  row: 1 | 2;
}

const HERO_CATEGORIES: HeroCategoryControl[] = [
  { id: 'tennis-padel', label: 'Tênis & Padel', row: 1 },
  { id: 'social', label: 'Social', row: 1 },
  { id: 'advance-1', label: 'Avançado', row: 1 },
  { id: 'court-view-grill', label: 'Court View Grill', row: 2 },
  { id: 'multi-sports', label: 'Multidesportos', row: 2 },
];

export function Hero() {
  const [selectedCategory, setSelectedCategory] = useState<string>('tennis-padel');

  const row1Categories = HERO_CATEGORIES.filter((item) => item.row === 1);
  const row2Categories = HERO_CATEGORIES.filter((item) => item.row === 2);

  return (
    <section
      data-section="Hero"
      aria-label="Seção Principal"
      className="relative z-10 mx-auto -mt-[56px] sm:-mt-[68px] lg:-mt-[76px] w-full max-w-none px-1.5 sm:px-2.5 lg:px-3.5 pb-6 sm:pb-10"
    >
      {/* Panoramic Hero Card — full width lateral fill while preserving exact height */}
      <div className="relative w-full overflow-hidden rounded-[20px] sm:rounded-[24px] bg-[#344810] min-h-[430px] sm:min-h-[540px] lg:h-[646px]">
        {/* Hero Background Photograph */}
        <Image
          src="/assets/images/live_hero_tennis_padel_1794044287787.jpg"
          alt="Jogador de tênis e padel em camisa polo esportiva e viseira branca em quadra verde de campeonato com bolas alinhadas na linha de fundo"
          fill
          priority
          sizes="100vw"
          referrerPolicy="no-referrer"
          className="object-cover object-[68%_50%] sm:object-[62%_50%] lg:object-[center_52%]"
        />

        {/* Subtle Top Sky Gradient for Header Navigation Readability */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-20 sm:h-24 bg-gradient-to-b from-white/75 via-white/30 to-transparent"
        />

        {/* Restrained Bottom-Left Gradient Scrim for White Headline Readability (Preserves Natural Green Turf) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_60%_at_18%_78%,rgba(15,24,6,0.42)_0%,rgba(15,24,6,0.14)_55%,transparent_100%)]"
        />

        {/* Hero Foreground Content Layout — horizontal padding matches Header (px-5 sm:px-8 lg:px-10) */}
        <div className="relative z-10 flex h-full min-h-[430px] sm:min-h-[540px] lg:h-[646px] flex-col justify-end px-5 sm:px-8 lg:px-10 pb-5 sm:pb-8 lg:pb-9 pt-20 sm:pt-28">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            {/* LEFT COLUMN: Pill Label, Main Heading, Supporting Copy, and Action Buttons */}
            <div className="max-w-[520px]">
              {/* Small Lime-Green Pill Label above the Headline */}
              <a
                href="#version-release"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#C7E667] px-3 py-1 text-[10px] sm:text-[11px] leading-none text-[#151B0A] shadow-2xs transition-transform duration-150 hover:scale-[1.02] whitespace-nowrap"
              >
                <span className="font-normal text-[#151B0A]/75">
                  Live Club 2.0 chegou
                </span>
                <span className="inline-flex items-center gap-0.5 font-semibold text-[#151B0A]">
                  Saiba mais
                  <ArrowRight className="h-2.5 w-2.5 stroke-[2.4]" />
                </span>
              </a>

              {/* Main Heading */}
              <h1 className="mt-3 sm:mt-3.5 text-[26px] sm:text-[38px] lg:text-[45px] font-medium leading-[1.09] tracking-[-0.025em] text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.14)]">
                Relaxe, Jogue e
                <br />
                Aperfeiçoe Seu Jogo
              </h1>

              {/* Supporting Text */}
              <p className="mt-2.5 sm:mt-3 max-w-[395px] text-[11px] sm:text-[12.5px] font-normal leading-[1.52] text-white/85">
                Uma experiência de campeonato espera por você em quadras de
                tênis, padel e multidesportos de classe mundial. Sua Próxima
                Partida Lendária Começa Aqui
              </p>

              {/* Primary & Secondary Buttons */}
              <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3">
                {/* Primary: JUNTE-SE A NÓS */}
                <a
                  href="#join"
                  className="group inline-flex items-center gap-2 sm:gap-2.5 rounded-full bg-[#151B0A] pl-3.5 sm:pl-4 pr-1 sm:pr-1.5 py-1 sm:py-1.5 text-[9.5px] sm:text-[10.5px] font-semibold uppercase tracking-[0.03em] text-white transition-transform duration-150 hover:scale-[1.02] active:scale-[0.99] whitespace-nowrap shrink-0"
                >
                  <span>JUNTE-SE A NÓS</span>
                  <span className="flex h-5.5 w-5.5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-[#B8D85A] text-[#151B0A] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 stroke-[2.3]" />
                  </span>
                </a>

                {/* Secondary: Descubra */}
                <a
                  href="#discover"
                  className="inline-flex items-center justify-center rounded-full border border-white/45 bg-white/15 px-5 sm:px-6 py-2 sm:py-2.5 text-[11px] sm:text-[12px] font-medium leading-none text-white backdrop-blur-md transition-colors duration-150 hover:bg-white/25 whitespace-nowrap shrink-0"
                >
                  Descubra
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: Compact Floating Club-Category Controls (2-row centered pyramid stack) */}
            <div
              aria-label="Categorias do Live Club"
              className="flex flex-col items-start sm:items-center gap-1.5 sm:gap-2 self-start sm:self-end lg:pb-0.5"
            >
              {/* Top Row: Tênis & Padel, Social, Avançado */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {row1Categories.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`inline-flex items-center gap-2 rounded-full px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-medium leading-none transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-white text-[#151B0A] shadow-xs'
                          : 'border border-white/65 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 rounded-full ${
                          isActive ? 'bg-[#344810]' : 'bg-white'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Bottom Row: Court View Grill, Multidesportos (centered beneath Row 1) */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                {row2Categories.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`inline-flex items-center gap-2 rounded-full px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-medium leading-none transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-white text-[#151B0A] shadow-xs'
                          : 'border border-white/65 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 rounded-full ${
                          isActive ? 'bg-[#344810]' : 'bg-white'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
