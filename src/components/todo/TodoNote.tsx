import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle, Plus, Trash2, Edit, MoreHorizontal, Calendar, Tag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';

interface Task {
  id: string;
  description: string;
  is_completed: boolean;
  priority: string;
  due_date?: string;
  created_at: string;
  note_id?: string;
}

interface Note {
  id: string;
  title: string;
  content: string;
  color: string;
  created_at: string;
  updated_at: string;
}

export const TodoNote = () => {
  const { noteId } = useParams<{ noteId: string }>();
  const navigate = useNavigate();
  const [note, setNote] = useState<Note | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkAuthAndLoadData();
  }, [noteId]);

  const checkAuthAndLoadData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Get current user
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      
      if (authError) {
        console.error('Auth error:', authError);
        setError('Authentication failed');
        navigate('/login');
        return;
      }
      
      if (!user) {
        setError('No authenticated user');
        navigate('/login');
        return;
      }
      
      setCurrentUserId(user.id);
      
      if (noteId) {
        await loadNoteAndTasks(user.id, noteId);
      } else {
        setError('No note ID provided');
      }
      
    } catch (error) {
      console.error('Error checking auth:', error);
      setError('Failed to authenticate');
      navigate('/login');
    } finally {
      setIsLoading(false);
    }
  };

  const loadNoteAndTasks = async (userId: string, noteId: string) => {
    try {
      // Validate that noteId looks like a UUID
      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      if (!uuidRegex.test(noteId)) {
        setError('Invalid note ID format');
        return;
      }
      
      // Load note
      const { data: noteData, error: noteError } = await supabase
        .from('notes')
        .select('*')
        .eq('id', noteId)
        .eq('user_id', userId)
        .single();

      if (noteError) {
        if (noteError.code === 'PGRST116') {
          setError('Note not found or you do not have access to it');
        } else {
          throw noteError;
        }
        return;
      }
      
      setNote(noteData);

      // Load tasks
      const { data: tasksData, error: tasksError } = await supabase
        .from('tasks')
        .select('*')
        .eq('note_id', noteId)
        .order('created_at', { ascending: false });

      if (tasksError) throw tasksError;
      setTasks(tasksData || []);
    } catch (error) {
      console.error('Error loading note and tasks:', error);
      setError('Failed to load note and tasks');
    }
  };

  const handleAddTask = async () => {
    if (!newTaskText.trim() || !noteId || !currentUserId) return;
    
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

  const getNoteColorClass = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-50 border-blue-200';
      case 'red': return 'bg-red-50 border-red-200';
      case 'yellow': return 'bg-yellow-50 border-yellow-200';
      case 'green': return 'bg-green-50 border-green-200';
      case 'purple': return 'bg-purple-50 border-purple-200';
      case 'orange': return 'bg-orange-50 border-orange-200';
      default: return 'bg-blue-50 border-blue-200';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <ListTodo className="w-8 h-8 text-white" />
          </div>
          <p className="text-gray-600 font-medium">Loading your to-do list...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-red-500 text-2xl">!</span>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Error</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link to="/dashboard">
            <Button>Return to Dashboard</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (!note) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-red-500 text-2xl">!</span>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Note Not Found</h2>
          <p className="text-gray-600 mb-6">The to-do list you're looking for doesn't exist or you don't have access to it.</p>
          <Link to="/dashboard">
            <Button>Return to Dashboard</Button>
          </Link>
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
            <Link to="/dashboard" className="text-gray-500 hover:text-gray-700 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                <ListTodo className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">{note.title}</h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Today
            </Button>
            <Button variant="outline" size="sm">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 max-w-4xl">
        {/* Note Content */}
        {note.content && (
          <div className={`p-6 rounded-xl border-2 mb-8 ${getNoteColorClass(note.color)}`}>
            <p className="whitespace-pre-wrap">{note.content}</p>
          </div>
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
            className="bg-green-600 hover:bg-green-700 text-white"
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
                      
                      {(task.due_date || task.priority) && (
                        <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                          {task.due_date && (
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(task.due_date).toLocaleDateString()}</span>
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
      </main>
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