
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, Star, ArrowDown, Play, Smartphone, Users, BookOpen } from 'lucide-react';
import { EmailSignup } from '@/components/EmailSignup';

export const Hero = () => {
  const [showEmailSignup, setShowEmailSignup] = useState(false);

  return (
    <>
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Enhanced story-driven content with sticky note style */}
          <div className="space-y-8">
            {/* Logo with M book - Sticky Note Style */}
            <div className="bg-yellow-200 p-6 rounded-2xl shadow-lg border-l-8 border-amber-400 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg border-2 border-yellow-300/60 transform -rotate-2">
                  <span className="text-2xl font-bold text-white">M</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-amber-700">Magic Notebook</h3>
                  <p className="text-amber-600 text-sm">Dream. Write. Manifest.</p>
                </div>
              </div>
            </div>

            {/* Main headline sticky note */}
            <div className="bg-amber-100 p-8 rounded-2xl shadow-xl border-l-8 border-yellow-500 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3 bg-yellow-300/50 px-4 py-2 rounded-full border border-amber-400/40">
                  <Star className="w-5 h-5 text-amber-600 animate-spin-slow" />
                  <span className="text-amber-700 font-semibold text-sm">Revolutionary Productivity Magic</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                    Transform Your
                  </span>
                  <br />
                  <span className="text-slate-800">Scattered Thoughts</span>
                  <br />
                  <span className="text-amber-600">Into Magic</span>
                </h1>
              </div>
            </div>

            {/* Story sticky note */}
            <div className="bg-yellow-100 p-6 rounded-2xl shadow-lg border-l-6 border-amber-500 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <h2 className="text-xl font-bold text-amber-800 mb-3">📖 Your Story Starts Here</h2>
              <p className="text-slate-700 leading-relaxed">
                Imagine having a magical companion who turns your wildest dreams into actionable plans. 
                Meet <span className="font-bold text-amber-700">Nova</span> - your AI agent who doesn't just take notes, 
                she weaves <span className="italic text-amber-600">enchantments</span> from your words.
              </p>
            </div>

            {/* Benefits sticky notes grid */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-amber-50 p-4 rounded-xl shadow-md border-l-4 border-yellow-400 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-amber-700">Voice Magic</span>
                </div>
                <p className="text-sm text-slate-600">Speak your dreams, watch them become spells</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-xl shadow-md border-l-4 border-amber-400 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span className="font-semibold text-amber-700">Smart Automation</span>
                </div>
                <p className="text-sm text-slate-600">Connect every aspect of your life intelligently</p>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-xl shadow-md border-l-4 border-yellow-400 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span className="font-semibold text-amber-700">Chaos to Order</span>
                </div>
                <p className="text-sm text-slate-600">Transform scattered ideas into powerful productivity</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-xl shadow-md border-l-4 border-amber-400 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  <span className="font-semibold text-amber-700">Dream Manifestation</span>
                </div>
                <p className="text-sm text-slate-600">Turn potential into reality with magical workflows</p>
              </div>
            </div>

            {/* CTA sticky note */}
            <div className="bg-gradient-to-br from-amber-200 to-yellow-200 p-6 rounded-2xl shadow-xl border-l-8 border-amber-500 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <p className="text-lg text-amber-800 italic font-medium mb-4">
                "It's not just an app. It's the spell that turns your potential into reality."
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => setShowEmailSignup(true)}
                  className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-500 hover:from-amber-700 hover:via-yellow-600 hover:to-amber-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-amber-500/40 group relative overflow-hidden"
                >
                  <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  🧙‍♀️ Join the Magic Circle
                </Button>
                
                <Button
                  variant="outline"
                  className="border-2 border-amber-500/60 text-amber-700 hover:bg-amber-500/20 hover:border-amber-400 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-amber-400/30 group"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  ✨ Download Now
                </Button>
              </div>
            </div>

            {/* Social proof sticky note */}
            <div className="bg-yellow-100 p-4 rounded-xl shadow-md border-l-4 border-amber-400 transform -rotate-1">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full border-2 border-yellow-100" />
                    ))}
                  </div>
                  <span className="text-amber-700 font-medium">12,000+ magical users</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                  ))}
                  <span className="ml-2 text-amber-700 font-medium">4.9/5 enchantment rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Phone Mockups Section with Sticky Note Style */}
          <div className="relative">
            <div className="relative mx-auto w-96 h-96">
              
              {/* Main Center Phone as Sticky Note */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative z-20 w-64 h-96 bg-yellow-100 rounded-3xl border-8 border-amber-300 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden">
                  <div className="absolute inset-4 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl overflow-hidden border-2 border-amber-200">
                    
                    {/* Screen Content */}
                    <div className="p-4 space-y-3 h-full">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-4 bg-amber-100 p-2 rounded-xl">
                        <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold text-sm">M</span>
                        </div>
                        <span className="text-amber-700 font-semibold text-sm">Magic Notebook</span>
                      </div>
                      
                      {/* Large Interactive Video Area */}
                      <div className="bg-gradient-to-br from-yellow-200/80 to-amber-200/80 rounded-2xl p-6 border-2 border-amber-300/50 relative overflow-hidden flex-1">
                        <div className="text-center h-full flex flex-col justify-center">
                          <div className="w-20 h-20 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform cursor-pointer group shadow-lg">
                            <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                          </div>
                          <p className="text-amber-700 font-bold text-lg mb-2">Watch Nova Work Her Magic</p>
                          <p className="text-amber-600 text-sm">See how notes become spells</p>
                          
                          {/* Mini feature preview as sticky notes */}
                          <div className="mt-4 space-y-2">
                            <div className="bg-yellow-100 p-2 rounded text-xs text-amber-700 border border-amber-200">✨ Voice to Action</div>
                            <div className="bg-amber-100 p-2 rounded text-xs text-amber-700 border border-amber-200">🔮 Smart Automation</div>
                            <div className="bg-yellow-100 p-2 rounded text-xs text-amber-700 border border-amber-200">📝 Dream Planning</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Download CTA */}
                      <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-bold py-3 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                        <Download className="w-4 h-4" />
                        Download Magic
                      </button>
                    </div>
                  </div>
                </div>

                {/* Additional Phone Screens as Sticky Notes */}
                <div className="absolute -left-32 top-8 w-48 h-72 bg-amber-100 rounded-3xl border-6 border-yellow-300 shadow-xl transform rotate-12 hover:rotate-6 transition-transform duration-500 z-10">
                  <div className="p-4 text-center">
                    <div className="text-amber-700 font-bold text-sm mb-2">📱 Nova Chat</div>
                    <div className="space-y-2">
                      {['Morning Magic ✨', 'Email Spells 📧', 'Dream Planning 🌟'].map((item, i) => (
                        <div key={i} className="bg-yellow-50 p-2 rounded text-xs text-amber-600 border border-amber-200">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute -right-32 top-12 w-48 h-72 bg-yellow-100 rounded-3xl border-6 border-amber-300 shadow-xl transform -rotate-12 hover:-rotate-6 transition-transform duration-500 z-10">
                  <div className="p-4 text-center">
                    <div className="text-amber-700 font-bold text-sm mb-2">⚡ Active Spells</div>
                    <div className="space-y-2">
                      {['Productivity Boost', 'Creative Flow', 'Goal Tracker'].map((spell, i) => (
                        <div key={i} className="bg-amber-50 p-2 rounded text-xs text-amber-600 border border-yellow-300 flex items-center gap-2">
                          <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                          {spell}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stats as sticky notes */}
              <div className="absolute top-0 left-0 bg-yellow-200 px-4 py-2 rounded-xl border-2 border-amber-300 shadow-md transform rotate-3 hover:rotate-0 transition-transform">
                <div className="flex items-center gap-2 text-xs text-amber-700">
                  <Users className="w-3 h-3" />
                  <span className="font-bold">12K+ Users</span>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 bg-amber-200 px-4 py-2 rounded-xl border-2 border-yellow-300 shadow-md transform -rotate-3 hover:rotate-0 transition-transform">
                <div className="flex items-center gap-2 text-xs text-amber-700">
                  <BookOpen className="w-3 h-3" />
                  <span className="font-bold">50K+ Spells</span>
                </div>
              </div>
            </div>

            {/* Call to action arrow */}
            <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ArrowDown className="w-8 h-8 text-amber-500" />
            </div>
          </div>
        </div>
      </section>

      <EmailSignup isOpen={showEmailSignup} onClose={() => setShowEmailSignup(false)} />
    </>
  );
};
