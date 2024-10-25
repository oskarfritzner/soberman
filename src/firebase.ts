// src/firebase.ts
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA1MSJ57q5ZX2YO4vjc0MlRgZrYc4fzcY8",
  authDomain: "soberman-1193a.firebaseapp.com",
  projectId: "soberman-1193a",
  storageBucket: "soberman-1193a.appspot.com",
  messagingSenderId: "998016388975",
  appId: "1:998016388975:web:9134bcc5055bb7793ae29a",
  measurementId: "G-DCE68KY46H"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
const provider: GoogleAuthProvider = new GoogleAuthProvider();
const db: Firestore = getFirestore(app);

export { auth, provider, signInWithPopup, db };