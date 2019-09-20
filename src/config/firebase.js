import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAlHxiZbBPLRRCZKJY5XNEM2XqNRkF79I0",
  authDomain: "react-bloggerapp.firebaseapp.com",
  databaseURL: "https://react-bloggerapp.firebaseio.com",
  projectId: "react-bloggerapp",
  storageBucket: "",
  messagingSenderId: "799083488337",
  appId: "1:799083488337:web:40ce310fa41675528cc470"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;