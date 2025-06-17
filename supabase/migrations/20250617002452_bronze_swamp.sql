/*
  # Add Folders and Enhance Notes

  1. New Tables
    - `folders` - For organizing notes into collections
  
  2. Changes
    - Add folder_id to notes table
    - Add color and position fields to notes
    - Add note_type field to notes
    - Enhance tasks table with note_id, position, and category
  
  3. Security
    - Enable RLS on new tables
    - Add policies for authenticated users
*/

-- Create folders table
CREATE TABLE IF NOT EXISTS folders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  name text NOT NULL,
  color text DEFAULT 'blue',
  icon text DEFAULT 'folder',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enhance notes table
ALTER TABLE notes ADD COLUMN IF NOT EXISTS folder_id uuid REFERENCES folders(id) ON DELETE SET NULL;
ALTER TABLE notes ADD COLUMN IF NOT EXISTS color text DEFAULT 'blue';
ALTER TABLE notes ADD COLUMN IF NOT EXISTS position_x integer DEFAULT 0;
ALTER TABLE notes ADD COLUMN IF NOT EXISTS position_y integer DEFAULT 0;
ALTER TABLE notes ADD COLUMN IF NOT EXISTS note_type text DEFAULT 'standard';

-- Enhance tasks table
ALTER TABLE tasks ADD COLUMN IF NOT EXISTS note_id uuid REFERENCES notes(id) ON DELETE CASCADE;
ALTER TABLE tasks ADD COLUMN IF NOT EXISTS position integer DEFAULT 0;
ALTER TABLE tasks ADD COLUMN IF NOT EXISTS category text DEFAULT 'general';

-- Enable RLS on folders
ALTER TABLE folders ENABLE ROW LEVEL SECURITY;

-- RLS Policies for folders
CREATE POLICY "Users can manage own folders"
  ON folders
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_folders_user_id ON folders(user_id);
CREATE INDEX IF NOT EXISTS idx_notes_folder_id ON notes(folder_id);
CREATE INDEX IF NOT EXISTS idx_tasks_note_id ON tasks(note_id);

-- Add updated_at trigger for folders
CREATE TRIGGER update_folders_updated_at BEFORE UPDATE ON folders FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample folders
INSERT INTO folders (user_id, name, color, icon) VALUES
  ('demo-user-123', 'Work', 'blue', 'briefcase'),
  ('demo-user-123', 'Personal', 'green', 'user'),
  ('demo-user-123', 'Ideas', 'purple', 'lightbulb'),
  ('demo-user-123', 'Projects', 'orange', 'folder');