
export const Features = () => {
  const features = [
    {
      icon: '📓',
      title: 'Auto-Planning',
      description: 'Cast once, get a complete task map with intelligent breakdowns',
      color: 'from-yellow-500 to-yellow-700'
    },
    {
      icon: '📝',
      title: 'Enchanted Notes',
      description: 'Notes with AI-generated insights and magical organization',
      color: 'from-amber-500 to-amber-700'
    },
    {
      icon: '📚',
      title: 'Spell Linking',
      description: 'Connect ideas across projects with mystical relationship mapping',
      color: 'from-yellow-500 to-amber-700'
    },
    {
      icon: '🔄',
      title: 'API Alchemy',
      description: 'Nova connects services and automates workflows with one command',
      color: 'from-amber-500 to-yellow-700'
    }
  ];

  return (
    <section className="py-20 px-6 relative bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
            ✨ Magical Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the spells that make Magic Notebook your most powerful productivity companion
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20"
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-yellow-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
              
              {/* Floating particles on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-ping"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
