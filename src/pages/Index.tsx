
import { Hero } from '@/components/Hero';
import { WhatItIs } from '@/components/WhatItIs';
import { Features } from '@/components/Features';
import { NovaPersona } from '@/components/NovaPersona';
import { Community } from '@/components/Community';
import { Footer } from '@/components/Footer';
import { NovaCompanion } from '@/components/NovaCompanion';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 text-white relative overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,69,195,0.1),transparent_70%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <Hero />
      <WhatItIs />
      <Features />
      <NovaPersona />
      <Community />
      <Footer />
      <NovaCompanion />
    </div>
  );
};

export default Index;
