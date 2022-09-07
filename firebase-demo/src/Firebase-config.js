import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyARZwRLMqdKv19Onk00TxnsbM0_LXjKdVk",
    authDomain: "fir-demo-2bd41.firebaseapp.com",
    projectId: "fir-demo-2bd41",
    storageBucket: "fir-demo-2bd41.appspot.com",
    messagingSenderId: "1048427952155",
    appId: "1:1048427952155:web:565072c785fd3328ef20be"
  };
  const app=initializeApp(firebaseConfig);
  export const db=getFirestore()