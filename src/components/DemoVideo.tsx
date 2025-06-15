
import { useState } from 'react';
import { Play, X, Sparkles } from 'lucide-react';

export const DemoVideo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
              🎞️ Watch the Magic
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
              See Nova transform a simple wish into a complete automated workflow
            </p>
          </div>

          {/* Video Preview */}
          <div className="relative max-w-4xl mx-auto">
            <div 
              className="bg-gradient-to-br from-purple-800/80 to-indigo-900/80 rounded-3xl border-2 border-yellow-400/50 p-8 cursor-pointer hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              onClick={() => setIsVideoOpen(true)}
            >
              {/* Background shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-purple-400/10 animate-shimmer"></div>
              
              <div className="relative z-10 text-center">
                {/* Play Button */}
                <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-10 h-10 text-purple-900 ml-1" />
                </div>
                
                {/* Demo Preview Steps */}
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-yellow-300">Nova in Action Demo</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-purple-700/30 p-4 rounded-xl border border-purple-500/30">
                      <div className="text-2xl mb-2">💭</div>
                      <div className="text-yellow-300 font-semibold">User Types:</div>
                      <div className="text-purple-200 text-sm">"I wish I could organize my week"</div>
                    </div>
                    
                    <div className="bg-purple-700/30 p-4 rounded-xl border border-purple-500/30">
                      <div className="text-2xl mb-2">🧠</div>
                      <div className="text-yellow-300 font-semibold">Nova Thinks:</div>
                      <div className="text-purple-200 text-sm">Analyzes & creates smart plan</div>
                    </div>
                    
                    <div className="bg-purple-700/30 p-4 rounded-xl border border-purple-500/30">
                      <div className="text-2xl mb-2">⚡</div>
                      <div className="text-yellow-300 font-semibold">Magic Happens:</div>
                      <div className="text-purple-200 text-sm">Calendar, tasks & automation</div>
                    </div>
                  </div>
                  
                  <button className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-purple-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg text-lg">
                    Watch the Magic ✨
                  </button>
                </div>
              </div>
              
              {/* Floating sparkles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-yellow-400/60 animate-ping"
                    style={{
                      left: `${10 + Math.random() * 80}%`,
                      top: `${10 + Math.random() * 80}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      fontSize: '0.8rem'
                    }}
                  >
                    ✨
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setIsVideoOpen(false)} />
          
          <div className="relative bg-gradient-to-br from-purple-900 to-indigo-900 p-8 rounded-3xl border-2 border-yellow-400/50 shadow-2xl max-w-5xl w-full mx-4 animate-scale-in">
            {/* Close button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 w-12 h-12 bg-purple-700/50 hover:bg-purple-600/50 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <X className="w-6 h-6 text-purple-200" />
            </button>

            {/* Video Content */}
            <div className="aspect-video bg-gradient-to-br from-purple-800 to-indigo-800 rounded-2xl flex items-center justify-center relative overflow-hidden">
              {/* Demo Animation */}
              <div className="text-center space-y-6">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
                    alt="Nova" 
                    className="w-32 h-32 mx-auto rounded-full animate-nova-breathe"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 rounded-full animate-pulse"></div>
                </div>
                
                <h4 className="text-3xl font-bold text-yellow-300">Live Demo Coming Soon!</h4>
                <p className="text-xl text-purple-200 max-w-2xl mx-auto leading-relaxed">
                  Watch Nova transform "I wish I could organize my week" into a complete productivity system with calendar integration, smart tasks, and automated reminders.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  <div className="bg-purple-700/30 p-4 rounded-xl">
                    <Sparkles className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <div className="text-yellow-300 font-semibold">Voice Input</div>
                    <div className="text-purple-200 text-sm">Natural speech recognition</div>
                  </div>
                  <div className="bg-purple-700/30 p-4 rounded-xl">
                    <Sparkles className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <div className="text-yellow-300 font-semibold">AI Planning</div>
                    <div className="text-purple-200 text-sm">Intelligent task breakdown</div>
                  </div>
                  <div className="bg-purple-700/30 p-4 rounded-xl">
                    <Sparkles className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <div className="text-yellow-300 font-semibold">Auto-Sync</div>
                    <div className="text-purple-200 text-sm">Cross-platform magic</div>
                  </div>
                </div>
              </div>
              
              {/* Animated sparkles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-yellow-400/40 animate-sparkle-dance"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      fontSize: '1rem'
                    }}
                  >
                    ✨
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
