// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyA7rdorFxfxedRs_sYgMcxjKJrZ8XMvCn4",
  authDomain: "ember-app-f8166.firebaseapp.com",
  projectId: "ember-app-f8166",
  storageBucket: "ember-app-f8166.firebasestorage.app",
  messagingSenderId: "162308676217",
  appId: "1:162308676217:web:9ebf7a63508ebf9d1e52a8",
  measurementId: "G-0SSF6HCYTB"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);
export const auth = getAuth(firebaseApp);
