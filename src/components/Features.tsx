import React from 'react';
import { Image, Brain, GitCompare, Smartphone } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Image,
      title: 'Upload Any Product Photo',
      description: 'Support for JPG, PNG, WebP formats. High-quality image processing for accurate results.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Brain,
      title: 'AI Auto-Detection',
      description: 'Automatically detects products and ingredients using advanced computer vision and machine learning.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: GitCompare,
      title: 'Visual Product Comparison',
      description: 'Compare multiple products side-by-side with detailed analysis and recommendations.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile & Desktop Friendly',
      description: 'Responsive design that works seamlessly across all devices and screen sizes.',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need for comprehensive product analysis and insights
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features List */}
        <div className="mt-20 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Additional Capabilities
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Real-time safety scoring',
              'Ingredient breakdown analysis',
              'Allergen detection',
              'Nutritional information extraction',
              'Brand and product identification',
              'Batch processing capabilities'
            ].map((capability, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;