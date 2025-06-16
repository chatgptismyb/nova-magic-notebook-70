
import { useState } from 'react';
import { X, Mail, Sparkles, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmailSignupProps {
  isOpen: boolean;
  onClose: () => void;
  isTimedPopup?: boolean;
}

export const EmailSignup = ({ isOpen, onClose, isTimedPopup = false }: EmailSignupProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate email submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Auto close after success
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setEmail('');
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl shadow-2xl border-4 border-orange-300 max-w-md w-full mx-4 animate-scale-in overflow-hidden">
        
        {/* Header */}
        <div className="relative bg-gradient-to-r from-orange-400 to-yellow-400 p-6 text-white">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Back button for timed popup */}
          {isTimedPopup && (
            <button
              onClick={onClose}
              className="absolute top-4 left-4 p-2 hover:bg-white/20 rounded-full transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back</span>
            </button>
          )}
          
          <div className="text-center pt-8">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🧙‍♀️</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">
              Our App is Launching Soon!
            </h2>
            <p className="text-orange-100">
              Subscribe today for release announcements and exclusive content
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-orange-800 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 pl-10 bg-white border-2 border-orange-200 rounded-xl text-orange-900 placeholder-orange-400 focus:outline-none focus:border-orange-500 transition-colors"
                    required
                    disabled={isSubmitting}
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-orange-400" />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !email}
                className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Adding You to the List...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Get Launch Updates
                  </div>
                )}
              </Button>

              <div className="text-center">
                <p className="text-xs text-orange-600">
                  🔒 We respect your privacy. No spam, just launch updates and exclusive content.
                </p>
              </div>
            </form>
          ) : (
            <div className="text-center space-y-4 py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-orange-800">You're All Set!</h3>
              <p className="text-orange-700">
                We'll keep you updated on our launch and send you exclusive early access content!
              </p>
            </div>
          )}
        </div>

        {/* Features preview */}
        {!isSubmitted && (
          <div className="bg-orange-100/50 p-4 border-t border-orange-200">
            <h4 className="font-semibold text-orange-800 mb-3 text-center">What you'll get:</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-orange-500">🚀</span>
                <span className="text-orange-700">Launch updates</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-500">⭐</span>
                <span className="text-orange-700">Early access</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-500">🎁</span>
                <span className="text-orange-700">Exclusive content</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-500">📱</span>
                <span className="text-orange-700">Mobile & web</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
