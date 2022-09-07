
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCIEJsNeEU8Gealf6yPPk3fy_hZxmb_chI",
  authDomain: "mart-8a0df.firebaseapp.com",
  projectId: "mart-8a0df",
  storageBucket: "mart-8a0df.appspot.com",
  messagingSenderId: "1009841938545",
  appId: "1:1009841938545:web:7b14dc71e837c5c9b37bd0"
};


const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);