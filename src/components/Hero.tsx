import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Star, ArrowDown, Play, Users, BookOpen, Sparkles, Calendar, Lightbulb, FileText, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EmailSignup } from '@/components/EmailSignup';
import { InteractivePhone } from '@/components/InteractivePhone';

export const Hero = () => {
  const [showEmailSignup, setShowEmailSignup] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const phoneScreens = {
    notes: [
      { title: "Smart Notes", icon: "📝", color: "from-blue-100 to-cyan-50", content: "AI-powered writing", description: "Intelligent note-taking" },
      { title: "Voice Input", icon: "🎤", color: "from-blue-100 to-indigo-50", content: "Speak your thoughts", description: "Natural voice capture" },
      { title: "Auto Organize", icon: "📋", color: "from-blue-100 to-sky-50", content: "Smart categorization", description: "Effortless organization" }
    ],
    tasks: [
      { title: "Task Magic", icon: "🎯", color: "from-purple-100 to-indigo-50", content: "Goal organization", description: "Your tasks, perfectly organized" },
      { title: "Auto Schedule", icon: "📅", color: "from-purple-100 to-violet-50", content: "Smart planning", description: "Intelligent scheduling" },
      { title: "Progress Track", icon: "📊", color: "from-purple-100 to-purple-50", content: "Visual insights", description: "Track your journey" }
    ],
    nova: [
      { title: "Meet Nova", icon: "🧙‍♀️", color: "from-yellow-100 to-amber-50", content: "Your AI companion", description: "Ready to transform your notes?" },
      { title: "AI Assistant", icon: "✨", color: "from-yellow-100 to-orange-50", content: "Magical guidance", description: "Smart suggestions always" },
      { title: "Personal Magic", icon: "🌟", color: "from-yellow-100 to-yellow-50", content: "Tailored experience", description: "Magic personalized for you" }
    ],
    automation: [
      { title: "Auto Magic", icon: "⚡", color: "from-green-100 to-emerald-50", content: "Workflow automation", description: "Watch it happen effortlessly" },
      { title: "Smart Connect", icon: "🔗", color: "from-green-100 to-teal-50", content: "App integration", description: "Everything connected seamlessly" },
      { title: "Real Actions", icon: "🚀", color: "from-green-100 to-lime-50", content: "Actual results", description: "Magic becomes reality" }
    ],
    inspiration: [
      { title: "Spark Ideas", icon: "🔥", color: "from-orange-100 to-red-50", content: "Instant inspiration", description: "Ideas that ignite action" },
      { title: "Creative Flow", icon: "🎨", color: "from-orange-100 to-pink-50", content: "Unleash creativity", description: "Your imagination, amplified" },
      { title: "Innovation Hub", icon: "💡", color: "from-orange-100 to-amber-50", content: "Breakthrough thinking", description: "Where great ideas are born" }
    ]
  };

  return (
    <>
      {/* Enhanced Interactive Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-yellow-100/90 backdrop-blur-lg border-b-2 border-amber-300 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img 
                  src="/lovable-uploads/cb8ad732-ec0b-4d19-8ec7-5886d9f5bda1.png" 
                  alt="Magic Notebook Logo" 
                  className="w-10 h-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl font-bold text-amber-800 group-hover:text-amber-600 transition-colors">Magic Notebook</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-amber-700 hover:text-amber-900 font-medium transition-all duration-300 hover:scale-105 relative group"
              >
                How it Works
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <Link to="/showcase" className="text-amber-700 hover:text-amber-900 font-medium transition-all duration-300 hover:scale-105 relative group">
                Demo
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/subscription" className="text-amber-700 hover:text-amber-900 font-medium transition-all duration-300 hover:scale-105 relative group">
                Pricing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <button 
                onClick={() => setSidebarOpen(true)}
                className="flex items-center gap-2 text-amber-700 hover:text-amber-900 font-medium transition-all duration-300 hover:scale-105"
              >
                <BookOpen className="w-4 h-4" />
                Docs
              </button>
              <Link to="/login" className="text-amber-700 hover:text-amber-900 font-medium transition-all duration-300 hover:scale-105">
                Login
              </Link>
              <Link 
                to="/signup"
                className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-amber-500/40 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 group-hover:animate-spin" />
                  Start Free
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 text-amber-700 hover:text-amber-900 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`fixed inset-0 z-50 ${sidebarOpen ? '' : 'pointer-events-none'}`}>
        <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setSidebarOpen(false)}></div>
        <div className={`absolute right-0 top-0 h-full w-80 bg-gradient-to-b from-yellow-50 to-amber-50 shadow-2xl transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-amber-800">Navigation</h2>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="p-2 text-amber-700 hover:text-amber-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <a href="#how-it-works" onClick={() => { setSidebarOpen(false); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }} className="block p-3 rounded-lg hover:bg-amber-100 transition-colors">
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-5 h-5 text-amber-600" />
                  <span className="font-semibold text-amber-800">How it Works</span>
                </div>
              </a>
              <Link to="/showcase" onClick={() => setSidebarOpen(false)} className="block p-3 rounded-lg hover:bg-amber-100 transition-colors">
                <div className="flex items-center gap-3">
                  <Play className="w-5 h-5 text-amber-600" />
                  <span className="font-semibold text-amber-800">Demo</span>
                </div>
              </Link>
              <Link to="/subscription" onClick={() => setSidebarOpen(false)} className="block p-3 rounded-lg hover:bg-amber-100 transition-colors">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-amber-600" />
                  <span className="font-semibold text-amber-800">Pricing</span>
                </div>
              </Link>
              <button onClick={() => { setSidebarOpen(false); }} className="block w-full text-left p-3 rounded-lg hover:bg-amber-100 transition-colors">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-amber-600" />
                  <span className="font-semibold text-amber-800">Documentation</span>
                </div>
              </button>
              <Link to="/login" onClick={() => setSidebarOpen(false)} className="block p-3 rounded-lg hover:bg-amber-100 transition-colors">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-amber-600" />
                  <span className="font-semibold text-amber-800">Login</span>
                </div>
              </Link>
            </div>
            
            <div className="mt-8 p-4 bg-gradient-to-r from-amber-200 to-yellow-200 rounded-xl">
              <h3 className="font-bold text-amber-800 mb-2">Ready to start?</h3>
              <Link 
                to="/signup"
                onClick={() => setSidebarOpen(false)}
                className="block w-full bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-bold py-3 px-4 rounded-lg text-center transition-all duration-300 hover:scale-105"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Enhanced story-driven content */}
          <div className="space-y-8">
            {/* Logo with M book - Sticky Note Style */}
            <div className="bg-yellow-200 p-6 rounded-2xl shadow-lg border-l-8 border-amber-400 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-4">
                <img 
                  src="/lovable-uploads/cb8ad732-ec0b-4d19-8ec7-5886d9f5bda1.png" 
                  alt="Magic Notebook Logo" 
                  className="w-16 h-16"
                />
                <div>
                  <h3 className="text-2xl font-bold text-amber-700">Magic Notebook</h3>
                  <p className="text-amber-600 text-sm">Write it. Wish it. Watch it happen.</p>
                </div>
              </div>
            </div>

            {/* Main headline sticky note */}
            <div className="bg-amber-100 p-8 rounded-2xl shadow-xl border-l-8 border-yellow-500 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3 bg-yellow-300/50 px-4 py-2 rounded-full border border-amber-400/40">
                  <Sparkles className="w-5 h-5 text-amber-600 animate-spin-slow" />
                  <span className="text-amber-700 font-semibold text-sm">Write it. Wish it. Watch it happen.</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                    Transform Your
                  </span>
                  <br />
                  <span className="text-slate-800">Notes Into</span>
                  <br />
                  <span className="text-amber-600">Magic</span>
                </h1>
              </div>
            </div>

            {/* Story sticky note */}
            <div className="bg-yellow-100 p-6 rounded-2xl shadow-lg border-l-6 border-amber-500 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <h2 className="text-xl font-bold text-amber-800 mb-3">📖 Your Magical Journey</h2>
              <p className="text-slate-700 leading-relaxed">
                Meet <span className="font-bold text-amber-700">Nova</span>, your AI companion who transforms 
                scattered thoughts into organized magic. Write it. Wish it. 
                <span className="italic text-amber-600"> Watch it happen</span>.
              </p>
            </div>

            {/* Benefits sticky notes grid */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-amber-50 p-4 rounded-xl shadow-md border-l-4 border-yellow-400 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-yellow-600" />
                  <span className="font-semibold text-amber-700">Voice Magic</span>
                </div>
                <p className="text-sm text-slate-600">Speak your thoughts, watch them become actions</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-xl shadow-md border-l-4 border-amber-400 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  <span className="font-semibold text-amber-700">Smart Automation</span>
                </div>
                <p className="text-sm text-slate-600">Connect your life with intelligent workflows</p>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-xl shadow-md border-l-4 border-yellow-400 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-yellow-600" />
                  <span className="font-semibold text-amber-700">AI Suggestions</span>
                </div>
                <p className="text-sm text-slate-600">Get intelligent task suggestions from your notes</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-xl shadow-md border-l-4 border-amber-400 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-amber-600" />
                  <span className="font-semibold text-amber-700">Cross-Platform</span>
                </div>
                <p className="text-sm text-slate-600">Access your magic on any device, anywhere</p>
              </div>
            </div>

            {/* Enhanced CTA sticky note */}
            <div className="bg-gradient-to-br from-amber-200 to-yellow-200 p-6 rounded-2xl shadow-xl border-l-8 border-amber-500 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowEmailSignup(true)}
                  className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-500 hover:from-amber-700 hover:via-yellow-600 hover:to-amber-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-amber-500/40 group relative overflow-hidden flex items-center justify-center"
                >
                  <Sparkles className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Get Early Access
                </button>
                
                <Link
                  to="/showcase"
                  className="border-2 border-amber-500/60 text-amber-700 hover:bg-amber-500/20 hover:border-amber-400 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-amber-400/30 group flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  See Demo
                </Link>
              </div>
            </div>

            {/* Social proof sticky note */}
            <div className="bg-yellow-100 p-4 rounded-xl shadow-md border-l-4 border-amber-400 transform -rotate-1">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full border-2 border-yellow-100" />
                    ))}
                  </div>
                  <span className="text-amber-700 font-medium">12,000+ magical users</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                  ))}
                  <span className="ml-2 text-amber-700 font-medium">4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Phone Mockups */}
          <div className="relative">
            <div className="relative mx-auto w-96 h-96">
              
              {/* Far Left Phone */}
              <InteractivePhone 
                screens={phoneScreens.notes}
                className="absolute -left-8 top-12 z-5 transform rotate-[20deg] hover:rotate-[15deg] transition-transform duration-500"
                size="small"
              />

              {/* Left Phone */}
              <InteractivePhone 
                screens={phoneScreens.tasks}
                className="absolute left-0 top-8 z-10 transform rotate-12 hover:rotate-6 transition-transform duration-500"
                size="medium"
              />

              {/* Main Center iPhone with Nova */}
              <InteractivePhone 
                screens={phoneScreens.nova}
                className="absolute inset-0 flex items-center justify-center z-20 transform rotate-2 hover:rotate-0 transition-transform duration-500"
                size="large"
              />

              {/* Right Phone */}
              <InteractivePhone 
                screens={phoneScreens.automation}
                className="absolute right-0 top-8 z-10 transform -rotate-12 hover:-rotate-6 transition-transform duration-500"
                size="medium"
              />

              {/* Far Right Phone */}
              <InteractivePhone 
                screens={phoneScreens.inspiration}
                className="absolute -right-8 top-12 z-5 transform -rotate-[20deg] hover:-rotate-[15deg] transition-transform duration-500"
                size="small"
              />

              {/* Call to action arrow */}
              <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ArrowDown className="w-8 h-8 text-amber-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <EmailSignup isOpen={showEmailSignup} onClose={() => setShowEmailSignup(false)} />
    </>
  );
};
