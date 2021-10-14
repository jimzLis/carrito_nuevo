import * as firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyCn0-lfNAwK8S0Y6ClB-tj3E_GbdaMyYX4",
    authDomain: "crud-react-5121b.firebaseapp.com",
    databaseURL: "https://crud-react-5121b-default-rtdb.firebaseio.com",
    projectId: "crud-react-5121b",
    storageBucket: "crud-react-5121b.appspot.com",
    messagingSenderId: "619176742924",
    appId: "1:619176742924:web:9a20c979704a23e4889e29"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  export default app.database().ref();
  