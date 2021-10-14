import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyACHA1g1DDdClitGgUSboQeslJhllHayqU",
    authDomain: "carrito-41e4c.firebaseapp.com",
    projectId: "carrito-41e4c",
    storageBucket: "carrito-41e4c.appspot.com",
    messagingSenderId: "887796875901",
    appId: "1:887796875901:web:3e69e3564999e86680e714"
  };

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

 export {auth,db,storage}