import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Star, ArrowDown, Users, BookOpen, Sparkles, Calendar, Lightbulb, FileText, Menu, X, Mic, Send, Wand2, ChevronLeft, ChevronRight, Maximize2, Plus, Search, Settings, Bell, User, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('notes');
  const [searchQuery, setSearchQuery] = useState('');
  const [showNovaChat, setShowNovaChat] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'nova',
      content: "Hi! I'm Nova ✨ What would you like to create today?",
      timestamp: new Date().toLocaleTimeString()
    }
  ]);

  const demoNotes = [
    {
      id: 1,
      title: "Weekend Trip Planning",
      content: "Plan weekend trip to Paris - Nova suggested flights, hotels, and created itinerary",
      tags: ["travel", "planning"],
      timestamp: "2 hours ago",
      status: "completed",
      novaAction: "Created complete travel itinerary with bookings"
    },
    {
      id: 2,
      title: "Morning Routine",
      content: "Set up automated morning routine: meditation, coffee, check emails",
      tags: ["routine", "automation"],
      timestamp: "1 day ago",
      status: "active",
      novaAction: "Automated daily routine with smart scheduling"
    },
    {
      id: 3,
      title: "Project Ideas",
      content: "Brainstorm new app features with Nova's AI assistance",
      tags: ["brainstorming", "ideas"],
      timestamp: "3 days ago",
      status: "in-progress",
      novaAction: "Generated 12 innovative feature concepts"
    }
  ];

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    
    const newMessage = {
      id: Date.now(),
      type: 'user',
      content: chatInput,
      timestamp: new Date().toLocaleTimeString()
    };
    
    setMessages(prev => [...prev, newMessage]);
    setChatInput('');
    
    // Simulate Nova response
    setTimeout(() => {
      const novaResponses = [
        "Perfect! Let me help you organize that into actionable steps ✨",
        "Great idea! I'll create a smart workflow for that 🧙‍♀️",
        "I understand! Let me break this down and make it magical 🌟",
        "Wonderful! I'll turn that into an automated process for you ⚡"
      ];
      
      const response = {
        id: Date.now() + 1,
        type: 'nova',
        content: novaResponses[Math.floor(Math.random() * novaResponses.length)],
        timestamp: new Date().toLocaleTimeString()
      };
      
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  return (
    <>
      {/* Enhanced Interactive Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-orange-100/90 backdrop-blur-lg border-b-2 border-orange-300 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <span className="text-white font-bold text-lg">M</span>
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
              {/* Updated Try Now Button to link to Magic Notebook */}
              <Link
                to="/magic-notebook"
                className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/40 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 group-hover:animate-spin" />
                  Try Now
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
                to="/magic-notebook"
                onClick={() => setSidebarOpen(false)}
                className="block w-full bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-bold py-3 px-4 rounded-lg text-center transition-all duration-300 hover:scale-105"
              >
                Try Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
          
          {/* Enhanced story-driven content with updated prompts */}
          <div className="space-y-8 animate-fade-in order-2 lg:order-1">
            {/* Logo with Nova icon */}
            <div className="bg-orange-200 p-4 sm:p-6 rounded-2xl shadow-lg border-l-8 border-orange-400 transform rotate-1 hover:rotate-0 transition-transform duration-300 hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg sm:text-xl">M</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-orange-700">Magic Notebook</h3>
                  <p className="text-orange-600 text-sm">Write it. Wish it. Watch it happen.</p>
                </div>
              </div>
            </div>

            {/* Updated Main headline sticky note with new prompt */}
            <div className="bg-yellow-100 p-6 sm:p-8 rounded-2xl shadow-xl border-l-8 border-orange-500 transform -rotate-1 hover:rotate-0 transition-transform duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3 bg-orange-300/50 px-4 py-2 rounded-full border border-orange-400/40">
                  <Sparkles className="w-5 h-5 text-orange-600 animate-pulse" />
                  <span className="text-orange-700 font-semibold text-sm">Turn Your Thoughts into Action</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-orange-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    Where Great Ideas
                  </span>
                  <br />
                  <span className="text-slate-800">Take Shape</span>
                </h1>
                
                {/* Updated prompt */}
                <p className="text-lg text-slate-700 leading-relaxed">
                  Describe your idea, and watch the Magic Notebook bring it to life.
                </p>
              </div>
            </div>

            {/* Story sticky note */}
            <div className="bg-orange-100 p-4 sm:p-6 rounded-2xl shadow-lg border-l-6 border-yellow-500 transform rotate-1 hover:rotate-0 transition-transform duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-lg sm:text-xl font-bold text-orange-800 mb-3">📖 Your Magical Journey</h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Meet <span className="font-bold text-orange-700">Nova</span>, your AI companion who transforms 
                scattered thoughts into organized magic. Just enter a simple prompt. Our AI will help you brainstorm, outline, and structure your next big project.
              </p>
            </div>

            {/* Enhanced CTA sticky note with Try Now button */}
            <div className="bg-gradient-to-br from-yellow-200 to-orange-200 p-4 sm:p-6 rounded-2xl shadow-xl border-l-8 border-orange-500 transform rotate-1 hover:rotate-0 transition-transform duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/magic-notebook"
                  className="bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-500 hover:from-orange-700 hover:via-yellow-600 hover:to-orange-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-orange-500/40 group relative overflow-hidden flex items-center justify-center text-sm sm:text-base"
                >
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-spin" />
                  Try Now
                </Link>
              </div>
            </div>

            {/* Social proof sticky note */}
            <div className="bg-orange-100 p-4 rounded-xl shadow-md border-l-4 border-yellow-400 transform -rotate-1 hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full border-2 border-orange-100 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                    ))}
                  </div>
                  <span className="text-orange-700 font-medium">12,000+ magical users</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                  <span className="ml-2 text-orange-700 font-medium">4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Web App Demo */}
          <div className="relative animate-fade-in order-1 lg:order-2" style={{ animationDelay: '1s' }}>
            <div className="relative bg-white rounded-3xl shadow-2xl border-4 border-orange-200 overflow-hidden max-w-2xl mx-auto">
              {/* Browser Header */}
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 px-6 py-4 border-b-2 border-orange-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="bg-white rounded-lg px-4 py-2 flex items-center gap-2 ml-4">
                    <span className="text-green-600">🔒</span>
                    <span className="text-gray-600 text-sm">magicnotebook.app</span>
                  </div>
                </div>
                <button className="p-2 hover:bg-orange-200 rounded-lg transition-colors flex items-center gap-2 text-orange-700">
                  <Maximize2 className="w-4 h-4" />
                  <span className="text-sm font-medium">View Demo</span>
                </button>
              </div>

              {/* App Interface */}
              <div className="flex h-[400px] relative">
                {/* Sidebar */}
                <div className="w-48 bg-gradient-to-b from-orange-50 to-yellow-50 border-r-2 border-orange-200 p-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">M</span>
                    </div>
                    <span className="font-bold text-orange-800 text-sm">Magic Notebook</span>
                  </div>

                  <nav className="space-y-2">
                    {[
                      { id: 'notes', label: 'Smart Notes', icon: FileText },
                      { id: 'nova', label: 'Chat with Nova', icon: Sparkles },
                      { id: 'calendar', label: 'Calendar', icon: Calendar },
                      { id: 'ideas', label: 'Idea Lab', icon: Lightbulb }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center gap-2 px-2 py-2 rounded-lg transition-colors text-xs ${
                          activeTab === item.id
                            ? 'bg-orange-200 text-orange-800'
                            : 'text-orange-600 hover:bg-orange-100'
                        }`}
                      >
                        <item.icon className="w-3 h-3" />
                        <span className="font-medium">{item.label}</span>
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-4 relative">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-orange-800">
                      {activeTab === 'notes' && 'Smart Notes'}
                      {activeTab === 'nova' && 'Chat with Nova'}
                      {activeTab === 'calendar' && 'Calendar'}
                      {activeTab === 'ideas' && 'Idea Lab'}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-orange-400" />
                        <input
                          type="text"
                          placeholder="Search..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-6 pr-2 py-1 bg-orange-50 border border-orange-200 rounded-lg text-xs focus:outline-none focus:border-orange-400"
                        />
                      </div>
                      <button 
                        onClick={() => setShowNovaChat(!showNovaChat)}
                        className={`p-1 rounded-lg transition-colors ${showNovaChat ? 'bg-orange-200 text-orange-700' : 'hover:bg-orange-100 text-orange-600'}`}
                      >
                        <MessageCircle className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Content Area */}
                  {activeTab === 'notes' && (
                    <div className="space-y-3">
                      <button 
                        onClick={() => setShowNovaChat(true)}
                        className="w-full p-3 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-xl text-white font-medium hover:scale-105 transition-transform flex items-center justify-center gap-2 text-xs"
                      >
                        <Plus className="w-3 h-3" />
                        Create New Magical Note
                      </button>
                      
                      <div className="grid gap-2">
                        {demoNotes.slice(0, 2).map((note) => (
                          <div key={note.id} className="bg-white border-2 border-orange-200 rounded-xl p-3 hover:shadow-lg transition-shadow relative group">
                            <div className="flex items-start justify-between mb-1">
                              <h4 className="font-semibold text-orange-800 text-xs">{note.title}</h4>
                              <span className={`px-1 py-0.5 rounded-full text-xs font-medium ${
                                note.status === 'completed' ? 'bg-green-100 text-green-700' :
                                note.status === 'active' ? 'bg-blue-100 text-blue-700' :
                                'bg-yellow-100 text-yellow-700'
                              }`}>
                                {note.status}
                              </span>
                            </div>
                            <p className="text-gray-600 text-xs mb-2">{note.content.slice(0, 60)}...</p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex gap-1">
                                {note.tags.slice(0, 2).map((tag) => (
                                  <span key={tag} className="px-1 py-0.5 bg-orange-100 text-orange-700 rounded-full text-xs">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <span className="text-xs text-gray-500">{note.timestamp}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'nova' && (
                    <div className="bg-white border-2 border-orange-200 rounded-xl p-3 h-64 flex flex-col">
                      <div className="flex-1 space-y-2 overflow-y-auto">
                        {messages.slice(0, 3).map((message) => (
                          <div key={message.id} className={`flex gap-2 ${message.type === 'user' ? 'justify-end' : ''}`}>
                            {message.type === 'nova' && (
                              <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center animate-pulse">
                                <img 
                                  src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
                                  alt="Nova" 
                                  className="w-4 h-4 rounded-full"
                                />
                              </div>
                            )}
                            <div className={`rounded-xl p-2 max-w-xs animate-fade-in text-xs ${
                              message.type === 'nova' 
                                ? 'bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-200' 
                                : 'bg-blue-100 border-2 border-blue-200'
                            }`}>
                              <p className="text-gray-800">{message.content.slice(0, 40)}...</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-1 pt-2 border-t border-orange-200">
                        <input
                          type="text"
                          placeholder="Ask Nova anything..."
                          value={chatInput}
                          onChange={(e) => setChatInput(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                          className="flex-1 px-2 py-1 bg-orange-50 border border-orange-200 rounded-lg text-xs focus:outline-none focus:border-orange-400"
                        />
                        <button 
                          onClick={handleSendMessage}
                          className="px-2 py-1 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors"
                        >
                          <Send className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  )}

                  {(activeTab === 'calendar' || activeTab === 'ideas') && (
                    <div className="flex items-center justify-center h-48 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl border-2 border-orange-200">
                      <div className="text-center">
                        <div className="text-4xl mb-2">✨</div>
                        <h4 className="text-lg font-bold text-orange-800 mb-1">Coming Soon!</h4>
                        <p className="text-orange-600 text-xs">This magical feature is being crafted</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Call to action arrow */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ArrowDown className="w-6 h-6 text-orange-500" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};