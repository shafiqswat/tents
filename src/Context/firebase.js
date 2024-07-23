/** @format */
/** @format */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA140FrWvCuKB4VtRpvY5xBae_FXuer1o0",
  authDomain: "tents-f9b9d.firebaseapp.com",
  projectId: "tents-f9b9d",
  storageBucket: "tents-f9b9d.appspot.com",
  messagingSenderId: "8598691047",
  appId: "1:8598691047:web:07d7eddbfa446a66999642",
  measurementId: "G-FGKCDCXZE5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
