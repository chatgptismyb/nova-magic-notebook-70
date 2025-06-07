
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

  // Show email popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmailPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 bg-transparent">
      {/* Floating M Logo */}
      <div className="absolute top-20 right-20 animate-float">
        <img 
          src="/lovable-uploads/e2ed4fb4-a780-4aba-af58-acea7dcb1770.png" 
          alt="Magic Notebook Logo" 
          className="w-20 h-20 opacity-80 animate-pulse"
        />
      </div>

      {/* Floating Spell Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-yellow-400/30 rounded-full animate-spin" 
             style={{ animationDuration: '8s' }} />
        <div className="absolute top-40 right-32 w-12 h-12 border-2 border-amber-400/30 rounded-full animate-spin" 
             style={{ animationDuration: '12s', animationDirection: 'reverse' }} />
        <div className="absolute bottom-32 left-1/4 w-20 h-20 border-2 border-yellow-400/30 rounded-full animate-spin" 
             style={{ animationDuration: '15s' }} />
      </div>
      
      {/* Floating Notes with Commands */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 bg-yellow-400/20 p-3 rounded-lg backdrop-blur-sm border border-yellow-400/30 animate-float text-xs text-yellow-200" 
             style={{ animationDelay: '0s' }}>
          📝 /cast morning routine
        </div>
        <div className="absolute top-1/3 right-16 bg-amber-400/20 p-3 rounded-lg backdrop-blur-sm border border-amber-400/30 animate-float text-xs text-amber-200" 
             style={{ animationDelay: '2s' }}>
          ✨ /cast workout plan
        </div>
        <div className="absolute bottom-1/3 left-1/3 bg-yellow-400/20 p-3 rounded-lg backdrop-blur-sm border border-yellow-400/30 animate-float text-xs text-yellow-200" 
             style={{ animationDelay: '4s' }}>
          🎯 /cast project deadline
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300/50 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-6">
          <img 
            src="/lovable-uploads/e2ed4fb4-a780-4aba-af58-acea7dcb1770.png" 
            alt="Magic Notebook Logo" 
            className="w-16 h-16 md:w-20 md:h-20 animate-pulse"
          />
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
            {titleText}
            <span className="animate-pulse">|</span>
          </h1>
        </div>
        
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Write it. Wish it. <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">Watch it work.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 animate-fade-in">
            The magical notebook that transforms your thoughts into life-changing productivity spells.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            size="lg" 
            onClick={() => setShowEmailPopup(true)}
            className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-black px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 animate-pulse font-semibold"
          >
            ✨ Join the Magic
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-yellow-400/50 text-yellow-300 hover:bg-yellow-400/10 px-8 py-4 text-lg rounded-full"
          >
            🎭 Watch Nova Work
          </Button>
        </div>
        
        <div className="mt-12 animate-bounce">
          <div className="w-6 h-10 border-2 border-yellow-400/50 rounded-full mx-auto">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mx-auto mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      <EmailSignup isOpen={showEmailPopup} onClose={() => setShowEmailPopup(false)} />
    </section>
  );
};
