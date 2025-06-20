import React, { useState, useEffect, useRef } from 'react';
import { Send, X, Sparkles, Mic, Bot, User, ChevronDown, ChevronUp, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { novaAgent, NovaMessage } from '@/lib/nova-agent';
import { getWittyMagicalPhrase } from '@/lib/novaPersona';

interface AIChatbotProps {
  initialOpen?: boolean;
  position?: 'bottom-right' | 'bottom-left';
  theme?: 'orange' | 'purple' | 'blue';
}

export const AIChatbot: React.FC<AIChatbotProps> = ({
  initialOpen = false,
  position = 'bottom-right',
  theme = 'orange'
}) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [messages, setMessages] = useState<NovaMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [currentTypingMessage, setCurrentTypingMessage] = useState('');
  const [fullTypingMessage, setFullTypingMessage] = useState('');
  const [typingSpeed, setTypingSpeed] = useState(30); // ms per character
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [currentUserId] = useState('demo-user-123'); // In production, get from auth

  // Theme styles
  const themeStyles = {
    orange: {
      primary: 'from-orange-600 to-yellow-600',
      secondary: 'bg-orange-100 border-orange-300',
      text: 'text-orange-800',
      hover: 'hover:bg-orange-700 hover:to-yellow-700',
      button: 'bg-orange-600 hover:bg-orange-700',
      userBubble: 'bg-orange-600',
      botBubble: 'bg-orange-100 border-orange-300',
      botText: 'text-orange-800'
    },
    purple: {
      primary: 'from-purple-600 to-indigo-600',
      secondary: 'bg-purple-100 border-purple-300',
      text: 'text-purple-800',
      hover: 'hover:bg-purple-700 hover:to-indigo-700',
      button: 'bg-purple-600 hover:bg-purple-700',
      userBubble: 'bg-purple-600',
      botBubble: 'bg-purple-100 border-purple-300',
      botText: 'text-purple-800'
    },
    blue: {
      primary: 'from-blue-600 to-cyan-600',
      secondary: 'bg-blue-100 border-blue-300',
      text: 'text-blue-800',
      hover: 'hover:bg-blue-700 hover:to-cyan-700',
      button: 'bg-blue-600 hover:bg-blue-700',
      userBubble: 'bg-blue-600',
      botBubble: 'bg-blue-100 border-blue-300',
      botText: 'text-blue-800'
    }
  };

  const currentTheme = themeStyles[theme];

  useEffect(() => {
    // Initialize with welcome message
    const welcomeMessage: NovaMessage = {
      id: 'welcome',
      type: 'nova',
      content: `${getWittyMagicalPhrase()} I'm Nova, your magical AI assistant. I can help you create notes, organize tasks, cast automation spells, and much more! What would you like to accomplish today?`,
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
    
    // Start typing animation for welcome message
    setFullTypingMessage(welcomeMessage.content);
    setIsTyping(true);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, currentTypingMessage]);

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
  }, [isTyping, currentTypingMessage, fullTypingMessage, typingSpeed]);

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
      setMessages(prev => [...prev, errorMessage]);
      
      // Set up typing animation for error message
      setFullTypingMessage(errorMessage.content);
      setCurrentTypingMessage('');
      setIsTyping(true);
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

  const positionClass = position === 'bottom-right' ? 'right-6' : 'left-6';

  return (
    <div className={`fixed bottom-6 ${positionClass} z-50`}>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`w-14 h-14 rounded-full bg-gradient-to-r ${currentTheme.primary} text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300`}
        >
          <Wand2 className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 overflow-hidden border border-gray-200 animate-in fade-in zoom-in duration-200">
          {/* Header */}
          <div className={`bg-gradient-to-r ${currentTheme.primary} p-4 text-white flex items-center justify-between`}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <img 
                  src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
                  alt="Nova" 
                  className="w-6 h-6 rounded-full"
                />
              </div>
              <div>
                <h3 className="font-bold">Nova</h3>
                <p className="text-xs text-white/80">Magical Assistant</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                {isMinimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Body */}
          {!isMinimized && (
            <>
              <div className="h-80 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.type === 'nova' && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 flex items-center justify-center mr-2 flex-shrink-0">
                        <img 
                          src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
                          alt="Nova" 
                          className="w-6 h-6 rounded-full"
                        />
                      </div>
                    )}
                    
                    <div className={`max-w-[80%] rounded-2xl p-3 ${
                      message.type === 'user' 
                        ? `${currentTheme.userBubble} text-white` 
                        : `${currentTheme.botBubble} ${currentTheme.botText} border`
                    }`}>
                      <p className="text-sm whitespace-pre-wrap">
                        {index === messages.length - 1 && message.type === 'nova' && isTyping
                          ? currentTypingMessage
                          : message.content}
                        {index === messages.length - 1 && message.type === 'nova' && isTyping && (
                          <span className="inline-block w-2 h-4 bg-current animate-pulse ml-1">|</span>
                        )}
                      </p>
                      <div className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                    
                    {message.type === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center ml-2 flex-shrink-0">
                        <User className="w-4 h-4 text-gray-600" />
                      </div>
                    )}
                  </div>
                ))}
                
                {isLoading && !isTyping && (
                  <div className="flex justify-start">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 flex items-center justify-center mr-2 flex-shrink-0 animate-pulse">
                      <img 
                        src="/lovable-uploads/c7ece047-1e18-4f14-a65c-f13365eedddc.png" 
                        alt="Nova" 
                        className="w-6 h-6 rounded-full"
                      />
                    </div>
                    <div className={`rounded-2xl p-3 ${currentTheme.botBubble} border`}>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex gap-2">
                  <button
                    onClick={startVoiceInput}
                    disabled={isListening || isLoading}
                    className={`p-2 rounded-full ${
                      isListening 
                        ? 'bg-red-100 text-red-600 animate-pulse' 
                        : `${currentTheme.secondary} ${currentTheme.text}`
                    } transition-colors`}
                  >
                    <Mic className="w-5 h-5" />
                  </button>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask Nova anything..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isLoading}
                    className={`p-2 rounded-full ${currentTheme.button} text-white disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                <div className="text-center mt-2">
                  <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                    <Wand2 className="w-3 h-3" />
                    Powered by Nova AI
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};