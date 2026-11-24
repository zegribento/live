import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Centered Page Container
 * Desktop max-width: 1280px (within 1440px viewport with 80px total outer margin or 32px inner padding)
 * Mobile target: 390px with 16px horizontal padding
 */
export function Container({
  children,
  className,
  as: Component = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <Component
      className={cn(
        'mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </Component>
  );
}

/**
 * Consistent Vertical Section Spacing Wrapper
 */
export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn('py-10 sm:py-14 lg:py-[72px]', className)}
    >
      {children}
    </section>
  );
}

/**
 * Reusable Button Styles matching Reference:
 * - 'dark-lime': Dark charcoal capsule (#151B0A / #1F231E) with white uppercase label and circular #B8D85A arrow badge (e.g. "JOIN OUR TEAM")
 * - 'glass': Translucent blurred white border capsule (e.g. "Discover" on Hero/About image cards)
 * - 'lime-solid': Solid lime green capsule (#B8D85A / #A4C94D) with dark/white text (e.g. "JOIN OUR TEAM" on QualityCourse)
 * - 'light-lime': White capsule with dark text and circular lime arrow badge (e.g. "JOIN OUR TEAM" on dark Promo card)
 */
export interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'dark-lime' | 'glass' | 'lime-solid' | 'light-lime';
  showArrow?: boolean;
  children: React.ReactNode;
}

export function ActionButton({
  variant = 'dark-lime',
  showArrow = true,
  children,
  className,
  ...props
}: ActionButtonProps) {
  if (variant === 'dark-lime') {
    return (
      <button
        type="button"
        className={cn(
          'group inline-flex items-center gap-2.5 rounded-full bg-[#151B0A] pl-4 pr-1.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.03em] text-white transition-transform duration-150 hover:scale-[1.02] active:scale-[0.99] whitespace-nowrap shrink-0 cursor-pointer',
          className
        )}
        {...props}
      >
        <span>{children}</span>
        {showArrow && (
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#B8D85A] text-[#151B0A] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.25]" />
          </span>
        )}
      </button>
    );
  }

  if (variant === 'light-lime') {
    return (
      <button
        type="button"
        className={cn(
          'group inline-flex items-center gap-2.5 rounded-full bg-white pl-4 pr-1.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.03em] text-[#151B0A] transition-transform duration-150 hover:scale-[1.02] active:scale-[0.99] whitespace-nowrap shrink-0 cursor-pointer',
          className
        )}
        {...props}
      >
        <span>{children}</span>
        {showArrow && (
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#B8D85A] text-[#151B0A] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.25]" />
          </span>
        )}
      </button>
    );
  }

  if (variant === 'lime-solid') {
    return (
      <button
        type="button"
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-full bg-[#A4C94D] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.03em] text-white transition-colors duration-150 hover:bg-[#96bc3f] whitespace-nowrap shrink-0 cursor-pointer',
          className
        )}
        {...props}
      >
        <span>{children}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center justify-center rounded-full border border-white/40 bg-white/15 px-5 py-2 text-[12px] font-medium text-white backdrop-blur-md transition-colors duration-150 hover:bg-white/25 whitespace-nowrap shrink-0 cursor-pointer',
        className
      )}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
}

/**
 * Reusable Pill / Tag Styles matching Reference:
 * - 'lime-soft': Soft lime pill (#EBF4CE) with deep green text (e.g. "Our Story")
 * - 'neutral': Soft gray pill (#F6F6F7) with muted text (e.g. "About us", "Game")
 * - 'outline-lime': White pill with thin lime border (e.g. "About Us" in AmenitiesStatistics)
 * - 'glass-tag': Translucent glass tag with optional status dot on Hero ("Golf Gear", "Social", "Advance")
 */
export function PillBadge({
  variant = 'neutral',
  children,
  className,
  onClick,
}: {
  variant?: 'lime-soft' | 'neutral' | 'outline-lime' | 'glass-tag' | 'solid-white-tag';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const baseStyles =
    'inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-medium leading-none whitespace-nowrap shrink-0 transition-colors duration-150';

  const variants = {
    'lime-soft': 'bg-[#EBF4CE] text-[#344810]',
    neutral: 'bg-[#F6F6F7] text-[#66695E] hover:bg-[#EAECE7]',
    'outline-lime': 'border border-[#B8D85A] bg-white text-[#344810]',
    'glass-tag':
      'border border-white/45 bg-white/15 text-white backdrop-blur-md',
    'solid-white-tag': 'bg-white text-[#151B0A] shadow-xs',
  };

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={cn(baseStyles, variants[variant], 'cursor-pointer', className)}
      >
        {children}
      </button>
    );
  }

  return (
    <span className={cn(baseStyles, variants[variant], className)}>
      {children}
    </span>
  );
}

/**
 * Reusable Image Card Container with consistent border radius and optional bottom glass overlay
 */
export function ImageCard({
  children,
  className,
  radius = 'lg',
}: {
  children: React.ReactNode;
  className?: string;
  radius?: 'hero' | 'lg' | 'md' | 'sm';
}) {
  const radiusMap = {
    hero: 'rounded-[20px] lg:rounded-[24px]',
    lg: 'rounded-[18px] lg:rounded-[20px]',
    md: 'rounded-[14px] lg:rounded-[16px]',
    sm: 'rounded-[12px]',
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-[#F6F6F7]',
        radiusMap[radius],
        className
      )}
    >
      {children}
    </div>
  );
}
