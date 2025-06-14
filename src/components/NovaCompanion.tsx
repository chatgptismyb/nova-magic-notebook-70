
import { useState, useEffect } from 'react';
import { X, Mail } from 'lucide-react';
import { EmailSignup } from '@/components/EmailSignup';

export const NovaCompanion = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [showEmailSignup, setShowEmailSignup] = useState(false);
  const [message, setMessage] = useState("Ready to cast your next spell?");
  const [isBlinking, setIsBlinking] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);
  
  const spellMessages = [
    "Ready to cast your next spell? ✨",
    "Need help parsing your brain dump? 🧠", 
    "Want me to automate your dreams? 🌟",
    "Let's create some productivity magic! 🪄",
    "I can organize your scattered thoughts! 💫",
    "Shall we turn your notes into spells? 🔮",
    "Time to weave some automation magic! ⚡"
  ];

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessage(spellMessages[Math.floor(Math.random() * spellMessages.length)]);
    }, 4000);

    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 300);
    }, 3500);

    const glowInterval = setInterval(() => {
      setIsGlowing(true);
      setTimeout(() => setIsGlowing(false), 1500);
    }, 6000);

    return () => {
      clearInterval(messageInterval);
      clearInterval(blinkInterval);
      clearInterval(glowInterval);
    };
  }, []);

  const handleNovaClick = () => {
    setShowEmailCapture(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Enhanced Sticky Note Chat Bubble */}
      {!showEmailCapture && (
        <div className="mb-6 max-w-sm animate-float">
          <div className="bg-gradient-to-br from-yellow-200 via-amber-100 to-yellow-200 p-6 rounded-3xl border-4 border-amber-400 shadow-2xl relative transform rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105">
            
            {/* Close button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 w-6 h-6 bg-amber-400 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-3 h-3 text-white" />
            </button>
            
            {/* Sticky note tape effect */}
            <div className="absolute -top-3 left-6 w-10 h-6 bg-amber-300/70 rounded border-2 border-amber-400/60 transform -rotate-12"></div>
            <div className="absolute -top-3 right-6 w-8 h-5 bg-yellow-300/70 rounded border-2 border-yellow-400/60 transform rotate-12"></div>
            
            <p className="text-sm font-semibold text-amber-800 leading-relaxed mb-2 pr-6">{message}</p>
            
            {/* Spell casting explanation */}
            <div className="mt-3 p-3 bg-yellow-100 rounded-2xl border-2 border-amber-300">
              <p className="text-xs text-amber-700 font-medium">
                💡 Try saying: "Schedule my morning routine" or "Organize my project notes"
              </p>
            </div>
            
            {/* Enhanced magical decorations */}
            <div className="absolute -top-2 -left-2 text-amber-500 text-lg animate-spin-slow">✨</div>
            <div className="absolute -top-3 right-12 text-yellow-500 text-lg animate-bounce">⭐</div>
            <div className="absolute -bottom-2 left-2 text-amber-600 text-sm animate-pulse">💫</div>
            
            {/* Speech bubble tail */}
            <div className="absolute -bottom-3 right-8 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-yellow-200" />
            <div className="absolute -bottom-2 right-8 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[14px] border-t-amber-400" />
          </div>
        </div>
      )}

      {/* Email Capture Bubble */}
      {showEmailCapture && (
        <div className="mb-6 max-w-sm animate-scale-in">
          <div className="bg-gradient-to-br from-amber-200 via-yellow-100 to-amber-200 p-6 rounded-3xl border-4 border-yellow-400 shadow-2xl relative transform -rotate-1 hover:rotate-0 transition-all duration-500">
            
            {/* Close button */}
            <button
              onClick={() => setShowEmailCapture(false)}
              className="absolute top-2 right-2 w-6 h-6 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-3 h-3 text-white" />
            </button>
            
            <div className="text-center">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Want me to automate your life?</h3>
              <p className="text-sm text-amber-700 mb-4">Let me show you the magic! Enter your email to get started.</p>
              
              <button
                onClick={() => {
                  setShowEmailSignup(true);
                  setShowEmailCapture(false);
                }}
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Start My Magic Journey
              </button>
            </div>
            
            {/* Speech bubble tail */}
            <div className="absolute -bottom-3 right-8 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-amber-200" />
            <div className="absolute -bottom-2 right-8 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[14px] border-t-yellow-400" />
          </div>
        </div>
      )}
      
      {/* Enhanced Nova Avatar with her animated picture */}
      <div className="relative animate-float-slow">
        <button
          onClick={handleNovaClick}
          className="group relative w-28 h-28 bg-gradient-to-br from-yellow-300 via-amber-200 to-yellow-300 rounded-3xl flex items-center justify-center shadow-2xl hover:shadow-amber-500/50 transition-all duration-500 hover:scale-110 overflow-hidden border-4 border-amber-400 hover:border-amber-500 transform rotate-3 hover:rotate-0 cursor-pointer"
        >
          
          {/* Enhanced corner fold */}
          <div className="absolute top-0 right-0 w-8 h-8 bg-amber-300 border-l-2 border-b-2 border-amber-500 transform rotate-45 translate-x-4 -translate-y-4"></div>
          
          {/* Nova's picture container with enhanced animation */}
          <div className={`relative z-10 w-24 h-24 rounded-2xl overflow-hidden border-4 border-yellow-300 bg-gradient-to-br from-yellow-100 to-amber-100 shadow-inner transition-all duration-300 ${
            isGlowing ? 'shadow-lg shadow-amber-400/60' : ''
          }`}>
            <img 
              src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
              alt="Nova - Your AI Agent" 
              className={`w-full h-full object-cover transition-all duration-300 ${
                isBlinking ? 'scale-y-90 brightness-110' : 'scale-y-100'
              } group-hover:scale-110 group-hover:brightness-110`}
              style={{
                filter: `brightness(1.1) contrast(1.05) ${isGlowing ? 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.8))' : ''}`,
                transform: `scale(${isGlowing ? '1.05' : '1'})`
              }}
            />
            
            {/* Magical overlay with breathing effect */}
            <div className={`absolute inset-0 bg-gradient-to-br from-yellow-300/30 via-transparent to-amber-300/30 pointer-events-none animate-shimmer transition-opacity duration-1000 ${
              isGlowing ? 'opacity-80' : 'opacity-40'
            }`} />
            
            {/* Gentle pulsing ring around Nova when she's thinking */}
            {isGlowing && (
              <div className="absolute -inset-2 border-2 border-amber-400/60 rounded-2xl animate-ping"></div>
            )}
          </div>
          
          {/* Enhanced floating sparkles */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-visible">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-ping"
                style={{
                  left: `${-20 + Math.random() * 140}%`,
                  top: `${-20 + Math.random() * 140}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1 + Math.random() * 2}s`,
                  fontSize: `${0.6 + Math.random() * 0.4}rem`,
                  color: ['#f59e0b', '#d97706', '#92400e', '#fbbf24', '#fcd34d'][Math.floor(Math.random() * 5)]
                }}
              >
                {['✨', '⭐', '💫', '🌟', '🪄'][Math.floor(Math.random() * 5)]}
              </div>
            ))}
          </div>
          
          {/* Magical aura when glowing */}
          {isGlowing && (
            <div className="absolute -inset-4 bg-gradient-radial from-amber-400/20 via-yellow-400/10 to-transparent rounded-full animate-pulse"></div>
          )}
        </button>
        
        {/* Enhanced spell casting indicator */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-amber-200 border-3 border-amber-400 px-5 py-3 rounded-2xl shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center gap-2">
              <span className="text-xs text-amber-800 font-bold">Nova</span>
              <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
              <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
              <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
            </div>
          </div>
        </div>
      </div>

      <EmailSignup isOpen={showEmailSignup} onClose={() => setShowEmailSignup(false)} />
    </div>
  );
};
