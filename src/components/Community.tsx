
export const Community = () => {
  const spells = [
    { name: 'Morning Ritual Automator', author: 'Sarah M.', uses: '2.3k', category: 'Productivity' },
    { name: 'Creative Project Planner', author: 'Alex R.', uses: '1.8k', category: 'Creative' },
    { name: 'Email Triage Spell', author: 'Jordan L.', uses: '3.1k', category: 'Communication' },
    { name: 'Learning Path Generator', author: 'Maya K.', uses: '1.5k', category: 'Education' }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🌐 The Spell Archive
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover and share magical spells with the community. Clone, customize, and create your own enchantments.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {spells.map((spell, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-2xl">📜</div>
                <div className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full">
                  {spell.category}
                </div>
              </div>
              
              <h3 className="font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {spell.name}
              </h3>
              
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xs">
                  {spell.author[0]}
                </div>
                <span>{spell.author}</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">{spell.uses} uses</span>
                <button className="text-purple-400 hover:text-purple-300 transition-colors">
                  Clone ✨
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
            Browse All Spells
          </button>
        </div>
      </div>
    </section>
  );
};
