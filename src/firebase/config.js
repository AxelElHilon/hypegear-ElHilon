import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCk_SuNhhLPJ6fijDp0D1hwW-LVr-GMY04",
    authDomain: "hype-gear.firebaseapp.com",
    projectId: "hype-gear",
    storageBucket: "hype-gear.firebasestorage.app",
    messagingSenderId: "356279786996",
    appId: "1:356279786996:web:e02afb4079eaf3ce7aada1",
    measurementId: "G-RE68R0GP5E"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
