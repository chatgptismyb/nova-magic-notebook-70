
import { BookOpen, Code, Sparkles, ExternalLink } from 'lucide-react';

export const DocsSection = () => {
  const docCategories = [
    {
      title: "Getting Started",
      icon: "🚀",
      description: "Your first steps into the magical world",
      links: [
        { name: "Quick Start Guide", url: "#" },
        { name: "Creating Your First Spell", url: "#" },
        { name: "Understanding Nova", url: "#" }
      ]
    },
    {
      title: "Spell Crafting",
      icon: "🔮",
      description: "Master the art of magical automation",
      links: [
        { name: "Spell Syntax", url: "#" },
        { name: "Advanced Patterns", url: "#" },
        { name: "Conditional Magic", url: "#" }
      ]
    },
    {
      title: "API Reference",
      icon: "⚡",
      description: "Integrate Magic Notebook into your workflow",
      links: [
        { name: "REST API", url: "#" },
        { name: "Webhooks", url: "#" },
        { name: "SDK Documentation", url: "#" }
      ]
    },
    {
      title: "Integrations",
      icon: "🌐",
      description: "Connect with your favorite tools",
      links: [
        { name: "Calendar Apps", url: "#" },
        { name: "Note-taking Tools", url: "#" },
        { name: "Project Management", url: "#" }
      ]
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
            📚 Documentation
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            Everything you need to master Magic Notebook and become a spell-crafting wizard
          </p>
        </div>

        {/* Main Documentation Card */}
        <div className="bg-gradient-to-br from-purple-800/60 to-purple-900/60 rounded-3xl border-2 border-purple-500/30 backdrop-blur-sm p-8 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-purple-400/5 animate-shimmer"></div>
          
          <div className="relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-3xl font-bold text-yellow-300">Magic Academy</h3>
                </div>
                <p className="text-purple-200 text-lg leading-relaxed mb-6">
                  Learn to harness the full power of Nova with our comprehensive guides, tutorials, and examples. From basic spells to advanced automation wizardry.
                </p>
                <button className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-purple-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg text-lg flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Explore Docs
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-700/30 to-indigo-800/30 p-6 rounded-2xl border border-purple-500/30">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-purple-300 text-sm ml-2">Documentation</span>
                  </div>
                  
                  <div className="space-y-2 text-sm font-mono">
                    <div className="text-yellow-400"># Quick Start</div>
                    <div className="text-green-400">$ npm install @magic/notebook</div>
                    <div className="text-blue-400">import { Nova } from '@magic/notebook'</div>
                    <div className="text-purple-300">// Cast your first spell</div>
                    <div className="text-yellow-300">nova.cast("Organize my week")</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Documentation Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {docCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gradient-to-br from-purple-800/40 to-purple-900/40 p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:border-yellow-400/50 group"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h4 className="text-xl font-bold text-yellow-300 mb-2">{category.title}</h4>
                <p className="text-purple-200 text-sm">{category.description}</p>
              </div>
              
              <div className="space-y-3">
                {category.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    className="block text-purple-200 hover:text-yellow-300 transition-colors text-sm flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                  >
                    <Code className="w-4 h-4" />
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Community Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-800/50 to-indigo-800/50 p-8 rounded-3xl border border-purple-500/30 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-purple-400/5 animate-shimmer"></div>
            <div className="relative z-10">
              <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4 animate-spin-slow" />
              <h3 className="text-2xl font-bold text-yellow-300 mb-4">Join the Magic Community</h3>
              <p className="text-purple-200 mb-6 text-lg">
                Connect with fellow wizards, share spells, and get help from the community
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-purple-700 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-xl transition-colors">
                  Discord Community
                </button>
                <button className="bg-purple-700 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-xl transition-colors">
                  GitHub Repository
                </button>
                <button className="bg-purple-700 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-xl transition-colors">
                  Video Tutorials
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
