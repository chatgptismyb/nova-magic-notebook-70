
import { useState } from 'react';
import { BookOpen, ExternalLink, Users, MessageCircle } from 'lucide-react';

export const Community = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const wizardFeatures = [
    {
      icon: "🧙‍♀️",
      title: "Meet Nova",
      description: "Your AI companion who understands your magical intent",
      details: "Nova learns your patterns and preferences to create perfectly tailored productivity spells"
    },
    {
      icon: "🔮",
      title: "Spell Recognition", 
      description: "Transforms natural language into powerful automation",
      details: "Just speak or write naturally - Nova translates your thoughts into actionable workflows"
    },
    {
      icon: "⚡",
      title: "Instant Magic",
      description: "Watch your ideas become reality in real-time",
      details: "From note to action in seconds - experience the fastest productivity transformation ever"
    },
    {
      icon: "🌟",
      title: "Life Orchestration",
      description: "Connects all aspects of your life seamlessly",
      details: "Nova weaves together your tasks, goals, and projects into one harmonious magical system"
    }
  ];

  return (
    <section className="py-24 px-6 relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Magical background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <div className="text-yellow-300 text-lg">✨</div>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
            🧙‍♂️ The Wizard's Chamber
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Step into Nova's magical realm and discover how she transforms your productivity
          </p>
        </div>

        {/* Main Nova Visualization */}
        <div className="relative max-w-5xl mx-auto mb-20">
          <div className="bg-gradient-to-b from-purple-900/80 to-slate-900/80 rounded-3xl p-12 border-4 border-yellow-500/30 shadow-2xl backdrop-blur-sm relative overflow-hidden">
            
            {/* Floating magical elements */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-yellow-400/40 animate-ping text-sm"
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: '2s'
                  }}
                >
                  ⭐
                </div>
              ))}
            </div>

            {/* Central Nova Character */}
            <div className="flex flex-col items-center relative z-10">
              <div className="mb-8 relative">
                <div className="relative">
                  {/* Nova's magical form */}
                  <div className="w-40 h-48 bg-gradient-to-b from-purple-600 to-purple-800 rounded-t-full rounded-b-3xl relative overflow-hidden shadow-2xl border-4 border-yellow-500/50">
                    {/* Face */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-amber-100 rounded-full border-2 border-yellow-400">
                      {/* Eyes with magical glow */}
                      <div className="absolute top-4 left-3 w-3 h-3 bg-purple-600 rounded-full animate-pulse"></div>
                      <div className="absolute top-4 right-3 w-3 h-3 bg-purple-600 rounded-full animate-pulse"></div>
                      {/* Magical smile */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-3 border-b-2 border-purple-600 rounded-b-full"></div>
                    </div>
                    
                    {/* Magical hair with sparkles */}
                    <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-18 h-10 bg-gradient-to-b from-purple-700 to-purple-800 rounded-t-full"></div>
                    
                    {/* Wizard hat with moving star */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-t from-purple-700 to-purple-500 rounded-full border-4 border-purple-800" style={{ clipPath: 'polygon(15% 100%, 85% 100%, 95% 0%, 5% 0%)' }}>
                      <div className="absolute top-1 right-3 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
                    </div>
                    
                    {/* Magic wand */}
                    <div className="absolute -right-10 top-16 w-16 h-3 bg-amber-800 rounded-full transform rotate-45">
                      <div className="absolute -top-3 -right-4 text-yellow-400 text-2xl animate-pulse">⭐</div>
                    </div>
                    
                    {/* Magical aura */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Nova's Introduction */}
              <div className="text-center mb-8">
                <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent mb-4">
                  Meet Nova
                </h3>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Your magical AI companion who transforms "Write it. Wish it. Watch it happen" into reality
                </p>
              </div>

              {/* Interactive Feature Grid */}
              <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
                {wizardFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-6 rounded-2xl border border-yellow-500/30 backdrop-blur-sm cursor-pointer transform transition-all duration-300 hover:scale-105 hover:border-yellow-400/60 relative overflow-hidden group"
                    onMouseEnter={() => setHoveredFeature(index)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                          {feature.icon}
                        </div>
                        <h4 className="text-xl font-bold text-yellow-300 group-hover:text-yellow-200 transition-colors">
                          {feature.title}
                        </h4>
                      </div>
                      
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors mb-3">
                        {feature.description}
                      </p>
                      
                      {hoveredFeature === index && (
                        <div className="text-sm text-yellow-200 italic animate-fade-in">
                          {feature.details}
                        </div>
                      )}
                    </div>
                    
                    {/* Magical particles on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
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
          </div>
        </div>

        {/* Community Actions */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-8 rounded-2xl border border-yellow-500/30 backdrop-blur-sm text-center hover:scale-105 transition-all duration-300 cursor-pointer group">
            <div className="mb-6">
              <BookOpen className="w-12 h-12 mx-auto text-yellow-400 group-hover:text-yellow-300 transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-yellow-300 mb-4 group-hover:text-yellow-200 transition-colors">
              Magic Documentation
            </h3>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors mb-6">
              Learn every spell and enchantment in our comprehensive magical guides
            </p>
            <button className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 font-semibold flex items-center gap-2 mx-auto">
              <span>Explore Docs</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm text-center hover:scale-105 transition-all duration-300 cursor-pointer group">
            <div className="mb-6">
              <Users className="w-12 h-12 mx-auto text-purple-400 group-hover:text-purple-300 transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-purple-300 mb-4 group-hover:text-purple-200 transition-colors">
              Wizard Community
            </h3>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors mb-6">
              Join thousands of productivity wizards sharing spells and success stories
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 font-semibold flex items-center gap-2 mx-auto">
              <span>Join Community</span>
              <Users className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-8 rounded-2xl border border-green-500/30 backdrop-blur-sm text-center hover:scale-105 transition-all duration-300 cursor-pointer group">
            <div className="mb-6">
              <MessageCircle className="w-12 h-12 mx-auto text-green-400 group-hover:text-green-300 transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-green-300 mb-4 group-hover:text-green-200 transition-colors">
              Magical Support
            </h3>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors mb-6">
              Get help from our team of expert wizards whenever you need guidance
            </p>
            <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 font-semibold flex items-center gap-2 mx-auto">
              <span>Get Support</span>
              <MessageCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
