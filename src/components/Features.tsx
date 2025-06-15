
import { Wand2, Zap, Link2, FileText } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <Wand2 className="w-8 h-8 text-yellow-400" />,
      title: 'Life-Changing Auto-Planning',
      description: 'Write it. Wish it. Watch your entire workflow transform with intelligent task mapping that adapts to your life',
      color: 'from-yellow-500 to-yellow-700',
      spell: '/cast morning routine'
    },
    {
      icon: <FileText className="w-8 h-8 text-amber-400" />,
      title: 'Enchanted Productivity Notes',
      description: 'Notes that evolve with AI insights, magical organization, and spell-powered automation',
      color: 'from-amber-500 to-amber-700',
      spell: '/cast project launch'
    },
    {
      icon: <Link2 className="w-8 h-8 text-yellow-400" />,
      title: 'Universal Spell Linking',
      description: 'Connect every aspect of your life with mystical relationship mapping across all projects',
      color: 'from-yellow-500 to-amber-700',
      spell: '/cast life balance'
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-400" />,
      title: 'Reality-Bending Automation',
      description: 'Nova connects all your tools and transforms your daily chaos into effortless magic',
      color: 'from-amber-500 to-yellow-700',
      spell: '/cast email zen'
    }
  ];

  return (
    <section className="py-20 px-6 relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
            ⚡ Features That Create Magic
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover the spells that will revolutionize your productivity - Write it. Wish it. Watch it happen.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gradient-to-br from-slate-800/80 to-slate-700/80 rounded-2xl border-2 border-slate-700/50 hover:border-yellow-500/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 overflow-hidden backdrop-blur-sm"
            >
              {/* Wind effect background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
              </div>
              
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300 w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 rounded-xl flex items-center justify-center">
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
