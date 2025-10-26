import React from 'react';
import HeroSplineCover from './components/HeroSplineCover';
import FeaturesGrid from './components/FeaturesGrid';
import AnalyticsOverview from './components/AnalyticsOverview';
import SecuritySection from './components/SecuritySection';
import SiteFooter from './components/SiteFooter';

function App() {
  return (
    <div className="min-h-screen bg-black font-inter text-white">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
        <div className="container mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-orange-400" />
            <span className="font-semibold tracking-tight">Flying Passports Admin</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#security" className="hover:text-white transition">Security</a>
            <a href="#" className="rounded-md border border-white/20 px-3 py-1.5 hover:bg-white/10 transition">Sign in</a>
          </nav>
        </div>
      </header>

      <main>
        <HeroSplineCover />
        <FeaturesGrid />
        <AnalyticsOverview />
        <SecuritySection />
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
