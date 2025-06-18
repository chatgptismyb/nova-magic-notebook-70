import React, { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { AIAPIConnector } from '@/components/ui/ai-api-connector';
import { AIAPITest } from '@/components/ui/ai-api-test';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sparkles, Zap, Bot, Brain } from 'lucide-react';

const AIIntegration = () => {
  const [openAIConnected, setOpenAIConnected] = useState(false);
  const [anthropicConnected, setAnthropicConnected] = useState(false);
  const [googleAIConnected, setGoogleAIConnected] = useState(false);
  const [activeTab, setActiveTab] = useState('openai');

  // Mock API connection functions
  const connectOpenAI = async (apiKey: string) => {
    // In a real app, this would validate the API key with OpenAI
    console.log('Connecting to OpenAI with key:', apiKey);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
    return true;
  };

  const disconnectOpenAI = async () => {
    console.log('Disconnecting from OpenAI');
    await new Promise(resolve => setTimeout(resolve, 800)); // Simulate API call
    return true;
  };

  const connectAnthropic = async (apiKey: string) => {
    console.log('Connecting to Anthropic with key:', apiKey);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
    return true;
  };

  const disconnectAnthropic = async () => {
    console.log('Disconnecting from Anthropic');
    await new Promise(resolve => setTimeout(resolve, 800)); // Simulate API call
    return true;
  };

  const connectGoogleAI = async (apiKey: string) => {
    console.log('Connecting to Google AI with key:', apiKey);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
    return true;
  };

  const disconnectGoogleAI = async () => {
    console.log('Disconnecting from Google AI');
    await new Promise(resolve => setTimeout(resolve, 800)); // Simulate API call
    return true;
  };

  // Mock API test functions
  const testOpenAI = async (prompt: string) => {
    console.log('Testing OpenAI with prompt:', prompt);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
    return {
      success: true,
      result: `OpenAI response to: "${prompt}"\n\nMagic Notebook is a revolutionary productivity tool that combines the power of AI with intuitive note-taking. It helps users organize their thoughts, automate tasks, and enhance creativity through its innovative features.`
    };
  };

  const testAnthropic = async (prompt: string) => {
    console.log('Testing Anthropic with prompt:', prompt);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
    return {
      success: true,
      result: `Anthropic response to: "${prompt}"\n\nThe Magic Notebook application transforms how you capture and develop ideas. By leveraging advanced AI, it turns simple notes into actionable insights, helping you achieve more with less effort.`
    };
  };

  const testGoogleAI = async (prompt: string) => {
    console.log('Testing Google AI with prompt:', prompt);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
    return {
      success: true,
      result: `Google AI response to: "${prompt}"\n\nMagic Notebook represents the future of productivity tools, where AI seamlessly integrates with your workflow. Its intuitive interface and powerful features make it an essential tool for professionals, students, and creatives alike.`
    };
  };

  return (
    <MainLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">AI Integration Settings</h1>
          <p className="text-gray-600">
            Connect Magic Notebook to powerful AI services to enhance Nova's capabilities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="openai" className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>OpenAI</span>
              </TabsTrigger>
              <TabsTrigger value="anthropic" className="flex items-center gap-2">
                <Bot className="w-4 h-4" />
                <span>Anthropic</span>
              </TabsTrigger>
              <TabsTrigger value="googleai" className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                <span>Google AI</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="openai" className="space-y-8">
              <AIAPIConnector
                apiName="OpenAI"
                onConnect={async (apiKey) => {
                  const success = await connectOpenAI(apiKey);
                  if (success) setOpenAIConnected(true);
                  return success;
                }}
                onDisconnect={async () => {
                  const success = await disconnectOpenAI();
                  if (success) setOpenAIConnected(false);
                  return success;
                }}
                isConnected={openAIConnected}
                theme="purple"
              />
              
              <AIAPITest
                apiName="OpenAI"
                isConnected={openAIConnected}
                onTest={testOpenAI}
                theme="purple"
              />
            </TabsContent>
            
            <TabsContent value="anthropic" className="space-y-8">
              <AIAPIConnector
                apiName="Anthropic"
                onConnect={async (apiKey) => {
                  const success = await connectAnthropic(apiKey);
                  if (success) setAnthropicConnected(true);
                  return success;
                }}
                onDisconnect={async () => {
                  const success = await disconnectAnthropic();
                  if (success) setAnthropicConnected(false);
                  return success;
                }}
                isConnected={anthropicConnected}
                theme="purple"
              />
              
              <AIAPITest
                apiName="Anthropic"
                isConnected={anthropicConnected}
                onTest={testAnthropic}
                theme="purple"
              />
            </TabsContent>
            
            <TabsContent value="googleai" className="space-y-8">
              <AIAPIConnector
                apiName="Google AI"
                onConnect={async (apiKey) => {
                  const success = await connectGoogleAI(apiKey);
                  if (success) setGoogleAIConnected(true);
                  return success;
                }}
                onDisconnect={async () => {
                  const success = await disconnectGoogleAI();
                  if (success) setGoogleAIConnected(false);
                  return success;
                }}
                isConnected={googleAIConnected}
                theme="purple"
              />
              
              <AIAPITest
                apiName="Google AI"
                isConnected={googleAIConnected}
                onTest={testGoogleAI}
                theme="purple"
              />
            </TabsContent>
          </Tabs>
          
          <div className="mt-8 p-4 bg-purple-50 border border-purple-200 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-5 h-5 text-purple-600" />
              <h3 className="font-bold text-purple-800">Nova's Enhanced Capabilities</h3>
            </div>
            <p className="text-sm text-purple-700 mb-2">
              Connecting these AI services enhances Nova with:
            </p>
            <ul className="text-sm text-purple-700 space-y-1 ml-6 list-disc">
              <li>More accurate natural language understanding</li>
              <li>Advanced spell creation and automation</li>
              <li>Improved note organization and summarization</li>
              <li>Smarter task prioritization and scheduling</li>
              <li>Enhanced creative writing and brainstorming</li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AIIntegration;