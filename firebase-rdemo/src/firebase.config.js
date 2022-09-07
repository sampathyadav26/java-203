import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDH59VfCpPPKsuBYwmSMqcYjZvcdhB2GGc",
  authDomain: "fb-react-84246.firebaseapp.com",
  projectId: "fb-react-84246",
  storageBucket: "fb-react-84246.appspot.com",
  messagingSenderId: "92858597767",
  appId: "1:92858597767:web:33ebd2b17df3f94c99d322"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};
