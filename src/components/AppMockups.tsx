
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Wand2, Calendar, Lightbulb, FileText, Users, Star } from 'lucide-react';

export const AppMockups = () => {
  const [activeScreen, setActiveScreen] = useState(0);
  
  const noteScreens = [
    {
      title: "✨ Spell Notes",
      subtitle: "Your magical spell library",
      content: "Create enchanted notes that auto-cast into real actions",
      notes: [
        { text: "Schedule team meeting", type: "time", icon: "📅", status: "casting" },
        { text: "Write quarterly report", type: "action", icon: "📝", status: "ready" },
        { text: "Book weekend getaway", type: "dream", icon: "✈️", status: "brewing" }
      ],
      background: "from-yellow-300 to-amber-200"
    },
    {
      title: "🧠 Brain Storm Parser", 
      subtitle: "Transform messy thoughts into magic",
      content: "Nova organizes scattered ideas into actionable spells",
      notes: [
        { text: "Call mom about birthday", type: "remind", icon: "📞", status: "parsed" },
        { text: "Research vacation spots", type: "plan", icon: "🔍", status: "organizing" },
        { text: "Update LinkedIn profile", type: "todo", icon: "💼", status: "queued" }
      ],
      background: "from-amber-300 to-yellow-200"
    },
    {
      title: "🔮 Auto Scheduler",
      subtitle: "Smart time magic in action", 
      content: "Nova automatically schedules based on priority and energy",
      notes: [
        { text: "Morning workout (High energy)", type: "schedule", icon: "🏋️", status: "scheduled" },
        { text: "Deep work session (Focus time)", type: "schedule", icon: "🎯", status: "blocked" },
        { text: "Coffee with Sarah (Social)", type: "schedule", icon: "☕", status: "confirmed" }
      ],
      background: "from-yellow-200 to-amber-300"
    }
  ];

  const lifeSavingStories = [
    {
      icon: "⏰",
      title: "Saved Eve's Career",
      story: "Eve was running late for the biggest presentation of her career. Nova had already parsed her scattered notes from the week, built a stunning pitch deck, and texted the PDF to her boss. She got promoted instead of fired.",
      impact: "Career saved in 5 minutes"
    },
    {
      icon: "📄", 
      title: "Flash Document Magic",
      story: "Marcus needed a 20-page proposal in 30 minutes for an emergency client meeting. Nova parsed his voice memos, research notes, and created a professional document template instantly.",
      impact: "Won $50K contract"
    },
    {
      icon: "🤝",
      title: "Team Transformation", 
      story: "Sarah's team was drowning in chaos. She shared her automation notes through Magic Notebook. Within a week, the team created workflows that saved 40 hours collectively.",
      impact: "10x productivity boost"
    }
  ];

  const nextScreen = () => {
    setActiveScreen((prev) => (prev + 1) % noteScreens.length);
  };

  const prevScreen = () => {
    setActiveScreen((prev) => (prev - 1 + noteScreens.length) % noteScreens.length);
  };

  return (
    <section className="py-32 px-6 relative bg-gradient-to-br from-yellow-100 via-amber-50 to-yellow-200">
      {/* Background magical elements */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={`magic-bg-${i}`}
            className="absolute animate-float-slow opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              transform: `rotate(${Math.random() * 45 - 22.5}deg)`
            }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-300/40 to-amber-300/40 rounded-lg border-l-4 border-yellow-400/60" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="bg-yellow-200 p-6 rounded-3xl border-4 border-amber-400 transform -rotate-1 hover:rotate-0 transition-transform duration-500 inline-block mb-8">
            <div className="flex items-center gap-3">
              <Wand2 className="w-8 h-8 text-amber-700" />
              <span className="text-amber-800 font-bold text-2xl">Nova's Magic in Action</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-amber-800">
            How Nova Saves Lives
          </h2>
          <div className="bg-amber-100 p-8 rounded-3xl border-4 border-yellow-400 transform rotate-1 hover:rotate-0 transition-transform duration-300 max-w-4xl mx-auto">
            <p className="text-2xl text-amber-700 leading-relaxed">
              From preventing career disasters to building last-minute documents in a flash - 
              Nova transforms everyday chaos into organized productivity magic.
            </p>
          </div>
        </div>

        {/* Life-Saving Stories */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {lifeSavingStories.map((story, i) => (
            <div key={i} className="bg-yellow-200 p-6 rounded-3xl border-4 border-amber-400 transform hover:scale-105 transition-all duration-300" style={{ transform: `rotate(${i % 2 === 0 ? '-' : ''}${1 + i}deg)` }}>
              <div className="text-center mb-4">
                <span className="text-4xl mb-3 block">{story.icon}</span>
                <h3 className="text-xl font-bold text-amber-800 mb-2">{story.title}</h3>
              </div>
              <p className="text-amber-700 text-sm leading-relaxed mb-4">
                "{story.story}"
              </p>
              <div className="bg-amber-50 p-2 rounded-xl border-2 border-yellow-300 text-center">
                <span className="text-amber-600 font-bold text-xs">{story.impact}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Interactive Phone Demo */}
        <div className="relative flex justify-center items-center mb-20">
          {/* Main Phone Mockup */}
          <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
            <div className="relative w-80 h-[650px] bg-gradient-to-br from-yellow-200 to-amber-200 rounded-[3.5rem] border-8 border-amber-400 shadow-2xl overflow-hidden">
              {/* Phone Screen */}
              <div className="w-full h-full bg-gradient-to-br from-yellow-100 via-amber-50 to-yellow-100 relative overflow-hidden">
                {/* Status Bar */}
                <div className="flex justify-between items-center p-6 text-amber-800 text-sm border-b-2 border-amber-300">
                  <span className="font-semibold">9:41</span>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-1 h-4 bg-amber-600 rounded-full"></div>
                      ))}
                    </div>
                    <div className="w-6 h-3 border-2 border-amber-600 rounded-sm">
                      <div className="w-full h-full bg-green-400 rounded-sm"></div>
                    </div>
                  </div>
                </div>
                
                {/* Interactive Note Screens */}
                <div className="p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <img 
                        src="/lovable-uploads/cb8ad732-ec0b-4d19-8ec7-5886d9f5bda1.png" 
                        alt="Magic Notebook Logo" 
                        className="w-8 h-8"
                      />
                      <h3 className="text-2xl font-bold text-amber-800">
                        Magic Notes
                      </h3>
                    </div>
                    <p className="text-amber-600 text-sm">{noteScreens[activeScreen].content}</p>
                  </div>
                  
                  {/* Screen Content */}
                  <div className={`flex-1 bg-gradient-to-br ${noteScreens[activeScreen].background} rounded-3xl border-4 border-amber-400 p-6 mb-6 relative overflow-hidden`}>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-amber-800">{noteScreens[activeScreen].title}</h4>
                      <div className="flex gap-2">
                        <button 
                          onClick={prevScreen}
                          className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
                        >
                          <ChevronLeft className="w-4 h-4 text-white" />
                        </button>
                        <button 
                          onClick={nextScreen}
                          className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
                        >
                          <ChevronRight className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                    
                    <p className="text-amber-700 text-xs mb-4">{noteScreens[activeScreen].subtitle}</p>
                    
                    <div className="space-y-3">
                      {noteScreens[activeScreen].notes.map((note, i) => (
                        <div key={i} className="bg-yellow-100 p-3 rounded-2xl border-2 border-amber-300 transform hover:rotate-1 transition-transform cursor-pointer relative overflow-hidden">
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{note.icon}</span>
                            <div className="flex-1">
                              <p className="text-amber-700 text-sm font-medium">{note.text}</p>
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                note.status === 'casting' ? 'bg-purple-200 text-purple-700' :
                                note.status === 'ready' ? 'bg-green-200 text-green-700' :
                                note.status === 'brewing' ? 'bg-blue-200 text-blue-700' :
                                note.status === 'parsed' ? 'bg-orange-200 text-orange-700' :
                                note.status === 'organizing' ? 'bg-pink-200 text-pink-700' :
                                note.status === 'queued' ? 'bg-indigo-200 text-indigo-700' :
                                note.status === 'scheduled' ? 'bg-emerald-200 text-emerald-700' :
                                note.status === 'blocked' ? 'bg-red-200 text-red-700' :
                                'bg-gray-200 text-gray-700'
                              }`}>
                                {note.status}
                              </span>
                            </div>
                          </div>
                          {/* Magical sparkle animation */}
                          {note.status === 'casting' && (
                            <div className="absolute top-1 right-1 text-purple-400 animate-ping">✨</div>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    {/* Magic indicator */}
                    <div className="mt-4 text-center">
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-400 px-4 py-2 rounded-full">
                        <Wand2 className="w-4 h-4 text-white" />
                        <span className="text-white text-xs font-bold">Nova is casting spells...</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Screen Navigation */}
                  <div className="flex justify-center gap-2 mb-4">
                    {noteScreens.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveScreen(i)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          i === activeScreen 
                            ? 'bg-amber-600 scale-125' 
                            : 'bg-amber-300 hover:bg-amber-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Spell Examples */}
          <div className="absolute top-10 -left-20 bg-yellow-200 p-4 rounded-2xl border-3 border-amber-400 animate-float max-w-xs shadow-xl transform -rotate-12">
            <div className="text-center">
              <span className="text-2xl mb-2 block">🧠</span>
              <h4 className="font-bold text-amber-800 text-sm mb-2">Brain Storm Parser</h4>
              <p className="text-amber-700 text-xs">Messy thoughts → Organized spells</p>
            </div>
          </div>
          
          <div className="absolute bottom-10 -right-20 bg-amber-200 p-4 rounded-2xl border-3 border-yellow-400 animate-float max-w-xs shadow-xl transform rotate-12" style={{ animationDelay: '2s' }}>
            <div className="text-center">
              <span className="text-2xl mb-2 block">⚡</span>
              <h4 className="font-bold text-amber-800 text-sm mb-2">Auto Scheduler</h4>
              <p className="text-amber-700 text-xs">Smart time management spells</p>
            </div>
          </div>
        </div>

        {/* How Nova's Spell Casting System Works */}
        <div className="bg-gradient-to-br from-amber-100 to-yellow-100 p-12 rounded-3xl border-4 border-amber-400 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-800 mb-6">🔮 Nova's Spell Casting System</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Nova uses advanced semantic parsing + AI magic to understand your intent and transform notes into powerful automation spells
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Note Types */}
            <div className="bg-yellow-200 p-6 rounded-2xl border-3 border-amber-400">
              <h3 className="text-2xl font-bold text-amber-800 mb-6 text-center">✨ Magic Note Types</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-yellow-100 p-3 rounded-xl">
                  <span className="text-2xl">🌙</span>
                  <div>
                    <h4 className="font-bold text-amber-800">Dream Notes</h4>
                    <p className="text-amber-700 text-sm">Ideas, vision boards, long-term goals</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-amber-100 p-3 rounded-xl">
                  <span className="text-2xl">💡</span>
                  <div>
                    <h4 className="font-bold text-amber-800">Brainstorm Notes</h4>
                    <p className="text-amber-700 text-sm">Random thoughts Nova organizes</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-yellow-100 p-3 rounded-xl">
                  <span className="text-2xl">📅</span>
                  <div>
                    <h4 className="font-bold text-amber-800">To-Do Notes</h4>
                    <p className="text-amber-700 text-sm">Scheduled or recurring tasks</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-amber-100 p-3 rounded-xl">
                  <span className="text-2xl">🧾</span>
                  <div>
                    <h4 className="font-bold text-amber-800">Plan Notes</h4>
                    <p className="text-amber-700 text-sm">Multi-step sequences with auto task division</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Parsing Process */}
            <div className="bg-amber-200 p-6 rounded-2xl border-3 border-yellow-400">
              <h3 className="text-2xl font-bold text-amber-800 mb-6 text-center">🔄 How Parsing Works</h3>
              <div className="space-y-4">
                <div className="bg-yellow-100 p-4 rounded-xl border-2 border-amber-300">
                  <h4 className="font-bold text-amber-800 mb-2">1. Intent Recognition</h4>
                  <p className="text-amber-700 text-sm">Nova analyzes your words to understand what you really want</p>
                </div>
                <div className="bg-amber-100 p-4 rounded-xl border-2 border-yellow-300">
                  <h4 className="font-bold text-amber-800 mb-2">2. Magic Type Assignment</h4>
                  <p className="text-amber-700 text-sm">Classifies notes into dream, brainstorm, to-do, or plan categories</p>
                </div>
                <div className="bg-yellow-100 p-4 rounded-xl border-2 border-amber-300">
                  <h4 className="font-bold text-amber-800 mb-2">3. Smart Suggestions</h4>
                  <p className="text-amber-700 text-sm">Asks questions and suggests actions: "Turn this into a doc?"</p>
                </div>
                <div className="bg-amber-100 p-4 rounded-xl border-2 border-yellow-300">
                  <h4 className="font-bold text-amber-800 mb-2">4. Learning & Adapting</h4>
                  <p className="text-amber-700 text-sm">Gets smarter about your preferences over time</p>
                </div>
              </div>
            </div>
          </div>

          {/* Example Workflow */}
          <div className="bg-gradient-to-r from-yellow-300 to-amber-300 p-8 rounded-2xl border-3 border-amber-500">
            <h3 className="text-2xl font-bold text-amber-800 mb-4 text-center">Example: "Automate Your Dreams" in Action</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-yellow-100 p-4 rounded-xl text-center">
                <span className="text-3xl mb-2 block">📝</span>
                <h4 className="font-bold text-amber-800 text-sm mb-2">You Write</h4>
                <p className="text-amber-700 text-xs">"Plan vacation to Japan next summer"</p>
              </div>
              <div className="bg-amber-100 p-4 rounded-xl text-center">
                <span className="text-3xl mb-2 block">🔮</span>
                <h4 className="font-bold text-amber-800 text-sm mb-2">Nova Parses</h4>
                <p className="text-amber-700 text-xs">Recognizes: Dream + Planning + Timeline</p>
              </div>
              <div className="bg-yellow-100 p-4 rounded-xl text-center">
                <span className="text-3xl mb-2 block">✨</span>
                <h4 className="font-bold text-amber-800 text-sm mb-2">Magic Happens</h4>
                <p className="text-amber-700 text-xs">Creates research tasks, budget tracker, timeline</p>
              </div>
              <div className="bg-amber-100 p-4 rounded-xl text-center">
                <span className="text-3xl mb-2 block">🎯</span>
                <h4 className="font-bold text-amber-800 text-sm mb-2">Dreams Reality</h4>
                <p className="text-amber-700 text-xs">Sends reminders, books flights, plans itinerary</p>
              </div>
            </div>
          </div>
        </div>

        {/* Collaboration Magic */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="bg-yellow-200 p-6 rounded-3xl border-4 border-amber-400 transform -rotate-1 hover:rotate-0 transition-transform">
              <h3 className="text-3xl font-bold text-amber-800 mb-4">🤝 Magical Collaboration</h3>
              <p className="text-amber-700 text-lg leading-relaxed">
                Share automation notes with teammates and watch productivity magic spread. 
                When one person creates a workflow, everyone benefits instantly.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-100 p-4 rounded-2xl border-3 border-yellow-400 transform rotate-1">
                <Users className="w-8 h-8 text-amber-600 mb-2" />
                <h4 className="font-bold text-amber-800 text-sm">Team Spells</h4>
                <p className="text-amber-700 text-xs">Shared workflows that boost everyone</p>
              </div>
              <div className="bg-yellow-100 p-4 rounded-2xl border-3 border-amber-400 transform -rotate-1">
                <Star className="w-8 h-8 text-amber-600 mb-2" />
                <h4 className="font-bold text-amber-800 text-sm">Viral Productivity</h4>
                <p className="text-amber-700 text-xs">Good habits spread automatically</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-200 to-amber-200 p-8 rounded-3xl border-4 border-amber-400 transform rotate-2 hover:rotate-0 transition-transform">
              <div className="text-center space-y-4">
                <div className="flex justify-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">You</span>
                  </div>
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">Team</span>
                  </div>
                </div>
                <p className="text-amber-800 font-bold">Creating magic together!</p>
                <div className="bg-yellow-100 p-3 rounded-xl border-2 border-amber-300">
                  <p className="text-amber-700 text-sm">"Saved 40 hours this month with shared automation notes!"</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App Store Section with Better Icons */}
        <div className="text-center">
          <div className="bg-amber-100 p-8 rounded-3xl border-4 border-yellow-400 transform -rotate-1 hover:rotate-0 transition-transform duration-300 inline-block mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-4 h-4 bg-amber-400 rounded-full animate-pulse"></div>
              <span className="text-amber-800 font-bold text-xl">Download the Magic</span>
            </div>
            <p className="text-amber-700 text-lg">Start your magical productivity journey today</p>
          </div>
          
          <div className="flex justify-center gap-6">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6 rounded-3xl border-4 border-slate-700 hover:scale-105 transition-transform cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🍎</span>
                </div>
                <div className="text-left">
                  <div className="text-sm opacity-90">Download on the</div>
                  <div className="text-xl font-bold">App Store</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-3xl border-4 border-green-500 hover:scale-105 transition-transform cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <div className="text-left">
                  <div className="text-sm opacity-90">Get it on</div>
                  <div className="text-xl font-bold">Google Play</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
