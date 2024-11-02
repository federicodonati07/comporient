// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4v25lDBerf2ouPLX2A0UHMh9H0VA_7u4",
  authDomain: "comporient.firebaseapp.com",
  projectId: "comporient",
  storageBucket: "comporient.appspot.com",
  messagingSenderId: "217542227567",
  appId: "1:217542227567:web:fdd6da779201528505bf9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}
export default app