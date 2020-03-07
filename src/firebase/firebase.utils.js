import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCue0obihwUF59EGvID-glD4NRm_xqS1qw",
    authDomain: "crwn-db-d7f04.firebaseapp.com",
    databaseURL: "https://crwn-db-d7f04.firebaseio.com",
    projectId: "crwn-db-d7f04",
    storageBucket: "crwn-db-d7f04.appspot.com",
    messagingSenderId: "352875556074",
    appId: "1:352875556074:web:9564067467dae6b6213b93",
    measurementId: "G-WVLTLCGQ5N"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  //exporting so we can use this anywhere we need to use for authentication
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' })
  //^^trigger this Google pop-up whenever we decide to use Google Auth Provider
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;