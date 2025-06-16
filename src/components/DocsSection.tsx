
import { BookOpen, Users, Mail, Star, Sparkles, Scroll, Wand2 } from 'lucide-react';

export const DocsSection = () => {
  return (
    <section className="py-24 px-6 relative bg-gradient-to-br from-purple-900 via-slate-900 to-purple-800">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400/20 to-purple-400/20 px-6 py-3 rounded-full border border-yellow-400/30 mb-6">
            <Scroll className="w-6 h-6 text-yellow-400" />
            <span className="text-yellow-300 font-semibold">Documentation & Community</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
            Master the Magic
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the secrets of spellcasting and join a community of magical productivity wizards
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Documentation Link */}
          <div className="group">
            <a 
              href="#docs" 
              className="block bg-gradient-to-br from-yellow-500/10 to-purple-600/10 border-2 border-yellow-400/30 rounded-3xl p-8 hover:border-yellow-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-300 mb-4">
                  Spell Documentation
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Learn how to craft powerful spells, automate workflows, and unlock the full potential of your magical notebook
                </p>
                <div className="inline-flex items-center gap-2 text-yellow-400 font-semibold group-hover:gap-4 transition-all duration-300">
                  <Wand2 className="w-5 h-5" />
                  <span>Read the Docs</span>
                  <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </a>
          </div>
          
          {/* Community Link */}
          <div className="group">
            <a 
              href="#community" 
              className="block bg-gradient-to-br from-purple-600/10 to-yellow-500/10 border-2 border-purple-400/30 rounded-3xl p-8 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-purple-300 mb-4">
                  Wizard Community
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Join fellow wizards, share spells, get magical support, and discover new ways to enhance your productivity
                </p>
                <div className="inline-flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-4 transition-all duration-300">
                  <Sparkles className="w-5 h-5" />
                  <span>Join Community</span>
                  <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-500/10 to-purple-600/10 border-2 border-gradient-to-r from-yellow-400/40 to-purple-400/40 rounded-3xl p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-yellow-300">
                Stay Magical
              </h3>
            </div>
            <p className="text-gray-300 mb-6 text-lg">
              Get the latest spell updates, magical tips, and exclusive wizard perks
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="your@magical-email.com"
                className="flex-1 px-6 py-4 rounded-2xl bg-white/5 border-2 border-purple-400/30 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/60 focus:ring-4 focus:ring-yellow-400/20 transition-all duration-300 backdrop-blur-sm"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-purple-600 hover:from-yellow-600 hover:to-purple-700 text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating magical elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            <div className={`text-lg ${i % 2 === 0 ? 'text-yellow-400' : 'text-purple-400'}`}>
              {i % 3 === 0 ? '✨' : i % 3 === 1 ? '🌟' : '⭐'}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
