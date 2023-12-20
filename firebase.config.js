// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAghmv1_ZB4AOdRvD1JlRtPOVQoae04j-I",
  authDomain: "task-management-35867.firebaseapp.com",
  projectId: "task-management-35867",
  storageBucket: "task-management-35867.appspot.com",
  messagingSenderId: "779998310912",
  appId: "1:779998310912:web:28fa48e37b6915825b1ee5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;