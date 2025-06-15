
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Wand2, Smartphone, Play, Sparkles, Mic, Send } from 'lucide-react';

export const MagicAppDemo = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const demoScreens = [
    {
      title: "Write It",
      subtitle: "Natural voice & text input",
      background: "from-yellow-300 to-amber-200",
      content: {
        type: "input",
        placeholder: "Try saying: 'Plan my weekend trip to Paris'",
        demoText: "Plan my weekend trip to Paris",
        response: "🎯 Got it! Let me help you plan an amazing Paris trip..."
      },
      features: ["Voice-to-text magic", "Natural language", "Instant understanding"]
    },
    {
      title: "Wish It", 
      subtitle: "Nova transforms your ideas",
      background: "from-amber-300 to-yellow-300",
      content: {
        type: "processing",
        items: [
          { icon: "✈️", text: "Flight options researched", status: "complete" },
          { icon: "🏨", text: "Hotels with best reviews found", status: "complete" },
          { icon: "🗺️", text: "3-day itinerary created", status: "processing" },
          { icon: "📅", text: "Calendar events scheduled", status: "pending" }
        ]
      },
      features: ["AI understanding", "Smart organization", "Intelligent planning"]
    },
    {
      title: "Watch It Happen",
      subtitle: "Magic becomes reality",
      background: "from-yellow-200 to-amber-300",
      content: {
        type: "results",
        items: [
          { icon: "✅", text: "Flight booked for Friday 9 AM", action: "View confirmation" },
          { icon: "🏨", text: "Hotel Le Marais reserved", action: "See details" },
          { icon: "📧", text: "Itinerary shared with friends", action: "Open email" },
          { icon: "⏰", text: "Reminders set for packing", action: "View tasks" }
        ]
      },
      features: ["Automatic booking", "Real actions", "Complete automation"]
    },
    {
      title: "Living Workflows",
      subtitle: "Your digital assistant at work", 
      background: "from-amber-200 to-yellow-200",
      content: {
        type: "dashboard",
        stats: [
          { label: "Tasks Automated", value: "47", trend: "+12 today" },
          { label: "Time Saved", value: "3.2h", trend: "This week" },
          { label: "Notes Processed", value: "156", trend: "+23 today" }
        ],
        activities: [
          "📊 Weekly report generated",
          "📞 Meeting scheduled with Sarah",
          "🎯 Project deadlines updated",
          "📨 Follow-up emails sent"
        ]
      },
      features: ["Daily automation", "Smart tracking", "Seamless integration"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setTimeout(() => {
          setActiveDemo((prev) => (prev + 1) % demoScreens.length);
          setIsAnimating(false);
        }, 300);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  // Typing animation for first screen
  useEffect(() => {
    if (activeDemo === 0 && !isTyping) {
      setIsTyping(true);
      const text = demoScreens[0].content.demoText;
      let i = 0;
      setTypingText('');
      
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          setTypingText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
        }
      }, 100);

      return () => clearInterval(typeInterval);
    }
  }, [activeDemo]);

  const nextDemo = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demoScreens.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const prevDemo = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev - 1 + demoScreens.length) % demoScreens.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const renderScreenContent = (screen: typeof demoScreens[0]) => {
    switch (screen.content.type) {
      case 'input':
        return (
          <div className="space-y-4">
            <div className="bg-white/90 p-4 rounded-2xl border-2 border-amber-300">
              <div className="flex items-center gap-3 mb-3">
                <Mic className="w-5 h-5 text-amber-600 animate-pulse" />
                <div className="text-amber-700 text-sm font-medium">Voice Input Active</div>
              </div>
              <div className="text-amber-800 text-lg min-h-[60px] flex items-center">
                {typingText}
                {isTyping && <span className="animate-pulse">|</span>}
              </div>
            </div>
            {typingText && (
              <div className="bg-gradient-to-r from-amber-400/80 to-yellow-400/80 p-3 rounded-xl border-2 border-amber-500 animate-fade-in">
                <div className="flex items-center gap-2">
                  <Wand2 className="w-4 h-4 text-amber-700" />
                  <p className="text-amber-800 text-sm font-medium">
                    {screen.content.response}
                  </p>
                </div>
              </div>
            )}
          </div>
        );

      case 'processing':
        return (
          <div className="space-y-3">
            {screen.content.items.map((item, i) => (
              <div 
                key={i}
                className="bg-white/90 p-4 rounded-2xl border-2 border-amber-300 flex items-center gap-3"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <span className="text-xl">{item.icon}</span>
                <div className="flex-1">
                  <p className="text-amber-800 text-sm font-medium">{item.text}</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  item.status === 'complete' ? 'bg-green-400' :
                  item.status === 'processing' ? 'bg-blue-400 animate-pulse' :
                  'bg-gray-300'
                }`} />
              </div>
            ))}
          </div>
        );

      case 'results':
        return (
          <div className="space-y-3">
            {screen.content.items.map((item, i) => (
              <div 
                key={i}
                className="bg-white/90 p-4 rounded-2xl border-2 border-amber-300 hover:scale-105 transition-transform cursor-pointer"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-lg">{item.icon}</span>
                  <p className="text-amber-800 text-sm font-medium flex-1">{item.text}</p>
                </div>
                <button className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-lg hover:bg-amber-100 transition-colors">
                  {item.action}
                </button>
              </div>
            ))}
          </div>
        );

      case 'dashboard':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              {screen.content.stats.map((stat, i) => (
                <div key={i} className="bg-white/90 p-3 rounded-xl border-2 border-amber-300 text-center">
                  <div className="text-lg font-bold text-amber-800">{stat.value}</div>
                  <div className="text-xs text-amber-600">{stat.label}</div>
                  <div className="text-xs text-green-600">{stat.trend}</div>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              {screen.content.activities.map((activity, i) => (
                <div key={i} className="bg-white/90 p-2 rounded-lg border border-amber-300 text-amber-800 text-sm">
                  {activity}
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-32 px-6 relative bg-gradient-to-br from-yellow-100 via-amber-50 to-yellow-200 overflow-hidden">
      {/* Magical background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="bg-yellow-200 p-6 rounded-3xl border-4 border-amber-400 transform -rotate-1 hover:rotate-0 transition-transform duration-500 inline-block mb-8">
            <div className="flex items-center gap-3">
              <Smartphone className="w-8 h-8 text-amber-700" />
              <span className="text-amber-800 font-bold text-2xl">Experience the Magic</span>
              <Sparkles className="w-8 h-8 text-amber-600 animate-pulse" />
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-amber-800">
            Write it. Wish it. Watch it happen.
          </h2>
          <div className="bg-amber-100 p-8 rounded-3xl border-4 border-yellow-400 transform rotate-1 hover:rotate-0 transition-transform duration-300 max-w-4xl mx-auto">
            <p className="text-2xl text-amber-700 leading-relaxed">
              Don't just read about magic - experience it. Touch, swipe, and feel how Nova transforms your everyday thoughts into extraordinary results.
            </p>
          </div>
        </div>

        {/* Interactive Demo Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone Mockup */}
          <div className="relative flex justify-center">
            <div className="relative transform hover:scale-105 transition-transform duration-500">
              <div className="w-80 h-[650px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3.5rem] border-8 border-slate-700 shadow-2xl overflow-hidden">
                {/* Screen */}
                <div className="w-full h-full bg-gradient-to-br from-yellow-50 to-amber-50 relative overflow-hidden">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center p-6 text-amber-800 text-sm border-b-2 border-amber-300 z-20 relative">
                    <span className="font-semibold">9:41 ✨</span>
                    <span className="font-bold text-amber-700 flex items-center gap-2">
                      <img 
                        src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
                        alt="Nova" 
                        className="w-5 h-5 rounded-full"
                      />
                      Magic Notebook
                    </span>
                    <div className="w-6 h-3 border-2 border-amber-600 rounded-sm">
                      <div className="w-full h-full bg-green-400 rounded-sm animate-pulse"></div>
                    </div>
                  </div>
                  
                  {/* Dynamic Screen Content */}
                  <div className={`p-6 h-full flex flex-col transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                    {/* Screen Header */}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-amber-800 mb-2 flex items-center justify-center gap-2">
                        <span className="text-3xl">{activeDemo + 1}</span>
                        {demoScreens[activeDemo].title}
                      </h3>
                      <p className="text-amber-600 text-sm">{demoScreens[activeDemo].subtitle}</p>
                      <div className="w-16 h-1 bg-amber-600 mx-auto rounded-full mt-2"></div>
                    </div>
                    
                    {/* Content Area */}
                    <div className={`flex-1 bg-gradient-to-br ${demoScreens[activeDemo].background} rounded-3xl border-4 border-amber-400 p-6 relative overflow-hidden`}>
                      {/* Floating sparkles */}
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(10)].map((_, i) => (
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
                      
                      {/* Screen Content */}
                      <div className="relative z-10">
                        {renderScreenContent(demoScreens[activeDemo])}
                      </div>
                    </div>
                    
                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-6">
                      <button 
                        onClick={prevDemo}
                        className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors shadow-lg"
                      >
                        <ChevronLeft className="w-6 h-6 text-white" />
                      </button>
                      
                      <div className="flex gap-2">
                        {demoScreens.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => !isAnimating && setActiveDemo(i)}
                            className={`w-3 h-3 rounded-full transition-all ${
                              i === activeDemo 
                                ? 'bg-amber-600 scale-125' 
                                : 'bg-amber-300 hover:bg-amber-400'
                            }`}
                          />
                        ))}
                      </div>
                      
                      <button 
                        onClick={nextDemo}
                        className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors shadow-lg"
                      >
                        <ChevronRight className="w-6 h-6 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Phone Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 rounded-full blur-xl -z-10 animate-pulse"></div>
            </div>
          </div>

          {/* Interactive Features Panel */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-yellow-200 to-amber-200 p-8 rounded-3xl border-4 border-amber-400 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-300 to-yellow-300 rounded-2xl flex items-center justify-center border-3 border-amber-500 text-3xl">
                  {activeDemo + 1}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-amber-800 mb-2">
                    {demoScreens[activeDemo].title}
                  </h3>
                  <p className="text-lg text-amber-700 font-medium">
                    {demoScreens[activeDemo].subtitle}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {demoScreens[activeDemo].features.map((feature, i) => (
                  <div key={i} className="bg-white/80 p-4 rounded-2xl border-2 border-amber-300 flex items-center gap-3 hover:scale-105 transition-transform">
                    <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{i + 1}</span>
                    </div>
                    <span className="text-amber-800 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Magic Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/80 p-6 rounded-2xl border-3 border-yellow-300 text-center hover:scale-105 transition-transform">
                <div className="text-4xl mb-3">🚀</div>
                <div className="text-2xl font-bold text-amber-800">3.2hrs</div>
                <p className="text-amber-700 text-sm">Saved daily</p>
              </div>
              <div className="bg-white/80 p-6 rounded-2xl border-3 border-amber-300 text-center hover:scale-105 transition-transform">
                <div className="text-4xl mb-3">⚡</div>
                <div className="text-2xl font-bold text-amber-800">47</div>
                <p className="text-amber-700 text-sm">Tasks automated</p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-8 py-4 rounded-2xl text-xl font-bold hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-3 mx-auto">
                <Play className="w-6 h-6" />
                Start Your Magic Journey
                <Sparkles className="w-6 h-6 animate-pulse" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
