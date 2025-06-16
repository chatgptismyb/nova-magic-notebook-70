
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Wand2, Smartphone, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AppMockups = () => {
  const [activeScreen, setActiveScreen] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const noteScreens = [
    {
      title: "✨ Magic Notes",
      subtitle: "Transform thoughts into actions",
      content: "Write anything - Nova makes it magical",
      notes: [
        { text: "Call mom about birthday", type: "remind", icon: "📞", status: "ready", action: "Set reminder" },
        { text: "Plan weekend trip", type: "plan", icon: "✈️", status: "organizing", action: "Creating itinerary" },
        { text: "Workout routine", type: "schedule", icon: "🏋️", status: "scheduled", action: "Added to calendar" }
      ],
      background: "from-orange-300 to-yellow-200",
      demo: "Just type naturally - Nova understands!"
    },
    {
      title: "🧠 Smart Organization", 
      subtitle: "AI-powered note parsing",
      content: "Nova automatically organizes your thoughts",
      notes: [
        { text: "Grocery list: milk, bread, eggs", type: "list", icon: "🛒", status: "categorized", action: "Shopping list created" },
        { text: "Meeting notes from today", type: "summary", icon: "📝", status: "processed", action: "Action items extracted" },
        { text: "Idea: New app feature", type: "idea", icon: "💡", status: "saved", action: "Added to projects" }
      ],
      background: "from-yellow-300 to-orange-200",
      demo: "Nova recognizes patterns and creates structure"
    },
    {
      title: "⚡ Instant Actions",
      subtitle: "From notes to automation", 
      content: "Watch your notes become reality",
      notes: [
        { text: "Email team about meeting", type: "action", icon: "📧", status: "sent", action: "Email drafted & sent" },
        { text: "Book restaurant for Friday", type: "booking", icon: "🍽️", status: "booked", action: "Reservation confirmed" },
        { text: "Research vacation spots", type: "research", icon: "🔍", status: "compiled", action: "Report generated" }
      ],
      background: "from-orange-200 to-yellow-300",
      demo: "Nova takes action while you focus on what matters"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setTimeout(() => {
          setActiveScreen((prev) => (prev + 1) % noteScreens.length);
          setIsAnimating(false);
        }, 300);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const nextScreen = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveScreen((prev) => (prev + 1) % noteScreens.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const prevScreen = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveScreen((prev) => (prev - 1 + noteScreens.length) % noteScreens.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <section className="py-32 px-6 relative bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-200">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="bg-orange-200 p-6 rounded-3xl border-4 border-yellow-400 transform -rotate-1 hover:rotate-0 transition-transform duration-500 inline-block mb-8">
            <div className="flex items-center gap-3">
              <Smartphone className="w-8 h-8 text-orange-700" />
              <span className="text-orange-800 font-bold text-2xl">See Nova in Action</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-orange-800">
            Magic in Your Pocket
          </h2>
          <div className="bg-yellow-100 p-8 rounded-3xl border-4 border-orange-400 transform rotate-1 hover:rotate-0 transition-transform duration-300 max-w-4xl mx-auto">
            <p className="text-2xl text-orange-700 leading-relaxed">
              Watch how Nova transforms everyday notes into organized productivity magic
            </p>
          </div>
        </div>
        
        {/* Interactive Phone Demo */}
        <div className="relative flex justify-center items-center mb-20">
          {/* Main Phone Mockup */}
          <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
            <div className="relative w-80 h-[650px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3.5rem] border-8 border-slate-700 shadow-2xl overflow-hidden cursor-pointer">
              {/* Phone Screen */}
              <div className="w-full h-full bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-100 relative overflow-hidden">
                {/* Status Bar */}
                <div className="flex justify-between items-center p-6 text-orange-800 text-sm border-b-2 border-orange-300 z-20 relative">
                  <span className="font-semibold">9:41</span>
                  <span className="font-bold text-orange-700">Magic Notebook</span>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-3 border-2 border-orange-600 rounded-sm">
                      <div className="w-full h-full bg-green-400 rounded-sm"></div>
                    </div>
                  </div>
                </div>
                
                {/* Screen Content with Animation */}
                <div className={`p-6 h-full flex flex-col transition-all duration-500 relative z-10 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <img 
                        src="/lovable-uploads/be91958b-2280-433a-a64a-5e34429b27ea.png" 
                        alt="Nova" 
                        className="w-8 h-8 rounded-full border-2 border-orange-400 animate-nova-pulse"
                      />
                      <h3 className="text-xl font-bold text-orange-800">
                        {noteScreens[activeScreen].title}
                      </h3>
                    </div>
                    <p className="text-orange-600 text-sm">{noteScreens[activeScreen].subtitle}</p>
                  </div>
                  
                  {/* Notes Container */}
                  <div className={`flex-1 bg-gradient-to-br ${noteScreens[activeScreen].background} rounded-3xl border-4 border-orange-400 p-6 mb-6 relative overflow-hidden`}>
                    <div className="space-y-4">
                      {noteScreens[activeScreen].notes.map((note, i) => (
                        <div 
                          key={`${activeScreen}-${i}`}
                          className="bg-white/90 p-4 rounded-2xl border-2 border-orange-300 transform hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in"
                          style={{ animationDelay: `${i * 150}ms` }}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-xl">{note.icon}</span>
                            <div className="flex-1">
                              <p className="text-orange-800 text-sm font-medium">{note.text}</p>
                            </div>
                            <div className={`w-3 h-3 rounded-full ${
                              note.status === 'ready' ? 'bg-green-400 animate-pulse' :
                              note.status === 'organizing' ? 'bg-blue-400 animate-spin' :
                              note.status === 'scheduled' ? 'bg-orange-400' :
                              note.status === 'categorized' ? 'bg-yellow-400' :
                              note.status === 'processed' ? 'bg-indigo-400' :
                              note.status === 'saved' ? 'bg-pink-400' :
                              note.status === 'sent' ? 'bg-green-500' :
                              note.status === 'booked' ? 'bg-emerald-400' :
                              'bg-gray-400'
                            }`} />
                          </div>
                          <p className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded-lg">
                            Nova: {note.action}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Demo Text */}
                    <div className="mt-6 text-center">
                      <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border-2 border-orange-300">
                        <Wand2 className="w-4 h-4 text-orange-600" />
                        <span className="text-orange-700 text-xs font-medium">{noteScreens[activeScreen].demo}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Navigation */}
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={prevScreen}
                      className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors shadow-lg"
                    >
                      <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    
                    <div className="flex gap-2">
                      {noteScreens.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => !isAnimating && setActiveScreen(i)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            i === activeScreen 
                              ? 'bg-orange-600 scale-125' 
                              : 'bg-orange-300 hover:bg-orange-400'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <button 
                      onClick={nextScreen}
                      className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors shadow-lg"
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App Store Download */}
        <div className="text-center">
          <div className="bg-yellow-100 p-8 rounded-3xl border-4 border-orange-400 transform -rotate-1 hover:rotate-0 transition-transform duration-300 inline-block mb-8">
            <h3 className="text-2xl font-bold text-orange-800 mb-4">Download the Magic</h3>
            <p className="text-orange-700 text-lg">Start your magical productivity journey today</p>
          </div>
          
          <div className="flex justify-center gap-6">
            <Link
              to="/checkout"
              className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6 rounded-3xl border-4 border-slate-700 hover:scale-105 transition-transform cursor-pointer shadow-xl group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                  <Download className="text-white w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-sm opacity-90">Download on the</div>
                  <div className="text-xl font-bold group-hover:text-blue-300 transition-colors">App Store</div>
                </div>
              </div>
            </Link>
            <Link
              to="/checkout"
              className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-3xl border-4 border-green-500 hover:scale-105 transition-transform cursor-pointer shadow-xl group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <Download className="text-green-600 w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-sm opacity-90">Get it on</div>
                  <div className="text-xl font-bold group-hover:text-green-300 transition-colors">Google Play</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
