// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjixb92AaBXqRiGpkyDxHt6IyW-C0SXyc",
  authDomain: "twitter-clone-309f3.firebaseapp.com",
  projectId: "twitter-clone-309f3",
  storageBucket: "twitter-clone-309f3.appspot.com",
  messagingSenderId: "797900134102",
  appId: "1:797900134102:web:18ee83c52f286838269b77",
  measurementId: "G-12959TMDSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
