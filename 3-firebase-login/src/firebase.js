import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB5l-8oVdVPI9Wbc1BxkhU8y0iNKY-dWb8",
    authDomain: "fir-login-9c1b5.firebaseapp.com",
    projectId: "fir-login-9c1b5",
    storageBucket: "fir-login-9c1b5.firebasestorage.app",
    messagingSenderId: "667378146412",
    appId: "1:667378146412:web:711a76247e4cde87d98c49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth}; 