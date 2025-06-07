
export const NotesSection = () => {
  const notesFeatures = [
    {
      icon: '📝',
      title: 'Enchanted Note-Taking',
      description: 'Your notes come alive with AI insights, automatic organization, and spell-powered connections'
    },
    {
      icon: '🔗',
      title: 'Magical Linking',
      description: 'Notes automatically connect across projects, creating a web of knowledge that grows smarter'
    },
    {
      icon: '🎯',
      title: 'Action Spells',
      description: 'Transform ideas into actionable spells that Nova can execute across your entire workflow'
    },
    {
      icon: '🧠',
      title: 'Memory Palace',
      description: 'Never lose a thought again with AI-powered memory that recalls context and connections'
    }
  ];

  const pricingPlans = [
    {
      name: 'Magic Starter',
      price: '$9',
      period: '/month',
      features: [
        '100 spells per month',
        'Basic note enchantments',
        'Mobile companion app',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Life Wizard',
      price: '$29',
      period: '/month',
      features: [
        'Unlimited spells',
        'Advanced automation',
        'Cross-platform sync',
        'Priority Nova support',
        'Custom spell creation',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Archmage',
      price: '$79',
      period: '/month',
      features: [
        'Everything in Life Wizard',
        'White-label Nova',
        'API access',
        'Custom integrations',
        'Dedicated support',
        'Advanced analytics'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 px-6 relative bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Notes Features */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
            📓 Magical Note-Taking
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your scattered thoughts into an organized, intelligent knowledge system that works magic for your productivity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {notesFeatures.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-slate-800/50 rounded-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-yellow-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
            ⚡ Choose Your Magic
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlock the power of magical productivity with our spellbinding subscription plans
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? 'bg-gradient-to-b from-yellow-500/20 to-amber-500/20 border-yellow-500/50 shadow-lg shadow-yellow-500/20'
                  : 'bg-slate-800/50 border-slate-700/50 hover:border-yellow-500/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-600 to-amber-600 text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular ✨
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-yellow-400">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <span className="text-yellow-400 mr-3">✨</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-yellow-600 to-amber-600 text-black hover:from-yellow-700 hover:to-amber-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600 border border-yellow-500/30 hover:border-yellow-500/50'
                }`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            All plans include a 14-day magical trial. Cancel anytime, no binding spells.
          </p>
        </div>
      </div>
    </section>
  );
};
