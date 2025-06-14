
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, Star, ArrowDown, Play } from 'lucide-react';
import { EmailSignup } from '@/components/EmailSignup';

export const Hero = () => {
  const [showEmailSignup, setShowEmailSignup] = useState(false);

  return (
    <>
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Enhanced magical background with floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating sticky note cubes */}
          {[...Array(15)].map((_, i) => (
            <div
              key={`cube-${i}`}
              className="absolute animate-float-slow opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${12 + Math.random() * 6}s`
              }}
            >
              <div className="w-4 h-4 bg-gradient-to-br from-purple-400/30 to-yellow-400/30 rounded border border-purple-300/20 backdrop-blur-sm transform rotate-12" />
            </div>
          ))}
          
          {/* Magical sparkles */}
          {[...Array(25)].map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              <div className="w-1 h-1 bg-gradient-to-r from-purple-400 to-yellow-400 rounded-full blur-sm" />
            </div>
          ))}

          {/* Floating orbs */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`orb-${i}`}
              className="absolute animate-wind-drift opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 5}s`
              }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400/40 to-yellow-400/40 rounded-full blur-md" />
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Enhanced story-driven content */}
          <div className="space-y-8">
            {/* Magical badge */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 via-purple-400/20 to-yellow-500/20 px-6 py-3 rounded-full border border-purple-400/40 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <Star className="w-5 h-5 text-purple-300 animate-spin-slow" />
                <span className="text-purple-200 font-semibold">The Future of Productivity is Magical</span>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-yellow-400 to-purple-400 bg-clip-text text-transparent animate-shimmer bg-size-200">
                  Your Magic
                </span>
                <br />
                <span className="text-white drop-shadow-lg">Notebook</span>
              </h1>
              
              <p className="text-2xl text-purple-200 font-medium">
                Dream. Write. Manifest.
              </p>
            </div>

            {/* Engaging story format with enhanced styling */}
            <div className="space-y-6 text-gray-300">
              <p className="text-xl leading-relaxed">
                Imagine if your scattered thoughts could become <span className="text-purple-300 font-semibold animate-pulse">powerful spells</span> that 
                actually transform your life. What if a simple note could trigger magical automation that reshapes your entire day?
              </p>
              
              <div className="bg-gradient-to-br from-purple-900/60 via-slate-800/60 to-purple-900/60 p-8 rounded-3xl border border-purple-400/30 backdrop-blur-sm relative overflow-hidden hover:scale-105 transition-all duration-500 group">
                {/* Magical glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating sparkles inside card */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute text-purple-300 animate-ping text-xs"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        animationDelay: `${Math.random() * 2}s`
                      }}
                    >
                      ✨
                    </div>
                  ))}
                </div>
                
                <p className="text-lg mb-4 relative z-10">
                  <span className="text-purple-300 text-2xl">🧙‍♀️ Meet Nova</span> — your magical AI companion who doesn't just take notes, 
                  she <span className="text-yellow-300 font-semibold">weaves enchantments</span> from your words.
                </p>
                <ul className="space-y-3 text-gray-300 relative z-10">
                  <li className="flex items-center gap-3 hover:text-purple-200 transition-colors">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-yellow-400 rounded-full animate-pulse"></div>
                    Speak your dreams, watch them become actionable spells
                  </li>
                  <li className="flex items-center gap-3 hover:text-purple-200 transition-colors">
                    <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    Connect every aspect of your life through intelligent magic
                  </li>
                  <li className="flex items-center gap-3 hover:text-purple-200 transition-colors">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    Transform chaos into effortless, magical productivity
                  </li>
                </ul>
              </div>

              <p className="text-lg text-purple-300 italic font-medium">
                "It's not just an app. It's the spell that turns your potential into reality."
              </p>
            </div>

            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => setShowEmailSignup(true)}
                className="bg-gradient-to-r from-purple-600 via-purple-500 to-yellow-500 hover:from-purple-700 hover:via-purple-600 hover:to-yellow-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/40 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce relative z-10" />
                <span className="relative z-10">🧙‍♀️ Join the Magic Circle</span>
              </Button>
              
              <Button
                variant="outline"
                className="border-2 border-purple-400/60 text-purple-200 hover:bg-purple-500/20 hover:border-purple-300 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-400/30 group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                ✨ Download Now
              </Button>
            </div>

            {/* Enhanced social proof */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-8 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-r from-purple-400 to-yellow-400 rounded-full border-2 border-slate-900 animate-pulse" style={{ animationDelay: `${i * 0.5}s` }}></div>
                  ))}
                </div>
                <span className="text-purple-300">12,000+ magical users</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
                <span className="ml-2 text-purple-300">4.9/5 enchantment rating</span>
              </div>
            </div>
          </div>

          {/* Enhanced 3D Notebook with phone mockup */}
          <div className="relative">
            <div className="relative mx-auto w-96 h-96 perspective-1000">
              {/* Main floating notebook with enhanced effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 via-yellow-400/20 to-purple-500/30 rounded-3xl border-4 border-purple-400/50 shadow-2xl shadow-purple-500/30 transform-gpu animate-float backdrop-blur-md relative overflow-hidden">
                {/* Magical aura effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-yellow-400/20 rounded-3xl blur-xl animate-pulse" />
                
                {/* Notebook cover with enhanced transparency */}
                <div className="absolute inset-4 bg-gradient-to-br from-purple-900/60 via-slate-800/60 to-purple-900/60 rounded-2xl border border-purple-300/40 overflow-hidden backdrop-blur-sm">
                  {/* Enhanced magic sparkles inside */}
                  <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute animate-ping"
                        style={{
                          left: `${15 + Math.random() * 70}%`,
                          top: `${15 + Math.random() * 70}%`,
                          animationDelay: `${Math.random() * 4}s`,
                          animationDuration: `${2 + Math.random() * 2}s`
                        }}
                      >
                        <div className="w-1 h-1 bg-gradient-to-r from-purple-300 to-yellow-300 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Enhanced notebook content preview */}
                  <div className="p-6 relative z-10 space-y-4">
                    <div className="text-center mb-4">
                      <div className="text-2xl mb-2 animate-bounce">📓</div>
                      <div className="text-sm text-purple-200 font-semibold">Magic Notebook</div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="h-2 bg-gradient-to-r from-purple-400/80 to-transparent rounded animate-pulse"></div>
                      <div className="h-2 bg-gradient-to-r from-yellow-400/60 to-transparent rounded w-3/4 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="h-2 bg-gradient-to-r from-purple-400/80 to-transparent rounded w-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                    
                    <div className="mt-6 space-y-2">
                      <div className="flex items-center gap-2 text-xs text-purple-200 hover:text-yellow-200 transition-colors">
                        <div className="w-4 h-4 bg-purple-400/40 rounded border border-purple-300/60 flex items-center justify-center">✨</div>
                        <span>/cast morning routine</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-yellow-200 hover:text-purple-200 transition-colors">
                        <div className="w-4 h-4 bg-yellow-400/40 rounded border border-yellow-300/60 flex items-center justify-center">🔮</div>
                        <span>/weave email magic</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-purple-200 hover:text-yellow-200 transition-colors">
                        <div className="w-4 h-4 bg-purple-400/40 rounded border border-purple-300/60 flex items-center justify-center">🌟</div>
                        <span>/manifest dreams</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating phone mockup */}
              <div className="absolute -bottom-8 -right-16 w-32 h-56 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border-4 border-purple-400/50 shadow-xl shadow-purple-500/30 animate-float" style={{ animationDelay: '1s', animationDuration: '8s' }}>
                <div className="absolute inset-2 bg-gradient-to-br from-purple-900/80 to-slate-900/80 rounded-2xl overflow-hidden">
                  <div className="p-3 space-y-2">
                    <div className="text-center text-xs text-purple-200 mb-2">📱 Magic Notebook</div>
                    <div className="space-y-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-1 bg-gradient-to-r from-purple-400/60 to-yellow-400/60 rounded animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
                      ))}
                    </div>
                    <div className="mt-3 flex justify-center">
                      <div className="w-16 h-6 bg-gradient-to-r from-purple-500 to-yellow-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group">
                        <Download className="w-3 h-3 text-white animate-bounce" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced floating magical elements */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-purple-400/40 to-yellow-400/40 rounded-full animate-pulse border border-purple-300/60 flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-transform">
                <Star className="w-8 h-8 text-purple-200 animate-spin-slow" />
              </div>
              
              <div className="absolute -bottom-12 -left-12 w-20 h-20 bg-gradient-to-br from-yellow-400/40 to-purple-400/40 rounded-full animate-bounce border border-yellow-300/60 flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-transform">
                <div className="text-2xl animate-spin-slow">🪄</div>
              </div>

              {/* Play button for demo video */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-all duration-300 group cursor-pointer z-20">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600/90 to-yellow-600/90 rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm border border-purple-300/50 hover:scale-110 transition-all duration-300">
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-purple-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  Watch Nova Work
                </div>
              </div>
            </div>

            {/* Call to action arrow with enhanced animation */}
            <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ArrowDown className="w-8 h-8 text-purple-400 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      <EmailSignup isOpen={showEmailSignup} onClose={() => setShowEmailSignup(false)} />
    </>
  );
};
