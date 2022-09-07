
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyB9Yu_ZrTRe94BaKST5qIdoW_hQrU6siic",
  authDomain: "bhagya-53bbc.firebaseapp.com",
  //databaseURL: "YOUR_DATABASE_URL",
  projectId: "bhagya-53bbc",
  storageBucket: "bhagya-53bbc.appspot.com",
  messagingSenderId: "563162618299",
  appId: "1:563162618299:web:2dcfe611223a1618098c9e"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;