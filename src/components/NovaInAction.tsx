
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export const NovaInAction = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const demos = [
    {
      title: "Spell Builder",
      description: "Watch Nova transform wishes into actionable spells",
      preview: "🔮 Creating spell: 'Organize my week'",
      features: ["Natural language input", "Smart task breakdown", "Automated scheduling"]
    },
    {
      title: "Note to Task Magic",
      description: "See how Nova turns scattered thoughts into organized tasks",
      preview: "📝 Converting: 'Need to prep for meeting' → Task list",
      features: ["Context understanding", "Priority detection", "Due date suggestions"]
    },
    {
      title: "Emotional Intelligence",
      description: "Nova responds with empathy and understanding",
      preview: "💭 'I'm overwhelmed' → Supportive action plan",
      features: ["Mood recognition", "Supportive responses", "Stress-aware planning"]
    },
    {
      title: "Event Planning Wizard",
      description: "From wish to fully planned event in seconds",
      preview: "🎉 'Plan birthday party' → Complete checklist",
      features: ["Guest management", "Venue suggestions", "Timeline creation"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % demos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + demos.length) % demos.length);
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
            🧙‍♀️ Nova in Action
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            Explore interactive demos of Nova's magical capabilities
          </p>
        </div>

        {/* Demo Slider */}
        <div className="relative">
          <div className="bg-gradient-to-br from-purple-800/60 to-purple-900/60 rounded-3xl border-2 border-purple-500/30 backdrop-blur-sm overflow-hidden">
            {/* Navigation */}
            <div className="flex justify-between items-center p-6 border-b border-purple-500/30">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-purple-700/50 hover:bg-purple-600/50 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-purple-200" />
              </button>
              
              <div className="flex gap-2">
                {demos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === index ? 'bg-yellow-400' : 'bg-purple-500/50'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-purple-700/50 hover:bg-purple-600/50 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-purple-200" />
              </button>
            </div>

            {/* Demo Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Demo Preview */}
                <div className="bg-gradient-to-br from-purple-700/30 to-indigo-800/30 p-6 rounded-2xl border border-purple-500/30 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                  {/* Floating UI Mockup */}
                  <div className="text-center space-y-4">
                    <div className="text-6xl mb-4">{demos[currentSlide].preview.split(' ')[0]}</div>
                    <div className="bg-purple-800/50 p-4 rounded-xl">
                      <code className="text-yellow-300 text-sm">{demos[currentSlide].preview}</code>
                    </div>
                  </div>
                  
                  {/* Sparkle animation */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute text-yellow-400/60 animate-ping"
                        style={{
                          left: `${10 + Math.random() * 80}%`,
                          top: `${10 + Math.random() * 80}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          fontSize: '0.8rem'
                        }}
                      >
                        ✨
                      </div>
                    ))}
                  </div>
                </div>

                {/* Demo Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-yellow-300 mb-4">{demos[currentSlide].title}</h3>
                    <p className="text-purple-200 text-lg leading-relaxed">{demos[currentSlide].description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    {demos[currentSlide].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Sparkles className="w-5 h-5 text-yellow-400" />
                        <span className="text-purple-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-purple-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                    Try This Magic ✨
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
