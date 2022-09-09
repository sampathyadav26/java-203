import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBybc_Ese0V4yGW9pCaScqEs0BjrWHAXPs",
  authDomain: "fb-react-6ad79.firebaseapp.com",
  projectId: "fb-react-6ad79",
  storageBucket: "fb-react-6ad79.appspot.com",
  messagingSenderId: "419906524508",
  appId: "1:419906524508:web:60e6f4fba7f4c60cdf9d99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db }