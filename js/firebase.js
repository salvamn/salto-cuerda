{/* <script type="module"> */}
// Import the functions you need from the SDKs you need
import {initializeApp} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
// import {getAnalytics} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBFkFJfNfcBftE9e-L3HLjfUW2dStxGwgM",
    authDomain: "proyecto-fenix-fe59d.firebaseapp.com",
    projectId: "proyecto-fenix-fe59d",
    storageBucket: "proyecto-fenix-fe59d.firebasestorage.app",
    messagingSenderId: "464298936175",
    appId: "1:464298936175:web:c8214dff0bde354bf40a9a",
    measurementId: "G-VV7VGRQ9SZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
// const analytics = getAnalytics(app);
{/* </script> */}