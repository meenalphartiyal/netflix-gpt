// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtydY9RTGHXiBQ3hdwgtjDxYEk20uUDK4",
  authDomain: "moviegpt-9eafc.firebaseapp.com",
  projectId: "moviegpt-9eafc",
  storageBucket: "moviegpt-9eafc.firebasestorage.app",
  messagingSenderId: "932805108990",
  appId: "1:932805108990:web:86250b55625038eb43b1af",
  measurementId: "G-E0CPWPVHED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
