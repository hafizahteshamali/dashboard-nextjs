import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyColrM7iuhJdtFoFkRm3dB1TKCDt-SwAYo",
  authDomain: "next-project1-297a8.firebaseapp.com",
  projectId: "next-project1-297a8",
  storageBucket: "next-project1-297a8.firebasestorage.app",
  messagingSenderId: "200537270507",
  appId: "1:200537270507:web:ced3c2544e95d3464236ae",
  measurementId: "G-ZG96T8MNFF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut};
