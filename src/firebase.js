import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // Your firebase credentials
  apiKey: "AIzaSyCxofDdozo6yQhgJmE8dOwzmO2d3FtgZA8",
  authDomain: "contact-form-7d3b3.firebaseapp.com",
  projectId: "contact-form-7d3b3",
  storageBucket: "contact-form-7d3b3.appspot.com",
  messagingSenderId: "901677578387",
  appId: "1:901677578387:web:6502505774034160427566"
});

var db = firebaseApp.firestore();

export { db };