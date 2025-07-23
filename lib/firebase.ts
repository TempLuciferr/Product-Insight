@@ .. @@
 import { initializeApp } from 'firebase/app';
 import { getAuth, GoogleAuthProvider } from 'firebase/auth';
+import { getAnalytics } from 'firebase/analytics';
 
 const firebaseConfig = {
-  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
-  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
-  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
-  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
-  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
-  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
+  apiKey: "AIzaSyCaBPOBUJk-0lsGtwjxQlNCASFG7AviHVY",
+  authDomain: "productinsight-58fef.firebaseapp.com",
+  projectId: "productinsight-58fef",
+  storageBucket: "productinsight-58fef.firebasestorage.app",
+  messagingSenderId: "718136152591",
+  appId: "1:718136152591:web:87d4e64291ac0a8591097a",
+  measurementId: "G-7KTNJ8ZSSW"
 };
 
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
+
+// Initialize Analytics (only in browser environment)
+let analytics;
+if (typeof window !== 'undefined') {
+  analytics = getAnalytics(app);
+}
 
 // Initialize Firebase Auth
 export const auth = getAuth(app);
 export const googleProvider = new GoogleAuthProvider();
-export default app;