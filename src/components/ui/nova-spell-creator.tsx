import React, { useState } from 'react';
import { Wand2, Plus, Trash2, ArrowDown, ArrowUp, Save, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { novaAgent, Spell, SpellStep } from '@/lib/nova-agent';

interface NovaSpellCreatorProps {
  onSave?: (spell: Spell) => void;
  onCancel?: () => void;
  initialSpell?: Partial<Spell>;
  theme?: 'orange' | 'purple' | 'blue';
}

export const NovaSpellCreator: React.FC<NovaSpellCreatorProps> = ({
  onSave,
  onCancel,
  initialSpell,
  theme = 'purple'
}) => {
  const [spellName, setSpellName] = useState(initialSpell?.name || '');
  const [spellDescription, setSpellDescription] = useState(initialSpell?.description || '');
  const [spellPrompt, setSpellPrompt] = useState(initialSpell?.prompt || '');
  const [steps, setSteps] = useState<Partial<SpellStep>[]>(initialSpell?.steps || [
    { description: '', action: 'analyze', parameters: { prompt: '' } }
  ]);
  const [isCreating, setIsCreating] = useState(false);
  const [currentUserId] = useState('demo-user-123'); // In production, get from auth

  // Theme styles
  const themeStyles = {
    orange: {
      primary: 'bg-orange-600 hover:bg-orange-700 text-white',
      secondary: 'bg-orange-100 text-orange-800 border-orange-300',
      accent: 'text-orange-600',
      border: 'border-orange-300',
      highlight: 'bg-orange-50'
    },
    purple: {
      primary: 'bg-purple-600 hover:bg-purple-700 text-white',
      secondary: 'bg-purple-100 text-purple-800 border-purple-300',
      accent: 'text-purple-600',
      border: 'border-purple-300',
      highlight: 'bg-purple-50'
    },
    blue: {
      primary: 'bg-blue-600 hover:bg-blue-700 text-white',
      secondary: 'bg-blue-100 text-blue-800 border-blue-300',
      accent: 'text-blue-600',
      border: 'border-blue-300',
      highlight: 'bg-blue-50'
    }
  };

  const currentTheme = themeStyles[theme];

  const actionOptions = [
    { value: 'analyze', label: 'Analyze Input' },
    { value: 'create_note', label: 'Create Note' },
    { value: 'create_task', label: 'Create Task' },
    { value: 'schedule_event', label: 'Schedule Event' },
    { value: 'send_email', label: 'Send Email' },
    { value: 'search_web', label: 'Search Web' },
    { value: 'execute', label: 'Execute Custom Action' }
  ];

  const addStep = () => {
    setSteps([...steps, { description: '', action: 'analyze', parameters: { prompt: '' } }]);
  };

  const removeStep = (index: number) => {
    const newSteps = [...steps];
    newSteps.splice(index, 1);
    setSteps(newSteps);
  };

  const moveStepUp = (index: number) => {
    if (index === 0) return;
    const newSteps = [...steps];
    [newSteps[index - 1], newSteps[index]] = [newSteps[index], newSteps[index - 1]];
    setSteps(newSteps);
  };

  const moveStepDown = (index: number) => {
    if (index === steps.length - 1) return;
    const newSteps = [...steps];
    [newSteps[index], newSteps[index + 1]] = [newSteps[index + 1], newSteps[index]];
    setSteps(newSteps);
  };

  const updateStep = (index: number, field: string, value: any) => {
    const newSteps = [...steps];
    
    if (field === 'action') {
      // Reset parameters when action changes
      newSteps[index] = {
        ...newSteps[index],
        action: value,
        parameters: { prompt: spellPrompt }
      };
    } else if (field.startsWith('param.')) {
      const paramName = field.split('.')[1];
      newSteps[index] = {
        ...newSteps[index],
        parameters: {
          ...newSteps[index].parameters,
          [paramName]: value
        }
      };
    } else {
      newSteps[index] = {
        ...newSteps[index],
        [field]: value
      };
    }
    
    setSteps(newSteps);
  };

  const handleSaveSpell = async () => {
    if (!spellName || !spellPrompt || steps.length === 0) return;
    
    setIsCreating(true);
    
    try {
      // Prepare complete spell steps
      const completeSteps: SpellStep[] = steps.map(step => ({
        id: step.id || crypto.randomUUID(),
        description: step.description || `Step ${steps.indexOf(step) + 1}`,
        action: step.action || 'analyze',
        parameters: step.parameters || { prompt: spellPrompt },
        status: 'pending'
      }));
      
      // Create spell using Nova agent
      const spell = await novaAgent.createCustomSpell({
        name: spellName,
        description: spellDescription || `Spell created for: ${spellPrompt}`,
        prompt: spellPrompt,
        steps: completeSteps
      });
      
      if (onSave) {
        onSave(spell);
      }
    } catch (error) {
      console.error('Error creating spell:', error);
      alert('Failed to create spell. Please try again.');
    } finally {
      setIsCreating(false);
    }
  };

  const renderParameterFields = (step: Partial<SpellStep>, index: number) => {
    switch (step.action) {
      case 'create_note':
        return (
          <div className="space-y-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <Input
                value={step.parameters?.title || ''}
                onChange={(e) => updateStep(index, 'param.title', e.target.value)}
                placeholder="Note title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
              <Textarea
                value={step.parameters?.content || ''}
                onChange={(e) => updateStep(index, 'param.content', e.target.value)}
                placeholder="Note content"
                rows={3}
              />
            </div>
          </div>
        );
        
      case 'create_task':
        return (
          <div className="space-y-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <Input
                value={step.parameters?.description || ''}
                onChange={(e) => updateStep(index, 'param.description', e.target.value)}
                placeholder="Task description"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
              <Select
                value={step.parameters?.priority || 'medium'}
                onValueChange={(value) => updateStep(index, 'param.priority', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );
        
      case 'schedule_event':
        return (
          <div className="space-y-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <Input
                value={step.parameters?.title || ''}
                onChange={(e) => updateStep(index, 'param.title', e.target.value)}
                placeholder="Event title"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <Input
                  type="date"
                  value={step.parameters?.date || ''}
                  onChange={(e) => updateStep(index, 'param.date', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <Input
                  type="time"
                  value={step.parameters?.time || ''}
                  onChange={(e) => updateStep(index, 'param.time', e.target.value)}
                />
              </div>
            </div>
          </div>
        );
        
      case 'send_email':
        return (
          <div className="space-y-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
              <Input
                value={step.parameters?.to || ''}
                onChange={(e) => updateStep(index, 'param.to', e.target.value)}
                placeholder="recipient@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <Input
                value={step.parameters?.subject || ''}
                onChange={(e) => updateStep(index, 'param.subject', e.target.value)}
                placeholder="Email subject"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Body</label>
              <Textarea
                value={step.parameters?.body || ''}
                onChange={(e) => updateStep(index, 'param.body', e.target.value)}
                placeholder="Email body"
                rows={3}
              />
            </div>
          </div>
        );
        
      case 'search_web':
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Search Query</label>
            <Input
              value={step.parameters?.query || ''}
              onChange={(e) => updateStep(index, 'param.query', e.target.value)}
              placeholder="Search query"
            />
          </div>
        );
        
      case 'analyze':
      case 'execute':
      default:
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Prompt</label>
            <Textarea
              value={step.parameters?.prompt || spellPrompt}
              onChange={(e) => updateStep(index, 'param.prompt', e.target.value)}
              placeholder="Prompt for this step"
              rows={2}
            />
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-full ${currentTheme.secondary} flex items-center justify-center`}>
          <Wand2 className={`w-5 h-5 ${currentTheme.accent}`} />
        </div>
        <div>
          <h3 className="text-lg font-bold">Spell Creator</h3>
          <p className="text-sm text-gray-500">Design your custom automation spell</p>
        </div>
      </div>
      
      {/* Spell Details */}
      <div className={`p-4 rounded-xl ${currentTheme.highlight} ${currentTheme.border} border`}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Spell Name</label>
            <Input
              value={spellName}
              onChange={(e) => setSpellName(e.target.value)}
              placeholder="Give your spell a name"
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <Input
              value={spellDescription}
              onChange={(e) => setSpellDescription(e.target.value)}
              placeholder="What does this spell do?"
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Main Prompt</label>
            <Textarea
              value={spellPrompt}
              onChange={(e) => setSpellPrompt(e.target.value)}
              placeholder="Describe what you want this spell to accomplish"
              rows={3}
              className="w-full"
            />
          </div>
        </div>
      </div>
      
      {/* Spell Steps */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-medium">Spell Steps</h4>
          <Button 
            onClick={addStep}
            size="sm"
            variant="outline"
            className={`${currentTheme.border} ${currentTheme.accent}`}
          >
            <Plus className="w-4 h-4 mr-1" /> Add Step
          </Button>
        </div>
        
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-xl border ${currentTheme.border} ${index % 2 === 0 ? currentTheme.highlight : 'bg-white'}`}
            >
              <div className="flex items-center justify-between mb-3">
                <h5 className="font-medium">Step {index + 1}</h5>
                <div className="flex items-center gap-1">
                  <Button
                    onClick={() => moveStepUp(index)}
                    size="sm"
                    variant="ghost"
                    disabled={index === 0}
                    className="h-8 w-8 p-0"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </Button>
                  <Button
                    onClick={() => moveStepDown(index)}
                    size="sm"
                    variant="ghost"
                    disabled={index === steps.length - 1}
                    className="h-8 w-8 p-0"
                  >
                    <ArrowDown className="w-4 h-4" />
                  </Button>
                  <Button
                    onClick={() => removeStep(index)}
                    size="sm"
                    variant="ghost"
                    disabled={steps.length <= 1}
                    className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <Input
                    value={step.description || ''}
                    onChange={(e) => updateStep(index, 'description', e.target.value)}
                    placeholder={`Step ${index + 1} description`}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Action</label>
                  <Select
                    value={step.action || 'analyze'}
                    onValueChange={(value) => updateStep(index, 'action', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select action" />
                    </SelectTrigger>
                    <SelectContent>
                      {actionOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Parameters</label>
                  {renderParameterFields(step, index)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Actions */}
      <div className="flex justify-end gap-3">
        {onCancel && (
          <Button
            onClick={onCancel}
            variant="outline"
            disabled={isCreating}
          >
            Cancel
          </Button>
        )}
        
        <Button
          onClick={handleSaveSpell}
          disabled={!spellName || !spellPrompt || isCreating}
          className={currentTheme.primary}
        >
          {isCreating ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Creating Spell...
            </>
          ) : (
            <>
              <Save className="w-4 h-4 mr-2" />
              Save Spell
            </>
          )}
        </Button>
        
        <Button
          disabled={!spellName || !spellPrompt || isCreating}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
        >
          <Play className="w-4 h-4 mr-2" />
          Test Spell
        </Button>
      </div>
    </div>
  );
};