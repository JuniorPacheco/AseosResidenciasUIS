import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH8udJPNmV6fMjhdZJAnp8YikJFRNF0Wc",
  authDomain: "moleculasquimica.firebaseapp.com",
  projectId: "moleculasquimica",
  storageBucket: "moleculasquimica.appspot.com",
  messagingSenderId: "1075908151622",
  appId: "1:1075908151622:web:31aa3af722e5c664ab7d47",
  measurementId: "G-1DPQWEDF98",
};

initializeApp(firebaseConfig);

export const loginWithFirebase = async (email, password) => {
  let response = null
  await signInWithEmailAndPassword(getAuth(), email, password)
  .then((userCredential) => {
      // Signed in
      const token = userCredential.user.accessToken
      response = token
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      response = false
  });
  return response
}

export const db = getFirestore();