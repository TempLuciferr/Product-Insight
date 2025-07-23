@@ .. @@
   const handleCTAClick = () => {
-    window.location.href = 'https://app--product-insight-ai-3cb8ce23.base44.app';
+    window.location.href = '/login';
   };

@@ .. @@
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