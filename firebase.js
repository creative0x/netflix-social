// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjkcMtIZg5YGghoXe3p225x5UD08EoCx0",
  authDomain: "netflix-social-7f3e6.firebaseapp.com",
  projectId: "netflix-social-7f3e6",
  storageBucket: "netflix-social-7f3e6.appspot.com",
  messagingSenderId: "926857932119",
  appId: "1:926857932119:web:8424583765b87e3f006212",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
