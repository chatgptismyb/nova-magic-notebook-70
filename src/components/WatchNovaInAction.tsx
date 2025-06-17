import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Wand2, Smartphone, Download, Star, ArrowRight, Sparkles } from 'lucide-react';

export const WatchNovaInAction = () => {
  const [activeScreen, setActiveScreen] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Expanded demo screens based on the reference image
  const demoScreens = [
    {
      title: "Notebook",
      icon: "📓",
      background: "from-yellow-100 to-amber-100",
      content: [
        { type: "action", text: "New Spell", status: "button", icon: "+" },
        { type: "spell", text: "Schedule a dentist appointment", status: "casting", icon: "🦷" },
        { type: "spell", text: "Post a gratitude quote on Twitter", status: "complete", icon: "🐦" },
        { type: "spell", text: "Send latest report to the team", status: "failed", icon: "📊" }
      ],
      navigation: [
        { icon: "📜", label: "Scroll" },
        { icon: "✨", label: "Nova" },
        { icon: "👤", label: "Profile" }
      ]
    },
    {
      title: "Remind me",
      icon: "🪴",
      background: "from-green-100 to-teal-100",
      content: [
        { type: "header", text: "Remind me to water the plants every morning" },
        { type: "status", text: "Reminder", status: "active" },
        { type: "action", text: "Cast Spell", status: "button" }
      ],
      navigation: [
        { icon: "⬅️", label: "Back" },
        { icon: "📝", label: "Notes" },
        { icon: "✨", label: "Nova" }
      ]
    },
    {
      title: "Delivery Scroll",
      icon: "📦",
      background: "from-amber-100 to-yellow-100",
      content: [
        { type: "task", text: "Track shipment for order #12345", status: "succeeded", time: "2:30 PM", icon: "🚚" },
        { type: "task", text: "Create a landing page", status: "completed", time: "11:45 AM", icon: "🌐" },
        { type: "task", text: "Book a table for two at 7 PM", status: "yesterday", icon: "🍽️" }
      ],
      navigation: [
        { icon: "📱", label: "Notebook" },
        { icon: "📊", label: "Tasks" },
        { icon: "👤", label: "Profile" }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setTimeout(() => {
          setActiveScreen((prev) => (prev + 1) % demoScreens.length);
          setIsAnimating(false);
        }, 300);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isAnimating, demoScreens.length]);

  const nextScreen = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveScreen((prev) => (prev + 1) % demoScreens.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const prevScreen = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveScreen((prev) => (prev - 1 + demoScreens.length) % demoScreens.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  // Helper function to render different content types
  const renderContent = (item: any) => {
    switch (item.type) {
      case "action":
        return (
          <div className={`mb-3 ${item.status === 'button' ? 'bg-yellow-200 hover:bg-yellow-300' : ''} p-3 rounded-xl border-2 border-amber-300 flex items-center gap-2 transition-all duration-300 cursor-pointer`}>
            {item.icon && <span className="text-lg">{item.icon}</span>}
            <span className="font-medium text-amber-800">{item.text}</span>
          </div>
        );
      case "spell":
        return (
          <div className="mb-3 bg-white/90 p-4 rounded-xl border-2 border-amber-300 hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium text-amber-800">{item.text}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  item.status === 'casting' ? 'bg-blue-100 text-blue-700' :
                  item.status === 'complete' ? 'bg-green-100 text-green-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {item.status === 'casting' ? 'Casting' : 
                   item.status === 'complete' ? 'Complete' : 'Failed'}
                </span>
                <div className="w-8 h-8 bg-indigo-100 rounded-full overflow-hidden border-2 border-indigo-200">
                  <img 
                    src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
                    alt="Nova" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case "header":
        return (
          <div className="mb-6 text-center">
            <h3 className="text-xl font-bold text-slate-800">{item.text}</h3>
          </div>
        );
      case "status":
        return (
          <div className="mb-6">
            <div className="bg-white/80 px-6 py-3 rounded-xl border-2 border-green-300 inline-block">
              <span className="font-medium text-green-700">{item.text}</span>
            </div>
          </div>
        );
      case "task":
        return (
          <div className="mb-3 bg-white/90 p-4 rounded-xl border-2 border-amber-300 hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-amber-800">{item.text}</span>
              <div className="w-8 h-8 bg-indigo-100 rounded-full overflow-hidden border-2 border-indigo-200">
                <img 
                  src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
                  alt="Nova" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1">
                <span className="text-amber-600">{item.icon}</span>
                <span className="text-amber-600">{item.status === 'succeeded' ? `Succeeded at ${item.time}` : 
                                                 item.status === 'completed' ? `Completed ${item.time}` : 
                                                 item.status}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</span>
                <span className="text-green-600">Nova</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Render navigation bar
  const renderNavigation = (items: any[]) => {
    return (
      <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-amber-200 py-3 px-4 flex justify-around">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-6 h-6 flex items-center justify-center text-amber-700">
              {item.icon}
            </div>
            <span className="text-xs text-amber-700 mt-1">{item.label}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="py-32 px-6 relative bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-200 overflow-hidden">
      {/* Magical background elements */}
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
            <div className="text-amber-400 text-2xl">✨</div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="bg-yellow-200 p-6 rounded-3xl border-4 border-amber-400 transform -rotate-1 hover:rotate-0 transition-transform duration-500 inline-block mb-8">
            <div className="flex items-center gap-3">
              <Smartphone className="w-8 h-8 text-amber-700" />
              <span className="text-amber-800 font-bold text-2xl">See Nova in Action</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-amber-800">
            Write it. Wish it. Watch it happen.
          </h2>
          <div className="bg-amber-100 p-8 rounded-3xl border-4 border-yellow-400 transform rotate-1 hover:rotate-0 transition-transform duration-300 max-w-4xl mx-auto">
            <p className="text-2xl text-amber-700 leading-relaxed">
              Experience how Nova transforms your everyday thoughts into extraordinary results with magical automation.
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
                    <span className="font-semibold">9:41</span>
                    <span className="font-bold text-amber-700">Magic Notebook</span>
                    <div className="w-6 h-3 border-2 border-amber-600 rounded-sm">
                      <div className="w-full h-full bg-green-400 rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* Screen Content */}
                  <div className={`p-6 h-full flex flex-col transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                    {/* Header with back button and title */}
                    <div className="flex items-center mb-6">
                      <ChevronLeft className="w-6 h-6 text-amber-800" />
                      <h3 className="text-2xl font-bold text-amber-800 mx-auto">{demoScreens[activeScreen].title}</h3>
                      {activeScreen === 0 && (
                        <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center">
                          <span className="text-amber-800 font-bold">+</span>
                        </div>
                      )}
                      {activeScreen !== 0 && <div className="w-6 h-6"></div>}
                    </div>
                    
                    {/* Content Area */}
                    <div className={`flex-1 bg-gradient-to-br ${demoScreens[activeScreen].background} rounded-3xl border-4 border-amber-400 p-6 relative overflow-hidden mb-12`}>
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
                        {demoScreens[activeScreen].content.map((item, index) => (
                          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                            {renderContent(item)}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Navigation */}
                    {renderNavigation(demoScreens[activeScreen].navigation)}
                  </div>
                </div>
              </div>
              
              {/* Phone Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 rounded-full blur-xl -z-10 animate-pulse"></div>
            </div>
          </div>

          {/* Step-by-step explanation */}
          <div className="space-y-10">
            <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-10 rounded-3xl border-4 border-amber-400 transform -rotate-1 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <h3 className="text-4xl font-bold text-amber-800 mb-8 flex items-center gap-4">
                <Sparkles className="w-10 h-10 text-yellow-600 animate-spin" />
                The Magic Process
              </h3>
              
              <div className="space-y-8">
                <div className={`flex items-start gap-6 p-6 rounded-2xl transition-all duration-500 ${
                  activeScreen === 0 
                    ? 'bg-gradient-to-r from-yellow-200 to-amber-200 border-3 border-yellow-500 scale-105 shadow-lg' 
                    : 'bg-amber-50 border-2 border-amber-200 hover:scale-102'
                }`}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl transition-all duration-300 ${
                    activeScreen === 0 
                      ? 'bg-gradient-to-r from-yellow-400 to-amber-400 animate-bounce scale-110' 
                      : 'bg-amber-300 hover:scale-110'
                  }`}>
                    📝
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold text-2xl mb-3 ${activeScreen === 0 ? 'text-amber-900' : 'text-amber-800'}`}>
                      Write It
                    </h4>
                    <p className={`text-lg mb-2 ${activeScreen === 0 ? 'text-amber-800' : 'text-amber-700'}`}>
                      Simply write or speak your task naturally
                    </p>
                    <p className={`text-sm ${activeScreen === 0 ? 'text-amber-700' : 'text-amber-600'}`}>
                      No complex commands needed - just express what you want
                    </p>
                    {activeScreen === 0 && (
                      <div className="mt-4 p-4 bg-white/70 rounded-lg border-2 border-amber-400 animate-fade-in">
                        <p className="text-sm text-amber-800 font-medium leading-relaxed">
                          "Schedule a dentist appointment" → Nova understands this is a calendar task
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className={`flex items-start gap-6 p-6 rounded-2xl transition-all duration-500 ${
                  activeScreen === 1 
                    ? 'bg-gradient-to-r from-yellow-200 to-amber-200 border-3 border-yellow-500 scale-105 shadow-lg' 
                    : 'bg-amber-50 border-2 border-amber-200 hover:scale-102'
                }`}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl transition-all duration-300 ${
                    activeScreen === 1 
                      ? 'bg-gradient-to-r from-yellow-400 to-amber-400 animate-bounce scale-110' 
                      : 'bg-amber-300 hover:scale-110'
                  }`}>
                    🧠
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold text-2xl mb-3 ${activeScreen === 1 ? 'text-amber-900' : 'text-amber-800'}`}>
                      Wish It
                    </h4>
                    <p className={`text-lg mb-2 ${activeScreen === 1 ? 'text-amber-800' : 'text-amber-700'}`}>
                      Nova understands your intent and context
                    </p>
                    <p className={`text-sm ${activeScreen === 1 ? 'text-amber-700' : 'text-amber-600'}`}>
                      AI analyzes your request and prepares the right actions
                    </p>
                    {activeScreen === 1 && (
                      <div className="mt-4 p-4 bg-white/70 rounded-lg border-2 border-amber-400 animate-fade-in">
                        <p className="text-sm text-amber-800 font-medium leading-relaxed">
                          "Remind me to water the plants every morning" → Nova creates a recurring reminder
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className={`flex items-start gap-6 p-6 rounded-2xl transition-all duration-500 ${
                  activeScreen === 2 
                    ? 'bg-gradient-to-r from-yellow-200 to-amber-200 border-3 border-yellow-500 scale-105 shadow-lg' 
                    : 'bg-amber-50 border-2 border-amber-200 hover:scale-102'
                }`}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl transition-all duration-300 ${
                    activeScreen === 2 
                      ? 'bg-gradient-to-r from-yellow-400 to-amber-400 animate-bounce scale-110' 
                      : 'bg-amber-300 hover:scale-110'
                  }`}>
                    ✨
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold text-2xl mb-3 ${activeScreen === 2 ? 'text-amber-900' : 'text-amber-800'}`}>
                      Watch It Happen
                    </h4>
                    <p className={`text-lg mb-2 ${activeScreen === 2 ? 'text-amber-800' : 'text-amber-700'}`}>
                      Your wishes become reality automatically
                    </p>
                    <p className={`text-sm ${activeScreen === 2 ? 'text-amber-700' : 'text-amber-600'}`}>
                      Nova executes tasks across your apps and services
                    </p>
                    {activeScreen === 2 && (
                      <div className="mt-4 p-4 bg-white/70 rounded-lg border-2 border-amber-400 animate-fade-in">
                        <p className="text-sm text-amber-800 font-medium leading-relaxed">
                          Nova tracks your shipment, creates your landing page, and books your dinner reservation
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA */}
            <div className="bg-gradient-to-r from-purple-200 to-yellow-200 p-8 rounded-2xl border-4 border-purple-400 text-center transform rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xl">
              <h4 className="font-bold text-purple-800 mb-4 text-2xl flex items-center justify-center gap-3">
                <Star className="w-6 h-6 text-yellow-500" />
                Ready to Experience Magic?
              </h4>
              <p className="text-purple-700 mb-6">Join thousands transforming their productivity with Nova</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-yellow-600 hover:from-purple-700 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-3">
                  <Sparkles className="w-5 h-5" />
                  Start Your Magic Journey
                </button>
                <button className="border-2 border-purple-500 text-purple-700 hover:bg-purple-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3">
                  <ArrowRight className="w-5 h-5" />
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* App Store Download */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-purple-100 to-yellow-100 rounded-3xl p-8 text-center shadow-xl border-4 border-purple-200/50 mb-16">
            <h3 className="text-3xl font-bold text-purple-800 mb-4">Download the Magic</h3>
            <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
              Experience Nova's magical assistance on all your devices. Available now for iOS and Android.
            </p>
            
            {/* Enhanced App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-black hover:bg-gray-800 text-white font-semibold py-5 px-10 rounded-3xl transition-all duration-300 hover:scale-105 flex items-center gap-4 min-w-[240px] shadow-2xl hover:shadow-purple-500/20">
                <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center">
                  <span className="text-black font-bold text-2xl">🍎</span>
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-300">Download on the</div>
                  <div className="text-xl font-bold">App Store</div>
                </div>
                <Download className="w-6 h-6 group-hover:animate-bounce" />
              </button>
              
              <button className="group bg-black hover:bg-gray-800 text-white font-semibold py-5 px-10 rounded-3xl transition-all duration-300 hover:scale-105 flex items-center gap-4 min-w-[240px] shadow-2xl hover:shadow-purple-500/20">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">▶</span>
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-300">Get it on</div>
                  <div className="text-xl font-bold">Google Play</div>
                </div>
                <Download className="w-6 h-6 group-hover:animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};