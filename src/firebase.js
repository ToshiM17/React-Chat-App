import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHWKafXWgIO4oRffWF-wcnChVT1Pvor-4",
  authDomain: "chat-app-701b7.firebaseapp.com",
  projectId: "chat-app-701b7",
  storageBucket: "chat-app-701b7.appspot.com",
  messagingSenderId: "449498018253",
  appId: "1:449498018253:web:3b04533ac0595946211484",
  measurementId: "G-Y8WES7CDE3"
};


const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);