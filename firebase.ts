// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOrlGtRCPHfu9YCHRllByRRMJaEMmp6Ow",
  authDomain: "authsetup-54ccf.firebaseapp.com",
  projectId: "authsetup-54ccf",
  storageBucket: "authsetup-54ccf.appspot.com",
  messagingSenderId: "779513814724",
  appId: "1:779513814724:web:88a13b098b37d70948b391",
  measurementId: "G-T34V0GTH28"
};

// Initialize Firebase
let app;
try {
  app = initializeApp(firebaseConfig);
  console.log("Firebase app initialized:", app);
} catch (error) {
  console.error("Error initializing Firebase app:", error);
}

// Initialize Firebase Authentication
let auth;
try {
  auth = getAuth(app);
  console.log("Firebase auth initialized:", auth);
} catch (error) {
  console.error("Error initializing Firebase auth:", error);
}

export { auth };
