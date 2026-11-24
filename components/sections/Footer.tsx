import React from 'react';
import { Facebook, Instagram, Mail, Twitter } from 'lucide-react';

const FOOTER_LINKS = [
  { label: 'Sobre Nós', href: '#about' },
  { label: 'Serviços', href: '#service' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Avaliações', href: '#reviews' },
] as const;

export function Footer() {
  return (
    <footer
      data-section="Footer"
      aria-label="Rodapé do site"
      className="mx-auto w-full max-w-[1280px] px-0 sm:px-6 lg:px-8 pt-4 sm:pt-6"
    >
      {/* Main Dark Charcoal/Olive-Black Container with Rounded Top Corners */}
      <div className="w-full rounded-t-[24px] sm:rounded-t-[28px] bg-[#222521] px-5 sm:px-8 lg:px-10 pt-9 sm:pt-12 lg:pt-14 pb-6 sm:pb-8 text-white">
        {/* TOP ROW: Primary Call to Action Headline + Circular Lime-Green Contact Icon */}
        <div className="flex items-center justify-between gap-6">
          <h2 className="text-[22px] sm:text-[28px] lg:text-[34px] font-medium leading-[1.18] tracking-[-0.02em] text-white">
            Pronto para Entrar em Quadra?
            <br />
            Vamos conversar com você.
          </h2>

          <a
            href="mailto:hello@liveclub.com"
            aria-label="Entrar em contato com o Live Club por e-mail"
            className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#A5CD4E] text-white shadow-xs transition-transform duration-150 hover:scale-105 hover:bg-[#B8D85A] active:scale-95"
          >
            <Mail className="h-4.5 w-4.5 sm:h-5 sm:w-5 stroke-[1.9]" />
          </a>
        </div>

        {/* BOTTOM NAVIGATION AREA */}
        <div className="mt-8 sm:mt-10 lg:mt-12 border-t border-white/10 pt-5 sm:pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Left: Small Live Brand Logo */}
          <a
            href="#top"
            className="inline-flex items-center gap-2 whitespace-nowrap shrink-0 focus:outline-none"
          >
            <span
              aria-hidden="true"
              className="relative flex h-4.5 w-4.5 items-center justify-center rounded-full bg-gradient-to-br from-[#344810] via-[#6E922B] to-[#B8D85A] overflow-hidden"
            >
              <span className="absolute -left-1.5 h-3.5 w-3.5 rounded-full border-[1.2px] border-[#EBF4CE]/85" />
              <span className="absolute -right-1.5 h-3.5 w-3.5 rounded-full border-[1.2px] border-[#EBF4CE]/85" />
            </span>
            <span className="text-[13px] sm:text-[14px] font-semibold tracking-[-0.025em] text-white">
              Live
            </span>
          </a>

          {/* Center: Minimal Navigation Links */}
          <nav
            aria-label="Navegação do rodapé"
            className="flex flex-wrap items-center gap-5 sm:gap-7"
          >
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[10.5px] sm:text-[11px] font-normal text-white/65 transition-colors duration-150 hover:text-white whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Compact Circular Social Media Icons */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="#facebook"
              aria-label="Facebook"
              className="flex h-6.5 w-6.5 sm:h-7 sm:w-7 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/70 transition-colors duration-150 hover:border-[#B8D85A] hover:text-white"
            >
              <Facebook className="h-3 w-3 stroke-[1.8]" />
            </a>
            <a
              href="#instagram"
              aria-label="Instagram"
              className="flex h-6.5 w-6.5 sm:h-7 sm:w-7 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/70 transition-colors duration-150 hover:border-[#B8D85A] hover:text-white"
            >
              <Instagram className="h-3 w-3 stroke-[1.8]" />
            </a>
            <a
              href="#twitter"
              aria-label="Twitter"
              className="flex h-6.5 w-6.5 sm:h-7 sm:w-7 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/70 transition-colors duration-150 hover:border-[#B8D85A] hover:text-white"
            >
              <Twitter className="h-3 w-3 stroke-[1.8]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
