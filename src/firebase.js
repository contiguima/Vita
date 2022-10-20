// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgebm64A5np9AEodzhBq1kLEc6eIgoH3M",
  authDomain: "vita-f45fb.firebaseapp.com",
  projectId: "vita-f45fb",
  storageBucket: "vita-f45fb.appspot.com",
  messagingSenderId: "686775550201",
  appId: "1:686775550201:web:dd439d9278812da9d9a228",
  measurementId: "G-482R9DR65P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app); 