
import { useState } from 'react';

export const Community = () => {
  const [showRoadmap, setShowRoadmap] = useState(false);

  const roadmapItems = [
    {
      quarter: "Q1 2024",
      title: "Magic Foundations",
      items: [
        "Voice-to-spell casting",
        "Basic Nova AI assistance",
        "Simple automation workflows",
        "Mobile app launch"
      ],
      status: "completed"
    },
    {
      quarter: "Q2 2024",
      title: "Advanced Spellcasting",
      items: [
        "Multi-step automation chains",
        "Team collaboration magic",
        "Integration with 50+ tools",
        "Advanced Nova intelligence"
      ],
      status: "in-progress"
    },
    {
      quarter: "Q3 2024",
      title: "Wizard Academy",
      items: [
        "Community spell sharing",
        "Custom spell creation tools",
        "AI-powered spell optimization",
        "Enterprise magical workflows"
      ],
      status: "planned"
    },
    {
      quarter: "Q4 2024",
      title: "Master Wizardry",
      items: [
        "Predictive spell suggestions",
        "Cross-platform synchronization",
        "Advanced analytics dashboard",
        "Global spell marketplace"
      ],
      status: "planned"
    }
  ];

  if (showRoadmap) {
    return (
      <section className="py-24 px-6 relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <button
              onClick={() => setShowRoadmap(false)}
              className="mb-8 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 font-semibold"
            >
              ← Back to Magic Door
            </button>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              🗺️ The Magical Roadmap
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our journey to transform productivity through magical automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {roadmapItems.map((phase, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${
                  phase.status === 'completed' 
                    ? 'from-green-800/60 to-emerald-900/60 border-green-500/50' 
                    : phase.status === 'in-progress'
                    ? 'from-yellow-800/60 to-amber-900/60 border-yellow-500/50'
                    : 'from-slate-800/60 to-slate-900/60 border-slate-500/50'
                } p-8 rounded-2xl border backdrop-blur-sm`}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">{phase.quarter}</h3>
                  <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    phase.status === 'completed' 
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                      : phase.status === 'in-progress'
                      ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                      : 'bg-slate-500/20 text-slate-300 border border-slate-500/30'
                  }`}>
                    {phase.status === 'completed' ? '✅ Complete' : 
                     phase.status === 'in-progress' ? '🚧 In Progress' : '📋 Planned'}
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-yellow-300 mb-4">{phase.title}</h4>
                
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <span className={`w-2 h-2 rounded-full ${
                        phase.status === 'completed' ? 'bg-green-400' :
                        phase.status === 'in-progress' ? 'bg-yellow-400' : 'bg-slate-400'
                      }`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Magical Wind Charms Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-wind-drift opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            <div className="text-yellow-300 text-2xl transform rotate-12">🌟</div>
          </div>
        ))}
        {[...Array(15)].map((_, i) => (
          <div
            key={`charm-${i}`}
            className="absolute animate-sparkle-dance opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            <div className="text-amber-400 text-lg">🔮</div>
          </div>
        ))}
        {[...Array(10)].map((_, i) => (
          <div
            key={`wand-${i}`}
            className="absolute animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 3}s`
            }}
          >
            <div className="text-purple-400 text-xl">⚡</div>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
            🧙‍♂️ The Wizard's Secret Chamber
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Deep within the magical archives lies the ancient door to our mystical roadmap...
          </p>
        </div>

        {/* Main Video/Scene Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Magical Scene Background */}
          <div className="relative bg-gradient-to-b from-purple-900/80 to-slate-900/80 rounded-3xl p-12 border-4 border-yellow-500/30 shadow-2xl backdrop-blur-sm">
            
            {/* Floating Sparkles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-yellow-400/60 animate-ping text-sm"
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: '2s'
                  }}
                >
                  ✨
                </div>
              ))}
            </div>

            {/* Nova Wizard Character - Using uploaded image as reference */}
            <div className="flex flex-col items-center relative z-10">
              <div className="mb-8 relative">
                {/* Nova Agent inspired by uploaded image */}
                <div className="relative">
                  {/* Wizard body in purple robes */}
                  <div className="w-32 h-40 bg-gradient-to-b from-purple-600 to-purple-800 rounded-t-full rounded-b-2xl relative overflow-hidden shadow-2xl border-4 border-yellow-500/50">
                    {/* Face */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-amber-100 rounded-full">
                      {/* Eyes */}
                      <div className="absolute top-3 left-2 w-2 h-2 bg-slate-800 rounded-full"></div>
                      <div className="absolute top-3 right-2 w-2 h-2 bg-slate-800 rounded-full"></div>
                      {/* Smile */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-slate-800 rounded-b-full"></div>
                    </div>
                    
                    {/* Hair */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-14 h-8 bg-slate-800 rounded-t-full"></div>
                    
                    {/* Purple hat */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-t from-purple-700 to-purple-500 rounded-full border-4 border-purple-800" style={{ clipPath: 'polygon(20% 100%, 80% 100%, 90% 0%, 10% 0%)' }}>
                      <div className="absolute top-0 right-2 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Magic wand with star */}
                    <div className="absolute -right-8 top-12 w-12 h-2 bg-amber-800 rounded-full transform rotate-45">
                      <div className="absolute -top-2 -right-3 text-yellow-400 text-xl animate-pulse">⭐</div>
                    </div>
                    
                    {/* Magical notes */}
                    <div className="absolute -left-6 top-16 bg-yellow-300 p-2 rounded transform -rotate-12 shadow-lg border-2 border-amber-400">
                      <div className="text-xs text-amber-800 font-semibold">Ideas</div>
                      <div className="text-xs text-amber-800">for app</div>
                    </div>
                    
                    {/* Blue note */}
                    <div className="absolute -right-4 bottom-2 bg-blue-300 p-1 rounded transform rotate-12 shadow-lg border-2 border-blue-400">
                      <div className="text-xs text-blue-800">Notes</div>
                    </div>
                  </div>
                  
                  {/* Magic aura */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
                </div>
                
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center animate-bounce">
                  🔑
                </div>
              </div>

              {/* Magical Door */}
              <div className="relative group cursor-pointer" onClick={() => setShowRoadmap(true)}>
                <div className="bg-gradient-to-b from-amber-800 to-amber-900 w-48 h-64 rounded-t-3xl border-4 border-yellow-600/50 shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-yellow-500/25 relative overflow-hidden">
                  
                  {/* Door Details */}
                  <div className="absolute inset-4 bg-gradient-to-b from-amber-700 to-amber-800 rounded-t-2xl">
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-3 h-8 bg-yellow-600 rounded-full"></div>
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-yellow-600 rounded-full"></div>
                  </div>
                  
                  {/* Door Handle */}
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-yellow-500 rounded-full shadow-lg"></div>
                  
                  {/* Magical Glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Golden Sparkles around door */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute text-yellow-400 animate-sparkle-dance opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        left: `${-20 + Math.random() * 140}%`,
                        top: `${-10 + Math.random() * 120}%`,
                        animationDelay: `${Math.random() * 2}s`
                      }}
                    >
                      ✨
                    </div>
                  ))}
                </div>
                
                {/* Door Base */}
                <div className="bg-gradient-to-b from-amber-900 to-amber-950 w-52 h-8 rounded-b-xl border-4 border-t-0 border-yellow-600/50"></div>
              </div>

              {/* Interaction Text */}
              <div className="mt-8 text-center">
                <p className="text-yellow-300 text-lg mb-4 animate-pulse">
                  Click the ancient door to reveal our magical roadmap... 🗝️
                </p>
                <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                  <span>🔮</span>
                  <span>Nova holds the key to our future spells</span>
                  <span>🔮</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mystical Ground Effect */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full h-8 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent rounded-full blur-sm"></div>
        </div>
      </div>
    </section>
  );
};
