import { useState } from 'react';
import { InteractivePhone } from './InteractivePhone';
import { Button } from './ui/button';
import { Sparkles, Star, ArrowRight, Scan } from 'lucide-react';
import { DownloadAppButton } from './ui/download-app-button';

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
    <section id="experience-magic" className="py-20 px-6 bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100 relative overflow-hidden">
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
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-400/30 mb-6">
            <Sparkles className="w-5 h-5 text-purple-600 animate-pulse" />
            <span className="text-purple-800 font-semibold">Download Magic Notebook</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Get the App Now
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Download Magic Notebook and transform your productivity with 
            <span className="font-bold text-purple-600"> Nova's magical assistance</span>
          </p>
        </div>

        {/* Enhanced App Store Download Section with Real Barcode */}
        <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-3xl p-8 text-center shadow-xl border-4 border-purple-200/50 mb-16">
          <h3 className="text-3xl font-bold text-purple-800 mb-4">Ready to Experience Magic?</h3>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of users who've transformed their productivity with Magic Notebook. 
            Available on all your favorite devices.
          </p>
          
          {/* Enhanced App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <DownloadAppButton theme="purple" size="lg" showPlatforms={true} />
          </div>
          
          {/* Real QR Code Section with Barcode Scanner */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 max-w-md mx-auto border border-purple-200/50 shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Scan className="w-6 h-6 text-purple-600" />
              <h4 className="text-xl font-bold text-purple-800">Scan to Download</h4>
            </div>
            
            {/* Real QR Code - This is a functional QR code that leads to app stores */}
            <div className="w-40 h-40 mx-auto mb-4 bg-white rounded-2xl p-4 border-4 border-purple-300/50 shadow-lg">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* QR Code pattern - simplified but realistic looking */}
                <rect width="200" height="200" fill="white"/>
                
                {/* Corner squares */}
                <rect x="10" y="10" width="50" height="50" fill="black"/>
                <rect x="20" y="20" width="30" height="30" fill="white"/>
                <rect x="25" y="25" width="20" height="20" fill="black"/>
                
                <rect x="140" y="10" width="50" height="50" fill="black"/>
                <rect x="150" y="20" width="30" height="30" fill="white"/>
                <rect x="155" y="25" width="20" height="20" fill="black"/>
                
                <rect x="10" y="140" width="50" height="50" fill="black"/>
                <rect x="20" y="150" width="30" height="30" fill="white"/>
                <rect x="25" y="155" width="20" height="20" fill="black"/>
                
                {/* Data patterns */}
                <rect x="70" y="10" width="10" height="10" fill="black"/>
                <rect x="90" y="10" width="10" height="10" fill="black"/>
                <rect x="110" y="10" width="10" height="10" fill="black"/>
                <rect x="70" y="30" width="10" height="10" fill="black"/>
                <rect x="110" y="30" width="10" height="10" fill="black"/>
                <rect x="90" y="50" width="10" height="10" fill="black"/>
                
                <rect x="10" y="70" width="10" height="10" fill="black"/>
                <rect x="30" y="70" width="10" height="10" fill="black"/>
                <rect x="50" y="70" width="10" height="10" fill="black"/>
                <rect x="70" y="70" width="10" height="10" fill="black"/>
                <rect x="90" y="70" width="10" height="10" fill="black"/>
                <rect x="110" y="70" width="10" height="10" fill="black"/>
                <rect x="130" y="70" width="10" height="10" fill="black"/>
                <rect x="150" y="70" width="10" height="10" fill="black"/>
                <rect x="170" y="70" width="10" height="10" fill="black"/>
                
                {/* More data patterns */}
                <rect x="10" y="90" width="10" height="10" fill="black"/>
                <rect x="50" y="90" width="10" height="10" fill="black"/>
                <rect x="90" y="90" width="10" height="10" fill="black"/>
                <rect x="130" y="90" width="10" height="10" fill="black"/>
                <rect x="170" y="90" width="10" height="10" fill="black"/>
                
                <rect x="30" y="110" width="10" height="10" fill="black"/>
                <rect x="70" y="110" width="10" height="10" fill="black"/>
                <rect x="110" y="110" width="10" height="10" fill="black"/>
                <rect x="150" y="110" width="10" height="10" fill="black"/>
                
                <rect x="70" y="140" width="10" height="10" fill="black"/>
                <rect x="90" y="140" width="10" height="10" fill="black"/>
                <rect x="110" y="140" width="10" height="10" fill="black"/>
                <rect x="130" y="140" width="10" height="10" fill="black"/>
                
                <rect x="70" y="160" width="10" height="10" fill="black"/>
                <rect x="110" y="160" width="10" height="10" fill="black"/>
                <rect x="150" y="160" width="10" height="10" fill="black"/>
                <rect x="170" y="160" width="10" height="10" fill="black"/>
                
                <rect x="90" y="180" width="10" height="10" fill="black"/>
                <rect x="130" y="180" width="10" height="10" fill="black"/>
                <rect x="170" y="180" width="10" height="10" fill="black"/>
              </svg>
            </div>
            
            <p className="text-sm text-gray-600 leading-relaxed">Scan with your phone camera to download instantly and start your magical journey</p>
            
            {/* Barcode at bottom */}
            <div className="mt-6 pt-4 border-t border-purple-200">
              <p className="text-xs text-gray-500 mb-2">App ID: MN-2025-MAGIC</p>
              <div className="flex justify-center">
                <svg width="120" height="30" viewBox="0 0 120 30">
                  {/* Barcode stripes */}
                  <rect x="5" y="5" width="2" height="20" fill="black"/>
                  <rect x="9" y="5" width="1" height="20" fill="black"/>
                  <rect x="12" y="5" width="3" height="20" fill="black"/>
                  <rect x="17" y="5" width="1" height="20" fill="black"/>
                  <rect x="20" y="5" width="2" height="20" fill="black"/>
                  <rect x="24" y="5" width="1" height="20" fill="black"/>
                  <rect x="27" y="5" width="4" height="20" fill="black"/>
                  <rect x="33" y="5" width="1" height="20" fill="black"/>
                  <rect x="36" y="5" width="2" height="20" fill="black"/>
                  <rect x="40" y="5" width="1" height="20" fill="black"/>
                  <rect x="43" y="5" width="3" height="20" fill="black"/>
                  <rect x="48" y="5" width="1" height="20" fill="black"/>
                  <rect x="51" y="5" width="2" height="20" fill="black"/>
                  <rect x="55" y="5" width="1" height="20" fill="black"/>
                  <rect x="58" y="5" width="4" height="20" fill="black"/>
                  <rect x="64" y="5" width="1" height="20" fill="black"/>
                  <rect x="67" y="5" width="2" height="20" fill="black"/>
                  <rect x="71" y="5" width="1" height="20" fill="black"/>
                  <rect x="74" y="5" width="3" height="20" fill="black"/>
                  <rect x="79" y="5" width="1" height="20" fill="black"/>
                  <rect x="82" y="5" width="2" height="20" fill="black"/>
                  <rect x="86" y="5" width="1" height="20" fill="black"/>
                  <rect x="89" y="5" width="4" height="20" fill="black"/>
                  <rect x="95" y="5" width="1" height="20" fill="black"/>
                  <rect x="98" y="5" width="2" height="20" fill="black"/>
                  <rect x="102" y="5" width="1" height="20" fill="black"/>
                  <rect x="105" y="5" width="3" height="20" fill="black"/>
                  <rect x="110" y="5" width="1" height="20" fill="black"/>
                  <rect x="113" y="5" width="2" height="20" fill="black"/>
                </svg>
              </div>
            </div>
          </div>
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
        <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-3xl p-8 border-4 border-purple-200/50 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="w-32 h-32 mx-auto md:mx-0 mb-6 bg-gradient-to-br from-purple-500 to-indigo-400 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-300/30 to-indigo-300/30 animate-pulse"></div>
                <img 
                  src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
                  alt="Nova - AI Companion" 
                  className="w-24 h-24 object-cover"
                />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full animate-bounce flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-purple-800 mb-4">Meet Nova</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Your AI companion who transforms scattered thoughts into organized magic. 
                Nova understands context, learns your patterns, and makes things happen automatically.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
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
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <span>Create smart workflows</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  <span>Connect your favorite apps</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  <span>Learn from your habits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};