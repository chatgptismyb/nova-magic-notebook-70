import { useState, useEffect } from 'react';
import { Wand2, Plus, Search, Star, Zap, BookOpen, ArrowLeft, Play, Edit, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';
import { MainLayout } from '@/components/layout/MainLayout';
import { AISmartFilter } from '@/components/ui/ai-smart-filter';

interface Spell {
  id: string;
  name: string;
  description: string;
  prompt: string;
  created_at: string;
  is_favorite?: boolean;
}

interface SpellTemplate {
  id: string;
  name: string;
  description: string;
  prompt: string;
}

const Spellbook = () => {
  const [spells, setSpells] = useState<Spell[]>([]);
  const [templates, setTemplates] = useState<SpellTemplate[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'my-spells' | 'templates'>('my-spells');
  const [isLoading, setIsLoading] = useState(true);
  const [currentUserId] = useState('demo-user-123'); // In production, get from auth
  const [filteredSpells, setFilteredSpells] = useState<Spell[]>([]);
  const [filteredTemplates, setFilteredTemplates] = useState<SpellTemplate[]>([]);

  // Filter groups for AI Smart Filter
  const filterGroups = [
    {
      id: 'category',
      name: 'Category',
      options: [
        { id: 'productivity', label: 'Productivity', value: 'productivity' },
        { id: 'creativity', label: 'Creativity', value: 'creativity' },
        { id: 'communication', label: 'Communication', value: 'communication' },
        { id: 'planning', label: 'Planning', value: 'planning' },
        { id: 'social', label: 'Social', value: 'social' }
      ]
    },
    {
      id: 'difficulty',
      name: 'Difficulty',
      options: [
        { id: 'beginner', label: 'Beginner', value: 'beginner' },
        { id: 'intermediate', label: 'Intermediate', value: 'intermediate' },
        { id: 'advanced', label: 'Advanced', value: 'advanced' }
      ]
    },
    {
      id: 'status',
      name: 'Status',
      options: [
        { id: 'active', label: 'Active', value: 'active' },
        { id: 'inactive', label: 'Inactive', value: 'inactive' },
        { id: 'favorite', label: 'Favorite', value: 'favorite' }
      ]
    }
  ];

  useEffect(() => {
    loadSpells();
    loadTemplates();
  }, []);

  useEffect(() => {
    // Apply search filter
    if (searchQuery) {
      setFilteredSpells(spells.filter(spell =>
        spell.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        spell.description.toLowerCase().includes(searchQuery.toLowerCase())
      ));
      
      setFilteredTemplates(templates.filter(template =>
        template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description.toLowerCase().includes(searchQuery.toLowerCase())
      ));
    } else {
      setFilteredSpells(spells);
      setFilteredTemplates(templates);
    }
  }, [searchQuery, spells, templates]);

  const loadSpells = async () => {
    try {
      setIsLoading(true);
      
      const { data, error } = await supabase
        .from('spells')
        .select('*')
        .eq('user_id', currentUserId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSpells(data || []);
      setFilteredSpells(data || []);
    } catch (error) {
      console.error('Error loading spells:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadTemplates = async () => {
    try {
      const { data, error } = await supabase
        .from('spell_templates')
        .select('*')
        .order('name');

      if (error) throw error;
      setTemplates(data || []);
      setFilteredTemplates(data || []);
    } catch (error) {
      console.error('Error loading templates:', error);
    }
  };

  const handleCastSpell = (spell: Spell | SpellTemplate) => {
    // In a real app, this would trigger the spell execution
    console.log('Casting spell:', spell);
    alert(`Casting spell: ${spell.name}`);
  };

  const handleDeleteSpell = async (spellId: string) => {
    if (!confirm('Are you sure you want to delete this spell?')) return;

    try {
      const { error } = await supabase
        .from('spells')
        .delete()
        .eq('id', spellId);

      if (error) throw error;
      setSpells(spells.filter(spell => spell.id !== spellId));
      setFilteredSpells(filteredSpells.filter(spell => spell.id !== spellId));
    } catch (error) {
      console.error('Error deleting spell:', error);
    }
  };

  const handleFilterChange = (filters: Record<string, string[]>) => {
    // Apply filters to spells and templates
    console.log('Filters applied:', filters);
    
    // This is a simplified example - in a real app, you would apply more complex filtering
    let filtered = [...spells];
    
    // Apply category filter
    if (filters.category?.length) {
      // In a real app, you would have category data on your spells
      // This is just a mock implementation
      filtered = filtered.filter(spell => 
        filters.category.some(cat => spell.description.toLowerCase().includes(cat.toLowerCase()))
      );
    }
    
    // Apply status filter
    if (filters.status?.length) {
      if (filters.status.includes('favorite')) {
        filtered = filtered.filter(spell => spell.is_favorite);
      }
      if (filters.status.includes('active')) {
        filtered = filtered.filter(spell => spell.is_favorite !== false); // Mock implementation
      }
    }
    
    setFilteredSpells(filtered);
    
    // Similar logic would apply to templates
  };

  const SpellCard = ({ spell, isTemplate = false }: { spell: Spell | SpellTemplate; isTemplate?: boolean }) => (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-orange-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
            <Wand2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-orange-800 text-lg">{spell.name}</h3>
            <p className="text-orange-600 text-sm">{spell.description}</p>
          </div>
        </div>
        
        {!isTemplate && (
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleDeleteSpell(spell.id)}
              className="border-red-300 text-red-600 hover:bg-red-50"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>

      <div className="bg-orange-50 rounded-xl p-4 mb-4 border border-orange-200">
        <p className="text-orange-700 text-sm font-mono leading-relaxed">
          {spell.prompt}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-xs text-orange-500">
          {isTemplate ? 'Template' : `Created ${new Date(spell.created_at).toLocaleDateString()}`}
        </div>
        
        <Button
          onClick={() => handleCastSpell(spell)}
          className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Play className="w-4 h-4 mr-2" />
          Cast Spell
        </Button>
      </div>
    </div>
  );

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 relative overflow-hidden">
        {/* Magical background */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            >
              <div className="text-orange-400 text-xl">✨</div>
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 border-2 border-orange-200 shadow-lg inline-block">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-8 h-8 text-orange-600" />
                  <div>
                    <h1 className="text-2xl font-bold text-orange-800">Spellbook</h1>
                    <p className="text-orange-600">Your magical automation library</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Link to="/magic-notebook">
              <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg">
                <Plus className="w-4 h-4 mr-2" />
                Create New Spell
              </Button>
            </Link>
          </div>

          {/* Search and Tabs */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-orange-400" />
                <input
                  type="text"
                  placeholder="Search spells..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/80 border-2 border-orange-200 rounded-xl text-orange-800 placeholder-orange-400 focus:outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all"
                />
              </div>
              
              <div className="flex bg-white/80 rounded-xl border-2 border-orange-200 p-1">
                <button
                  onClick={() => setActiveTab('my-spells')}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${
                    activeTab === 'my-spells'
                      ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg'
                      : 'text-orange-600 hover:bg-orange-100'
                  }`}
                >
                  My Spells ({spells.length})
                </button>
                <button
                  onClick={() => setActiveTab('templates')}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${
                    activeTab === 'templates'
                      ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg'
                      : 'text-orange-600 hover:bg-orange-100'
                  }`}
                >
                  Templates ({templates.length})
                </button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-orange-200 p-6 shadow-lg sticky top-24">
                <AISmartFilter 
                  groups={filterGroups}
                  onFilterChange={handleFilterChange}
                  theme="orange"
                  showAISuggestions={true}
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              {isLoading ? (
                <div className="flex items-center justify-center py-20">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <Wand2 className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-orange-600 font-medium">Loading your spells...</p>
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {activeTab === 'my-spells' ? (
                    filteredSpells.length > 0 ? (
                      filteredSpells.map((spell) => (
                        <SpellCard key={spell.id} spell={spell} />
                      ))
                    ) : (
                      <div className="col-span-full text-center py-20">
                        <div className="w-24 h-24 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Wand2 className="w-12 h-12 text-orange-400" />
                        </div>
                        <h3 className="text-xl font-bold text-orange-800 mb-2">No spells yet</h3>
                        <p className="text-orange-600 mb-6">Create your first spell to get started with automation!</p>
                        <Link to="/magic-notebook">
                          <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white">
                            <Plus className="w-4 h-4 mr-2" />
                            Create Your First Spell
                          </Button>
                        </Link>
                      </div>
                    )
                  ) : (
                    filteredTemplates.length > 0 ? (
                      filteredTemplates.map((template) => (
                        <SpellCard key={template.id} spell={template} isTemplate />
                      ))
                    ) : (
                      <div className="col-span-full text-center py-20">
                        <div className="w-24 h-24 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Star className="w-12 h-12 text-orange-400" />
                        </div>
                        <h3 className="text-xl font-bold text-orange-800 mb-2">No templates found</h3>
                        <p className="text-orange-600">Try adjusting your search or check back later for new templates!</p>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-orange-200 p-6 text-center shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Wand2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-orange-800">{spells.length}</h3>
              <p className="text-orange-600">Personal Spells</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-orange-200 p-6 text-center shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-orange-800">{templates.length}</h3>
              <p className="text-orange-600">Available Templates</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-orange-200 p-6 text-center shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-orange-800">∞</h3>
              <p className="text-orange-600">Possibilities</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Spellbook;