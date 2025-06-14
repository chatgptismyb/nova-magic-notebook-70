
import { Hero } from '@/components/Hero';
import { WhatItIs } from '@/components/WhatItIs';
import { Features } from '@/components/Features';
import { AppMockups } from '@/components/AppMockups';
import { NovaPersona } from '@/components/NovaPersona';
import { NotesSection } from '@/components/NotesSection';
import { TestimonialBook } from '@/components/TestimonialBook';
import { SubscriptionSection } from '@/components/SubscriptionSection';
import { FAQ } from '@/components/FAQ';
import { Community } from '@/components/Community';
import { Footer } from '@/components/Footer';
import { NovaCompanion } from '@/components/NovaCompanion';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-amber-100 to-yellow-300 text-slate-800 relative overflow-x-hidden">
      {/* Enhanced Sticky Notes Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Enhanced floating sticky notes pattern */}
        {[...Array(25)].map((_, i) => (
          <div
            key={`sticky-bg-${i}`}
            className="absolute animate-float-slow opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 8}s`,
              transform: `rotate(${Math.random() * 45 - 22.5}deg)`
            }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-300/30 to-amber-300/30 rounded-lg shadow-sm border-l-4 border-yellow-400/40" />
          </div>
        ))}
        
        {/* Enhanced paper texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(245,158,11,0.05)_25%,transparent_25%,transparent_50%,rgba(245,158,11,0.05)_50%,rgba(245,158,11,0.05)_75%,transparent_75%)] bg-[length:20px_20px]" />
      </div>
      
      <Hero />
      <WhatItIs />
      <Features />
      <AppMockups />
      <NovaPersona />
      <NotesSection />
      <TestimonialBook />
      <SubscriptionSection />
      <FAQ />
      <Community />
      <Footer />
      <NovaCompanion />
    </div>
  );
};

export default Index;
