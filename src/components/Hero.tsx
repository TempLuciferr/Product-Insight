import React, { useState, useEffect } from 'react';
import { Upload, Camera, ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    { icon: Upload, text: "Upload any product image", color: "from-blue-500 to-blue-600" },
    { icon: Sparkles, text: "AI analyzes ingredients instantly", color: "from-purple-500 to-purple-600" },
    { icon: Shield, text: "Get safety ratings & insights", color: "from-green-500 to-green-600" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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

          {/* Interactive Feature Showcase */}
          <div className="mb-12 animate-fade-in-delay">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto border border-gray-200 dark:border-gray-700 shadow-xl">
              <div className="flex items-center justify-center space-x-4 mb-6">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div
                      key={index}
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        index === currentFeature
                          ? `bg-gradient-to-r ${feature.color} scale-110 shadow-lg`
                          : 'bg-gray-200 dark:bg-gray-700 scale-90'
                      }`}
                    >
                      <IconComponent 
                        className={`w-8 h-8 transition-colors duration-500 ${
                          index === currentFeature ? 'text-white' : 'text-gray-500 dark:text-gray-400'
                        }`} 
                      />
                    </div>
                  );
                })}
              </div>
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200 transition-all duration-500">
                {features[currentFeature].text}
              </p>
              <div className="flex justify-center mt-4 space-x-2">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentFeature ? 'bg-blue-600 w-8' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Main CTA Buttons */}
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

          {/* Primary CTA */}
          <div className="flex justify-center animate-fade-in-delay-2">
            <button 
              onClick={handleCTAClick}
              className="group px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 font-semibold text-lg"
            >
              <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform duration-200" />
              <span>Try Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Stats or Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-delay-2">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">95%+</div>
              <div className="text-gray-600 dark:text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">10K+</div>
              <div className="text-gray-600 dark:text-gray-300">Products Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">&lt;3s</div>
              <div className="text-gray-600 dark:text-gray-300">Analysis Time</div>
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