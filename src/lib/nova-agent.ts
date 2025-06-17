import { supabase } from './supabase';

export interface NovaMessage {
  id: string;
  type: 'user' | 'nova' | 'system';
  content: string;
  timestamp: Date;
  metadata?: {
    emotion?: string;
    intent?: string;
    plugins?: string[];
    spellId?: string;
  };
}

export interface NovaAbility {
  name: string;
  description: string;
  invocation: string[];
  execute: (params: any) => Promise<any>;
}

export interface Spell {
  id: string;
  name: string;
  description: string;
  prompt: string;
  steps: SpellStep[];
  userId: string;
  isTemplate: boolean;
}

export interface SpellStep {
  id: string;
  description: string;
  action: string;
  parameters: Record<string, any>;
  status: 'pending' | 'executing' | 'completed' | 'failed';
  result?: any;
}

export class NovaAgent {
  private abilities: Map<string, NovaAbility> = new Map();
  private conversationHistory: NovaMessage[] = [];
  private currentUserId: string | null = null;
  private emotionalState: string = 'neutral';
  private activePlugins: Set<string> = new Set();

  constructor() {
    this.initializeAbilities();
  }

  private initializeAbilities() {
    // Core abilities from Nova_Abilities_V1.json
    const coreAbilities: NovaAbility[] = [
      {
        name: 'Create Note',
        description: 'Creates a new rich-text note',
        invocation: ['create note', 'new note', 'write this down'],
        execute: async (params) => this.createNote(params)
      },
      {
        name: 'Create Sticky Note',
        description: 'Creates a new sticky note with an optional mood',
        invocation: ['new sticky', 'sticky note', 'quick thought'],
        execute: async (params) => this.createStickyNote(params)
      },
      {
        name: 'Cast Spell',
        description: 'Executes a pre-defined or newly created spell',
        invocation: ['cast', 'run spell', 'automate this'],
        execute: async (params) => this.castSpell(params)
      },
      {
        name: 'Search Web',
        description: 'Performs a web search',
        invocation: ['search for', 'look up', 'find information on'],
        execute: async (params) => this.searchWeb(params)
      },
      {
        name: 'Schedule Event',
        description: 'Adds an event to the user\'s calendar',
        invocation: ['schedule', 'add to my calendar', 'new event'],
        execute: async (params) => this.scheduleEvent(params)
      },
      {
        name: 'Send Email',
        description: 'Composes and sends an email',
        invocation: ['email', 'send an email to', 'write an email'],
        execute: async (params) => this.sendEmail(params)
      }
    ];

    coreAbilities.forEach(ability => {
      this.abilities.set(ability.name, ability);
    });
  }

  async processMessage(message: string, userId: string): Promise<NovaMessage> {
    this.currentUserId = userId;
    
    // Add user message to history
    const userMessage: NovaMessage = {
      id: crypto.randomUUID(),
      type: 'user',
      content: message,
      timestamp: new Date()
    };
    
    this.conversationHistory.push(userMessage);

    // Analyze message for emotion and intent
    const analysis = await this.analyzeMessage(message);
    
    // Determine response based on intent
    const response = await this.generateResponse(message, analysis);
    
    // Create Nova response
    const novaMessage: NovaMessage = {
      id: crypto.randomUUID(),
      type: 'nova',
      content: response.content,
      timestamp: new Date(),
      metadata: {
        emotion: analysis.emotion,
        intent: analysis.intent,
        plugins: Array.from(this.activePlugins)
      }
    };

    this.conversationHistory.push(novaMessage);

    // Save conversation to database
    await this.saveConversation(userId);

    return novaMessage;
  }

