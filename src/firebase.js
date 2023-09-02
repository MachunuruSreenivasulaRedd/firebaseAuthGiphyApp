import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCM1pBFzp6bp4dGJ-9FpgMs_ogxu6sq0n0",
  authDomain: "giphyapp-8a865.firebaseapp.com",
  projectId: "giphyapp-8a865",
  storageBucket: "giphyapp-8a865.appspot.com",
  messagingSenderId: "378911482984",
  appId: "1:378911482984:web:fbe1eb0167e0a537e3c7dd",
  measurementId: "G-CP6DSE4K3M"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;