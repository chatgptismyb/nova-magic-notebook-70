
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const [titleText, setTitleText] = useState('');
  const fullTitle = 'Magic Notebook';
  
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

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 bg-transparent">
      {/* Floating Spell Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-yellow-400/30 rounded-full animate-spin" 
             style={{ animationDuration: '8s' }} />
        <div className="absolute top-40 right-32 w-12 h-12 border-2 border-amber-400/30 rounded-full animate-spin" 
             style={{ animationDuration: '12s', animationDirection: 'reverse' }} />
        <div className="absolute bottom-32 left-1/4 w-20 h-20 border-2 border-yellow-400/30 rounded-full animate-spin" 
             style={{ animationDuration: '15s' }} />
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
            src="/lovable-uploads/44eb1985-1aa9-4c97-9fcd-56c35ff27b53.png" 
            alt="Magic Notebook Logo" 
            className="w-16 h-16 md:w-20 md:h-20 animate-pulse"
          />
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
            {titleText}
            <span className="animate-pulse">|</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in">
          Summon Nova. Cast your vision. Let your tasks complete themselves.
        </p>
        
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-black px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 animate-pulse font-semibold"
        >
          ✨ Summon Nova
        </Button>
        
        <div className="mt-12 animate-bounce">
          <div className="w-6 h-10 border-2 border-yellow-400/50 rounded-full mx-auto">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mx-auto mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
