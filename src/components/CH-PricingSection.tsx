import { Check } from 'lucide-react';
import React from 'react';

const pricingData = [
  {
    title: 'Gold Plan',
    description: 'Level up with more power and enhanced features.',
    originalPrice: '12.99',
    discountedPrice: '3.99',
    savePercent: '75%',
    term: '48-month term',
    additionalSave: '+15% save on all Safionix services and products',
    features: [
      { name: '15% save development & products', included: true },
      { name: '15% OFF', included: true },
      { name: 'Unlimited Monthly Insights', included: true },
      { name: 'Basic support', included: true },
      { name: 'Resource Library', included: true },
      { name: 'Early Bird Alerts', included: true },
      { name: 'Personalized Recommendations', included: false },
      { name: 'Priority support', included: false },
    ],
    isPopular: false,
  },
  {
    title: 'VIP Plan',
    description: 'For the discerning individuals who demand more value and exclusivity.',
    originalPrice: '14.99',
    discountedPrice: '4.99',
    savePercent: '71%',
    term: '48-month term',
    additionalSave: '+20% save on all Safionix services and products',
    features: [
      { name: '20% save for all services', included: true },
      { name: '20% OFF', included: true },
      { name: 'Unlimited Monthly Insights', included: true },
      { name: 'Advanced support', included: true },
      { name: 'Resource Library', included: true },
      { name: 'Early Bird Alerts', included: true },
      { name: 'Personalized Recommendations', included: true },
      { name: 'Priority support', included: false },
    ],
    isPopular: true,
  },
  {
    title: 'Elite Plan',
    description: 'Ideal for large, diverse teams requiring top-tier capabilities.',
    originalPrice: '29.99',
    discountedPrice: '8.99',
    savePercent: '71%',
    term: '48-month term',
    additionalSave: '+35% save on all Safionix services and products',
    features: [
      { name: '35% save for all services', included: true },
      { name: '35% OFF', included: true },
      { name: 'Unlimited Monthly Insights', included: true },
      { name: '24/7 Premium support', included: true },
      { name: 'Resource Library', included: true },
      { name: 'Early Bird Alerts', included: true },
      { name: 'Custom Solutions', included: true },
      { name: 'Priority support', included: true },
    ],
    isPopular: false,
  },
];

export default function PricingSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className={`relative border border-dashed rounded-lg p-6 bg-gray-50 hover:shadow-md transition ${
                plan.isPopular ? 'border-purple-500' : ''
              }`}
            >
              {/* Most Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              {/* Plan Title and Description */}
              <h3 className="font-semibold text-gray-800 mb-1">{plan.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{plan.description}</p>

              {/* Pricing */}
              <div className="mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-500 line-through">
                    US${plan.originalPrice}
                  </span>
                  <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-2 py-1 rounded">
                    SAVE {plan.savePercent}
                  </span>
                </div>
                <div className="flex items-baseline mt-2">
                  <span className="text-2xl font-bold text-gray-800">
                    US${plan.discountedPrice}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">/mo</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{plan.term}</p>
                <p className="text-sm text-purple-600 mt-2">
                  {plan.additionalSave}
                </p>
              </div>

              {/* Choose Plan Button */}
              <button className="w-full bg-black text-white text-sm py-2 px-4 rounded-full hover:bg-gray-800 mb-6">
                Choose plan →
              </button>

              {/* Features List */}
              <ul className="space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                    <span
                      className={`text-sm ${
                        feature.included ? 'text-gray-600' : 'text-gray-400'
                      }`}
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}