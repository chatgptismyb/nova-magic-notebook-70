import React, { useState, useEffect } from 'react';
import { Filter, X, Check, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FilterOption {
  id: string;
  label: string;
  value: string;
}

interface FilterGroup {
  id: string;
  name: string;
  options: FilterOption[];
}

interface AISmartFilterProps {
  groups: FilterGroup[];
  onFilterChange: (filters: Record<string, string[]>) => void;
  theme?: 'orange' | 'purple' | 'blue';
  showAISuggestions?: boolean;
}

export const AISmartFilter: React.FC<AISmartFilterProps> = ({
  groups,
  onFilterChange,
  theme = 'orange',
  showAISuggestions = true
}) => {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [openGroups, setOpenGroups] = useState<string[]>([]);
  const [aiSuggestions, setAiSuggestions] = useState<Record<string, string[]>>({});
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Theme styles
  const themeStyles = {
    orange: {
      primary: 'bg-orange-600 text-white',
      secondary: 'bg-orange-100 text-orange-800 border-orange-300',
      hover: 'hover:bg-orange-50',
      selected: 'bg-orange-200 text-orange-800',
      button: 'bg-orange-600 hover:bg-orange-700 text-white',
      icon: 'text-orange-500',
      border: 'border-orange-300',
      suggestion: 'bg-orange-50 border-orange-200'
    },
    purple: {
      primary: 'bg-purple-600 text-white',
      secondary: 'bg-purple-100 text-purple-800 border-purple-300',
      hover: 'hover:bg-purple-50',
      selected: 'bg-purple-200 text-purple-800',
      button: 'bg-purple-600 hover:bg-purple-700 text-white',
      icon: 'text-purple-500',
      border: 'border-purple-300',
      suggestion: 'bg-purple-50 border-purple-200'
    },
    blue: {
      primary: 'bg-blue-600 text-white',
      secondary: 'bg-blue-100 text-blue-800 border-blue-300',
      hover: 'hover:bg-blue-50',
      selected: 'bg-blue-200 text-blue-800',
      button: 'bg-blue-600 hover:bg-blue-700 text-white',
      icon: 'text-blue-500',
      border: 'border-blue-300',
      suggestion: 'bg-blue-50 border-blue-200'
    }
  };

  const currentTheme = themeStyles[theme];

  useEffect(() => {
    // Notify parent component of filter changes
    onFilterChange(selectedFilters);
    
    // Generate AI suggestions based on selected filters
    if (showAISuggestions) {
      generateAiSuggestions();
    }
  }, [selectedFilters]);

  const toggleGroup = (groupId: string) => {
    setOpenGroups(prev => 
      prev.includes(groupId)
        ? prev.filter(id => id !== groupId)
        : [...prev, groupId]
    );
  };

  const toggleFilter = (groupId: string, value: string) => {
    setSelectedFilters(prev => {
      const currentGroupFilters = prev[groupId] || [];
      
      const newGroupFilters = currentGroupFilters.includes(value)
        ? currentGroupFilters.filter(v => v !== value)
        : [...currentGroupFilters, value];
      
      return {
        ...prev,
        [groupId]: newGroupFilters
      };
    });
  };

  const clearFilters = () => {
    setSelectedFilters({});
    setAiSuggestions({});
    setShowSuggestions(false);
  };

  const generateAiSuggestions = () => {
    // Simulate AI-generated filter suggestions based on current selections
    const suggestions: Record<string, string[]> = {};
    
    // Only generate suggestions if we have some filters selected
    if (Object.values(selectedFilters).some(values => values.length > 0)) {
      // For each group that doesn't have a selection yet, suggest options
      groups.forEach(group => {
        if (!selectedFilters[group.id] || selectedFilters[group.id].length === 0) {
          // Simulate AI choosing relevant options based on other selections
          const recommendedOptions = group.options
            .slice(0, 2) // Just take first 2 options for the mock
            .map(option => option.value);
          
          if (recommendedOptions.length > 0) {
            suggestions[group.id] = recommendedOptions;
          }
        }
      });
      
      setAiSuggestions(suggestions);
      setShowSuggestions(Object.keys(suggestions).length > 0);
    } else {
      setShowSuggestions(false);
    }
  };

  const applySuggestion = (groupId: string, value: string) => {
    toggleFilter(groupId, value);
    
    // Remove this suggestion
    setAiSuggestions(prev => {
      const newSuggestions = { ...prev };
      newSuggestions[groupId] = newSuggestions[groupId].filter(v => v !== value);
      
      if (newSuggestions[groupId].length === 0) {
        delete newSuggestions[groupId];
      }
      
      return newSuggestions;
    });
    
    if (Object.keys(aiSuggestions).length <= 1) {
      setShowSuggestions(false);
    }
  };

  const getActiveFilterCount = () => {
    return Object.values(selectedFilters).reduce((count, values) => count + values.length, 0);
  };

  const activeFilterCount = getActiveFilterCount();

  return (
    <div className="space-y-4">
      {/* Filter Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className={`w-5 h-5 ${currentTheme.icon}`} />
          <h3 className="font-semibold">Filters</h3>
          {activeFilterCount > 0 && (
            <span className={`text-xs px-2 py-0.5 rounded-full ${currentTheme.secondary}`}>
              {activeFilterCount}
            </span>
          )}
        </div>
        
        {activeFilterCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-gray-500 hover:text-gray-700"
          >
            Clear All
          </Button>
        )}
      </div>

      {/* AI Suggestions */}
      {showAISuggestions && showSuggestions && Object.keys(aiSuggestions).length > 0 && (
        <div className={`p-3 rounded-lg border ${currentTheme.suggestion} mb-4`}>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className={`w-4 h-4 ${currentTheme.icon}`} />
            <h4 className="text-sm font-medium">AI Suggested Filters</h4>
          </div>
          
          <div className="space-y-2">
            {Object.entries(aiSuggestions).map(([groupId, values]) => {
              const group = groups.find(g => g.id === groupId);
              if (!group) return null;
              
              return (
                <div key={groupId} className="space-y-1">
                  <p className="text-xs text-gray-500">{group.name}</p>
                  <div className="flex flex-wrap gap-2">
                    {values.map(value => {
                      const option = group.options.find(o => o.value === value);
                      if (!option) return null;
                      
                      return (
                        <button
                          key={value}
                          onClick={() => applySuggestion(groupId, value)}
                          className={`text-xs px-2 py-1 rounded-md border ${currentTheme.hover} flex items-center gap-1`}
                        >
                          <span>{option.label}</span>
                          <Plus className="w-3 h-3" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Filter Groups */}
      <div className="space-y-3">
        {groups.map((group) => (
          <div key={group.id} className={`border rounded-lg overflow-hidden ${currentTheme.border}`}>
            {/* Group Header */}
            <button
              onClick={() => toggleGroup(group.id)}
              className={`w-full px-4 py-3 text-left flex items-center justify-between ${currentTheme.hover}`}
            >
              <div className="flex items-center gap-2">
                <span className="font-medium">{group.name}</span>
                {selectedFilters[group.id]?.length > 0 && (
                  <span className={`text-xs px-2 py-0.5 rounded-full ${currentTheme.secondary}`}>
                    {selectedFilters[group.id].length}
                  </span>
                )}
              </div>
              {openGroups.includes(group.id) ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
            
            {/* Group Options */}
            {openGroups.includes(group.id) && (
              <div className="px-4 py-2 border-t border-gray-200">
                <div className="space-y-1">
                  {group.options.map((option) => {
                    const isSelected = selectedFilters[group.id]?.includes(option.value) || false;
                    
                    return (
                      <button
                        key={option.id}
                        onClick={() => toggleFilter(group.id, option.value)}
                        className={`w-full px-2 py-1.5 rounded-md text-left flex items-center justify-between text-sm ${
                          isSelected ? currentTheme.selected : currentTheme.hover
                        }`}
                      >
                        <span>{option.label}</span>
                        {isSelected && <Check className="w-4 h-4" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Plus = ({ className }: { className?: string }) => (
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
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);