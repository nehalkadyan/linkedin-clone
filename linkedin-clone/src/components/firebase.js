import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDO1OQxisnYZO4z12AyV2f1Qw46oOEow88",
    authDomain: "g-sign-in-f8bd9.firebaseapp.com",
    databaseURL: "https://g-sign-in-f8bd9-default-rtdb.firebaseio.com",
    projectId: "g-sign-in-f8bd9",
    storageBucket: "g-sign-in-f8bd9.appspot.com",
    messagingSenderId: "726422128161",
    appId: "1:726422128161:web:94c166a640aac629158560"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};
