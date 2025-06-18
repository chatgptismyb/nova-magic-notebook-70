import { useState, useEffect } from 'react';
import { X, Mail, Sparkles, ArrowLeft, Wand2, Send } from 'lucide-react';
import { EmailSignup } from '@/components/EmailSignup';
import { novaAgent } from '@/lib/nova-agent';
import { getWittyMagicalPhrase } from '@/lib/novaPersona';

export const NovaCompanion = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showEmailSignup, setShowEmailSignup] = useState(false);
  const [message, setMessage] = useState("Ready to automate your life?");
  const [isBlinking, setIsBlinking] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<{type: 'user' | 'nova', content: string}[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentUserId] = useState('demo-user-123'); // In production, get from auth
  
  const onboardingMessages = [
    "Ready to automate your life? ✨",
    "Let me organize your chaos! 🧠", 
    "Want magical productivity? 🌟",
    "I can turn notes into actions! 🪄",
    "Our app is launching soon! 🚀"
  ];

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessage(onboardingMessages[Math.floor(Math.random() * onboardingMessages.length)]);
    }, 3000);

    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 300);
    }, 4000);

    const glowInterval = setInterval(() => {
      setIsGlowing(true);
      setTimeout(() => setIsGlowing(false), 1500);
    }, 5000);

    return () => {
      clearInterval(messageInterval);
      clearInterval(blinkInterval);
      clearInterval(glowInterval);
    };
  }, []);

  const handleNovaClick = () => {
    setShowOnboarding(true);
    // Initialize chat with a welcome message
    if (chatMessages.length === 0) {
      setChatMessages([
        {
          type: 'nova',
          content: `${getWittyMagicalPhrase()} I'm Nova, your magical AI assistant. How can I help you today?`
        }
      ]);
    }
  };

  const handleSendMessage = async () => {
    if (!chatInput.trim() || isProcessing) return;
    
    const userMessage = chatInput.trim();
    setChatInput('');
    setIsProcessing(true);
    
    // Add user message to chat
    setChatMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    
    try {
      // Process with Nova agent
      const response = await novaAgent.processMessage(userMessage, currentUserId);
      
      // Add Nova's response to chat
      setChatMessages(prev => [...prev, { type: 'nova', content: response.content }]);
    } catch (error) {
      console.error('Error processing message:', error);
      setChatMessages(prev => [...prev, { 
        type: 'nova', 
        content: 'Sorry, I encountered an error processing your request. Please try again.' 
      }]);
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Onboarding Bubble */}
      {showOnboarding && (
        <div className="mb-6 max-w-sm animate-scale-in">
          <div className="bg-gradient-to-br from-yellow-200 via-amber-100 to-yellow-200 p-6 rounded-3xl border-4 border-amber-400 shadow-2xl relative transform -rotate-1">
            
            {/* Close button */}
            <button
              onClick={() => setShowOnboarding(false)}
              className="absolute top-2 right-2 w-6 h-6 bg-amber-400 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-3 h-3 text-white" />
            </button>
            
            <div className="space-y-4">
              {/* Nova Chat Interface */}
              <div className="bg-white rounded-2xl border-2 border-amber-300 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
                      alt="Nova" 
                      className="w-6 h-6 rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Nova</h4>
                    <p className="text-white/80 text-xs">Magical Assistant</p>
                  </div>
                </div>
                
                <div className="p-3 max-h-40 overflow-y-auto">
                  <div className="space-y-3">
                    {chatMessages.map((msg, index) => (
                      <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {msg.type === 'nova' && (
                          <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center mr-1 flex-shrink-0">
                            <img 
                              src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
                              alt="Nova" 
                              className="w-4 h-4 rounded-full"
                            />
                          </div>
                        )}
                        
                        <div className={`max-w-[80%] rounded-xl p-2 text-xs ${
                          msg.type === 'user' 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-purple-100 border border-purple-200 text-purple-800'
                        }`}>
                          <p>{msg.content}</p>
                        </div>
                        
                        {msg.type === 'user' && (
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center ml-1 flex-shrink-0">
                            <span className="text-white text-xs">U</span>
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {isProcessing && (
                      <div className="flex justify-start">
                        <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center mr-1 flex-shrink-0 animate-pulse">
                          <img 
                            src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
                            alt="Nova" 
                            className="w-4 h-4 rounded-full"
                          />
                        </div>
                        <div className="bg-purple-100 border border-purple-200 rounded-xl p-2">
                          <div className="flex space-x-1">
                            <div className="w-1 h-1 rounded-full bg-purple-400 animate-bounce"></div>
                            <div className="w-1 h-1 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-1 h-1 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="p-2 border-t border-amber-200 bg-amber-50">
                  <div className="flex gap-1">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="Ask Nova..."
                      className="flex-1 px-3 py-1 text-sm bg-white border border-amber-200 rounded-lg focus:outline-none focus:border-purple-400"
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <button 
                      onClick={handleSendMessage}
                      disabled={!chatInput.trim() || isProcessing}
                      className="p-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-2xl border-2 border-yellow-300">
                <p className="text-xs text-amber-600 font-medium">
                  🚀 Experience the full power of Nova in the Magic Notebook app!
                </p>
              </div>
              
              <button
                onClick={() => {
                  setShowEmailSignup(true);
                  setShowOnboarding(false);
                }}
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Get Launch Updates
              </button>
            </div>
            
            {/* Speech bubble tail */}
            <div className="absolute -bottom-3 right-8 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-yellow-200" />
          </div>
        </div>
      )}
      
      {/* Nova Avatar - Updated with new image */}
      <div className="relative animate-float-slow">
        <button
          onClick={handleNovaClick}
          className="group relative w-20 h-20 bg-gradient-to-br from-purple-400 via-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-110 overflow-hidden border-4 border-purple-300 hover:border-purple-400 transform rotate-2 hover:rotate-0 cursor-pointer"
        >
          
          {/* Nova's updated picture */}
          <div className={`relative z-10 w-16 h-16 rounded-xl overflow-hidden border-3 border-purple-300 bg-gradient-to-br from-purple-100 to-indigo-100 shadow-inner transition-all duration-300 ${
            isGlowing ? 'shadow-lg shadow-purple-400/60' : ''
          }`}>
            <img 
              src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
              alt="Nova" 
              className={`w-full h-full object-cover transition-all duration-300 ${
                isBlinking ? 'scale-y-90' : 'scale-y-100'
              } group-hover:scale-110 group-hover:brightness-110`}
            />
            
            {/* Magical overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br from-purple-300/30 via-transparent to-indigo-300/30 pointer-events-none transition-opacity duration-1000 ${
              isGlowing ? 'opacity-80' : 'opacity-40'
            }`} />
          </div>
          
          {/* Floating sparkles on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-ping"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                  animationDelay: `${Math.random() * 1.5}s`,
                  fontSize: `${0.5 + Math.random() * 0.3}rem`,
                  color: ['#c084fc', '#818cf8', '#a78bfa'][Math.floor(Math.random() * 3)]
                }}
              >
                ✨
              </div>
            ))}
          </div>
        </button>
        
        {/* Message bubble */}
        {!showOnboarding && (
          <div className="absolute -top-16 -left-32 bg-purple-200 border-3 border-purple-400 px-4 py-2 rounded-2xl shadow-lg transform -rotate-2 animate-float max-w-xs">
            <p className="text-xs text-purple-800 font-medium">{message}</p>
            <div className="absolute bottom-0 right-4 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-purple-200 transform translate-y-2" />
          </div>
        )}
      </div>

      <EmailSignup isOpen={showEmailSignup} onClose={() => setShowEmailSignup(false)} />
    </div>
  );
};