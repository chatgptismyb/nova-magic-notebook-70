
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
    small: 'w-40 h-72',
    medium: 'w-56 h-96',
    large: 'w-72 h-[500px]'
  };

  const nextScreen = () => {
    setActiveScreen((prev) => (prev + 1) % screens.length);
  };

  const prevScreen = () => {
    setActiveScreen((prev) => (prev - 1 + screens.length) % screens.length);
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <div className="relative w-full h-full bg-gradient-to-b from-slate-900 to-black rounded-[3rem] border-4 border-slate-800 shadow-2xl overflow-hidden cursor-pointer group hover:shadow-purple-400/20 transition-all duration-300">
        
        {/* iPhone outer frame */}
        <div className="absolute inset-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2.5rem] border border-slate-700">
          
          {/* Screen with dark purple background like reference */}
          <div className="absolute inset-3 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 rounded-[2rem] overflow-hidden transition-all duration-500 relative">
            
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
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="text-2xl">🧙‍♀️</div>
                </div>
                <div>
                  <span className="font-bold text-white text-lg block leading-tight">Magic Notebook</span>
                  <span className="text-sm text-purple-300">Nova brings your thoughts to life</span>
                </div>
              </div>
            </div>
            
            {/* Main Content Area */}
            <div className="relative z-10 px-6 flex-1 flex flex-col">
              {/* Welcome message like reference */}
              {activeScreen === 0 && (
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full animate-pulse opacity-30"></div>
                    <div className="relative w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-4xl shadow-lg">
                      🧙‍♀️
                    </div>
                    <div className="absolute -top-2 -right-2 text-2xl animate-bounce">✨</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Good morning!</h3>
                  <p className="text-purple-300 text-sm mb-4">What would you like to do?</p>
                  
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-4 mb-4 shadow-lg">
                    <span className="text-purple-900 font-bold text-lg">+ New Spell</span>
                  </div>
                </div>
              )}
              
              {/* Task/Spell Cards like reference */}
              <div className="space-y-3 flex-1">
                {activeScreen === 1 && (
                  <>
                    <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-2xl p-4 flex items-center justify-between shadow-lg">
                      <div>
                        <h4 className="font-bold text-purple-900 text-base">Schedule a dentist appointment</h4>
                        <span className="text-purple-700 text-sm">To-Do</span>
                      </div>
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <div className="text-lg">🧙‍♀️</div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-400 to-purple-500 rounded-2xl p-4 text-center shadow-lg">
                      <span className="text-white font-medium">Remind me to water the plants every morning</span>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-300 to-blue-400 rounded-2xl p-4 flex items-center justify-between shadow-lg">
                      <div>
                        <h4 className="font-bold text-purple-900 text-base">I felt overwhelmed at work today</h4>
                        <span className="text-purple-700 text-sm">Feeling</span>
                      </div>
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <div className="text-lg">🧙‍♀️</div>
                      </div>
                    </div>
                  </>
                )}
                
                {activeScreen === 2 && (
                  <>
                    <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-2xl p-4 shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                          <div className="text-white text-lg">🧙‍♀️</div>
                        </div>
                        <div>
                          <h4 className="font-bold text-purple-900">Remind me to water the plants every morning</h4>
                        </div>
                      </div>
                      
                      <div className="bg-white/80 rounded-xl p-3 mb-3">
                        <span className="text-purple-900 font-medium">1. Sure!</span>
                      </div>
                      
                      <div className="bg-white/80 rounded-xl p-3 mb-3">
                        <span className="text-purple-900 font-medium">2. Create a to-do for this task</span>
                      </div>
                      
                      <div className="bg-white/80 rounded-xl p-3">
                        <span className="text-purple-900 font-medium">3. Set it to repeat daily</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              {/* Bottom Navigation Bar like reference */}
              <div className="mt-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-3 flex justify-around items-center border border-slate-700">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 mb-1">📚</div>
                  <span className="text-xs text-purple-300">Notebook</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 mb-1">💬</div>
                  <span className="text-xs text-purple-300">Spell Chat</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 mb-1">🏪</div>
                  <span className="text-xs text-purple-300">Spell Store</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 mb-1">🧙‍♀️</div>
                  <span className="text-xs text-yellow-400 font-bold">Nova</span>
                </div>
              </div>
            </div>
            
            {/* Navigation controls for larger phones */}
            {size !== 'small' && (
              <div className="absolute bottom-20 left-0 right-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <button 
                  onClick={(e) => { e.stopPropagation(); prevScreen(); }}
                  className="w-10 h-10 bg-purple-500/30 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-purple-400/40 transition-colors border border-purple-400/40 shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                
                <div className="flex gap-2">
                  {screens.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); setActiveScreen(i); }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === activeScreen 
                          ? 'bg-purple-400 scale-125 shadow-lg' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={(e) => { e.stopPropagation(); nextScreen(); }}
                  className="w-10 h-10 bg-purple-500/30 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-purple-400/40 transition-colors border border-purple-400/40 shadow-lg"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            )}
            
            {/* Magical particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(8)].map((_, i) => (
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
                  <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
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
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-yellow-400/10 rounded-full blur-2xl -z-10 animate-pulse scale-110"></div>
      </div>
    </div>
  );
};
