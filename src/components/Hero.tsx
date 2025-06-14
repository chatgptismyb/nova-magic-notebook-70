
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, Star, ArrowDown } from 'lucide-react';
import { EmailSignup } from '@/components/EmailSignup';

export const Hero = () => {
  const [showEmailSignup, setShowEmailSignup] = useState(false);

  return (
    <>
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Enhanced magical background particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-slow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full opacity-60 blur-sm" />
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Story-driven content */}
          <div className="space-y-8">
            {/* Story hook */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 px-6 py-3 rounded-full border border-yellow-500/30">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-300 font-semibold">The Future of Productivity is Here</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                  Your Magic
                </span>
                <br />
                <span className="text-white">Notebook</span>
              </h1>
            </div>

            {/* Engaging story format */}
            <div className="space-y-6 text-gray-300">
              <p className="text-xl leading-relaxed">
                Imagine if your scattered thoughts could become <span className="text-yellow-400 font-semibold">powerful spells</span> that 
                actually change your life. What if a simple note could trigger a chain of automation that transforms your entire day?
              </p>
              
              <div className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 p-6 rounded-2xl border border-yellow-500/20 backdrop-blur-sm">
                <p className="text-lg mb-4">
                  <span className="text-yellow-400">✨ Meet Nova</span> — your AI companion who doesn't just take notes, 
                  she <span className="text-amber-300 font-semibold">weaves magic</span> from your words.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    Speak your dreams, watch them become actionable plans
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    Connect every aspect of your life through intelligent automation
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    Transform chaos into magical, effortless productivity
                  </li>
                </ul>
              </div>

              <p className="text-lg text-gray-400 italic">
                "It's not just an app. It's the spell that turns your potential into reality."
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => setShowEmailSignup(true)}
                className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-500/25 group"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Join the Magic Circle
              </Button>
              
              <Button
                variant="outline"
                className="border-2 border-yellow-500/50 text-yellow-300 hover:bg-yellow-500/10 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                Download App
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-8 pt-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full border-2 border-slate-900"></div>
                  ))}
                </div>
                <span>10,000+ wizards</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2">4.9/5 magic rating</span>
              </div>
            </div>
          </div>

          {/* Enhanced 3D Notebook visualization */}
          <div className="relative">
            <div className="relative mx-auto w-96 h-96 perspective-1000">
              {/* Main notebook */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-amber-400/30 to-yellow-500/20 rounded-3xl border-4 border-yellow-500/40 shadow-2xl shadow-yellow-500/20 transform-gpu animate-float backdrop-blur-sm">
                {/* Notebook cover */}
                <div className="absolute inset-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-yellow-400/30 overflow-hidden">
                  {/* Magic sparkles inside */}
                  <div className="absolute inset-0">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute animate-ping"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${Math.random() * 3}s`,
                          animationDuration: `${2 + Math.random()}s`
                        }}
                      >
                        <div className="w-1 h-1 bg-yellow-300 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Notebook content preview */}
                  <div className="p-6 relative z-10">
                    <div className="space-y-4">
                      <div className="h-2 bg-gradient-to-r from-yellow-400/60 to-transparent rounded"></div>
                      <div className="h-2 bg-gradient-to-r from-amber-400/40 to-transparent rounded w-3/4"></div>
                      <div className="h-2 bg-gradient-to-r from-yellow-400/60 to-transparent rounded w-1/2"></div>
                      
                      <div className="mt-8 space-y-2">
                        <div className="flex items-center gap-2 text-xs text-yellow-300">
                          <div className="w-4 h-4 bg-yellow-400/30 rounded border border-yellow-400/50"></div>
                          <span>/cast morning routine</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-amber-300">
                          <div className="w-4 h-4 bg-amber-400/30 rounded border border-amber-400/50"></div>
                          <span>/automate email workflow</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-yellow-300">
                          <div className="w-4 h-4 bg-yellow-400/30 rounded border border-yellow-400/50"></div>
                          <span>/plan dream vacation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating magical elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-yellow-400/30 to-amber-400/30 rounded-full animate-pulse border border-yellow-400/50 flex items-center justify-center backdrop-blur-sm">
                <Star className="w-8 h-8 text-yellow-300 animate-spin-slow" />
              </div>
              
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-amber-400/30 to-yellow-400/30 rounded-full animate-bounce border border-amber-400/50 flex items-center justify-center backdrop-blur-sm">
                <div className="text-2xl">🪄</div>
              </div>
            </div>

            {/* Call to action arrow */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ArrowDown className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
        </div>
      </section>

      <EmailSignup isOpen={showEmailSignup} onClose={() => setShowEmailSignup(false)} />
    </>
  );
};
