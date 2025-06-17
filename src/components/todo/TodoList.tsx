import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle, Plus, Trash2, Edit, MoreHorizontal, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/lib/supabase';

interface Task {
  id: string;
  description: string;
  is_completed: boolean;
  priority: string;
  due_date?: string;
  created_at: string;
  category?: string;
}

interface TodoListProps {
  noteId?: string;
  initialTasks?: Task[];
  standalone?: boolean;
}

export const TodoList: React.FC<TodoListProps> = ({
  noteId,
  initialTasks = [],
  standalone = false
}) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTaskText, setNewTaskText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentUserId] = useState('demo-user-123'); // In production, get from auth
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState('');

  useEffect(() => {
    if (standalone) {
      loadTasks();
    }
  }, [standalone]);

  const loadTasks = async () => {
    try {
      setIsLoading(true);
      
      const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .eq('user_id', currentUserId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTasks(data || []);
    } catch (error) {
      console.error('Error loading tasks:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddTask = async () => {
    if (!newTaskText.trim()) return;
    
    try {
      const newTask = {
        user_id: currentUserId,
        description: newTaskText.trim(),
        is_completed: false,
        priority: 'medium',
        note_id: noteId
      };
      
      const { data, error } = await supabase
        .from('tasks')
        .insert(newTask)
        .select()
        .single();

      if (error) throw error;
      
      setTasks([data, ...tasks]);
      setNewTaskText('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleToggleTask = async (taskId: string) => {
    try {
      const taskToUpdate = tasks.find(task => task.id === taskId);
      if (!taskToUpdate) return;
      
      const { error } = await supabase
        .from('tasks')
        .update({ is_completed: !taskToUpdate.is_completed })
        .eq('id', taskId);

      if (error) throw error;
      
      setTasks(tasks.map(task => 
        task.id === taskId 
          ? { ...task, is_completed: !task.is_completed } 
          : task
      ));
    } catch (error) {
      console.error('Error toggling task:', error);
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    try {
      const { error } = await supabase
        .from('tasks')
        .delete()
        .eq('id', taskId);

      if (error) throw error;
      
      setTasks(tasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const startEditingTask = (task: Task) => {
    setEditingTaskId(task.id);
    setEditingText(task.description);
  };

  const handleUpdateTask = async () => {
    if (!editingTaskId || !editingText.trim()) return;
    
    try {
      const { error } = await supabase
        .from('tasks')
        .update({ description: editingText.trim() })
        .eq('id', editingTaskId);

      if (error) throw error;
      
      setTasks(tasks.map(task => 
        task.id === editingTaskId 
          ? { ...task, description: editingText.trim() } 
          : task
      ));
      
      setEditingTaskId(null);
      setEditingText('');
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const cancelEditing = () => {
    setEditingTaskId(null);
    setEditingText('');
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  if (isLoading && standalone) {
    return (
      <div className="p-4 text-center">
        <div className="animate-spin w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-2"></div>
        <p className="text-gray-500">Loading tasks...</p>
      </div>
    );
  }

  return (
    <div className={`${standalone ? 'p-6 bg-white rounded-xl shadow-lg' : ''}`}>
      {standalone && (
        <h2 className="text-xl font-bold text-gray-900 mb-6">My Tasks</h2>
      )}
      
      {/* Add Task Input */}
      <div className="flex gap-2 mb-6">
        <Input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleAddTask();
            }
          }}
        />
        <Button 
          onClick={handleAddTask}
          disabled={!newTaskText.trim()}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      {/* Tasks List */}
      <div className="space-y-3">
        {tasks.length === 0 ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ListTodo className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-500">No tasks yet. Add your first task above!</p>
          </div>
        ) : (
          tasks.map((task) => (
            <div 
              key={task.id}
              className={`
                p-3 rounded-lg border border-gray-200 bg-white
                ${task.is_completed ? 'bg-gray-50' : ''}
                transition-all duration-200 hover:shadow-md group
              `}
            >
              {editingTaskId === task.id ? (
                <div className="flex gap-2">
                  <Input
                    type="text"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    className="flex-1"
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleUpdateTask();
                      } else if (e.key === 'Escape') {
                        cancelEditing();
                      }
                    }}
                  />
                  <Button 
                    onClick={handleUpdateTask}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    Save
                  </Button>
                  <Button 
                    onClick={cancelEditing}
                    variant="outline"
                  >
                    Cancel
                  </Button>
                </div>
              ) : (
                <div className="flex items-start gap-3">
                  <button 
                    onClick={() => handleToggleTask(task.id)}
                    className="mt-0.5 flex-shrink-0"
                  >
                    {task.is_completed ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-300" />
                    )}
                  </button>
                  
                  <div className="flex-1 min-w-0">
                    <p className={`
                      text-sm
                      ${task.is_completed ? 'text-gray-500 line-through' : 'text-gray-900'}
                    `}>
                      {task.description}
                    </p>
                    
                    {(task.due_date || task.category) && (
                      <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                        {task.due_date && (
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(task.due_date).toLocaleDateString()}</span>
                          </div>
                        )}
                        
                        {task.category && (
                          <div className="flex items-center gap-1">
                            <Tag className="w-3 h-3" />
                            <span>{task.category}</span>
                          </div>
                        )}
                        
                        <div className={`flex items-center gap-1 ${getPriorityColor(task.priority)}`}>
                          <span>●</span>
                          <span>{task.priority}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => startEditingTask(task)}
                      className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDeleteTask(task.id)}
                      className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// Add this component for the icon
const ListTodo = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <line x1="8" y1="6" x2="21" y2="6"></line>
    <line x1="8" y1="12" x2="21" y2="12"></line>
    <line x1="8" y1="18" x2="21" y2="18"></line>
    <line x1="3" y1="6" x2="3.01" y2="6"></line>
    <line x1="3" y1="12" x2="3.01" y2="12"></line>
    <line x1="3" y1="18" x2="3.01" y2="18"></line>
  </svg>
);