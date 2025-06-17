import React from 'react';
import { Plus, FileText, Folder, ListTodo, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface QuickActionsProps {
  onCreateFolder: (folderData: { name: string; color: string; icon: string }) => void;
  onCreateNote: (noteData: { title: string; content: string; color: string }) => void;
}

export const QuickActions: React.FC<QuickActionsProps> = ({
  onCreateFolder,
  onCreateNote
}) => {
  const handleQuickNote = () => {
    onCreateNote({
      title: 'Quick Note',
      content: '',
      color: 'blue'
    });
  };

  const handleQuickTodo = () => {
    onCreateNote({
      title: 'To-Do List',
      content: '- [ ] First task\n- [ ] Second task\n- [ ] Third task',
      color: 'green'
    });
  };

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          className="bg-white border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors"
          onClick={handleQuickNote}
        >
          <FileText className="w-4 h-4 mr-2 text-blue-500" />
          <span>New Note</span>
        </Button>
        
        <Button
          variant="outline"
          className="bg-white border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors"
          onClick={handleQuickTodo}
        >
          <ListTodo className="w-4 h-4 mr-2 text-green-500" />
          <span>New To-Do</span>
        </Button>
        
        <Button
          variant="outline"
          className="bg-white border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors"
        >
          <Folder className="w-4 h-4 mr-2 text-yellow-500" />
          <span>New Folder</span>
        </Button>
        
        <Button
          variant="outline"
          className="bg-white border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors"
        >
          <Star className="w-4 h-4 mr-2 text-purple-500" />
          <span>Favorites</span>
        </Button>
      </div>
    </div>
  );
};