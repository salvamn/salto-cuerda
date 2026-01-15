import { watchAuth } from "./auth.js"

watchAuth(user => {
    const subnav = document.getElementById("subnav")

    if (user) {
        subnav.classList.remove("hidden")
    } else {
        subnav.classList.add("hidden")
    }
})
