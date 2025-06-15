
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { DemoVideo } from '@/components/DemoVideo';
import { NovaInAction } from '@/components/NovaInAction';
import { SubscriptionCTA } from '@/components/SubscriptionCTA';
import { FAQ } from '@/components/FAQ';
import { DocsSection } from '@/components/DocsSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 text-white relative overflow-x-hidden">
      {/* Cosmic Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Stars */}
        {[...Array(100)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute animate-pulse opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            <div className="text-yellow-300 text-xs">✦</div>
          </div>
        ))}
        
        {/* Floating sparkles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute animate-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          >
            <div className="text-yellow-400 text-lg">✨</div>
          </div>
        ))}
        
        {/* Large floating orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>
      
      <Hero />
      <HowItWorks />
      <DemoVideo />
      <NovaInAction />
      <SubscriptionCTA />
      <FAQ />
      <DocsSection />
      <Footer />
    </div>
  );
};

export default Index;
