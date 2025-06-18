import React, { useState } from 'react';
import { Wand2, Sparkles, Loader2, Check, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface AIAPITestProps {
  apiName: string;
  isConnected: boolean;
  onTest: (prompt: string) => Promise<{ success: boolean; result: string }>;
  theme?: 'purple' | 'orange' | 'blue';
}

export const AIAPITest: React.FC<AIAPITestProps> = ({
  apiName,
  isConnected,
  onTest,
  theme = 'purple'
}) => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [testSuccess, setTestSuccess] = useState(false);

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

  const handleTest = async () => {
    if (!prompt.trim() || !isConnected) return;

    setIsLoading(true);
    setError(null);
    setResult(null);
    setTestSuccess(false);

    try {
      const { success, result: testResult } = await onTest(prompt);
      setResult(testResult);
      setTestSuccess(success);
      
      if (!success) {
        setError('Test completed but returned an unsuccessful result.');
      }
    } catch (err) {
      setError('An error occurred while testing the API.');
      console.error('API test error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const getExamplePrompts = () => {
    switch (apiName.toLowerCase()) {
      case 'openai':
        return [
          'Write a short poem about magic notebooks',
          'Explain how AI can improve productivity',
          'Generate a list of creative project ideas'
        ];
      case 'anthropic':
        return [
          'Describe the benefits of using AI assistants',
          'Write a short story about a magical notebook',
          'Explain the concept of productivity in simple terms'
        ];
      case 'google ai':
        return [
          'Summarize the benefits of note-taking',
          'Generate ideas for organizing digital notes',
          'Explain how AI can help with task management'
        ];
      default:
        return [
          'Test the API with a simple prompt',
          'Generate a creative response',
          'Ask a question about productivity'
        ];
    }
  };

  const examples = getExamplePrompts();

  return (
    <div className={`p-4 rounded-xl border ${currentTheme.border} ${currentTheme.highlight}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-full ${currentTheme.secondary} flex items-center justify-center`}>
          <Wand2 className={`w-5 h-5 ${currentTheme.accent}`} />
        </div>
        <div>
          <h3 className="font-bold">Test {apiName} Integration</h3>
          <p className="text-sm text-gray-500">
            {isConnected 
              ? `Try out the ${apiName} API with a test prompt` 
              : `Connect to ${apiName} first to test the integration`}
          </p>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm flex items-start gap-2">
          <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p>{error}</p>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Test Prompt
          </label>
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter a prompt to test the API..."
            rows={3}
            disabled={!isConnected || isLoading}
            className="w-full"
          />
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-2">Example prompts:</p>
          <div className="flex flex-wrap gap-2">
            {examples.map((example, index) => (
              <button
                key={index}
                onClick={() => setPrompt(example)}
                disabled={!isConnected || isLoading}
                className={`text-xs px-3 py-1 rounded-full ${currentTheme.secondary} hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {example}
              </button>
            ))}
          </div>
        </div>
        
        <Button
          onClick={handleTest}
          disabled={!isConnected || isLoading || !prompt.trim()}
          className={`w-full ${currentTheme.primary}`}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Testing...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 mr-2" />
              Test {apiName} API
            </>
          )}
        </Button>

        {result && (
          <div className={`p-4 rounded-lg border ${
            testSuccess 
              ? 'border-green-200 bg-green-50' 
              : 'border-gray-200 bg-gray-50'
          }`}>
            <div className="flex items-center gap-2 mb-2">
              {testSuccess ? (
                <Check className="w-5 h-5 text-green-600" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
              )}
              <h4 className="font-medium">
                {testSuccess ? 'Test Successful' : 'Test Result'}
              </h4>
            </div>
            <div className="bg-white p-3 rounded border border-gray-200 max-h-60 overflow-y-auto">
              <pre className="text-sm whitespace-pre-wrap">{result}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};