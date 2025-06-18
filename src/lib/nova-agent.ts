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
    wishId?: string;
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

export interface NovaWish {
  id: string;
  content: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  userId: string;
  createdAt: Date;
  completedAt?: Date;
  result?: any;
}

export interface NovaPersona {
  tone: 'witty' | 'professional' | 'friendly' | 'sassy';
  emotionalState: 'neutral' | 'happy' | 'concerned' | 'excited';
  learningMode: boolean;
}

export class NovaAgent {
  private abilities: Map<string, NovaAbility> = new Map();
  private conversationHistory: NovaMessage[] = [];
  private currentUserId: string | null = null;
  private emotionalState: string = 'neutral';
  private activePlugins: Set<string> = new Set();
  private wishMemory: NovaWish[] = [];
  private persona: NovaPersona = {
    tone: 'witty',
    emotionalState: 'neutral',
    learningMode: true
  };
  private spellTemplates: Map<string, Spell> = new Map();
  private debugMode: boolean = true;

  constructor() {
    this.initializeAbilities();
    this.loadSpellTemplates();
  }

  private async initializeAbilities() {
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
      },
      {
        name: 'Create Task',
        description: 'Creates a new task or todo item',
        invocation: ['create task', 'add todo', 'remind me to'],
        execute: async (params) => this.createTask(params)
      },
      {
        name: 'Order Food',
        description: 'Places a food delivery order',
        invocation: ['order food', 'get delivery', 'I\'m hungry'],
        execute: async (params) => this.orderFood(params)
      },
      {
        name: 'Book Ride',
        description: 'Books a ride service',
        invocation: ['book ride', 'get a car', 'need transportation'],
        execute: async (params) => this.bookRide(params)
      },
      {
        name: 'Create Spell',
        description: 'Creates a new custom spell',
        invocation: ['create spell', 'new automation', 'make a workflow'],
        execute: async (params) => this.createCustomSpell(params)
      }
    ];

    coreAbilities.forEach(ability => {
      this.abilities.set(ability.name, ability);
    });
  }

  private async loadSpellTemplates() {
    try {
      const { data, error } = await supabase
        .from('spell_templates')
        .select('*');
      
      if (error) throw error;
      
      if (data) {
        data.forEach(template => {
          const spell: Spell = {
            id: template.id,
            name: template.name,
            description: template.description,
            prompt: template.prompt,
            steps: [],
            userId: 'system',
            isTemplate: true
          };
          
          this.spellTemplates.set(template.id, spell);
        });
      }
    } catch (error) {
      console.error('Failed to load spell templates:', error);
      this.logDebug('Failed to load spell templates', error);
    }
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
    this.logDebug('Processing user message', message);

    // Store the wish in memory
    const wish: NovaWish = {
      id: crypto.randomUUID(),
      content: message,
      status: 'processing',
      userId,
      createdAt: new Date()
    };
    this.wishMemory.push(wish);

    // Analyze message for emotion, intent, and reasoning
    const analysis = await this.analyzeMessage(message);
    
    // Update persona based on user interaction
    this.updatePersona(analysis);
    
    // Determine response based on intent using reasoning loops
    let response = await this.generateInitialResponse(message, analysis);
    
    // Apply reasoning loop to refine the response
    response = await this.applyReasoningLoop(response, analysis, message);
    
    // Create Nova response
    const novaMessage: NovaMessage = {
      id: crypto.randomUUID(),
      type: 'nova',
      content: response.content,
      timestamp: new Date(),
      metadata: {
        emotion: analysis.emotion,
        intent: analysis.intent,
        plugins: Array.from(this.activePlugins),
        wishId: wish.id
      }
    };

    this.conversationHistory.push(novaMessage);
    this.logDebug('Generated Nova response', response);

    // Update wish status
    const wishIndex = this.wishMemory.findIndex(w => w.id === wish.id);
    if (wishIndex !== -1) {
      this.wishMemory[wishIndex].status = 'completed';
      this.wishMemory[wishIndex].completedAt = new Date();
      this.wishMemory[wishIndex].result = response;
    }

    // Save conversation to database
    await this.saveConversation(userId);

    return novaMessage;
  }

  private async analyzeMessage(message: string): Promise<{
    emotion: string;
    intent: string;
    keywords: string[];
    requiresPlugins: string[];
    confidence: number;
    reasoning: string;
  }> {
    this.logDebug('Analyzing message', message);
    
    // Emotion detection (enhanced)
    const emotionPatterns = {
      stressed: ['stressed', 'overwhelmed', 'tired', 'frustrated', 'anxious', 'worried', 'pressure', 'too much'],
      happy: ['excited', 'happy', 'great', 'awesome', 'wonderful', 'fantastic', 'joy', 'pleased'],
      angry: ['angry', 'upset', 'mad', 'furious', 'annoyed', 'irritated'],
      sad: ['sad', 'depressed', 'unhappy', 'down', 'blue', 'miserable'],
      confused: ['confused', 'unsure', 'don\'t understand', 'unclear', 'lost']
    };
    
    let emotion = 'neutral';
    let emotionConfidence = 0;
    
    // Find the emotion with the most matches
    Object.entries(emotionPatterns).forEach(([currentEmotion, patterns]) => {
      const matchCount = patterns.filter(pattern => 
        message.toLowerCase().includes(pattern.toLowerCase())
      ).length;
      
      if (matchCount > emotionConfidence) {
        emotion = currentEmotion;
        emotionConfidence = matchCount;
      }
    });

    // Intent detection with reasoning
    let intent = 'general';
    let confidence = 0.5;
    let reasoning = '';
    const keywords: string[] = [];
    const requiresPlugins: string[] = [];

    // Check for specific intents with reasoning
    if (message.toLowerCase().match(/schedule|calendar|appointment|meeting|remind me|event/i)) {
      intent = 'schedule';
      confidence = 0.85;
      reasoning = 'Message contains calendar-related terms and scheduling intent';
      requiresPlugins.push('calendar_plugin');
      keywords.push('schedule', 'calendar', 'time');
    } else if (message.toLowerCase().match(/email|send|message|contact|write to/i)) {
      intent = 'email';
      confidence = 0.8;
      reasoning = 'Message indicates communication intent via email';
      requiresPlugins.push('email_plugin');
      keywords.push('email', 'send', 'message');
    } else if (message.toLowerCase().match(/note|write down|document|record|save this/i)) {
      intent = 'note_creation';
      confidence = 0.9;
      reasoning = 'Message explicitly requests note creation or documentation';
      keywords.push('note', 'write', 'save');
    } else if (message.toLowerCase().match(/search|find|look up|discover|research/i)) {
      intent = 'search';
      confidence = 0.85;
      reasoning = 'Message indicates information retrieval intent';
      requiresPlugins.push('web_search_plugin');
      keywords.push('search', 'find', 'information');
    } else if (message.toLowerCase().match(/task|todo|to-do|to do|checklist|complete/i)) {
      intent = 'task_management';
      confidence = 0.9;
      reasoning = 'Message relates to task creation or management';
      keywords.push('task', 'todo', 'complete');
    } else if (message.toLowerCase().match(/order|food|delivery|hungry|eat|restaurant/i)) {
      intent = 'food_order';
      confidence = 0.85;
      reasoning = 'Message indicates desire for food ordering';
      requiresPlugins.push('food_delivery_plugin');
      keywords.push('food', 'order', 'delivery');
    } else if (message.toLowerCase().match(/ride|car|taxi|uber|lyft|transportation/i)) {
      intent = 'transportation';
      confidence = 0.8;
      reasoning = 'Message indicates need for transportation services';
      requiresPlugins.push('ride_service_plugin');
      keywords.push('ride', 'car', 'transportation');
    } else if (message.toLowerCase().match(/spell|automate|workflow|automation/i)) {
      intent = 'spell_creation';
      confidence = 0.9;
      reasoning = 'Message explicitly mentions spell or automation creation';
      keywords.push('spell', 'automate', 'workflow');
    }

    return { 
      emotion, 
      intent, 
      keywords, 
      requiresPlugins, 
      confidence,
      reasoning
    };
  }

  private updatePersona(analysis: any) {
    // Update emotional state based on user's emotion
    if (analysis.emotion === 'stressed' || analysis.emotion === 'angry') {
      this.persona.tone = 'friendly';
      this.persona.emotionalState = 'concerned';
    } else if (analysis.emotion === 'happy') {
      this.persona.tone = 'witty';
      this.persona.emotionalState = 'happy';
    } else if (analysis.emotion === 'confused') {
      this.persona.tone = 'professional';
      this.persona.emotionalState = 'neutral';
    } else {
      // Default to witty and sassy
      this.persona.tone = 'witty';
      this.persona.emotionalState = 'neutral';
    }

    this.logDebug('Updated persona', this.persona);
  }

  private async generateInitialResponse(message: string, analysis: any): Promise<{ content: string; actions?: any[] }> {
    // Adaptive personality based on persona
    let responseStyle = '';
    
    switch (this.persona.emotionalState) {
      case 'concerned':
        responseStyle = 'I can sense you might be feeling a bit overwhelmed. Let me help make this easier for you. ';
        break;
      case 'happy':
        responseStyle = 'I love your enthusiasm! Let's make some magic happen! ';
        break;
      case 'excited':
        responseStyle = 'Ooh, this sounds like a fun challenge! ';
        break;
      default:
        responseStyle = this.persona.tone === 'witty' 
          ? 'Alright, let me wave my digital wand! ' 
          : 'I\'ll help you with that. ';
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
      
      case 'task_management':
        return {
          content: `${responseStyle}I'll add that to your task list. Would you like to set a due date or priority level?`
        };
      
      case 'food_order':
        if (!this.activePlugins.has('food_delivery_plugin')) {
          return {
            content: `${responseStyle}I can help you order food, but I'll need to connect to a delivery service first. Would you like me to set that up?`
          };
        }
        return {
          content: `${responseStyle}I'll help you order food! What kind of cuisine are you in the mood for?`
        };
      
      case 'transportation':
        if (!this.activePlugins.has('ride_service_plugin')) {
          return {
            content: `${responseStyle}I can help you book a ride, but I'll need to connect to a ride service first. Would you like me to set that up?`
          };
        }
        return {
          content: `${responseStyle}I'll help you book a ride! Where would you like to go?`
        };
      
      case 'spell_creation':
        return {
          content: `${responseStyle}Let's create a new spell! What would you like this automation to do for you?`
        };
      
      default:
        return {
          content: `${responseStyle}I'm here to help! I can assist you with creating notes, scheduling events, sending emails, searching for information, managing tasks, ordering food, booking rides, and creating custom automation spells. What would you like to work on?`
        };
    }
  }

  private async applyReasoningLoop(initialResponse: any, analysis: any, userMessage: string): Promise<{ content: string; actions?: any[] }> {
    this.logDebug('Starting reasoning loop', { initialResponse, analysis });
    
    let currentResponse = initialResponse;
    let iterations = 0;
    const maxIterations = 3;
    
    while (iterations < maxIterations) {
      // Check if response needs refinement
      const refinementNeeded = this.evaluateResponseQuality(currentResponse, analysis, userMessage);
      
      if (!refinementNeeded.needed) {
        this.logDebug('Response quality acceptable, ending reasoning loop', refinementNeeded);
        break;
      }
      
      // Refine the response
      currentResponse = await this.refineResponse(currentResponse, refinementNeeded.reasons, analysis, userMessage);
      iterations++;
      
      this.logDebug('Refined response', { iteration: iterations, response: currentResponse });
    }
    
    return currentResponse;
  }

  private evaluateResponseQuality(response: any, analysis: any, userMessage: string): { needed: boolean; reasons: string[] } {
    const reasons: string[] = [];
    
    // Check if response addresses the user's intent
    if (analysis.confidence < 0.7) {
      reasons.push('Low confidence in intent detection');
    }
    
    // Check if response is too generic
    if (response.content.includes("I'm here to help") && analysis.intent !== 'general') {
      reasons.push('Response is too generic for specific intent');
    }
    
    // Check if response is missing context from previous conversations
    if (this.conversationHistory.length > 2 && !this.checkContextContinuity(response, userMessage)) {
      reasons.push('Response lacks continuity with previous conversation');
    }
    
    // Check if response is missing personalization
    if (!this.checkPersonalization(response)) {
      reasons.push('Response lacks personalization');
    }
    
    return {
      needed: reasons.length > 0,
      reasons
    };
  }

  private checkContextContinuity(response: any, userMessage: string): boolean {
    // Simple check for now - could be much more sophisticated
    if (this.conversationHistory.length < 3) return true;
    
    const previousNovaMessage = this.conversationHistory
      .filter(msg => msg.type === 'nova')
      .slice(-1)[0];
    
    if (!previousNovaMessage) return true;
    
    // Check if current response references previous context
    const previousTopics = this.extractTopics(previousNovaMessage.content);
    const userTopics = this.extractTopics(userMessage);
    const responseTopics = this.extractTopics(response.content);
    
    // Check for topic continuity
    const continuityScore = this.calculateTopicOverlap(previousTopics, responseTopics);
    const userAlignmentScore = this.calculateTopicOverlap(userTopics, responseTopics);
    
    return continuityScore > 0.3 || userAlignmentScore > 0.5;
  }

  private extractTopics(text: string): string[] {
    // Simple keyword extraction - in a real implementation, this would use NLP
    const words = text.toLowerCase().split(/\W+/);
    const stopWords = ['i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', 'your', 'yours', 
                      'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', 'her', 'hers', 
                      'herself', 'it', 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 
                      'what', 'which', 'who', 'whom', 'this', 'that', 'these', 'those', 'am', 'is', 'are', 
                      'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 
                      'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 
                      'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 
                      'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 
                      'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 
                      'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 
                      'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 
                      'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', 'should', 'now'];
    
    return words
      .filter(word => word.length > 3 && !stopWords.includes(word))
      .slice(0, 10); // Take top 10 keywords
  }

  private calculateTopicOverlap(topics1: string[], topics2: string[]): number {
    if (topics1.length === 0 || topics2.length === 0) return 0;
    
    const overlap = topics1.filter(topic => topics2.includes(topic)).length;
    return overlap / Math.min(topics1.length, topics2.length);
  }

  private checkPersonalization(response: any): boolean {
    // Check if response matches current persona
    const wittyPhrases = ['magic', 'spell', 'wand', 'wizard', 'enchant', 'potion'];
    const sassyPhrases = ['actually', 'obviously', 'clearly', 'of course', 'duh'];
    const friendlyPhrases = ['happy to help', 'glad to assist', 'I\'m here for you'];
    
    if (this.persona.tone === 'witty' && 
        !wittyPhrases.some(phrase => response.content.toLowerCase().includes(phrase))) {
      return false;
    }
    
    if (this.persona.tone === 'sassy' && 
        !sassyPhrases.some(phrase => response.content.toLowerCase().includes(phrase))) {
      return false;
    }
    
    if (this.persona.tone === 'friendly' && 
        !friendlyPhrases.some(phrase => response.content.toLowerCase().includes(phrase))) {
      return false;
    }
    
    return true;
  }

  private async refineResponse(response: any, reasons: string[], analysis: any, userMessage: string): Promise<{ content: string; actions?: any[] }> {
    let refinedContent = response.content;
    
    // Apply refinements based on reasons
    for (const reason of reasons) {
      if (reason === 'Low confidence in intent detection') {
        // Add clarification request
        refinedContent += " Could you please clarify what specifically you'd like me to help with?";
      }
      
      if (reason === 'Response is too generic for specific intent') {
        // Make response more specific to the detected intent
        const intentSpecificContent = this.getIntentSpecificContent(analysis.intent, userMessage);
        refinedContent = intentSpecificContent || refinedContent;
      }
      
      if (reason === 'Response lacks continuity with previous conversation') {
        // Add reference to previous conversation
        const continuityPhrase = this.generateContinuityPhrase();
        refinedContent = continuityPhrase + ' ' + refinedContent;
      }
      
      if (reason === 'Response lacks personalization') {
        // Add personalization based on current persona
        refinedContent = this.addPersonalization(refinedContent);
      }
    }
    
    return {
      content: refinedContent,
      actions: response.actions
    };
  }

  private getIntentSpecificContent(intent: string, userMessage: string): string | null {
    // Extract key information from user message
    const extractedInfo = this.extractKeyInfo(userMessage, intent);
    
    switch (intent) {
      case 'note_creation':
        return `I'll create a note about "${extractedInfo.topic || 'your request'}". Would you like me to add any specific details or tags?`;
      
      case 'schedule':
        return `I'll schedule "${extractedInfo.event || 'your event'}" for ${extractedInfo.time || 'the specified time'}. Would you like me to set a reminder?`;
      
      case 'task_management':
        return `I'll add "${extractedInfo.task || 'your task'}" to your to-do list. Would you like to set a priority or deadline?`;
      
      default:
        return null;
    }
  }

  private extractKeyInfo(message: string, intent: string): any {
    // This would be much more sophisticated in a real implementation
    const info: any = {};
    
    if (intent === 'note_creation') {
      const topicMatch = message.match(/about\s+([^.,!?]+)/i);
      if (topicMatch) info.topic = topicMatch[1].trim();
    }
    
    if (intent === 'schedule') {
      const eventMatch = message.match(/schedule\s+([^.,!?]+)/i);
      if (eventMatch) info.event = eventMatch[1].trim();
      
      const timeMatch = message.match(/(today|tomorrow|next week|on\s+\w+|\d{1,2}\/\d{1,2}|\d{1,2}:\d{2})/i);
      if (timeMatch) info.time = timeMatch[1].trim();
    }
    
    if (intent === 'task_management') {
      const taskMatch = message.match(/(add|create|make)\s+(?:a\s+)?(?:task|todo|to-do|to\s+do)\s+(?:to\s+)?([^.,!?]+)/i);
      if (taskMatch) info.task = taskMatch[2].trim();
    }
    
    return info;
  }

  private generateContinuityPhrase(): string {
    const phrases = [
      "Following up on our previous conversation,",
      "As we were discussing earlier,",
      "To continue where we left off,",
      "Building on what we talked about,"
    ];
    
    return phrases[Math.floor(Math.random() * phrases.length)];
  }

  private addPersonalization(content: string): string {
    if (this.persona.tone === 'witty') {
      const wittyPhrases = [
        "Let me wave my digital wand and",
        "Time for some productivity magic!",
        "Abracadabra!",
        "My crystal ball tells me that"
      ];
      const phrase = wittyPhrases[Math.floor(Math.random() * wittyPhrases.length)];
      return phrase + " " + content;
    }
    
    if (this.persona.tone === 'sassy') {
      const sassyPhrases = [
        "Well, obviously",
        "Let me work my magic, because clearly",
        "Alright, I'll handle this for you because",
        "Fine, I'll just"
      ];
      const phrase = sassyPhrases[Math.floor(Math.random() * sassyPhrases.length)];
      return phrase + " " + content;
    }
    
    if (this.persona.tone === 'friendly') {
      const friendlyPhrases = [
        "I'd be happy to help you with that!",
        "I'm excited to assist you!",
        "It's my pleasure to help with this.",
        "I'm right here to support you!"
      ];
      const phrase = friendlyPhrases[Math.floor(Math.random() * friendlyPhrases.length)];
      return phrase + " " + content;
    }
    
    return content;
  }

  // Ability implementations
  private async createNote(params: { content: string; title?: string; color?: string; tags?: string[] }): Promise<any> {
    if (!this.currentUserId) throw new Error('User not authenticated');
    this.logDebug('Creating note', params);

    const { data, error } = await supabase
      .from('notes')
      .insert({
        user_id: this.currentUserId,
        content: params.content,
        title: params.title || 'Untitled Note',
        color: params.color || 'blue',
        tags: params.tags || [],
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) {
      this.logDebug('Error creating note', error);
      throw error;
    }
    
    return data;
  }

  private async createStickyNote(params: { content: string; mood?: string; color?: string; position?: { x: number, y: number } }): Promise<any> {
    if (!this.currentUserId) throw new Error('User not authenticated');
    this.logDebug('Creating sticky note', params);

    const { data, error } = await supabase
      .from('sticky_notes')
      .insert({
        user_id: this.currentUserId,
        content: params.content,
        mood: params.mood || 'neutral',
        color: params.color || 'yellow',
        position_x: params.position?.x || 0,
        position_y: params.position?.y || 0,
        created_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) {
      this.logDebug('Error creating sticky note', error);
      throw error;
    }
    
    return data;
  }

  private async createTask(params: { description: string; priority?: string; dueDate?: string; category?: string }): Promise<any> {
    if (!this.currentUserId) throw new Error('User not authenticated');
    this.logDebug('Creating task', params);

    const { data, error } = await supabase
      .from('tasks')
      .insert({
        user_id: this.currentUserId,
        description: params.description,
        priority: params.priority || 'medium',
        due_date: params.dueDate ? new Date(params.dueDate).toISOString() : null,
        category: params.category || 'general',
        is_completed: false,
        created_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) {
      this.logDebug('Error creating task', error);
      throw error;
    }
    
    return data;
  }

  private async castSpell(params: { spellId?: string; prompt?: string }): Promise<any> {
    if (!this.currentUserId) throw new Error('User not authenticated');
    this.logDebug('Casting spell', params);

    let spell: Spell;

    if (params.spellId) {
      // Execute existing spell
      const { data, error } = await supabase
        .from('spells')
        .select('*')
        .eq('id', params.spellId)
        .eq('user_id', this.currentUserId)
        .single();

      if (error) {
        this.logDebug('Error fetching spell', error);
        throw error;
      }
      
      spell = {
        id: data.id,
        name: data.name,
        description: data.description,
        prompt: data.prompt,
        steps: data.steps || [],
        userId: data.user_id,
        isTemplate: false
      };
    } else if (params.prompt) {
      // Create new spell from prompt
      spell = await this.createSpellFromPrompt(params.prompt);
    } else {
      throw new Error('Either spellId or prompt is required');
    }

    return await this.executeSpell(spell);
  }

  private async createSpellFromPrompt(prompt: string): Promise<Spell> {
    this.logDebug('Creating spell from prompt', prompt);
    
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
        prompt: spell.prompt,
        steps: spell.steps
      })
      .select()
      .single();

    if (error) {
      this.logDebug('Error saving spell', error);
      throw error;
    }
    
    spell.id = data.id;

    return spell;
  }

  private async executeSpell(spell: Spell): Promise<any> {
    this.logDebug('Executing spell', spell);
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
          case 'create_note':
            result = await this.createNote(step.parameters);
            break;
          case 'create_task':
            result = await this.createTask(step.parameters);
            break;
          case 'schedule_event':
            result = await this.scheduleEvent(step.parameters);
            break;
          case 'send_email':
            result = await this.sendEmail(step.parameters);
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
        this.logDebug('Error executing spell step', { step, error });
      }
    }

    // Update spell in database
    await supabase
      .from('spells')
      .update({
        steps: spell.steps,
        execution_count: supabase.rpc('increment', { x: 1 }),
        updated_at: new Date().toISOString()
      })
      .eq('id', spell.id);

    return {
      spellId: spell.id,
      results,
      status: 'completed'
    };
  }

  private async executeSpellAction(prompt: string): Promise<any> {
    this.logDebug('Executing spell action', prompt);
    
    // This would contain the actual spell execution logic
    // For now, return a mock result
    return {
      message: `Executed spell action for: ${prompt}`,
      timestamp: new Date().toISOString()
    };
  }

  private async createCustomSpell(params: { name: string; description: string; prompt: string; steps?: SpellStep[] }): Promise<any> {
    if (!this.currentUserId) throw new Error('User not authenticated');
    this.logDebug('Creating custom spell', params);

    const steps = params.steps || [
      {
        id: crypto.randomUUID(),
        description: 'Analyze request',
        action: 'analyze',
        parameters: { prompt: params.prompt },
        status: 'pending'
      },
      {
        id: crypto.randomUUID(),
        description: 'Execute action',
        action: 'execute',
        parameters: { prompt: params.prompt },
        status: 'pending'
      }
    ];

    const { data, error } = await supabase
      .from('spells')
      .insert({
        user_id: this.currentUserId,
        name: params.name,
        description: params.description,
        prompt: params.prompt,
        steps: steps,
        is_active: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) {
      this.logDebug('Error creating custom spell', error);
      throw error;
    }
    
    return data;
  }

  private async searchWeb(params: { query: string }): Promise<any> {
    this.logDebug('Searching web', params);
    
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

  private async scheduleEvent(params: { title: string; date: string; time: string; description?: string; attendees?: string[] }): Promise<any> {
    this.logDebug('Scheduling event', params);
    
    // Mock calendar integration
    return {
      eventId: crypto.randomUUID(),
      title: params.title,
      date: params.date,
      time: params.time,
      description: params.description || '',
      attendees: params.attendees || [],
      status: 'scheduled'
    };
  }

  private async sendEmail(params: { to: string; subject: string; body: string; cc?: string[]; attachments?: any[] }): Promise<any> {
    this.logDebug('Sending email', params);
    
    // Mock email sending
    return {
      messageId: crypto.randomUUID(),
      to: params.to,
      subject: params.subject,
      cc: params.cc || [],
      attachments: params.attachments || [],
      status: 'sent'
    };
  }

  private async orderFood(params: { restaurant?: string; items: string[]; address: string; specialInstructions?: string }): Promise<any> {
    this.logDebug('Ordering food', params);
    
    // Mock food ordering
    return {
      orderId: crypto.randomUUID(),
      restaurant: params.restaurant || 'Auto-selected restaurant',
      items: params.items,
      address: params.address,
      specialInstructions: params.specialInstructions || '',
      estimatedDelivery: new Date(Date.now() + 45 * 60 * 1000).toISOString(),
      status: 'ordered'
    };
  }

  private async bookRide(params: { pickup: string; destination: string; rideType?: string; scheduledTime?: string }): Promise<any> {
    this.logDebug('Booking ride', params);
    
    // Mock ride booking
    return {
      rideId: crypto.randomUUID(),
      pickup: params.pickup,
      destination: params.destination,
      rideType: params.rideType || 'standard',
      scheduledTime: params.scheduledTime || new Date().toISOString(),
      estimatedArrival: new Date(Date.now() + 5 * 60 * 1000).toISOString(),
      status: 'booked'
    };
  }

  private async saveConversation(userId: string): Promise<void> {
    this.logDebug('Saving conversation', { userId, messageCount: this.conversationHistory.length });
    
    try {
      // Find existing conversation or create new one
      const { data: existingConversations, error: fetchError } = await supabase
        .from('conversations')
        .select('id, history')
        .eq('user_id', userId)
        .order('updated_at', { ascending: false })
        .limit(1);

      if (fetchError) throw fetchError;

      if (existingConversations && existingConversations.length > 0) {
        // Update existing conversation
        const { error } = await supabase
          .from('conversations')
          .update({
            history: this.conversationHistory,
            updated_at: new Date().toISOString()
          })
          .eq('id', existingConversations[0].id);

        if (error) throw error;
      } else {
        // Create new conversation
        const { error } = await supabase
          .from('conversations')
          .insert({
            user_id: userId,
            history: this.conversationHistory,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          });

        if (error) throw error;
      }
    } catch (error) {
      console.error('Failed to save conversation:', error);
      this.logDebug('Failed to save conversation', error);
    }
  }

  // Plugin management
  activatePlugin(pluginName: string): void {
    this.activePlugins.add(pluginName);
    this.logDebug('Plugin activated', pluginName);
  }

  deactivatePlugin(pluginName: string): void {
    this.activePlugins.delete(pluginName);
    this.logDebug('Plugin deactivated', pluginName);
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
    this.logDebug('Conversation cleared');
  }

  // Get wish memory
  getWishMemory(): NovaWish[] {
    return [...this.wishMemory];
  }

  // Debug logging
  private logDebug(message: string, data?: any): void {
    if (this.debugMode) {
      console.log(`[Nova Debug] ${message}`, data || '');
    }
  }

  // Self-healing functionality
  async selfHeal(): Promise<void> {
    this.logDebug('Starting self-healing process');
    
    try {
      // Check database connections
      const { data, error } = await supabase.from('spell_templates').select('count').single();
      
      if (error) {
        this.logDebug('Database connection issue detected', error);
        // Attempt to reconnect or fix
      }
      
      // Check for incomplete wishes
      const incompleteWishes = this.wishMemory.filter(wish => 
        wish.status === 'processing' && 
        wish.createdAt.getTime() < Date.now() - 5 * 60 * 1000 // Older than 5 minutes
      );
      
      for (const wish of incompleteWishes) {
        this.logDebug('Attempting to recover incomplete wish', wish);
        wish.status = 'failed';
        // Could attempt recovery here
      }
      
      this.logDebug('Self-healing process completed');
    } catch (error) {
      console.error('Self-healing failed:', error);
      this.logDebug('Self-healing failed', error);
    }
  }
}

// Singleton instance
export const novaAgent = new NovaAgent();