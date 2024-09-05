import { db } from './firebase.js';
import { collection, addDoc, updateDoc, getDocs, doc, deleteDoc, getDoc, query, orderBy } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';

export async function saveDraft(userId, content) {
    try {
        const draftsRef = collection(db, 'users', userId, 'drafts');
        const docRef = await addDoc(draftsRef, { 
            content, 
            timestamp: new Date(),
            tweets: content.tweets,
            // ... other fields ...
        });
        return docRef.id;
    } catch (error) {
        console.error('Error saving draft:', error);
        throw error;
    }
}

export async function updateDraft(userId, draftId, content) {
    try {
        const draftRef = doc(db, 'users', userId, 'drafts', draftId);
        await updateDoc(draftRef, { 
            content, 
            timestamp: new Date(),
            tweets: content.tweets,
            // ... other fields ...
        });
    } catch (error) {
        console.error('Error updating draft:', error);
        throw error;
    }
}

export async function getDrafts(userId) {
    try {
        const draftsRef = collection(db, 'users', userId, 'drafts');
        const q = query(draftsRef, orderBy('timestamp', 'desc'));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error('Error getting drafts:', error);
        throw error;
    }
}

export async function deleteDraft(userId, draftId) {
    try {
        const draftRef = doc(db, 'users', userId, 'drafts', draftId);
        await deleteDoc(draftRef);
    } catch (error) {
        console.error('Error deleting draft:', error);
        throw error;
    }
}

export async function getDraft(userId, draftId) {
    try {
        const draftRef = doc(db, 'users', userId, 'drafts', draftId);
        const draftSnap = await getDoc(draftRef);
        if (draftSnap.exists()) {
            return { id: draftSnap.id, ...draftSnap.data() };
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error getting draft:', error);
        throw error;
    }
}
