import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBlPFbnuZ8xwMWOujDXrmu3p_NGOK60bcs",
  authDomain: "kanban-f1528.firebaseapp.com",
  projectId: "kanban-f1528",
  storageBucket: "kanban-f1528.firebasestorage.app",
  messagingSenderId: "198073586764",
  appId: "1:198073586764:web:65629c9d42c4fe030c10e9"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };