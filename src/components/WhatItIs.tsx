
export const WhatItIs = () => {
  return (
    <section className="py-20 px-6 relative">
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
            <div className="bg-slate-800/50 p-6 rounded-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Voice-Powered Magic</h3>
              <p className="text-gray-300">Speak or write your thoughts. Nova transforms them into organized, actionable spells.</p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-amber-300">Intelligent Automation</h3>
              <p className="text-gray-300">Connect with your favorite tools through magical automation that learns your workflow.</p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Multi-Step Spells</h3>
              <p className="text-gray-300">Chain complex tasks together with Nova's understanding of your goals and context.</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-slate-900/80 p-8 rounded-2xl border border-yellow-500/30 shadow-2xl">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-400 mb-4">Magic Terminal</div>
              </div>
              
              <div className="space-y-3 text-sm font-mono">
                <div className="text-yellow-400">📝 New spell detected...</div>
                <div className="text-green-400">&gt; /cast Build my dream startup</div>
                <div className="text-blue-400">🧙‍♀️ Nova: Breaking down your vision...</div>
                <div className="text-gray-300">✨ Market research spell</div>
                <div className="text-gray-300">✨ Business plan enchantment</div>
                <div className="text-gray-300">✨ MVP prototype ritual</div>
                <div className="text-yellow-400 animate-pulse">🔮 Spells ready to cast!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
