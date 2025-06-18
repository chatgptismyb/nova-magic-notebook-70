import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Wand2, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AITestWidget } from './ai-test-widget';

interface LandingAIDemoProps {
  theme?: 'purple' | 'orange' | 'blue';
}

export const LandingAIDemo: React.FC<LandingAIDemoProps> = ({
  theme = 'purple'
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const demoRef = useRef<HTMLDivElement>(null);

  // Theme styles
  const themeStyles = {
    purple: {
      primary: 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white',
      secondary: 'bg-purple-100 text-purple-800 border-purple-300',
      accent: 'text-purple-600',
      border: 'border-purple-300',
      highlight: 'bg-purple-50',
      glow: 'shadow-purple-500/20'
    },
    orange: {
      primary: 'bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white',
      secondary: 'bg-orange-100 text-orange-800 border-orange-300',
      accent: 'text-orange-600',
      border: 'border-orange-300',
      highlight: 'bg-orange-50',
      glow: 'shadow-orange-500/20'
    },
    blue: {
      primary: 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white',
      secondary: 'bg-blue-100 text-blue-800 border-blue-300',
      accent: 'text-blue-600',
      border: 'border-blue-300',
      highlight: 'bg-blue-50',
      glow: 'shadow-blue-500/20'
    }
  };

  const currentTheme = themeStyles[theme];

  const demoSteps = [
    {
      title: "Ask Nova Anything",
      description: "Nova can answer questions, generate content, and provide assistance with any task.",
      prompt: "Tell me about Magic Notebook and how it can help with productivity."
    },
    {
      title: "Create Automation Spells",
      description: "Nova can create custom automation workflows to handle repetitive tasks.",
      prompt: "Create a spell to organize my daily tasks and send me a summary each evening."
    },
    {
      title: "Get Smart Suggestions",
      description: "Nova learns from your habits and provides intelligent suggestions.",
      prompt: "What are some ways I could improve my note organization system?"
    }
  ];

  useEffect(() => {
    if (isExpanded) {
      // Auto-cycle through demo steps
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % demoSteps.length);
      }, 8000);
      
      return () => clearInterval(interval);
    }
  }, [isExpanded, demoSteps.length]);

  useEffect(() => {
    // Scroll to demo when expanded
    if (isExpanded && demoRef.current) {
      demoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [isExpanded]);

  return (
    <div ref={demoRef} className="w-full">
      {!isExpanded ? (
        <Button
          onClick={() => setIsExpanded(true)}
          className={`${currentTheme.primary} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full py-4`}
        >
          <Wand2 className="w-5 h-5 mr-2" />
          <span>Try Nova AI</span>
          <Sparkles className="w-5 h-5 ml-2 animate-pulse" />
        </Button>
      ) : (
        <div className={`rounded-xl border ${currentTheme.border} shadow-xl ${currentTheme.glow} overflow-hidden animate-in fade-in duration-300`}>
          {/* Header */}
          <div className={`${currentTheme.primary} p-4 flex items-center justify-between`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <img 
                  src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
                  alt="Nova" 
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <div>
                <h3 className="font-bold text-white">Nova AI Demo</h3>
                <p className="text-white/80 text-sm">Experience the magic</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsExpanded(false)}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Close Demo
              </Button>
            </div>
          </div>
          
          {/* Demo Steps Navigation */}
          <div className="bg-white p-4 border-b border-gray-200">
            <div className="flex overflow-x-auto gap-2 pb-2">
              {demoSteps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
                    currentStep === index
                      ? `${currentTheme.secondary} font-medium`
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {step.title}
                </button>
              ))}
            </div>
          </div>
          
          {/* Demo Content */}
          <div className="p-6 bg-white">
            <div className="mb-4">
              <h4 className="font-bold text-lg mb-2">{demoSteps[currentStep].title}</h4>
              <p className="text-gray-600">{demoSteps[currentStep].description}</p>
            </div>
            
            <AITestWidget 
              theme={theme}
              showTitle={false}
              defaultPrompt={demoSteps[currentStep].prompt}
            />
          </div>
        </div>
      )}
    </div>
  );
};