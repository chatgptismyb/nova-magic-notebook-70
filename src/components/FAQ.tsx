
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What makes Magic Notebook different from other note-taking apps?",
      answer: "Magic Notebook goes beyond simple note-taking. With Nova, your AI companion, your thoughts are automatically organized, tasks are created, and workflows are triggered. It's like having a personal assistant that understands your intentions and acts on them."
    },
    {
      question: "How does the AI understand my notes?",
      answer: "Nova uses advanced natural language processing to understand context, intent, and relationships in your notes. Whether you write or speak, Nova can identify tasks, deadlines, priorities, and connections to help organize your thoughts intelligently."
    },
    {
      question: "Is my data secure and private?",
      answer: "Absolutely. We use enterprise-grade encryption for all data transmission and storage. Your notes are processed securely, and we never share your personal information. You maintain full control over your data at all times."
    },
    {
      question: "Can I use Magic Notebook offline?",
      answer: "Yes! Magic Notebook works offline for basic note-taking and viewing. When you reconnect, Nova will sync your notes and apply AI enhancements. Some advanced AI features require an internet connection."
    },
    {
      question: "What platforms does Magic Notebook support?",
      answer: "Magic Notebook is available on iOS, Android, Web, Windows, and macOS. Your notes sync seamlessly across all devices, so you can capture ideas anywhere and access them everywhere."
    },
    {
      question: "How does the voice feature work?",
      answer: "Simply tap the microphone and speak naturally. Nova converts your speech to text with high accuracy and can understand commands like 'remind me tomorrow' or 'add this to my project list' to automatically create tasks and reminders."
    },
    {
      question: "Can I integrate with other apps and services?",
      answer: "Yes! Magic Notebook integrates with popular apps like Google Calendar, Slack, Trello, Notion, and many more. Nova can automatically create calendar events, send messages, or update your project management tools based on your notes."
    },
    {
      question: "Is there a free version available?",
      answer: "We offer a free trial with full access to all features for 14 days. After that, you can continue with our free plan (limited features) or upgrade to unlock Nova's full potential with unlimited AI processing and advanced integrations."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-amber-50 to-yellow-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-700">
            Everything you need to know about Magic Notebook and Nova
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-amber-200 overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-amber-50/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-slate-800 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-6 h-6 text-amber-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-amber-600" />
                  )}
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                openItems.includes(index) 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="p-6 pt-0 border-t border-amber-100">
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-200 to-yellow-200 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-amber-800 mb-4">
              Still have questions?
            </h3>
            <p className="text-amber-700 mb-6">
              Our support team is here to help you get the most out of Magic Notebook
            </p>
            <button className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
