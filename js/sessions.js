import { auth, db } from "./firebase.js"
import {
    addDoc,
    collection,
    serverTimestamp,
    query,
    orderBy,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js"

export async function saveSession(data) {
    if (!auth.currentUser) return

    await addDoc(
        collection(db, "users", auth.currentUser.uid, "sessions"),
        {
            ...data,
            createdAt: serverTimestamp(),
        }
    )
}

export async function getSessions() {
    if (!auth.currentUser) return []

    const q = query(
        collection(db, "users", auth.currentUser.uid, "sessions"),
        orderBy("createdAt", "desc")
    )

    const snapshot = await getDocs(q)
    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    }))
}
