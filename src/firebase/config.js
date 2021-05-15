import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDdc9dl8oQzd_BbQW7SDTByXoJ0xZQ7i_M",
    authDomain: "gallery-bdf00.firebaseapp.com",
    projectId: "gallery-bdf00",
    storageBucket: "gallery-bdf00.appspot.com",
    messagingSenderId: "692445168848",
    appId: "1:692445168848:web:71991df53afebefae1cad5"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export default fire;
export {projectStorage, projectFirestore, timestamp};