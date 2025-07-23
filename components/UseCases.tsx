@@ .. @@
                 {/* CTA */}
                 <div className="mt-6">
-                  <button className={`px-4 py-2 bg-gradient-to-r ${useCase.color} text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm font-medium`}>
+                  <button 
+                    onClick={() => window.location.href = '/login'}
+                    className={`px-4 py-2 bg-gradient-to-r ${useCase.color} text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm font-medium`}
+                  >
                     Learn More
                   </button>
                 </div>