
import { useState } from 'react';
import { ChevronDown, Star, Shield, Smartphone, BookOpen, Heart } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ReactNode;
}

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "What platforms support Magic Notebook?",
      answer: "Magic Notebook works beautifully on iOS, Android, Windows, Mac, and through your web browser. Nova syncs seamlessly across all your devices, so your spells are always ready when inspiration strikes.",
      icon: <Smartphone className="w-5 h-5 text-purple-400" />
    },
    {
      question: "Can Nova help with school, business, or stories?",
      answer: "Absolutely! Nova adapts to your world - whether you're casting study spells, business automation, creative writing, or personal journaling. She learns your style and helps manifest your unique vision into reality.",
      icon: <BookOpen className="w-5 h-5 text-yellow-400" />
    },
    {
      question: "Is my data private and secure?",
      answer: "Your magical creations are protected with enterprise-grade encryption. We never sell your data, and you maintain complete control over your spells. Nova respects your privacy while helping you create magic.",
      icon: <Shield className="w-5 h-5 text-green-400" />
    },
    {
      question: "Can I turn my notes into shareable formats?",
      answer: "Yes! Nova can transform your spells into presentations, PDFs, web pages, or even interactive demos. Share your magic with the world in whatever format sparks the most wonder.",
      icon: <Star className="w-5 h-5 text-amber-400" />
    },
    {
      question: "Is Magic Notebook free to try?",
      answer: "We offer a generous free tier that lets you experience Nova's magic. Cast up to 50 spells per month and discover how transformative your notebook can be. Premium plans unlock unlimited spell-casting and advanced enchantments.",
      icon: <Heart className="w-5 h-5 text-pink-400" />
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 relative bg-transparent">
      {/* Enhanced background effects with magical wind charms */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Magical wind charms instead of scrolls */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-wind-drift opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${12 + Math.random() * 6}s`
            }}
          >
            <div className="text-purple-300 text-xl">🌟</div>
          </div>
        ))}
        {[...Array(8)].map((_, i) => (
          <div
            key={`charm-${i}`}
            className="absolute animate-sparkle-dance opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            <div className="text-amber-400 text-lg">🔮</div>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/30 to-yellow-500/30 px-6 py-3 rounded-full border border-purple-400/50 mb-6 backdrop-blur-sm">
            <div className="text-2xl animate-bounce">❓</div>
            <span className="text-purple-100 font-semibold text-lg">Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
            🔮 Magical Mysteries Unveiled
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Get answers to the most enchanting questions about Magic Notebook and Nova's capabilities
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-slate-800/80 via-slate-900/80 to-slate-800/80 rounded-2xl border-2 border-purple-400/30 backdrop-blur-sm overflow-hidden hover:border-purple-400/60 transition-all duration-300 group shadow-lg hover:shadow-purple-500/20"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-purple-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500/30 to-yellow-500/30 rounded-full flex items-center justify-center border-2 border-purple-400/50 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                    {item.question}
                  </h3>
                </div>
                
                <div className="flex-shrink-0 ml-4">
                  <ChevronDown 
                    className={`w-6 h-6 text-purple-300 transition-all duration-300 ${
                      openIndex === index ? 'rotate-180 text-yellow-400' : ''
                    }`}
                  />
                </div>
              </button>
              
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="pl-16 relative">
                    {/* Magical scroll unfurl effect */}
                    <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-purple-400 via-yellow-400 to-purple-400 rounded-full opacity-60" />
                    
                    <p className="text-gray-200 leading-relaxed text-base font-medium">
                      {item.answer}
                    </p>
                    
                    {/* Sparkle effects */}
                    {openIndex === index && (
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute text-purple-300 animate-ping text-xs"
                            style={{
                              left: `${Math.random() * 80}%`,
                              top: `${Math.random() * 80}%`,
                              animationDelay: `${Math.random() * 2}s`,
                              animationDuration: '2s'
                            }}
                          >
                            ✨
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/30 via-purple-500/30 to-yellow-500/30 p-8 rounded-3xl border-2 border-purple-400/50 backdrop-blur-sm relative overflow-hidden shadow-xl">
            {/* Background sparkles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-purple-300/30 animate-ping"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    fontSize: '0.5rem'
                  }}
                >
                  ✨
                </div>
              ))}
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Still have questions? 🤔
              </h3>
              <p className="text-purple-100 mb-6 text-lg">
                Our magical support team is here to help you discover all the enchanting possibilities
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-yellow-600 hover:from-purple-700 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25 text-lg">
                ✉️ Contact Our Wizards
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
