import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey           : "AIzaSyDsBMKeaZ51E_prE5qTgni1aoKnAHNho28",
  authDomain       : "fir-crud-30d3f.firebaseapp.com",
  projectId        : "fir-crud-30d3f",
  storageBucket    : "fir-crud-30d3f.appspot.com",
  messagingSenderId: "616801122332",
  appId            : "1:616801122332:web:2128976b42f5bc010587d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db  = getFirestore(app)
export {db}