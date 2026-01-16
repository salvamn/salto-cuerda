const calendar = document.getElementById("calendar");
const monthYearDisplay = document.getElementById("monthYear");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");

let currentDate = new Date();

const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

// 🔹 CREAR MODAL DE REPORTE DEL DÍA
function createDayReportModal(dateKey, currentStatus, dayDate) {
    const modal = document.createElement("div");
    modal.id = "dayReportModal";
    modal.className = "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";

    const [year, month, day] = dateKey.split("-");
    const formattedDate = new Date(year, month - 1, day);
    const dayName = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"][formattedDate.getDay()];

    const container = document.createElement("div");
    container.className = "bg-white rounded-lg shadow-xl p-4 max-w-xs w-full mx-4";

    container.innerHTML = `
        <h2 class="text-lg font-bold text-gray-900 mb-1">
            ${dayName} ${day} de ${months[month - 1]}
        </h2>
        <p class="text-gray-500 text-xs mb-4">${dateKey}</p>
        
        <div class="space-y-2 mb-4">
            <button id="btnTrained" class="w-full p-2 rounded-lg border-2 text-sm transition-all hover:shadow-lg ${currentStatus === "entrenó"
            ? "bg-green-100 border-green-400 text-green-800"
            : "bg-gray-50 border-gray-200 text-gray-700 hover:border-green-300"
        }">
                <div class="font-bold">✓ Entrenaste</div>
            </button>
            
            <button id="btnNotTrained" class="w-full p-2 rounded-lg border-2 text-sm transition-all hover:shadow-lg ${currentStatus === "no_entrenó"
            ? "bg-red-100 border-red-400 text-red-800"
            : "bg-gray-50 border-gray-200 text-gray-700 hover:border-red-300"
        }">
                <div class="font-bold">✗ No entrenaste</div>
            </button>

            <button id="btnTraining" class="w-full p-2 rounded-lg border-2 border-orange-400 bg-orange-50 text-orange-700 text-sm font-bold transition-all hover:shadow-lg hover:bg-orange-100">
                🏃 A Entrenar
            </button>
            
            ${currentStatus ? `
            <button id="btnClear" class="w-full p-2 rounded-lg border-2 border-gray-300 bg-gray-50 text-gray-700 text-sm transition-all hover:shadow-lg hover:border-gray-400">
                ↻ Limpiar
            </button>
            ` : ''}
        </div>
        
        <button id="btnClose" class="w-full p-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-semibold transition">
            Cerrar
        </button>
    `;

    modal.appendChild(container);

    // Event Listeners
    container.querySelector("#btnTrained").addEventListener("click", () => {
        updateDayStatus(dateKey, "entrenó");
    });

    container.querySelector("#btnNotTrained").addEventListener("click", () => {
        updateDayStatus(dateKey, "no_entrenó");
    });

    container.querySelector("#btnTraining").addEventListener("click", () => {
        startTraining(dateKey);
    });

    const btnClear = container.querySelector("#btnClear");
    if (btnClear) {
        btnClear.addEventListener("click", () => {
            updateDayStatus(dateKey, null);
        });
    }

    container.querySelector("#btnClose").addEventListener("click", () => {
        closeDayReportModal();
    });

    // Cerrar al hacer click fuera del modal
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeDayReportModal();
    });

    document.body.appendChild(modal);
}

function updateDayStatus(dateKey, status) {
    if (status) {
        localStorage.setItem(`training_${dateKey}`, status);
    } else {
        localStorage.removeItem(`training_${dateKey}`);
    }
    closeDayReportModal();
    renderCalendar();
}

function closeDayReportModal() {
    const modal = document.getElementById("dayReportModal");
    if (modal) modal.remove();
}

function startTraining(dateKey) {
    localStorage.setItem("selectedTrainingDate", dateKey);
    closeDayReportModal();
    // Redirigir a la página de entrenamiento
    window.location.href = "./modules/cuerda/contadorSaltos.html";
}

