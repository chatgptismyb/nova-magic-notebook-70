
import { Hero } from '@/components/Hero';
import { WhatItIs } from '@/components/WhatItIs';
import { Features } from '@/components/Features';
import { AppMockups } from '@/components/AppMockups';
import { NotesSection } from '@/components/NotesSection';
import { TestimonialBook } from '@/components/TestimonialBook';
import { SubscriptionSection } from '@/components/SubscriptionSection';
import { FAQ } from '@/components/FAQ';
import { Community } from '@/components/Community';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-amber-100 to-yellow-300 text-slate-800 relative overflow-x-hidden">
      {/* Enhanced Magical Charms Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Magical wind charms pattern */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`charm-bg-${i}`}
            className="absolute animate-wind-drift opacity-15"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            <div className="text-amber-400 text-2xl">🌟</div>
          </div>
        ))}
        
        {/* Floating sparkles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`sparkle-bg-${i}`}
            className="absolute animate-sparkle-dance opacity-20"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          >
            <div className="text-yellow-400 text-lg">✨</div>
          </div>
        ))}
        
        {/* Magic wands */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`wand-bg-${i}`}
            className="absolute animate-float opacity-10"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
              transform: `rotate(${Math.random() * 45 - 22.5}deg)`
            }}
          >
            <div className="text-purple-400 text-xl">🪄</div>
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
      <NotesSection />
      <TestimonialBook />
      <SubscriptionSection />
      <FAQ />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
