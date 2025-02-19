// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCKPsGYq8jboaVCK21jjNL0vZRagoNND9g",
  authDomain: "ember-go.firebaseapp.com",
  projectId: "ember-go",
  storageBucket: "ember-go.firebasestorage.app",
  messagingSenderId: "1043917871455",
  appId: "1:1043917871455:web:7460e7f908eb7d16627eea",
  measurementId: "G-KSHLK9L9YG"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);
export const auth = getAuth(firebaseApp);
