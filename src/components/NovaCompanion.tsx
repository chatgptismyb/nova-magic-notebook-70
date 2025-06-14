
import { useState, useEffect } from 'react';
import { X, Mail, Sparkles } from 'lucide-react';
import { EmailSignup } from '@/components/EmailSignup';

export const NovaCompanion = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showEmailSignup, setShowEmailSignup] = useState(false);
  const [message, setMessage] = useState("Ready to automate your life?");
  const [isBlinking, setIsBlinking] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);
  
  const onboardingMessages = [
    "Ready to automate your life? ✨",
    "Let me organize your chaos! 🧠", 
    "Want magical productivity? 🌟",
    "I can turn notes into actions! 🪄",
    "Shall we create some magic? 💫"
  ];

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessage(onboardingMessages[Math.floor(Math.random() * onboardingMessages.length)]);
    }, 3000);

    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 300);
    }, 4000);

    const glowInterval = setInterval(() => {
      setIsGlowing(true);
      setTimeout(() => setIsGlowing(false), 1500);
    }, 5000);

    return () => {
      clearInterval(messageInterval);
      clearInterval(blinkInterval);
      clearInterval(glowInterval);
    };
  }, []);

  const handleNovaClick = () => {
    setShowOnboarding(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Onboarding Bubble */}
      {showOnboarding && (
        <div className="mb-6 max-w-sm animate-scale-in">
          <div className="bg-gradient-to-br from-yellow-200 via-amber-100 to-yellow-200 p-6 rounded-3xl border-4 border-amber-400 shadow-2xl relative transform -rotate-1">
            
            {/* Close button */}
            <button
              onClick={() => setShowOnboarding(false)}
              className="absolute top-2 right-2 w-6 h-6 bg-amber-400 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-3 h-3 text-white" />
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-300 to-yellow-300 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-3">Meet Nova!</h3>
              <p className="text-sm text-amber-700 mb-4 leading-relaxed">
                I'm your AI productivity companion. I turn your messy notes into organized magic, 
                automate your tasks, and help you achieve your dreams effortlessly.
              </p>
              
              <div className="bg-amber-50 p-4 rounded-2xl border-2 border-yellow-300 mb-4">
                <p className="text-xs text-amber-600 font-medium">
                  💡 Just write "Schedule my morning routine" and watch the magic happen!
                </p>
              </div>
              
              <button
                onClick={() => {
                  setShowEmailSignup(true);
                  setShowOnboarding(false);
                }}
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Start My Magic Journey
              </button>
            </div>
            
            {/* Speech bubble tail */}
            <div className="absolute -bottom-3 right-8 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-yellow-200" />
          </div>
        </div>
      )}
      
      {/* Simple Nova Avatar */}
      <div className="relative animate-float-slow">
        <button
          onClick={handleNovaClick}
          className="group relative w-20 h-20 bg-gradient-to-br from-yellow-300 via-amber-200 to-yellow-300 rounded-2xl flex items-center justify-center shadow-xl hover:shadow-amber-500/50 transition-all duration-500 hover:scale-110 overflow-hidden border-4 border-amber-400 hover:border-amber-500 transform rotate-2 hover:rotate-0 cursor-pointer"
        >
          
          {/* Nova's picture */}
          <div className={`relative z-10 w-16 h-16 rounded-xl overflow-hidden border-3 border-yellow-300 bg-gradient-to-br from-yellow-100 to-amber-100 shadow-inner transition-all duration-300 ${
            isGlowing ? 'shadow-lg shadow-amber-400/60' : ''
          }`}>
            <img 
              src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
              alt="Nova" 
              className={`w-full h-full object-cover transition-all duration-300 ${
                isBlinking ? 'scale-y-90' : 'scale-y-100'
              } group-hover:scale-110 group-hover:brightness-110`}
            />
            
            {/* Magical overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br from-yellow-300/30 via-transparent to-amber-300/30 pointer-events-none transition-opacity duration-1000 ${
              isGlowing ? 'opacity-80' : 'opacity-40'
            }`} />
          </div>
          
          {/* Floating sparkles on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-ping"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                  animationDelay: `${Math.random() * 1.5}s`,
                  fontSize: `${0.5 + Math.random() * 0.3}rem`,
                  color: ['#f59e0b', '#d97706', '#fbbf24'][Math.floor(Math.random() * 3)]
                }}
              >
                ✨
              </div>
            ))}
          </div>
        </button>
        
        {/* Message bubble */}
        {!showOnboarding && (
          <div className="absolute -top-16 -left-32 bg-yellow-200 border-3 border-amber-400 px-4 py-2 rounded-2xl shadow-lg transform -rotate-2 animate-float max-w-xs">
            <p className="text-xs text-amber-800 font-medium">{message}</p>
            <div className="absolute bottom-0 right-4 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-yellow-200 transform translate-y-2" />
          </div>
        )}
      </div>

      <EmailSignup isOpen={showEmailSignup} onClose={() => setShowEmailSignup(false)} />
    </div>
  );
};
