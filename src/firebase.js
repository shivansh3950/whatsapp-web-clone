import firebase from "firebase";
import 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnXsKzLAa0Mpqai_rxYUS2yn17NeHEQJM",
    authDomain: "whatsapp-clone-1d21c.firebaseapp.com",
    projectId: "whatsapp-clone-1d21c",
    storageBucket: "whatsapp-clone-1d21c.appspot.com",
    messagingSenderId: "760623549160",
    appId: "1:760623549160:web:d9ff293accc683882e975d",
    measurementId: "G-VYE7TX8DKR",
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db;
