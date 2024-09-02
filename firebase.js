import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCQFUeA6yRa0BmX6xBSPK7RJvw5Hvp1W8A",
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
