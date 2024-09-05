const fs = require('fs');
require('dotenv').config();

const firebaseConfigContent = `
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js';
import { getAuth, GoogleAuthProvider, TwitterAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js';
import { getFirestore, collection, addDoc, updateDoc, getDocs, doc, deleteDoc, getDoc, query, orderBy } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "${process.env.REACT_APP_FIREBASE_API_KEY}",
    authDomain: "${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}",
    projectId: "${process.env.REACT_APP_FIREBASE_PROJECT_ID}",
    storageBucket: "${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}",
    messagingSenderId: "${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}",
    appId: "${process.env.REACT_APP_FIREBASE_APP_ID}",
    measurementId: "${process.env.REACT_APP_FIREBASE_MEASUREMENT_ID}"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();

twitterProvider.setCustomParameters({
  oauth_consumer_key: "${process.env.REACT_APP_TWITTER_API_KEY}",
  oauth_consumer_secret: "${process.env.REACT_APP_TWITTER_API_SECRET}"
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
`;

fs.writeFileSync('firebase.js', firebaseConfigContent);
