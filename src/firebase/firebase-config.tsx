// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm1_hopm2vkA8mn-Dy8GTejpqGZmr3Wnw",
  authDomain: "portfolio-a5c2c.firebaseapp.com",
  projectId: "portfolio-a5c2c",
  storageBucket: "portfolio-a5c2c.appspot.com",
  messagingSenderId: "1051965026659",
  appId: "1:1051965026659:web:25667bd022fe64cc3ae356"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {
  db,
  firebase  
}