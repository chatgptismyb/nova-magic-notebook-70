import { useState } from 'react';
import { BookOpen, Users, Mail, MessageCircle, Shield, HelpCircle } from 'lucide-react';

export const Footer = () => {
  const [secretRevealed, setSecretRevealed] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value === '/reveal') {
      setSecretRevealed(true);
      setTimeout(() => setSecretRevealed(false), 3000);
    }
  };

  return (
    <footer className="py-16 px-6 relative bg-gradient-to-br from-purple-50 to-indigo-100 border-t-4 border-purple-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="bg-indigo-200 p-6 rounded-2xl border-4 border-purple-400 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <h3 className="text-xl font-bold text-purple-800">Magic Notebook</h3>
            </div>
            <p className="text-purple-700 text-sm leading-relaxed">
              Transform your thoughts into magical productivity with Nova by your side.
            </p>
          </div>
          
          {/* Resources */}
          <div className="bg-purple-100 p-6 rounded-2xl border-4 border-indigo-400 transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <h4 className="font-bold mb-4 text-purple-800 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Resources
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-purple-700 hover:text-purple-900 transition-colors flex items-center gap-2">
                <span>📚</span> Documentation
              </a></li>
              <li><a href="#" className="text-purple-700 hover:text-purple-900 transition-colors flex items-center gap-2">
                <span>🎓</span> Magic Academy
              </a></li>
              <li><a href="#" className="text-purple-700 hover:text-purple-900 transition-colors flex items-center gap-2">
                <span>🔮</span> API Reference
              </a></li>
            </ul>
          </div>
          
          {/* Community */}
          <div className="bg-indigo-100 p-6 rounded-2xl border-4 border-purple-400 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <h4 className="font-bold mb-4 text-purple-800 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Community
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-purple-700 hover:text-purple-900 transition-colors flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> Discord
              </a></li>
              <li><a href="#" className="text-purple-700 hover:text-purple-900 transition-colors flex items-center gap-2">
                <span>🐦</span> Twitter
              </a></li>
              <li><a href="#" className="text-purple-700 hover:text-purple-900 transition-colors flex items-center gap-2">
                <span>📱</span> Mobile App
              </a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="bg-purple-100 p-6 rounded-2xl border-4 border-indigo-400 transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <h4 className="font-bold mb-4 text-purple-800 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              Support
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-purple-700 hover:text-purple-900 transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" /> Contact Us
              </a></li>
              <li><a href="#" className="text-purple-700 hover:text-purple-900 transition-colors flex items-center gap-2">
                <span>🛠️</span> Status
              </a></li>
              <li><a href="#" className="text-purple-700 hover:text-purple-900 transition-colors flex items-center gap-2">
                <Shield className="w-4 h-4" /> Privacy
              </a></li>
            </ul>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-indigo-200 to-purple-200 p-6 rounded-2xl border-4 border-purple-400">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center hover:animate-pulse cursor-pointer">
                <span className="text-white font-bold">M</span>
              </div>
              <p className="text-purple-800 text-sm font-medium">© 2024 Magic Notebook. All magical rights reserved.</p>
            </div>
            
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Cast a spell..."
                className="bg-indigo-50 border-2 border-purple-300 rounded-xl px-4 py-2 text-sm text-purple-800 placeholder-purple-600 focus:outline-none focus:border-purple-500 transition-colors"
              />
              {secretRevealed && (
                <div className="text-purple-700 text-sm animate-pulse bg-indigo-100 px-3 py-1 rounded-full border-2 border-purple-300">
                  🔮 Magic console unlocked!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};