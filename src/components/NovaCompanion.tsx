
import { useState, useEffect } from 'react';

export const NovaCompanion = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [message, setMessage] = useState("Ready to cast your next spell?");
  const [isBlinking, setIsBlinking] = useState(false);
  
  const messages = [
    "Ready to cast your next spell?",
    "Need help planning your magical day?",
    "What life-changing magic shall we create?",
    "Your transformation awaits...",
    "I can help automate that for you! ✨"
  ];

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessage(messages[Math.floor(Math.random() * messages.length)]);
    }, 4000);

    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 3000);

    return () => {
      clearInterval(messageInterval);
      clearInterval(blinkInterval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Enhanced Chat Bubble */}
      <div className="mb-6 max-w-xs">
        <div className="bg-gradient-to-br from-yellow-900/95 via-amber-900/95 to-yellow-800/95 backdrop-blur-xl text-white p-5 rounded-3xl rounded-br-md border-2 border-yellow-400/50 shadow-2xl shadow-yellow-500/20 relative animate-fade-in">
          <p className="text-sm font-medium text-yellow-50 leading-relaxed">{message}</p>
          
          {/* Enhanced Speech bubble tail */}
          <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-yellow-900/95" />
          
          {/* Magical particles around bubble */}
          <div className="absolute -top-2 -left-2 text-yellow-300 animate-ping text-sm">✨</div>
          <div className="absolute -top-3 right-3 text-amber-300 animate-ping text-sm delay-1000">⭐</div>
          <div className="absolute -bottom-1 left-2 text-yellow-400 animate-ping text-xs delay-500">💫</div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 rounded-3xl blur-lg -z-10" />
        </div>
      </div>
      
      {/* Enhanced Nova Avatar */}
      <div className="relative">
        <button
          onClick={() => setIsVisible(false)}
          className="group relative w-24 h-24 bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-500/40 hover:shadow-yellow-400/60 transition-all duration-500 hover:scale-110 overflow-hidden border-4 border-yellow-300/60 hover:border-yellow-200/80"
        >
          {/* Multiple rotating rings */}
          <div className="absolute -inset-3 border-2 border-yellow-300/40 rounded-full animate-spin" style={{ animationDuration: '8s' }} />
          <div className="absolute -inset-5 border border-amber-300/30 rounded-full animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }} />
          <div className="absolute -inset-7 border border-yellow-400/20 rounded-full animate-spin" style={{ animationDuration: '15s' }} />
          
          {/* Inner magical glow */}
          <div className="absolute inset-1 bg-gradient-to-br from-yellow-200/40 to-amber-300/40 rounded-full blur-md" />
          <div className="absolute inset-2 bg-gradient-to-br from-yellow-100/30 to-amber-200/30 rounded-full blur-sm" />
          
          {/* Nova's enhanced face container */}
          <div className="relative z-10 w-20 h-20 rounded-full overflow-hidden border-3 border-yellow-100/60 bg-gradient-to-br from-yellow-50 to-amber-50 shadow-inner">
            <img 
              src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
              alt="Nova - Your AI Agent" 
              className={`w-full h-full object-cover transition-all duration-300 ${isBlinking ? 'scale-y-75' : 'scale-y-100'} group-hover:scale-110 group-hover:rotate-3`}
            />
            
            {/* Overlay gradient for better integration */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 via-transparent to-amber-200/20 pointer-events-none" />
          </div>
          
          {/* Enhanced floating sparkles on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-visible">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-ping"
                style={{
                  left: `${-30 + Math.random() * 160}%`,
                  top: `${-30 + Math.random() * 160}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  fontSize: `${0.5 + Math.random() * 0.5}rem`,
                  color: ['#fbbf24', '#f59e0b', '#d97706', '#92400e'][Math.floor(Math.random() * 4)]
                }}
              >
                {['✨', '⭐', '💫', '🌟'][Math.floor(Math.random() * 4)]}
              </div>
            ))}
          </div>
        </button>
        
        {/* Enhanced online indicator */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full border-3 border-white shadow-lg">
          <div className="absolute inset-1 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full animate-ping" />
          <div className="absolute inset-2 bg-green-100 rounded-full" />
        </div>
        
        {/* Enhanced typing indicator */}
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-yellow-500/90 to-amber-500/90 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400/60 shadow-lg">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-yellow-100 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
              <div className="w-1.5 h-1.5 bg-yellow-100 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <div className="w-1.5 h-1.5 bg-yellow-100 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
          </div>
        </div>
        
        {/* Ambient glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-amber-400/30 rounded-full blur-2xl scale-150 -z-10 animate-pulse" />
      </div>
    </div>
  );
};
