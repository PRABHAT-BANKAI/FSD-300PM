// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIOyt_VoWdytAisYEIp_I2VGjcOHbOxQw",
  authDomain: "dhruv-innovation.firebaseapp.com",
  projectId: "dhruv-innovation",
  storageBucket: "dhruv-innovation.firebasestorage.app",
  messagingSenderId: "8896761672",
  appId: "1:8896761672:web:e330bd018edd1872842d7d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
