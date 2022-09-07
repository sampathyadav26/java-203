import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBTZGvs6VDlgVMsnJC4pstLSqQHWntXMlo",
  authDomain: "fir-reactjs-394e1.firebaseapp.com",
  projectId: "fir-reactjs-394e1",
  storageBucket: "fir-reactjs-394e1.appspot.com",
  messagingSenderId: "25032077967",
  appId: "1:25032077967:web:a3527f96ab7c9b14c4f6fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db }