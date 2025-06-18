import React from 'react';
import { Sparkles, Check, AlertTriangle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface AIIntegrationStatusProps {
  connectedProviders: string[];
  theme?: 'purple' | 'orange' | 'blue';
}

export const AIIntegrationStatus: React.FC<AIIntegrationStatusProps> = ({
  connectedProviders = [],
  theme = 'purple'
}) => {
  // Theme styles
  const themeStyles = {
    purple: {
      primary: 'bg-purple-600 hover:bg-purple-700 text-white',
      secondary: 'bg-purple-100 text-purple-800 border-purple-300',
      accent: 'text-purple-600',
      border: 'border-purple-300',
      highlight: 'bg-purple-50'
    },
    orange: {
      primary: 'bg-orange-600 hover:bg-orange-700 text-white',
      secondary: 'bg-orange-100 text-orange-800 border-orange-300',
      accent: 'text-orange-600',
      border: 'border-orange-300',
      highlight: 'bg-orange-50'
    },
    blue: {
      primary: 'bg-blue-600 hover:bg-blue-700 text-white',
      secondary: 'bg-blue-100 text-blue-800 border-blue-300',
      accent: 'text-blue-600',
      border: 'border-blue-300',
      highlight: 'bg-blue-50'
    }
  };

  const currentTheme = themeStyles[theme];
  const isConnected = connectedProviders.length > 0;

  return (
    <div className={`p-4 rounded-xl border ${currentTheme.border} ${currentTheme.highlight}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-full ${
          isConnected ? 'bg-green-100 border-green-300' : currentTheme.secondary
        } flex items-center justify-center`}>
          {isConnected ? (
            <Check className="w-5 h-5 text-green-600" />
          ) : (
            <Zap className={`w-5 h-5 ${currentTheme.accent}`} />
          )}
        </div>
        <div>
          <h3 className="font-bold">AI Integration Status</h3>
          <p className="text-sm text-gray-500">
            {isConnected 
              ? `Connected to ${connectedProviders.length} AI provider${connectedProviders.length > 1 ? 's' : ''}` 
              : 'No AI providers connected'}
          </p>
        </div>
      </div>

      {isConnected ? (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {connectedProviders.map((provider) => (
              <div 
                key={provider}
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm flex items-center gap-1"
              >
                <Check className="w-3 h-3" />
                <span>{provider}</span>
              </div>
            ))}
          </div>
          
          <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
            <p>Nova is enhanced with advanced AI capabilities!</p>
          </div>
          
          <Link to="/ai-integration">
            <Button
              variant="outline"
              className="w-full border-green-300 text-green-700 hover:bg-green-50"
            >
              Manage AI Integrations
            </Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-700 text-sm flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium mb-1">Nova is running with limited capabilities</p>
              <p>Connect to AI providers to unlock Nova's full potential</p>
            </div>
          </div>
          
          <Link to="/ai-integration">
            <Button
              className={`w-full ${currentTheme.primary}`}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Connect AI Providers
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};