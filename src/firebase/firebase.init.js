// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfb3mGMFFaZDvndG9AL69EGcdYYUdrRXY",
  authDomain: "simple-firebase2-dd1a3.firebaseapp.com",
  projectId: "simple-firebase2-dd1a3",
  storageBucket: "simple-firebase2-dd1a3.firebasestorage.app",
  messagingSenderId: "1022788702607",
  appId: "1:1022788702607:web:f96754569ea3c7ced47bfa",
  measurementId: "G-CDRKWJ32W1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;