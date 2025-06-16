
import { useState, useEffect } from 'react';
import { Play, Pause, Sparkles, Wand2, Zap, Star, ArrowRight, Download } from 'lucide-react';

export const WebAppDemo = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  const demoSteps = [
    { 
      title: "Write it", 
      description: "Speak or type your thoughts naturally - no complex commands needed",
      icon: "✍️",
      progress: 25,
      content: "Schedule meeting with team tomorrow at 2 PM",
      details: "Nova understands natural language and context",
      webInterface: {
        input: "Schedule meeting with team tomorrow at 2 PM",
        aiResponse: "I'll help you schedule that meeting...",
        status: "processing"
      }
    },
    { 
      title: "Wish it", 
      description: "Nova processes your intent with magical AI understanding",
      icon: "🌟",
      progress: 50,
      content: "AI analyzing: meeting + team + tomorrow + 2 PM + available calendars",
      details: "Smart analysis of your request and available resources",
      webInterface: {
        input: "Schedule meeting with team tomorrow at 2 PM",
        aiResponse: "Found 3 team members available. Checking calendar conflicts...",
        status: "analyzing"
      }
    },
    { 
      title: "Watch it happen", 
      description: "Magic becomes reality with automated actions across your apps",
      icon: "✨",
      progress: 100,
      content: "✅ Calendar event created\n📧 Team invites sent\n🔔 Reminder notifications set\n📋 Meeting agenda prepared",
      details: "Real actions executed automatically in your connected apps",
      webInterface: {
        input: "Schedule meeting with team tomorrow at 2 PM",
        aiResponse: "Meeting scheduled successfully! Invites sent to 3 team members.",
        status: "complete"
      }
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % demoSteps.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, demoSteps.length]);

  return (
    <section id="web-app-demo" className="py-32 px-6 bg-gradient-to-br from-orange-900 via-yellow-900 to-orange-900 relative overflow-hidden">
      {/* Enhanced magical background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
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
            <div className="text-orange-300 text-3xl animate-pulse">✨</div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-400/30 to-yellow-400/30 backdrop-blur-sm px-8 py-4 rounded-full border border-orange-400/50 mb-8 animate-bounce">
            <Wand2 className="w-6 h-6 text-orange-400 animate-spin" />
            <span className="text-orange-200 font-bold text-lg">Experience the Web App</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent animate-fade-in">
            Desktop Magic
          </h2>
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-8 rounded-3xl border-4 border-orange-400 max-w-5xl mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <p className="text-3xl text-orange-800 leading-relaxed font-medium">
              The full Magic Notebook experience on your computer: 
              <span className="font-bold text-yellow-600 animate-pulse"> More power, More magic, More productivity.</span>
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Web App Interface */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl border-4 border-orange-400 p-8 shadow-2xl relative overflow-hidden hover:scale-105 transition-transform duration-500">
              {/* Enhanced magical glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-300/20 to-yellow-300/20 animate-pulse"></div>
              
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border-4 border-orange-500">
                {/* Web app interface */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-yellow-400/10">
                  {/* Top browser bar */}
                  <div className="absolute top-0 left-0 right-0 bg-slate-700 px-6 py-3 flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-slate-600 rounded-lg px-4 py-1 text-white text-sm">
                      magicnotebook.app
                    </div>
                  </div>
                  
                  {/* App content */}
                  <div className="pt-16 p-6 h-96">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6 bg-orange-400/20 backdrop-blur-sm rounded-xl p-4">
                      <img 
                        src="/lovable-uploads/be91958b-2280-433a-a64a-5e34429b27ea.png" 
                        alt="Nova" 
                        className="w-10 h-10 rounded-full animate-nova-pulse"
                      />
                      <div>
                        <h3 className="text-white font-bold text-lg">Magic Notebook</h3>
                        <p className="text-orange-300 text-sm">Your AI-powered productivity companion</p>
                      </div>
                    </div>
                    
                    {/* Demo interface */}
                    <div className="space-y-4">
                      <div className="bg-white/90 rounded-xl p-4 border border-orange-300">
                        <div className="text-sm text-orange-600 mb-2">You:</div>
                        <div className="text-orange-800 font-medium">
                          {demoSteps[currentStep].webInterface.input}
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl p-4 border border-orange-300">
                        <div className="flex items-center gap-2 mb-2">
                          <img 
                            src="/lovable-uploads/be91958b-2280-433a-a64a-5e34429b27ea.png" 
                            alt="Nova" 
                            className="w-5 h-5 rounded-full"
                          />
                          <div className="text-sm text-orange-600">Nova:</div>
                        </div>
                        <div className="text-orange-800 font-medium">
                          {demoSteps[currentStep].webInterface.aiResponse}
                        </div>
                        
                        <div className="mt-3 flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${
                            demoSteps[currentStep].webInterface.status === 'processing' ? 'bg-blue-400 animate-pulse' :
                            demoSteps[currentStep].webInterface.status === 'analyzing' ? 'bg-yellow-400 animate-pulse' :
                            'bg-green-400'
                          }`}></div>
                          <span className="text-xs text-orange-600 capitalize">
                            {demoSteps[currentStep].webInterface.status}
                          </span>
                        </div>
                      </div>
                      
                      {/* Progress indicator */}
                      <div className="bg-slate-700/50 rounded-xl p-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-orange-300 text-sm font-medium">
                            Step {currentStep + 1}: {demoSteps[currentStep].title}
                          </span>
                          <span className="text-orange-300 text-sm">
                            {demoSteps[currentStep].progress}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-600 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-orange-400 to-yellow-400 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${demoSteps[currentStep].progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Play/pause control */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-16 h-16 bg-orange-400/80 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-orange-500/80 transition-colors shadow-2xl"
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8 text-white" />
                      ) : (
                        <Play className="w-8 h-8 text-white ml-1" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Step-by-step explanation */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-8 rounded-3xl border-4 border-yellow-400 transform -rotate-1 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <h3 className="text-4xl font-bold text-orange-800 mb-6 flex items-center gap-4">
                <Sparkles className="w-10 h-10 text-orange-600 animate-spin" />
                Web App Features
              </h3>
              
              <div className="space-y-6">
                {demoSteps.map((step, index) => (
                  <div 
                    key={index}
                    className={`flex items-start gap-4 p-4 rounded-2xl transition-all duration-500 ${
                      currentStep === index 
                        ? 'bg-gradient-to-r from-orange-200 to-yellow-200 border-3 border-orange-500 scale-105 shadow-lg' 
                        : 'bg-yellow-50 border-2 border-orange-200 hover:scale-102'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all duration-300 ${
                      currentStep === index 
                        ? 'bg-gradient-to-r from-orange-400 to-yellow-400 animate-bounce scale-110' 
                        : 'bg-orange-300 hover:scale-110'
                    }`}>
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-bold text-xl mb-2 ${currentStep === index ? 'text-orange-900' : 'text-orange-800'}`}>
                        {step.title}
                      </h4>
                      <p className={`text-base mb-2 ${currentStep === index ? 'text-orange-800' : 'text-orange-700'}`}>
                        {step.description}
                      </p>
                      <p className={`text-sm ${currentStep === index ? 'text-orange-700' : 'text-orange-600'}`}>
                        {step.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download section */}
            <div className="bg-gradient-to-r from-orange-200 to-yellow-200 p-6 rounded-2xl border-4 border-orange-400 text-center transform rotate-1 hover:rotate-0 transition-transform duration-500 shadow-xl">
              <h4 className="font-bold text-orange-800 mb-3 text-xl flex items-center justify-center gap-2">
                <Download className="w-6 h-6 text-orange-600" />
                Access Everywhere
              </h4>
              <p className="text-orange-700 mb-4 text-base">Experience Magic Notebook on all your devices</p>
              <div className="flex flex-col gap-3">
                <button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
                  <Zap className="w-5 h-5" />
                  Open Web App
                </button>
                <div className="flex gap-3">
                  <button className="flex-1 border-2 border-orange-500 text-orange-700 hover:bg-orange-100 font-semibold py-2 px-4 rounded-xl transition-all duration-300 hover:scale-105 text-sm">
                    📱 Mobile App
                  </button>
                  <button className="flex-1 border-2 border-orange-500 text-orange-700 hover:bg-orange-100 font-semibold py-2 px-4 rounded-xl transition-all duration-300 hover:scale-105 text-sm">
                    💻 Desktop App
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
