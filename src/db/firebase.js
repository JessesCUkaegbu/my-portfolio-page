// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeGKg7aW4VPNeJt-2Or9EKhZNZ3j8lBlI",
  authDomain: "my-portfolio-app-8a5b9.firebaseapp.com",
  projectId: "my-portfolio-app-8a5b9",
  storageBucket: "my-portfolio-app-8a5b9.appspot.com",
  messagingSenderId: "477840291493",
  appId: "1:477840291493:web:7622c3cd2639118b9abf4c",
  measurementId: "G-W9QE76GP68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FirebaseDB = getFirestore(app);
const analytics = getAnalytics(app);