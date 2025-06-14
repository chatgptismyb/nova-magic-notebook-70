
import { useState, useEffect } from 'react';
import { Smartphone, Sparkles, Wand2, BookOpen } from 'lucide-react';

export const NotesSection = () => {
  const [activeNote, setActiveNote] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const magicalNotes = [
    {
      title: "Enchanted Grocery List",
      content: "🛒 Milk, bread, dragon eggs, unicorn tears",
      magic: "Auto-organized by location & magical properties",
      color: "from-yellow-300 to-amber-200",
      icon: "🧙‍♀️"
    },
    {
      title: "Spellbound Meeting Notes",
      content: "📝 Discussed Q4 potions sales, new cauldron suppliers",
      magic: "Action items extracted & reminders cast",
      color: "from-amber-300 to-yellow-200", 
      icon: "⚡"
    },
    {
      title: "Magical To-Do Scroll",
      content: "✨ Call wizard council, practice levitation, feed phoenix",
      magic: "Priorities enchanted & deadlines divined",
      color: "from-yellow-200 to-amber-300",
      icon: "🔮"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setTimeout(() => {
          setActiveNote((prev) => (prev + 1) % magicalNotes.length);
          setIsAnimating(false);
        }, 300);
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section className="py-32 px-6 relative bg-gradient-to-br from-amber-50 via-yellow-100 to-amber-200 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Magical Header */}
        <div className="text-center mb-20">
          <div className="bg-yellow-200 p-8 rounded-3xl border-4 border-amber-400 transform -rotate-2 hover:rotate-0 transition-transform duration-500 inline-block mb-8">
            <div className="flex items-center gap-4">
              <BookOpen className="w-10 h-10 text-amber-700" />
              <span className="text-amber-800 font-bold text-3xl">Magical Note-Taking</span>
              <Sparkles className="w-8 h-8 text-amber-600 animate-sparkle-dance" />
            </div>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-bold mb-8 text-amber-800">
            Enchanted Notes
          </h2>
          <div className="bg-amber-100 p-8 rounded-3xl border-4 border-yellow-400 transform rotate-1 hover:rotate-0 transition-transform duration-300 max-w-5xl mx-auto">
            <p className="text-2xl text-amber-700 leading-relaxed">
              Transform your scattered thoughts into an organized spellbook of productivity magic ✨
            </p>
          </div>
        </div>

        {/* Magical Phone App Mockup */}
        <div className="relative flex justify-center items-center mb-20">
          {/* Floating Magic Elements */}
          <div className="absolute -top-20 -left-20 animate-float-slow opacity-60">
            <div className="text-6xl">🌟</div>
          </div>
          <div className="absolute -bottom-20 -right-20 animate-float opacity-60" style={{ animationDelay: '2s' }}>
            <div className="text-6xl">✨</div>
          </div>
          <div className="absolute top-1/2 left-10 animate-wind-drift opacity-50">
            <div className="text-4xl">🪄</div>
          </div>

          {/* Main Phone Mockup */}
          <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
            <div className="relative w-80 h-[700px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-[4rem] border-8 border-slate-700 shadow-2xl overflow-hidden">
              {/* Phone Screen */}
              <div className="w-full h-full bg-gradient-to-br from-yellow-50 via-amber-25 to-yellow-50 relative overflow-hidden">
                {/* Magical Status Bar - removed tab info */}
                <div className="flex justify-between items-center p-6 text-amber-800 text-sm border-b-2 border-amber-300 bg-gradient-to-r from-yellow-200 to-amber-200">
                  <span className="font-semibold">9:41 ✨</span>
                  <span className="font-bold text-amber-700 flex items-center gap-2">
                    <Wand2 className="w-4 h-4" />
                    Magic Notebook
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-3 border-2 border-amber-600 rounded-sm">
                      <div className="w-full h-full bg-green-400 rounded-sm animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                {/* App Content with Animation */}
                <div className={`p-6 h-full flex flex-col transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                  {/* Magic Header */}
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-300 to-yellow-300 rounded-2xl flex items-center justify-center border-3 border-amber-400">
                        <span className="text-2xl">{magicalNotes[activeNote].icon}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-amber-800">
                        Today's Magic
                      </h3>
                    </div>
                  </div>
                  
                  {/* Magical Note Display */}
                  <div className={`flex-1 bg-gradient-to-br ${magicalNotes[activeNote].color} rounded-3xl border-4 border-amber-400 p-8 mb-8 relative overflow-hidden shadow-inner`}>
                    {/* Floating sparkles */}
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute animate-sparkle-dance opacity-30"
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
                    
                    {/* Note Header */}
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-amber-800 mb-2">
                        {magicalNotes[activeNote].title}
                      </h4>
                      <div className="w-16 h-1 bg-amber-600 mx-auto rounded-full"></div>
                    </div>
                    
                    {/* Note Content */}
                    <div className="bg-white/90 p-6 rounded-2xl border-3 border-amber-300 mb-6 shadow-lg">
                      <p className="text-amber-800 text-lg leading-relaxed">
                        {magicalNotes[activeNote].content}
                      </p>
                    </div>
                    
                    {/* Magic Enhancement */}
                    <div className="bg-gradient-to-r from-amber-300/80 to-yellow-300/80 p-4 rounded-2xl border-2 border-amber-400">
                      <div className="flex items-center gap-3">
                        <Wand2 className="w-5 h-5 text-amber-700" />
                        <p className="text-amber-800 text-sm font-medium">
                          Nova's Magic: {magicalNotes[activeNote].magic}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Magical Navigation */}
                  <div className="flex items-center justify-center gap-4">
                    {magicalNotes.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => !isAnimating && setActiveNote(i)}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                          i === activeNote 
                            ? 'bg-amber-600 scale-125 shadow-lg' 
                            : 'bg-amber-300 hover:bg-amber-400 hover:scale-110'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Magical Feature Bubbles - repositioned to be fully visible */}
          <div className="absolute top-32 left-20 bg-yellow-200 p-6 rounded-3xl border-4 border-amber-400 animate-float max-w-xs shadow-xl transform -rotate-12">
            <div className="text-center">
              <span className="text-3xl mb-3 block">🧠</span>
              <h4 className="font-bold text-amber-800 text-lg mb-2">Spell Recognition</h4>
              <p className="text-amber-700 text-sm">Understands your magical intent</p>
            </div>
          </div>
          
          <div className="absolute bottom-32 right-20 bg-amber-200 p-6 rounded-3xl border-4 border-yellow-400 animate-float max-w-xs shadow-xl transform rotate-12" style={{ animationDelay: '2s' }}>
            <div className="text-center">
              <span className="text-3xl mb-3 block">⚡</span>
              <h4 className="font-bold text-amber-800 text-lg mb-2">Auto Enchantment</h4>
              <p className="text-amber-700 text-sm">Transforms notes into magic</p>
            </div>
          </div>
        </div>

        {/* Magical Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-amber-200 to-yellow-200 p-12 rounded-3xl border-4 border-amber-400 transform -rotate-1 hover:rotate-0 transition-transform duration-300 inline-block shadow-2xl">
            <h3 className="text-4xl font-bold text-amber-800 mb-6 flex items-center justify-center gap-4">
              <Smartphone className="w-10 h-10" />
              Begin Your Magical Journey
              <Sparkles className="w-8 h-8 animate-sparkle-dance" />
            </h3>
            <p className="text-amber-700 text-xl mb-8 max-w-2xl">
              Download the enchanted notebook that transforms your everyday thoughts into organized productivity magic
            </p>
            
            <div className="flex justify-center gap-8">
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-8 rounded-3xl border-4 border-slate-700 hover:scale-105 transition-transform cursor-pointer shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">📱</span>
                  </div>
                  <div className="text-left">
                    <div className="text-lg opacity-90">Cast spells on the</div>
                    <div className="text-2xl font-bold">App Store</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-3xl border-4 border-green-500 hover:scale-105 transition-transform cursor-pointer shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                    <span className="text-green-600 text-2xl font-bold">▶</span>
                  </div>
                  <div className="text-left">
                    <div className="text-lg opacity-90">Enchant it on</div>
                    <div className="text-2xl font-bold">Google Play</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
