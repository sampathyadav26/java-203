import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";

const Config = {
  apiKey: "AIzaSyAJgHk2Q-csk4wNDU7dLKx7MGje2DFKXnE",
  authDomain: "hari-5699b.firebaseapp.com",
  projectId: "hari-5699b",
  storageBucket: "hari-5699b.appspot.com",
  messagingSenderId: "39917698803",
  appId: "1:39917698803:web:1e324e369a724c03190186",
};
const app = initializeApp(Config);
export const db = getFirestore(app);
