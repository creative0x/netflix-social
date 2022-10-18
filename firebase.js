// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPOrjEBl7GBG4UE8d4YEQgUN6RWDxEHLU",
  authDomain: "netflix-social.firebaseapp.com",
  projectId: "netflix-social",
  storageBucket: "netflix-social.appspot.com",
  messagingSenderId: "194924014645",
  appId: "1:194924014645:web:9ae7cb10dcf942f071557c",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const auth = getAuth();

export default app;
export { db, storage, auth };
