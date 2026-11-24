'use client';

import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: string[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Serviços',
    href: '#service',
    hasDropdown: true,
    dropdownItems: [
      'Quadras de Tênis e Padel',
      'Treino Particular',
      'Encordoamento de Raquetes',
    ],
  },
  {
    label: 'O Clube',
    href: '#agency',
    hasDropdown: true,
    dropdownItems: [
      'História do Live Club',
      'Clubhouse & Spa',
      'Arena Multidesportos',
    ],
  },
  {
    label: 'Projetos',
    href: '#case-study',
    hasDropdown: true,
    dropdownItems: [
      'Torneios Open',
      'Academia Juvenil',
      'Histórias de Sócios',
    ],
  },
  {
    label: 'Recursos',
    href: '#resources',
    hasDropdown: true,
    dropdownItems: [
      'Reserva de Quadras',
      'Código de Vestuário',
      'Guia de Sócios',
    ],
  },
  {
    label: 'Contato',
    href: '#contact',
    hasDropdown: false,
  },
];

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      data-section="Header"
      aria-label="Cabeçalho do site"
      className="relative z-30 mx-auto w-full max-w-none px-1.5 sm:px-2.5 lg:px-3.5 pt-3.5 sm:pt-5"
    >
      {/* Inner bar uses identical horizontal padding (px-5 sm:px-8 lg:px-10) as Hero content so left/right edges align to the pixel */}
      <div className="flex h-[56px] sm:h-[68px] lg:h-[76px] w-full items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* LEFT: Minimal green/lime tennis-padel emblem + dark Live wordmark */}
        <a
          href="#top"
          className="group inline-flex items-center gap-2 whitespace-nowrap shrink-0 focus:outline-none"
        >
          <span
            aria-hidden="true"
            className="relative flex h-6 w-6 sm:h-6.5 sm:w-6.5 items-center justify-center rounded-full bg-gradient-to-br from-[#344810] via-[#6E922B] to-[#B8D85A] shadow-2xs overflow-hidden"
          >
            {/* Subtle curved tennis/padel ball seam arcs */}
            <span className="absolute -left-2 h-5 w-5 rounded-full border-[1.5px] border-[#EBF4CE]/85" />
            <span className="absolute -right-2 h-5 w-5 rounded-full border-[1.5px] border-[#EBF4CE]/85" />
          </span>
          <span className="text-[16px] sm:text-[18px] lg:text-[19px] font-bold tracking-[-0.03em] text-[#151B0A]">
            Live
          </span>
        </a>

        {/* CENTER: Compact horizontal navigation */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-5 lg:gap-7"
        >
          {NAV_ITEMS.map((item) => {
            const isOpen = activeDropdown === item.label;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.hasDropdown ? setActiveDropdown(item.label) : undefined
                }
                onMouseLeave={() =>
                  item.hasDropdown ? setActiveDropdown(null) : undefined
                }
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (item.hasDropdown) {
                      e.preventDefault();
                      setActiveDropdown(isOpen ? null : item.label);
                    }
                  }}
                  className="inline-flex items-center gap-1 text-[12px] lg:text-[13px] font-medium text-[#151B0A]/85 transition-colors duration-150 hover:text-[#151B0A] whitespace-nowrap shrink-0"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`h-3 w-3 stroke-[2] text-[#151B0A]/70 transition-transform duration-150 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </a>

                {item.hasDropdown && isOpen && (
                  <div className="absolute left-0 top-full pt-2 z-40">
                    <div className="min-w-[185px] rounded-[14px] border border-[#EAECE7] bg-white/95 p-1.5 shadow-lg backdrop-blur-md">
                      {item.dropdownItems?.map((subItem) => (
                        <a
                          key={subItem}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block rounded-[9px] px-3 py-1.5 text-[12px] font-medium text-[#151B0A]/80 transition-colors hover:bg-[#EBF4CE]/60 hover:text-[#151B0A] whitespace-nowrap"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* RIGHT: Dark pill CTA button "JUNTE-SE A NÓS" with circular lime-green arrow */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#join"
            className="group inline-flex items-center gap-2 sm:gap-2.5 rounded-full bg-[#151B0A] pl-3.5 sm:pl-4 pr-1 sm:pr-1.5 py-1 sm:py-1.5 text-[9.5px] sm:text-[10.5px] font-semibold uppercase tracking-[0.03em] text-white transition-transform duration-150 hover:scale-[1.02] active:scale-[0.99] whitespace-nowrap shrink-0"
          >
            <span>JUNTE-SE A NÓS</span>
            <span className="flex h-5.5 w-5.5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-[#B8D85A] text-[#151B0A] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 stroke-[2.3]" />
            </span>
          </a>

          {/* Compact mobile navigation toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={
              mobileMenuOpen
                ? 'Fechar menu de navegação'
                : 'Abrir menu de navegação'
            }
            aria-expanded={mobileMenuOpen}
            className="flex md:hidden h-7.5 w-7.5 items-center justify-center rounded-full bg-white/80 text-[#151B0A] backdrop-blur-sm transition-colors hover:bg-white cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="h-3.5 w-3.5 stroke-[2.2]" />
            ) : (
              <Menu className="h-3.5 w-3.5 stroke-[2.2]" />
            )}
          </button>
        </div>
      </div>

      {/* Compact Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mx-3 mt-1 rounded-[16px] border border-white/60 bg-white/95 p-3 shadow-lg backdrop-blur-md md:hidden">
          <nav aria-label="Navegação móvel" className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-[10px] px-3 py-2 text-[13px] font-medium text-[#151B0A] hover:bg-[#EBF4CE]/60"
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown className="h-3.5 w-3.5 text-[#66695E]" />
                )}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
