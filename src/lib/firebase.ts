// src/lib/firebase.ts

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 🔐 Your config (keep same)
const firebaseConfig = {
  apiKey: "AIzaSyCL-S7HGwfEBYvjaC0KjY84hkH1aBTljC4",
  authDomain: "emailsender-20187.firebaseapp.com",
  projectId: "emailsender-20187",
  storageBucket: "emailsender-20187.firebasestorage.app",
  messagingSenderId: "186927577374",
  appId: "1:186927577374:web:9bfb2646f72dc4eb3ab10f",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firestore
export const db = getFirestore(app);