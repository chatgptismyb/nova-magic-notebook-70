import { useState, useEffect, useRef } from 'react';
import { Send, Mic, Wand2, Sparkles, Plus, Search, Settings, BookOpen, Zap, Star, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { novaAgent, NovaMessage } from '@/lib/nova-agent';
import { Button } from '@/components/ui/button';
import { MainLayout } from '@/components/layout/MainLayout';
import { AIRecommendations } from '@/components/ui/ai-recommendations';
import { getWittyMagicalPhrase } from '@/lib/novaPersona';
import { NovaSpellCreator } from '@/components/ui/nova-spell-creator';

const MagicNotebook = () => {
  const [messages, setMessages] = useState<NovaMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [currentUserId] = useState('demo-user-123'); // In production, get from auth
  const [isTyping, setIsTyping] = useState(false);
  const [currentTypingMessage, setCurrentTypingMessage] = useState('');
  const [fullTypingMessage, setFullTypingMessage] = useState('');
  const [typingSpeed, setTypingSpeed] = useState(30); // ms per character
  const [showSpellCreator, setShowSpellCreator] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize with welcome message
    const welcomeMessage: NovaMessage = {
      id: 'welcome',
      type: 'nova',
      content: `${getWittyMagicalPhrase()} Welcome to Magic Notebook! I'm Nova, your AI companion. I can help you create notes, organize thoughts, automate tasks, and much more. What would you like to work on today?`,
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
    
    // Start typing animation for welcome message
    setFullTypingMessage(welcomeMessage.content);
    setCurrentTypingMessage('');
    setIsTyping(true);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, currentTypingMessage]);

  useEffect(() => {
    if (isTyping && fullTypingMessage) {
      if (currentTypingMessage.length < fullTypingMessage.length) {
        const timeout = setTimeout(() => {
          setCurrentTypingMessage(fullTypingMessage.substring(0, currentTypingMessage.length + 1));
        }, typingSpeed);
        
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        // If we're typing the welcome message, update it in the messages array
        if (messages.length === 1 && messages[0].id === 'welcome') {
          setMessages([{...messages[0], content: fullTypingMessage}]);
        }
      }
    }
  }, [isTyping, currentTypingMessage, fullTypingMessage, typingSpeed, messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userInput = inputValue.trim();
    setInputValue('');
    setIsLoading(true);

    // Add user message
    const userMessage: NovaMessage = {
      id: crypto.randomUUID(),
      type: 'user',
      content: userInput,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);

    try {
      // Check for spell creation command
      if (userInput.toLowerCase().includes('create spell') || 
          userInput.toLowerCase().includes('new spell') ||
          userInput.toLowerCase().includes('make a spell')) {
        setShowSpellCreator(true);
        setIsLoading(false);
        
        // Add Nova's response about spell creation
        const spellResponse: NovaMessage = {
          id: crypto.randomUUID(),
          type: 'nova',
          content: `${getWittyMagicalPhrase()} Let's create a new spell! I've opened the spell creator for you. Please fill in the details to create your custom automation.`,
          timestamp: new Date()
        };
        
        // Set up typing animation
        setFullTypingMessage(spellResponse.content);
        setCurrentTypingMessage('');
        setIsTyping(true);
        
        setMessages(prev => [...prev, spellResponse]);
        return;
      }
      
      // Process with Nova agent
      const response = await novaAgent.processMessage(userInput, currentUserId);
      
      // Set up typing animation for Nova's response
      setFullTypingMessage(response.content);
      setCurrentTypingMessage('');
      setIsTyping(true);
      
      // Add Nova's response to messages
      setMessages(prev => [...prev, response]);
    } catch (error) {
      console.error('Error processing message:', error);
      const errorMessage: NovaMessage = {
        id: crypto.randomUUID(),
        type: 'nova',
        content: 'Sorry, I encountered an error processing your request. Please try again.',
        timestamp: new Date()
      };
      
      // Set up typing animation for error message
      setFullTypingMessage(errorMessage.content);
      setCurrentTypingMessage('');
      setIsTyping(true);
      
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

  const handleSpellSave = (spell: any) => {
    setShowSpellCreator(false);
    
    // Add confirmation message
    const confirmationMessage: NovaMessage = {
      id: crypto.randomUUID(),
      type: 'nova',
      content: `${getWittyMagicalPhrase()} Your spell "${spell.name}" has been created successfully! You can now cast it anytime by saying "cast ${spell.name}".`,
      timestamp: new Date()
    };
    
    // Set up typing animation
    setFullTypingMessage(confirmationMessage.content);
    setCurrentTypingMessage('');
    setIsTyping(true);
    
    setMessages(prev => [...prev, confirmationMessage]);
  };

  const quickActions = [
    { icon: BookOpen, label: 'Create Note', prompt: 'Create a new note about my project ideas' },
    { icon: Zap, label: 'Cast Spell', prompt: 'Help me automate my daily tasks' },
    { icon: Star, label: 'Quick Task', prompt: 'Add a task to remind me to call mom tomorrow' },
    { icon: Search, label: 'Search', prompt: 'Search for information about productivity techniques' }
  ];

  return (
    <MainLayout showChatbot={false}>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100 relative overflow-hidden">
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
              <div className="text-purple-400 text-xl">✨</div>
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Quick Actions Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-purple-200 p-6 shadow-xl">
                <h3 className="text-lg font-bold text-purple-800 mb-4 flex items-center gap-2">
                  <Wand2 className="w-5 h-5" />
                  Quick Spells
                </h3>
                
                <div className="space-y-3">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => setInputValue(action.prompt)}
                      className="w-full flex items-center gap-3 p-3 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-200 transition-all duration-300 hover:scale-105 text-left"
                    >
                      <action.icon className="w-5 h-5 text-purple-600" />
                      <span className="text-purple-800 font-medium text-sm">{action.label}</span>
                    </button>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2 text-sm">💡 Pro Tip</h4>
                  <p className="text-xs text-purple-700 leading-relaxed">
                    Try saying "Create a spell to..." and I'll help you automate any task!
                  </p>
                </div>
                
                {/* AI Recommendations */}
                <div className="mt-6">
                  <AIRecommendations 
                    limit={2} 
                    theme="purple" 
                    layout="list"
                  />
                </div>
              </div>
            </div>

            {/* Main Chat Area */}
            <div className="lg:col-span-3">
              {showSpellCreator ? (
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-purple-200 shadow-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-purple-800">Create New Spell</h2>
                    <Button
                      variant="outline"
                      onClick={() => setShowSpellCreator(false)}
                      className="border-purple-300 text-purple-600"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Chat
                    </Button>
                  </div>
                  
                  <NovaSpellCreator 
                    onSave={handleSpellSave}
                    onCancel={() => setShowSpellCreator(false)}
                    theme="purple"
                  />
                </div>
              ) : (
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-purple-200 shadow-xl overflow-hidden">
                  {/* Chat Messages */}
                  <div className="h-[600px] overflow-y-auto p-6 space-y-4">
                    {messages.map((message, index) => (
                      <div
                        key={message.id}
                        className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : ''}`}
                      >
                        {message.type === 'nova' && (
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                            <img 
                              src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
                              alt="Nova" 
                              className="w-8 h-8 rounded-full"
                            />
                          </div>
                        )}
                        
                        <div className={`max-w-md rounded-2xl p-4 shadow-lg animate-fade-in ${
                          message.type === 'user' 
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' 
                            : message.type === 'nova'
                            ? 'bg-gradient-to-r from-purple-100 to-indigo-100 border-2 border-purple-200 text-purple-800'
                            : 'bg-red-100 border-2 border-red-200 text-red-800'
                        }`}>
                          <p className="leading-relaxed whitespace-pre-wrap">
                            {index === messages.length - 1 && message.type === 'nova' && isTyping
                              ? currentTypingMessage
                              : message.content}
                            {index === messages.length - 1 && message.type === 'nova' && isTyping && (
                              <span className="inline-block w-2 h-4 bg-current animate-pulse ml-1">|</span>
                            )}
                          </p>
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
                    
                    {isLoading && !isTyping && (
                      <div className="flex gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                          <img 
                            src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
                            alt="Nova" 
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 border-2 border-purple-200 rounded-2xl p-4 shadow-lg">
                          <div className="flex items-center gap-2">
                            <div className="flex gap-1">
                              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                            <span className="text-purple-600 text-sm">Nova is thinking...</span>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input Area */}
                  <div className="border-t-2 border-purple-200 p-6 bg-gradient-to-r from-purple-50 to-indigo-50">
                    <div className="flex gap-3">
                      <button
                        onClick={startVoiceInput}
                        disabled={isListening || isLoading}
                        className={`p-3 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                          isListening 
                            ? 'bg-red-100 border-red-300 text-red-600 animate-pulse' 
                            : 'bg-purple-100 border-purple-300 text-purple-600 hover:bg-purple-200'
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
                          className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-xl text-purple-800 placeholder-purple-400 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all resize-none"
                          rows={2}
                          disabled={isLoading}
                        />
                      </div>
                      
                      <button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim() || isLoading}
                        className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-lg disabled:cursor-not-allowed disabled:scale-100 flex items-center gap-2"
                      >
                        <Send className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="mt-3 text-center">
                      <p className="text-xs text-purple-600">
                        💡 Try: "Create a note about my project ideas" or "Create a spell to automate my morning routine"
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MagicNotebook;