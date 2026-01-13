let duracionInicial = 30; // segundos
let tiempoRestante = duracionInicial;
let intervalo = null;
let enEjecucion = false;

const tiempoEl = document.getElementById("tiempo");
const btnIniciar = document.getElementById("btnIniciar");
const btnReiniciar = document.getElementById("btnReiniciar");

// Formatear tiempo mm:ss
function formatearTiempo(segundos) {
    const min = Math.floor(segundos / 60).toString().padStart(2, "0");
    const sec = (segundos % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
}

// Actualizar UI
function actualizarPantalla() {
    tiempoEl.textContent = formatearTiempo(tiempoRestante);
}

// Iniciar / Pausar
btnIniciar.addEventListener("click", () => {
    if (!enEjecucion) {
        iniciarTemporizador();
    } else {
        pausarTemporizador();
    }
});

function iniciarTemporizador() {
    enEjecucion = true;
    btnIniciar.textContent = "Pausar";

    intervalo = setInterval(() => {
        if (tiempoRestante > 0) {
            tiempoRestante--;
            actualizarPantalla();
        } else {
            finalizarTemporizador();
        }
    }, 1000);
}

function pausarTemporizador() {
    enEjecucion = false;
    btnIniciar.textContent = "Reanudar";
    clearInterval(intervalo);
}

// Reiniciar
btnReiniciar.addEventListener("click", () => {
    clearInterval(intervalo);
    enEjecucion = false;
    tiempoRestante = duracionInicial;
    btnIniciar.textContent = "Iniciar";
    actualizarPantalla();
});

function finalizarTemporizador() {
    clearInterval(intervalo);
    enEjecucion = false;
    btnIniciar.textContent = "Iniciar";

    // Vibración (móvil)
    if (navigator.vibrate) {
        navigator.vibrate(300);
    }

    alert("¡Entrenamiento terminado!");
}

// Inicial
actualizarPantalla();
