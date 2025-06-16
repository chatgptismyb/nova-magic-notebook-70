
import { useState } from 'react';
import { Maximize2, X, Plus, Search, Settings, Bell, User, Sparkles, Mic, Send, Calendar, FileText, Lightbulb } from 'lucide-react';

export const WebAppDemo = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState('notes');
  const [searchQuery, setSearchQuery] = useState('');

  const demoNotes = [
    {
      id: 1,
      title: "Weekend Trip Planning",
      content: "Plan weekend trip to Paris - Nova suggested flights, hotels, and created itinerary",
      tags: ["travel", "planning"],
      timestamp: "2 hours ago",
      status: "completed"
    },
    {
      id: 2,
      title: "Morning Routine",
      content: "Set up automated morning routine: meditation, coffee, check emails",
      tags: ["routine", "automation"],
      timestamp: "1 day ago",
      status: "active"
    },
    {
      id: 3,
      title: "Project Ideas",
      content: "Brainstorm new app features with Nova's AI assistance",
      tags: ["brainstorming", "ideas"],
      timestamp: "3 days ago",
      status: "in-progress"
    }
  ];

  return (
    <section id="web-app-demo" className="py-20 px-6 bg-gradient-to-br from-orange-50 via-white to-yellow-50 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-400/30 mb-6">
            <Sparkles className="w-5 h-5 text-orange-600 animate-pulse" />
            <span className="text-orange-800 font-semibold">Full Web Experience</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
            Experience Magic Notebook
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            See how Magic Notebook transforms your workflow with Nova's intelligent assistance
          </p>
        </div>

        {/* Web App Demo Container */}
        <div className="relative bg-white rounded-3xl shadow-2xl border-4 border-orange-200 overflow-hidden">
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
            <button
              onClick={() => setIsFullscreen(true)}
              className="p-2 hover:bg-orange-200 rounded-lg transition-colors flex items-center gap-2 text-orange-700"
            >
              <Maximize2 className="w-4 h-4" />
              <span className="text-sm font-medium">View Fullscreen</span>
            </button>
          </div>

          {/* App Interface */}
          <div className="flex h-96">
            {/* Sidebar */}
            <div className="w-64 bg-gradient-to-b from-orange-50 to-yellow-50 border-r-2 border-orange-200 p-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="font-bold text-orange-800">Magic Notebook</span>
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
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-orange-200 text-orange-800'
                        : 'text-orange-600 hover:bg-orange-100'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-orange-800">
                  {activeTab === 'notes' && 'Smart Notes'}
                  {activeTab === 'nova' && 'Chat with Nova'}
                  {activeTab === 'calendar' && 'Calendar'}
                  {activeTab === 'ideas' && 'Idea Lab'}
                </h3>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-orange-400" />
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-orange-50 border border-orange-200 rounded-lg text-sm focus:outline-none focus:border-orange-400"
                    />
                  </div>
                  <button className="p-2 hover:bg-orange-100 rounded-lg transition-colors">
                    <Bell className="w-4 h-4 text-orange-600" />
                  </button>
                  <button className="p-2 hover:bg-orange-100 rounded-lg transition-colors">
                    <Settings className="w-4 h-4 text-orange-600" />
                  </button>
                </div>
              </div>

              {/* Content Area */}
              {activeTab === 'notes' && (
                <div className="space-y-4">
                  <button className="w-full p-4 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-xl text-white font-medium hover:scale-105 transition-transform flex items-center justify-center gap-2">
                    <Plus className="w-4 h-4" />
                    Create New Magical Note
                  </button>
                  
                  <div className="grid gap-4">
                    {demoNotes.map((note) => (
                      <div key={note.id} className="bg-white border-2 border-orange-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-orange-800">{note.title}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            note.status === 'completed' ? 'bg-green-100 text-green-700' :
                            note.status === 'active' ? 'bg-blue-100 text-blue-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {note.status}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{note.content}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2">
                            {note.tags.map((tag) => (
                              <span key={tag} className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">
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
                <div className="bg-white border-2 border-orange-200 rounded-xl p-4 h-64 flex flex-col">
                  <div className="flex-1 space-y-3">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">🧙‍♀️</span>
                      </div>
                      <div className="bg-orange-100 rounded-xl p-3 max-w-xs">
                        <p className="text-sm text-orange-800">Hi! I'm Nova. How can I help you be more productive today?</p>
                      </div>
                    </div>
                    <div className="flex gap-3 justify-end">
                      <div className="bg-blue-100 rounded-xl p-3 max-w-xs">
                        <p className="text-sm text-blue-800">Help me plan my week</p>
                      </div>
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">🧙‍♀️</span>
                      </div>
                      <div className="bg-orange-100 rounded-xl p-3 max-w-xs">
                        <p className="text-sm text-orange-800">Perfect! I'll help you create a magical weekly plan. Let me analyze your calendar and suggest optimizations...</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-3 border-t border-orange-200">
                    <button className="p-2 hover:bg-orange-100 rounded-lg transition-colors">
                      <Mic className="w-4 h-4 text-orange-600" />
                    </button>
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="flex-1 px-3 py-2 bg-orange-50 border border-orange-200 rounded-lg text-sm focus:outline-none focus:border-orange-400"
                    />
                    <button className="px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors">
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {(activeTab === 'calendar' || activeTab === 'ideas') && (
                <div className="flex items-center justify-center h-64 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl border-2 border-orange-200">
                  <div className="text-center">
                    <div className="text-6xl mb-4">✨</div>
                    <h4 className="text-xl font-bold text-orange-800 mb-2">Coming Soon!</h4>
                    <p className="text-orange-600">This magical feature is being crafted by our team</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Try it Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsFullscreen(true)}
            className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-3 mx-auto"
          >
            <Sparkles className="w-5 h-5" />
            Try the Full Experience
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black">
          <div className="relative w-full h-full bg-white">
            {/* Fullscreen Header */}
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => setIsFullscreen(false)}
                className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Full App Interface */}
            <div className="flex h-full">
              {/* Sidebar */}
              <div className="w-80 bg-gradient-to-b from-orange-50 to-yellow-50 border-r-2 border-orange-200 p-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                  <span className="font-bold text-orange-800 text-xl">Magic Notebook</span>
                </div>

                <nav className="space-y-3">
                  {[
                    { id: 'notes', label: 'Smart Notes', icon: FileText },
                    { id: 'nova', label: 'Chat with Nova', icon: Sparkles },
                    { id: 'calendar', label: 'Calendar', icon: Calendar },
                    { id: 'ideas', label: 'Idea Lab', icon: Lightbulb }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-colors ${
                        activeTab === item.id
                          ? 'bg-orange-200 text-orange-800'
                          : 'text-orange-600 hover:bg-orange-100'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-8">
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-6">🧙‍♀️</div>
                    <h2 className="text-4xl font-bold text-orange-800 mb-4">Welcome to Magic Notebook</h2>
                    <p className="text-xl text-orange-600 mb-8 max-w-2xl">
                      Experience the full power of Nova's AI assistance in this immersive demo. 
                      Your productivity journey starts here.
                    </p>
                    <button
                      onClick={() => setIsFullscreen(false)}
                      className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      Get Started Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
