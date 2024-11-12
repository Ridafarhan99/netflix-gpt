// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnqg1Rv0TOVJJFvn4RnOt3wMuILJJZ3ZQ",
  authDomain: "netflix-gpt-rida.firebaseapp.com",
  projectId: "netflix-gpt-rida",
  storageBucket: "netflix-gpt-rida.firebasestorage.app",
  messagingSenderId: "2602336525",
  appId: "1:2602336525:web:8a977f903074943d807044",
  measurementId: "G-1D3G94W51C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
