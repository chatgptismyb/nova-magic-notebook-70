
import { Hero } from '@/components/Hero';
import { WhatItIs } from '@/components/WhatItIs';
import { Features } from '@/components/Features';
import { AppMockups } from '@/components/AppMockups';
import { HowItWorks } from '@/components/HowItWorks';
import { NotesSection } from '@/components/NotesSection';
import { TestimonialBook } from '@/components/TestimonialBook';
import { SubscriptionSection } from '@/components/SubscriptionSection';
import { FAQ } from '@/components/FAQ';
import { Community } from '@/components/Community';
import { DocsSection } from '@/components/DocsSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-amber-100 to-yellow-300 text-slate-800 relative overflow-x-hidden">
      {/* Cleaner Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Reduced magical elements for cleaner UI */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`charm-bg-${i}`}
            className="absolute animate-wind-drift opacity-5"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            <div className="text-amber-400 text-xl">🌟</div>
          </div>
        ))}
        
        {/* Subtle paper texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.05),transparent_70%)]" />
      </div>
      
      <Hero />
      <WhatItIs />
      <HowItWorks />
      <Features />
      <AppMockups />
      <NotesSection />
      <TestimonialBook />
      <SubscriptionSection />
      <FAQ />
      <Community />
      <DocsSection />
      <Footer />
    </div>
  );
};

export default Index;
