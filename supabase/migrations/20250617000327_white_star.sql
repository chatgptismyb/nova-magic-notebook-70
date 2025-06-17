/*
  # Magic Notebook Database Schema

  1. New Tables
    - `users` - User authentication and profiles
    - `notes` - Rich text notes with markdown support
    - `sticky_notes` - Quick thoughts with mood tracking
    - `spells` - User-created automation workflows
    - `spell_templates` - Pre-built spell templates
    - `tasks` - Task management with completion tracking
    - `conversations` - Chat history with Nova
    - `subscriptions` - Stripe subscription management
    - `plugins` - User plugin configurations

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to access their own data
    - Secure plugin and subscription data

  3. Features
    - UUID primary keys for all tables
    - Timestamps for audit trails
    - JSONB for flexible conversation storage
    - Foreign key relationships for data integrity
*/

-- Users table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Notes table for rich text content
CREATE TABLE IF NOT EXISTS notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  title text DEFAULT 'Untitled Note',
  content text DEFAULT '',
  tags text[] DEFAULT '{}',
  is_favorite boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Sticky notes for quick thoughts
CREATE TABLE IF NOT EXISTS sticky_notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  content text NOT NULL,
  mood text DEFAULT 'neutral',
  color text DEFAULT 'yellow',
  position_x integer DEFAULT 0,
  position_y integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Spells for automation workflows
CREATE TABLE IF NOT EXISTS spells (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  name text NOT NULL,
  description text DEFAULT '',
  prompt text NOT NULL,
  steps jsonb DEFAULT '[]',
  is_active boolean DEFAULT true,
  execution_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Spell templates for common workflows
CREATE TABLE IF NOT EXISTS spell_templates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text DEFAULT '',
  prompt text NOT NULL,
  category text DEFAULT 'general',
  difficulty text DEFAULT 'beginner',
  usage_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Tasks for todo management
CREATE TABLE IF NOT EXISTS tasks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  description text NOT NULL,
  is_completed boolean DEFAULT false,
  priority text DEFAULT 'medium',
  due_date timestamptz,
  spell_id uuid REFERENCES spells(id) ON DELETE SET NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Conversations for Nova chat history
CREATE TABLE IF NOT EXISTS conversations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  title text DEFAULT 'New Conversation',
  history jsonb DEFAULT '[]',
  context jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Subscriptions for Stripe integration
CREATE TABLE IF NOT EXISTS subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  tier text NOT NULL CHECK (tier IN ('free', 'pro', 'wizard')),
  stripe_subscription_id text UNIQUE,
  stripe_customer_id text,
  status text DEFAULT 'active',
  current_period_start timestamptz,
  current_period_end timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Plugins for external integrations
CREATE TABLE IF NOT EXISTS plugins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  name text NOT NULL,
  description text DEFAULT '',
  is_active boolean DEFAULT false,
  configuration jsonb DEFAULT '{}',
  last_used_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE sticky_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE spells ENABLE ROW LEVEL SECURITY;
ALTER TABLE spell_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE plugins ENABLE ROW LEVEL SECURITY;

-- RLS Policies for users
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- RLS Policies for notes
CREATE POLICY "Users can manage own notes"
  ON notes
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- RLS Policies for sticky_notes
CREATE POLICY "Users can manage own sticky notes"
  ON sticky_notes
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- RLS Policies for spells
CREATE POLICY "Users can manage own spells"
  ON spells
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- RLS Policies for spell_templates (public read)
CREATE POLICY "Anyone can read spell templates"
  ON spell_templates
  FOR SELECT
  TO authenticated
  USING (true);

-- RLS Policies for tasks
CREATE POLICY "Users can manage own tasks"
  ON tasks
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- RLS Policies for conversations
CREATE POLICY "Users can manage own conversations"
  ON conversations
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- RLS Policies for subscriptions
CREATE POLICY "Users can read own subscription"
  ON subscriptions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own subscription"
  ON subscriptions
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- RLS Policies for plugins
CREATE POLICY "Users can manage own plugins"
  ON plugins
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Insert default spell templates
INSERT INTO spell_templates (name, description, prompt, category) VALUES
  (
    'Daily Stand-up Summary',
    'Summarizes your completed tasks and plans for the day',
    'Review my completed tasks from yesterday and my to-do list for today. Generate a concise summary for my team''s daily stand-up meeting.',
    'productivity'
  ),
  (
    'Brainstorming Session Starter',
    'Generates creative ideas for a given topic',
    'I need to brainstorm ideas for [topic]. Give me 5 creative and unconventional ideas to get me started.',
    'creativity'
  ),
  (
    'Email Follow-up',
    'Drafts a polite follow-up email',
    'Draft a friendly follow-up email to [recipient''s name] about [subject]. I haven''t heard back from them in a week.',
    'communication'
  ),
  (
    'Social Media Post from Note',
    'Converts a note into a social media post',
    'Take the key points from my note titled ''[note title]'' and draft a Twitter thread.',
    'social'
  ),
  (
    'Meeting Agenda Creator',
    'Creates a structured meeting agenda',
    'Create a meeting agenda for [meeting topic] with [participants]. Include time slots and discussion points.',
    'productivity'
  ),
  (
    'Project Planning Wizard',
    'Breaks down projects into actionable tasks',
    'Help me plan a project for [project description]. Break it down into phases, tasks, and timelines.',
    'planning'
  );

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_notes_user_id ON notes(user_id);
CREATE INDEX IF NOT EXISTS idx_notes_created_at ON notes(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_sticky_notes_user_id ON sticky_notes(user_id);
CREATE INDEX IF NOT EXISTS idx_spells_user_id ON spells(user_id);
CREATE INDEX IF NOT EXISTS idx_spells_active ON spells(is_active);
CREATE INDEX IF NOT EXISTS idx_tasks_user_id ON tasks(user_id);
CREATE INDEX IF NOT EXISTS idx_tasks_completed ON tasks(is_completed);
CREATE INDEX IF NOT EXISTS idx_conversations_user_id ON conversations(user_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_plugins_user_id ON plugins(user_id);
CREATE INDEX IF NOT EXISTS idx_plugins_active ON plugins(is_active);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Add updated_at triggers
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_notes_updated_at BEFORE UPDATE ON notes FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_sticky_notes_updated_at BEFORE UPDATE ON sticky_notes FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_spells_updated_at BEFORE UPDATE ON spells FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_tasks_updated_at BEFORE UPDATE ON tasks FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_conversations_updated_at BEFORE UPDATE ON conversations FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_subscriptions_updated_at BEFORE UPDATE ON subscriptions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_plugins_updated_at BEFORE UPDATE ON plugins FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();