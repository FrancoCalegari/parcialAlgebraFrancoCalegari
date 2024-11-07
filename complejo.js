document.addEventListener("DOMContentLoaded", () => {
    // Función para el circuito lógico complejo
    function circuitoComplejo(a, b, c) {
        // Ejemplo de circuito complejo usando AND, OR, y NOT
        const andResult = a && b;
        const orResult = andResult || c;
        const notResult = !orResult;
        return notResult ? 1 : 0;
    }

    // Función para actualizar el LED del circuito complejo
    function updateCircuitoComplejo() {
        const a = document.getElementById("complejoA").checked;
        const b = document.getElementById("complejoB").checked;
        const c = document.getElementById("complejoC").checked;
        const result = circuitoComplejo(a, b, c);
        document.getElementById("complejoSalida").classList.toggle("led-green", result === 1);
        updateTablaVerdad();
    }

    // Función para actualizar la tabla de verdad
    function updateTablaVerdad() {
        const tbody = document.querySelector("#tablaVerdad tbody");
        tbody.innerHTML = ""; // Limpiar la tabla
        const inputs = [document.getElementById("complejoA"), document.getElementById("complejoB"), document.getElementById("complejoC")];
        
        for (let i = 0; i < 8; i++) {
            const a = !!(i & 1);
            const b = !!(i & 2);
            const c = !!(i & 4);
            const result = circuitoComplejo(a, b, c);
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${a ? 1 : 0}</td>
                <td>${b ? 1 : 0}</td>
                <td>${c ? 1 : 0}</td>
                <td>${result}</td>
            `;
            tbody.appendChild(row);
        }
    }

    // Agregar listeners para los interruptores del circuito complejo
    document.getElementById("complejoA").addEventListener("change", updateCircuitoComplejo);
    document.getElementById("complejoB").addEventListener("change", updateCircuitoComplejo);
    document.getElementById("complejoC").addEventListener("change", updateCircuitoComplejo);

    // Inicializar la tabla de verdad
    updateTablaVerdad();
});
