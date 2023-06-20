import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCjD98I6tkMC8IW1Dk7iDe6eu99kLlApbo",
    authDomain: "react-store-bb70d.firebaseapp.com",
    projectId: "react-store-bb70d",
    storageBucket: "react-store-bb70d.appspot.com",
    messagingSenderId: "213412489136",
    appId: "1:213412489136:web:98308e2e4e4faf53eb5875",
    measurementId: "G-HH8HN1KWDR",
};

const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider(app);
export const auth = getAuth(app);
