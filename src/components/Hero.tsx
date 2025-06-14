
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { EmailSignup } from '@/components/EmailSignup';

export const Hero = () => {
  const [titleText, setTitleText] = useState('');
  const fullTitle = 'Magic Notebook';
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  
  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullTitle.length) {
        setTitleText(fullTitle.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  // Show email popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmailPopup(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 bg-gradient-to-br from-slate-950 via-yellow-950/20 to-slate-950 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-yellow-400/10 via-amber-400/5 to-transparent rounded-full animate-spin-slow" />
      </div>

      {/* Floating Phone Mockup */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 animate-float-slow hidden lg:block">
        <div className="relative">
          <div className="w-72 h-[600px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3rem] border-8 border-slate-700 shadow-2xl shadow-yellow-500/20 overflow-hidden">
            {/* Phone Screen */}
            <div className="w-full h-full bg-gradient-to-br from-slate-900 via-yellow-950/30 to-slate-900 relative overflow-hidden">
              {/* App Interface Preview */}
              <div className="p-6 h-full flex flex-col">
                {/* Status Bar */}
                <div className="flex justify-between items-center mb-8 text-white text-sm">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                  </div>
                </div>
                
                {/* App Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                    Magic Notebook
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">Your AI Companion</p>
                </div>
                
                {/* Chat Messages */}
                <div className="flex-1 space-y-4">
                  <div className="bg-yellow-500/20 p-3 rounded-2xl rounded-bl-sm border border-yellow-500/30">
                    <p className="text-yellow-100 text-sm">Ready to cast your morning routine spell? ✨</p>
                  </div>
                  <div className="bg-slate-700/50 p-3 rounded-2xl rounded-br-sm ml-8">
                    <p className="text-gray-300 text-sm">/cast workout plan</p>
                  </div>
                  <div className="bg-yellow-500/20 p-3 rounded-2xl rounded-bl-sm border border-yellow-500/30">
                    <p className="text-yellow-100 text-sm">Perfect! I've created your personalized workout spell 🏃‍♀️</p>
                  </div>
                </div>
                
                {/* Nova Avatar */}
                <div className="absolute bottom-6 right-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30 animate-pulse">
                    <img 
                      src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
                      alt="Nova Agent" 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating Sparkles */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-yellow-300 animate-ping text-xs"
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                >
                  ✨
                </div>
              ))}
            </div>
          </div>
          
          {/* Phone Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 rounded-[3rem] blur-xl -z-10 animate-pulse" />
        </div>
      </div>

      {/* Magical Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Command Notes */}
        <div className="absolute top-1/4 left-16 bg-gradient-to-r from-yellow-400/30 to-amber-400/30 p-4 rounded-xl backdrop-blur-sm border border-yellow-400/50 animate-float text-sm max-w-48 shadow-lg" 
             style={{ animationDelay: '0s' }}>
          <div className="flex items-center gap-2 text-yellow-100">
            <span className="text-lg">🌅</span>
            <span className="font-semibold">/cast morning routine</span>
          </div>
          <p className="text-xs text-yellow-200/80 mt-1">Wake up at 6 AM, meditate, coffee</p>
        </div>
        
        <div className="absolute top-1/3 right-32 bg-gradient-to-r from-amber-400/30 to-yellow-400/30 p-4 rounded-xl backdrop-blur-sm border border-amber-400/50 animate-float text-sm max-w-48 shadow-lg" 
             style={{ animationDelay: '2s' }}>
          <div className="flex items-center gap-2 text-amber-100">
            <span className="text-lg">🎯</span>
            <span className="font-semibold">/cast project deadline</span>
          </div>
          <p className="text-xs text-amber-200/80 mt-1">Break into tasks, set reminders</p>
        </div>
        
        <div className="absolute bottom-1/3 left-1/4 bg-gradient-to-r from-yellow-400/30 to-amber-400/30 p-4 rounded-xl backdrop-blur-sm border border-yellow-400/50 animate-float text-sm max-w-48 shadow-lg" 
             style={{ animationDelay: '4s' }}>
          <div className="flex items-center gap-2 text-yellow-100">
            <span className="text-lg">💪</span>
            <span className="font-semibold">/cast workout plan</span>
          </div>
          <p className="text-xs text-yellow-200/80 mt-1">30 min HIIT, track progress</p>
        </div>

        {/* Magic Circles */}
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-yellow-400/30 rounded-full animate-spin-slow" />
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-amber-400/30 rounded-full animate-spin-reverse" />
        <div className="absolute bottom-32 left-32 w-40 h-40 border border-yellow-400/20 rounded-full animate-spin-slow" />
      </div>

      {/* Main Content */}
      <div className="text-center z-10 max-w-4xl mx-auto lg:mr-96">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="relative">
            <img 
              src="/lovable-uploads/e2ed4fb4-a780-4aba-af58-acea7dcb1770.png" 
              alt="Magic Notebook Logo" 
              className="w-20 h-20 md:w-24 md:h-24 animate-float"
            />
            <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-lg animate-pulse" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent tracking-tight">
            {titleText}
            <span className="animate-pulse">|</span>
          </h1>
        </div>
        
        <div className="mb-12 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Write it. Wish it. 
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent animate-shimmer">
              Watch it work.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The magical AI notebook that transforms your thoughts into life-changing productivity spells. 
            <span className="text-yellow-300 font-semibold">Nova</span> is waiting to cast your first spell.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button 
            size="lg" 
            onClick={() => setShowEmailPopup(true)}
            className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-black px-10 py-6 text-xl rounded-full shadow-2xl shadow-yellow-500/25 transition-all duration-300 font-bold transform hover:scale-105 border-2 border-yellow-400/50"
          >
            <span className="mr-2">✨</span>
            Start Your Magic Journey
            <span className="ml-2">🪄</span>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-yellow-400/50 text-yellow-300 hover:bg-yellow-400/10 px-10 py-6 text-xl rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
          >
            <span className="mr-2">🎭</span>
            Watch Nova Work
          </Button>
        </div>
        
        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-6 rounded-2xl border border-yellow-500/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-xl font-bold text-yellow-300 mb-2">AI Agent Nova</h3>
            <p className="text-gray-300">Your magical companion who understands your needs</p>
          </div>
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-6 rounded-2xl border border-amber-500/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="text-xl font-bold text-amber-300 mb-2">Mobile First</h3>
            <p className="text-gray-300">Designed for your phone, optimized for magic</p>
          </div>
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-6 rounded-2xl border border-yellow-500/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-xl font-bold text-yellow-300 mb-2">Auto-Spells</h3>
            <p className="text-gray-300">Turn thoughts into automated productivity workflows</p>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-12 border-2 border-yellow-400/50 rounded-full mx-auto relative">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mx-auto mt-3 animate-pulse" />
          </div>
          <p className="text-yellow-300/70 text-sm mt-2">Scroll to see the magic</p>
        </div>
      </div>

      <EmailSignup isOpen={showEmailPopup} onClose={() => setShowEmailPopup(false)} />
    </section>
  );
};
