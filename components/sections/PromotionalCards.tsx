import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Star } from 'lucide-react';

const MEMBER_AVATARS = [
  {
    src: '/assets/images/live_academy_coaching_couple_1794044296056.jpg',
    alt: 'Retrato de sócio do Live Club 1',
    position: 'object-[32%_22%] scale-150',
  },
  {
    src: '/assets/images/live_academy_coaching_couple_1794044296056.jpg',
    alt: 'Retrato de sócio do Live Club 2',
    position: 'object-[64%_18%] scale-150',
  },
  {
    src: '/assets/images/live_quality_court_training_1794044299185.jpg',
    alt: 'Retrato de sócio do Live Club 3',
    position: 'object-[50%_18%] scale-150',
  },
] as const;

export function PromotionalCards() {
  return (
    <section
      data-section="PromotionalCards"
      aria-label="Seção de Cartões Promocionais"
      className="mx-auto w-full max-w-[1280px] px-3.5 sm:px-6 lg:px-8 pt-4 sm:pt-8 lg:pt-10 pb-10 sm:pb-14 lg:pb-16"
    >
      {/* Inner wrapper aligned with all previous sections */}
      <div className="px-1.5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 items-stretch">
          {/* CARD 1 — PHOTOGRAPHIC: Tennis & padel partners celebrating on court with compact social proof */}
          <article className="relative overflow-hidden rounded-[18px] sm:rounded-[20px] bg-[#2D4219] min-h-[260px] sm:min-h-[300px] lg:h-[330px]">
            <Image
              src="/assets/images/live_promo_players_celebrating_1794044299433.jpg"
              alt="Dois jogadores de tênis e padel em quadra verde ensolarada comemorando um ponto junto à rede"
              fill
              sizes="(max-width: 768px) 100vw, 560px"
              referrerPolicy="no-referrer"
              className="object-cover object-[center_26%]"
            />

            {/* Subtle bottom-left gradient for indicator legibility while keeping the green court vibrant */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/50 via-black/15 to-transparent"
            />

            {/* Bottom-Left Compact Member Avatars & 5-Star Rating Indicator */}
            <div className="relative z-10 flex h-full min-h-[260px] sm:min-h-[300px] lg:h-[330px] flex-col justify-end p-5 sm:p-6 lg:p-7">
              <div className="inline-flex items-center gap-3">
                {/* Overlapping Circular Profile Avatars */}
                <div className="flex items-center -space-x-2">
                  {MEMBER_AVATARS.map((avatar, index) => (
                    <div
                      key={index}
                      className="relative h-7 w-7 sm:h-8 sm:w-8 overflow-hidden rounded-full border-2 border-white bg-[#344810] shadow-xs"
                    >
                      <Image
                        src={avatar.src}
                        alt={avatar.alt}
                        fill
                        sizes="32px"
                        referrerPolicy="no-referrer"
                        className={`object-cover ${avatar.position}`}
                      />
                    </div>
                  ))}
                </div>

                {/* 5 Stars + Compact Supporting Label */}
                <div className="flex flex-col gap-0.5">
                  <div
                    className="flex items-center gap-0.5"
                    aria-label="Avaliação 5 de 5 estrelas"
                  >
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-white text-white"
                      />
                    ))}
                  </div>
                  <span className="text-[9.5px] sm:text-[10px] font-normal leading-tight text-white/85">
                    Aprovado por mais de 2.400 sócios Live
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* CARD 2 — DARK PROMOTIONAL CARD: Charcoal/olive-black card with contrasting CTA */}
          <article className="relative overflow-hidden rounded-[18px] sm:rounded-[20px] bg-[#222521] p-6 sm:p-7 lg:p-8 min-h-[260px] sm:min-h-[300px] lg:h-[330px] flex flex-col justify-between">
            {/* Subtle architectural surface highlight matching the reference card */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full bg-white/[0.03] blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[56%] bg-gradient-to-t from-[#191C18]/90 to-transparent"
            />

            {/* Top Subtle Category Label */}
            <div className="relative z-10">
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[10px] sm:text-[10.5px] font-normal leading-none text-white/75">
                Nossa Oferta
              </span>
            </div>

            {/* Middle Headline + Supporting Line */}
            <div className="relative z-10 my-auto pt-3">
              <h3 className="max-w-[300px] text-[20px] sm:text-[23px] lg:text-[26px] font-medium leading-[1.2] tracking-[-0.015em] text-white">
                Mantenha o Controle
                <br />
                das Suas Finanças
              </h3>

              <p className="mt-3 sm:mt-3.5 border-b border-white/10 pt-0 pb-3 sm:pb-3.5 text-[10.5px] sm:text-[11.5px] font-normal leading-[1.45] text-white/60">
                Planos Flexíveis de Tênis, Padel &amp; Multidesportos
              </p>
            </div>

            {/* Bottom Contrasting White + Lime CTA */}
            <div className="relative z-10 pt-2">
              <a
                href="#join-offer"
                className="group inline-flex items-center gap-2 sm:gap-2.5 rounded-full bg-white pl-3.5 sm:pl-4 pr-1 sm:pr-1.5 py-1 sm:py-1.5 text-[9.5px] sm:text-[10.5px] font-semibold uppercase tracking-[0.03em] text-[#151B0A] transition-transform duration-150 hover:scale-[1.02] active:scale-[0.99] whitespace-nowrap shrink-0"
              >
                <span>JUNTE-SE A NÓS</span>
                <span className="flex h-5.5 w-5.5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-[#B8D85A] text-[#151B0A] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 stroke-[2.3]" />
                </span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
