
import { useState, useEffect } from 'react';
import { Smartphone, Sparkles, Wand2, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

export const NotesSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const appScreens = [
    {
      title: "Write It",
      subtitle: "Capture your thoughts naturally",
      description: "Just write or speak your ideas - Nova understands your intent",
      mockup: {
        header: "🧙‍♀️ Magic Notebook",
        content: "Need to organize my project tasks and set up meetings for next week",
        highlight: "Voice-to-text magic ✨"
      },
      color: "from-yellow-300 to-amber-300"
    },
    {
      title: "Wish It", 
      subtitle: "Nova transforms your ideas",
      description: "Watch as Nova intelligently organizes and enhances your notes",
      mockup: {
        header: "✨ Nova's Magic",
        content: "✅ Project Planning\n📅 Schedule Team Meeting\n📋 Task Breakdown\n⏰ Set Reminders",
        highlight: "Auto-organized & prioritized"
      },
      color: "from-amber-300 to-yellow-300"
    },
    {
      title: "Watch It Happen",
      subtitle: "Automation comes alive",
      description: "Your notes become living workflows that actually get things done",
      mockup: {
        header: "⚡ Active Workflows",
        content: "🔄 Meeting scheduled for Tuesday\n📧 Team invited automatically\n📊 Project dashboard created\n🎯 Goals tracked daily",
        highlight: "Everything automated ⚡"
      },
      color: "from-yellow-200 to-amber-200"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % appScreens.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, appScreens.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setActiveSlide((prev) => (prev + 1) % appScreens.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setActiveSlide((prev) => (prev - 1 + appScreens.length) % appScreens.length);
  };

  return (
    <section className="py-32 px-6 relative bg-gradient-to-br from-amber-50 via-yellow-100 to-amber-200 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 bg-yellow-200 p-6 rounded-3xl border-4 border-amber-400 mb-8">
            <BookOpen className="w-8 h-8 text-amber-700" />
            <h2 className="text-4xl font-bold text-amber-800">Magic in Your Pocket</h2>
            <Sparkles className="w-8 h-8 text-amber-600 animate-pulse" />
          </div>
          
          <p className="text-2xl text-amber-700 max-w-4xl mx-auto leading-relaxed">
            Experience the three steps of magical productivity transformation
          </p>
        </div>

        {/* Main Demo Area */}
        <div className="relative">
          {/* Background magical elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <div
                key={`magic-${i}`}
                className="absolute animate-float opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${4 + Math.random() * 2}s`
                }}
              >
                <div className="text-amber-400 text-2xl">⭐</div>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Phone Mockup */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Phone Frame */}
                <div className="w-80 h-[600px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3rem] border-8 border-slate-700 shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  {/* Screen */}
                  <div className="w-full h-full bg-gradient-to-br from-yellow-50 to-amber-50 relative overflow-hidden">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center p-4 text-amber-800 text-sm bg-gradient-to-r from-yellow-200 to-amber-200 border-b-2 border-amber-300">
                      <span className="font-semibold">9:41 ✨</span>
                      <span className="font-bold text-amber-700 flex items-center gap-2">
                        <Wand2 className="w-4 h-4" />
                        Magic Notebook
                      </span>
                      <div className="w-6 h-3 border-2 border-amber-600 rounded-sm">
                        <div className="w-full h-full bg-green-400 rounded-sm animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* App Content with Slide Animation */}
                    <div className="p-6 h-full flex flex-col relative overflow-hidden">
                      <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                      >
                        {appScreens.map((screen, index) => (
                          <div key={index} className="w-full flex-shrink-0 flex flex-col">
                            {/* Screen Header */}
                            <div className="text-center mb-6">
                              <div className="text-lg font-bold text-amber-800 mb-2">
                                {screen.mockup.header}
                              </div>
                              <div className="w-16 h-1 bg-amber-600 mx-auto rounded-full"></div>
                            </div>
                            
                            {/* Content Area */}
                            <div className={`flex-1 bg-gradient-to-br ${screen.color} rounded-3xl border-4 border-amber-400 p-6 relative overflow-hidden`}>
                              {/* Floating sparkles */}
                              <div className="absolute inset-0 pointer-events-none">
                                {[...Array(8)].map((_, i) => (
                                  <div
                                    key={i}
                                    className="absolute animate-ping opacity-40"
                                    style={{
                                      left: `${20 + Math.random() * 60}%`,
                                      top: `${20 + Math.random() * 60}%`,
                                      animationDelay: `${Math.random() * 2}s`,
                                      fontSize: `${0.8 + Math.random() * 0.4}rem`
                                    }}
                                  >
                                    ✨
                                  </div>
                                ))}
                              </div>
                              
                              {/* Main Content */}
                              <div className="bg-white/90 p-4 rounded-2xl border-2 border-amber-300 mb-4 shadow-lg">
                                <p className="text-amber-800 text-sm leading-relaxed whitespace-pre-line">
                                  {screen.mockup.content}
                                </p>
                              </div>
                              
                              {/* Magic Enhancement */}
                              <div className="bg-gradient-to-r from-amber-400/80 to-yellow-400/80 p-3 rounded-xl border-2 border-amber-500">
                                <div className="flex items-center gap-2">
                                  <Wand2 className="w-4 h-4 text-amber-700" />
                                  <p className="text-amber-800 text-xs font-medium">
                                    {screen.mockup.highlight}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Phone Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 rounded-full blur-xl -z-10 animate-pulse"></div>
              </div>
            </div>

            {/* Right Side - Step Details */}
            <div className="space-y-8">
              {/* Current Step Display */}
              <div className="bg-gradient-to-br from-yellow-200 to-amber-200 p-8 rounded-3xl border-4 border-amber-400 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-300 to-yellow-300 rounded-2xl flex items-center justify-center border-3 border-amber-500 text-2xl">
                    {activeSlide + 1}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-amber-800 mb-2">
                      {appScreens[activeSlide].title}
                    </h3>
                    <p className="text-lg text-amber-700 font-medium">
                      {appScreens[activeSlide].subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-xl text-amber-700 leading-relaxed mb-6">
                  {appScreens[activeSlide].description}
                </p>
                
                {/* Navigation Controls */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={prevSlide}
                    className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>
                  
                  <div className="flex gap-3">
                    {appScreens.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setIsAutoPlaying(false);
                          setActiveSlide(i);
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          i === activeSlide 
                            ? 'bg-amber-700 scale-125' 
                            : 'bg-amber-400 hover:bg-amber-500 hover:scale-110'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={nextSlide}
                    className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/80 p-6 rounded-2xl border-3 border-yellow-300 text-center hover:scale-105 transition-transform">
                  <div className="text-3xl mb-3">🧠</div>
                  <h4 className="font-bold text-amber-800 mb-2">Smart Understanding</h4>
                  <p className="text-amber-700 text-sm">Nova comprehends your natural language</p>
                </div>
                <div className="bg-white/80 p-6 rounded-2xl border-3 border-amber-300 text-center hover:scale-105 transition-transform">
                  <div className="text-3xl mb-3">⚡</div>
                  <h4 className="font-bold text-amber-800 mb-2">Instant Magic</h4>
                  <p className="text-amber-700 text-sm">Transform thoughts into actions instantly</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-amber-200 to-yellow-200 p-8 rounded-3xl border-4 border-amber-400 inline-block">
            <h3 className="text-3xl font-bold text-amber-800 mb-4 flex items-center justify-center gap-3">
              <Smartphone className="w-8 h-8" />
              Experience the Magic
              <Sparkles className="w-6 h-6 animate-pulse" />
            </h3>
            <p className="text-amber-700 text-lg mb-6">
              Download Magic Notebook and start your productivity transformation
            </p>
            
            <div className="flex justify-center gap-4">
              <button className="bg-gradient-to-r from-slate-800 to-slate-900 text-white px-6 py-3 rounded-2xl hover:scale-105 transition-transform flex items-center gap-3">
                <span className="text-2xl">📱</span>
                <div className="text-left">
                  <div className="text-sm opacity-90">Download on</div>
                  <div className="font-bold">App Store</div>
                </div>
              </button>
              <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-2xl hover:scale-105 transition-transform flex items-center gap-3">
                <span className="text-2xl">▶</span>
                <div className="text-left">
                  <div className="text-sm opacity-90">Get it on</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
