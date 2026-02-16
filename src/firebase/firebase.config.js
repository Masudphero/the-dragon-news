// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLuPcothBnH9nqKjPyoT5soAdl-3ucLGM",
  authDomain: "dragon-news-c99e8.firebaseapp.com",
  projectId: "dragon-news-c99e8",
  storageBucket: "dragon-news-c99e8.firebasestorage.app",
  messagingSenderId: "317214280360",
  appId: "1:317214280360:web:540b85e7951c32d537509d",
  measurementId: "G-P6MK200M6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;