  private async analyzeMessage(message: string): Promise<{
    emotion: string;
    intent: string;
    keywords: string[];
    requiresPlugins: string[];
  }> {
    // Emotion detection (simplified)
    const stressWords = ['stressed', 'overwhelmed', 'tired', 'frustrated', 'anxious'];
    const happyWords = ['excited', 'happy', 'great', 'awesome', 'wonderful'];
    
    let emotion = 'neutral';
    if (stressWords.some(word => message.toLowerCase().includes(word))) {
      emotion = 'stressed';
    } else if (happyWords.some(word => message.toLowerCase().includes(word))) {
      emotion = 'happy';
    }

    // Intent detection
    let intent = 'general';
    const keywords: string[] = [];
    const requiresPlugins: string[] = [];

    // Check for specific intents
    if (message.toLowerCase().includes('schedule') || message.toLowerCase().includes('calendar')) {
      intent = 'schedule';
      requiresPlugins.push('calendar_plugin');
    } else if (message.toLowerCase().includes('email') || message.toLowerCase().includes('send')) {
      intent = 'email';
      requiresPlugins.push('email_plugin');
    } else if (message.toLowerCase().includes('note') || message.toLowerCase().includes('write')) {
      intent = 'note_creation';
    } else if (message.toLowerCase().includes('search') || message.toLowerCase().includes('find')) {
      intent = 'search';
      requiresPlugins.push('web_search_plugin');
    }

    return { emotion, intent, keywords, requiresPlugins };
  }

  private async generateResponse(message: string, analysis: any): Promise<{ content: string; actions?: any[] }> {
    // Adaptive personality based on emotion
    let responseStyle = '';
    switch (analysis.emotion) {
      case 'stressed':
        responseStyle = 'I can sense you might be feeling a bit overwhelmed. Let me help make this easier for you. ';
        break;
      case 'happy':
        responseStyle = 'I love your enthusiasm! ';
        break;
      default:
        responseStyle = '';
    }

    // Generate response based on intent
    switch (analysis.intent) {
      case 'note_creation':
        return {
          content: `${responseStyle}I'll help you create that note! What would you like to include in it?`
        };
      
      case 'schedule':
        if (!this.activePlugins.has('calendar_plugin')) {
          return {
            content: `${responseStyle}To schedule events, I'll need access to your calendar. Would you like me to connect to your calendar app?`
          };
        }
        return {
          content: `${responseStyle}I'll help you schedule that! Let me check your calendar availability...`
        };
      
      case 'email':
        if (!this.activePlugins.has('email_plugin')) {
          return {
            content: `${responseStyle}To send emails, I'll need access to your email. Would you like me to connect to your email service?`
          };
        }
        return {
          content: `${responseStyle}I'll help you compose and send that email. Who would you like to send it to?`
        };
      
      case 'search':
        return {
          content: `${responseStyle}I'll search for that information for you! Let me find what you're looking for...`
        };
      
      default:
        return {
          content: `${responseStyle}I'm here to help! I can assist you with creating notes, scheduling events, sending emails, searching for information, and much more. What would you like to work on?`
        };
    }
  }

