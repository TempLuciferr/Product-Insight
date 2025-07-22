import React from 'react';
import { Upload, Camera, ArrowRight } from 'lucide-react';

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

          {/* Main CTA Buttons - Better aligned */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in-delay-2">
            <button 
              onClick={handleCTAClick}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 w-full sm:w-auto min-w-[240px]"
            >
              <Upload className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-semibold">Upload Product Images</span>
            </button>
            
            <button 
              onClick={handleCTAClick}
              className="group px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 w-full sm:w-auto min-w-[240px]"
            >
              <Camera className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-semibold">Use Camera</span>
            </button>
          </div>

          {/* Secondary CTA - More prominent */}
          <div className="flex justify-center animate-fade-in-delay-2">
            <button 
              onClick={handleCTAClick}
              className="group px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 font-semibold text-lg"
            >
              <span>Try Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Feature highlights */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-delay-2">
            <div className="flex flex-col items-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-3">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Instant Upload</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">Upload any product image for immediate analysis</p>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">AI Analysis</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">Advanced AI identifies ingredients and safety</p>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Safety Ratings</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">Get comprehensive safety scores and insights</p>
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