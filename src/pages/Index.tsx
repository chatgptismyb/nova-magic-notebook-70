
import { Hero } from '@/components/Hero';
import { WhatItIs } from '@/components/WhatItIs';
import { Features } from '@/components/Features';
import { AppMockups } from '@/components/AppMockups';
import { NovaPersona } from '@/components/NovaPersona';
import { NotesSection } from '@/components/NotesSection';
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
      <FAQ />
      <Community />
      <Footer />
      <NovaCompanion />
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(1deg); }
          66% { transform: translateY(10px) rotate(-1deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-15px) translateX(5px) rotate(1deg); }
          50% { transform: translateY(-10px) translateX(-5px) rotate(-0.5deg); }
          75% { transform: translateY(-20px) translateX(3px) rotate(0.5deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes scale-in {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes wind-drift {
          0%, 100% { transform: translateX(0px) translateY(0px) rotate(0deg); }
          25% { transform: translateX(20px) translateY(-10px) rotate(2deg); }
          50% { transform: translateX(-15px) translateY(-20px) rotate(-1deg); }
          75% { transform: translateX(10px) translateY(-5px) rotate(1deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 12s linear infinite;
        }
        
        .animate-shimmer {
          background-size: 200% 200%;
          animation: shimmer 3s ease-in-out infinite;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        
        .animate-wind-drift {
          animation: wind-drift 10s ease-in-out infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(ellipse at center, var(--tw-gradient-stops));
        }
        
        .bg-size-200 {
          background-size: 200% 200%;
        }
      `}</style>
    </div>
  );
};

export default Index;
