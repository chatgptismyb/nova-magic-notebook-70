
export const WhatItIs = () => {
  return (
    <section className="py-20 px-6 relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
            📓 What is Magic Notebook?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A spellcasting productivity system powered by your AI agent Nova. Create ideas, organize plans, 
            and automate your workflow by casting spells — not clicking buttons.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 p-8 rounded-2xl border-2 border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300 shadow-xl hover:shadow-yellow-500/20 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🎙️</span>
                </div>
                <h3 className="text-2xl font-semibold text-yellow-300">Voice-Powered Magic</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">Speak or write your thoughts. Nova transforms them into organized, actionable spells.</p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 p-8 rounded-2xl border-2 border-amber-500/30 hover:border-amber-500/60 transition-all duration-300 shadow-xl hover:shadow-amber-500/20 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-semibold text-amber-300">Intelligent Automation</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">Connect with your favorite tools through magical automation that learns your workflow.</p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 p-8 rounded-2xl border-2 border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300 shadow-xl hover:shadow-yellow-500/20 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🔗</span>
                </div>
                <h3 className="text-2xl font-semibold text-yellow-300">Multi-Step Spells</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">Chain complex tasks together with Nova's understanding of your goals and context.</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-8 rounded-3xl border-2 border-yellow-500/40 shadow-2xl backdrop-blur-sm hover:border-yellow-500/60 transition-all duration-300">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-400 mb-4 flex items-center gap-2">
                  <span className="text-xl">✨</span>
                  Magic Terminal
                </div>
              </div>
              
              <div className="space-y-3 text-sm font-mono">
                <div className="text-yellow-400 flex items-center gap-2">
                  <span className="text-lg">📝</span>
                  New spell detected...
                </div>
                <div className="text-green-400 flex items-center gap-2">
                  <span>&gt;</span>
                  <span className="bg-green-400/20 px-2 py-1 rounded text-green-300">/cast Build my dream startup</span>
                </div>
                <div className="text-blue-400 flex items-center gap-2">
                  <span className="text-lg">🧙‍♀️</span>
                  Nova: Breaking down your vision...
                </div>
                <div className="text-gray-300 ml-4 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">✨</span>
                    Market research spell
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">✨</span>
                    Business plan enchantment
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">✨</span>
                    MVP prototype ritual
                  </div>
                </div>
                <div className="text-yellow-400 animate-pulse flex items-center gap-2">
                  <span className="text-lg">🔮</span>
                  Spells ready to cast!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
