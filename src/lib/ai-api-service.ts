/**
 * AI API Service
 * 
 * This service provides integration with various AI providers:
 * - OpenAI
 * - Anthropic
 * - Google AI
 * 
 * It handles API key management, request formatting, and response parsing.
 */

// API Configuration Types
interface AIProviderConfig {
  apiKey: string;
  baseUrl: string;
  isConnected: boolean;
}

interface AIServiceConfig {
  openai: AIProviderConfig;
  anthropic: AIProviderConfig;
  googleAI: AIProviderConfig;
}

// Response Types
export interface AIResponse {
  text: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
  model?: string;
  provider: string;
}

// Default configuration
const defaultConfig: AIServiceConfig = {
  openai: {
    apiKey: '',
    baseUrl: 'https://api.openai.com/v1',
    isConnected: false
  },
  anthropic: {
    apiKey: '',
    baseUrl: 'https://api.anthropic.com/v1',
    isConnected: false
  },
  googleAI: {
    apiKey: '',
    baseUrl: 'https://generativelanguage.googleapis.com/v1beta',
    isConnected: false
  }
};

class AIAPIService {
  private config: AIServiceConfig;
  private activeProvider: 'openai' | 'anthropic' | 'googleAI' = 'openai';

  constructor() {
    // Load config from localStorage if available
    const savedConfig = localStorage.getItem('ai-api-config');
    this.config = savedConfig ? JSON.parse(savedConfig) : defaultConfig;
  }

  // Save config to localStorage
  private saveConfig(): void {
    localStorage.setItem('ai-api-config', JSON.stringify(this.config));
  }

