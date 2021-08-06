import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyD7zFsmi53jANy9772aFWkEuqTpk4HMUN4",
    authDomain: "fir-peach.firebaseapp.com",
    databaseURL: "https://fir-peach-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fir-peach",
    storageBucket: "fir-peach.appspot.com",
    messagingSenderId: "1002204893447",
    appId: "1:1002204893447:web:01c177d16b2d43690fb5a2",
    measurementId: "G-79T44GF1VV"
});

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };