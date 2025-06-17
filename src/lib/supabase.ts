import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          password_hash: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          password_hash: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          password_hash?: string;
          created_at?: string;
        };
      };
      notes: {
        Row: {
          id: string;
          user_id: string;
          content: string;
          title?: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          content: string;
          title?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          content?: string;
          title?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      sticky_notes: {
        Row: {
          id: string;
          user_id: string;
          content: string;
          mood: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          content: string;
          mood?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          content?: string;
          mood?: string;
          created_at?: string;
        };
      };
      spells: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          description: string;
          prompt: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          description: string;
          prompt: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          description?: string;
          prompt?: string;
          created_at?: string;
        };
      };
      spell_templates: {
        Row: {
          id: string;
          name: string;
          description: string;
          prompt: string;
        };
        Insert: {
          id?: string;
          name: string;
          description: string;
          prompt: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string;
          prompt?: string;
        };
      };
      tasks: {
        Row: {
          id: string;
          user_id: string;
          description: string;
          is_completed: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          description: string;
          is_completed?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          description?: string;
          is_completed?: boolean;
          created_at?: string;
        };
      };
      conversations: {
        Row: {
          id: string;
          user_id: string;
          history: any;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          history: any;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          history?: any;
          created_at?: string;
          updated_at?: string;
        };
      };
      subscriptions: {
        Row: {
          id: string;
          user_id: string;
          tier: string;
          stripe_subscription_id: string;
          status: string;
          current_period_end: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          tier: string;
          stripe_subscription_id: string;
          status: string;
          current_period_end: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          tier?: string;
          stripe_subscription_id?: string;
          status?: string;
          current_period_end?: string;
        };
      };
      plugins: {
        Row: {
          id: string;
          name: string;
          description: string;
          is_active: boolean;
          user_id: string;
        };
        Insert: {
          id?: string;
          name: string;
          description: string;
          is_active?: boolean;
          user_id: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string;
          is_active?: boolean;
          user_id?: string;
        };
      };
    };
  };
};