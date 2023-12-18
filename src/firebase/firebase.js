// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdQmDqNj9BTo6RiDxe8zKy6rGaTGT780s",
  authDomain: "szkolna17-f7650.firebaseapp.com",
  projectId: "szkolna17-f7650",
  storageBucket: "szkolna17-f7650.appspot.com",
  messagingSenderId: "56826152224",
  appId: "1:56826152224:web:821a2b258bddd682008345",
  measurementId: "G-S05K24H086"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);