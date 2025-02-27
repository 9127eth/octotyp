import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js';
import { getAuth, GoogleAuthProvider, TwitterAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js';
import { getFirestore, collection, addDoc, updateDoc, getDocs, doc, deleteDoc, getDoc, query, orderBy } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();

twitterProvider.setCustomParameters({
  oauth_consumer_key: import.meta.env.VITE_TWITTER_API_KEY,
  oauth_consumer_secret: import.meta.env.VITE_TWITTER_API_SECRET
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

export const onAuthStateChanged = (callback) => {
    return auth.onAuthStateChanged(callback);
};
