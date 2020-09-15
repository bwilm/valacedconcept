// For Firebase JS SDK v7.20.0 and later
import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCkLFjB43e0tL3lpM8nYzyGA4NW9GWmwoA",
    authDomain: "airbnb-clone-2bf5e.firebaseapp.com",
    databaseURL: "https://airbnb-clone-2bf5e.firebaseio.com",
    projectId: "airbnb-clone-2bf5e",
    storageBucket: "airbnb-clone-2bf5e.appspot.com",
    messagingSenderId: "226899074243",
    appId: "1:226899074243:web:75c0f60f8bbda0dfec9676",
    measurementId: "G-54QHGNNP7K"
  });

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export{auth,provider};
export default db;