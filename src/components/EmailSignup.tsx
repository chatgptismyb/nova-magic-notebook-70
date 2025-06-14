
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Mail, Star, Heart, Sparkles } from 'lucide-react';

interface EmailSignupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmailSignup = ({ isOpen, onClose }: EmailSignupProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setEmail('');
      }, 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      
      {/* Main Sticky Note Container */}
      <div className="bg-gradient-to-br from-yellow-100 via-amber-50 to-yellow-100 border-8 border-amber-300 rounded-3xl p-8 max-w-lg w-full relative shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
        
        {/* Sticky Note Tape Effect */}
        <div className="absolute -top-4 left-8 w-16 h-8 bg-amber-200/80 rounded border border-amber-300/50 transform -rotate-12"></div>
        <div className="absolute -top-4 right-8 w-16 h-8 bg-yellow-200/80 rounded border border-yellow-300/50 transform rotate-12"></div>
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-amber-600 hover:text-amber-800 transition-colors p-2 hover:bg-amber-100 rounded-full"
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header Sticky Note */}
            <div className="text-center mb-8">
              <div className="bg-amber-200 p-6 rounded-2xl border-4 border-yellow-400 transform -rotate-1 hover:rotate-0 transition-transform duration-300 mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full mb-4">
                  <span className="text-2xl">🧙‍♀️</span>
                </div>
                <h3 className="text-3xl font-bold text-amber-800 mb-3">
                  Join the Magic Circle
                </h3>
              </div>
              
              {/* Story Sticky Note */}
              <div className="bg-yellow-100 p-6 rounded-2xl border-4 border-amber-300 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <h4 className="text-xl font-bold text-amber-700 mb-3">✨ Your Magical Journey Awaits</h4>
                <p className="text-amber-700 leading-relaxed mb-4">
                  Imagine waking up tomorrow with a personal AI wizard who turns your scattered thoughts into 
                  powerful life-changing actions. That's exactly what Magic Notebook does.
                </p>
                
                {/* Benefits as mini sticky notes */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-amber-50 p-3 rounded-xl border-2 border-yellow-300 transform rotate-1">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span className="text-sm font-semibold text-amber-700">Early Access</span>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-xl border-2 border-amber-300 transform -rotate-1">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      <span className="text-sm font-semibold text-amber-700">Magic Updates</span>
                    </div>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-xl border-2 border-yellow-300 transform rotate-2">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-semibold text-amber-700">Wizard Perks</span>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-xl border-2 border-amber-300 transform -rotate-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-semibold text-amber-700">VIP Support</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-amber-600 text-sm italic">
                  "Join 12,000+ people who are already living their dreams with magical productivity."
                </p>
              </div>
            </div>

            {/* Form Sticky Note */}
            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 p-6 rounded-2xl border-4 border-amber-400 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email to join the waitlist"
                    className="w-full bg-white/80 border-3 border-amber-300 rounded-xl pl-12 pr-4 py-4 text-amber-800 placeholder-amber-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-300/50 transition-all duration-300"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-amber-500/25"
                >
                  🪄 Reserve My Magical Spot
                </Button>
              </form>
            </div>

            {/* Footer Sticky Note */}
            <div className="mt-6 bg-yellow-50 p-4 rounded-xl border-2 border-yellow-300 transform rotate-1">
              <p className="text-xs text-amber-600 text-center mb-3">
                No spam, just pure magic. Unsubscribe anytime with a simple spell.
              </p>
              <div className="flex items-center justify-center gap-4 text-xs text-amber-500">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>12,000+ wizards joined</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-400 fill-current" />
                  <span>Launching Soon</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="bg-green-100 p-8 rounded-2xl border-4 border-green-300 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mb-6">
                <span className="text-3xl">🎉</span>
              </div>
              <h3 className="text-3xl font-bold text-green-700 mb-4">
                Welcome to the Circle!
              </h3>
              <p className="text-green-700 text-lg leading-relaxed mb-4">
                Your magical journey begins soon! Check your email for confirmation 
                and prepare for the most enchanting productivity experience ever created.
              </p>
              <div className="bg-green-50 p-3 rounded-xl border-2 border-green-200 inline-block">
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <Star className="w-4 h-4 text-green-500 fill-current" />
                  <span className="font-bold">You're wizard #12,248!</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
