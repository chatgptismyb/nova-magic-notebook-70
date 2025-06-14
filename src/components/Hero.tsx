
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, Star, ArrowDown, Play, Smartphone, Users, BookOpen } from 'lucide-react';
import { EmailSignup } from '@/components/EmailSignup';

export const Hero = () => {
  const [showEmailSignup, setShowEmailSignup] = useState(false);

  return (
    <>
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Enhanced magical background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating magical elements */}
          {[...Array(12)].map((_, i) => (
            <div
              key={`magic-${i}`}
              className="absolute animate-float-slow opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${12 + Math.random() * 6}s`
              }}
            >
              <div className="w-6 h-6 bg-gradient-to-br from-yellow-400/30 to-amber-400/30 rounded-full border border-yellow-300/20 backdrop-blur-sm" />
            </div>
          ))}
          
          {/* Magical sparkles */}
          {[...Array(20)].map((_, i) => (
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
              <div className="w-1 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full blur-sm" />
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Enhanced story-driven content */}
          <div className="space-y-8">
            {/* Logo with M book */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg border-2 border-yellow-300/60">
                <span className="text-2xl font-bold text-white">M</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-400">Magic Notebook</h3>
                <p className="text-yellow-300/80 text-sm">Dream. Write. Manifest.</p>
              </div>
            </div>

            {/* Magical badge */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 via-amber-400/20 to-yellow-500/20 px-6 py-3 rounded-full border border-yellow-400/40 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <Star className="w-5 h-5 text-yellow-300 animate-spin-slow" />
                <span className="text-yellow-200 font-semibold">The Future of Productivity is Magical</span>
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-ping" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent animate-shimmer bg-size-200">
                  Your Magic
                </span>
                <br />
                <span className="text-white drop-shadow-lg">Notebook</span>
              </h1>
              
              <p className="text-2xl text-yellow-200 font-medium">
                Dream. Write. Manifest.
              </p>
            </div>

            {/* Engaging story format */}
            <div className="space-y-6 text-gray-300">
              <p className="text-xl leading-relaxed">
                Imagine if your scattered thoughts could become <span className="text-yellow-300 font-semibold animate-pulse">powerful spells</span> that 
                actually transform your life. What if a simple note could trigger magical automation that reshapes your entire day?
              </p>
              
              <div className="bg-gradient-to-br from-yellow-900/60 via-slate-800/60 to-amber-900/60 p-8 rounded-3xl border border-yellow-400/30 backdrop-blur-sm relative overflow-hidden hover:scale-105 transition-all duration-500 group">
                {/* Magical glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating sparkles inside card */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute text-yellow-300 animate-ping text-xs"
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
                  <span className="text-yellow-300 text-2xl">🧙‍♀️ Meet Nova</span> — your magical AI companion who doesn't just take notes, 
                  she <span className="text-amber-300 font-semibold">weaves enchantments</span> from your words.
                </p>
                <ul className="space-y-3 text-gray-300 relative z-10">
                  <li className="flex items-center gap-3 hover:text-yellow-200 transition-colors">
                    <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full animate-pulse"></div>
                    Speak your dreams, watch them become actionable spells
                  </li>
                  <li className="flex items-center gap-3 hover:text-yellow-200 transition-colors">
                    <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    Connect every aspect of your life through intelligent magic
                  </li>
                  <li className="flex items-center gap-3 hover:text-yellow-200 transition-colors">
                    <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    Transform chaos into effortless, magical productivity
                  </li>
                </ul>
              </div>

              <p className="text-lg text-yellow-300 italic font-medium">
                "It's not just an app. It's the spell that turns your potential into reality."
              </p>
            </div>

            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => setShowEmailSignup(true)}
                className="bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-500 hover:from-yellow-700 hover:via-amber-600 hover:to-yellow-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-yellow-500/40 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce relative z-10" />
                <span className="relative z-10">🧙‍♀️ Join the Magic Circle</span>
              </Button>
              
              <Button
                variant="outline"
                className="border-2 border-yellow-400/60 text-yellow-200 hover:bg-yellow-500/20 hover:border-yellow-300 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/30 group"
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
                    <div key={i} className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full border-2 border-slate-900 animate-pulse" style={{ animationDelay: `${i * 0.5}s` }}></div>
                  ))}
                </div>
                <span className="text-yellow-300">12,000+ magical users</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
                <span className="ml-2 text-yellow-300">4.9/5 enchantment rating</span>
              </div>
            </div>
          </div>

          {/* Enhanced Phone Mockups Section */}
          <div className="relative">
            <div className="relative mx-auto w-96 h-96 perspective-1000">
              
              {/* Multiple Phone Mockups */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Main Center Phone */}
                <div className="relative z-20 w-64 h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border-4 border-yellow-400/50 shadow-xl shadow-yellow-500/30 animate-float overflow-hidden">
                  <div className="absolute inset-2 bg-gradient-to-br from-yellow-900/80 to-slate-900/80 rounded-2xl overflow-hidden">
                    {/* Screen Content */}
                    <div className="p-4 space-y-3 h-full">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold text-sm">M</span>
                        </div>
                        <span className="text-yellow-200 font-semibold">Magic Notebook</span>
                      </div>
                      
                      {/* Interactive Video Area */}
                      <div className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-2xl p-4 border border-yellow-400/30 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-amber-400/10 animate-pulse" />
                        <div className="relative z-10 text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-transform cursor-pointer group">
                            <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                            <div className="absolute inset-0 bg-yellow-400/20 rounded-full animate-ping group-hover:animate-none" />
                          </div>
                          <p className="text-yellow-200 text-sm font-medium">Watch Nova Work Her Magic</p>
                          <p className="text-yellow-300/70 text-xs mt-1">See how notes become spells</p>
                        </div>
                      </div>
                      
                      {/* Feature Preview */}
                      <div className="space-y-2">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="h-2 bg-gradient-to-r from-yellow-400/60 to-amber-400/60 rounded animate-pulse" style={{ animationDelay: `${i * 0.3}s`, width: `${70 + Math.random() * 30}%` }} />
                        ))}
                      </div>
                      
                      {/* Download CTA */}
                      <div className="mt-auto">
                        <button className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white font-bold py-3 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                          <Download className="w-4 h-4" />
                          Download Magic
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Left Side Phone */}
                <div className="absolute -left-24 top-8 w-48 h-72 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border-4 border-yellow-400/30 shadow-xl shadow-yellow-500/20 animate-float z-10 rotate-12" style={{ animationDelay: '1s', animationDuration: '8s' }}>
                  <div className="absolute inset-2 bg-gradient-to-br from-yellow-900/60 to-slate-900/60 rounded-2xl overflow-hidden">
                    <div className="p-3 space-y-2">
                      <div className="text-center text-xs text-yellow-200 mb-2">📱 Nova Chat</div>
                      <div className="space-y-1">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="h-1 bg-gradient-to-r from-yellow-400/40 to-amber-400/40 rounded animate-pulse" style={{ animationDelay: `${i * 0.2}s`, width: `${50 + Math.random() * 40}%` }} />
                        ))}
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <div className="w-6 h-6 bg-yellow-400 rounded-full animate-pulse" />
                        <div className="flex-1 h-1 bg-yellow-400/30 rounded" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side Phone */}
                <div className="absolute -right-24 top-12 w-48 h-72 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border-4 border-amber-400/30 shadow-xl shadow-amber-500/20 animate-float z-10 -rotate-12" style={{ animationDelay: '2s', animationDuration: '10s' }}>
                  <div className="absolute inset-2 bg-gradient-to-br from-amber-900/60 to-slate-900/60 rounded-2xl overflow-hidden">
                    <div className="p-3 space-y-2">
                      <div className="text-center text-xs text-amber-200 mb-2">✨ Spells Active</div>
                      <div className="space-y-2">
                        {['Morning Routine', 'Email Magic', 'Dream Planning'].map((spell, i) => (
                          <div key={i} className="bg-amber-400/20 rounded-lg p-2 text-xs text-amber-200 border border-amber-400/30">
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-amber-400 rounded-full animate-ping" />
                              {spell}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced floating magical elements */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-yellow-400/40 to-amber-400/40 rounded-full animate-pulse border border-yellow-300/60 flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-transform">
                <Star className="w-8 h-8 text-yellow-200 animate-spin-slow" />
              </div>
              
              <div className="absolute -bottom-12 -left-12 w-20 h-20 bg-gradient-to-br from-amber-400/40 to-yellow-400/40 rounded-full animate-bounce border border-amber-300/60 flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-transform">
                <div className="text-2xl animate-spin-slow">🪄</div>
              </div>

              {/* Stats floating around */}
              <div className="absolute top-0 left-0 bg-yellow-400/20 backdrop-blur-md px-3 py-2 rounded-full border border-yellow-400/40 animate-float">
                <div className="flex items-center gap-2 text-xs text-yellow-200">
                  <Users className="w-3 h-3" />
                  <span>12K+ Users</span>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 bg-amber-400/20 backdrop-blur-md px-3 py-2 rounded-full border border-amber-400/40 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 text-xs text-amber-200">
                  <BookOpen className="w-3 h-3" />
                  <span>50K+ Spells</span>
                </div>
              </div>
            </div>

            {/* Call to action arrow */}
            <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ArrowDown className="w-8 h-8 text-yellow-400 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      <EmailSignup isOpen={showEmailSignup} onClose={() => setShowEmailSignup(false)} />
    </>
  );
};
