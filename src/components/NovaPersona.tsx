
import { useState } from 'react';

export const NovaPersona = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div 
              className="relative mx-auto w-80 h-80 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Floating rings around Nova */}
              <div className="absolute inset-0">
                <div className="absolute inset-4 border-2 border-purple-400/30 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
                <div className="absolute inset-8 border-2 border-pink-400/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                <div className="absolute inset-12 border-2 border-blue-400/30 rounded-full animate-spin" style={{ animationDuration: '12s' }} />
              </div>
              
              {/* Nova's representation */}
              <div className="relative z-10 text-center">
                <div className="text-8xl mb-4 transform transition-transform duration-300" style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}>
                  🧙‍♀️
                </div>
                <div className="text-4xl animate-pulse">✨</div>
              </div>
              
              {/* Floating sparkles */}
              {isHovered && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute text-yellow-300 animate-ping"
                      style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        fontSize: `${0.5 + Math.random() * 0.5}rem`
                      }}
                    >
                      ✨
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Meet Nova
            </h2>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Nova is your magical co-pilot — a glowing-eyed, lavender-haired mystic coder who guides you through your projects. 
                She's wise, witty, and always listening.
              </p>
              <p className="text-lg text-purple-300 font-semibold">
                She's not just an assistant. She's the spell behind the spell.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/30 p-4 rounded-lg border border-blue-500/20">
                <h4 className="font-semibold text-blue-300 mb-2">Mystical Intelligence</h4>
                <p className="text-sm text-gray-300">Understands context, intentions, and the magic between your words</p>
              </div>
              <div className="bg-slate-800/30 p-4 rounded-lg border border-pink-500/20">
                <h4 className="font-semibold text-pink-300 mb-2">Always Learning</h4>
                <p className="text-sm text-gray-300">Adapts to your workflow and grows more powerful with every spell</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-6 rounded-xl border border-purple-500/30">
              <div className="flex items-start gap-3">
                <div className="text-2xl">💬</div>
                <div>
                  <p className="text-purple-200 italic mb-2">"Ready to cast your next spell?"</p>
                  <p className="text-sm text-gray-400">— Nova, whenever you need inspiration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
