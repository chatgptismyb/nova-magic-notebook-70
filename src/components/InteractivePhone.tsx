
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

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
      <div className="relative w-full h-full bg-gradient-to-b from-slate-900 to-black rounded-[2.5rem] border-4 border-amber-400 shadow-2xl overflow-hidden cursor-pointer group hover:shadow-amber-400/40 transition-all duration-300">
        
        {/* Phone outer frame with enhanced styling */}
        <div className="absolute inset-1 bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2rem] border-2 border-amber-300/30">
          
          {/* Screen with enhanced magical styling */}
          <div className={`absolute inset-3 bg-gradient-to-br ${screens[activeScreen].color} rounded-[1.5rem] overflow-hidden transition-all duration-500 relative`}>
            
            {/* Magical glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/10 to-purple-300/10 animate-pulse"></div>
            
            {/* Enhanced Status Bar */}
            <div className="relative z-10 flex justify-between items-center p-3 text-xs font-semibold bg-black/10 backdrop-blur-sm">
              <div className="flex items-center gap-1">
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-current rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-current rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1 h-1 bg-current rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <span className="ml-2">Magic</span>
              </div>
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 border border-current rounded-sm relative">
                  <div className="w-full h-full bg-green-400 rounded-sm animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Enhanced App Header */}
            <div className="relative z-10 px-4 pb-3">
              <div className="flex items-center gap-3 mb-3 bg-white/30 backdrop-blur-md p-3 rounded-xl border border-white/40 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <div>
                  <span className="font-bold text-sm block leading-tight">Magic Notebook</span>
                  <span className="text-xs opacity-80">Your AI Companion</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced Content */}
            <div className="relative z-10 px-4 flex-1 flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-2xl bg-white/30 backdrop-blur-md p-2 mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/40 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-purple-400/20 animate-pulse"></div>
                <div className="relative w-full h-full bg-white/40 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl shadow-inner">
                  {screens[activeScreen].icon}
                </div>
              </div>
              
              <h3 className="text-base font-bold mb-2 text-center leading-tight">{screens[activeScreen].title}</h3>
              <p className="text-xs text-center mb-3 opacity-90 leading-relaxed px-2">{screens[activeScreen].description}</p>
              
              <div className="bg-white/30 backdrop-blur-md p-3 rounded-xl border border-white/40 text-center shadow-lg relative overflow-hidden max-w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-purple-400/10"></div>
                <p className="relative text-xs font-medium leading-relaxed">
                  {screens[activeScreen].content}
                </p>
                
                {/* Magical sparkles */}
                <div className="absolute top-1 right-1">
                  <Sparkles className="w-3 h-3 text-yellow-500 animate-pulse" />
                </div>
              </div>
            </div>
            
            {/* Enhanced Navigation for larger phones */}
            {size !== 'small' && (
              <div className="absolute bottom-4 left-0 right-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <button 
                  onClick={(e) => { e.stopPropagation(); prevScreen(); }}
                  className="w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-colors border border-white/40 shadow-lg group"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
                
                <div className="flex gap-2">
                  {screens.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); setActiveScreen(i); }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        i === activeScreen 
                          ? 'bg-white scale-125 shadow-lg' 
                          : 'bg-white/50 hover:bg-white/70 hover:scale-110'
                      }`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={(e) => { e.stopPropagation(); nextScreen(); }}
                  className="w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-colors border border-white/40 shadow-lg group"
                >
                  <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            )}
          </div>
          
          {/* Click to cycle through on smaller phones */}
          {size === 'small' && (
            <div 
              onClick={nextScreen}
              className="absolute inset-0 z-30"
            />
          )}
        </div>
      </div>
    </div>
  );
};
