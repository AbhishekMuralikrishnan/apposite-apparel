import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyARxoqGSDEzLpbezpRNkUHMsjfmYTEs6JU",
    authDomain: "apposite-apparel-db.firebaseapp.com",
    databaseURL: "https://apposite-apparel-db.firebaseio.com",
    projectId: "apposite-apparel-db",
    storageBucket: "apposite-apparel-db.appspot.com",
    messagingSenderId: "303465800111",
    appId: "1:303465800111:web:a775e4a5705a77b0b98f5a",
    measurementId: "G-0CQPLCXZRF"
};
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;