
import { useState, useEffect } from 'react';

export const NovaCompanion = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [message, setMessage] = useState("Ready to cast your next spell?");
  const [isBlinking, setIsBlinking] = useState(false);
  
  const messages = [
    "Ready to cast your next spell?",
    "Need help planning your magical day?",
    "Ask me anything about productivity!",
    "What life-changing magic shall we create?",
    "Your transformation awaits..."
  ];

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessage(messages[Math.floor(Math.random() * messages.length)]);
    }, 5000);

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
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Bubble */}
      <div className="mb-4 max-w-xs">
        <div className="bg-gradient-to-r from-yellow-900/95 to-amber-900/95 backdrop-blur-md text-white p-4 rounded-2xl rounded-br-sm border border-yellow-500/50 shadow-xl relative animate-fade-in">
          <p className="text-sm font-medium text-yellow-100">{message}</p>
          
          {/* Speech bubble tail */}
          <div className="absolute -bottom-2 right-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-yellow-900/95" />
          
          {/* Magical sparkles around bubble */}
          <div className="absolute -top-1 -left-1 text-yellow-300 animate-ping text-xs">✨</div>
          <div className="absolute -top-2 right-2 text-amber-300 animate-ping text-xs delay-1000">✨</div>
        </div>
      </div>
      
      {/* Nova Chatbot Avatar */}
      <div className="relative">
        <button
          onClick={() => setIsVisible(false)}
          className="group relative w-20 h-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-110 overflow-hidden border-4 border-yellow-300/50"
        >
          {/* Outer magical ring */}
          <div className="absolute -inset-2 border-2 border-yellow-300/30 rounded-full animate-spin" style={{ animationDuration: '8s' }} />
          <div className="absolute -inset-4 border border-amber-300/20 rounded-full animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }} />
          
          {/* Inner glow */}
          <div className="absolute inset-1 bg-gradient-to-br from-yellow-300/50 to-amber-400/50 rounded-full blur-sm" />
          
          {/* Nova's face container */}
          <div className="relative z-10 w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-200/50 bg-gradient-to-br from-yellow-100 to-amber-100">
            <img 
              src="/lovable-uploads/d28b8fdc-6ad3-421a-99b7-7b12e0aaff5d.png" 
              alt="Nova" 
              className={`w-full h-full object-cover transition-all duration-200 ${isBlinking ? 'scale-y-75' : 'scale-y-100'} group-hover:scale-110`}
            />
          </div>
          
          {/* Floating sparkles on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute text-yellow-200 animate-ping text-xs"
                style={{
                  left: `${-20 + Math.random() * 140}%`,
                  top: `${-20 + Math.random() * 140}%`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              >
                ✨
              </div>
            ))}
          </div>
        </button>
        
        {/* Online indicator with pulsing effect */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full border-3 border-white animate-pulse shadow-lg">
          <div className="absolute inset-1 bg-green-300 rounded-full animate-ping" />
        </div>
        
        {/* Typing indicator */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="bg-yellow-500/80 backdrop-blur-sm px-3 py-1 rounded-full border border-yellow-400/50">
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 bg-yellow-100 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
              <div className="w-1 h-1 bg-yellow-100 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <div className="w-1 h-1 bg-yellow-100 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
