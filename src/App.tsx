import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturedCollections } from './components/FeaturedCollections';
import { LatestWorks } from './components/LatestWorks';
import { Features } from './components/Features';
import { CommissionSection } from './components/CommissionSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen bg-fantasy-navy text-fantasy-white selection:bg-fantasy-teal selection:text-fantasy-navy relative overflow-hidden">
      {/* Global Noise Overlay */}
      <div className="noise-overlay"></div>

      {/* Global Atmospheric Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-fantasy-purple/10 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-fantasy-teal/5 rounded-full blur-[150px] pointer-events-none z-0 mix-blend-screen"></div>
      <div className="fixed top-[40%] left-[60%] w-[40vw] h-[40vw] bg-fantasy-deepViolet/20 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-screen"></div>

      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <FeaturedCollections />
          <LatestWorks />
          <Features />
          <CommissionSection />
          <AboutSection />
          <FaqSection />
        </main>
        <Footer />
      </div>
    </div>);

}