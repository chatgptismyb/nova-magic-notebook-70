import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Plus, Grid, List, Filter, Bell, Settings, Menu, X, Home, BookOpen, ListTodo, Folder, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AIChatbot } from '@/components/ui/ai-chatbot';
import { AISearch } from '@/components/ui/ai-search';

interface MainLayoutProps {
  children: ReactNode;
  showSearch?: boolean;
  showChatbot?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  showSearch = true,
  showChatbot = true
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: Home },
    { path: '/magic-notebook', label: 'Magic Notebook', icon: Sparkles },
    { path: '/todos', label: 'To-Do List', icon: ListTodo },
    { path: '/spellbook', label: 'Spellbook', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <div 
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsSidebarOpen(false)}
        />
        <div className="absolute top-0 left-0 bottom-0 w-64 bg-white shadow-xl">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-orange-800">Magic Notebook</span>
            </div>
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <nav className="p-4 space-y-2">
            {navItems.map((item) => {
              const ItemIcon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-orange-100 text-orange-800'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <ItemIcon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <Menu className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-xl font-bold text-orange-800 group-hover:text-orange-600 transition-colors hidden md:block">Magic Notebook</span>
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Search */}
            {showSearch && (
              <div className="relative hidden md:block w-64">
                <AISearch placeholder="Search notes, tasks..." theme="orange" />
              </div>
            )}

            {/* Actions */}
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Bell className="w-4 h-4" />
            </Button>
            
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Settings className="w-4 h-4" />
            </Button>
            
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-600 font-medium text-sm">U</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content with Sidebar */}
      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="w-64 border-r border-gray-200 bg-white h-[calc(100vh-65px)] sticky top-[65px] hidden lg:block">
          <nav className="p-4 space-y-2">
            {navItems.map((item) => {
              const ItemIcon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-orange-100 text-orange-800'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <ItemIcon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>

      {/* AI Chatbot */}
      {showChatbot && <AIChatbot theme="orange" />}
    </div>
  );
};