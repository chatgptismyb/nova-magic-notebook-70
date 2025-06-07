
import { useState, useEffect } from 'react';

export const NovaCompanion = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [message, setMessage] = useState("Ready to cast your next spell?");
  const [isBlinking, setIsBlinking] = useState(false);
  
  const messages = [
    "Ready to cast your next spell?",
    "Need help planning your ritual?",
    "Ask me anything.",
    "What magic shall we create today?",
    "Your productivity wizard awaits..."
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
        <div className="bg-slate-800/90 backdrop-blur-sm text-white p-4 rounded-2xl rounded-br-sm border border-purple-500/30 shadow-lg relative animate-fade-in">
          <p className="text-sm italic text-purple-200">{message}</p>
          
          {/* Speech bubble tail */}
          <div className="absolute -bottom-2 right-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-slate-800/90" />
        </div>
      </div>
      
      {/* Nova Avatar */}
      <div className="relative">
        <button
          onClick={() => setIsVisible(false)}
          className="group relative w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 animate-bounce"
          style={{ animationDuration: '3s' }}
        >
          {/* Floating rings */}
          <div className="absolute inset-0">
            <div className="absolute inset-1 border border-purple-300/50 rounded-full animate-spin" style={{ animationDuration: '4s' }} />
            <div className="absolute inset-2 border border-pink-300/50 rounded-full animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }} />
          </div>
          
          {/* Nova's face */}
          <div className="relative z-10 text-2xl transform group-hover:scale-110 transition-transform duration-300">
            <div className={`transition-all duration-200 ${isBlinking ? 'scale-y-50' : 'scale-y-100'}`}>
              🧙‍♀️
            </div>
          </div>
          
          {/* Sparkles on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute text-yellow-300 animate-ping text-xs"
                style={{
                  left: `${-10 + Math.random() * 120}%`,
                  top: `${-10 + Math.random() * 120}%`,
                  animationDelay: `${Math.random() * 1}s`
                }}
              >
                ✨
              </div>
            ))}
          </div>
        </button>
        
        {/* Online indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse" />
      </div>
    </div>
  );
};
