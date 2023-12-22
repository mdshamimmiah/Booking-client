


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6BhzdJCQ_x-liq75iSHtD4OIknEsmUPw",
  authDomain: "task-management-a8bdd.firebaseapp.com",
  projectId: "task-management-a8bdd",
  storageBucket: "task-management-a8bdd.appspot.com",
  messagingSenderId: "68272140661",
  appId: "1:68272140661:web:c2bf1bd5595434fa09e33c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;