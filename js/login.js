import { login, watchAuth } from "./auth.js"

const form = document.getElementById("loginForm")
const errorText = document.getElementById("error")

// Si ya hay sesión, redirigir
watchAuth(user => {
    if (user) {
        window.location.href = "index.html"
    }
})

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    try {
        await login(email, password)
        window.location.href = "index.html"
    } catch (err) {
        errorText.textContent = "Credenciales incorrectas"
        errorText.classList.remove("hidden")
    }
})
