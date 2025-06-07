
import { useState } from 'react';

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
    <footer className="py-12 px-6 border-t border-slate-800/50 relative bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-300">Magic Notebook</h3>
            <p className="text-gray-400 text-sm">
              Transform your thoughts into spells with Nova by your side.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Grimoire</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-yellow-300 transition-colors">📚 Documentation</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">🎓 Spell Academy</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">🔮 API Reference</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Community</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-yellow-300 transition-colors">💬 Discord</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">🐦 Twitter</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">📱 Mobile App</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-yellow-300 transition-colors">📧 Contact</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">🛠️ Status</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">🔒 Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800/50">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/44eb1985-1aa9-4c97-9fcd-56c35ff27b53.png" 
              alt="Magic Notebook Logo" 
              className="w-8 h-8 hover:animate-pulse cursor-pointer"
            />
            <p className="text-gray-400 text-sm">© 2024 Magic Notebook. All spells reserved.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type a spell..."
              className="bg-slate-800/50 border border-slate-700 rounded-lg px-3 py-1 text-sm text-gray-300 focus:outline-none focus:border-yellow-500 transition-colors"
            />
            {secretRevealed && (
              <div className="text-yellow-400 text-sm animate-pulse">
                🔮 Nova's console unlocked!
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
