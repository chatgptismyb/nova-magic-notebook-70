
import { Hero } from '@/components/Hero';
import { WhatItIs } from '@/components/WhatItIs';
import { Features } from '@/components/Features';
import { AppMockups } from '@/components/AppMockups';
import { NovaPersona } from '@/components/NovaPersona';
import { NotesSection } from '@/components/NotesSection';
import { Community } from '@/components/Community';
import { Footer } from '@/components/Footer';
import { NovaCompanion } from '@/components/NovaCompanion';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-yellow-950 to-slate-950 text-white relative overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,193,7,0.15),transparent_70%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <Hero />
      <WhatItIs />
      <Features />
      <AppMockups />
      <NovaPersona />
      <NotesSection />
      <Community />
      <Footer />
      <NovaCompanion />
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(1deg); }
          66% { transform: translateY(10px) rotate(-1deg); }
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
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        
        .animate-wind-drift {
          animation: wind-drift 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;