// 🔹 APLICAR LÓGICA DE DÍAS PASADOS SIN ENTRENAMIENTO
function applyPastDaysLogic() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Buscar todos los días guardados
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("training_")) {
            const dateKey = key.replace("training_", "");
            const [year, month, day] = dateKey.split("-");
            const dayDate = new Date(year, month - 1, day);
            dayDate.setHours(0, 0, 0, 0);

            // Si es un día pasado sin estado registrado, marcar como "no_entrenó"
            if (dayDate < today && !localStorage.getItem(key)) {
                localStorage.setItem(`training_${dateKey}`, "no_entrenó");
            }
        }
    }

    // Para días pasados actuales en el calendario sin registro, marcar como "no_entrenó"
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
        const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        const dayDate = new Date(year, month, day);
        dayDate.setHours(0, 0, 0, 0);

        if (dayDate < today && !localStorage.getItem(`training_${dateKey}`)) {
            localStorage.setItem(`training_${dateKey}`, "no_entrenó");
        }
    }
}

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    monthYearDisplay.textContent = `${months[month]} ${year}`;
    calendar.innerHTML = "";

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;

    // 🔹 DÍAS MES ANTERIOR
    for (let i = adjustedFirstDay - 1; i >= 0; i--) {
        const day = daysInPrevMonth - i;
        calendar.appendChild(createDayElement(day, false, true));
    }

    // 🔹 DÍAS MES ACTUAL
    for (let day = 1; day <= daysInMonth; day++) {
        calendar.appendChild(createDayElement(day, true, false, year, month));
    }

    // 🔹 DÍAS MES SIGUIENTE
    const remainingCells = 42 - calendar.children.length;
    for (let day = 1; day <= remainingCells; day++) {
        calendar.appendChild(createDayElement(day, false, true));
    }

    // Aplicar lógica de días pasados
    applyPastDaysLogic();
}

function createDayElement(day, isCurrentMonth, isOtherMonth = false, year = null, month = null) {
    const dayDiv = document.createElement("div");
    dayDiv.className =
        "aspect-square flex items-center justify-center rounded-lg font-semibold text-sm md:text-base transition-all relative";

    if (isOtherMonth || !isCurrentMonth) {
        dayDiv.className += " bg-gray-200 text-gray-500";
        dayDiv.textContent = day;
        return dayDiv;
    }

    dayDiv.textContent = day;

    const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const trainingStatus = localStorage.getItem(`training_${dateKey}`);

    const dayDate = new Date(year, month, day);
    dayDate.setHours(0, 0, 0, 0);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const isPastDay = dayDate < today;
    const isToday = dayDate.getTime() === today.getTime();
    const isFutureDay = dayDate > today;

    // 🎨 ESTILOS SEGÚN ESTADO
    if (trainingStatus === "entrenó") {
        dayDiv.className += " bg-green-100 text-green-800 border-2 border-green-300";
    } else if (trainingStatus === "no_entrenó") {
        dayDiv.className += " bg-red-100 text-red-800 border-2 border-red-300";
    } else {
        dayDiv.className += " bg-gray-100 text-gray-700 border-2 border-gray-300";
    }

    // 🧠 COMPORTAMIENTO SEGÚN FECHA
    if (isFutureDay) {
        dayDiv.className += " opacity-40 cursor-not-allowed";
        return dayDiv;
    }

    if (isPastDay || isToday) {
        dayDiv.className += " cursor-pointer hover:scale-105 hover:shadow-lg";
        dayDiv.onclick = () => {
            createDayReportModal(dateKey, trainingStatus, dayDate);
        };
        return dayDiv;
    }

    return dayDiv;
}

// 🔁 NAVEGACIÓN DE MESES
prevMonthBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonthBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// 🚀 INIT
applyPastDaysLogic();
renderCalendar();
