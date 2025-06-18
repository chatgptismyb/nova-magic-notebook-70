import React, { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Save, Calendar, Tag, Flag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { toast } from '@/components/ui/sonner';

const CreateTask = () => {
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('medium');
  const [category, setCategory] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const priorities = [
    { value: 'low', label: 'Low', color: 'bg-green-500' },
    { value: 'medium', label: 'Medium', color: 'bg-yellow-500' },
    { value: 'high', label: 'High', color: 'bg-red-500' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    setIsSubmitting(true);
    try {
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast.error('You must be logged in to create a task');
        navigate('/login');
        return;
      }

      const { data, error } = await supabase
        .from('tasks')
        .insert({
          user_id: user.id,
          description: description.trim(),
          due_date: dueDate || null,
          priority,
          category: category.trim() || null,
          is_completed: false
        })
        .select()
        .single();

      if (error) throw error;
      
      toast.success('Task created successfully!');
      navigate('/todos');
    } catch (error) {
      console.error('Error creating task:', error);
      toast.error('Failed to create task. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MainLayout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Link to="/todos" className="text-gray-500 hover:text-gray-700 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Create New Task</h1>
          </div>
          
          <Button
            onClick={handleSubmit}
            disabled={!description.trim() || isSubmitting}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <Save className="w-4 h-4 mr-2" />
            {isSubmitting ? 'Saving...' : 'Save Task'}
          </Button>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Task Description
                </label>
                <Input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="What needs to be done?"
                  className="w-full"
                  required
                />
              </div>

              {/* Due Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  Due Date (Optional)
                </label>
                <Input
                  type="datetime-local"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Priority */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Flag className="w-4 h-4 text-gray-500" />
                  Priority
                </label>
                <div className="flex gap-4">
                  {priorities.map((p) => (
                    <label key={p.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="priority"
                        value={p.value}
                        checked={priority === p.value}
                        onChange={() => setPriority(p.value)}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded-full ${p.color} ${priority === p.value ? 'ring-2 ring-offset-2 ring-gray-400' : ''}`}></div>
                      <span className="text-gray-700">{p.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Tag className="w-4 h-4 text-gray-500" />
                  Category (Optional)
                </label>
                <Input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="e.g., Work, Personal, Shopping"
                  className="w-full"
                />
              </div>
            </form>
          </div>

          {/* Preview */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Task Preview</h2>
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-md">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0">
                  <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">
                    {description || 'Task description will appear here'}
                  </p>
                  
                  <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                    {dueDate && (
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(dueDate).toLocaleString()}</span>
                      </div>
                    )}
                    
                    {category && (
                      <div className="flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        <span>{category}</span>
                      </div>
                    )}
                    
                    <div className="flex items-center gap-1">
                      {priority === 'high' && <span className="text-red-500">●</span>}
                      {priority === 'medium' && <span className="text-yellow-500">●</span>}
                      {priority === 'low' && <span className="text-green-500">●</span>}
                      <span>{priority.charAt(0).toUpperCase() + priority.slice(1)} Priority</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CreateTask;