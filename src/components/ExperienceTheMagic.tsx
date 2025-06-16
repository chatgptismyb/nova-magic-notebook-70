
import { useState } from 'react';
import { InteractivePhone } from './InteractivePhone';
import { Button } from './ui/button';
import { Sparkles, Download, Star, ArrowRight } from 'lucide-react';

export const ExperienceTheMagic = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const phoneMockups = [
    {
      title: "Nova's Welcome",
      screens: [
        { 
          title: "Welcome to Magic", 
          icon: "🧙‍♀️", 
          color: "from-purple-100 via-indigo-50 to-purple-100", 
          content: "Write it. Wish it. Watch it work.",
          description: "The magical notebook that transforms notes into actions."
        },
        { 
          title: "Turn notes into actions", 
          icon: "✨", 
          color: "from-yellow-100 via-amber-50 to-yellow-100", 
          content: "Turn notes into actions",
          description: "Your thoughts become reality"
        },
        { 
          title: "Automate with agents", 
          icon: "🤖", 
          color: "from-blue-100 via-cyan-50 to-blue-100", 
          content: "Automate with agents",
          description: "Let AI handle the work"
        }
      ]
    },
    {
      title: "Smart Notebook",
      screens: [
        { 
          title: "New Spell", 
          icon: "➕", 
          color: "from-yellow-100 via-amber-50 to-yellow-100", 
          content: "+ New Spell",
          description: "Start your magical journey"
        },
        { 
          title: "Schedule dentist", 
          icon: "📅", 
          color: "from-green-100 via-emerald-50 to-green-100", 
          content: "Schedule a dentist appointment",
          description: "Casting..."
        },
        { 
          title: "Gratitude Tweet", 
          icon: "🐦", 
          color: "from-blue-100 via-sky-50 to-blue-100", 
          content: "Post a gratitude quote on Twitter",
          description: "Complete"
        }
      ]
    },
    {
      title: "Smart Reminders",
      screens: [
        { 
          title: "Water Plants", 
          icon: "🌱", 
          color: "from-green-100 via-lime-50 to-green-100", 
          content: "Remind me to water the plants every morning",
          description: "Setting up your routine"
        },
        { 
          title: "Cast Spell", 
          icon: "✨", 
          color: "from-purple-100 via-violet-50 to-purple-100", 
          content: "Cast Spell",
          description: "Magic is happening..."
        },
        { 
          title: "Reminder Set", 
          icon: "✅", 
          color: "from-yellow-100 via-amber-50 to-yellow-100", 
          content: "Reminder created successfully",
          description: "Your plants will thank you!"
        }
      ]
    },
    {
      title: "Task Tracking",
      screens: [
        { 
          title: "Delivery Tracking", 
          icon: "📦", 
          color: "from-yellow-100 via-amber-50 to-yellow-100", 
          content: "Track shipment for order #12345",
          description: "Succeeded at 2:30 PM"
        },
        { 
          title: "Landing Page", 
          icon: "🌐", 
          color: "from-blue-100 via-cyan-50 to-blue-100", 
          content: "Create a landing page",
          description: "Completed 11:45 AM"
        },
        { 
          title: "Dinner Reservation", 
          icon: "🍽️", 
          color: "from-purple-100 via-pink-50 to-purple-100", 
          content: "Book a table for two at 7 PM",
          description: "Yesterday • Nova"
        }
      ]
    }
  ];

  return (
    <section id="experience-magic" className="py-20 px-6 bg-gradient-to-br from-amber-50 via-yellow-50 to-purple-50 relative overflow-hidden">
      {/* Background magical elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
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
            <div className="text-yellow-400 text-xl">✨</div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400/20 to-purple-400/20 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-400/30 mb-6">
            <Sparkles className="w-5 h-5 text-yellow-600 animate-pulse" />
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
        
        {/* Interactive Phone Mockups */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
          {phoneMockups.map((mockup, index) => (
            <div key={index} className="relative group">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-yellow-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h3 className="text-lg font-bold text-purple-800 mb-4 text-center">{mockup.title}</h3>
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

        {/* Nova Character with Description */}
        <div className="bg-gradient-to-br from-purple-100 to-yellow-100 rounded-3xl p-8 mb-16 border-4 border-purple-200/50 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="w-32 h-32 mx-auto md:mx-0 mb-6 bg-gradient-to-br from-purple-400 to-yellow-400 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/30 to-purple-300/30 animate-pulse"></div>
                <div className="relative text-6xl">🧙‍♀️</div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full animate-bounce flex items-center justify-center">
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
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                  <span>Understand natural language</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <span>Create smart workflows</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  <span>Connect your favorite apps</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  <span>Learn from your habits</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-gradient-to-br from-yellow-100 to-purple-100 rounded-3xl p-8 text-center shadow-xl border-4 border-yellow-200/50">
          <h3 className="text-3xl font-bold text-purple-800 mb-4">Ready to Experience Magic?</h3>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of users who've transformed their productivity with Magic Notebook. 
            Available on all your favorite devices.
          </p>
          
          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="group bg-black hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 min-w-[200px]">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">🍎</span>
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-300">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
              <Download className="w-5 h-5 group-hover:animate-bounce" />
            </button>
            
            <button className="group bg-black hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 min-w-[200px]">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">▶</span>
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-300">Get it on</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
              <Download className="w-5 h-5 group-hover:animate-bounce" />
            </button>
          </div>
          
          {/* QR Code placeholder */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto border border-purple-200/50">
            <h4 className="text-lg font-bold text-purple-800 mb-4">Scan to Download</h4>
            <div className="w-32 h-32 bg-gradient-to-br from-purple-200 to-yellow-200 rounded-xl mx-auto flex items-center justify-center border-2 border-purple-300/50">
              <div className="text-4xl">📱</div>
            </div>
            <p className="text-sm text-gray-600 mt-4">Scan with your phone camera to download instantly</p>
          </div>
        </div>
      </div>
    </section>
  );
};
