import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Star, ArrowDown, Users, BookOpen, Sparkles, Calendar, Lightbulb, FileText, Menu, X, Mic, Send, Wand2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EmailSignup } from '@/components/EmailSignup';
import { InteractivePhone } from '@/components/InteractivePhone';

export const Hero = () => {
  const [showEmailSignup, setShowEmailSignup] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeDemo, setActiveDemo] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const demoScreens = [
    {
      title: "Write It",
      subtitle: "Natural voice & text input",
      background: "from-orange-300 to-yellow-200",
      content: {
        type: "input",
        placeholder: "Try saying: 'Plan my weekend trip to Paris'",
        demoText: "Plan my weekend trip to Paris",
        response: "🎯 Got it! Let me help you plan an amazing Paris trip..."
      },
      features: ["Voice-to-text magic", "Natural language", "Instant understanding"]
    },
    {
      title: "Wish It", 
      subtitle: "Nova transforms your ideas",
      background: "from-yellow-300 to-orange-300",
      content: {
        type: "processing",
        items: [
          { icon: "✈️", text: "Flight options researched", status: "complete" },
          { icon: "🏨", text: "Hotels with best reviews found", status: "complete" },
          { icon: "🗺️", text: "3-day itinerary created", status: "processing" },
          { icon: "📅", text: "Calendar events scheduled", status: "pending" }
        ]
      },
      features: ["AI understanding", "Smart organization", "Intelligent planning"]
    },
    {
      title: "Watch It Happen",
      subtitle: "Magic becomes reality",
      background: "from-yellow-200 to-orange-300",
      content: {
        type: "results",
        items: [
          { icon: "✅", text: "Flight booked for Friday 9 AM", action: "View confirmation" },
          { icon: "🏨", text: "Hotel Le Marais reserved", action: "See details" },
          { icon: "📧", text: "Itinerary shared with friends", action: "Open email" },
          { icon: "⏰", text: "Reminders set for packing", action: "View tasks" }
        ]
      },
      features: ["Automatic booking", "Real actions", "Complete automation"]
    }
  ];

  const phoneScreens = {
    notes: [
      { title: "Smart Notes", icon: "📝", color: "from-blue-100 via-cyan-50 to-blue-100", content: "AI-powered writing assistance", description: "Intelligent note-taking with context" },
      { title: "Voice Input", icon: "🎤", color: "from-indigo-100 via-blue-50 to-indigo-100", content: "Speak your thoughts naturally", description: "Natural voice capture and processing" },
      { title: "Auto Organize", icon: "📋", color: "from-sky-100 via-blue-50 to-sky-100", content: "Smart categorization system", description: "Effortless organization magic" }
    ],
    tasks: [
      { title: "Task Magic", icon: "🎯", color: "from-orange-100 via-yellow-50 to-orange-100", content: "Goal-oriented organization", description: "Your tasks, perfectly structured" },
      { title: "Auto Schedule", icon: "📅", color: "from-yellow-100 via-orange-50 to-yellow-100", content: "Smart planning algorithms", description: "Intelligent time management" },
      { title: "Progress Track", icon: "📊", color: "from-orange-100 via-red-50 to-orange-100", content: "Visual progress insights", description: "Track your productivity journey" }
    ],
    nova: [
      { title: "Meet Nova", icon: "🧙‍♀️", color: "from-orange-100 via-yellow-50 to-orange-100", content: "Your AI productivity companion", description: "Ready to transform your workflow?" },
      { title: "AI Assistant", icon: "✨", color: "from-yellow-100 via-orange-50 to-yellow-100", content: "Magical guidance and suggestions", description: "Smart assistance always available" },
      { title: "Personal Magic", icon: "🌟", color: "from-orange-100 via-amber-50 to-orange-100", content: "Tailored magical experience", description: "Magic personalized just for you" }
    ]
  };

  // Auto-cycle demo
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % demoScreens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Typing animation for demo
  useEffect(() => {
    if (activeDemo === 0 && !isTyping) {
      setIsTyping(true);
      const text = demoScreens[0].content.demoText;
      let i = 0;
      setTypingText('');
      
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          setTypingText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
        }
      }, 100);

      return () => clearInterval(typeInterval);
    }
  }, [activeDemo]);

  const renderDemoContent = (screen: typeof demoScreens[0]) => {
    switch (screen.content.type) {
      case 'input':
        return (
          <div className="space-y-3">
            <div className="bg-white/90 p-3 rounded-xl border-2 border-orange-300">
              <div className="flex items-center gap-2 mb-2">
                <Mic className="w-4 h-4 text-orange-600 animate-pulse" />
                <div className="text-orange-700 text-xs font-medium">Voice Input Active</div>
              </div>
              <div className="text-orange-800 text-sm min-h-[40px] flex items-center">
                {typingText}
                {isTyping && <span className="animate-pulse">|</span>}
              </div>
            </div>
            {typingText && (
              <div className="bg-gradient-to-r from-orange-400/80 to-yellow-400/80 p-2 rounded-lg border-2 border-orange-500 animate-fade-in">
                <div className="flex items-center gap-2">
                  <Wand2 className="w-3 h-3 text-orange-700" />
                  <p className="text-orange-800 text-xs font-medium">
                    {screen.content.response}
                  </p>
                </div>
              </div>
            )}
          </div>
        );

      case 'processing':
        return (
          <div className="space-y-2">
            {screen.content.items.map((item, i) => (
              <div 
                key={i}
                className="bg-white/90 p-2 rounded-lg border border-orange-300 flex items-center gap-2 text-xs"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <span className="text-sm">{item.icon}</span>
                <div className="flex-1">
                  <p className="text-orange-800 font-medium">{item.text}</p>
                </div>
                <div className={`w-2 h-2 rounded-full ${
                  item.status === 'complete' ? 'bg-green-400' :
                  item.status === 'processing' ? 'bg-blue-400 animate-pulse' :
                  'bg-gray-300'
                }`} />
              </div>
            ))}
          </div>
        );

      case 'results':
        return (
          <div className="space-y-2">
            {screen.content.items.map((item, i) => (
              <div 
                key={i}
                className="bg-white/90 p-2 rounded-lg border border-orange-300 hover:scale-105 transition-transform cursor-pointer text-xs"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm">{item.icon}</span>
                  <p className="text-orange-800 font-medium flex-1">{item.text}</p>
                </div>
                <button className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded hover:bg-orange-100 transition-colors">
                  {item.action}
                </button>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* Enhanced Interactive Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-orange-100/90 backdrop-blur-lg border-b-2 border-orange-300 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <img 
                    src="/lovable-uploads/be91958b-2280-433a-a64a-5e34429b27ea.png" 
                    alt="Nova" 
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl font-bold text-orange-800 group-hover:text-orange-600 transition-colors">Magic Notebook</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-orange-700 hover:text-orange-900 font-medium transition-all duration-300 hover:scale-105 relative group"
              >
                How it Works
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <Link to="/subscription" className="text-orange-700 hover:text-orange-900 font-medium transition-all duration-300 hover:scale-105 relative group">
                Pricing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <button 
                onClick={() => setSidebarOpen(true)}
                className="flex items-center gap-2 text-orange-700 hover:text-orange-900 font-medium transition-all duration-300 hover:scale-105"
              >
                <BookOpen className="w-4 h-4" />
                Docs
              </button>
              <Link to="/login" className="text-orange-700 hover:text-orange-900 font-medium transition-all duration-300 hover:scale-105">
                Login
              </Link>
              <Link 
                to="/signup"
                className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/40 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 group-hover:animate-spin" />
                  Start Free
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 text-orange-700 hover:text-orange-900 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`fixed inset-0 z-50 ${sidebarOpen ? '' : 'pointer-events-none'}`}>
        <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setSidebarOpen(false)}></div>
        <div className={`absolute right-0 top-0 h-full w-80 bg-gradient-to-b from-orange-50 to-yellow-50 shadow-2xl transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-orange-800">Navigation</h2>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="p-2 text-orange-700 hover:text-orange-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <a href="#how-it-works" onClick={() => { setSidebarOpen(false); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }} className="block p-3 rounded-lg hover:bg-orange-100 transition-colors">
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-5 h-5 text-orange-600" />
                  <span className="font-semibold text-orange-800">How it Works</span>
                </div>
              </a>
              <Link to="/subscription" onClick={() => setSidebarOpen(false)} className="block p-3 rounded-lg hover:bg-orange-100 transition-colors">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-orange-600" />
                  <span className="font-semibold text-orange-800">Pricing</span>
                </div>
              </Link>
              <button onClick={() => { setSidebarOpen(false); }} className="block w-full text-left p-3 rounded-lg hover:bg-orange-100 transition-colors">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-orange-600" />
                  <span className="font-semibold text-orange-800">Documentation</span>
                </div>
              </button>
              <Link to="/login" onClick={() => setSidebarOpen(false)} className="block p-3 rounded-lg hover:bg-orange-100 transition-colors">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-orange-600" />
                  <span className="font-semibold text-orange-800">Login</span>
                </div>
              </Link>
            </div>
            
            <div className="mt-8 p-4 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-xl">
              <h3 className="font-bold text-orange-800 mb-2">Ready to start?</h3>
              <Link 
                to="/signup"
                onClick={() => setSidebarOpen(false)}
                className="block w-full bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-bold py-3 px-4 rounded-lg text-center transition-all duration-300 hover:scale-105"
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
          <div className="space-y-8 animate-fade-in">
            {/* Logo with Nova icon */}
            <div className="bg-orange-200 p-6 rounded-2xl shadow-lg border-l-8 border-orange-400 transform rotate-1 hover:rotate-0 transition-transform duration-300 hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <img 
                    src="/lovable-uploads/be91958b-2280-433a-a64a-5e34429b27ea.png" 
                    alt="Nova" 
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-orange-700">Magic Notebook</h3>
                  <p className="text-orange-600 text-sm">Write it. Wish it. Watch it happen.</p>
                </div>
              </div>
            </div>

            {/* Main headline sticky note */}
            <div className="bg-yellow-100 p-8 rounded-2xl shadow-xl border-l-8 border-orange-500 transform -rotate-1 hover:rotate-0 transition-transform duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3 bg-orange-300/50 px-4 py-2 rounded-full border border-orange-400/40">
                  <Sparkles className="w-5 h-5 text-orange-600 animate-pulse" />
                  <span className="text-orange-700 font-semibold text-sm">Write it. Wish it. Watch it happen.</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-orange-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    Transform Your
                  </span>
                  <br />
                  <span className="text-slate-800">Notes Into</span>
                  <br />
                  <span className="text-orange-600">Magic</span>
                </h1>
              </div>
            </div>

            {/* Story sticky note */}
            <div className="bg-orange-100 p-6 rounded-2xl shadow-lg border-l-6 border-yellow-500 transform rotate-1 hover:rotate-0 transition-transform duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-xl font-bold text-orange-800 mb-3">📖 Your Magical Journey</h2>
              <p className="text-slate-700 leading-relaxed">
                Meet <span className="font-bold text-orange-700">Nova</span>, your AI companion who transforms 
                scattered thoughts into organized magic. Write it. Wish it. 
                <span className="italic text-orange-600"> Watch it happen</span>.
              </p>
            </div>

            {/* Enhanced CTA sticky note */}
            <div className="bg-gradient-to-br from-yellow-200 to-orange-200 p-6 rounded-2xl shadow-xl border-l-8 border-orange-500 transform rotate-1 hover:rotate-0 transition-transform duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowEmailSignup(true)}
                  className="bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-500 hover:from-orange-700 hover:via-yellow-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-orange-500/40 group relative overflow-hidden flex items-center justify-center animate-bounce"
                >
                  <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
                  Get Early Access
                </button>
              </div>
            </div>

            {/* Social proof sticky note */}
            <div className="bg-orange-100 p-4 rounded-xl shadow-md border-l-4 border-yellow-400 transform -rotate-1 hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full border-2 border-orange-100 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                    ))}
                  </div>
                  <span className="text-orange-700 font-medium">12,000+ magical users</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-orange-500 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                  <span className="ml-2 text-orange-700 font-medium">4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Interactive Demo with Phone Mockups */}
          <div className="relative animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="relative mx-auto w-96 h-96">
              
              {/* Background phones with small interactive previews */}
              <InteractivePhone 
                screens={phoneScreens.notes}
                className="absolute -left-8 top-12 z-5 transform rotate-[20deg] hover:rotate-[15deg] transition-transform duration-500 hover:scale-110"
                size="small"
              />

              <InteractivePhone 
                screens={phoneScreens.tasks}
                className="absolute left-0 top-8 z-10 transform rotate-12 hover:rotate-6 transition-transform duration-500 hover:scale-110"
                size="medium"
              />

              {/* Main Center Demo Phone with larger size */}
              <div className="absolute inset-0 flex items-center justify-center z-20 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <InteractivePhone 
                  screens={phoneScreens.nova}
                  className=""
                  size="large"
                  showDownload={true}
                />
              </div>

              <InteractivePhone 
                screens={phoneScreens.nova}
                className="absolute right-0 top-8 z-10 transform -rotate-12 hover:-rotate-6 transition-transform duration-500 hover:scale-110"
                size="medium"
              />

              {/* Call to action arrow */}
              <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ArrowDown className="w-8 h-8 text-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <EmailSignup isOpen={showEmailSignup} onClose={() => setShowEmailSignup(false)} />
    </>
  );
};
