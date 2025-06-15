
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Star, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { OnboardingModal } from '@/components/OnboardingModal';

export const Hero = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [currentWish, setCurrentWish] = useState('plan an event');
  
  const wishes = ['plan an event', 'organize my week', 'write a story', 'learn something new', 'start a project'];

  // Cycle through wishes
  useState(() => {
    const interval = setInterval(() => {
      setCurrentWish(prev => {
        const currentIndex = wishes.indexOf(prev);
        return wishes[(currentIndex + 1) % wishes.length];
      });
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-purple-900/80 backdrop-blur-md border-b border-purple-500/30">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/cb8ad732-ec0b-4d19-8ec7-5886d9f5bda1.png" 
                alt="Magic Notebook Logo" 
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-yellow-300">Magic Notebook</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-6">
              <Link to="/showcase" className="text-purple-200 hover:text-yellow-300 font-medium transition-colors">
                Demo
              </Link>
              <Link to="/subscription" className="text-purple-200 hover:text-yellow-300 font-medium transition-colors">
                Pricing
              </Link>
              <Link to="/login" className="text-purple-200 hover:text-yellow-300 font-medium transition-colors">
                Login
              </Link>
              <Link 
                to="/signup"
                className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-purple-900 font-bold py-2 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start Free
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center px-6 relative pt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left Side - Scrolling Notes & Nova */}
          <div className="space-y-8">
            
            {/* Floating Sticky Notes */}
            <div className="relative">
              {/* Main editable scroll */}
              <div className="bg-gradient-to-br from-yellow-200 to-amber-200 p-6 rounded-2xl shadow-xl border-l-8 border-yellow-500 transform rotate-2 hover:rotate-0 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-4 w-6 h-4 bg-yellow-400/60 rounded-b-lg"></div>
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl font-bold text-purple-800 leading-tight">
                    Magic Notebook
                  </h1>
                  <div className="text-xl text-purple-700">
                    I need to{' '}
                    <span className="inline-block min-w-[200px] text-purple-900 font-semibold border-b-2 border-purple-400 animate-pulse">
                      {currentWish}
                    </span>
                  </div>
                </div>
                
                {/* Sparkles around the note */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-yellow-500 animate-ping opacity-70"
                    style={{
                      left: `${10 + Math.random() * 80}%`,
                      top: `${10 + Math.random() * 80}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      fontSize: '0.8rem'
                    }}
                  >
                    ✨
                  </div>
                ))}
              </div>

              {/* Flying sticky notes */}
              <div className="absolute -top-12 -right-8 bg-blue-200 p-3 rounded-lg shadow-lg transform -rotate-12 animate-float border-l-4 border-blue-400">
                <p className="text-blue-800 text-sm font-medium">✓ Buy groceries</p>
              </div>
              
              <div className="absolute -bottom-8 -left-4 bg-green-200 p-3 rounded-lg shadow-lg transform rotate-6 animate-float border-l-4 border-green-400" style={{ animationDelay: '1s' }}>
                <p className="text-green-800 text-sm font-medium">📅 Team meeting</p>
              </div>
              
              <div className="absolute top-1/2 -right-12 bg-pink-200 p-2 rounded-lg shadow-lg transform rotate-12 animate-float border-l-4 border-pink-400" style={{ animationDelay: '2s' }}>
                <p className="text-pink-800 text-xs font-medium">💡 Great idea!</p>
              </div>
            </div>

            {/* Nova Face - Interactive */}
            <div className="flex justify-center">
              <div className="relative group cursor-pointer" onClick={() => setShowOnboarding(true)}>
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-300 to-amber-400 p-2 shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 group-hover:scale-110">
                  <img 
                    src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
                    alt="Nova - Your AI Companion" 
                    className="w-full h-full object-cover rounded-full animate-nova-breathe"
                  />
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-amber-400/20 animate-pulse group-hover:opacity-100 opacity-60 transition-opacity duration-300"></div>
                
                {/* Floating sparkles around Nova */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-yellow-400 animate-sparkle-dance opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      left: `${-20 + Math.random() * 140}%`,
                      top: `${-20 + Math.random() * 140}%`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  >
                    ✨
                  </div>
                ))}
              </div>
            </div>

            {/* Subtitle */}
            <div className="text-center">
              <p className="text-2xl text-purple-100 mb-6 leading-relaxed">
                Let Nova help turn your wishes into reality
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <button
                onClick={() => setShowOnboarding(true)}
                className="group bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-500 hover:via-amber-500 hover:to-yellow-600 text-purple-900 font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-yellow-500/50 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 animate-shimmer"></div>
                <div className="relative flex items-center gap-3 text-lg">
                  <Sparkles className="w-6 h-6 group-hover:animate-spin" />
                  Get Started
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Side - 3 Magical Checkboxes */}
          <div className="space-y-8">
            {/* Checkbox 1 */}
            <div className="bg-gradient-to-br from-purple-800/60 to-purple-700/60 p-6 rounded-2xl border border-purple-500/50 backdrop-blur-sm hover:scale-105 transition-all duration-500 group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center shadow-lg group-hover:animate-bounce">
                  <span className="text-purple-900 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-300 mb-2">Smart Task Creation</h3>
                  <p className="text-purple-200">Nova transforms your thoughts into actionable tasks automatically</p>
                </div>
              </div>
            </div>

            {/* Checkbox 2 */}
            <div className="bg-gradient-to-br from-purple-800/60 to-purple-700/60 p-6 rounded-2xl border border-purple-500/50 backdrop-blur-sm hover:scale-105 transition-all duration-500 group cursor-pointer" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center shadow-lg group-hover:animate-bounce">
                  <span className="text-purple-900 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-300 mb-2">Magical Automation</h3>
                  <p className="text-purple-200">Connect your tools and watch your workflow become effortless</p>
                </div>
              </div>
            </div>

            {/* Checkbox 3 */}
            <div className="bg-gradient-to-br from-purple-800/60 to-purple-700/60 p-6 rounded-2xl border border-purple-500/50 backdrop-blur-sm hover:scale-105 transition-all duration-500 group cursor-pointer" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center shadow-lg group-hover:animate-bounce">
                  <span className="text-purple-900 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-300 mb-2">Emotional Intelligence</h3>
                  <p className="text-purple-200">Nova understands context and adapts to your unique style</p>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="text-center mt-8">
              <div className="flex items-center justify-center gap-4 text-sm">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full border-2 border-purple-800" />
                  ))}
                </div>
                <span className="text-purple-200 font-medium">12,000+ magical users</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-purple-200 font-medium">4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OnboardingModal isOpen={showOnboarding} onClose={() => setShowOnboarding(false)} />
    </>
  );
};
