@@ .. @@
             <p className="text-blue-100 mb-6">
               Our team is here to help. Get in touch with us for personalized support.
             </p>
-            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold">
+            <button 
+              onClick={() => window.location.href = '/login'}
+              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold"
+            >
               Contact Support
             </button>
           </div>