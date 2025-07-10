// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_uP-4agRB1RV9OYcDVPdd5oXVf3LcMw4",
  authDomain: "entertainment-web-app-fd3b4.firebaseapp.com",
  projectId: "entertainment-web-app-fd3b4",
  storageBucket: "entertainment-web-app-fd3b4.firebasestorage.app",
  messagingSenderId: "779613187783",
  appId: "1:779613187783:web:b78b481b461951a47b18e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

