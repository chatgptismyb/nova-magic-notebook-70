import { useState, useEffect } from 'react';
import { Wand2, Plus, Search, Star, Zap, BookOpen, ArrowLeft, Play, Edit, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';

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

  useEffect(() => {
    loadSpells();
    loadTemplates();
  }, []);

  const loadSpells = async () => {
    try {
      const { data, error } = await supabase
        .from('spells')
        .select('*')
        .eq('user_id', currentUserId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSpells(data || []);
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
    } catch (error) {
      console.error('Error loading templates:', error);
    }
  };

  const filteredSpells = spells.filter(spell =>
    spell.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    spell.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTemplates = templates.filter(template =>
    template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    template.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
    } catch (error) {
      console.error('Error deleting spell:', error);
    }
  };

  const SpellCard = ({ spell, isTemplate = false }: { spell: Spell | SpellTemplate; isTemplate?: boolean }) => (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-purple-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
            <Wand2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-purple-800 text-lg">{spell.name}</h3>
            <p className="text-purple-600 text-sm">{spell.description}</p>
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

      <div className="bg-purple-50 rounded-xl p-4 mb-4 border border-purple-200">
        <p className="text-purple-700 text-sm font-mono leading-relaxed">
          {spell.prompt}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-xs text-purple-500">
          {isTemplate ? 'Template' : `Created ${new Date(spell.created_at).toLocaleDateString()}`}
        </div>
        
        <Button
          onClick={() => handleCastSpell(spell)}
          className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Play className="w-4 h-4 mr-2" />
          Cast Spell
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-yellow-50 to-purple-100 relative overflow-hidden">
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
            <div className="text-purple-400 text-xl">✨</div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/magic-notebook" className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Notebook</span>
          </Link>
          
          <div className="text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 border-2 border-purple-200 shadow-lg inline-block">
              <div className="flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-purple-600" />
                <div>
                  <h1 className="text-2xl font-bold text-purple-800">Spellbook</h1>
                  <p className="text-purple-600">Your magical automation library</p>
                </div>
              </div>
            </div>
          </div>
          
          <Link to="/magic-notebook">
            <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg">
              <Plus className="w-4 h-4 mr-2" />
              Create New Spell
            </Button>
          </Link>
        </div>

        {/* Search and Tabs */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
              <input
                type="text"
                placeholder="Search spells..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/80 border-2 border-purple-200 rounded-xl text-purple-800 placeholder-purple-400 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all"
              />
            </div>
            
            <div className="flex bg-white/80 rounded-xl border-2 border-purple-200 p-1">
              <button
                onClick={() => setActiveTab('my-spells')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'my-spells'
                    ? 'bg-purple-500 text-white shadow-lg'
                    : 'text-purple-600 hover:bg-purple-100'
                }`}
              >
                My Spells ({spells.length})
              </button>
              <button
                onClick={() => setActiveTab('templates')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'templates'
                    ? 'bg-purple-500 text-white shadow-lg'
                    : 'text-purple-600 hover:bg-purple-100'
                }`}
              >
                Templates ({templates.length})
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Wand2 className="w-8 h-8 text-white" />
              </div>
              <p className="text-purple-600 font-medium">Loading your spells...</p>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTab === 'my-spells' ? (
              filteredSpells.length > 0 ? (
                filteredSpells.map((spell) => (
                  <SpellCard key={spell.id} spell={spell} />
                ))
              ) : (
                <div className="col-span-full text-center py-20">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-200 to-yellow-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Wand2 className="w-12 h-12 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-800 mb-2">No spells yet</h3>
                  <p className="text-purple-600 mb-6">Create your first spell to get started with automation!</p>
                  <Link to="/magic-notebook">
                    <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white">
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
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-200 to-yellow-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-12 h-12 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-800 mb-2">No templates found</h3>
                  <p className="text-purple-600">Try adjusting your search or check back later for new templates!</p>
                </div>
              )
            )}
          </div>
        )}

        {/* Quick Stats */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-purple-200 p-6 text-center shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Wand2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-purple-800">{spells.length}</h3>
            <p className="text-purple-600">Personal Spells</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-purple-200 p-6 text-center shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-purple-800">{templates.length}</h3>
            <p className="text-purple-600">Available Templates</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-purple-200 p-6 text-center shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-purple-800">∞</h3>
            <p className="text-purple-600">Possibilities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spellbook;