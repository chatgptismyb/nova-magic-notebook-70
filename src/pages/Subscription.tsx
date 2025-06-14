
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star, Crown, Zap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState('premium');

  const plans = [
    {
      id: 'basic',
      name: 'Magic Starter',
      price: '$9',
      period: '/month',
      description: 'Perfect for magical beginners',
      features: [
        'Basic Note Magic',
        'Simple Automation',
        '5 AI Suggestions/day',
        'Mobile App Access',
        'Basic Templates'
      ],
      icon: Star,
      color: 'from-yellow-400 to-amber-500'
    },
    {
      id: 'premium',
      name: 'Magic Master',
      price: '$19',
      period: '/month',
      description: 'For serious magical practitioners',
      features: [
        'Advanced Note Magic',
        'Smart Automation',
        'Unlimited AI Suggestions',
        'Priority Support',
        'Premium Templates',
        'Voice Commands',
        'Calendar Integration'
      ],
      icon: Crown,
      color: 'from-amber-500 to-yellow-600',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Magic Wizard',
      price: '$39',
      period: '/month',
      description: 'Ultimate magical power',
      features: [
        'Everything in Master',
        'Team Collaboration',
        'Custom Integrations',
        'Advanced Analytics',
        'API Access',
        'White-label Options',
        '24/7 Magic Support'
      ],
      icon: Zap,
      color: 'from-yellow-600 to-amber-700'
    }
  ];

  const handleSubscribe = (planId: string) => {
    console.log('Subscribe to:', planId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-amber-100 to-yellow-300 relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={`bg-note-${i}`}
            className="absolute animate-float-slow opacity-15"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              transform: `rotate(${Math.random() * 45 - 22.5}deg)`
            }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-300/30 to-amber-300/30 rounded-lg border-l-4 border-yellow-400/40" />
          </div>
        ))}
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-12">
          
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center gap-2 mb-8 text-amber-700 hover:text-amber-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Magic</span>
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="bg-amber-200 p-6 rounded-2xl border-4 border-yellow-400 transform -rotate-1 inline-block mb-6">
              <img 
                src="/lovable-uploads/cb8ad732-ec0b-4d19-8ec7-5886d9f5bda1.png" 
                alt="Magic Notebook Logo" 
                className="w-20 h-20 mx-auto"
              />
            </div>
            <h1 className="text-5xl font-bold text-amber-800 mb-4">Choose Your Magic Level</h1>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Select the perfect magical plan to transform your productivity and unlock your potential
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {plans.map((plan) => {
              const IconComponent = plan.icon;
              return (
                <div
                  key={plan.id}
                  className={`relative bg-gradient-to-br from-yellow-100 to-amber-100 p-8 rounded-3xl border-4 ${
                    selectedPlan === plan.id ? 'border-amber-500 scale-105' : 'border-amber-300'
                  } shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                    plan.popular ? 'transform -rotate-1' : plan.id === 'basic' ? 'rotate-1' : '-rotate-1'
                  } hover:rotate-0`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-6 py-2 rounded-full font-bold text-sm border-2 border-amber-600">
                        Most Popular ⭐
                      </div>
                    </div>
                  )}
                  
                  {/* Plan Header */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-amber-800 mb-2">{plan.name}</h3>
                    <p className="text-amber-600">{plan.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-amber-800">{plan.price}</span>
                      <span className="text-amber-600 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-amber-800">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Subscribe Button */}
                  <Button
                    onClick={() => handleSubscribe(plan.id)}
                    className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 ${
                      selectedPlan === plan.id
                        ? `bg-gradient-to-r ${plan.color} text-white hover:shadow-lg`
                        : 'bg-amber-200 text-amber-800 hover:bg-amber-300'
                    }`}
                  >
                    {selectedPlan === plan.id ? 'Selected Plan ✨' : 'Choose This Magic'}
                  </Button>
                </div>
              );
            })}
          </div>

          {/* Features Comparison */}
          <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-8 rounded-3xl border-4 border-amber-400 max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-amber-800 text-center mb-6">All Plans Include</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🔮</div>
                <h4 className="font-semibold text-amber-800 mb-2">AI-Powered Magic</h4>
                <p className="text-amber-700 text-sm">Advanced AI assistance for all your tasks</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📱</div>
                <h4 className="font-semibold text-amber-800 mb-2">Cross-Platform</h4>
                <p className="text-amber-700 text-sm">Available on all your devices</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🔒</div>
                <h4 className="font-semibold text-amber-800 mb-2">Secure & Private</h4>
                <p className="text-amber-700 text-sm">Your magic is safe with us</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Subscription;
