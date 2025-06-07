
import { useState } from 'react';

export const NovaPersona = () => {
  const [isHovered, setIsHovered] = useState(false);

  const floatingNotes = [
    { text: "/cast morning routine", position: "top-10 left-10", delay: "0s" },
    { text: "/automate email workflow", position: "top-20 right-16", delay: "2s" },
    { text: "/organize project tasks", position: "bottom-32 left-1/4", delay: "4s" },
    { text: "/schedule meditation time", position: "bottom-20 right-20", delay: "1s" },
    { text: "/track fitness goals", position: "top-1/3 left-1/3", delay: "3s" },
    { text: "/plan weekend getaway", position: "bottom-1/3 right-1/3", delay: "5s" }
  ];

  return (
    <section className="py-20 px-6 relative bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div 
              className="relative mx-auto w-80 h-80 rounded-full bg-gradient-to-br from-yellow-500/20 to-amber-500/20 flex items-center justify-center overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Floating rings around Nova */}
              <div className="absolute inset-0">
                <div className="absolute inset-4 border-2 border-yellow-400/30 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
                <div className="absolute inset-8 border-2 border-amber-400/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                <div className="absolute inset-12 border-2 border-yellow-400/30 rounded-full animate-spin" style={{ animationDuration: '12s' }} />
              </div>
              
              {/* Nova's representation */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <img 
                  src="/lovable-uploads/d28b8fdc-6ad3-421a-99b7-7b12e0aaff5d.png" 
                  alt="Nova - AI Companion" 
                  className="w-64 h-64 object-cover rounded-full transform transition-transform duration-300" 
                  style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
                />
              </div>
              
              {/* Floating command notes */}
              <div className="absolute inset-0 pointer-events-none overflow-visible">
                {floatingNotes.map((note, i) => (
                  <div
                    key={i}
                    className={`absolute ${note.position} bg-yellow-400/20 p-2 rounded-lg backdrop-blur-sm border border-yellow-400/40 animate-wind-drift text-xs text-yellow-200 font-mono max-w-32`}
                    style={{ animationDelay: note.delay }}
                  >
                    <div className="flex items-center gap-1">
                      <span>🪄</span>
                      <span>{note.text}</span>
                    </div>
                  </div>
                ))}
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
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
              Meet Nova
            </h2>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-yellow-500/20">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Nova is your magical co-pilot — a wise, intuitive AI companion who transforms your thoughts into 
                powerful productivity spells. Watch as she brings your ideas to life with enchanting automation.
              </p>
              <p className="text-lg text-yellow-300 font-semibold">
                She's not just an assistant. She's the magic behind your transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/30 p-4 rounded-lg border border-amber-500/20">
                <h4 className="font-semibold text-amber-300 mb-2">Spell Recognition</h4>
                <p className="text-sm text-gray-300">Understands your intent and crafts perfect productivity spells</p>
              </div>
              <div className="bg-slate-800/30 p-4 rounded-lg border border-yellow-500/20">
                <h4 className="font-semibold text-yellow-300 mb-2">Life Orchestration</h4>
                <p className="text-sm text-gray-300">Weaves together all aspects of your life into harmonious flow</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-600/20 to-amber-600/20 p-6 rounded-xl border border-yellow-500/30">
              <div className="flex items-start gap-3">
                <div className="text-2xl">💬</div>
                <div>
                  <p className="text-yellow-200 italic mb-2">"Ready to cast your next life-changing spell?"</p>
                  <p className="text-sm text-gray-400">— Nova, your magical productivity companion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
