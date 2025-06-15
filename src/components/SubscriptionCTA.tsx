
import { useState } from 'react';
import { Check, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const SubscriptionCTA = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Apprentice",
      description: "Perfect for magical beginners",
      monthlyPrice: 9,
      yearlyPrice: 90,
      features: [
        "50 spells per month",
        "Basic Nova conversations",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Wizard",
      description: "For serious spell casters",
      monthlyPrice: 19,
      yearlyPrice: 190,
      features: [
        "Unlimited spells",
        "Advanced Nova AI",
        "Priority support",
        "API access",
        "Custom automations",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Archmage",
      description: "Enterprise magical solutions",
      monthlyPrice: 49,
      yearlyPrice: 490,
      features: [
        "Everything in Wizard",
        "White-label Nova",
        "Custom integrations",
        "Dedicated support",
        "Training sessions",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
            ✨ Choose Your Magic Plan
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            Unlock Nova's full potential with a subscription that grows with your magical needs
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-lg ${!isYearly ? 'text-yellow-300' : 'text-purple-300'}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-16 h-8 rounded-full transition-colors ${
                isYearly ? 'bg-yellow-400' : 'bg-purple-600'
              }`}
            >
              <div className={`absolute w-6 h-6 bg-white rounded-full top-1 transition-transform ${
                isYearly ? 'translate-x-9' : 'translate-x-1'
              }`} />
            </button>
            <span className={`text-lg ${isYearly ? 'text-yellow-300' : 'text-purple-300'}`}>
              Yearly <span className="text-green-400">(Save 2 months!)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-gradient-to-br from-purple-800/60 to-purple-900/60 p-8 rounded-3xl border-2 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-yellow-400/50 hover:border-yellow-400/70' 
                  : 'border-purple-500/30 hover:border-purple-400/50'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-purple-900 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-yellow-300 mb-2">{plan.name}</h3>
                <p className="text-purple-200 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-purple-300">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-purple-200">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full py-3 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-purple-900'
                    : 'bg-purple-700 hover:bg-purple-600 text-white'
                }`}
              >
                Start Your {plan.name} Journey
                <Sparkles className="w-5 h-5 ml-2" />
              </Button>

              {/* Glow effect for popular plan */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-amber-400/10 rounded-3xl -z-10" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-800/50 to-indigo-800/50 p-8 rounded-3xl border border-purple-500/30 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-purple-400/5 animate-shimmer"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-yellow-300 mb-4">Not sure which plan is right for you?</h3>
              <p className="text-purple-200 mb-6 text-lg">Start with a 7-day free trial and experience the magic yourself</p>
              <Button className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-purple-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg text-lg">
                Start Free Trial ✨
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
