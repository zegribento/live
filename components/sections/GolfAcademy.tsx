import React from 'react';
import Image from 'next/image';

export function GolfAcademy() {
  return (
    <section
      data-section="GolfAcademy"
      aria-label="Seção Academia de Tênis e Padel Live"
      className="mx-auto w-full max-w-[1280px] px-3.5 sm:px-6 lg:px-8 pt-4 sm:pt-8 lg:pt-10 pb-10 sm:pb-14 lg:pb-16"
    >
      {/* Inner wrapper aligned with Header, Hero, and About */}
      <div className="px-1.5 sm:px-8 lg:px-10">
        {/* 1. SECTION HEADER: Centered introduction */}
        <div className="mx-auto flex max-w-[560px] flex-col items-center text-center">
          <span className="text-[11px] sm:text-[12px] font-medium leading-none tracking-[-0.01em] text-[#8FB83B]">
            Academia Live
          </span>

          <h2 className="mt-2 text-[24px] sm:text-[31px] lg:text-[36px] font-medium leading-[1.16] tracking-[-0.02em] text-[#151B0A]">
            Treinamento Profissional &amp; Academia de Raquetes
          </h2>

          <p className="mt-2.5 max-w-[440px] text-[11px] sm:text-[12px] font-normal leading-[1.55] text-[#66695E]">
            Ingredientes locais, gastronomia refinada e vista para as quadras.
            Equipamentos de tênis e padel de última geração, vestuário exclusivo
            e ajuste personalizado de raquetes.
          </p>
        </div>

        {/* 2. & 3. PHOTOGRAPHIC MOSAIC: Asymmetric 3-column × 2-row grid on desktop */}
        <div className="mt-7 sm:mt-9 lg:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-[18px]">
          {/* IMAGE 1 — LEFT: Tall vertical card spanning both rows */}
          <article className="relative overflow-hidden rounded-[18px] sm:rounded-[20px] bg-[#1D2B14] min-h-[340px] sm:min-h-[380px] md:row-span-2 md:min-h-[458px]">
            <Image
              src="/assets/images/live_academy_flatlay_gear_1794044293602.jpg"
              alt="Bolas de tênis e padel, boné esportivo branco e raquete de padel em fibra de carbono sobre grama verde"
              fill
              sizes="(max-width: 768px) 100vw, 380px"
              referrerPolicy="no-referrer"
              className="object-cover object-center"
            />

            {/* Subtle bottom frosted-dark overlay band */}
            <div className="absolute inset-x-0 bottom-0 bg-[#1B2219]/55 px-4 sm:px-5 py-3 sm:py-3.5 backdrop-blur-[5px]">
              <h3 className="text-[13px] sm:text-[14px] font-medium leading-snug tracking-[-0.01em] text-white">
                Instrutores ATP &amp; FIP
              </h3>
              <p className="mt-1 text-[9.5px] sm:text-[10px] font-normal leading-[1.42] text-white/75 line-clamp-2">
                Treinadores certificados de tênis, padel e multidesportos
                dedicados a elevar sua técnica e estratégia de jogo
              </p>
            </div>
          </article>

          {/* IMAGE 2 — TOP CENTER: Hand placing tennis ball by racket */}
          <article className="relative overflow-hidden rounded-[18px] sm:rounded-[20px] bg-[#0F130E] h-[220px] sm:h-[235px] md:h-[220px]">
            <Image
              src="/assets/images/live_academy_racket_ball_closeup_1794044294074.jpg"
              alt="Close da mão de um jogador colocando bola de tênis na grama verde ao lado de raquete de fibra de carbono"
              fill
              sizes="(max-width: 768px) 100vw, 380px"
              referrerPolicy="no-referrer"
              className="object-cover object-[center_40%]"
            />

            {/* Dark translucent bottom overlay band */}
            <div className="absolute inset-x-0 bottom-0 bg-[#232A21]/60 px-4 sm:px-5 py-3 sm:py-3.5 backdrop-blur-[5px]">
              <h3 className="text-[13px] sm:text-[14px] font-medium leading-snug tracking-[-0.01em] text-white">
                Clubhouse Elegante
              </h3>
              <p className="mt-1 text-[9.5px] sm:text-[10px] font-normal leading-[1.42] text-white/75 line-clamp-2">
                Pro shop, laboratório de encordoamento personalizado, spa de
                recuperação e lounge panorâmico com vista para as quadras
              </p>
            </div>
          </article>

          {/* IMAGE 3 — TOP RIGHT: Tennis & Padel coaching scene on court */}
          <article className="relative overflow-hidden rounded-[18px] sm:rounded-[20px] bg-[#2D4018] h-[220px] sm:h-[235px] md:h-[220px]">
            <Image
              src="/assets/images/live_academy_coaching_couple_1794044296056.jpg"
              alt="Treinador de tênis e padel e jogadora sorrindo e conversando em quadra de grama ensolarada"
              fill
              sizes="(max-width: 768px) 100vw, 380px"
              referrerPolicy="no-referrer"
              className="object-cover object-[center_20%]"
            />

            {/* Subtle bottom overlay band */}
            <div className="absolute inset-x-0 bottom-0 bg-[#232A21]/45 px-4 sm:px-5 py-3 sm:py-3.5 backdrop-blur-[5px]">
              <h3 className="text-[13px] sm:text-[14px] font-medium leading-snug tracking-[-0.01em] text-white">
                Social &amp; Eventos
              </h3>
              <p className="mt-1 text-[9.5px] sm:text-[10px] font-normal leading-[1.42] text-white/80 line-clamp-2">
                Encontros semanais de padel, ligas do clube, torneios de
                campeonato e eventos sociais durante todo o ano
              </p>
            </div>
          </article>

          {/* IMAGE 4 — BOTTOM CENTER + RIGHT: Wide panoramic image spanning two columns */}
          <article className="relative overflow-hidden rounded-[18px] sm:rounded-[20px] bg-[#2B3B1E] h-[220px] sm:h-[235px] md:col-span-2 md:h-[220px]">
            <Image
              src="/assets/images/live_academy_courts_complex_1794044297690.jpg"
              alt="Vista panorâmica de quadras verdes de tênis e quadras de padel em vidro cercadas por pinheiros"
              fill
              sizes="(max-width: 768px) 100vw, 760px"
              referrerPolicy="no-referrer"
              className="object-cover object-[center_42%]"
            />

            {/* Subtle bottom overlay band */}
            <div className="absolute inset-x-0 bottom-0 bg-[#232A21]/50 px-4 sm:px-5 py-3 sm:py-3.5 backdrop-blur-[5px]">
              <h3 className="text-[13px] sm:text-[14px] font-medium leading-snug tracking-[-0.01em] text-white">
                Quadras Arborizadas &amp; Arenas de Padel
              </h3>
              <p className="mt-1 max-w-[360px] text-[9.5px] sm:text-[10px] font-normal leading-[1.42] text-white/80 line-clamp-2">
                Quadras de tênis em grama e saibro de padrão internacional,
                quadras panorâmicas de padel e áreas multidesportos
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
