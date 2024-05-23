// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8QiVIRnARndDCMXYiv_Xzea-DN9k-5xo",
  authDomain: "instagram-clone-c3207.firebaseapp.com",
  projectId: "instagram-clone-c3207",
  storageBucket: "instagram-clone-c3207.appspot.com",
  messagingSenderId: "194902290838",
  appId: "1:194902290838:web:42b5e5d3b4d6a14e59adb7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
