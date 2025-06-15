
export const DocsSection = () => {
  return (
    <section className="py-24 px-6 relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
          📚 Magical Documentation
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Discover the secrets of spellcasting and unlock the full potential of your magical notebook
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Documentation Link */}
          <div className="group">
            <a 
              href="#docs" 
              className="block bg-gradient-to-br from-purple-800/60 to-slate-900/60 border border-purple-500/30 rounded-2xl p-8 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20"
            >
              <div className="text-6xl mb-4 group-hover:animate-pulse">📖</div>
              <h3 className="text-2xl font-bold text-yellow-300 mb-4">
                Spell Documentation
              </h3>
              <p className="text-gray-300 mb-4">
                Learn how to craft powerful spells and automate your magical workflows
              </p>
              <div className="inline-flex items-center gap-2 text-yellow-400 font-semibold">
                <span>Read the Docs</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          </div>
          
          {/* Community Link */}
          <div className="group">
            <a 
              href="#community" 
              className="block bg-gradient-to-br from-purple-800/60 to-slate-900/60 border border-purple-500/30 rounded-2xl p-8 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20"
            >
              <div className="text-6xl mb-4 group-hover:animate-pulse">🧙‍♂️</div>
              <h3 className="text-2xl font-bold text-yellow-300 mb-4">
                Wizard Community
              </h3>
              <p className="text-gray-300 mb-4">
                Join fellow wizards, share spells, and get magical support
              </p>
              <div className="inline-flex items-center gap-2 text-yellow-400 font-semibold">
                <span>Join Community</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="mt-16 max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-yellow-300 mb-4">
            ✨ Join the Magic
          </h3>
          <p className="text-gray-300 mb-6">
            Get the latest spell updates and magical tips
          </p>
          <div className="flex gap-4">
            <input 
              type="email" 
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg bg-slate-800/80 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500/50 transition-colors"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating magical elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            <div className="text-yellow-400 text-lg">✨</div>
          </div>
        ))}
      </div>
    </section>
  );
};
