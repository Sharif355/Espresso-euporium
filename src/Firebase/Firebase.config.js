// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgFiTWmXznYiwn0MBd3ZL_Az2Utxc_rQs",
    authDomain: "coffeestore-b7a13.firebaseapp.com",
    projectId: "coffeestore-b7a13",
    storageBucket: "coffeestore-b7a13.appspot.com",
    messagingSenderId: "261721945742",
    appId: "1:261721945742:web:03a7e280bab12d03c8fbdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;