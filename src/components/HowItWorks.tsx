
import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const HowItWorks = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      title: 'Write a Wish',
      icon: '✍️',
      description: 'Simply write what you want to accomplish in plain language',
      detail: 'No complex commands needed - just speak naturally to Nova',
      color: 'from-yellow-400 to-amber-500'
    },
    {
      id: 2,
      title: 'Nova Thinks',
      icon: '🧠',
      description: 'Nova analyzes your wish and creates an intelligent plan',
      detail: 'AI-powered understanding with emotional intelligence',
      color: 'from-purple-400 to-indigo-500'
    },
    {
      id: 3,
      title: 'It Happens',
      icon: '🎬',
      description: 'Watch your wish transform into automated reality',
      detail: 'Connected workflows that work across all your tools',
      color: 'from-blue-400 to-cyan-500'
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            Three simple steps to transform your thoughts into magical automation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative group">
              {/* Step Card */}
              <div
                className={`bg-gradient-to-br from-purple-800/60 to-purple-900/60 p-8 rounded-3xl border-2 border-purple-500/30 backdrop-blur-sm transition-all duration-500 cursor-pointer hover:scale-105 hover:border-yellow-400/50 ${
                  hoveredStep === step.id ? 'scale-105 border-yellow-400/50' : ''
                }`}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Step Icon */}
                <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-3xl shadow-2xl mb-6 mx-auto transform transition-transform duration-300 ${
                  hoveredStep === step.id ? 'rotate-12 scale-110' : ''
                }`}>
                  {step.icon}
                </div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-yellow-300">{step.title}</h3>
                  <p className="text-purple-200 text-lg leading-relaxed">{step.description}</p>
                  
                  {/* Additional detail on hover */}
                  <div className={`transition-all duration-300 overflow-hidden ${
                    hoveredStep === step.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-yellow-200 text-sm italic">{step.detail}</p>
                  </div>
                </div>

                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 rounded-3xl transition-opacity duration-300 -z-10 ${
                  hoveredStep === step.id ? 'opacity-10' : ''
                }`} />

                {/* Spell sparkles */}
                {hoveredStep === step.id && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute text-yellow-400 animate-ping opacity-70"
                        style={{
                          left: `${10 + Math.random() * 80}%`,
                          top: `${10 + Math.random() * 80}%`,
                          animationDelay: `${Math.random() * 1}s`,
                          fontSize: '0.8rem'
                        }}
                      >
                        ✨
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Glowing Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <div className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full p-3 shadow-lg animate-pulse">
                    <ArrowRight className="w-6 h-6 text-purple-900" />
                  </div>
                  
                  {/* Spell trail */}
                  <div className="absolute top-1/2 left-12 transform -translate-y-1/2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute text-yellow-400 animate-ping opacity-60"
                        style={{
                          left: `${i * 12}px`,
                          animationDelay: `${i * 0.2}s`,
                          fontSize: '0.6rem'
                        }}
                      >
                        ✦
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-800/50 to-indigo-800/50 p-8 rounded-3xl border border-purple-500/30 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-purple-400/5 animate-shimmer"></div>
            <div className="relative z-10">
              <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4 animate-spin-slow" />
              <h3 className="text-2xl font-bold text-yellow-300 mb-4">Ready to experience the magic?</h3>
              <p className="text-purple-200 mb-6 text-lg">Join thousands who've transformed their productivity with Nova</p>
              <button className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-purple-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg text-lg">
                Start Your Magic Journey ✨
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
