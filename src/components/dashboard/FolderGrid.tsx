import React, { useState } from 'react';
import { Plus, MoreHorizontal, Folder, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CreateFolderModal } from './CreateFolderModal';

interface Folder {
  id: string;
  name: string;
  color: string;
  icon: string;
  noteCount: number;
  created_at: string;
}

interface FolderGridProps {
  folders: Folder[];
  viewMode: 'grid' | 'list';
  onFolderClick: (folder: Folder) => void;
  onCreateFolder: (folderData: Partial<Folder>) => void;
}

const colorMap = {
  blue: 'bg-blue-100 border-blue-200 text-blue-800',
  red: 'bg-red-100 border-red-200 text-red-800',
  yellow: 'bg-yellow-100 border-yellow-200 text-yellow-800',
  green: 'bg-green-100 border-green-200 text-green-800',
  purple: 'bg-purple-100 border-purple-200 text-purple-800',
  orange: 'bg-orange-100 border-orange-200 text-orange-800',
};

export const FolderGrid: React.FC<FolderGridProps> = ({
  folders,
  viewMode,
  onFolderClick,
  onCreateFolder
}) => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const FolderCard = ({ folder }: { folder: Folder }) => {
    const colorClass = colorMap[folder.color as keyof typeof colorMap] || colorMap.blue;
    
    return (
      <div
        onClick={() => onFolderClick(folder)}
        className={`
          relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
          hover:scale-105 hover:shadow-lg group
          ${colorClass}
        `}
      >
        {/* More Options */}
        <button className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreHorizontal className="w-4 h-4 text-gray-600" />
        </button>

        {/* Folder Icon */}
        <div className="mb-3">
          <Folder className="w-8 h-8" />
        </div>

        {/* Folder Info */}
        <div>
          <h3 className="font-semibold text-sm mb-1">{folder.name}</h3>
          <p className="text-xs opacity-70">{folder.noteCount} notes</p>
        </div>
      </div>
    );
  };

  const NewFolderCard = () => (
    <div
      onClick={() => setShowCreateModal(true)}
      className="
        relative p-4 rounded-xl border-2 border-dashed border-gray-300 
        cursor-pointer transition-all duration-200 hover:border-gray-400 
        hover:bg-gray-50 group flex flex-col items-center justify-center
        min-h-[120px] bg-white
      "
    >
      <Plus className="w-8 h-8 text-gray-400 group-hover:text-gray-600 mb-2" />
      <span className="text-sm text-gray-500 group-hover:text-gray-700 font-medium">
        New Folder
      </span>
    </div>
  );

  if (viewMode === 'list') {
    return (
      <div className="space-y-2">
        {/* New Folder Button */}
        <button
          onClick={() => setShowCreateModal(true)}
          className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors flex items-center gap-3"
        >
          <Plus className="w-5 h-5 text-gray-400" />
          <span className="text-sm text-gray-500 font-medium">New Folder</span>
        </button>

        {/* Folder List */}
        {folders.map((folder) => {
          const colorClass = colorMap[folder.color as keyof typeof colorMap] || colorMap.blue;
          
          return (
            <div
              key={folder.id}
              onClick={() => onFolderClick(folder)}
              className={`
                p-3 rounded-lg border cursor-pointer transition-all duration-200
                hover:shadow-md flex items-center justify-between group
                ${colorClass}
              `}
            >
              <div className="flex items-center gap-3">
                <Folder className="w-5 h-5" />
                <div>
                  <h3 className="font-semibold text-sm">{folder.name}</h3>
                  <p className="text-xs opacity-70">{folder.noteCount} notes</p>
                </div>
              </div>
              
              <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreHorizontal className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {/* New Folder Card */}
        <NewFolderCard />
        
        {/* Existing Folders */}
        {folders.map((folder) => (
          <FolderCard key={folder.id} folder={folder} />
        ))}
      </div>

      {/* Create Folder Modal */}
      <CreateFolderModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreateFolder={onCreateFolder}
      />
    </>
  );
};