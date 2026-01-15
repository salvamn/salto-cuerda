import { db } from "../firebase.js"
import {
    doc,
    setDoc,
    getDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js"



export const createUserProfile = (uid, username) => {
    return setDoc(doc(db, "users", uid), {
        profile: {
            username
        },
        meta: {
            createdAt: serverTimestamp()
        }
    })
}


export const getUserProfile = async (uid) => {
    const ref = doc(db, "users", uid)
    const snap = await getDoc(ref)

    if (!snap.exists()) return null
    return snap.data()
}