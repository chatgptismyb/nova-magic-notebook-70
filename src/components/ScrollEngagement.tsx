
import { useState, useEffect } from 'react';
import { Sparkles, Star, Heart, Zap, Target, Rocket } from 'lucide-react';

export const ScrollEngagement = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleNotes, setVisibleNotes] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateVisibleNotes = () => {
      const newVisible: number[] = [];
      const sections = document.querySelectorAll('[data-scroll-section]');
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2) {
          newVisible.push(index);
        }
      });
      
      setVisibleNotes(newVisible);
    };

    updateVisibleNotes();
    window.addEventListener('scroll', updateVisibleNotes);
    return () => window.removeEventListener('scroll', updateVisibleNotes);
  }, []);

  const stickyNotes = [
    {
      id: 0,
      icon: Sparkles,
      title: "Magic Begins Here",
      content: "Your thoughts become reality with just three simple words",
      color: "from-yellow-200 to-amber-200",
      position: { top: '20vh', right: '10px' },
      rotation: 'rotate-6'
    },
    {
      id: 1,
      icon: Star,
      title: "AI That Understands",
      content: "Nova learns your patterns and makes intelligent suggestions",
      color: "from-purple-200 to-pink-200",
      position: { top: '40vh', left: '10px' },
      rotation: '-rotate-3'
    },
    {
      id: 2,
      icon: Heart,
      title: "Love Your Workflow",
      content: "12,000+ users transformed their productivity with magic",
      color: "from-rose-200 to-pink-200",
      position: { top: '60vh', right: '20px' },
      rotation: 'rotate-4'
    },
    {
      id: 3,
      icon: Zap,
      title: "Instant Action",
      content: "Watch your notes transform into real results automatically",
      color: "from-blue-200 to-cyan-200",
      position: { top: '80vh', left: '15px' },
      rotation: '-rotate-2'
    },
    {
      id: 4,
      icon: Target,
      title: "Perfect Organization",
      content: "Every thought finds its place in your magical system",
      color: "from-green-200 to-emerald-200",
      position: { top: '100vh', right: '15px' },
      rotation: 'rotate-5'
    },
    {
      id: 5,
      icon: Rocket,
      title: "Ready for Takeoff?",
      content: "Join the magic and transform your productivity today",
      color: "from-orange-200 to-yellow-200",
      position: { top: '120vh', left: '20px' },
      rotation: '-rotate-4'
    }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {stickyNotes.map((note, index) => {
        const Icon = note.icon;
        const isVisible = visibleNotes.includes(index);
        const parallaxOffset = scrollY * 0.1;
        
        return (
          <div
            key={note.id}
            className={`absolute transition-all duration-1000 transform ${note.rotation} ${
              isVisible 
                ? 'opacity-100 scale-100 translate-y-0' 
                : 'opacity-0 scale-75 translate-y-4'
            }`}
            style={{
              ...note.position,
              transform: `${note.rotation} translateY(-${parallaxOffset}px) ${
                isVisible ? 'scale(1)' : 'scale(0.75) translateY(16px)'
              }`
            }}
          >
            <div className={`bg-gradient-to-br ${note.color} p-4 rounded-2xl shadow-lg border-2 border-amber-300/50 max-w-xs hover:scale-110 transition-transform duration-300 pointer-events-auto cursor-pointer`}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center">
                  <Icon className="w-4 h-4 text-amber-600" />
                </div>
                <h3 className="font-bold text-amber-800 text-sm">{note.title}</h3>
              </div>
              <p className="text-amber-700 text-xs leading-relaxed">{note.content}</p>
              <div className="absolute top-2 right-2 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
