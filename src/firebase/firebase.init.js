// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCn6tdJ87ndsorJCfibU48rOqa0PuiUoQ",
  authDomain: "coffee-store-66290.firebaseapp.com",
  projectId: "coffee-store-66290",
  storageBucket: "coffee-store-66290.firebasestorage.app",
  messagingSenderId: "823482007237",
  appId: "1:823482007237:web:208d4a01268ab532e67aac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);