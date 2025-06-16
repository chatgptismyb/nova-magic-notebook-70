
import { useState, useEffect } from 'react';
import { ArrowLeft, Check, Star, Download, ArrowRight } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const [selectedPlan, setSelectedPlan] = useState('premium');
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Get plan from URL params if coming from subscription page
  useEffect(() => {
    const planFromUrl = searchParams.get('plan');
    const cycleFromUrl = searchParams.get('cycle');
    
    if (planFromUrl && ['basic', 'premium', 'enterprise'].includes(planFromUrl)) {
      setSelectedPlan(planFromUrl);
    }
    
    if (cycleFromUrl && ['monthly', 'yearly'].includes(cycleFromUrl)) {
      setBillingCycle(cycleFromUrl);
    }
  }, [searchParams]);

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
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-200 text-slate-800">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <div className="text-orange-400 text-lg">✨</div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/subscription" 
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors mb-6 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Plans
          </Link>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-orange-200 p-4 rounded-2xl mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="text-orange-800 font-bold text-lg">Magic Notebook</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Complete Your Order ✨
            </h1>
            <p className="text-xl text-orange-700">
              You're one step away from transforming your productivity
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Plan Selection */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur rounded-2xl border-2 border-orange-200 p-6 shadow-xl">
              <h2 className="text-2xl font-bold text-orange-800 mb-6">Selected Plan</h2>
              
              {/* Billing Cycle Toggle */}
              <div className="mb-6">
                <div className="flex items-center justify-center bg-orange-100 rounded-xl p-1">
                  <button
                    onClick={() => setBillingCycle('monthly')}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                      billingCycle === 'monthly'
                        ? 'bg-orange-500 text-white shadow-lg'
                        : 'text-orange-600 hover:text-orange-800'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle('yearly')}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                      billingCycle === 'yearly'
                        ? 'bg-orange-500 text-white shadow-lg'
                        : 'text-orange-600 hover:text-orange-800'
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
                    className={`border-2 rounded-xl p-4 cursor-pointer transition-all hover:scale-105 ${
                      selectedPlan === key
                        ? 'border-orange-400 bg-orange-50 shadow-lg'
                        : 'border-orange-200 hover:border-orange-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-lg text-orange-800">{plan.name}</h3>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-orange-600">
                            ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                          </span>
                          <span className="text-orange-500 text-sm">
                            /{billingCycle === 'monthly' ? 'month' : 'year'}
                          </span>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedPlan === key
                          ? 'border-orange-500 bg-orange-500'
                          : 'border-orange-300'
                      }`}>
                        {selectedPlan === key && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-orange-200">
                <Link
                  to="/subscription"
                  className="text-orange-600 hover:text-orange-700 text-sm flex items-center gap-2 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Change plan or compare features
                </Link>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white/80 backdrop-blur rounded-2xl border-2 border-orange-200 p-6 shadow-xl">
              <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                {currentPlan.name} Features
              </h3>
              <ul className="space-y-3">
                {currentPlan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-orange-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="bg-white/80 backdrop-blur rounded-2xl border-2 border-orange-200 p-6 shadow-xl">
            <h2 className="text-2xl font-bold text-orange-800 mb-6">Payment Details</h2>
            
            {/* Order Summary */}
            <div className="bg-orange-50 rounded-xl p-4 mb-6 border border-orange-200">
              <h4 className="font-semibold text-orange-800 mb-3">Order Summary</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-orange-700">{currentPlan.name}</span>
                  <span className="font-bold text-orange-800">${currentPrice}</span>
                </div>
                {billingCycle === 'yearly' && savings > 0 && (
                  <div className="flex justify-between items-center text-green-600 text-sm">
                    <span>Annual savings</span>
                    <span>-${savings}</span>
                  </div>
                )}
                <hr className="border-orange-200 my-3" />
                <div className="flex justify-between items-center font-bold text-orange-800">
                  <span>Total</span>
                  <span>${currentPrice}</span>
                </div>
              </div>
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-orange-800 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-white border-2 border-orange-200 rounded-lg text-orange-900 placeholder-orange-400 focus:outline-none focus:border-orange-400 transition-colors"
              />
            </div>

            {/* Payment Info Placeholder */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-orange-800 mb-2">
                Payment Information
              </label>
              <div className="bg-orange-50 border-2 border-dashed border-orange-300 rounded-lg p-6 text-center">
                <div className="text-orange-600 mb-2">🔒 Secure Stripe Payment</div>
                <div className="text-sm text-orange-500">Payment form will appear here during integration</div>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              disabled={!email || isProcessing}
              className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing Magic...
                </>
              ) : (
                <>
                  ✨ Start Your Magic Journey - ${currentPrice}/{billingCycle === 'monthly' ? 'mo' : 'yr'}
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            {/* Trust Badges */}
            <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-4 text-sm text-orange-600">
                <div className="flex items-center gap-1">
                  <Download className="w-4 h-4" />
                  Instant Access
                </div>
                <div>•</div>
                <div>30-day Money Back</div>
                <div>•</div>
                <div>Cancel Anytime</div>
              </div>
              
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-700 text-sm font-medium">
                  🛡️ Your payment is protected by industry-leading security
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
