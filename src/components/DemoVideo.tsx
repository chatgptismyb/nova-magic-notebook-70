
import { useState, useEffect } from 'react';
import { Play, Pause, Sparkles, Wand2, Zap, Star, ArrowRight } from 'lucide-react';

export const DemoVideo = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  const demoSteps = [
    { 
      title: "Write it", 
      description: "Speak or type your thoughts naturally - no complex commands needed",
      icon: "✍️",
      progress: 25,
      content: "Schedule meeting with team tomorrow at 2 PM",
      details: "Nova understands natural language and context"
    },
    { 
      title: "Wish it", 
      description: "Nova processes your intent with magical AI understanding",
      icon: "🌟",
      progress: 50,
      content: "AI analyzing: meeting + team + tomorrow + 2 PM + available calendars",
      details: "Smart analysis of your request and available resources"
    },
    { 
      title: "Watch it happen", 
      description: "Magic becomes reality with automated actions across your apps",
      icon: "✨",
      progress: 100,
      content: "✅ Calendar event created\n📧 Team invites sent\n🔔 Reminder notifications set\n📋 Meeting agenda prepared",
      details: "Real actions executed automatically in your connected apps"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % demoSteps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, demoSteps.length]);

  return (
    <section id="see-magic-in-action" className="py-32 px-6 bg-gradient-to-br from-purple-900 via-amber-900 to-yellow-900 relative overflow-hidden">
      {/* Enhanced magical background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          >
            <div className="text-yellow-300 text-3xl animate-pulse">✨</div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400/30 to-purple-400/30 backdrop-blur-sm px-8 py-4 rounded-full border border-yellow-400/50 mb-8 animate-bounce">
            <Wand2 className="w-6 h-6 text-yellow-400 animate-spin" />
            <span className="text-yellow-200 font-bold text-lg">See Magic in Action</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent animate-fade-in">
            Experience Nova Live
          </h2>
          <div className="bg-gradient-to-br from-amber-100 to-yellow-100 p-8 rounded-3xl border-4 border-yellow-400 max-w-5xl mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <p className="text-3xl text-purple-800 leading-relaxed font-medium">
              Watch how three magical words transform your productivity: 
              <span className="font-bold text-yellow-600 animate-pulse"> Write it. Wish it. Watch it happen.</span>
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Video Interface */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-3xl border-4 border-yellow-400 p-8 shadow-2xl relative overflow-hidden hover:scale-105 transition-transform duration-500">
              {/* Enhanced magical glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-purple-300/20 animate-pulse"></div>
              
              <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border-4 border-amber-500">
                {/* Enhanced video interface */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-purple-400/10">
                  {/* Top bar */}
                  <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
                    <div className="bg-black/60 backdrop-blur-sm rounded-xl px-6 py-3 text-white text-lg font-bold flex items-center gap-3 border border-yellow-400/50">
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                      Magic Notebook - Live Demo
                    </div>
                    <div className="text-yellow-300 text-lg font-bold bg-black/60 backdrop-blur-sm rounded-xl px-4 py-2 border border-purple-400/50">
                      Step {currentStep + 1}/3
                    </div>
                  </div>
                  
                  {/* Center play/pause with enhanced styling */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full blur-2xl opacity-70 group-hover:opacity-90 transition-opacity animate-pulse scale-150"></div>
                      <div className="relative w-32 h-32 bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-2xl border-4 border-white/30">
                        {isPlaying ? (
                          <Pause className="w-12 h-12 text-purple-900 ml-1" />
                        ) : (
                          <Play className="w-12 h-12 text-purple-900 ml-2" />
                        )}
                      </div>
                    </button>
                  </div>
                  
                  {/* Enhanced bottom progress */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black/80 backdrop-blur-sm rounded-3xl p-8 text-white border-2 border-yellow-400/50">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="text-5xl animate-bounce">{demoSteps[currentStep].icon}</div>
                          <div>
                            <h4 className="text-2xl font-bold text-yellow-300 mb-2">{demoSteps[currentStep].title}</h4>
                            <p className="text-lg text-gray-300">{demoSteps[currentStep].description}</p>
                            <p className="text-sm text-purple-300 mt-1">{demoSteps[currentStep].details}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-yellow-300 font-bold text-3xl animate-pulse">{demoSteps[currentStep].progress}%</div>
                          <div className="text-sm text-gray-400">Complete</div>
                        </div>
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-4 mb-6 overflow-hidden border border-amber-400/50">
                        <div 
                          className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 h-4 rounded-full transition-all duration-2000 relative overflow-hidden"
                          style={{ width: `${demoSteps[currentStep].progress}%` }}
                        >
                          <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white/50 animate-pulse"></div>
                        </div>
                      </div>
                      
                      <div className="bg-purple-900/70 rounded-xl p-4 border-2 border-purple-400/50">
                        <pre className="text-base text-purple-200 whitespace-pre-wrap font-mono leading-relaxed">
                          {demoSteps[currentStep].content}
                        </pre>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced magical particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(25)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute animate-ping"
                        style={{
                          left: `${15 + Math.random() * 70}%`,
                          top: `${15 + Math.random() * 70}%`,
                          animationDelay: `${Math.random() * 4}s`,
                          animationDuration: `${1.5 + Math.random()}s`
                        }}
                      >
                        <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-purple-400 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Step-by-step explanation */}
          <div className="space-y-10">
            <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-10 rounded-3xl border-4 border-amber-400 transform -rotate-1 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <h3 className="text-4xl font-bold text-amber-800 mb-8 flex items-center gap-4">
                <Sparkles className="w-10 h-10 text-yellow-600 animate-spin" />
                The Magic Process
              </h3>
              
              <div className="space-y-8">
                {demoSteps.map((step, index) => (
                  <div 
                    key={index}
                    className={`flex items-start gap-6 p-6 rounded-2xl transition-all duration-500 ${
                      currentStep === index 
                        ? 'bg-gradient-to-r from-yellow-200 to-amber-200 border-3 border-yellow-500 scale-105 shadow-lg' 
                        : 'bg-amber-50 border-2 border-amber-200 hover:scale-102'
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl transition-all duration-300 ${
                      currentStep === index 
                        ? 'bg-gradient-to-r from-yellow-400 to-amber-400 animate-bounce scale-110' 
                        : 'bg-amber-300 hover:scale-110'
                    }`}>
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-bold text-2xl mb-3 ${currentStep === index ? 'text-amber-900' : 'text-amber-800'}`}>
                        {step.title}
                      </h4>
                      <p className={`text-lg mb-2 ${currentStep === index ? 'text-amber-800' : 'text-amber-700'}`}>
                        {step.description}
                      </p>
                      <p className={`text-sm ${currentStep === index ? 'text-amber-700' : 'text-amber-600'}`}>
                        {step.details}
                      </p>
                      {currentStep === index && (
                        <div className="mt-4 p-4 bg-white/70 rounded-lg border-2 border-amber-400 animate-fade-in">
                          <p className="text-sm text-amber-800 font-medium leading-relaxed">{step.content}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced CTA */}
            <div className="bg-gradient-to-r from-purple-200 to-yellow-200 p-8 rounded-2xl border-4 border-purple-400 text-center transform rotate-1 hover:rotate-0 transition-transform duration-500 shadow-xl">
              <h4 className="font-bold text-purple-800 mb-4 text-2xl">Ready to Experience Magic?</h4>
              <p className="text-purple-700 mb-6 text-lg">Join thousands transforming their productivity with Nova</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-yellow-600 hover:from-purple-700 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-110 flex items-center justify-center gap-3 text-lg shadow-lg">
                  <Zap className="w-6 h-6" />
                  Start Your Magic Journey
                </button>
                <button className="border-3 border-purple-500 text-purple-700 hover:bg-purple-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-110 flex items-center justify-center gap-3 text-lg">
                  <ArrowRight className="w-6 h-6" />
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
