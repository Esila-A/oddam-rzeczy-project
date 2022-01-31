import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfpkzZdvCQj-SYeqZVX_l7SSKXcszQWos",
  authDomain: "oddam-rzeczy-project.firebaseapp.com",
  projectId: "oddam-rzeczy-project",
  storageBucket: "oddam-rzeczy-project.appspot.com",
  messagingSenderId: "770169105743",
  appId: "1:770169105743:web:bb5136d5cde49a7b0be93a",
  measurementId: "G-R2FYS33BCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

export { db };

