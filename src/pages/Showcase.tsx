
import { useState } from 'react';
import { Play, ArrowLeft, Smartphone, MessageCircle, Wand2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';

const Showcase = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const demos = [
    {
      title: "Voice to Action Magic",
      description: "Watch Nova transform your voice into instant actions",
      screens: [
        { 
          title: "Voice Input", 
          content: "🎤 'Schedule a meeting with Sarah tomorrow at 2 PM about the project'",
          color: "from-yellow-200 to-amber-200"
        },
        { 
          title: "Nova Processing", 
          content: "🤖 Nova understands and breaks down your request",
          color: "from-amber-200 to-yellow-300"
        },
        { 
          title: "Magic Result", 
          content: "📅 Meeting scheduled, calendar updated, notification sent to Sarah",
          color: "from-yellow-300 to-amber-300"
        }
      ]
    },
    {
      title: "Smart Note Organization",
      description: "See how scattered thoughts become organized magic",
      screens: [
        { 
          title: "Messy Notes", 
          content: "💭 Random ideas, tasks, and thoughts all mixed together",
          color: "from-amber-100 to-yellow-200"
        },
        { 
          title: "AI Analysis", 
          content: "🧠 Nova categorizes and connects related information",
          color: "from-yellow-200 to-amber-200"
        },
        { 
          title: "Perfect Order", 
          content: "✨ Everything organized into actionable categories",
          color: "from-amber-200 to-yellow-300"
        }
      ]
    },
    {
      title: "Automated Task Creation",
      description: "Turn any note into a complete project plan",
      screens: [
        { 
          title: "Simple Note", 
          content: "📝 'Plan vacation to Japan'",
          color: "from-yellow-100 to-amber-100"
        },
        { 
          title: "Nova's Magic", 
          content: "🪄 Breaking down into research, booking, packing steps",
          color: "from-amber-100 to-yellow-200"
        },
        { 
          title: "Full Project", 
          content: "📋 Complete checklist with deadlines and reminders",
          color: "from-yellow-200 to-amber-200"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-amber-100 to-yellow-300 relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={`bg-note-${i}`}
            className="absolute animate-float-slow opacity-15"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              transform: `rotate(${Math.random() * 45 - 22.5}deg)`
            }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-yellow-300/30 to-amber-300/30 rounded-lg border-l-4 border-yellow-400/40" />
          </div>
        ))}
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-12">
          
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center gap-2 mb-8 text-amber-700 hover:text-amber-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Magic</span>
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="bg-amber-200 p-6 rounded-2xl border-4 border-yellow-400 transform rotate-1 inline-block mb-6">
              <img 
                src="/lovable-uploads/cb8ad732-ec0b-4d19-8ec7-5886d9f5bda1.png" 
                alt="Magic Notebook Logo" 
                className="w-20 h-20 mx-auto"
              />
            </div>
            <h1 className="text-5xl font-bold text-amber-800 mb-4">See the Magic in Action</h1>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Watch how Magic Notebook transforms your everyday notes into powerful productivity spells
            </p>
          </div>

          {/* Demo Selection */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {demos.map((demo, index) => (
              <button
                key={index}
                onClick={() => setActiveDemo(index)}
                className={`p-6 rounded-2xl border-4 transition-all duration-300 hover:scale-105 ${
                  activeDemo === index 
                    ? 'bg-gradient-to-br from-amber-200 to-yellow-200 border-amber-500 transform -rotate-1' 
                    : 'bg-gradient-to-br from-yellow-100 to-amber-100 border-amber-300 transform rotate-1'
                } hover:rotate-0`}
              >
                <div className="text-center">
                  <Wand2 className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                  <h3 className="font-bold text-amber-800 mb-2">{demo.title}</h3>
                  <p className="text-sm text-amber-700">{demo.description}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Phone Mockup Demo */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Phone Mockups */}
              <div className="relative">
                <div className="flex justify-center space-x-4">
                  {demos[activeDemo].screens.map((screen, index) => (
                    <div
                      key={index}
                      className={`w-64 h-96 bg-gradient-to-br ${screen.color} rounded-3xl border-4 border-amber-400 shadow-2xl transform transition-all duration-500 ${
                        index === 1 ? 'scale-110 z-20' : index === 0 ? '-rotate-6 z-10' : 'rotate-6 z-10'
                      }`}
                    >
                      <div className="p-6 h-full flex flex-col">
                        {/* Phone Header */}
                        <div className="flex items-center gap-3 mb-6 bg-amber-100 p-3 rounded-xl border-2 border-amber-300">
                          <img 
                            src="/lovable-uploads/cb8ad732-ec0b-4d19-8ec7-5886d9f5bda1.png" 
                            alt="Magic Notebook" 
                            className="w-8 h-8"
                          />
                          <span className="font-bold text-amber-800 text-sm">Magic Notebook</span>
                        </div>
                        
                        {/* Screen Content */}
                        <div className="flex-1 bg-amber-50 rounded-2xl p-4 border-2 border-amber-200">
                          <h4 className="font-bold text-amber-800 mb-3 text-center">{screen.title}</h4>
                          <div className="text-center text-amber-700 text-sm leading-relaxed">
                            {screen.content}
                          </div>
                          
                          {/* Demo Elements */}
                          <div className="mt-4 space-y-2">
                            {index === 0 && (
                              <div className="bg-yellow-200 p-3 rounded-xl border border-amber-300 text-xs text-amber-700">
                                🎤 Recording...
                              </div>
                            )}
                            {index === 1 && (
                              <div className="bg-amber-200 p-3 rounded-xl border border-yellow-300 text-xs text-amber-700">
                                🤖 Processing with AI...
                              </div>
                            )}
                            {index === 2 && (
                              <div className="bg-green-200 p-3 rounded-xl border border-green-300 text-xs text-green-700">
                                ✅ Task Complete!
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Demo Description */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-8 rounded-3xl border-4 border-amber-400 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <h3 className="text-3xl font-bold text-amber-800 mb-4">{demos[activeDemo].title}</h3>
                  <p className="text-lg text-amber-700 mb-6">{demos[activeDemo].description}</p>
                  
                  <div className="space-y-4">
                    {demos[activeDemo].screens.map((screen, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-amber-800">{screen.title}</h4>
                          <p className="text-sm text-amber-600">{screen.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-amber-200 to-yellow-200 p-6 rounded-2xl border-4 border-amber-400 text-center">
                  <h4 className="font-bold text-amber-800 mb-2">Ready to Experience the Magic?</h4>
                  <p className="text-amber-700 mb-4">Join thousands of users transforming their productivity</p>
                  <Link 
                    to="/signup"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Play className="w-5 h-5" />
                    Start Your Journey
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Showcase;
