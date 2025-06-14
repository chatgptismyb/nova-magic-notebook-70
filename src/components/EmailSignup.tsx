
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Mail, Star } from 'lucide-react';

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
      <div className="bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 border-2 border-yellow-500/30 rounded-3xl p-8 max-w-md w-full relative animate-scale-in shadow-2xl shadow-yellow-500/20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 hover:bg-slate-700/50 rounded-full"
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full mb-4 animate-pulse">
                <Star className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent mb-3">
                Join the Magic Circle
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Be among the first to experience the magic when Magic Notebook launches. 
                Get exclusive early access, magical updates, and special wizard perks.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email to join the waitlist"
                  className="w-full bg-slate-800/50 border-2 border-yellow-500/30 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-black font-bold py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
              >
                🪄 Reserve My Magical Spot
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-400">
                No spam, just pure magic. Unsubscribe anytime with a simple spell.
              </p>
              <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>10,000+ wizards joined</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span>Launching Q2 2024</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mb-6 animate-bounce">
              <span className="text-3xl">🎉</span>
            </div>
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">
              Welcome to the Circle!
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Your magical journey begins soon. Check your email for confirmation 
              and prepare for the most enchanting productivity experience ever created.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>You're wizard #10,247</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
