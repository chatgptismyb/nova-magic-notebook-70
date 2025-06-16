
import { Hero } from '@/components/Hero';
import { ExperienceTheMagic } from '@/components/ExperienceTheMagic';
import { SubscriptionSection } from '@/components/SubscriptionSection';
import { FAQ } from '@/components/FAQ';
import { DocsSection } from '@/components/DocsSection';
import { Footer } from '@/components/Footer';
import { ScrollEngagement } from '@/components/ScrollEngagement';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-amber-100 to-yellow-300 text-slate-800 relative overflow-x-hidden">
      {/* Cleaner Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Enhanced magical elements for better engagement */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`charm-bg-${i}`}
            className="absolute animate-float opacity-20"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${20 + Math.random() * 15}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            <div className="text-amber-400 text-2xl animate-pulse">🌟</div>
          </div>
        ))}
        
        {/* Enhanced paper texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.05),transparent_70%)]" />
      </div>
      
      {/* Scroll Engagement Layer */}
      <ScrollEngagement />
      
      <div data-scroll-section>
        <Hero />
      </div>
      <div data-scroll-section>
        <ExperienceTheMagic />
      </div>
      <div data-scroll-section>
        <SubscriptionSection />
      </div>
      <div data-scroll-section>
        <FAQ />
      </div>
      <div data-scroll-section>
        <DocsSection />
      </div>
      <div data-scroll-section>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
