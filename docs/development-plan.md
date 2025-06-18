# Magic Notebook Project Plan

## Project Overview

We'll build a magical note-taking and productivity assistant app: **Magic Notebook**, powered by the Nova AI agent. The app is a card-based, dynamic canvas for managing notes, tasks, folders, and automations called "Spells."

### Key Features:

1. Card-based notes with drag-and-drop layout
2. Folder organization with color and icon customization
3. Smart to-do task lists with categorization
4. Spell system for automating tasks
5. Real-time collaboration with Nova
6. Emotion-aware interactions from Nova

---

## Phase 1: Infrastructure Setup

### 1.1 Database Schema (PostgreSQL via Supabase)

```sql
-- Folder support
CREATE TABLE folders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  color TEXT DEFAULT 'purple',
  icon TEXT DEFAULT 'magic',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enhanced notes
ALTER TABLE notes ADD COLUMN folder_id UUID REFERENCES folders(id);
ALTER TABLE notes ADD COLUMN color TEXT DEFAULT 'lavender';
ALTER TABLE notes ADD COLUMN position_x INTEGER DEFAULT 0;
ALTER TABLE notes ADD COLUMN position_y INTEGER DEFAULT 0;
ALTER TABLE notes ADD COLUMN note_type TEXT DEFAULT 'magic';

-- Task integration
ALTER TABLE tasks ADD COLUMN note_id UUID REFERENCES notes(id);
ALTER TABLE tasks ADD COLUMN position INTEGER DEFAULT 0;
ALTER TABLE tasks ADD COLUMN category TEXT DEFAULT 'spell';
```

### 1.2 API Endpoints

```ts
/api/folders
  GET    /           - List user folders
  POST   /           - Create folder
  PUT    /:id        - Update folder
  DELETE /:id        - Delete folder

/api/notes
  GET    /           - List notes
  GET    /folder/:id - Notes in folder
  POST   /           - Create note
  PUT    /:id        - Update note
  DELETE /:id        - Delete note
  POST   /:id/move   - Move note

/api/tasks
  GET    /           - List tasks
  POST   /           - Create task
  PUT    /:id        - Update task
  DELETE /:id        - Delete task
  POST   /:id/toggle - Toggle complete
```

---

## Phase 2: UI Component Architecture

### 2.1 Main Interface

```ts
- NovaCommandBar (spell input)
- NovaStatusBar (feedback + suggestions)
- DashboardHeader
- FolderGrid
- RecentNotesSection
- SearchBar
```

### 2.2 Note & Folder Components

```ts
NoteCard, NoteEditor, NotePreview, NoteTags, NoteActions
FolderCard, FolderModal, FolderSettings, NewFolderButton
```

### 2.3 Spell Automation System

```ts
SpellInputBox, SpellHistoryPanel, SpellResultCards
```

---

## Phase 3: Tasks Breakdown

### 📁 Folder System

* Create and manage folders with color and icon customization
* Display folder grid in dashboard
* Folder-level filtering of notes

### 📝 Note Management

* Create/edit/delete draggable note cards
* Assign to folders, move with drag-and-drop
* Sticky notes, todos, markdown support

### ✅ To-Do List

* Smart task notes with sub-tasks and categories
* Completion tracking and status syncing

### 🧠 Nova AI Features

* Real-time interaction via NovaCommandBar
* Emotional feedback and smart suggestions
* Agent-to-agent task routing (Bolt, parser, deployer)

### 💫 Real-Time Collaboration

* WebSocket-based updates
* Shared editing sessions
* Presence + typing indicators

---

## Phase 4: Advanced Features

### 🔍 Search & Filtering

* Full-text + semantic search
* Folder + tag filters
* Advanced spell search

### 🧙 Spell System

* Reusable automation templates
* Spell history + edits
* Nova executes wishes

### 🛠️ Import/Export

* Export: Markdown, PDF, image
* Import: Notion, Obsidian
* Backup & restore

---

## Phase 5: QA & Testing

### 🔬 Testing

* Unit + Integration via Jest
* Mobile + Desktop responsiveness
* Security: XSS, auth, validation

### ⚙️ Tooling

* Supabase RLS
* Vite + Tailwind
* ESLint, Prettier
* Storybook
* React Query, Hook Form

---

## Phase 6: Agent Prompt System

### 🔧 Agent Prompt Library

1. **Project Plan Prompt** – End-to-end app plan
2. **Database Schema Prompt** – Supabase design
3. **API Design Prompt** – REST endpoints
4. **Nova Abilities Prompt** – All features Nova supports
5. **Bolt Agent Prompt** – Build/code/test anything
6. **Payment/Subscription Prompt** – Stripe, wallet
7. **UI Design Prompt** – Magical interface instructions
8. **Command Bar Prompt** – Parsing freeform input
9. **Spell System Prompt** – Automations framework
10. **Testing + Debugging Prompt** – Smart retry loop
11. **Reasoning Prompt** – Thought process + feedback
12. **Note Parser Prompt** – Styling to structure
13. **Brand/Avatar Prompt** – Purple wizard girl
14. **Mobile App Prompt** – Expo/TS native version
15. **Agent Network Prompt** – CrewAI-style roles

---

## Timeline

### Week 1-2

* Database + APIs
* Command Bar parser

### Week 3-4

* Notes, folders
* Nova integration begins

### Week 5-6

* Real-time + spellbook
* Full UI polish

### Week 7-8

* Testing, docs
* Live deployment

---

## UX Goals

* App feels alive (Nova interacts)
* Zero-friction spell input
* Delightful, responsive UI
* Magical tone and animations

Let me know if you want each agent prompt exported individually or bundled.
