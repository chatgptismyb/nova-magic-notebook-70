
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface InteractivePhoneProps {
  screens: {
    title: string;
    icon: string;
    color: string;
    content: string;
    description: string;
  }[];
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export const InteractivePhone = ({ screens, className = '', size = 'medium' }: InteractivePhoneProps) => {
  const [activeScreen, setActiveScreen] = useState(0);

  const sizeClasses = {
    small: 'w-36 h-60',
    medium: 'w-48 h-72',
    large: 'w-64 h-96'
  };

  const nextScreen = () => {
    setActiveScreen((prev) => (prev + 1) % screens.length);
  };

  const prevScreen = () => {
    setActiveScreen((prev) => (prev - 1 + screens.length) % screens.length);
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <div className="relative w-full h-full bg-slate-900 rounded-[2rem] border-6 border-slate-800 shadow-xl overflow-hidden cursor-pointer group">
        {/* Screen */}
        <div className={`absolute inset-2 bg-gradient-to-br ${screens[activeScreen].color} rounded-[1.5rem] overflow-hidden transition-all duration-500`}>
          
          {/* Status Bar */}
          <div className="flex justify-between items-center p-2 text-xs font-semibold opacity-80">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-3 h-1.5 border border-current rounded-sm">
                <div className="w-full h-full bg-green-400 rounded-sm"></div>
              </div>
            </div>
          </div>
          
          {/* App Header */}
          <div className="px-4 pb-2">
            <div className="flex items-center gap-2 mb-2 bg-white/20 p-2 rounded-lg backdrop-blur-sm">
              <img 
                src="/lovable-uploads/cb8ad732-ec0b-4d19-8ec7-5886d9f5bda1.png" 
                alt="Magic Notebook Logo" 
                className="w-6 h-6"
              />
              <span className="font-semibold text-sm">Magic Notebook</span>
            </div>
          </div>
          
          {/* Content */}
          <div className="px-4 flex-1 flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm p-1 mb-3 group-hover:scale-110 transition-transform duration-300">
              <div className="w-full h-full bg-white/30 rounded-full flex items-center justify-center text-2xl">
                {screens[activeScreen].icon}
              </div>
            </div>
            
            <h3 className="text-sm font-bold mb-1 text-center">{screens[activeScreen].title}</h3>
            <p className="text-xs text-center mb-2 opacity-80">{screens[activeScreen].description}</p>
            
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg border border-white/30 text-center">
              <p className="text-xs font-medium">
                {screens[activeScreen].content}
              </p>
            </div>
          </div>
          
          {/* Navigation */}
          {size !== 'small' && (
            <div className="absolute bottom-4 left-0 right-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={(e) => { e.stopPropagation(); prevScreen(); }}
                className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <div className="flex gap-1">
                {screens.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setActiveScreen(i); }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === activeScreen 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={(e) => { e.stopPropagation(); nextScreen(); }}
                className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
        
        {/* Click to cycle through on smaller phones */}
        {size === 'small' && (
          <div 
            onClick={nextScreen}
            className="absolute inset-0 z-10"
          />
        )}
      </div>
    </div>
  );
};
