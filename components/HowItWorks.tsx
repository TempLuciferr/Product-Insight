@@ .. @@
         {/* Bottom CTA */}
         <div className="text-center mt-16">
-          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold">
+          <button 
+            onClick={() => window.location.href = '/login'}
+            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold"
+          >
             Try It Now
           </button>
         </div>