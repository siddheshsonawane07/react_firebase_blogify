
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfQ_rnz3TvSn2yRyMBl4KS8EiKtXO10Bs",
  authDomain: "blogify-8783c.firebaseapp.com",
  projectId: "blogify-8783c",
  storageBucket: "blogify-8783c.appspot.com",
  messagingSenderId: "393963407126",
  appId: "1:393963407126:web:c6c45ec59012db44fcf237"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
