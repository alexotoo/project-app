import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAEre8D8IUYGD_2MVMrp7gc0IH3aVn391M",
  authDomain: "project-app-e49d6.firebaseapp.com",
  projectId: "project-app-e49d6",
  storageBucket: "project-app-e49d6.appspot.com",
  messagingSenderId: "298931497155",
  appId: "1:298931497155:web:6315a76b14763fa95c5a76",
  measurementId: "G-LC2CQRK38B",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();

export default db;
