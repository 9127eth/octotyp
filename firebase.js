
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js';
import { getAuth, GoogleAuthProvider, TwitterAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js';
import { getFirestore, collection, addDoc, updateDoc, getDocs, doc, deleteDoc, getDoc, query, orderBy } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';

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
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();

twitterProvider.setCustomParameters({
  oauth_consumer_key: "Bfx7dZu3MwNDeoQz8OATe4yXH",
  oauth_consumer_secret: "bMmVnyAA8NdZU4eAGXEVRODfRGM8GlBUM7MfgDh2OK5PblFtcs"
});

export { 
    auth, 
    db, 
    googleProvider, 
    twitterProvider, 
    signInWithPopup, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    collection, 
    addDoc, 
    updateDoc, 
    getDocs, 
    doc, 
    deleteDoc, 
    getDoc, 
    query, 
    orderBy 
};
