import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJ9ZsjyjFKEzTlIOsjFi0pX1XIUAKDU1Q",

  authDomain: "diversifood-da44c.firebaseapp.com",

  projectId: "diversifood-da44c",

  storageBucket: "diversifood-da44c.appspot.com",

  messagingSenderId: "436065202140",

  appId: "1:436065202140:web:ef21d9fa48e3386b7b2919",
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
export { auth, db };
