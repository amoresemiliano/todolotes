import React, { useState, useEffect } from 'react';
import { LOTEOS, FEATURED_LOTEO } from './data/loteos';
import { ViewState } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExploreLoteos } from './components/ExploreLoteos';
import { FeaturedDevelopment } from './components/FeaturedDevelopment';
import { ValueProposition } from './components/ValueProposition';
import { AboutUs } from './components/AboutUs';
import { HowToBuy } from './components/HowToBuy';
import { LifestyleSection } from './components/LifestyleSection';
import { WhatsAppCTA } from './components/WhatsAppCTA';
import { Footer } from './components/Footer';
import { LoteoDetailView } from './components/LoteoDetailView';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  const [viewState, setViewState] = useState<ViewState>(() => {
    // Check initial hash/path e.g. #loteo-los-aromos-potrero or path
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash.startsWith('#loteo-')) {
        const slug = hash.replace('#loteo-', '');
        const exists = LOTEOS.some((l) => l.slug === slug);
        if (exists) {
          return { view: 'loteo-detail', slug };
        }
      }
    }
    return { view: 'home' };
  });

  // Sync hash with viewState for direct sharing and browser history navigation
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#loteo-')) {
        const slug = hash.replace('#loteo-', '');
        const exists = LOTEOS.some((l) => l.slug === slug);
        if (exists) {
          setViewState({ view: 'loteo-detail', slug });
          return;
        }
      }
      setViewState({ view: 'home' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleSelectLoteo = (slug: string) => {
    window.location.hash = `loteo-${slug}`;
    setViewState({ view: 'loteo-detail', slug });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    window.location.hash = '';
    setViewState({ view: 'home' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentLoteo =
    viewState.view === 'loteo-detail'
      ? LOTEOS.find((l) => l.slug === viewState.slug) || LOTEOS[0]
      : null;

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#24211D] flex flex-col font-sans-clean antialiased selection:bg-[#C85A32] selection:text-white">
      {/* Universal Top Bar */}
      <Navbar
        onNavigate={handleNavigateSection}
        onSelectLoteo={handleSelectLoteo}
        activeView={viewState.view === 'home' ? 'home' : 'detail'}
        onBackToHome={handleBackToHome}
      />

      {/* Main View Router */}
      <main className="grow">
        {viewState.view === 'loteo-detail' && currentLoteo ? (
          <LoteoDetailView
            loteo={currentLoteo}
            onBack={handleBackToHome}
            onSelectOtherLoteo={handleSelectLoteo}
            allLoteos={LOTEOS}
          />
        ) : (
          <>
            {/* 1. Hero Principal */}
            <Hero onExploreClick={() => handleNavigateSection('loteos')} />

            {/* 2. Explorar Loteos (Showcase principal) */}
            <ExploreLoteos
              loteos={LOTEOS}
              onSelectLoteo={handleSelectLoteo}
            />

            {/* 3. Desarrollo Destacado Editorial */}
            <FeaturedDevelopment
              loteo={FEATURED_LOTEO}
              onSelectLoteo={handleSelectLoteo}
            />

            {/* 4. Propuesta de Valor */}
            <ValueProposition />

            {/* 5. Quiénes Somos */}
            <AboutUs />

            {/* 6. Cómo Comprar */}
            <HowToBuy onExploreClick={() => handleNavigateSection('loteos')} />

            {/* 7. Inversión / Estilo de Vida */}
            <LifestyleSection />

            {/* 8. CTA Directo WhatsApp */}
            <WhatsAppCTA />
          </>
        )}
      </main>

      {/* Universal Footer */}
      <Footer
        onNavigate={handleNavigateSection}
        onBackToHome={handleBackToHome}
      />

      {/* Discrete Floating WhatsApp Button */}
      <WhatsAppFloatingButton
        currentLoteoName={currentLoteo?.name}
      />
    </div>
  );
}