  // Ability implementations
  private async createNote(params: { content: string; title?: string }): Promise<any> {
    if (!this.currentUserId) throw new Error('User not authenticated');

    const { data, error } = await supabase
      .from('notes')
      .insert({
        user_id: this.currentUserId,
        content: params.content,
        title: params.title || 'Untitled Note',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  private async createStickyNote(params: { content: string; mood?: string }): Promise<any> {
    if (!this.currentUserId) throw new Error('User not authenticated');

    const { data, error } = await supabase
      .from('sticky_notes')
      .insert({
        user_id: this.currentUserId,
        content: params.content,
        mood: params.mood || 'neutral',
        created_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  private async castSpell(params: { spellId?: string; prompt?: string }): Promise<any> {
    if (!this.currentUserId) throw new Error('User not authenticated');

    let spell: Spell;

    if (params.spellId) {
      // Execute existing spell
      const { data, error } = await supabase
        .from('spells')
        .select('*')
        .eq('id', params.spellId)
        .eq('user_id', this.currentUserId)
        .single();

      if (error) throw error;
      spell = data;
    } else if (params.prompt) {
      // Create new spell from prompt
      spell = await this.createSpellFromPrompt(params.prompt);
    } else {
      throw new Error('Either spellId or prompt is required');
    }

    return await this.executeSpell(spell);
  }

  private async createSpellFromPrompt(prompt: string): Promise<Spell> {
    // This would use AI to break down the prompt into steps
    // For now, we'll create a simple spell structure
    const spell: Spell = {
      id: crypto.randomUUID(),
      name: `Spell: ${prompt.substring(0, 30)}...`,
      description: `Auto-generated spell from: ${prompt}`,
      prompt,
      steps: [
        {
          id: crypto.randomUUID(),
          description: 'Analyze request',
          action: 'analyze',
          parameters: { prompt },
          status: 'pending'
        },
        {
          id: crypto.randomUUID(),
          description: 'Execute action',
          action: 'execute',
          parameters: { prompt },
          status: 'pending'
        }
      ],
      userId: this.currentUserId!,
      isTemplate: false
    };

    // Save spell to database
    const { data, error } = await supabase
      .from('spells')
      .insert({
        user_id: spell.userId,
        name: spell.name,
        description: spell.description,
        prompt: spell.prompt
      })
      .select()
      .single();

    if (error) throw error;
    spell.id = data.id;

    return spell;
  }

  private async executeSpell(spell: Spell): Promise<any> {
    const results = [];

    for (const step of spell.steps) {
      step.status = 'executing';
      
      try {
        let result;
        switch (step.action) {
          case 'analyze':
            result = await this.analyzeMessage(step.parameters.prompt);
            break;
          case 'execute':
            result = await this.executeSpellAction(step.parameters.prompt);
            break;
          default:
            result = { message: 'Step completed' };
        }

        step.result = result;
        step.status = 'completed';
        results.push(result);
      } catch (error) {
        step.status = 'failed';
        step.result = { error: error.message };
      }
    }

    return {
      spellId: spell.id,
      results,
      status: 'completed'
    };
  }

  private async executeSpellAction(prompt: string): Promise<any> {
    // This would contain the actual spell execution logic
    // For now, return a mock result
    return {
      message: `Executed spell action for: ${prompt}`,
      timestamp: new Date().toISOString()
    };
  }

  private async searchWeb(params: { query: string }): Promise<any> {
    // Mock web search - in production, this would use a real search API
    return {
      query: params.query,
      results: [
        {
          title: `Search result for: ${params.query}`,
          url: 'https://example.com',
          snippet: 'This is a mock search result.'
        }
      ]
    };
  }

  private async scheduleEvent(params: { title: string; date: string; time: string }): Promise<any> {
    // Mock calendar integration
    return {
      eventId: crypto.randomUUID(),
      title: params.title,
      date: params.date,
      time: params.time,
      status: 'scheduled'
    };
  }

  private async sendEmail(params: { to: string; subject: string; body: string }): Promise<any> {
    // Mock email sending
    return {
      messageId: crypto.randomUUID(),
      to: params.to,
      subject: params.subject,
      status: 'sent'
    };
  }

  private async saveConversation(userId: string): Promise<void> {
    const { error } = await supabase
      .from('conversations')
      .upsert({
        user_id: userId,
        history: this.conversationHistory,
        updated_at: new Date().toISOString()
      });

    if (error) {
      console.error('Failed to save conversation:', error);
    }
  }

  // Plugin management
  activatePlugin(pluginName: string): void {
    this.activePlugins.add(pluginName);
  }

  deactivatePlugin(pluginName: string): void {
    this.activePlugins.delete(pluginName);
  }

  getActivePlugins(): string[] {
    return Array.from(this.activePlugins);
  }

  // Get conversation history
  getConversationHistory(): NovaMessage[] {
    return [...this.conversationHistory];
  }

  // Clear conversation
  clearConversation(): void {
    this.conversationHistory = [];
  }
}

// Singleton instance
export const novaAgent = new NovaAgent();