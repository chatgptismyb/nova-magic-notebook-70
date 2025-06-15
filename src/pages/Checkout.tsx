
import { useState } from 'react';
import { ArrowLeft, Check, Star, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [selectedPlan, setSelectedPlan] = useState('premium');
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const plans = {
    basic: {
      name: 'Basic Magic',
      monthlyPrice: 9,
      yearlyPrice: 90,
      features: [
        '100 magical notes per month',
        'Basic Nova assistance',
        'Simple automation spells',
        'Mobile & web access',
        'Email support'
      ]
    },
    premium: {
      name: 'Premium Magic',
      monthlyPrice: 19,
      yearlyPrice: 190,
      features: [
        'Unlimited magical notes',
        'Advanced Nova AI parsing',
        'Complex automation workflows',
        'Team collaboration magic',
        'Priority spell casting',
        'Custom integration spells',
        'Priority support'
      ]
    },
    enterprise: {
      name: 'Enterprise Magic',
      monthlyPrice: 49,
      yearlyPrice: 490,
      features: [
        'Everything in Premium',
        'Advanced team workflows',
        'Custom Nova training',
        'Enterprise integrations',
        'Dedicated spell support',
        'Advanced analytics magic',
        'White-label options'
      ]
    }
  };

  const currentPlan = plans[selectedPlan as keyof typeof plans];
  const currentPrice = billingCycle === 'monthly' ? currentPlan.monthlyPrice : currentPlan.yearlyPrice;
  const savings = billingCycle === 'yearly' ? (currentPlan.monthlyPrice * 12 - currentPlan.yearlyPrice) : 0;

  const handleCheckout = async () => {
    setIsProcessing(true);
    // Simulate checkout process
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    // In a real app, this would integrate with Stripe
    alert('Checkout functionality will be implemented with Stripe integration!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <div className="text-yellow-300 text-xs">✨</div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-yellow-300 hover:text-yellow-400 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
              Choose Your Magic ✨
            </h1>
            <p className="text-xl text-gray-300">
              Select the perfect plan to unlock your productivity potential
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Plan Selection */}
          <div className="space-y-6">
            <div className="bg-slate-800/60 rounded-2xl border border-purple-500/30 p-6">
              <h2 className="text-2xl font-bold text-yellow-300 mb-6">Select Your Plan</h2>
              
              {/* Billing Cycle Toggle */}
              <div className="mb-6">
                <div className="flex items-center justify-center bg-slate-700/50 rounded-xl p-1">
                  <button
                    onClick={() => setBillingCycle('monthly')}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                      billingCycle === 'monthly'
                        ? 'bg-yellow-600 text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle('yearly')}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                      billingCycle === 'yearly'
                        ? 'bg-yellow-600 text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    Yearly
                    <span className="ml-1 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">
                      Save ${(plans.premium.monthlyPrice * 12 - plans.premium.yearlyPrice)}
                    </span>
                  </button>
                </div>
              </div>

              {/* Plan Options */}
              <div className="space-y-4">
                {Object.entries(plans).map(([key, plan]) => (
                  <div
                    key={key}
                    onClick={() => setSelectedPlan(key)}
                    className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                      selectedPlan === key
                        ? 'border-yellow-500 bg-yellow-500/10'
                        : 'border-slate-600 hover:border-slate-500'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-lg">{plan.name}</h3>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-yellow-300">
                            ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                          </span>
                          <span className="text-gray-400 text-sm">
                            /{billingCycle === 'monthly' ? 'month' : 'year'}
                          </span>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 ${
                        selectedPlan === key
                          ? 'border-yellow-500 bg-yellow-500'
                          : 'border-gray-400'
                      }`}>
                        {selectedPlan === key && (
                          <Check className="w-3 h-3 text-white m-0.5" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-slate-800/60 rounded-2xl border border-purple-500/30 p-6">
              <h3 className="text-xl font-bold text-yellow-300 mb-4">
                {currentPlan.name} Features
              </h3>
              <ul className="space-y-3">
                {currentPlan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="bg-slate-800/60 rounded-2xl border border-purple-500/30 p-6">
            <h2 className="text-2xl font-bold text-yellow-300 mb-6">Complete Your Order</h2>
            
            {/* Order Summary */}
            <div className="bg-slate-700/50 rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">{currentPlan.name}</span>
                <span className="font-bold">${currentPrice}</span>
              </div>
              {billingCycle === 'yearly' && savings > 0 && (
                <div className="flex justify-between items-center text-green-400 text-sm">
                  <span>Annual savings</span>
                  <span>-${savings}</span>
                </div>
              )}
              <hr className="border-slate-600 my-3" />
              <div className="flex justify-between items-center font-bold text-yellow-300">
                <span>Total</span>
                <span>${currentPrice}</span>
              </div>
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>

            {/* Payment Info Placeholder */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Payment Information
              </label>
              <div className="bg-slate-700/30 border-2 border-dashed border-slate-600 rounded-lg p-6 text-center">
                <div className="text-gray-400 mb-2">Stripe payment form will appear here</div>
                <div className="text-sm text-gray-500">Secure payment processing coming soon</div>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              disabled={!email || isProcessing}
              className="w-full bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg disabled:cursor-not-allowed disabled:scale-100"
            >
              {isProcessing ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </div>
              ) : (
                `Start Your Magic Journey - $${currentPrice}/${billingCycle === 'monthly' ? 'mo' : 'yr'}`
              )}
            </button>

            {/* Trust Badges */}
            <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Download className="w-4 h-4" />
                  Instant Access
                </div>
                <div>•</div>
                <div>30-day Money Back</div>
                <div>•</div>
                <div>Cancel Anytime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
