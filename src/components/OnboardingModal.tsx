
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OnboardingModal = ({ isOpen, onClose }: OnboardingModalProps) => {
  const [step, setStep] = useState(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-gradient-to-br from-purple-900 to-indigo-900 p-8 rounded-3xl border-2 border-yellow-400/50 shadow-2xl max-w-2xl w-full mx-4 animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-purple-700/50 hover:bg-purple-600/50 rounded-full flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5 text-purple-200" />
        </button>

        {/* Content */}
        <div className="text-center">
          {step === 1 && (
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
                  alt="Nova" 
                  className="w-24 h-24 mx-auto rounded-full animate-nova-breathe"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 rounded-full animate-pulse"></div>
              </div>
              
              <h3 className="text-3xl font-bold text-yellow-300">Welcome to Magic! ✨</h3>
              <p className="text-xl text-purple-200 leading-relaxed">
                I'm Nova, your AI companion. I'll help transform your scattered thoughts into organized magic.
              </p>
              
              <Button
                onClick={() => setStep(2)}
                className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-purple-900 font-bold py-3 px-8 rounded-xl text-lg"
              >
                Meet Nova <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-4">
                <Sparkles className="w-16 h-16 text-yellow-400 mx-auto animate-spin-slow" />
                <h3 className="text-3xl font-bold text-yellow-300">How Magic Works</h3>
              </div>
              
              <div className="grid gap-4">
                <div className="bg-purple-800/50 p-4 rounded-xl border border-purple-500/30">
                  <div className="text-yellow-300 font-bold mb-2">1. Write Your Wish 📝</div>
                  <div className="text-purple-200">Just type what you want to accomplish</div>
                </div>
                <div className="bg-purple-800/50 p-4 rounded-xl border border-purple-500/30">
                  <div className="text-yellow-300 font-bold mb-2">2. Nova Creates Magic 🧠</div>
                  <div className="text-purple-200">I turn your thoughts into actionable plans</div>
                </div>
                <div className="bg-purple-800/50 p-4 rounded-xl border border-purple-500/30">
                  <div className="text-yellow-300 font-bold mb-2">3. Watch It Happen ⚡</div>
                  <div className="text-purple-200">Your tasks become reality through automation</div>
                </div>
              </div>
              
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={() => setStep(1)}
                  variant="outline"
                  className="border-purple-500 text-purple-200 hover:bg-purple-700/50"
                >
                  Back
                </Button>
                <Link to="/signup">
                  <Button
                    className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-purple-900 font-bold py-3 px-8 rounded-xl text-lg"
                  >
                    Start Your Journey <Sparkles className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
