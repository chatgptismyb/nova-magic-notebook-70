
export const Features = () => {
  const features = [
    {
      icon: '🧠',
      title: 'Life-Changing Auto-Planning',
      description: 'Cast once, transform your entire workflow with intelligent task mapping that adapts to your life',
      color: 'from-yellow-500 to-yellow-700',
      spell: '/cast morning routine'
    },
    {
      icon: '📝',
      title: 'Enchanted Productivity Notes',
      description: 'Notes that evolve with AI insights, magical organization, and spell-powered automation',
      color: 'from-amber-500 to-amber-700',
      spell: '/cast project launch'
    },
    {
      icon: '🔗',
      title: 'Universal Spell Linking',
      description: 'Connect every aspect of your life with mystical relationship mapping across all projects',
      color: 'from-yellow-500 to-amber-700',
      spell: '/cast life balance'
    },
    {
      icon: '⚡',
      title: 'Reality-Bending Automation',
      description: 'Nova connects all your tools and transforms your daily chaos into effortless magic',
      color: 'from-amber-500 to-yellow-700',
      spell: '/cast email zen'
    }
  ];

  return (
    <section className="py-20 px-6 relative bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
            ⚡ Life-Transforming Magic
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the spells that will revolutionize your productivity and turn everyday chaos into magical efficiency
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 overflow-hidden"
            >
              {/* Wind effect background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
              </div>
              
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-yellow-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 mb-4">
                  {feature.description}
                </p>
                
                {/* Spell command example */}
                <div className="inline-flex items-center gap-2 bg-slate-900/50 px-3 py-1 rounded-lg border border-yellow-500/20 text-xs text-yellow-300 font-mono">
                  <span>✨</span>
                  <span>{feature.spell}</span>
                </div>
              </div>
              
              {/* Flying particles effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-ping"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${1 + Math.random()}s`
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
