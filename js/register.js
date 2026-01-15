import { register } from "./auth.js"

const form = document.getElementById("registerForm")
const errorText = document.getElementById("registerError")

form.addEventListener("submit", async (e) => {
    e.preventDefault()
    errorText.classList.add("hidden")

    const email = form.querySelector('input[type="email"]').value
    const password = form.querySelector('input[type="password"]').value

    try {
        await register(email, password)
        window.location.href = "index.html"
    } catch (error) {
        errorText.textContent = formatError(error.code)
        errorText.classList.remove("hidden")
    }
})

function formatError(code) {
    switch (code) {
        case "auth/email-already-in-use":
            return "Este email ya está registrado"
        case "auth/weak-password":
            return "La contraseña debe tener al menos 6 caracteres"
        case "auth/invalid-email":
            return "Email inválido"
        default:
            return "Error al crear la cuenta"
    }
}
