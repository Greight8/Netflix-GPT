// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtOGMDcXP6pT9MDOFS1aELMLOycrZQcMI",
    authDomain: "netflixgpt-c1fa2.firebaseapp.com",
    projectId: "netflixgpt-c1fa2",
    storageBucket: "netflixgpt-c1fa2.appspot.com",
    messagingSenderId: "9125493911",
    appId: "1:9125493911:web:5d1bf6e61fe94219117dd2",
    measurementId: "G-JSG8QK7VTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// getting auth once in out project and the export it
export const auth = getAuth(); 