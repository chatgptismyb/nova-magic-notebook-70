import React, { useState } from 'react';
import { Sparkles, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EmailSignup } from '@/components/EmailSignup';

interface EarlyAccessBannerProps {
  theme?: 'purple' | 'orange' | 'blue';
}

export const EarlyAccessBanner: React.FC<EarlyAccessBannerProps> = ({
  theme = 'purple'
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [showEmailSignup, setShowEmailSignup] = useState(false);

  // Theme styles
  const themeStyles = {
    purple: {
      bg: 'bg-gradient-to-r from-purple-600 to-indigo-600',
      button: 'bg-white text-purple-700 hover:bg-purple-50',
      text: 'text-white',
      border: 'border-purple-400'
    },
    orange: {
      bg: 'bg-gradient-to-r from-orange-500 to-yellow-500',
      button: 'bg-white text-orange-700 hover:bg-orange-50',
      text: 'text-white',
      border: 'border-orange-400'
    },
    blue: {
      bg: 'bg-gradient-to-r from-blue-600 to-cyan-600',
      button: 'bg-white text-blue-700 hover:bg-blue-50',
      text: 'text-white',
      border: 'border-blue-400'
    }
  };

  const currentTheme = themeStyles[theme];

  if (!isOpen) return null;

  return (
    <>
      <div className={`${currentTheme.bg} py-3 px-6 relative`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className={`${currentTheme.text} font-medium`}>
                Magic Notebook is now in early access! Be among the first to experience the magic.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              onClick={() => setShowEmailSignup(true)}
              className={`${currentTheme.button} font-semibold flex items-center gap-2`}
            >
              Get Early Access
              <ArrowRight className="w-4 h-4" />
            </Button>
            
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Magical sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-ping"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.3,
                animationDuration: `${1 + Math.random() * 2}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              ✨
            </div>
          ))}
        </div>
      </div>
      
      <EmailSignup 
        isOpen={showEmailSignup} 
        onClose={() => setShowEmailSignup(false)}
        isTimedPopup={true}
      />
    </>
  );
};