import { auth } from "./firebase.js"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js"

// Registro
export async function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}

// Login
export async function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}

// Logout
export function logout() {
    return signOut(auth)
}

// Estado de sesión
export function watchAuth(callback) {
    onAuthStateChanged(auth, callback)
}
