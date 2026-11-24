import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Live — Clube de Tênis, Padel & Multidesportos',
  description:
    'Um destino esportivo de elite com quadras de tênis e padel de campeonato, treinamento profissional, academia de raquetes e comodidades de classe mundial.',
  openGraph: {
    title: 'Live — Clube de Tênis, Padel & Multidesportos',
    description:
      'Um destino esportivo de elite com quadras de tênis e padel de campeonato, treinamento profissional, academia de raquetes e comodidades de classe mundial.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live — Clube de Tênis, Padel & Multidesportos',
    description:
      'Um destino esportivo de elite com quadras de tênis e padel de campeonato, treinamento profissional, academia de raquetes e comodidades de classe mundial.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={manrope.variable}>
      <body className="font-sans antialiased bg-golf-surface text-golf-primary selection:bg-golf-lime selection:text-golf-primary" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
