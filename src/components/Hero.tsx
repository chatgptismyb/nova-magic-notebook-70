
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const [titleText, setTitleText] = useState('');
  const fullTitle = '📖 Magic Notebook';
  
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
    <section className="min-h-screen flex items-center justify-center relative px-6">
      {/* Floating Spell Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-purple-400/30 rounded-full animate-spin" 
             style={{ animationDuration: '8s' }} />
        <div className="absolute top-40 right-32 w-12 h-12 border-2 border-blue-400/30 rounded-full animate-spin" 
             style={{ animationDuration: '12s', animationDirection: 'reverse' }} />
        <div className="absolute bottom-32 left-1/4 w-20 h-20 border-2 border-pink-400/30 rounded-full animate-spin" 
             style={{ animationDuration: '15s' }} />
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-300/50 rounded-full animate-pulse"
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
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          {titleText}
          <span className="animate-pulse">|</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in">
          Summon Nova. Cast your vision. Let your tasks complete themselves.
        </p>
        
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 animate-pulse"
        >
          ✨ Summon Nova
        </Button>
        
        <div className="mt-12 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full mx-auto">
            <div className="w-1 h-3 bg-purple-400 rounded-full mx-auto mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
