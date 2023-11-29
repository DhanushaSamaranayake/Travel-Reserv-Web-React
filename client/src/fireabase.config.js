// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTlGNcEesTjFG3iCqqyFII7VRigBgonks",
  authDomain: "travelapp-c2cd8.firebaseapp.com",
  projectId: "travelapp-c2cd8",
  storageBucket: "travelapp-c2cd8.appspot.com",
  messagingSenderId: "479660269823",
  appId: "1:479660269823:web:6dfc5f77590bb489036cca",
  measurementId: "G-Z22QDM0GL6"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export{database};
