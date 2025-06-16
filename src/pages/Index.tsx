
import { Hero } from '@/components/Hero';
import { AppMockups } from '@/components/AppMockups';
import { SubscriptionSection } from '@/components/SubscriptionSection';
import { FAQ } from '@/components/FAQ';
import { DocsSection } from '@/components/DocsSection';
import { Footer } from '@/components/Footer';
import { ScrollEngagement } from '@/components/ScrollEngagement';
import { WebAppDemo } from '@/components/WebAppDemo';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-yellow-100 to-orange-300 text-slate-800 relative overflow-x-hidden">
      {/* Enhanced Background Pattern with oriole yellow */}
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
            <div className="text-orange-400 text-2xl animate-pulse">🌟</div>
          </div>
        ))}
        
        {/* Enhanced paper texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05),transparent_70%)]" />
      </div>
      
      {/* Scroll Engagement Layer */}
      <ScrollEngagement />
      
      <div data-scroll-section>
        <Hero />
      </div>
      <div data-scroll-section>
        <WebAppDemo />
      </div>
      <div data-scroll-section>
        <AppMockups />
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
