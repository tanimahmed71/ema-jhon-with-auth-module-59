// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUC4ZlKQW4_-yMVv_xlkusX7r_1YQtZuI",
  authDomain: "ema-jhon-simple-f9cce.firebaseapp.com",
  projectId: "ema-jhon-simple-f9cce",
  storageBucket: "ema-jhon-simple-f9cce.appspot.com",
  messagingSenderId: "650629582074",
  appId: "1:650629582074:web:53980dc040fe24ddaa4d43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);
 export default auth; 