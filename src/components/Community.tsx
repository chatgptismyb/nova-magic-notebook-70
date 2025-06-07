
export const Community = () => {
  const spells = [
    { 
      name: 'Morning Ritual Automator', 
      author: 'Sarah M.', 
      uses: '2.3k', 
      category: 'Productivity',
      description: 'Transform your morning chaos into a seamless flow of energy and focus',
      rating: 4.9,
      icon: '🌅'
    },
    { 
      name: 'Creative Project Planner', 
      author: 'Alex R.', 
      uses: '1.8k', 
      category: 'Creative',
      description: 'Turn scattered ideas into beautifully organized creative masterpieces',
      rating: 4.8,
      icon: '🎨'
    },
    { 
      name: 'Email Triage Spell', 
      author: 'Jordan L.', 
      uses: '3.1k', 
      category: 'Communication',
      description: 'Master your inbox with intelligent sorting and automated responses',
      rating: 4.9,
      icon: '📧'
    },
    { 
      name: 'Learning Path Generator', 
      author: 'Maya K.', 
      uses: '1.5k', 
      category: 'Education',
      description: 'Create personalized learning journeys that adapt to your progress',
      rating: 4.7,
      icon: '🎓'
    },
    { 
      name: 'Wellness Tracker Magic', 
      author: 'Chris T.', 
      uses: '2.2k', 
      category: 'Health',
      description: 'Holistic health tracking that connects mind, body, and spirit',
      rating: 4.8,
      icon: '🧘‍♀️'
    },
    { 
      name: 'Finance Flow Optimizer', 
      author: 'Dana K.', 
      uses: '1.9k', 
      category: 'Finance',
      description: 'Transform money management from stress to strategic abundance',
      rating: 4.6,
      icon: '💰'
    }
  ];

  const categories = ['All', 'Productivity', 'Creative', 'Communication', 'Education', 'Health', 'Finance'];

  return (
    <section className="py-24 px-6 relative bg-transparent">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 px-6 py-3 rounded-full border border-yellow-500/30 mb-6">
            <span className="text-2xl">📚</span>
            <span className="text-yellow-300 font-semibold">Community Spell Archive</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
            Magical Spells Library
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover thousands of life-changing productivity spells created by our magical community. 
            Clone, customize, and cast your way to extraordinary transformation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 rounded-full bg-slate-800/50 border border-yellow-500/30 text-yellow-300 hover:bg-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 font-medium"
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Spells Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {spells.map((spell, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-8 rounded-2xl border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105 cursor-pointer backdrop-blur-sm overflow-hidden"
            >
              {/* Magical glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                    {spell.icon}
                  </div>
                  <div className="text-xs bg-gradient-to-r from-yellow-600/30 to-amber-600/30 text-yellow-300 px-3 py-1 rounded-full border border-yellow-500/30">
                    {spell.category}
                  </div>
                </div>
                
                <h3 className="font-bold text-xl text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                  {spell.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {spell.description}
                </p>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-sm ${i < Math.floor(spell.rating) ? 'text-yellow-400' : 'text-gray-600'}`}>
                        ⭐
                      </span>
                    ))}
                  </div>
                  <span className="text-yellow-400 text-sm font-medium">{spell.rating}</span>
                </div>
                
                <div className="flex items-center gap-3 text-sm text-gray-400 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center text-xs font-bold text-black">
                    {spell.author[0]}
                  </div>
                  <span>{spell.author}</span>
                  <span>•</span>
                  <span>{spell.uses} casts</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-yellow-400">
                    <span className="text-lg">✨</span>
                    <span className="text-sm font-medium">Free to clone</span>
                  </div>
                  <button className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-black px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 font-semibold text-sm">
                    Cast Spell
                  </button>
                </div>
              </div>

              {/* Floating particles on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-yellow-300/60 animate-ping text-xs"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: '2s'
                    }}
                  >
                    ✨
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center bg-slate-800/30 p-6 rounded-xl border border-yellow-500/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">12,847</div>
            <div className="text-gray-400">Active Spells</div>
          </div>
          <div className="text-center bg-slate-800/30 p-6 rounded-xl border border-amber-500/20">
            <div className="text-3xl font-bold text-amber-400 mb-2">45,293</div>
            <div className="text-gray-400">Total Casts</div>
          </div>
          <div className="text-center bg-slate-800/30 p-6 rounded-xl border border-yellow-500/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">8,156</div>
            <div className="text-gray-400">Wizards</div>
          </div>
          <div className="text-center bg-slate-800/30 p-6 rounded-xl border border-amber-500/20">
            <div className="text-3xl font-bold text-amber-400 mb-2">4.8</div>
            <div className="text-gray-400">Avg Rating</div>
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-black px-12 py-4 rounded-full transition-all duration-300 hover:scale-105 font-bold text-lg shadow-lg hover:shadow-yellow-500/25">
            Explore All Spells ✨
          </button>
        </div>
      </div>
    </section>
  );
};
