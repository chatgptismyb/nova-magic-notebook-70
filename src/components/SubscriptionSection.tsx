
import { Star, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SubscriptionSection = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out the magic",
      features: [
        "50 magical notes per month",
        "Basic Nova assistance",
        "Simple automation spells",
        "Mobile & web access"
      ],
      cta: "Start Free",
      popular: false,
      gradient: "from-gray-100 to-gray-200",
      borderColor: "border-gray-300",
      buttonStyle: "bg-amber-100 hover:bg-amber-200 text-amber-800 border-2 border-amber-300"
    },
    {
      name: "Magic Pro",
      price: "$12",
      period: "per month", 
      description: "For serious magical productivity",
      features: [
        "Unlimited magical notes",
        "Advanced Nova AI parsing",
        "Complex automation workflows",
        "Team collaboration magic",
        "Priority spell casting",
        "Custom integration spells"
      ],
      cta: "Upgrade to Pro",
      popular: true,
      gradient: "from-amber-200 to-yellow-200",
      borderColor: "border-amber-400",
      buttonStyle: "bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white"
    },
    {
      name: "Enterprise",
      price: "$49",
      period: "per month",
      description: "Magical productivity for teams",
      features: [
        "Everything in Magic Pro",
        "Advanced team workflows",
        "Custom Nova training",
        "Enterprise integrations",
        "Dedicated spell support",
        "Advanced analytics magic"
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-purple-100 to-purple-200", 
      borderColor: "border-purple-300",
      buttonStyle: "bg-amber-100 hover:bg-amber-200 text-amber-800 border-2 border-amber-300"
    }
  ];

  return (
    <section className="py-24 px-6 relative bg-gradient-to-br from-yellow-100 via-amber-50 to-yellow-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-yellow-200 p-6 rounded-3xl border-4 border-amber-400 transform -rotate-1 hover:rotate-0 transition-transform duration-500 inline-block mb-8">
            <div className="flex items-center gap-3">
              <Star className="w-8 h-8 text-amber-700" />
              <span className="text-amber-800 font-bold text-2xl">Choose Your Magic</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-6">
            Simple, Magical Pricing
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Start free and upgrade when you're ready for more magic
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-gradient-to-br ${plan.gradient} rounded-3xl border-4 ${plan.borderColor} shadow-xl p-8 transform transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'rotate-1 hover:rotate-0' : index % 2 === 0 ? '-rotate-1 hover:rotate-0' : 'rotate-2 hover:rotate-0'
              }`}
            >
              
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                    ✨ Most Popular
                  </div>
                </div>
              )}
              
              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-amber-800 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-2 mb-3">
                  <span className="text-4xl font-bold text-amber-800">{plan.price}</span>
                  <span className="text-amber-600">{plan.period}</span>
                </div>
                <p className="text-amber-700 text-sm">{plan.description}</p>
              </div>
              
              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-amber-800 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Button - Now consistent with pricing page */}
              <Link
                to={plan.name === "Free" ? "/signup" : "/subscription"}
                className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg text-center block ${plan.buttonStyle}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-amber-200 to-yellow-200 p-8 rounded-3xl border-4 border-amber-400 max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-amber-800 mb-4">Still not sure?</h3>
            <p className="text-amber-700 mb-6">Try Magic Notebook free for 14 days. No credit card required.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start Free Trial
              </Link>
              <Link
                to="/showcase"
                className="border-2 border-amber-500 text-amber-700 hover:bg-amber-50 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
