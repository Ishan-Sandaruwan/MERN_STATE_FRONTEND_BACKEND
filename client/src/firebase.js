// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ef1e8.firebaseapp.com",
  projectId: "mern-estate-ef1e8",
  storageBucket: "mern-estate-ef1e8.appspot.com",
  messagingSenderId: "1022072844233",
  appId: "1:1022072844233:web:bb1580f0b369697e17c218"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);