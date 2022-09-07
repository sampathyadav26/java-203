
import { initializeApp } from "firebase/app";
import {getFirestore} from  "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyC2Cyv0i8djladzUh8YQKqJKp4rZf5nuT4",
  authDomain: "book-113e7.firebaseapp.com",
  projectId: "book-113e7",
  storageBucket: "book-113e7.appspot.com",
  messagingSenderId: "645689537813",
  appId: "1:645689537813:web:40c8d88856cb075e24651c"
};

const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)