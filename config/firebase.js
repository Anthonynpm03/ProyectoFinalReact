//import firebase from 'firebase/app';
//import 'firebase/firestore';

import firebase from 'firebase';
require('firebase/auth');

const app = firebase.initializeApp({
    apiKey: "AIzaSyCtPR8e07utiwsIqcciOq88pYvV9ZDKqe8",
    authDomain: "anthonyperez-e6884.firebaseapp.com",
    projectId: "anthonyperez-e6884",
    storageBucket: "anthonyperez-e6884.appspot.com",
    messagingSenderId: "566155476591",
    appId: "1:566155476591:web:9d5e4ace8e2f83eee6979a"
  });

export default function getFirestore() {
    return firebase.firestore(app)
};
