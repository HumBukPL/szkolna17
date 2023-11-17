// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxvzUa4FleegIj_mRdlyzvsO6-YcgbKOU",
  authDomain: "szkolna17-f3ee8.firebaseapp.com",
  projectId: "szkolna17-f3ee8",
  storageBucket: "szkolna17-f3ee8.appspot.com",
  messagingSenderId: "801356730597",
  appId: "1:801356730597:web:3b404a9f9bb0c7e6f4440c",
  measurementId: "G-4PXN5XL2R5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
