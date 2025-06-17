/*
  # Enhanced Magic Notebook Schema - Fixed Migration

  1. New Tables
    - `folders` - Organize notes into folders with colors and icons

  2. Enhanced Tables
    - `notes` - Add folder_id, color, position, and note_type columns
    - `tasks` - Add note_id, position, and category columns

  3. Security
    - Enable RLS on folders table
    - Add policies for folder management (with existence check)

  4. Performance
    - Add indexes for better query performance
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
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'notes' AND column_name = 'folder_id'
  ) THEN
    ALTER TABLE notes ADD COLUMN folder_id uuid REFERENCES folders(id) ON DELETE SET NULL;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'notes' AND column_name = 'color'
  ) THEN
    ALTER TABLE notes ADD COLUMN color text DEFAULT 'blue';
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'notes' AND column_name = 'position_x'
  ) THEN
    ALTER TABLE notes ADD COLUMN position_x integer DEFAULT 0;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'notes' AND column_name = 'position_y'
  ) THEN
    ALTER TABLE notes ADD COLUMN position_y integer DEFAULT 0;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'notes' AND column_name = 'note_type'
  ) THEN
    ALTER TABLE notes ADD COLUMN note_type text DEFAULT 'standard';
  END IF;
END $$;

-- Enhance tasks table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'tasks' AND column_name = 'note_id'
  ) THEN
    ALTER TABLE tasks ADD COLUMN note_id uuid REFERENCES notes(id) ON DELETE CASCADE;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'tasks' AND column_name = 'position'
  ) THEN
    ALTER TABLE tasks ADD COLUMN position integer DEFAULT 0;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'tasks' AND column_name = 'category'
  ) THEN
    ALTER TABLE tasks ADD COLUMN category text DEFAULT 'general';
  END IF;
END $$;

-- Enable RLS on folders
DO $$
BEGIN
  -- Check if RLS is already enabled
  IF NOT EXISTS (
    SELECT 1 FROM pg_tables 
    WHERE tablename = 'folders' AND rowsecurity = true
  ) THEN
    ALTER TABLE folders ENABLE ROW LEVEL SECURITY;
  END IF;
END $$;

-- RLS Policies for folders - Check if policy exists first
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'folders' AND policyname = 'Users can manage own folders'
  ) THEN
    CREATE POLICY "Users can manage own folders"
      ON folders
      FOR ALL
      TO authenticated
      USING (auth.uid() = user_id);
  END IF;
END $$;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_folders_user_id ON folders(user_id);
CREATE INDEX IF NOT EXISTS idx_notes_folder_id ON notes(folder_id);
CREATE INDEX IF NOT EXISTS idx_tasks_note_id ON tasks(note_id);

-- Add updated_at trigger for folders
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.triggers 
    WHERE trigger_name = 'update_folders_updated_at'
  ) THEN
    CREATE TRIGGER update_folders_updated_at 
      BEFORE UPDATE ON folders 
      FOR EACH ROW 
      EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;

-- Remove the sample data insert that uses hardcoded user IDs
-- Instead of:
-- INSERT INTO folders (user_id, name, color, icon) VALUES
--   ('demo-user-123', 'Work', 'blue', 'briefcase'),
--   ('demo-user-123', 'Personal', 'green', 'user'),
--   ('demo-user-123', 'Ideas', 'purple', 'lightbulb'),
--   ('demo-user-123', 'Projects', 'orange', 'folder');