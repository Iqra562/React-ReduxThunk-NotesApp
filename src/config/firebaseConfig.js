// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADaTi7MZOT2yJSEiUWcOJMXHtgz_IU-_U",
  authDomain: "reduxnotes-94dab.firebaseapp.com",
  projectId: "reduxnotes-94dab",
  storageBucket: "reduxnotes-94dab.appspot.com",
  messagingSenderId: "453838672927",
  appId: "1:453838672927:web:f4cef4de8bcbcde203312a",
  measurementId: "G-9B7YE9F82K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);