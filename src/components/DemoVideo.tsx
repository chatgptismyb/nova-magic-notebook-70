
import { useState, useEffect } from 'react';
import { Play, Pause, Sparkles, Wand2, Zap, Star } from 'lucide-react';

export const DemoVideo = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  const demoSteps = [
    { 
      title: "Write it", 
      description: "Speak or type your thoughts naturally",
      icon: "✍️",
      progress: 25,
      content: "Schedule meeting with team tomorrow at 2 PM"
    },
    { 
      title: "Wish it", 
      description: "Nova understands and processes your intent",
      icon: "🌟",
      progress: 50,
      content: "AI analyzing: meeting + team + tomorrow + 2 PM"
    },
    { 
      title: "Watch it happen", 
      description: "Magic becomes reality with automated actions",
      icon: "✨",
      progress: 100,
      content: "✅ Calendar event created\n📧 Invites sent\n🔔 Reminder set"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % demoSteps.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, demoSteps.length]);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-900 via-amber-900 to-yellow-900 relative overflow-hidden">
      {/* Magical background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-slow opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className="text-yellow-300 text-2xl">✨</div>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400/20 to-purple-400/20 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-400/30 mb-6">
            <Wand2 className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="text-yellow-200 font-semibold">Experience the Magic</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
            See Nova in Action
          </h2>
          <p className="text-2xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            Watch how three simple words transform your productivity forever: 
            <span className="font-bold text-yellow-300"> Write it. Wish it. Watch it happen.</span>
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Video Interface */}
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-3xl border-4 border-yellow-400 p-8 shadow-2xl relative overflow-hidden">
              {/* Magical glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/10 to-purple-300/10 animate-pulse"></div>
              
              <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden">
                {/* Enhanced video interface */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-purple-400/5">
                  {/* Top bar */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                    <div className="bg-black/40 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-sm font-medium flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                      Magic Notebook Live Demo
                    </div>
                    <div className="text-yellow-300 text-sm font-medium bg-black/40 backdrop-blur-sm rounded-lg px-3 py-1">
                      {(currentStep + 1) * 1.2}s / 3.6s
                    </div>
                  </div>
                  
                  {/* Center play/pause with enhanced styling */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity animate-pulse"></div>
                      <div className="relative w-24 h-24 bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg border-4 border-white/20">
                        {isPlaying ? (
                          <Pause className="w-10 h-10 text-purple-900 ml-1" />
                        ) : (
                          <Play className="w-10 h-10 text-purple-900 ml-2" />
                        )}
                      </div>
                    </button>
                  </div>
                  
                  {/* Enhanced bottom progress */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 text-white">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="text-3xl">{demoSteps[currentStep].icon}</div>
                          <div>
                            <h4 className="text-lg font-bold text-yellow-300">{demoSteps[currentStep].title}</h4>
                            <p className="text-sm text-gray-300">{demoSteps[currentStep].description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-yellow-300 font-bold text-lg">{demoSteps[currentStep].progress}%</div>
                          <div className="text-xs text-gray-400">Complete</div>
                        </div>
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-3 mb-4 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 h-3 rounded-full transition-all duration-1000 relative overflow-hidden"
                          style={{ width: `${demoSteps[currentStep].progress}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                      
                      <div className="bg-purple-900/50 rounded-lg p-3 border border-purple-400/30">
                        <pre className="text-sm text-purple-200 whitespace-pre-wrap font-mono">
                          {demoSteps[currentStep].content}
                        </pre>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced magical particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute animate-ping"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${Math.random() * 3}s`,
                          animationDuration: `${1 + Math.random()}s`
                        }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-purple-400 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Step-by-step explanation */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-8 rounded-3xl border-4 border-amber-400 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-amber-800 mb-6 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-yellow-600" />
                The Magic Process
              </h3>
              
              <div className="space-y-6">
                {demoSteps.map((step, index) => (
                  <div 
                    key={index}
                    className={`flex items-start gap-4 p-4 rounded-2xl transition-all duration-500 ${
                      currentStep === index 
                        ? 'bg-gradient-to-r from-yellow-200 to-amber-200 border-2 border-yellow-400 scale-105' 
                        : 'bg-amber-50 border-2 border-amber-200'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all duration-300 ${
                      currentStep === index 
                        ? 'bg-gradient-to-r from-yellow-400 to-amber-400 animate-bounce' 
                        : 'bg-amber-300'
                    }`}>
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-bold text-lg ${currentStep === index ? 'text-amber-900' : 'text-amber-800'}`}>
                        {step.title}
                      </h4>
                      <p className={`${currentStep === index ? 'text-amber-800' : 'text-amber-700'}`}>
                        {step.description}
                      </p>
                      {currentStep === index && (
                        <div className="mt-2 p-3 bg-white/50 rounded-lg border border-amber-300">
                          <p className="text-sm text-amber-800 font-medium">{step.content}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced CTA */}
            <div className="bg-gradient-to-r from-purple-200 to-yellow-200 p-6 rounded-2xl border-4 border-purple-400 text-center transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <h4 className="font-bold text-purple-800 mb-2 text-xl">Ready to Experience Magic?</h4>
              <p className="text-purple-700 mb-4">Join thousands transforming their productivity</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-yellow-600 hover:from-purple-700 hover:to-yellow-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" />
                  Start Free Trial
                </button>
                <button className="border-2 border-purple-500 text-purple-700 hover:bg-purple-100 font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  <Star className="w-5 h-5" />
                  See More Demos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
