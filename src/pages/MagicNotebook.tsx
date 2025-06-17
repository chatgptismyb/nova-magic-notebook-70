import { useState, useEffect, useRef } from 'react';
import { Send, Mic, Wand2, Sparkles, Plus, Search, Settings, BookOpen, Zap, Star, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { novaAgent, NovaMessage } from '@/lib/nova-agent';
import { Button } from '@/components/ui/button';
import { MainLayout } from '@/components/layout/MainLayout';
import { AIRecommendations } from '@/components/ui/ai-recommendations';

const MagicNotebook = () => {
  const [messages, setMessages] = useState<NovaMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [currentUserId] = useState('demo-user-123'); // In production, get from auth
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize with welcome message
    const welcomeMessage: NovaMessage = {
      id: 'welcome',
      type: 'nova',
      content: "✨ Welcome to Magic Notebook! I'm Nova, your AI companion. I can help you create notes, organize thoughts, automate tasks, and much more. What would you like to work on today?",
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userInput = inputValue.trim();
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await novaAgent.processMessage(userInput, currentUserId);
      setMessages(prev => [...prev, response]);
    } catch (error) {
      console.error('Error processing message:', error);
      const errorMessage: NovaMessage = {
        id: crypto.randomUUID(),
        type: 'system',
        content: 'Sorry, I encountered an error processing your request. Please try again.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const startVoiceInput = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      alert('Speech recognition is not supported in your browser.');
    }
  };

  const quickActions = [
    { icon: BookOpen, label: 'Create Note', prompt: 'Create a new note' },
    { icon: Zap, label: 'Cast Spell', prompt: 'Help me automate a task' },
    { icon: Star, label: 'Quick Task', prompt: 'Add a quick task to my list' },
    { icon: Search, label: 'Search', prompt: 'Search for information about' }
  ];

  return (
    <MainLayout showChatbot={false}>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 relative overflow-hidden">
        {/* Magical background */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            >
              <div className="text-orange-400 text-xl">✨</div>
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Quick Actions Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-orange-200 p-6 shadow-xl">
                <h3 className="text-lg font-bold text-orange-800 mb-4 flex items-center gap-2">
                  <Wand2 className="w-5 h-5" />
                  Quick Spells
                </h3>
                
                <div className="space-y-3">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => setInputValue(action.prompt)}
                      className="w-full flex items-center gap-3 p-3 rounded-xl bg-orange-50 hover:bg-orange-100 border border-orange-200 transition-all duration-300 hover:scale-105 text-left"
                    >
                      <action.icon className="w-5 h-5 text-orange-600" />
                      <span className="text-orange-800 font-medium text-sm">{action.label}</span>
                    </button>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2 text-sm">💡 Pro Tip</h4>
                  <p className="text-xs text-orange-700 leading-relaxed">
                    Try saying "Create a spell to..." and Nova will help you automate any task!
                  </p>
                </div>
                
                {/* AI Recommendations */}
                <div className="mt-6">
                  <AIRecommendations 
                    limit={2} 
                    theme="orange" 
                    layout="list"
                  />
                </div>
              </div>
            </div>

            {/* Main Chat Area */}
            <div className="lg:col-span-3">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-orange-200 shadow-xl overflow-hidden">
                {/* Chat Messages */}
                <div className="h-[600px] overflow-y-auto p-6 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : ''}`}
                    >
                      {message.type === 'nova' && (
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                          <img 
                            src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
                            alt="Nova" 
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                      )}
                      
                      <div className={`max-w-md rounded-2xl p-4 shadow-lg animate-fade-in ${
                        message.type === 'user' 
                          ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white' 
                          : message.type === 'nova'
                          ? 'bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-orange-200 text-orange-800'
                          : 'bg-red-100 border-2 border-red-200 text-red-800'
                      }`}>
                        <p className="leading-relaxed whitespace-pre-wrap">{message.content}</p>
                        <div className="mt-2 text-xs opacity-70">
                          {message.timestamp.toLocaleTimeString()}
                        </div>
                      </div>
                      
                      {message.type === 'user' && (
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-sm">You</span>
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                        <img 
                          src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
                          alt="Nova" 
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-orange-200 rounded-2xl p-4 shadow-lg">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                          <span className="text-orange-600 text-sm">Nova is thinking...</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="border-t-2 border-orange-200 p-6 bg-gradient-to-r from-orange-50 to-yellow-50">
                  <div className="flex gap-3">
                    <button
                      onClick={startVoiceInput}
                      disabled={isListening}
                      className={`p-3 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                        isListening 
                          ? 'bg-red-100 border-red-300 text-red-600 animate-pulse' 
                          : 'bg-orange-100 border-orange-300 text-orange-600 hover:bg-orange-200'
                      }`}
                    >
                      <Mic className="w-5 h-5" />
                    </button>
                    
                    <div className="flex-1 relative">
                      <textarea
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Describe your idea, and watch the Magic Notebook bring it to life..."
                        className="w-full px-4 py-3 bg-white border-2 border-orange-200 rounded-xl text-orange-800 placeholder-orange-400 focus:outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all resize-none"
                        rows={2}
                        disabled={isLoading}
                      />
                    </div>
                    
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isLoading}
                      className="p-3 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-lg disabled:cursor-not-allowed disabled:scale-100 flex items-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="mt-3 text-center">
                    <p className="text-xs text-orange-600">
                      💡 Try: "Create a note about my project ideas" or "Schedule a meeting for tomorrow"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MagicNotebook;