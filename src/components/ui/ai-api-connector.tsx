import React, { useState, useEffect } from 'react';
import { Sparkles, Check, AlertTriangle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AIAPIConnectorProps {
  apiName: string;
  apiKey?: string;
  onConnect: (apiKey: string) => Promise<boolean>;
  onDisconnect: () => Promise<boolean>;
  isConnected?: boolean;
  theme?: 'purple' | 'orange' | 'blue';
}

export const AIAPIConnector: React.FC<AIAPIConnectorProps> = ({
  apiName,
  apiKey: initialApiKey = '',
  onConnect,
  onDisconnect,
  isConnected: initialIsConnected = false,
  theme = 'purple'
}) => {
  const [apiKey, setApiKey] = useState(initialApiKey);
  const [isConnected, setIsConnected] = useState(initialIsConnected);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showApiKey, setShowApiKey] = useState(false);

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

  useEffect(() => {
    setApiKey(initialApiKey);
    setIsConnected(initialIsConnected);
  }, [initialApiKey, initialIsConnected]);

  const handleConnect = async () => {
    if (!apiKey.trim()) {
      setError('API key is required');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const success = await onConnect(apiKey);
      if (success) {
        setIsConnected(true);
      } else {
        setError('Failed to connect. Please check your API key and try again.');
      }
    } catch (err) {
      setError('An error occurred while connecting to the API.');
      console.error('API connection error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDisconnect = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const success = await onDisconnect();
      if (success) {
        setIsConnected(false);
        setApiKey('');
      } else {
        setError('Failed to disconnect from the API.');
      }
    } catch (err) {
      setError('An error occurred while disconnecting from the API.');
      console.error('API disconnection error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`p-4 rounded-xl border ${currentTheme.border} ${currentTheme.highlight}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-full ${currentTheme.secondary} flex items-center justify-center`}>
          <Sparkles className={`w-5 h-5 ${currentTheme.accent}`} />
        </div>
        <div>
          <h3 className="font-bold">{apiName} Integration</h3>
          <p className="text-sm text-gray-500">
            {isConnected 
              ? `Connected to ${apiName} API` 
              : `Connect to ${apiName} to enable advanced AI features`}
          </p>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm flex items-start gap-2">
          <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p>{error}</p>
        </div>
      )}

      {isConnected ? (
        <div className="space-y-4">
          <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700">
            <Check className="w-5 h-5" />
            <span>Successfully connected to {apiName}</span>
          </div>
          
          <Button
            onClick={handleDisconnect}
            disabled={isLoading}
            variant="outline"
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Disconnecting...
              </>
            ) : (
              'Disconnect'
            )}
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {apiName} API Key
            </label>
            <div className="relative">
              <input
                type={showApiKey ? 'text' : 'password'}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder={`Enter your ${apiName} API key`}
              />
              <button
                type="button"
                onClick={() => setShowApiKey(!showApiKey)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showApiKey ? 'Hide' : 'Show'}
              </button>
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Your API key is stored securely and never shared.
            </p>
          </div>
          
          <Button
            onClick={handleConnect}
            disabled={isLoading || !apiKey.trim()}
            className={`w-full ${currentTheme.primary}`}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Connecting...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Connect to {apiName}
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
};