'use client';

import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  column: 'left' | 'right';
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'book-court',
    question: 'Como reservo uma quadra de tênis ou padel?',
    answer:
      'Escolha sua modalidade, data, horário e jogadores para reservar uma quadra de tênis, padel ou multidesportos online pelo portal Live.',
    column: 'left',
  },
  {
    id: 'private-events',
    question: 'Vocês realizam eventos privados ou torneios?',
    answer:
      'Sim, nossas quadras de tênis de campeonato e arenas panorâmicas de padel recebem copas corporativas, ligas do clube e eventos privados o ano todo.',
    column: 'left',
  },
  {
    id: 'rent-equipment',
    question: 'Posso alugar raquetes de tênis e padel?',
    answer:
      'Raquetes profissionais de padel em fibra de carbono, raquetes de tênis de torneio, máquinas lançadoras e bolas novas estão disponíveis na Live Pro Shop.',
    column: 'left',
  },
  {
    id: 'member-to-play',
    question: 'Preciso ser sócio para jogar?',
    answer:
      'Sócios Live têm prioridade de reserva com 14 dias de antecedência e acesso às ligas, enquanto visitantes podem reservar horários livres durante a semana e fins de semana.',
    column: 'right',
  },
  {
    id: 'dress-code',
    question: 'Qual é o código de vestuário das quadras?',
    answer:
      'É exigido traje esportivo adequado e calçados de tênis ou padel que não marquem o piso, apropriados para superfícies de grama, saibro e grama sintética.',
    column: 'right',
  },
  {
    id: 'rain-check',
    question: 'Qual é a política para chuva e quadras cobertas?',
    answer:
      'Caso o jogo ao ar livre seja suspenso pela chuva, a reserva pode ser transferida para nossas quadras de padel cobertas ou convertida em crédito válido por até 12 meses.',
    column: 'right',
  },
];

export function FAQ() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'book-court': true,
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const leftItems = FAQ_ITEMS.filter((item) => item.column === 'left');
  const rightItems = FAQ_ITEMS.filter((item) => item.column === 'right');

  const renderAccordionItem = (item: FAQItem) => {
    const isOpen = !!openIds[item.id];
    const contentId = `faq-answer-${item.id}`;

    return (
      <div
        key={item.id}
        className="rounded-[12px] border border-[#EAECE7]/80 bg-white px-4 sm:px-5 py-3.5 sm:py-4 shadow-[0_1px_2px_rgba(21,27,10,0.02)] transition-colors duration-150"
      >
        <button
          type="button"
          onClick={() => toggleItem(item.id)}
          aria-expanded={isOpen}
          aria-controls={contentId}
          className="flex w-full items-start justify-between gap-3 text-left cursor-pointer focus:outline-none"
        >
          <span className="pt-0.5 text-[11.5px] sm:text-[12.5px] font-medium leading-[1.35] tracking-[-0.01em] text-[#151B0A]">
            {item.question}
          </span>

          <span
            aria-hidden="true"
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px] transition-colors duration-150 ${
              isOpen
                ? 'bg-[#A5CD4E] text-white'
                : 'bg-[#EFF6D8] text-[#6E9326]'
            }`}
          >
            {isOpen ? (
              <Minus className="h-3.5 w-3.5 stroke-[2.3]" />
            ) : (
              <Plus className="h-3.5 w-3.5 stroke-[2.3]" />
            )}
          </span>
        </button>

        {isOpen && (
          <div
            id={contentId}
            role="region"
            className="mt-2 pr-7 text-[10.5px] sm:text-[11.5px] font-normal leading-[1.52] text-[#66695E]"
          >
            {item.answer}
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      data-section="FAQ"
      aria-label="Seção de Perguntas Frequentes"
      className="mx-auto w-full max-w-[1280px] px-3.5 sm:px-6 lg:px-8 pt-4 sm:pt-8 lg:pt-10 pb-10 sm:pb-14 lg:pb-16"
    >
      {/* Inner wrapper aligned with all previous sections */}
      <div className="px-1.5 sm:px-8 lg:px-10">
        {/* 1. SECTION HEADER */}
        <div className="mx-auto flex max-w-[420px] flex-col items-center text-center">
          <h2 className="text-[22px] sm:text-[26px] lg:text-[29px] font-medium leading-[1.2] tracking-[-0.02em] text-[#151B0A]">
            Perguntas Frequentes
          </h2>
          <p className="mt-2 max-w-[310px] text-[10.5px] sm:text-[11.5px] font-normal leading-[1.5] text-[#66695E]">
            Se você tiver alguma dúvida que gostaria de fazer, responderemos a
            todas as suas perguntas.
          </p>
        </div>

        {/* 2. & 3. TWO-COLUMN FAQ GRID CONTAINER */}
        <div className="mt-6 sm:mt-8 rounded-[18px] sm:rounded-[20px] bg-[#F7F8F6] p-3.5 sm:p-5 lg:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-3.5 items-start">
            {/* Left Column */}
            <div className="flex flex-col gap-3 sm:gap-3.5">
              {leftItems.map(renderAccordionItem)}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-3 sm:gap-3.5">
              {rightItems.map(renderAccordionItem)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
