import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA05XRmjkVLW9PyFmnotxJuRzsYHN6eyfw",
    authDomain: "fir-crud-49b59.firebaseapp.com",
    projectId: "fir-crud-49b59",
    storageBucket: "fir-crud-49b59.firebasestorage.app",
    messagingSenderId: "734166589121",
    appId: "1:734166589121:web:885bc56e17556263817e40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db};