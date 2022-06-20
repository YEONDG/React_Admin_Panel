import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorial-c9524.firebaseapp.com",
  projectId: "tutorial-c9524",
  storageBucket: "tutorial-c9524.appspot.com",
  messagingSenderId: "132066345109",
  appId: "1:132066345109:web:f408e3942e97787a4a1b9c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
