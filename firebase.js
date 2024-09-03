import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "octotyp.firebaseapp.com",
    projectId: "octotyp",
    storageBucket: "octotyp.appspot.com",
    messagingSenderId: "346116172699",
    appId: "1:346116172699:web:39e30db03db57db4d68f3e",
    measurementId: "G-YH37E0J002"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
