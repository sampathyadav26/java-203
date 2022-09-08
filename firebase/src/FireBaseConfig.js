
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBeoYVLNlLZXqYDhqMyrQQ3eGSrvZLYKSc",
  authDomain: "fir-6ea2c.firebaseapp.com",
  projectId: "fir-6ea2c",
  storageBucket: "fir-6ea2c.appspot.com",
  messagingSenderId: "462476587173",
  appId: "1:462476587173:web:9b5fae2726c70344fd9d4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};