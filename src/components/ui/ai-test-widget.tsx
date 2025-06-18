import React, { useState } from 'react';
import { Wand2, Sparkles, Loader2, Check, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { aiAPIService } from '@/lib/ai-api-service';

interface AITestWidgetProps {
  theme?: 'purple' | 'orange' | 'blue';
  showTitle?: boolean;
  defaultPrompt?: string;
}

export const AITestWidget: React.FC<AITestWidgetProps> = ({
  theme = 'purple',
  showTitle = true,
  defaultPrompt = 'Tell me about Magic Notebook and how it can help with productivity.'
}) => {
  const [prompt, setPrompt] = useState(defaultPrompt);
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
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError(null);
    setResult(null);
    setTestSuccess(false);

    try {
      // For demo purposes, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real implementation, we would use the AI API service
      // const response = await aiAPIService.generateText(prompt);
      // setResult(response.text);
      
      // Simulate a successful response
      setResult(`Magic Notebook is a revolutionary productivity tool that combines the power of AI with intuitive note-taking. With Nova, your AI companion, you can transform scattered thoughts into organized, actionable items.

Key features include:
- Smart note organization
- Task automation through "spells"
- Natural language processing
- Cross-platform synchronization
- Intelligent suggestions based on your habits

The app helps boost productivity by handling routine tasks automatically, allowing you to focus on creative and strategic thinking. Nova learns from your patterns and adapts to your workflow, making the experience increasingly personalized over time.

Whether you're a student, professional, or creative, Magic Notebook can help streamline your workflow and reduce cognitive load.`);
      
      setTestSuccess(true);
    } catch (err) {
      setError('An error occurred while testing the AI. Please try again.');
      console.error('AI test error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`p-4 rounded-xl border ${currentTheme.border} ${currentTheme.highlight}`}>
      {showTitle && (
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 rounded-full ${currentTheme.secondary} flex items-center justify-center`}>
            <Wand2 className={`w-5 h-5 ${currentTheme.accent}`} />
          </div>
          <div>
            <h3 className="font-bold">Test Nova's Magic</h3>
            <p className="text-sm text-gray-500">
              See how our AI can help with your productivity
            </p>
          </div>
        </div>
      )}

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm flex items-start gap-2">
          <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p>{error}</p>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ask Nova
          </label>
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter a prompt to test Nova's capabilities..."
            rows={3}
            className="w-full"
          />
        </div>
        
        <Button
          onClick={handleTest}
          disabled={isLoading || !prompt.trim()}
          className={`w-full ${currentTheme.primary}`}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Nova is thinking...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 mr-2" />
              Ask Nova
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
                Nova's Response
              </h4>
            </div>
            <div className="bg-white p-3 rounded border border-gray-200 max-h-60 overflow-y-auto">
              <p className="text-sm whitespace-pre-wrap">{result}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};