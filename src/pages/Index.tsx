
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-yellow-950/10 to-slate-950 text-white relative overflow-x-hidden">
      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,193,7,0.12),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,193,7,0.08),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(245,158,11,0.08),transparent_50%)]" />
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
          animation: float-slow 8s ease-in-out infinite;
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
          animation: wind-drift 8s ease-in-out infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(ellipse at center, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default Index;