  // Connect to OpenAI
  async connectOpenAI(apiKey: string): Promise<boolean> {
    try {
      // Validate API key with a simple request
      const response = await fetch('https://api.openai.com/v1/models', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status}`);
      }

      // Update config
      this.config.openai.apiKey = apiKey;
      this.config.openai.isConnected = true;
      this.saveConfig();
      
      console.log('Successfully connected to OpenAI');
      return true;
    } catch (error) {
      console.error('Failed to connect to OpenAI:', error);
      return false;
    }
  }

  // Disconnect from OpenAI
  async disconnectOpenAI(): Promise<boolean> {
    this.config.openai.apiKey = '';
    this.config.openai.isConnected = false;
    this.saveConfig();
    return true;
  }

  // Connect to Anthropic
  async connectAnthropic(apiKey: string): Promise<boolean> {
    try {
      // In a real implementation, we would validate the API key
      // For demo purposes, we'll just simulate a successful connection
      
      // Update config
      this.config.anthropic.apiKey = apiKey;
      this.config.anthropic.isConnected = true;
      this.saveConfig();
      
      console.log('Successfully connected to Anthropic');
      return true;
    } catch (error) {
      console.error('Failed to connect to Anthropic:', error);
      return false;
    }
  }

  // Disconnect from Anthropic
  async disconnectAnthropic(): Promise<boolean> {
    this.config.anthropic.apiKey = '';
    this.config.anthropic.isConnected = false;
    this.saveConfig();
    return true;
  }

  // Connect to Google AI
  async connectGoogleAI(apiKey: string): Promise<boolean> {
    try {
      // In a real implementation, we would validate the API key
      // For demo purposes, we'll just simulate a successful connection
      
      // Update config
      this.config.googleAI.apiKey = apiKey;
      this.config.googleAI.isConnected = true;
      this.saveConfig();
      
      console.log('Successfully connected to Google AI');
      return true;
    } catch (error) {
      console.error('Failed to connect to Google AI:', error);
      return false;
    }
  }

  // Disconnect from Google AI
  async disconnectGoogleAI(): Promise<boolean> {
    this.config.googleAI.apiKey = '';
    this.config.googleAI.isConnected = false;
    this.saveConfig();
    return true;
  }

  // Set active provider
  setActiveProvider(provider: 'openai' | 'anthropic' | 'googleAI'): void {
    if (this.config[provider].isConnected) {
      this.activeProvider = provider;
    } else {
      throw new Error(`Provider ${provider} is not connected`);
    }
  }

  // Get active provider
  getActiveProvider(): string {
    return this.activeProvider;
  }

  // Check if a provider is connected
  isProviderConnected(provider: 'openai' | 'anthropic' | 'googleAI'): boolean {
    return this.config[provider].isConnected;
  }

  // Get all connected providers
  getConnectedProviders(): string[] {
    return Object.entries(this.config)
      .filter(([_, config]) => config.isConnected)
      .map(([provider, _]) => provider);
  }

  // Generate text with OpenAI
  private async generateWithOpenAI(prompt: string, options: any = {}): Promise<AIResponse> {
    if (!this.config.openai.isConnected) {
      throw new Error('OpenAI is not connected');
    }

    try {
      const response = await fetch(`${this.config.openai.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.config.openai.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: options.model || 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: options.systemPrompt || 'You are a helpful assistant.' },
            { role: 'user', content: prompt }
          ],
          max_tokens: options.maxTokens || 500,
          temperature: options.temperature || 0.7
        })
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status}`);
      }

      const data = await response.json();
      
      return {
        text: data.choices[0].message.content,
        usage: {
          promptTokens: data.usage.prompt_tokens,
          completionTokens: data.usage.completion_tokens,
          totalTokens: data.usage.total_tokens
        },
        model: data.model,
        provider: 'openai'
      };
    } catch (error) {
      console.error('OpenAI generation error:', error);
      throw error;
    }
  }

  // Generate text with Anthropic
  private async generateWithAnthropic(prompt: string, options: any = {}): Promise<AIResponse> {
    if (!this.config.anthropic.isConnected) {
      throw new Error('Anthropic is not connected');
    }

    try {
      const response = await fetch(`${this.config.anthropic.baseUrl}/messages`, {
        method: 'POST',
        headers: {
          'x-api-key': this.config.anthropic.apiKey,
          'anthropic-version': '2023-06-01',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: options.model || 'claude-2',
          messages: [
            { role: 'user', content: prompt }
          ],
          max_tokens: options.maxTokens || 500,
          temperature: options.temperature || 0.7,
          system: options.systemPrompt || 'You are Claude, a helpful AI assistant.'
        })
      });

      if (!response.ok) {
        throw new Error(`Anthropic API error: ${response.status}`);
      }

      const data = await response.json();
      
      return {
        text: data.content[0].text,
        model: data.model,
        provider: 'anthropic'
      };
    } catch (error) {
      console.error('Anthropic generation error:', error);
      throw error;
    }
  }

  // Generate text with Google AI
  private async generateWithGoogleAI(prompt: string, options: any = {}): Promise<AIResponse> {
    if (!this.config.googleAI.isConnected) {
      throw new Error('Google AI is not connected');
    }

    try {
      const model = options.model || 'gemini-pro';
      const response = await fetch(`${this.config.googleAI.baseUrl}/models/${model}:generateContent?key=${this.config.googleAI.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: prompt }]
            }
          ],
          generationConfig: {
            temperature: options.temperature || 0.7,
            maxOutputTokens: options.maxTokens || 500
          }
        })
      });

      if (!response.ok) {
        throw new Error(`Google AI API error: ${response.status}`);
      }

      const data = await response.json();
      
      return {
        text: data.candidates[0].content.parts[0].text,
        model: model,
        provider: 'googleAI'
      };
    } catch (error) {
      console.error('Google AI generation error:', error);
      throw error;
    }
  }

  // Generate text with the active provider
  async generateText(prompt: string, options: any = {}): Promise<AIResponse> {
    switch (this.activeProvider) {
      case 'openai':
        return this.generateWithOpenAI(prompt, options);
      case 'anthropic':
        return this.generateWithAnthropic(prompt, options);
      case 'googleAI':
        return this.generateWithGoogleAI(prompt, options);
      default:
        throw new Error(`Unknown provider: ${this.activeProvider}`);
    }
  }

  // Test a provider with a simple prompt
  async testProvider(provider: 'openai' | 'anthropic' | 'googleAI', prompt: string): Promise<AIResponse> {
    const currentProvider = this.activeProvider;
    this.setActiveProvider(provider);
    
    try {
      const response = await this.generateText(prompt);
      return response;
    } finally {
      // Restore the original provider
      this.activeProvider = currentProvider;
    }
  }
}

// Export a singleton instance
export const aiAPIService = new AIAPIService();