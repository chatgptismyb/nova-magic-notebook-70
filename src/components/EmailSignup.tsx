
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900/95 border border-yellow-500/30 rounded-2xl p-8 max-w-md w-full relative animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <>
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent mb-2">
                Join the Magic Circle
              </h3>
              <p className="text-gray-300">
                Be the first to experience Magic Notebook when it launches. Get exclusive early access and magical updates.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email to join the waitlist"
                className="w-full bg-slate-800/50 border border-yellow-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors"
                required
              />
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-black font-semibold py-3 rounded-lg transition-all duration-300"
              >
                🪄 Cast My Spot in Line
              </Button>
            </form>

            <p className="text-xs text-gray-400 text-center mt-4">
              No spam, just pure magic. Unsubscribe anytime.
            </p>
          </>
        ) : (
          <div className="text-center">
            <div className="text-6xl mb-4 animate-bounce">🎉</div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">
              Welcome to the Circle!
            </h3>
            <p className="text-gray-300">
              Your magical journey begins soon. Check your email for confirmation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
