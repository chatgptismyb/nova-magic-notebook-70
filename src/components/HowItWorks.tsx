
import { Mic, Brain, Sparkles, Zap } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      icon: Mic,
      title: "Speak or Write",
      description: "Tell Nova your thoughts, ideas, or tasks in natural language",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: Brain,
      title: "AI Understanding",
      description: "Nova analyzes and understands your intent using advanced AI",
      color: "from-purple-400 to-indigo-400"
    },
    {
      icon: Sparkles,
      title: "Magic Transformation",
      description: "Your notes are organized and transformed into actionable items",
      color: "from-amber-400 to-yellow-400"
    },
    {
      icon: Zap,
      title: "Automatic Actions",
      description: "Tasks are created, reminders set, and workflows triggered",
      color: "from-green-400 to-emerald-400"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
            How Magic Happens
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            From thought to action in four simple steps. Watch your productivity transform with Nova's intelligent assistance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} p-1 mb-6 group-hover:animate-pulse`}>
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-slate-700" />
                  </div>
                </div>
                
                <div className="text-2xl font-bold text-amber-600 mb-2">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connection arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-amber-800 mb-4">
              Ready to experience the magic?
            </h3>
            <p className="text-amber-700 mb-6">
              Join thousands of users who have transformed their productivity with Magic Notebook
            </p>
            <button className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
