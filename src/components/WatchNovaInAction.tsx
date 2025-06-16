
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Download, Play, MessageCircle, X, Wand2 } from 'lucide-react';
import { InteractivePhone } from '@/components/InteractivePhone';

export const WatchNovaInAction = () => {
  const [activeMockupIndex, setActiveMockupIndex] = useState(1);
  const [showNovaBubble, setShowNovaBubble] = useState(false);
  const [notePopups, setNotePopups] = useState<Array<{id: number, content: string, x: number, y: number}>>([]);

  const phoneMockups = [
    {
      title: "Smart Notes",
      screens: [
        { title: "Voice Notes", icon: "🎤", color: "from-blue-100 via-cyan-50 to-blue-100", content: "Record thoughts naturally", description: "Speak your mind, Nova writes" },
        { title: "AI Organize", icon: "🧠", color: "from-indigo-100 via-blue-50 to-indigo-100", content: "Smart categorization", description: "Auto-organized by context" },
        { title: "Action Items", icon: "⚡", color: "from-sky-100 via-blue-50 to-sky-100", content: "Tasks extracted", description: "Notes become actions" }
      ]
    },
    {
      title: "Nova Chat",
      screens: [
        { title: "Meet Nova", icon: "🧙‍♀️", color: "from-orange-100 via-yellow-50 to-orange-100", content: "Your AI companion", description: "Always ready to help" },
        { title: "Smart Replies", icon: "💬", color: "from-yellow-100 via-orange-50 to-yellow-100", content: "Contextual responses", description: "Understands your needs" },
        { title: "Magic Actions", icon: "✨", color: "from-orange-100 via-amber-50 to-orange-100", content: "Instant automation", description: "Watch wishes come true" }
      ]
    },
    {
      title: "Task Magic",
      screens: [
        { title: "Auto Schedule", icon: "📅", color: "from-green-100 via-emerald-50 to-green-100", content: "Smart planning", description: "Perfect time management" },
        { title: "Goal Tracking", icon: "🎯", color: "from-emerald-100 via-green-50 to-emerald-100", content: "Progress insights", description: "Stay on track effortlessly" },
        { title: "Team Sync", icon: "👥", color: "from-teal-100 via-cyan-50 to-teal-100", content: "Collaboration", description: "Connected productivity" }
      ]
    },
    {
      title: "Insights",
      screens: [
        { title: "Analytics", icon: "📊", color: "from-purple-100 via-violet-50 to-purple-100", content: "Productivity metrics", description: "Data-driven growth" },
        { title: "Habits", icon: "🔄", color: "from-violet-100 via-purple-50 to-violet-100", content: "Pattern recognition", description: "Build better routines" },
        { title: "Suggestions", icon: "💡", color: "from-pink-100 via-rose-50 to-pink-100", content: "AI recommendations", description: "Personalized guidance" }
      ]
    },
    {
      title: "Integration",
      screens: [
        { title: "Connect Apps", icon: "🔗", color: "from-gray-100 via-slate-50 to-gray-100", content: "Unified workflow", description: "All tools, one place" },
        { title: "Automation", icon: "⚙️", color: "from-slate-100 via-gray-50 to-slate-100", content: "Smart workflows", description: "Effortless productivity" },
        { title: "Sync Data", icon: "🔄", color: "from-zinc-100 via-neutral-50 to-zinc-100", content: "Real-time updates", description: "Always in sync" }
      ]
    }
  ];

  const noteContents = [
    "✨ Transform your ideas instantly!",
    "🚀 Boost productivity by 300%",
    "🧙‍♀️ Nova is crafting your perfect workflow",
    "💡 Smart suggestions incoming...",
    "⚡ Automating your tasks now",
    "🎯 Goals aligned with your vision"
  ];

  // Auto-cycle phone mockups
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMockupIndex((prev) => (prev + 1) % phoneMockups.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Show Nova bubble periodically
  useEffect(() => {
    const bubbleInterval = setInterval(() => {
      setShowNovaBubble(true);
      setTimeout(() => setShowNovaBubble(false), 3000);
    }, 8000);
    return () => clearInterval(bubbleInterval);
  }, []);

  // Generate note popups periodically
  useEffect(() => {
    const noteInterval = setInterval(() => {
      const newNote = {
        id: Date.now(),
        content: noteContents[Math.floor(Math.random() * noteContents.length)],
        x: Math.random() * 80 + 10, // 10% to 90% from left
        y: Math.random() * 60 + 20  // 20% to 80% from top
      };
      
      setNotePopups(prev => [...prev.slice(-2), newNote]); // Keep max 3 notes
      
      // Remove note after 4 seconds
      setTimeout(() => {
        setNotePopups(prev => prev.filter(note => note.id !== newNote.id));
      }, 4000);
    }, 3000);
    
    return () => clearInterval(noteInterval);
  }, []);

  const nextMockup = () => {
    setActiveMockupIndex((prev) => (prev + 1) % phoneMockups.length);
  };

  const prevMockup = () => {
    setActiveMockupIndex((prev) => (prev - 1 + phoneMockups.length) % phoneMockups.length);
  };

  return (
    <section className="py-32 px-4 bg-gradient-to-br from-orange-50 via-white to-yellow-50 relative overflow-hidden">
      {/* Magical background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
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
            <div className="text-orange-400 text-2xl">✨</div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-400/30 mb-6">
            <Sparkles className="w-5 h-5 text-orange-600 animate-pulse" />
            <span className="text-orange-800 font-semibold">Watch Nova in Action</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
            See the Magic Unfold
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Experience how Nova transforms your mobile workflow with intelligent assistance and seamless automation
          </p>
        </div>

        {/* Phone Mockups Showcase */}
        <div className="relative">
          {/* Animated Nova Chat Bubble */}
          {showNovaBubble && (
            <div className="absolute top-10 right-10 z-30 animate-scale-in">
              <div className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white p-4 rounded-2xl shadow-2xl border-4 border-orange-300 max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-orange-600 text-lg">🧙‍♀️</span>
                  </div>
                  <span className="font-bold">Nova</span>
                </div>
                <p className="text-sm">I'm actively organizing your notes and creating intelligent workflows! ✨</p>
                <div className="absolute bottom-0 left-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-orange-400"></div>
              </div>
            </div>
          )}

          {/* Note Popups */}
          {notePopups.map((note) => (
            <div
              key={note.id}
              className="absolute z-20 animate-fade-in pointer-events-none"
              style={{
                left: `${note.x}%`,
                top: `${note.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className="bg-yellow-200 border-2 border-orange-300 p-3 rounded-xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform">
                <p className="text-orange-800 font-medium text-sm whitespace-nowrap">{note.content}</p>
                <div className="absolute -bottom-1 left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-yellow-200"></div>
              </div>
            </div>
          ))}

          {/* Phone Collection Display */}
          <div className="relative mx-auto w-full max-w-4xl h-[600px]">
            
            {/* Navigation Controls */}
            <div className="absolute top-4 left-4 right-4 z-30 flex justify-between items-center">
              <button 
                onClick={prevMockup}
                className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-orange-200"
              >
                <ChevronLeft className="w-6 h-6 text-orange-600" />
              </button>
              
              <div className="flex gap-2">
                {phoneMockups.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveMockupIndex(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === activeMockupIndex 
                        ? 'bg-orange-600 scale-125' 
                        : 'bg-orange-300 hover:bg-orange-400'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextMockup}
                className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-orange-200"
              >
                <ChevronRight className="w-6 h-6 text-orange-600" />
              </button>
            </div>

            {/* Phone Display */}
            <div className="flex items-center justify-center h-full relative">
              {phoneMockups.map((mockup, index) => {
                const offset = index - activeMockupIndex;
                const isActive = index === activeMockupIndex;
                const isVisible = Math.abs(offset) <= 2;
                
                if (!isVisible) return null;
                
                return (
                  <div
                    key={index}
                    onClick={() => setActiveMockupIndex(index)}
                    className={`absolute transition-all duration-700 cursor-pointer ${
                      isActive 
                        ? 'z-20 scale-100 opacity-100' 
                        : 'z-10 scale-75 opacity-60 hover:opacity-80 hover:scale-80'
                    }`}
                    style={{
                      transform: `translateX(${offset * 120}px) translateY(${Math.abs(offset) * 40}px) rotate(${offset * 12}deg)`,
                    }}
                  >
                    <InteractivePhone 
                      screens={mockup.screens}
                      size={isActive ? "large" : "medium"}
                      showDownload={isActive}
                      className="drop-shadow-2xl"
                    />
                    
                    {isActive && (
                      <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-center animate-fade-in">
                        <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-orange-300 shadow-lg">
                          <h3 className="text-orange-800 font-bold text-lg">{mockup.title}</h3>
                          <div className="flex items-center justify-center gap-2 mt-2">
                            <span className="text-orange-600 text-sm font-medium">Coming Soon</span>
                            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Coming Soon Banner */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-orange-200 to-yellow-200 p-8 rounded-3xl border-4 border-orange-300 shadow-xl max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl flex items-center justify-center animate-pulse">
                  <span className="text-white text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-orange-800 mb-2">Mobile App Coming Soon!</h3>
                  <p className="text-orange-700">Experience the full power of Nova on your phone</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/70 p-4 rounded-xl border-2 border-orange-200">
                  <div className="text-2xl mb-2">🎙️</div>
                  <h4 className="font-bold text-orange-800 mb-1">Voice-First Design</h4>
                  <p className="text-orange-600 text-sm">Speak naturally, Nova understands</p>
                </div>
                <div className="bg-white/70 p-4 rounded-xl border-2 border-orange-200">
                  <div className="text-2xl mb-2">⚡</div>
                  <h4 className="font-bold text-orange-800 mb-1">Instant Actions</h4>
                  <p className="text-orange-600 text-sm">From thought to completion in seconds</p>
                </div>
              </div>

              <button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-3 mx-auto">
                <Play className="w-5 h-5" />
                Get Early Access
                <Sparkles className="w-5 h-5 animate-pulse" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
