import React from 'react';
import { Star, Shield, ShoppingCart } from 'lucide-react';

const UseCases: React.FC = () => {
  const useCases = [
    {
      icon: Star,
      title: 'Skincare Product Reviewers',
      description: 'Analyze skincare ingredients, identify potential allergens, and provide comprehensive reviews with safety ratings.',
      benefits: ['Ingredient analysis', 'Allergen detection', 'Safety scoring', 'Review generation'],
      color: 'from-pink-500 to-pink-600',
      bgColor: 'from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20'
    },
    {
      icon: Shield,
      title: 'Health & Safety Analysts',
      description: 'Evaluate product safety, identify harmful substances, and ensure compliance with health standards.',
      benefits: ['Safety assessment', 'Compliance checking', 'Risk analysis', 'Report generation'],
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Product Teams',
      description: 'Enhance product listings with detailed analysis, improve search functionality, and boost customer confidence.',
      benefits: ['Product categorization', 'Enhanced listings', 'Customer insights', 'Search optimization'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Perfect for <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Every Team</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover how different professionals use ProductInsight to enhance their workflows
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden bg-gradient-to-br ${useCase.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-grid-pattern"></div>
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {useCase.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Key Benefits:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 bg-gradient-to-r ${useCase.color} rounded-full`}></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <button className={`px-4 py-2 bg-gradient-to-r ${useCase.color} text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm font-medium`}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="mt-20 text-center">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 max-w-4xl mx-auto border border-gray-100 dark:border-gray-700">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl text-gray-700 dark:text-gray-300 mb-4 italic">
              "ProductInsight has revolutionized how we analyze skincare products. The AI accuracy is incredible, and it saves us hours of manual research."
            </blockquote>
            <cite className="text-gray-600 dark:text-gray-400 font-medium">
              — Sarah Chen, Beauty Product Reviewer
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;