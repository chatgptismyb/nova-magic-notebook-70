
import { useState } from 'react';
import { InteractivePhone } from './InteractivePhone';
import { Button } from './ui/button';
import { Sparkles, Download, Star, ArrowRight } from 'lucide-react';

export const ExperienceTheMagic = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const phoneMockups = [
    {
      title: "Welcome Home",
      screens: [
        { 
          title: "Good morning!", 
          icon: "🧙‍♀️", 
          color: "from-purple-900 via-purple-950 to-slate-900", 
          content: "What would you like to do?",
          description: "Your magical companion greets you"
        },
        { 
          title: "New Spell", 
          icon: "✨", 
          color: "from-purple-900 via-purple-950 to-slate-900", 
          content: "+ New Spell",
          description: "Start creating magic"
        },
        { 
          title: "Daily Tasks", 
          icon: "📋", 
          color: "from-purple-900 via-purple-950 to-slate-900", 
          content: "Schedule a ideas appointment",
          description: "Your thoughts organized"
        }
      ]
    },
    {
      title: "Smart Actions",
      screens: [
        { 
          title: "Schedule dentist", 
          icon: "🦷", 
          color: "from-purple-900 via-purple-950 to-slate-900", 
          content: "Schedule a dentist appointment",
          description: "Casting your spell..."
        },
        { 
          title: "Water Plants", 
          icon: "🌱", 
          color: "from-purple-900 via-purple-950 to-slate-900", 
          content: "Remind me to water the plants",
          description: "Creating daily routine"
        },
        { 
          title: "Tweet Success", 
          icon: "🐦", 
          color: "from-purple-900 via-purple-950 to-slate-900", 
          content: "Post gratitude quote completed",
          description: "Magic accomplished!"
        }
      ]
    },
    {
      title: "Spell Chat",
      screens: [
        { 
          title: "Nova Responds", 
          icon: "💬", 
          color: "from-purple-900 via-purple-950 to-slate-900", 
          content: "Sure! Creating reminder...",
          description: "AI understanding your needs"
        },
        { 
          title: "Step by Step", 
          icon: "📝", 
          color: "from-purple-900 via-purple-950 to-slate-900", 
          content: "1. Sure! 2. Create to-do 3. Set daily repeat",
          description: "Breaking down the magic"
        },
        { 
          title: "Task Complete", 
          icon: "✅", 
          color: "from-purple-900 via-purple-950 to-slate-900", 
          content: "Reminder set successfully!",
          description: "Your spell is cast"
        }
      ]
    },
    {
      title: "Delivery Tracking",
      screens: [
        { 
          title: "Order Status", 
          icon: "📦", 
          color: "from-purple-900 via-purple-950 to-slate-900", 
          content: "Track shipment #12345 - Succeeded at 2:30 PM",
          description: "Real-time updates"
        },
        { 
          title: "Landing Page", 
          icon: "🌐", 
          color: "from-purple-900 via-purple-950 to-slate-900", 
          content: "Create landing page - Completed 11:45 AM",
          description: "Projects finished"
        },
        { 
          title: "Dinner Booking", 
          icon: "🍽️", 
          color: "from-purple-900 via-purple-950 to-slate-900", 
          content: "Table for two at 7 PM - Yesterday",
          description: "Life automated"
        }
      ]
    }
  ];

  return (
    <section id="experience-magic" className="py-20 px-6 bg-gradient-to-br from-purple-50 via-yellow-50 to-purple-100 relative overflow-hidden">
      {/* Magical background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-slow opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className="text-purple-400 text-xl">✨</div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-400/20 to-yellow-400/20 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-400/30 mb-6">
            <Sparkles className="w-5 h-5 text-purple-600 animate-pulse" />
            <span className="text-purple-800 font-semibold">Experience the Magic</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-yellow-500 to-purple-600 bg-clip-text text-transparent">
            See Magic in Action
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Watch how <span className="font-bold text-purple-600">three simple words</span> transform your productivity: 
            <span className="font-bold text-yellow-600"> Write it. Wish it. Watch it work.</span>
          </p>
        </div>
        
        {/* Interactive Phone Mockups Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
          {phoneMockups.map((mockup, index) => (
            <div key={index} className="relative group">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-purple-200/50 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-purple-300/70">
                <h3 className="text-lg font-bold text-purple-800 mb-6 text-center">{mockup.title}</h3>
                <div className="flex justify-center">
                  <InteractivePhone 
                    screens={mockup.screens}
                    size="medium"
                    className="transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Nova Character Section */}
        <div className="bg-gradient-to-br from-purple-100 to-yellow-100 rounded-3xl p-8 mb-16 border-4 border-purple-200/50 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="w-32 h-32 mx-auto md:mx-0 mb-6 bg-gradient-to-br from-purple-500 to-yellow-400 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-300/30 to-yellow-300/30 animate-pulse"></div>
                <div className="relative text-6xl">🧙‍♀️</div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-400 to-yellow-400 rounded-full animate-bounce flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-purple-800 mb-4">Meet Nova</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Your AI companion who transforms scattered thoughts into organized magic. 
                Nova understands context, learns your patterns, and makes things happen automatically.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button className="bg-gradient-to-r from-purple-600 to-yellow-600 hover:from-purple-700 hover:to-yellow-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Chat with Nova
                </Button>
                <Button variant="outline" className="border-2 border-purple-400 text-purple-700 hover:bg-purple-50 font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/50">
              <h4 className="text-xl font-bold text-purple-800 mb-4">🎭 What Nova Can Do</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span>Understand natural language</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <span>Create smart workflows</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  <span>Connect your favorite apps</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  <span>Learn from your habits</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced App Store Download Section */}
        <div className="bg-gradient-to-br from-purple-100 to-yellow-100 rounded-3xl p-8 text-center shadow-xl border-4 border-purple-200/50">
          <h3 className="text-3xl font-bold text-purple-800 mb-4">Ready to Experience Magic?</h3>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of users who've transformed their productivity with Magic Notebook. 
            Available on all your favorite devices.
          </p>
          
          {/* Enhanced App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <button className="group bg-black hover:bg-gray-800 text-white font-semibold py-5 px-10 rounded-3xl transition-all duration-300 hover:scale-105 flex items-center gap-4 min-w-[240px] shadow-2xl hover:shadow-purple-500/20">
              <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center">
                <span className="text-black font-bold text-2xl">🍎</span>
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-300">Download on the</div>
                <div className="text-xl font-bold">App Store</div>
              </div>
              <Download className="w-6 h-6 group-hover:animate-bounce" />
            </button>
            
            <button className="group bg-black hover:bg-gray-800 text-white font-semibold py-5 px-10 rounded-3xl transition-all duration-300 hover:scale-105 flex items-center gap-4 min-w-[240px] shadow-2xl hover:shadow-purple-500/20">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">▶</span>
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-300">Get it on</div>
                <div className="text-xl font-bold">Google Play</div>
              </div>
              <Download className="w-6 h-6 group-hover:animate-bounce" />
            </button>
          </div>
          
          {/* Enhanced QR Code Section */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 max-w-md mx-auto border border-purple-200/50 shadow-lg">
            <h4 className="text-xl font-bold text-purple-800 mb-6">Scan to Download</h4>
            <div className="w-40 h-40 bg-gradient-to-br from-purple-200 via-white to-yellow-200 rounded-2xl mx-auto flex items-center justify-center border-4 border-purple-300/50 shadow-lg">
              <div className="text-6xl animate-pulse">📱</div>
            </div>
            <p className="text-sm text-gray-600 mt-6 leading-relaxed">Scan with your phone camera to download instantly and start your magical journey</p>
          </div>
        </div>
      </div>
    </section>
  );
};
