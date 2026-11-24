/**
 * Centralized Design System & Reference Specifications for Golfngv
 * Visual Source of Truth: Desktop (1440px) & Mobile (390px) Reference Mockups
 */

export const DESIGN_TOKENS = {
  colors: {
    background: '#F6F6F7',
    surface: '#FFFFFF',
    surfaceSubtle: '#F7F8F5',
    surfaceDark: '#222520',
    surfaceDarkCard: '#1F231E',
    primaryText: '#151B0A',
    secondaryText: '#66695E',
    deepGreen: '#344810',
    mutedOlive: '#83855E',
    neutralGray: '#B2BBC6',
    limeAccent: '#B8D85A',
    limeSolid: '#A4C94D',
    limeSoft: '#EBF4CE',
    borderSubtle: '#EAECE7',
  },
  typography: {
    fontFamily: 'Manrope, sans-serif',
    scale: {
      heroHeadline: {
        desktop: { fontSize: '56px', lineHeight: '1.08', letterSpacing: '-0.025em', fontWeight: 500 },
        mobile: { fontSize: '32px', lineHeight: '1.12', letterSpacing: '-0.02em', fontWeight: 500 },
      },
      sectionHeadingLg: {
        desktop: { fontSize: '38px', lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: 500 },
        mobile: { fontSize: '26px', lineHeight: '1.18', letterSpacing: '-0.02em', fontWeight: 500 },
      },
      sectionHeadingMd: {
        desktop: { fontSize: '34px', lineHeight: '1.18', letterSpacing: '-0.02em', fontWeight: 500 },
        mobile: { fontSize: '24px', lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: 500 },
      },
      statementLead: {
        desktop: { fontSize: '26px', lineHeight: '1.35', letterSpacing: '-0.015em', fontWeight: 500 },
        mobile: { fontSize: '18px', lineHeight: '1.4', letterSpacing: '-0.01em', fontWeight: 500 },
      },
      statNumber: {
        desktop: { fontSize: '52px', lineHeight: '1.0', letterSpacing: '-0.03em', fontWeight: 500 },
        mobile: { fontSize: '36px', lineHeight: '1.0', letterSpacing: '-0.03em', fontWeight: 500 },
      },
      cardTitleLg: {
        desktop: { fontSize: '26px', lineHeight: '1.22', letterSpacing: '-0.015em', fontWeight: 500 },
        mobile: { fontSize: '20px', lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: 500 },
      },
      cardTitleSm: {
        desktop: { fontSize: '16px', lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: 500 },
        mobile: { fontSize: '15px', lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: 500 },
      },
      bodyRegular: {
        desktop: { fontSize: '14px', lineHeight: '1.55', letterSpacing: '0em', fontWeight: 400 },
        mobile: { fontSize: '13px', lineHeight: '1.55', letterSpacing: '0em', fontWeight: 400 },
      },
      bodyMutedSm: {
        desktop: { fontSize: '12px', lineHeight: '1.5', letterSpacing: '0em', fontWeight: 400 },
        mobile: { fontSize: '11.5px', lineHeight: '1.45', letterSpacing: '0em', fontWeight: 400 },
      },
      buttonText: {
        fontSize: '12px',
        lineHeight: '1',
        letterSpacing: '0.02em',
        fontWeight: 600,
      },
      pillLabel: {
        fontSize: '12px',
        lineHeight: '1',
        letterSpacing: '-0.005em',
        fontWeight: 500,
      },
    },
  },
  spacing: {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '72px',
  },
  layout: {
    breakpoints: {
      mobile: 390,
      tablet: 768,
      desktop: 1440,
    },
    containerMaxWidth: '1280px',
    horizontalPadding: {
      desktop: '32px',
      mobile: '16px',
    },
    sectionVerticalSpacing: {
      desktop: '72px',
      mobile: '48px',
    },
    headerHeight: {
      desktop: '72px',
      mobile: '56px',
    },
    radii: {
      hero: '24px',
      cardLg: '20px',
      cardMd: '16px',
      cardSm: '12px',
      pill: '9999px',
    },
    grids: {
      aboutSplit: 'grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6',
      bentoAcademy: 'grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5',
      statsRow: 'grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5',
      qualitySplit: 'grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12',
      promoSplit: 'grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6',
      faqSplit: 'grid-cols-1 lg:grid-cols-2 gap-3.5 lg:gap-4',
    },
  },
  referenceMetrics: {
    hero: {
      aspectRatioDesktop: '16 / 10',
      minHeightDesktop: '640px',
      minHeightMobile: '460px',
      borderRadius: '24px',
    },
    about: {
      leftCardAspectRatio: '1 / 1.05',
      rightTopImageAspectRatio: '16 / 9',
      borderRadius: '20px',
    },
    golfAcademy: {
      leftTallCardHeightDesktop: '440px',
      topSmallCardHeightDesktop: '210px',
      bottomWideCardHeightDesktop: '210px',
      borderRadius: '20px',
    },
    amenitiesStatistics: {
      cardHeightDesktop: '220px',
      borderRadius: '18px',
    },
    qualityCourse: {
      rightGridImageAspectRatio: '4 / 4.2',
      gridSlices: 9,
      sliceRadius: '10px',
    },
    promotionalCards: {
      cardHeightDesktop: '310px',
      borderRadius: '20px',
    },
    faq: {
      containerBackground: '#F6F6F7',
      containerRadius: '20px',
      itemRadius: '12px',
    },
    footer: {
      background: '#222520',
      topRadius: '24px',
    },
  },
} as const;

export const COMPONENT_ARCHITECTURE = [
  'Header',
  'Hero',
  'About',
  'GolfAcademy',
  'AmenitiesStatistics',
  'QualityCourse',
  'PromotionalCards',
  'FAQ',
  'Footer',
] as const;

export type SectionComponentName = (typeof COMPONENT_ARCHITECTURE)[number];
