import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBgebm64A5np9AEodzhBq1kLEc6eIgoH3M",
  authDomain: "vita-f45fb.firebaseapp.com",
  projectId: "vita-f45fb",
  storageBucket: "vita-f45fb.appspot.com",
  messagingSenderId: "686775550201",
  appId: "1:686775550201:web:dd439d9278812da9d9a228",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const db = getFirestore(app);
export const storage = getStorage(app);
