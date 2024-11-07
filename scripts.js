document.addEventListener("DOMContentLoaded", () => {
    function updateGate(inputIds, outputId, logicFunction) {
        const inputs = inputIds.map(id => document.getElementById(id).checked);
        const outputElement = document.getElementById(outputId);

        const result = logicFunction(...inputs);
        outputElement.classList.toggle("led-green", result === 1);
    }

    function andGate(a, b) {
        return a && b ? 1 : 0;
    }

    function orGate(a, b) {
        return a || b ? 1 : 0;
    }

    function notGate(a) {
        return !a ? 1 : 0;
    }

    function nandGate(a, b) {
        return !(a && b) ? 1 : 0;
    }

    function norGate(a, b) {
        return !(a || b) ? 1 : 0;
    }

    function xorGate(a, b) {
        return a !== b ? 1 : 0;
    }

    function xnorGate(a, b) {
        return a === b ? 1 : 0;
    }

    const gates = [
        { inputs: ["andA", "andB"], output: "andSalida", logic: andGate },
        { inputs: ["orA", "orB"], output: "orSalida", logic: orGate },
        { inputs: ["notEntrada"], output: "notSalida", logic: notGate },
        { inputs: ["nandA", "nandB"], output: "nandSalida", logic: nandGate },
        { inputs: ["norA", "norB"], output: "norSalida", logic: norGate },
        { inputs: ["xorA", "xorB"], output: "xorSalida", logic: xorGate },
        { inputs: ["xnorA", "xnorB"], output: "xnorSalida", logic: xnorGate },
    ];

    gates.forEach(gate => {
        gate.inputs.forEach(inputId => {
            document.getElementById(inputId).addEventListener("change", () => {
                updateGate(gate.inputs, gate.output, gate.logic);
            });
        });
    });
});
