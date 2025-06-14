
import { useState } from 'react';

export const AppMockups = () => {
  const [activeScreen, setActiveScreen] = useState(0);
  
  const noteScreens = [
    {
      title: "Voice to Magic",
      content: "Say 'Schedule my morning routine' and Nova creates your perfect day",
      notes: ["Morning coffee ☕", "Gym session 🏋️", "Team meeting 📅"],
      type: "voice"
    },
    {
      title: "Brain Dump Parser",
      content: "Write messy thoughts, Nova organizes them into actionable plans",
      notes: ["Call mom", "Buy groceries", "Finish project"],
      type: "brainstorm"
    },
    {
      title: "Auto Scheduler",
      content: "Nova automatically schedules your tasks based on priority and time",
      notes: ["High priority: Presentation", "Medium: Email review", "Low: File cleanup"],
      type: "schedule"
    }
  ];

  return (
    <section className="py-32 px-6 relative bg-gradient-to-br from-yellow-100 via-amber-50 to-yellow-200">
      {/* Background sticky notes pattern */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={`sticky-bg-${i}`}
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
              <span className="text-4xl">📱</span>
              <span className="text-amber-800 font-bold text-2xl">Magic in Action</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-amber-800">
            Save Lives with Magic
          </h2>
          <div className="bg-amber-100 p-8 rounded-3xl border-4 border-yellow-400 transform rotate-1 hover:rotate-0 transition-transform duration-300 max-w-4xl mx-auto">
            <p className="text-2xl text-amber-700 leading-relaxed">
              From preventing you being late to work to building last-minute documents in a flash - 
              Magic Notebook transforms everyday chaos into organized productivity spells.
            </p>
          </div>
        </div>

        {/* Life-Saving Stories */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-yellow-200 p-6 rounded-3xl border-4 border-amber-400 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="text-center mb-4">
              <span className="text-4xl">⏰</span>
              <h3 className="text-xl font-bold text-amber-800 mt-2">Never Late Again</h3>
            </div>
            <p className="text-amber-700 text-sm leading-relaxed">
              "I used to be chronically late until Nova started parsing my morning notes and 
              automatically scheduling my routines with buffer time. Saved my job!"
            </p>
          </div>

          <div className="bg-amber-100 p-6 rounded-3xl border-4 border-yellow-400 transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="text-center mb-4">
              <span className="text-4xl">📄</span>
              <h3 className="text-xl font-bold text-amber-800 mt-2">Flash Documents</h3>
            </div>
            <p className="text-amber-700 text-sm leading-relaxed">
              "Had to create a 20-page proposal in 30 minutes. Nova parsed my scattered notes 
              and generated a perfect document template instantly!"
            </p>
          </div>

          <div className="bg-yellow-100 p-6 rounded-3xl border-4 border-amber-400 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="text-center mb-4">
              <span className="text-4xl">🤝</span>
              <h3 className="text-xl font-bold text-amber-800 mt-2">Dream Collaboration</h3>
            </div>
            <p className="text-amber-700 text-sm leading-relaxed">
              "My team shares automation notes through Magic Notebook. We've created 
              workflows that save us 10 hours per week collectively!"
            </p>
          </div>
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
                      <div className="w-1 h-4 bg-amber-600 rounded-full"></div>
                      <div className="w-1 h-4 bg-amber-600 rounded-full"></div>
                      <div className="w-1 h-4 bg-amber-600 rounded-full"></div>
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
                  <div className="flex-1 bg-yellow-200 rounded-3xl border-4 border-amber-400 p-6 mb-6">
                    <h4 className="text-lg font-bold text-amber-800 mb-4">{noteScreens[activeScreen].title}</h4>
                    <div className="space-y-3">
                      {noteScreens[activeScreen].notes.map((note, i) => (
                        <div key={i} className="bg-amber-100 p-3 rounded-2xl border-2 border-yellow-400 transform hover:rotate-1 transition-transform cursor-pointer">
                          <p className="text-amber-700 text-sm font-medium">{note}</p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Magic indicator */}
                    <div className="mt-4 text-center">
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-400 px-4 py-2 rounded-full">
                        <span className="text-white text-xs font-bold">✨ Nova is casting spells...</span>
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
              <h4 className="font-bold text-amber-800 text-sm mb-2">Brain Dump Parser</h4>
              <p className="text-amber-700 text-xs">Messy thoughts → Organized plans</p>
            </div>
          </div>
          
          <div className="absolute bottom-10 -right-20 bg-amber-200 p-4 rounded-2xl border-3 border-yellow-400 animate-float max-w-xs shadow-xl transform rotate-12" style={{ animationDelay: '2s' }}>
            <div className="text-center">
              <span className="text-2xl mb-2 block">📅</span>
              <h4 className="font-bold text-amber-800 text-sm mb-2">Auto Scheduler</h4>
              <p className="text-amber-700 text-xs">Smart time management spells</p>
            </div>
          </div>
        </div>

        {/* How Automate Your Dreams Works */}
        <div className="bg-gradient-to-br from-amber-100 to-yellow-100 p-12 rounded-3xl border-4 border-amber-400 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-800 mb-6">How "Automate Your Dreams" Works</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Nova's magical parsing system understands your intent and transforms your notes into powerful automation spells
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-yellow-200 p-6 rounded-2xl border-3 border-amber-400 transform -rotate-1 hover:rotate-0 transition-transform">
              <div className="text-center">
                <span className="text-3xl mb-3 block">📝</span>
                <h4 className="font-bold text-amber-800 mb-2">1. Brain Dump</h4>
                <p className="text-amber-700 text-sm">Write scattered thoughts, voice notes, or random ideas</p>
              </div>
            </div>
            
            <div className="bg-amber-200 p-6 rounded-2xl border-3 border-yellow-400 transform rotate-1 hover:rotate-0 transition-transform">
              <div className="text-center">
                <span className="text-3xl mb-3 block">🔮</span>
                <h4 className="font-bold text-amber-800 mb-2">2. Magic Parsing</h4>
                <p className="text-amber-700 text-sm">Nova analyzes intent, priority, and context automatically</p>
              </div>
            </div>
            
            <div className="bg-yellow-200 p-6 rounded-2xl border-3 border-amber-400 transform -rotate-1 hover:rotate-0 transition-transform">
              <div className="text-center">
                <span className="text-3xl mb-3 block">⚡</span>
                <h4 className="font-bold text-amber-800 mb-2">3. Plan Creation</h4>
                <p className="text-amber-700 text-sm">Generates organized to-dos, schedules, and workflows</p>
              </div>
            </div>
            
            <div className="bg-amber-200 p-6 rounded-2xl border-3 border-yellow-400 transform rotate-1 hover:rotate-0 transition-transform">
              <div className="text-center">
                <span className="text-3xl mb-3 block">🎯</span>
                <h4 className="font-bold text-amber-800 mb-2">4. Auto Execute</h4>
                <p className="text-amber-700 text-sm">Connects with apps to make your dreams reality</p>
              </div>
            </div>
          </div>
        </div>

        {/* Collaboration Magic */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="bg-yellow-200 p-6 rounded-3xl border-4 border-amber-400 transform -rotate-1 hover:rotate-0 transition-transform">
              <h3 className="text-3xl font-bold text-amber-800 mb-4">Magical Collaboration</h3>
              <p className="text-amber-700 text-lg leading-relaxed">
                Share automation notes with teammates and watch productivity magic spread. 
                When one person creates a workflow, everyone benefits instantly.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-100 p-4 rounded-2xl border-3 border-yellow-400 transform rotate-1">
                <span className="text-2xl mb-2 block">👥</span>
                <h4 className="font-bold text-amber-800 text-sm">Team Spells</h4>
                <p className="text-amber-700 text-xs">Shared workflows that boost everyone</p>
              </div>
              <div className="bg-yellow-100 p-4 rounded-2xl border-3 border-amber-400 transform -rotate-1">
                <span className="text-2xl mb-2 block">🚀</span>
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
              <span className="text-amber-800 font-bold text-xl">Download Magic</span>
            </div>
            <p className="text-amber-700 text-lg">Start your magical productivity journey today</p>
          </div>
          
          <div className="flex justify-center gap-6">
            <div className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white p-6 rounded-3xl border-4 border-amber-500 hover:scale-105 transition-transform cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="text-4xl">🍎</div>
                <div className="text-left">
                  <div className="text-sm opacity-90">Download on the</div>
                  <div className="text-xl font-bold">App Store</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white p-6 rounded-3xl border-4 border-yellow-500 hover:scale-105 transition-transform cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="text-4xl">🤖</div>
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
