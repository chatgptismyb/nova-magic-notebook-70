
import { useState } from 'react';
import { Play, Pause } from 'lucide-react';

export const DemoVideo = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
            ✨ See Magic in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Watch how Nova transforms simple notes into powerful automated workflows
          </p>
        </div>
        
        <div className="relative bg-slate-800 rounded-3xl border-4 border-yellow-400 p-8 shadow-2xl">
          <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl overflow-hidden relative">
            {/* Mock video interface */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/10 to-amber-100/10">
              {/* Video timeline simulation */}
              <div className="absolute top-4 left-4 right-4">
                <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 text-white text-sm">
                  Magic Notebook Demo - Write it. Wish it. Watch it happen.
                </div>
              </div>
              
              {/* Center play/pause button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-yellow-400/40"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-slate-800 ml-1" />
                  ) : (
                    <Play className="w-8 h-8 text-slate-800 ml-1" />
                  )}
                </button>
              </div>
              
              {/* Demo steps overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Demo Progress</span>
                    <span className="text-xs text-yellow-300">2:34 / 3:45</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div className="bg-gradient-to-r from-yellow-400 to-amber-400 h-2 rounded-full w-2/3 transition-all duration-500"></div>
                  </div>
                  <div className="mt-2 text-xs text-gray-300">
                    Currently showing: "Write it. Wish it. Watch it happen" in action
                  </div>
                </div>
              </div>
              
              {/* Magical particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-ping"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${1.5 + Math.random()}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-300 mb-4">
              Experience the magic of turning thoughts into automated actions
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-slate-700 px-4 py-2 rounded-lg text-yellow-300 border border-yellow-400/20">
                Voice to Task
              </div>
              <div className="bg-slate-700 px-4 py-2 rounded-lg text-yellow-300 border border-yellow-400/20">
                Smart Organization
              </div>
              <div className="bg-slate-700 px-4 py-2 rounded-lg text-yellow-300 border border-yellow-400/20">
                Auto Workflows
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
