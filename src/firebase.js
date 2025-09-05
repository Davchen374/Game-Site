import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";   // For authentication
import { getFirestore } from "firebase/firestore"; // For database
import { getStorage } from "firebase/storage"; // For file uploads
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvwxpNbQ08JbWXHONscpKg7dNUqaxl-rA",
  authDomain: "gamesite-d5c95.firebaseapp.com",
  projectId: "gamesite-d5c95",
  storageBucket: "gamesite-d5c95.firebasestorage.app",
  messagingSenderId: "79505611133",
  appId: "1:79505611133:web:419338f86c21a51ed65414",
  measurementId: "G-7QC5HNJJG7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);