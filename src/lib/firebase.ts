// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwHSjZffuiZfyCHskEcniNWO4e__YN0qs",
  authDomain: "florza.firebaseapp.com",
  projectId: "florza",
  storageBucket: "florza.firebasestorage.app",
  messagingSenderId: "171268029896",
  appId: "1:171268029896:web:cc21f3256f134ef64ed4fd",
  measurementId: "G-K9LEXD76H9"
};

// Initialize Firebase (preventing re-initialization in Next.js dev mode)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Analytics conditionally (only in browser environments)
let analytics: Analytics | undefined;

if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
