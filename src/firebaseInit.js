// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhmgD0PaQvwTuVSMHgCzNEkJhQhAsFY70",
  authDomain: "busyapp-54d6c.firebaseapp.com",
  projectId: "busyapp-54d6c",
  storageBucket: "busyapp-54d6c.appspot.com",
  messagingSenderId: "118186694434",
  appId: "1:118186694434:web:9e25427fd8f743e20c377b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
