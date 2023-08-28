import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCC1jPxoV9mjMyaFTNZ8Ae4VGhE4NnE-JI",
  authDomain: "chatbox1234.firebaseapp.com",
  projectId: "chatbox1234",
  storageBucket: "chatbox1234.appspot.com",
  messagingSenderId: "410216200660",
  appId: "1:410216200660:web:b4eb0fd0bb6f5848277e41",
  measurementId: "G-VHDH0Y84SY",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
