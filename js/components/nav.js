import { watchAuth, logout } from "../auth.js"

const nav = document.getElementById("mainNav")
const publicLinks = document.getElementById("publicLinks")
const privateLinks = document.getElementById("privateLinks")
const logoutBtn = document.getElementById("logoutBtn")

watchAuth(user => {
    if (user) {
        publicLinks.classList.add("hidden")
        privateLinks.classList.remove("hidden")
    } else {
        publicLinks.classList.remove("hidden")
        privateLinks.classList.add("hidden")
    }

    // Mostrar nav solo cuando auth ya respondió
    // nav.classList.remove("hidden")
})


logoutBtn?.addEventListener("click", async () => {
    await logout()
    window.location.href = "index.html"
})