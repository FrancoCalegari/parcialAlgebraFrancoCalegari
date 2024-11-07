document.addEventListener("DOMContentLoaded", () => {
    // Funciones para los circuitos lógicos

    // Función para un sumador (XOR + AND)
    function sumador(a, b) {
        const andResult = a && b ? 1 : 0;
        const xorResult = a !== b ? 1 : 0;
        return { andResult, xorResult };
    }

    // Función para un multiplicador (AND + Sumador)
    function multiplicador(a, b) {
        return a && b ? 1 : 0; // Multiplicación simple usando AND
    }

    // Función para Flip-Flop (utiliza NAND o NOR, dependiendo del diseño)
    function flipFlop(a, b) {
        const nandResult = !(a && b) ? 1 : 0;
        return nandResult;
    }

    // Funciones que actualizan los LEDs de los circuitos
    function updateSumador() {
        const a = document.getElementById("sumadorA").checked;
        const b = document.getElementById("sumadorB").checked;
        const result = sumador(a, b);
        document.getElementById("sumadorSalida").classList.toggle("led-green", result.xorResult === 1);
    }

    function updateMultiplicador() {
        const a = document.getElementById("multiplicadorA").checked;
        const b = document.getElementById("multiplicadorB").checked;
        const result = multiplicador(a, b);
        document.getElementById("multiplicadorSalida").classList.toggle("led-green", result === 1);
    }

    function updateFlipFlop() {
        const a = document.getElementById("flipFlopA").checked;
        const b = document.getElementById("flipFlopB").checked;
        const result = flipFlop(a, b);
        document.getElementById("flipFlopSalida").classList.toggle("led-green", result === 1);
    }

    // Agregar listeners para cada interruptor en los circuitos
    document.getElementById("sumadorA").addEventListener("change", updateSumador);
    document.getElementById("sumadorB").addEventListener("change", updateSumador);
    document.getElementById("multiplicadorA").addEventListener("change", updateMultiplicador);
    document.getElementById("multiplicadorB").addEventListener("change", updateMultiplicador);
    document.getElementById("flipFlopA").addEventListener("change", updateFlipFlop);
    document.getElementById("flipFlopB").addEventListener("change", updateFlipFlop);
});
