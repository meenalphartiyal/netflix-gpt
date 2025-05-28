// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMG_-lsVE8dnjUBOeyNkAiMBp4L9HAq1I",
  authDomain: "netflixgpt-6612b.firebaseapp.com",
  projectId: "netflixgpt-6612b",
  storageBucket: "netflixgpt-6612b.firebasestorage.app",
  messagingSenderId: "23945215622",
  appId: "1:23945215622:web:1676ff9d8874e32e799b07",
  measurementId: "G-W64QX4Y9JW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
