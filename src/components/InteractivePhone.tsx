import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';

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
  showDownload?: boolean;
}

export const InteractivePhone = ({ 
  screens, 
  className = '', 
  size = 'medium',
  showDownload = false 
}: InteractivePhoneProps) => {
  const [activeScreen, setActiveScreen] = useState(0);

  // Auto-cycle through screens for better demonstration
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screens.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [screens.length]);

  const sizeClasses = {
    small: 'w-40 h-72',
    medium: 'w-56 h-96',
    large: 'w-80 h-[550px]'
  };

  const nextScreen = () => {
    setActiveScreen((prev) => (prev + 1) % screens.length);
  };

  const prevScreen = () => {
    setActiveScreen((prev) => (prev - 1 + screens.length) % screens.length);
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <div className="relative w-full h-full bg-gradient-to-b from-slate-900 to-black rounded-[3rem] border-4 border-slate-800 shadow-2xl overflow-hidden cursor-pointer group hover:shadow-orange-400/30 transition-all duration-300">
        
        {/* iPhone outer frame */}
        <div className="absolute inset-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2.5rem] border border-slate-700">
          
          {/* Screen with enhanced scrolling animation */}
          <div className="absolute inset-3 bg-gradient-to-br from-slate-900 via-orange-950 to-slate-900 rounded-[2rem] overflow-hidden transition-all duration-500 relative">
            
            {/* Dynamic notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-20"></div>
            
            {/* Status Bar */}
            <div className="relative z-10 flex justify-between items-center px-6 pt-8 pb-4 text-xs font-semibold text-white">
              <div className="flex items-center gap-1">
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
                <span className="ml-2">Magic</span>
              </div>
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-6 h-3 border border-white rounded-sm relative">
                  <div className="w-full h-full bg-green-400 rounded-sm"></div>
                </div>
              </div>
            </div>
            
            {/* App Header with Nova character */}
            <div className="relative z-10 px-6 pb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <img 
                    src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
                    alt="Nova" 
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <div>
                  <span className="font-bold text-white text-lg block leading-tight">Magic Notebook</span>
                  <span className="text-sm text-orange-300">Nova brings your thoughts to life</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced Main Content Area with smooth transitions */}
            <div className="relative z-10 px-6 flex-1 flex flex-col">
              {/* Screen transition container */}
              <div className="relative overflow-hidden rounded-2xl">
                <div 
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${activeScreen * 100}%)` }}
                >
                  {screens.map((screen, index) => (
                    <div key={index} className="w-full flex-shrink-0 p-4">
                      <div className={`bg-gradient-to-br ${screen.color} rounded-2xl p-6 min-h-[200px] flex flex-col justify-center items-center text-center border-2 border-white/20 shadow-lg`}>
                        <div className="text-4xl mb-4 animate-bounce">{screen.icon}</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{screen.title}</h3>
                        <p className="text-gray-700 text-sm mb-3">{screen.content}</p>
                        <p className="text-xs text-gray-600 italic">{screen.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Enhanced Navigation indicators */}
              <div className="mt-6 flex justify-center gap-2">
                {screens.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveScreen(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === activeScreen 
                        ? 'bg-orange-400 scale-125 shadow-lg' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
              
              {/* Bottom Navigation Bar */}
              <div className="mt-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-3 flex justify-around items-center border border-slate-700">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 mb-1">📚</div>
                  <span className="text-xs text-orange-300">Notebook</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 mb-1">💬</div>
                  <span className="text-xs text-orange-300">Spell Chat</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 mb-1">🏪</div>
                  <span className="text-xs text-orange-300">Spell Store</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 mb-1">
                    <img 
                      src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
                      alt="Nova" 
                      className="w-6 h-6 rounded-full"
                    />
                  </div>
                  <span className="text-xs text-orange-400 font-bold">Nova</span>
                </div>
              </div>
            </div>
            
            {/* Navigation controls for larger phones */}
            {size !== 'small' && (
              <div className="absolute bottom-20 left-0 right-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <button 
                  onClick={(e) => { e.stopPropagation(); prevScreen(); }}
                  className="w-10 h-10 bg-orange-500/30 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-orange-400/40 transition-colors border border-orange-400/40 shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                
                <button 
                  onClick={(e) => { e.stopPropagation(); nextScreen(); }}
                  className="w-10 h-10 bg-orange-500/30 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-orange-400/40 transition-colors border border-orange-400/40 shadow-lg"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            )}
            
            {/* Enhanced magical particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-ping opacity-30"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random()}s`
                  }}
                >
                  <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Click to cycle through on smaller phones */}
          {size === 'small' && (
            <div 
              onClick={nextScreen}
              className="absolute inset-0 z-30"
            />
          )}
        </div>
        
        {/* Phone glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-yellow-400/10 rounded-full blur-2xl -z-10 animate-pulse scale-110"></div>
      </div>
      
      {/* Download buttons */}
      {showDownload && (
        <div className="mt-6 flex flex-col gap-3">
          <button className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-3 rounded-2xl border-2 border-slate-700 hover:scale-105 transition-transform cursor-pointer shadow-xl group">
            <div className="flex items-center gap-3">
              <Download className="text-white w-5 h-5" />
              <div className="text-left">
                <div className="text-sm font-bold">App Store</div>
              </div>
            </div>
          </button>
          <button className="bg-gradient-to-r from-green-600 to-green-700 text-white p-3 rounded-2xl border-2 border-green-500 hover:scale-105 transition-transform cursor-pointer shadow-xl group">
            <div className="flex items-center gap-3">
              <Download className="text-white w-5 h-5" />
              <div className="text-left">
                <div className="text-sm font-bold">Google Play</div>
              </div>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};