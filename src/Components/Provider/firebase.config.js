
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyApeTNL6RQYbxFdzfujpZX2unhFDyug4j0",
  authDomain: "reactfirebase-coupon-letters.firebaseapp.com",
  projectId: "reactfirebase-coupon-letters",
  storageBucket: "reactfirebase-coupon-letters.firebasestorage.app",
  messagingSenderId: "1093827095536",
  appId: "1:1093827095536:web:c357a79b32ee170989cb35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;