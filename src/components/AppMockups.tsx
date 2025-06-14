
export const AppMockups = () => {
  return (
    <section className="py-32 px-6 relative bg-gradient-to-br from-slate-950 via-yellow-950/10 to-slate-950">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 px-8 py-4 rounded-full border border-yellow-500/30 mb-8">
            <span className="text-3xl">📱</span>
            <span className="text-yellow-300 font-bold text-lg">Mobile App Preview</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
            Magic in Your Pocket
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of productivity magic. Nova lives in your phone, ready to transform 
            your thoughts into powerful automated spells.
          </p>
        </div>
        
        <div className="relative flex justify-center items-center">
          {/* Main Phone Mockup - Enhanced */}
          <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
            <div className="relative w-80 h-[650px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3.5rem] border-8 border-slate-700 shadow-2xl shadow-yellow-500/30 overflow-hidden">
              {/* Phone Screen */}
              <div className="w-full h-full bg-gradient-to-br from-slate-900 via-yellow-950/20 to-slate-900 relative overflow-hidden">
                {/* Status Bar */}
                <div className="flex justify-between items-center p-6 text-white text-sm border-b border-slate-700/50">
                  <span className="font-semibold">9:41</span>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-1 h-4 bg-white rounded-full"></div>
                      <div className="w-1 h-4 bg-white rounded-full"></div>
                      <div className="w-1 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="w-6 h-3 border border-white rounded-sm">
                      <div className="w-full h-full bg-green-400 rounded-sm"></div>
                    </div>
                  </div>
                </div>
                
                {/* App Interface */}
                <div className="p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <img 
                        src="/lovable-uploads/e2ed4fb4-a780-4aba-af58-acea7dcb1770.png" 
                        alt="Magic Notebook Logo" 
                        className="w-8 h-8"
                      />
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                        Magic Notebook
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm">Nova is ready to help</p>
                  </div>
                  
                  {/* Chat Interface */}
                  <div className="flex-1 space-y-4 mb-6">
                    {/* Nova's message */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <img 
                          src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
                          alt="Nova" 
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      </div>
                      <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 p-4 rounded-2xl rounded-tl-sm border border-yellow-500/30 max-w-[200px]">
                        <p className="text-yellow-100 text-sm">Good morning! Ready to cast your productivity spells? ✨</p>
                      </div>
                    </div>
                    
                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="bg-slate-700/70 p-4 rounded-2xl rounded-tr-sm max-w-[200px]">
                        <p className="text-gray-200 text-sm">/cast morning routine</p>
                      </div>
                    </div>
                    
                    {/* Nova's response */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <img 
                          src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
                          alt="Nova" 
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      </div>
                      <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 p-4 rounded-2xl rounded-tl-sm border border-yellow-500/30 max-w-[200px]">
                        <p className="text-yellow-100 text-sm">Perfect! I've automated your morning routine. Check your calendar! 🌅</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Input Area */}
                  <div className="bg-slate-800/50 rounded-full p-3 border border-slate-600/50">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 text-gray-400 text-sm">Type your wish here...</div>
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center">
                        <span className="text-black text-sm">✨</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Magic Elements */}
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute animate-ping"
                    style={{
                      left: `${15 + Math.random() * 70}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 4}s`,
                      animationDuration: `${2 + Math.random() * 3}s`,
                      fontSize: `${0.3 + Math.random() * 0.4}rem`,
                      color: ['#fbbf24', '#f59e0b', '#d97706'][Math.floor(Math.random() * 3)]
                    }}
                  >
                    ✨
                  </div>
                ))}
              </div>
            </div>
            
            {/* Enhanced Phone Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-amber-400/30 rounded-[3.5rem] blur-2xl -z-10 animate-pulse" />
          </div>
          
          {/* Floating Feature Cards */}
          <div className="absolute top-20 left-10 bg-gradient-to-br from-yellow-400/30 to-amber-400/30 p-6 rounded-2xl backdrop-blur-md border border-yellow-400/50 animate-float max-w-xs shadow-2xl" 
               style={{ animationDelay: '1s' }}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🧠</span>
              <h4 className="font-bold text-yellow-100 text-lg">AI Understanding</h4>
            </div>
            <p className="text-yellow-200/90 text-sm">Nova learns your patterns and suggests the perfect productivity spells</p>
          </div>
          
          <div className="absolute bottom-32 right-10 bg-gradient-to-br from-amber-400/30 to-yellow-400/30 p-6 rounded-2xl backdrop-blur-md border border-amber-400/50 animate-float max-w-xs shadow-2xl" 
               style={{ animationDelay: '3s' }}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">⚡</span>
              <h4 className="font-bold text-amber-100 text-lg">Instant Automation</h4>
            </div>
            <p className="text-amber-200/90 text-sm">Connect with 1000+ apps and services for seamless workflow magic</p>
          </div>
          
          <div className="absolute top-1/2 left-5 bg-gradient-to-br from-yellow-400/30 to-amber-400/30 p-6 rounded-2xl backdrop-blur-md border border-yellow-400/50 animate-float max-w-xs shadow-2xl" 
               style={{ animationDelay: '5s' }}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🎭</span>
              <h4 className="font-bold text-yellow-100 text-lg">Emotional Intelligence</h4>
            </div>
            <p className="text-yellow-200/90 text-sm">Nova adapts to your mood and energy levels throughout the day</p>
          </div>
        </div>
        
        {/* App Store Badges Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-800/60 to-slate-900/60 px-8 py-4 rounded-full border border-yellow-500/30 backdrop-blur-sm mb-8">
            <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-yellow-300 font-semibold text-lg">Coming Soon to App Stores</span>
          </div>
          
          <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
            Magic Notebook will be available on iOS and Android. Join our waitlist to be the first to experience the magic.
          </p>
          
          {/* Mock App Store Badges */}
          <div className="flex justify-center gap-6">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-4 rounded-2xl border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="text-3xl">📱</div>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Available on</div>
                  <div className="text-white font-bold">App Store</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-4 rounded-2xl border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="text-3xl">🤖</div>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="text-white font-bold">Google Play</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
