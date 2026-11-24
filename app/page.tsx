import React from 'react';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { GolfAcademy } from '@/components/sections/GolfAcademy';
import { AmenitiesStatistics } from '@/components/sections/AmenitiesStatistics';
import { QualityCourse } from '@/components/sections/QualityCourse';
import { PromotionalCards } from '@/components/sections/PromotionalCards';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-golf-surface text-golf-primary">
      <Header />
      <main>
        <Hero />
        <About />
        <GolfAcademy />
        <AmenitiesStatistics />
        <QualityCourse />
        <PromotionalCards />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
