
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Mail, Star, Heart, Sparkles, Zap, Crown } from 'lucide-react';

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
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="relative">
        {/* Magical glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-purple-500/30 rounded-3xl blur-xl scale-110"></div>
        
        {/* Main container */}
        <div className="relative bg-gradient-to-br from-yellow-50 via-white to-purple-50 border-4 border-gradient-to-r from-yellow-400 to-purple-500 rounded-3xl p-8 max-w-2xl w-full shadow-2xl">
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-purple-600 hover:text-purple-800 transition-colors p-2 hover:bg-purple-100 rounded-full group"
          >
            <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto relative">
                    <Crown className="w-10 h-10 text-white" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center animate-pulse">
                      <Sparkles className="w-4 h-4 text-purple-600" />
                    </div>
                  </div>
                </div>
                
                <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-yellow-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  Join the Magic Circle
                </h2>
                <p className="text-xl text-gray-700 mb-6">
                  Be among the first wizards to experience the future of productivity
                </p>
              </div>

              {/* Benefits grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-4 rounded-2xl border-2 border-yellow-300 hover:scale-105 transition-transform">
                  <Heart className="w-6 h-6 text-red-500 mb-2" />
                  <h4 className="font-bold text-yellow-800 mb-1">Early Access</h4>
                  <p className="text-yellow-700 text-sm">First to experience magic</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-2xl border-2 border-purple-300 hover:scale-105 transition-transform">
                  <Zap className="w-6 h-6 text-purple-600 mb-2" />
                  <h4 className="font-bold text-purple-800 mb-1">VIP Updates</h4>
                  <p className="text-purple-700 text-sm">Exclusive magical news</p>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-100 to-purple-100 p-4 rounded-2xl border-2 border-amber-300 hover:scale-105 transition-transform">
                  <Star className="w-6 h-6 text-amber-500 mb-2" />
                  <h4 className="font-bold text-amber-800 mb-1">Special Perks</h4>
                  <p className="text-amber-700 text-sm">Wizard-only benefits</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-100 to-yellow-100 p-4 rounded-2xl border-2 border-purple-300 hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6 text-blue-500 mb-2" />
                  <h4 className="font-bold text-blue-800 mb-1">Premium Support</h4>
                  <p className="text-blue-700 text-sm">Direct line to magic</p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 rounded-2xl blur"></div>
                  <div className="relative flex">
                    <div className="relative flex-1">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-500 w-5 h-5 z-10" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your magical email address"
                        className="w-full bg-white/90 border-3 border-purple-300 rounded-2xl pl-12 pr-4 py-4 text-purple-800 placeholder-purple-400 focus:outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-300/20 transition-all duration-300 text-lg"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="ml-4 bg-gradient-to-r from-purple-600 via-yellow-500 to-purple-600 hover:from-purple-700 hover:via-yellow-600 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25 text-lg"
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                      Join Magic
                    </Button>
                  </div>
                </div>
              </form>

              {/* Footer */}
              <div className="mt-8 text-center">
                <div className="bg-gradient-to-r from-yellow-100 to-purple-100 p-4 rounded-xl border border-purple-200">
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>12,000+ wizards joined</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>Launching Soon</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">
                    No spam, just pure magic. Unsubscribe anytime with a simple spell.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto relative">
                  <span className="text-4xl">🎉</span>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center animate-bounce">
                    <Star className="w-4 h-4 text-green-600 fill-current" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                Welcome to the Circle!
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Your magical journey begins soon! Check your email for confirmation 
                and prepare for the most enchanting productivity experience ever created.
              </p>
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-xl border-2 border-green-300 inline-block">
                <div className="flex items-center gap-3 text-green-700">
                  <Crown className="w-6 h-6 text-green-600" />
                  <span className="font-bold text-lg">You're wizard #12,248!</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
