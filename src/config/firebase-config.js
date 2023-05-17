import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4anSlyoaioB6byaOkAvO-007GzGkEyHY",
  authDomain: "fir-blog-cc091.firebaseapp.com",
  projectId: "fir-blog-cc091",
  storageBucket: "fir-blog-cc091.appspot.com",
  messagingSenderId: "55707816746",
  appId: "1:55707816746:web:39e9c06037d2eeee7d0453",
  measurementId: "G-4S7CGPTYNY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
