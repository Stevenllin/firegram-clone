import firebase from 'firebase/app' 
import 'firebase/storage';
import 'firebase/firestore';
  
var firebaseConfig = {
    apiKey: "AIzaSyAD3g209cpVI7NRp-uoPEjiSpkmG82gE_s",
    authDomain: "firegram-bbd42.firebaseapp.com",
    projectId: "firegram-bbd42",
    storageBucket: "firegram-bbd42.appspot.com",
    messagingSenderId: "87948064728",
    appId: "1:87948064728:web:bed424ef2b78b943ff64ad"
  };

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }; 