import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Clock, Star, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface RecommendedItem {
  id: string;
  title: string;
  type: 'note' | 'folder' | 'task' | 'template';
  description?: string;
  url: string;
  reason: string;
  priority: number;
}

interface AIRecommendationsProps {
  userId?: string;
  limit?: number;
  theme?: 'orange' | 'purple' | 'blue';
  showHeader?: boolean;
  layout?: 'grid' | 'list';
}

export const AIRecommendations: React.FC<AIRecommendationsProps> = ({
  userId = 'demo-user-123',
  limit = 4,
  theme = 'orange',
  showHeader = true,
  layout = 'grid'
}) => {
  const [recommendations, setRecommendations] = useState<RecommendedItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Theme styles
  const themeStyles = {
    orange: {
      primary: 'from-orange-600 to-yellow-600',
      secondary: 'bg-orange-100 border-orange-300',
      text: 'text-orange-800',
      hover: 'hover:bg-orange-50',
      highlight: 'text-orange-600',
      icon: 'text-orange-500'
    },
    purple: {
      primary: 'from-purple-600 to-indigo-600',
      secondary: 'bg-purple-100 border-purple-300',
      text: 'text-purple-800',
      hover: 'hover:bg-purple-50',
      highlight: 'text-purple-600',
      icon: 'text-purple-500'
    },
    blue: {
      primary: 'from-blue-600 to-cyan-600',
      secondary: 'bg-blue-100 border-blue-300',
      text: 'text-blue-800',
      hover: 'hover:bg-blue-50',
      highlight: 'text-blue-600',
      icon: 'text-blue-500'
    }
  };

  const currentTheme = themeStyles[theme];

  useEffect(() => {
    loadRecommendations();
  }, [userId, limit]);

  const loadRecommendations = async () => {
    setIsLoading(true);
    
    try {
      // Simulate API call with delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock recommendations
      const mockRecommendations: RecommendedItem[] = [
        {
          id: '1',
          title: 'Weekly Planning Template',
          type: 'template',
          description: 'Organize your week efficiently with this template',
          url: '/templates/weekly-planning',
          reason: 'Based on your productivity patterns',
          priority: 0.95
        },
        {
          id: '2',
          title: 'Project Ideas',
          type: 'note',
          description: 'Your brainstorming session from last week',
          url: '/notes/project-ideas',
          reason: 'You often review this on Mondays',
          priority: 0.9
        },
        {
          id: '3',
          title: 'Follow-up Tasks',
          type: 'task',
          description: '3 pending tasks that need attention',
          url: '/todos/follow-up',
          reason: 'Due soon',
          priority: 0.85
        },
        {
          id: '4',
          title: 'Research Materials',
          type: 'folder',
          description: 'Collection of research documents',
          url: '/folders/research',
          reason: 'Recently updated',
          priority: 0.8
        },
        {
          id: '5',
          title: 'Meeting Notes',
          type: 'note',
          description: 'Notes from your last team meeting',
          url: '/notes/meeting',
          reason: 'You might need this for today\'s follow-up',
          priority: 0.75
        },
        {
          id: '6',
          title: 'Learning Resources',
          type: 'folder',
          description: 'Educational materials you\'ve collected',
          url: '/folders/learning',
          reason: 'Matches your current interests',
          priority: 0.7
        }
      ];
      
      // Sort by priority and limit
      const sortedRecommendations = mockRecommendations
        .sort((a, b) => b.priority - a.priority)
        .slice(0, limit);
      
      setRecommendations(sortedRecommendations);
    } catch (error) {
      console.error('Error loading recommendations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getIconForType = (type: string) => {
    switch (type) {
      case 'note':
        return <FileIcon className={`w-5 h-5 ${currentTheme.icon}`} />;
      case 'folder':
        return <FolderIcon className={`w-5 h-5 ${currentTheme.icon}`} />;
      case 'task':
        return <TaskIcon className={`w-5 h-5 ${currentTheme.icon}`} />;
      case 'template':
        return <TemplateIcon className={`w-5 h-5 ${currentTheme.icon}`} />;
      default:
        return <Lightbulb className={`w-5 h-5 ${currentTheme.icon}`} />;
    }
  };

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className={`h-8 w-48 ${currentTheme.secondary} rounded-md mb-4`}></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(limit)].map((_, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
              </div>
              <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      {showHeader && (
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className={`w-5 h-5 ${currentTheme.highlight}`} />
            <h3 className={`font-bold text-lg ${currentTheme.text}`}>Recommended for You</h3>
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            className={currentTheme.text}
          >
            View All
          </Button>
        </div>
      )}

      {layout === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendations.map((item) => (
            <Link 
              key={item.id} 
              to={item.url}
              className={`block border rounded-lg p-4 ${currentTheme.hover} transition-all duration-200 hover:shadow-md`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 rounded-full ${currentTheme.secondary} flex items-center justify-center`}>
                  {getIconForType(item.type)}
                </div>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.type}</p>
                </div>
              </div>
              {item.description && (
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              )}
              <div className="flex items-center justify-between mt-2 text-xs">
                <span className="text-gray-500 flex items-center gap-1">
                  <Lightbulb className="w-3 h-3" />
                  {item.reason}
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {recommendations.map((item) => (
            <Link 
              key={item.id} 
              to={item.url}
              className={`flex items-center gap-3 border rounded-lg p-3 ${currentTheme.hover} transition-all duration-200 hover:shadow-md`}
            >
              <div className={`w-10 h-10 rounded-full ${currentTheme.secondary} flex items-center justify-center flex-shrink-0`}>
                {getIconForType(item.type)}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold">{item.title}</h4>
                {item.description && (
                  <p className="text-sm text-gray-600 truncate">{item.description}</p>
                )}
                <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                  <Lightbulb className="w-3 h-3" />
                  {item.reason}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
            </Link>
          ))}
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

const TemplateIcon = ({ className }: { className?: string }) => (
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
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="9" y1="21" x2="9" y2="9"></line>
  </svg>
);