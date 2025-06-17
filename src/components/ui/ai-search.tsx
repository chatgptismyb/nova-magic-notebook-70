import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Loader2, ArrowRight, History, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SearchResult {
  id: string;
  title: string;
  type: 'note' | 'folder' | 'task';
  snippet?: string;
  url: string;
  relevance: number;
}

interface AISearchProps {
  placeholder?: string;
  theme?: 'orange' | 'purple' | 'blue';
  onResultClick?: (result: SearchResult) => void;
}

export const AISearch: React.FC<AISearchProps> = ({
  placeholder = 'Search...',
  theme = 'orange',
  onResultClick
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Theme styles
  const themeStyles = {
    orange: {
      primary: 'text-orange-600',
      secondary: 'bg-orange-100 text-orange-800',
      highlight: 'bg-orange-500 text-white',
      border: 'border-orange-300',
      hover: 'hover:bg-orange-50',
      icon: 'text-orange-500'
    },
    purple: {
      primary: 'text-purple-600',
      secondary: 'bg-purple-100 text-purple-800',
      highlight: 'bg-purple-500 text-white',
      border: 'border-purple-300',
      hover: 'hover:bg-purple-50',
      icon: 'text-purple-500'
    },
    blue: {
      primary: 'text-blue-600',
      secondary: 'bg-blue-100 text-blue-800',
      highlight: 'bg-blue-500 text-white',
      border: 'border-blue-300',
      hover: 'hover:bg-blue-50',
      icon: 'text-blue-500'
    }
  };

  const currentTheme = themeStyles[theme];

  // Load recent searches from localStorage
  useEffect(() => {
    const savedSearches = localStorage.getItem('recentSearches');
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);

  // Handle click outside to close results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Generate AI suggestions based on query
  useEffect(() => {
    if (query.length > 1) {
      // Simulate AI-generated suggestions
      const generateSuggestions = () => {
        const baseSuggestions = [
          `${query} notes`,
          `${query} tasks`,
          `recent ${query} documents`,
          `${query} in folders`
        ];
        setSuggestions(baseSuggestions);
      };
      
      const debounce = setTimeout(() => {
        generateSuggestions();
      }, 300);
      
      return () => clearTimeout(debounce);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call with delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Mock results based on query
      const mockResults: SearchResult[] = [
        {
          id: '1',
          title: `Note about ${query}`,
          type: 'note',
          snippet: `This note contains information about ${query} and related topics...`,
          url: `/notes/1`,
          relevance: 0.95
        },
        {
          id: '2',
          title: `${query} Tasks`,
          type: 'task',
          snippet: `A collection of tasks related to ${query}...`,
          url: `/todos/2`,
          relevance: 0.85
        },
        {
          id: '3',
          title: `${query} Project`,
          type: 'folder',
          url: `/folders/3`,
          relevance: 0.75
        }
      ];
      
      setResults(mockResults);
      
      // Save to recent searches
      if (!recentSearches.includes(query)) {
        const updatedSearches = [query, ...recentSearches.slice(0, 4)];
        setRecentSearches(updatedSearches);
        localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
      }
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleResultClick = (result: SearchResult) => {
    if (onResultClick) {
      onResultClick(result);
    }
    setShowResults(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    handleSearch();
  };

  const handleRecentSearchClick = (search: string) => {
    setQuery(search);
    handleSearch();
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setSuggestions([]);
  };

  const getIconForType = (type: string) => {
    switch (type) {
      case 'note':
        return <FileIcon className={`w-4 h-4 ${currentTheme.icon}`} />;
      case 'folder':
        return <FolderIcon className={`w-4 h-4 ${currentTheme.icon}`} />;
      case 'task':
        return <TaskIcon className={`w-4 h-4 ${currentTheme.icon}`} />;
      default:
        return <Search className={`w-4 h-4 ${currentTheme.icon}`} />;
    }
  };

  return (
    <div className="relative" ref={searchRef}>
      {/* Search Input */}
      <div className="relative">
        <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${currentTheme.primary}`} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          onFocus={() => setShowResults(true)}
          placeholder={placeholder}
          className={`w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 ${currentTheme.border} focus:ring-opacity-50 focus:ring-${theme}-500`}
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {showResults && (
        <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center">
              <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2 text-gray-400" />
              <p className="text-sm text-gray-500">Searching...</p>
            </div>
          ) : (
            <>
              {/* AI Suggestions */}
              {suggestions.length > 0 && (
                <div className="p-2 border-b border-gray-200">
                  <div className="flex items-center gap-2 px-2 py-1 text-xs text-gray-500">
                    <Sparkles className="w-3 h-3" />
                    <span>AI Suggestions</span>
                  </div>
                  <div className="space-y-1 mt-1">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm ${currentTheme.hover} flex items-center gap-2`}
                      >
                        <Search className="w-4 h-4 text-gray-400" />
                        <span>{suggestion}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Recent Searches */}
              {recentSearches.length > 0 && query.length === 0 && (
                <div className="p-2 border-b border-gray-200">
                  <div className="flex items-center gap-2 px-2 py-1 text-xs text-gray-500">
                    <History className="w-3 h-3" />
                    <span>Recent Searches</span>
                  </div>
                  <div className="space-y-1 mt-1">
                    {recentSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => handleRecentSearchClick(search)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm ${currentTheme.hover} flex items-center gap-2`}
                      >
                        <History className="w-4 h-4 text-gray-400" />
                        <span>{search}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Search Results */}
              {results.length > 0 && (
                <div className="p-2">
                  <div className="flex items-center justify-between px-2 py-1">
                    <div className="text-xs text-gray-500">Results for "{query}"</div>
                    <div className="text-xs text-gray-500">{results.length} found</div>
                  </div>
                  <div className="space-y-1 mt-1">
                    {results.map((result) => (
                      <button
                        key={result.id}
                        onClick={() => handleResultClick(result)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm ${currentTheme.hover} flex items-center`}
                      >
                        <div className="mr-3 flex-shrink-0">
                          {getIconForType(result.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium">{result.title}</div>
                          {result.snippet && (
                            <div className="text-xs text-gray-500 truncate">{result.snippet}</div>
                          )}
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* No Results */}
              {query.length > 0 && !isLoading && results.length === 0 && (
                <div className="p-4 text-center">
                  <p className="text-sm text-gray-500">No results found for "{query}"</p>
                  <p className="text-xs text-gray-400 mt-1">Try different keywords or check spelling</p>
                </div>
              )}

              {/* Empty State */}
              {query.length === 0 && recentSearches.length === 0 && (
                <div className="p-4 text-center">
                  <p className="text-sm text-gray-500">Start typing to search</p>
                  <p className="text-xs text-gray-400 mt-1">Search for notes, tasks, and folders</p>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

// Icons
const FileIcon = ({ className }: { className?: string }) => (
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
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
  </svg>
);

const FolderIcon = ({ className }: { className?: string }) => (
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
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  </svg>
);

const TaskIcon = ({ className }: { className?: string }) => (
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
    <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"></path>
    <path d="m9 12 2 2 4-4"></path>
  </svg>
);