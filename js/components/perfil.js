import { watchAuth } from "../auth.js"
import { createUserProfile } from "./user.js"
import { getUserProfile } from "./user.js"

const form = document.getElementById("profileForm")
const usernameEl = document.getElementById("usernameText")

let currentUser = null

// Proteger la página
watchAuth(user => {
    if (!user) {
        window.location.href = "index.html"
    } else {
        currentUser = user
    }
})

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const username = document.getElementById("username").value

    try {
        await createUserProfile(currentUser.uid, username)
        window.location.href = "index.html"
    } catch (err) {
        console.error(err)
    }
})



watchAuth(async (user) => {
    if (!user) return

    const profile = await getUserProfile(user.uid)

    if (profile) {
        usernameEl.textContent = profile.profile.username
    }
})
