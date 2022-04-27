// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIFpZuZIQp3Usi73RmQdWHtG857Iy8aC0",
    authDomain: "milkycream-3616b.firebaseapp.com",
    projectId: "milkycream-3616b",
    storageBucket: "milkycream-3616b.appspot.com",
    messagingSenderId: "716180971891",
    appId: "1:716180971891:web:0e433d9bb3f1244f45a506"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)