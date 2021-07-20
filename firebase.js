import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyATH5Da6EQm7Lss0tvE0uqnokf-GB4_Rio",
    authDomain: "docs-c7ce8.firebaseapp.com",
    projectId: "docs-c7ce8",
    storageBucket: "docs-c7ce8.appspot.com",
    messagingSenderId: "1002677363680",
    appId: "1:1002677363680:web:df297360c49129fc730185"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export { db };