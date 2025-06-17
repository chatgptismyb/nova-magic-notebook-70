import React, { useState } from 'react';
import { X, Folder, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface CreateFolderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateFolder: (folderData: { name: string; color: string; icon: string }) => void;
}

const colors = [
  { name: 'Blue', value: 'blue', class: 'bg-blue-500' },
  { name: 'Red', value: 'red', class: 'bg-red-500' },
  { name: 'Yellow', value: 'yellow', class: 'bg-yellow-500' },
  { name: 'Green', value: 'green', class: 'bg-green-500' },
  { name: 'Purple', value: 'purple', class: 'bg-purple-500' },
  { name: 'Orange', value: 'orange', class: 'bg-orange-500' },
];

export const CreateFolderModal: React.FC<CreateFolderModalProps> = ({
  isOpen,
  onClose,
  onCreateFolder
}) => {
  const [name, setName] = useState('');
  const [selectedColor, setSelectedColor] = useState('blue');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);
    try {
      await onCreateFolder({
        name: name.trim(),
        color: selectedColor,
        icon: 'folder'
      });
      
      // Reset form
      setName('');
      setSelectedColor('blue');
      onClose();
    } catch (error) {
      console.error('Error creating folder:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md p-6 animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Create New Folder</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Folder Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Folder Name
            </label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter folder name"
              className="w-full"
              required
            />
          </div>

          {/* Color Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Folder Color
            </label>
            <div className="flex flex-wrap gap-3">
              {colors.map((color) => (
                <button
                  key={color.value}
                  type="button"
                  onClick={() => setSelectedColor(color.value)}
                  className={`
                    w-8 h-8 rounded-full transition-all duration-200
                    ${color.class}
                    ${selectedColor === color.value ? 'ring-2 ring-offset-2 ring-gray-400 scale-110' : ''}
                  `}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Preview */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="text-sm font-medium text-gray-700 mb-2">Preview</div>
            <div className={`
              p-4 rounded-xl border-2 
              ${selectedColor === 'blue' ? 'bg-blue-100 border-blue-200' : ''}
              ${selectedColor === 'red' ? 'bg-red-100 border-red-200' : ''}
              ${selectedColor === 'yellow' ? 'bg-yellow-100 border-yellow-200' : ''}
              ${selectedColor === 'green' ? 'bg-green-100 border-green-200' : ''}
              ${selectedColor === 'purple' ? 'bg-purple-100 border-purple-200' : ''}
              ${selectedColor === 'orange' ? 'bg-orange-100 border-orange-200' : ''}
            `}>
              <div className="flex items-center gap-3">
                <Folder className={`
                  w-6 h-6
                  ${selectedColor === 'blue' ? 'text-blue-600' : ''}
                  ${selectedColor === 'red' ? 'text-red-600' : ''}
                  ${selectedColor === 'yellow' ? 'text-yellow-600' : ''}
                  ${selectedColor === 'green' ? 'text-green-600' : ''}
                  ${selectedColor === 'purple' ? 'text-purple-600' : ''}
                  ${selectedColor === 'orange' ? 'text-orange-600' : ''}
                `} />
                <span className="font-medium">{name || 'Folder Name'}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!name.trim() || isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {isSubmitting ? 'Creating...' : 'Create Folder'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};