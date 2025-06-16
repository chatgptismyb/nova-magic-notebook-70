
import { Hero } from '@/components/Hero';
import { ExperienceTheMagic } from '@/components/ExperienceTheMagic';
import { SubscriptionSection } from '@/components/SubscriptionSection';
import { FAQ } from '@/components/FAQ';
import { DocsSection } from '@/components/DocsSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-amber-100 to-yellow-300 text-slate-800 relative overflow-x-hidden">
      {/* Cleaner Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Reduced magical elements for cleaner UI */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`charm-bg-${i}`}
            className="absolute animate-wind-drift opacity-3"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            <div className="text-amber-400 text-lg">🌟</div>
          </div>
        ))}
        
        {/* Subtle paper texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.03),transparent_70%)]" />
      </div>
      
      <Hero />
      <ExperienceTheMagic />
      <SubscriptionSection />
      <FAQ />
      <DocsSection />
      <Footer />
    </div>
  );
};

export default Index;
