// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRWjjePygR3dBEJkxJWlbVTweGhF_w-Ng",
  authDomain: "social-media-f3804.firebaseapp.com",
  projectId: "social-media-f3804",
  storageBucket: "social-media-f3804.appspot.com",
  messagingSenderId: "466261737624",
  appId: "1:466261737624:web:8a613ff24ffaada70310ed",
  measurementId: "G-ND6Y0RBVGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);