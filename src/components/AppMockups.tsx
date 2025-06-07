
export const AppMockups = () => {
  return (
    <section className="py-20 px-6 relative bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
            🔮 Coming Soon to Your Pocket
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Magic Notebook is being crafted with love. Here's a sneak peek at the enchanting experience awaiting you.
          </p>
        </div>
        
        <div className="relative flex justify-center items-center">
          {/* Main App Mockup */}
          <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
            <img 
              src="/lovable-uploads/6646e80a-4717-4bc9-92b9-c9bdabeb74b3.png" 
              alt="Magic Notebook Mobile App Preview" 
              className="max-w-full h-auto rounded-3xl shadow-2xl shadow-yellow-500/20"
            />
            
            {/* Floating magical elements around the mockup */}
            <div className="absolute -top-10 -left-10 text-3xl animate-bounce" style={{ animationDelay: '0s' }}>✨</div>
            <div className="absolute -top-8 -right-8 text-2xl animate-bounce" style={{ animationDelay: '1s' }}>🪄</div>
            <div className="absolute -bottom-8 -left-8 text-2xl animate-bounce" style={{ animationDelay: '2s' }}>⭐</div>
            <div className="absolute -bottom-10 -right-10 text-3xl animate-bounce" style={{ animationDelay: '0.5s' }}>🌟</div>
          </div>
          
          {/* Floating UI elements */}
          <div className="absolute top-10 left-10 bg-yellow-400/20 p-4 rounded-xl backdrop-blur-sm border border-yellow-400/30 animate-float max-w-xs" 
               style={{ animationDelay: '1s' }}>
            <div className="text-sm text-yellow-200">
              <div className="font-semibold mb-1">🎯 Smart Task Breaking</div>
              <div className="text-xs opacity-80">Nova automatically breaks down complex goals into actionable spells</div>
            </div>
          </div>
          
          <div className="absolute bottom-20 right-10 bg-amber-400/20 p-4 rounded-xl backdrop-blur-sm border border-amber-400/30 animate-float max-w-xs" 
               style={{ animationDelay: '3s' }}>
            <div className="text-sm text-amber-200">
              <div className="font-semibold mb-1">🔄 Automated Workflows</div>
              <div className="text-xs opacity-80">Connect with your favorite apps and let magic handle the rest</div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 px-6 py-3 rounded-full border border-yellow-500/30">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-yellow-300 font-medium">In Development</span>
          </div>
          
          <p className="text-gray-400 mt-4">
            Join our waitlist to be notified when Magic Notebook launches
          </p>
        </div>
      </div>
    </section>
  );
};
