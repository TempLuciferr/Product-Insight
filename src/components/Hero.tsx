import React from 'react';
import { Upload, Camera } from 'lucide-react';

const Hero: React.FC = () => {
  const handleCTAClick = () => {
    window.location.href = 'https://app--product-insight-ai-3cb8ce23.base44.app';
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-20 sm:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Hero Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Product Analysis
            </span>
          </h1>

          {/* Hero Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
            Upload product images to get detailed insights, safety ratings, and ingredient analysis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-delay-2">
            <button 
              onClick={handleCTAClick}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 min-w-[220px]"
            >
              <Upload className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-semibold">Upload Product Images</span>
            </button>
            
            <button 
              onClick={handleCTAClick}
              className="group px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 min-w-[220px]"
            >
              <Camera className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-semibold">Use Camera</span>
            </button>
          </div>

          {/* Upload Icon Animation */}
          <div className="flex justify-center animate-bounce">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg">
              <Upload className="w-8 h-8 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-purple-200 dark:bg-purple-900 rounded-full opacity-20 animate-float-delay"></div>
      <div className="absolute top-1/2 right-20 w-8 h-8 bg-pink-200 dark:bg-pink-900 rounded-full opacity-20 animate-float-delay-2"></div>
    </section>
  );
};

export default Hero;