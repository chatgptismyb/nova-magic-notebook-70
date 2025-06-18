import { useState } from 'react';
import { AIIntegrationStatus } from './ui/ai-integration-status';

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

  // Mock connected providers for demo
  const connectedProviders = ['OpenAI', 'Anthropic'];

  return (
    <section className="py-24 px-6 relative bg-transparent">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div 
              className="relative mx-auto w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/20 via-indigo-500/20 to-purple-600/20 flex items-center justify-center overflow-visible border-4 border-purple-500/30 shadow-2xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Multiple floating rings around Nova */}
              <div className="absolute inset-0">
                <div className="absolute -inset-8 border-2 border-purple-400/20 rounded-full animate-spin" style={{ animationDuration: '15s' }} />
                <div className="absolute -inset-4 border-2 border-indigo-400/30 rounded-full animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
                <div className="absolute inset-4 border-2 border-purple-400/40 rounded-full animate-spin" style={{ animationDuration: '12s' }} />
                <div className="absolute inset-8 border border-indigo-400/30 rounded-full animate-spin" style={{ animationDuration: '18s', animationDirection: 'reverse' }} />
              </div>
              
              {/* Nova's chatbot-style representation */}
              <div className="relative z-10 w-80 h-80 rounded-full bg-gradient-to-br from-purple-400/30 to-indigo-500/30 flex items-center justify-center border-3 border-purple-300/50 overflow-hidden">
                {/* Inner glow effect */}
                <div className="absolute inset-4 bg-gradient-to-br from-purple-300/30 to-indigo-400/30 rounded-full blur-xl" />
                
                <img 
                  src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
                  alt="Nova - AI Companion" 
                  className="w-72 h-72 object-cover rounded-full transform transition-transform duration-500 relative z-10" 
                  style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
                />
              </div>
              
              {/* Floating command notes with enhanced styling */}
              <div className="absolute inset-0 pointer-events-none overflow-visible">
                {floatingNotes.map((note, i) => (
                  <div
                    key={i}
                    className={`absolute ${note.position} bg-gradient-to-r from-purple-400/30 to-indigo-400/30 backdrop-blur-md p-3 rounded-xl border border-purple-400/50 animate-wind-drift text-sm text-purple-100 font-mono max-w-40 shadow-lg`}
                    style={{ animationDelay: note.delay }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🪄</span>
                      <span className="font-semibold">{note.text}</span>
                    </div>
                    {/* Small sparkle */}
                    <div className="absolute -top-1 -right-1 text-purple-300 text-xs animate-ping">✨</div>
                  </div>
                ))}
              </div>
              
              {/* Enhanced floating sparkles */}
              {isHovered && (
                <div className="absolute inset-0 pointer-events-none overflow-visible">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute text-purple-300 animate-ping"
                      style={{
                        left: `${-10 + Math.random() * 120}%`,
                        top: `${-10 + Math.random() * 120}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        fontSize: `${0.5 + Math.random() * 0.8}rem`
                      }}
                    >
                      ✨
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 px-6 py-3 rounded-full border border-purple-500/30 mb-4">
              <span className="text-2xl">🤖</span>
              <span className="text-purple-300 font-semibold">Meet Your AI Companion</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Nova
            </h2>
            
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Nova is your magical co-pilot — a wise, intuitive AI companion who transforms your thoughts into 
                powerful productivity spells. Watch as she brings your ideas to life with enchanting automation.
              </p>
              <p className="text-xl text-purple-300 font-bold">
                She's not just an assistant. She's the magic behind your transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 p-6 rounded-xl border border-indigo-500/30 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🧠</span>
                  <h4 className="font-bold text-indigo-300 text-lg">Spell Recognition</h4>
                </div>
                <p className="text-gray-300">Understands your intent and crafts perfect productivity spells</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 p-6 rounded-xl border border-purple-500/30 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🎭</span>
                  <h4 className="font-bold text-purple-300 text-lg">Life Orchestration</h4>
                </div>
                <p className="text-gray-300">Weaves together all aspects of your life into harmonious flow</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-purple-600/20 p-8 rounded-2xl border border-purple-500/40 backdrop-blur-sm relative overflow-hidden">
              {/* Background sparkles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-purple-300/30 animate-ping"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      fontSize: '0.5rem'
                    }}
                  >
                    ✨
                  </div>
                ))}
              </div>
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="text-3xl">💬</div>
                <div>
                  <p className="text-purple-100 text-lg mb-3 font-medium italic">
                    "Ready to cast your next life-changing spell?"
                  </p>
                  <p className="text-gray-400">— Nova, your magical productivity companion</p>
                </div>
              </div>
            </div>
            
            <AIIntegrationStatus connectedProviders={connectedProviders} theme="purple" />
          </div>
        </div>
      </div>
    </section>
  );
};