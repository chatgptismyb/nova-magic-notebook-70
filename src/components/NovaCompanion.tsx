
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
      {/* Chat Bubble as Sticky Note */}
      <div className="mb-6 max-w-xs">
        <div className="bg-gradient-to-br from-yellow-100 via-amber-50 to-yellow-100 p-5 rounded-2xl border-4 border-amber-300 shadow-2xl relative transform rotate-2 hover:rotate-0 transition-transform duration-300">
          
          {/* Sticky note tape effect */}
          <div className="absolute -top-2 left-4 w-8 h-4 bg-amber-200/60 rounded border border-amber-300/50"></div>
          
          <p className="text-sm font-medium text-amber-800 leading-relaxed">{message}</p>
          
          {/* Speech bubble tail */}
          <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-yellow-100" />
          
          {/* Magical sticky note decorations */}
          <div className="absolute -top-1 -left-1 text-amber-400 text-sm">✨</div>
          <div className="absolute -top-2 right-2 text-yellow-400 text-sm">⭐</div>
          <div className="absolute -bottom-1 left-1 text-amber-500 text-xs">💫</div>
        </div>
      </div>
      
      {/* Nova Avatar as Sticky Note */}
      <div className="relative">
        <button
          onClick={() => setIsVisible(false)}
          className="group relative w-24 h-24 bg-gradient-to-br from-yellow-200 via-amber-100 to-yellow-200 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-amber-400/60 transition-all duration-500 hover:scale-110 overflow-hidden border-4 border-amber-300 hover:border-amber-400 transform rotate-3 hover:rotate-0"
        >
          
          {/* Sticky note corner fold */}
          <div className="absolute top-0 right-0 w-6 h-6 bg-amber-200 border-l border-b border-amber-300 transform rotate-45 translate-x-3 -translate-y-3"></div>
          
          {/* Nova's face container */}
          <div className="relative z-10 w-20 h-20 rounded-xl overflow-hidden border-3 border-yellow-200 bg-gradient-to-br from-yellow-50 to-amber-50 shadow-inner">
            <img 
              src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
              alt="Nova - Your AI Agent" 
              className={`w-full h-full object-cover transition-all duration-300 ${isBlinking ? 'scale-y-75' : 'scale-y-100'} group-hover:scale-110`}
            />
            
            {/* Overlay for better integration */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 via-transparent to-amber-200/20 pointer-events-none" />
          </div>
          
          {/* Floating sparkles on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-visible">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-ping"
                style={{
                  left: `${-20 + Math.random() * 140}%`,
                  top: `${-20 + Math.random() * 140}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  fontSize: `${0.5 + Math.random() * 0.3}rem`,
                  color: ['#f59e0b', '#d97706', '#92400e', '#fbbf24'][Math.floor(Math.random() * 4)]
                }}
              >
                {['✨', '⭐', '💫', '🌟'][Math.floor(Math.random() * 4)]}
              </div>
            ))}
          </div>
        </button>
        
        {/* Online indicator as mini sticky note */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-200 to-emerald-200 rounded-lg border-2 border-green-300 shadow-md transform rotate-12">
          <div className="absolute inset-1 bg-green-100 rounded animate-pulse" />
        </div>
        
        {/* Typing indicator as sticky note */}
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-amber-100 border-2 border-amber-300 px-4 py-2 rounded-xl shadow-lg transform -rotate-1">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
