
import { useState, useEffect } from 'react';
import { Play, ArrowLeft, Wand2, Sparkles, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';

const Showcase = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const demos = [
    {
      title: "Voice to Action Magic",
      description: "Transform speech into instant productivity",
      icon: "🎤",
      screens: [
        { 
          title: "Voice Input", 
          content: "🎤 'Schedule a meeting with Sarah tomorrow at 2 PM about the project'",
          color: "from-blue-100 via-cyan-50 to-blue-100",
          step: "Speak naturally"
        },
        { 
          title: "Nova Processing", 
          content: "🤖 Analyzing: meeting + Sarah + tomorrow + 2PM + project context",
          color: "from-purple-100 via-violet-50 to-purple-100",
          step: "AI understanding"
        },
        { 
          title: "Magic Complete", 
          content: "✅ Meeting scheduled\n📧 Sarah invited\n🔔 Reminder set\n📋 Agenda prepared",
          color: "from-green-100 via-emerald-50 to-green-100",
          step: "Actions executed"
        }
      ]
    },
    {
      title: "Smart Note Organization",
      description: "Watch chaos become perfect order",
      icon: "🧠",
      screens: [
        { 
          title: "Scattered Thoughts", 
          content: "💭 Random ideas, grocery list, work tasks, vacation plans all mixed together",
          color: "from-orange-100 via-amber-50 to-orange-100",
          step: "Messy input"
        },
        { 
          title: "AI Analysis", 
          content: "🔍 Categorizing by context, priority, and relationships between ideas",
          color: "from-yellow-100 via-amber-50 to-yellow-100",
          step: "Smart sorting"
        },
        { 
          title: "Perfect Structure", 
          content: "📁 Work: 3 tasks\n🏠 Personal: 5 items\n✈️ Travel: Complete plan\n🛒 Shopping: Organized list",
          color: "from-emerald-100 via-green-50 to-emerald-100",
          step: "Organized magic"
        }
      ]
    },
    {
      title: "Automated Project Planning",
      description: "One idea becomes a complete roadmap",
      icon: "🚀",
      screens: [
        { 
          title: "Simple Idea", 
          content: "📝 'Plan vacation to Japan next summer'",
          color: "from-pink-100 via-rose-50 to-pink-100",
          step: "Basic thought"
        },
        { 
          title: "Nova's Intelligence", 
          content: "🧙‍♀️ Breaking into: research, budgeting, booking, itinerary, packing phases",
          color: "from-purple-100 via-indigo-50 to-purple-100",
          step: "Smart breakdown"
        },
        { 
          title: "Complete Project", 
          content: "📋 15 actionable tasks\n📅 Timeline with deadlines\n💰 Budget tracker\n✈️ Booking reminders\n🎌 Cultural research",
          color: "from-blue-100 via-sky-50 to-blue-100",
          step: "Full roadmap"
        }
      ]
    }
  ];

  // Auto-cycle through demos
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, demos.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-amber-100 to-purple-200 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={`bg-magic-${i}`}
            className="absolute animate-float-slow opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 0.5})`
            }}
          >
            <div className="text-yellow-400 text-xl">✨</div>
          </div>
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/5 via-transparent to-purple-300/5"></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-12">
          
          {/* Enhanced Back Button */}
          <Link to="/" className="inline-flex items-center gap-3 mb-8 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 hover:text-amber-900 transition-all duration-300 px-4 py-2 rounded-xl border-2 border-amber-300 hover:border-amber-400 hover:scale-105 shadow-lg">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back to Magic</span>
          </Link>

          {/* Enhanced Header */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-br from-amber-200 to-yellow-200 p-8 rounded-3xl border-4 border-yellow-400 transform rotate-1 hover:rotate-0 transition-transform duration-300 inline-block mb-8 shadow-2xl">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <span className="text-white font-bold text-4xl">M</span>
              </div>
            </div>
            <h1 className="text-6xl font-bold text-transparent bg-gradient-to-r from-amber-600 via-yellow-500 to-purple-600 bg-clip-text mb-6">
              Experience Magic Live
            </h1>
            <p className="text-2xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
              See how <span className="font-bold text-purple-700">Write it. Wish it. Watch it happen.</span> transforms productivity
            </p>
          </div>

          {/* Enhanced Demo Selection with auto-play control */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-amber-800">Choose Your Magic</h3>
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 transition-all duration-300 ${
                  isAutoPlaying 
                    ? 'bg-green-100 border-green-400 text-green-700' 
                    : 'bg-gray-100 border-gray-400 text-gray-700'
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
                {isAutoPlaying ? 'Auto-Playing' : 'Manual Control'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {demos.map((demo, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveDemo(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`group p-6 rounded-3xl border-4 transition-all duration-500 hover:scale-105 relative overflow-hidden ${
                    activeDemo === index 
                      ? 'bg-gradient-to-br from-amber-200 to-yellow-200 border-amber-500 transform -rotate-1 shadow-2xl' 
                      : 'bg-gradient-to-br from-yellow-100 to-amber-100 border-amber-300 transform rotate-1 hover:rotate-0 shadow-lg'
                  }`}
                >
                  {activeDemo === index && (
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-purple-400/10 animate-pulse"></div>
                  )}
                  
                  <div className="relative text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center text-3xl transition-all duration-300 ${
                      activeDemo === index 
                        ? 'bg-gradient-to-br from-yellow-400 to-amber-400 animate-bounce shadow-lg' 
                        : 'bg-amber-300 group-hover:scale-110'
                    }`}>
                      {demo.icon}
                    </div>
                    <h4 className={`font-bold text-lg mb-2 ${activeDemo === index ? 'text-amber-900' : 'text-amber-800'}`}>
                      {demo.title}
                    </h4>
                    <p className={`text-sm ${activeDemo === index ? 'text-amber-800' : 'text-amber-700'}`}>
                      {demo.description}
                    </p>
                    
                    {activeDemo === index && (
                      <div className="mt-3 flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4 text-yellow-600 animate-spin" />
                        <span className="text-xs font-semibold text-yellow-700">Active Demo</span>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Phone Demo Section */}
          <div className="max-w-7xl mx-auto mb-16">
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              
              {/* Phone Mockups with enhanced interaction */}
              <div className="lg:col-span-3 relative">
                <div className="flex justify-center items-center space-x-6 relative">
                  {demos[activeDemo].screens.map((screen, index) => (
                    <div
                      key={index}
                      className={`relative transition-all duration-700 ${
                        index === 1 
                          ? 'scale-110 z-30 transform rotate-0' 
                          : index === 0 
                            ? 'scale-90 z-20 transform -rotate-6 -translate-x-4' 
                            : 'scale-90 z-20 transform rotate-6 translate-x-4'
                      }`}
                    >
                      {/* Enhanced phone frame */}
                      <div className="w-72 h-[500px] bg-gradient-to-b from-slate-900 to-black rounded-[3rem] border-4 border-amber-400 shadow-2xl overflow-hidden relative">
                        
                        {/* Screen */}
                        <div className={`absolute inset-4 bg-gradient-to-br ${screen.color} rounded-[2rem] overflow-hidden relative border-2 border-white/20`}>
                          
                          {/* Magical overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/10 to-purple-300/10 animate-pulse"></div>
                          
                          {/* Status bar */}
                          <div className="relative z-10 flex justify-between items-center p-4 text-sm font-semibold bg-black/5">
                            <span>Magic</span>
                            <span>9:41</span>
                            <div className="w-6 h-3 border border-current rounded-sm bg-green-400"></div>
                          </div>
                          
                          {/* App header */}
                          <div className="relative z-10 px-4 pb-4">
                            <div className="flex items-center gap-3 bg-white/40 backdrop-blur-md p-4 rounded-2xl border border-white/30 shadow-lg">
                              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center shadow-md">
                                <span className="text-white font-bold text-xl">M</span>
                              </div>
                              <div>
                                <h4 className="font-bold text-base">Magic Notebook</h4>
                                <p className="text-sm opacity-80">Step {index + 1}: {screen.step}</p>
                              </div>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="relative z-10 px-4 flex-1 flex flex-col justify-center">
                            <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg text-center">
                              <h3 className="text-xl font-bold mb-4 text-gray-800">{screen.title}</h3>
                              <div className="bg-white/60 p-4 rounded-xl border border-white/40">
                                <pre className="text-sm text-gray-800 whitespace-pre-wrap font-medium leading-relaxed">
                                  {screen.content}
                                </pre>
                              </div>
                            </div>
                          </div>
                          
                          {/* Magic indicators */}
                          <div className="absolute bottom-4 left-4 right-4 z-10">
                            <div className="flex justify-center gap-2">
                              {demos[activeDemo].screens.map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    i <= index 
                                      ? 'bg-yellow-400 scale-125' 
                                      : 'bg-white/50'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Demo Description */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-8 rounded-3xl border-4 border-amber-400 transform -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-4xl">{demos[activeDemo].icon}</div>
                    <div>
                      <h3 className="text-3xl font-bold text-amber-800">{demos[activeDemo].title}</h3>
                      <p className="text-amber-700">{demos[activeDemo].description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {demos[activeDemo].screens.map((screen, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-white/50 rounded-2xl border border-amber-200">
                        <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-amber-800 mb-1">{screen.title}</h4>
                          <p className="text-sm text-amber-700">{screen.step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced CTA */}
                <div className="bg-gradient-to-r from-purple-200 to-yellow-200 p-6 rounded-2xl border-4 border-purple-400 text-center transform rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xl">
                  <h4 className="font-bold text-purple-800 mb-2 text-xl flex items-center justify-center gap-2">
                    <Star className="w-6 h-6 text-yellow-600" />
                    Ready for Magic?
                  </h4>
                  <p className="text-purple-700 mb-4">Join 12,000+ productivity wizards</p>
                  <div className="flex flex-col gap-3">
                    <Link 
                      to="/signup"
                      className="bg-gradient-to-r from-purple-600 to-yellow-600 hover:from-purple-700 hover:to-yellow-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                    >
                      <Zap className="w-5 h-5" />
                      Start Free Trial
                    </Link>
                    <Link 
                      to="/"
                      className="border-2 border-purple-500 text-purple-700 hover:bg-purple-100 font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <Wand2 className="w-5 h-5" />
                      Explore More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Showcase;
