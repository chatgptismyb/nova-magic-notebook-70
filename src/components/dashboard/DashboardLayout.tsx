import React, { useState, useEffect } from 'react';
import { Search, Plus, Grid, List, Filter, Bell, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FolderGrid } from './FolderGrid';
import { RecentNotes } from './RecentNotes';
import { QuickActions } from './QuickActions';
import { supabase } from '@/lib/supabase';

interface Folder {
  id: string;
  name: string;
  color: string;
  icon: string;
  noteCount: number;
  created_at: string;
}

interface Note {
  id: string;
  title: string;
  content: string;
  color: string;
  folder_id?: string;
  created_at: string;
  updated_at: string;
}

export const DashboardLayout = () => {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [recentNotes, setRecentNotes] = useState<Note[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isLoading, setIsLoading] = useState(true);
  const [currentUserId] = useState('demo-user-123'); // In production, get from auth

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setIsLoading(true);
      
      // Load folders with note counts
      const { data: foldersData, error: foldersError } = await supabase
        .from('folders')
        .select(`
          *,
          notes(count)
        `)
        .eq('user_id', currentUserId);

      if (foldersError) throw foldersError;

      // Transform folder data to include note counts
      const foldersWithCounts = foldersData?.map(folder => ({
        ...folder,
        noteCount: folder.notes?.[0]?.count || 0
      })) || [];

      setFolders(foldersWithCounts);

      // Load recent notes
      const { data: notesData, error: notesError } = await supabase
        .from('notes')
        .select('*')
        .eq('user_id', currentUserId)
        .order('updated_at', { ascending: false })
        .limit(6);

      if (notesError) throw notesError;
      setRecentNotes(notesData || []);

    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateFolder = async (folderData: Partial<Folder>) => {
    try {
      const { data, error } = await supabase
        .from('folders')
        .insert({
          user_id: currentUserId,
          name: folderData.name,
          color: folderData.color || 'blue',
          icon: folderData.icon || 'folder'
        })
        .select()
        .single();

      if (error) throw error;
      
      setFolders(prev => [...prev, { ...data, noteCount: 0 }]);
    } catch (error) {
      console.error('Error creating folder:', error);
    }
  };

  const handleCreateNote = async (noteData: Partial<Note>) => {
    try {
      const { data, error } = await supabase
        .from('notes')
        .insert({
          user_id: currentUserId,
          title: noteData.title || 'Untitled Note',
          content: noteData.content || '',
          color: noteData.color || 'blue',
          folder_id: noteData.folder_id
        })
        .select()
        .single();

      if (error) throw error;
      
      setRecentNotes(prev => [data, ...prev.slice(0, 5)]);
      
      // Update folder note count if note was added to a folder
      if (noteData.folder_id) {
        setFolders(prev => prev.map(folder => 
          folder.id === noteData.folder_id 
            ? { ...folder, noteCount: folder.noteCount + 1 }
            : folder
        ));
      }
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  const filteredFolders = folders.filter(folder =>
    folder.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredNotes = recentNotes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <span className="text-white text-2xl">📝</span>
          </div>
          <p className="text-gray-600 font-medium">Loading your workspace...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">MY NOTES</h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64 bg-gray-50 border-gray-200 focus:bg-white"
              />
            </div>

            {/* View Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="px-3"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="px-3"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>

            {/* Actions */}
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            
            <Button variant="outline" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
            
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-6">
        {/* Quick Actions */}
        <QuickActions 
          onCreateFolder={handleCreateFolder}
          onCreateNote={handleCreateNote}
        />

        {/* Recent Folders Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Folders</h2>
            <div className="flex gap-2 text-sm text-gray-500">
              <button className="hover:text-gray-700">Todays</button>
              <button className="hover:text-gray-700">This Week</button>
              <button className="hover:text-gray-700">This Month</button>
            </div>
          </div>
          
          <FolderGrid 
            folders={filteredFolders}
            viewMode={viewMode}
            onFolderClick={(folder) => console.log('Open folder:', folder)}
            onCreateFolder={handleCreateFolder}
          />
        </section>

        {/* My Notes Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">My Notes</h2>
            <div className="flex gap-2 text-sm text-gray-500">
              <button className="hover:text-gray-700">Todays</button>
              <button className="hover:text-gray-700">This Week</button>
              <button className="hover:text-gray-700">This Month</button>
            </div>
          </div>
          
          <RecentNotes 
            notes={filteredNotes}
            viewMode={viewMode}
            onNoteClick={(note) => console.log('Open note:', note)}
            onCreateNote={handleCreateNote}
          />
        </section>
      </main>
    </div>
  );
};