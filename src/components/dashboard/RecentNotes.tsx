import React, { useState } from 'react';
import { Plus, MoreHorizontal, FileText, Clock, Star, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CreateNoteModal } from './CreateNoteModal';

interface Note {
  id: string;
  title: string;
  content: string;
  color: string;
  folder_id?: string;
  created_at: string;
  updated_at: string;
  tags?: string[];
  is_favorite?: boolean;
}

interface RecentNotesProps {
  notes: Note[];
  viewMode: 'grid' | 'list';
  onNoteClick: (note: Note) => void;
  onCreateNote: (noteData: Partial<Note>) => void;
}

const colorMap = {
  blue: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
  red: 'bg-red-50 border-red-200 hover:bg-red-100',
  yellow: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
  green: 'bg-green-50 border-green-200 hover:bg-green-100',
  purple: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
  orange: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
};

export const RecentNotes: React.FC<RecentNotesProps> = ({
  notes,
  viewMode,
  onNoteClick,
  onCreateNote
}) => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`;
    return date.toLocaleDateString();
  };

  const NoteCard = ({ note }: { note: Note }) => {
    const colorClass = colorMap[note.color as keyof typeof colorMap] || colorMap.blue;
    
    return (
      <div
        onClick={() => onNoteClick(note)}
        className={`
          relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
          hover:scale-105 hover:shadow-lg group min-h-[160px] flex flex-col
          ${colorClass}
        `}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-gray-600" />
            {note.is_favorite && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
          </div>
          <button className="opacity-0 group-hover:opacity-100 transition-opacity">
            <MoreHorizontal className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-semibold text-sm mb-2 line-clamp-2">{note.title}</h3>
          <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
            {note.content.substring(0, 100)}...
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-gray-400" />
            <span className="text-xs text-gray-500">{formatDate(note.updated_at)}</span>
          </div>
          {note.tags && note.tags.length > 0 && (
            <div className="flex items-center gap-1">
              <Tag className="w-3 h-3 text-gray-400" />
              <span className="text-xs text-gray-500">{note.tags.length}</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  const NewNoteCard = () => (
    <div
      onClick={() => setShowCreateModal(true)}
      className="
        relative p-4 rounded-xl border-2 border-dashed border-gray-300 
        cursor-pointer transition-all duration-200 hover:border-gray-400 
        hover:bg-gray-50 group flex flex-col items-center justify-center
        min-h-[160px] bg-white
      "
    >
      <Plus className="w-8 h-8 text-gray-400 group-hover:text-gray-600 mb-2" />
      <span className="text-sm text-gray-500 group-hover:text-gray-700 font-medium">
        New Note
      </span>
    </div>
  );

  if (viewMode === 'list') {
    return (
      <div className="space-y-2">
        {/* New Note Button */}
        <button
          onClick={() => setShowCreateModal(true)}
          className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors flex items-center gap-3"
        >
          <Plus className="w-5 h-5 text-gray-400" />
          <span className="text-sm text-gray-500 font-medium">New Note</span>
        </button>

        {/* Notes List */}
        {notes.map((note) => {
          const colorClass = colorMap[note.color as keyof typeof colorMap] || colorMap.blue;
          
          return (
            <div
              key={note.id}
              onClick={() => onNoteClick(note)}
              className={`
                p-4 rounded-lg border cursor-pointer transition-all duration-200
                hover:shadow-md group ${colorClass}
              `}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-4 h-4 text-gray-600" />
                    <h3 className="font-semibold text-sm">{note.title}</h3>
                    {note.is_favorite && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                    {note.content.substring(0, 150)}...
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{formatDate(note.updated_at)}</span>
                    </div>
                    {note.tags && note.tags.length > 0 && (
                      <div className="flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        <span>{note.tags.length} tags</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <button className="opacity-0 group-hover:opacity-100 transition-opacity ml-4">
                  <MoreHorizontal className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* New Note Card */}
        <NewNoteCard />
        
        {/* Existing Notes */}
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>

      {/* Create Note Modal */}
      <CreateNoteModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreateNote={onCreateNote}
      />
    </>
  );
};