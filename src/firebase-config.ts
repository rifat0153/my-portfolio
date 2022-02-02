// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsfPNVG6v63nSp8qKlNr8ygIOUnPR9Myo",
  authDomain: "portfolio-6b79f.firebaseapp.com",
  projectId: "portfolio-6b79f",
  storageBucket: "portfolio-6b79f.appspot.com",
  messagingSenderId: "1046251673371",
  appId: "1:1046251673371:web:5e9940f46fcf544d50e5be",
  measurementId: "G-MJG9YS0EKW",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

// export { app, analytics, db };
