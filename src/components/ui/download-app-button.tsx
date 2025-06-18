import React, { useState } from 'react';
import { Download, ChevronDown, ChevronUp, Apple, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EmailSignup } from '@/components/EmailSignup';

interface DownloadAppButtonProps {
  theme?: 'purple' | 'orange' | 'blue';
  size?: 'sm' | 'md' | 'lg';
  showPlatforms?: boolean;
}

export const DownloadAppButton: React.FC<DownloadAppButtonProps> = ({
  theme = 'purple',
  size = 'md',
  showPlatforms = false
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showEmailSignup, setShowEmailSignup] = useState(false);

  // Theme styles
  const themeStyles = {
    purple: {
      primary: 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white',
      secondary: 'bg-white text-purple-700 hover:bg-purple-50 border border-purple-300',
      accent: 'text-purple-600'
    },
    orange: {
      primary: 'bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white',
      secondary: 'bg-white text-orange-700 hover:bg-orange-50 border border-orange-300',
      accent: 'text-orange-600'
    },
    blue: {
      primary: 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white',
      secondary: 'bg-white text-blue-700 hover:bg-blue-50 border border-blue-300',
      accent: 'text-blue-600'
    }
  };

  // Size styles
  const sizeStyles = {
    sm: 'py-2 px-3 text-sm',
    md: 'py-3 px-4 text-base',
    lg: 'py-4 px-6 text-lg'
  };

  const currentTheme = themeStyles[theme];
  const currentSize = sizeStyles[size];

  const handleDownloadClick = () => {
    if (showPlatforms) {
      setShowDropdown(!showDropdown);
    } else {
      setShowEmailSignup(true);
    }
  };

  const handlePlatformClick = (platform: string) => {
    console.log(`Download requested for ${platform}`);
    setShowEmailSignup(true);
    setShowDropdown(false);
  };

  return (
    <div className="relative">
      <Button
        onClick={handleDownloadClick}
        className={`${currentTheme.primary} ${currentSize} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2`}
      >
        <Download className="w-5 h-5" />
        <span>Get Early Access</span>
        {showPlatforms && (
          showDropdown ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />
        )}
      </Button>
      
      {showPlatforms && showDropdown && (
        <div className="absolute mt-2 w-full bg-white rounded-xl shadow-xl border border-gray-200 z-10 overflow-hidden animate-in fade-in duration-200">
          <button
            onClick={() => handlePlatformClick('ios')}
            className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center gap-3"
          >
            <Apple className="w-5 h-5 text-black" />
            <span>iOS App</span>
          </button>
          <button
            onClick={() => handlePlatformClick('android')}
            className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center gap-3"
          >
            <Smartphone className="w-5 h-5 text-green-600" />
            <span>Android App</span>
          </button>
          <button
            onClick={() => handlePlatformClick('web')}
            className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center gap-3"
          >
            <Globe className="w-5 h-5 text-blue-600" />
            <span>Web App</span>
          </button>
        </div>
      )}
      
      <EmailSignup 
        isOpen={showEmailSignup} 
        onClose={() => setShowEmailSignup(false)}
      />
    </div>
  );
};

// Globe icon component
const Globe = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);