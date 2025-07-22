import React from 'react';
import { Upload, Camera, ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  const handleCTAClick = () => {
    window.location.href = 'https://app--product-insight-ai-3cb8ce23.base44.app';
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 h-screen flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-float-delay opacity-40"></div>
        <div className="absolute bottom-32 left-16 w-2 h-2 bg-pink-400 rounded-full animate-float-delay-2 opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-blue-300 rounded-full animate-float opacity-70"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-12 animate-fade-in">
          <Sparkles className="w-5 h-5 text-yellow-400" />
          <span className="text-white/90 text-sm font-medium">AI-Powered Product Intelligence</span>
        </div>

        {/* Main Title */}
        <div className="mb-8 animate-fade-in-delay">
          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black text-white mb-6 leading-none">
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Decode
            </span>
            <span className="block text-white/90 text-5xl sm:text-6xl lg:text-7xl font-light mt-2">
              Every Product
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-white/70 mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-2">
          Transform any product image into comprehensive insights with our advanced AI analysis engine
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center space-y-8 animate-fade-in-delay-2">
          {/* Primary CTA */}
          <button 
            onClick={handleCTAClick}
            className="group relative px-12 py-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-2xl font-bold text-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center space-x-3">
              <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>Start Analysis</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </button>

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={handleCTAClick}
              className="group px-10 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center space-x-3 min-w-[200px] justify-center"
            >
              <Upload className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">Upload Image</span>
            </button>
            
            <button 
              onClick={handleCTAClick}
              className="group px-10 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center space-x-3 min-w-[200px] justify-center"
            >
              <Camera className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">Use Camera</span>
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-12 mt-20 animate-fade-in-delay-2">
          <div className="flex items-center space-x-3 text-white/60">
            <Shield className="w-6 h-6 text-green-400" />
            <span className="text-lg font-medium">99.9% Accurate</span>
          </div>
          <div className="flex items-center space-x-3 text-white/60">
            <Zap className="w-6 h-6 text-yellow-400" />
            <span className="text-lg font-medium">Instant Results</span>
          </div>
          <div className="flex items-center space-x-3 text-white/60">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <span className="text-lg font-medium">AI-Powered</span>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
};

export default Hero;