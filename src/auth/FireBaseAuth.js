import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDBoVdz6N28y7dNvsrnDs7q_WozyGs3vtc",
  authDomain: "authenticate-project-aba80.firebaseapp.com",
  projectId: "authenticate-project-aba80",
  storageBucket: "authenticate-project-aba80.appspot.com",
  messagingSenderId: "881567721180",
  appId: "1:881567721180:web:e4a9137fa5ef318b223619",
  measurementId: "G-VBBF05W8H8"
  };

// initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;