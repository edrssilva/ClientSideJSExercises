const fromInput = document.getElementById("calcFromInput");
const toInput = document.getElementById("calcToInput");
const fromSelect = document.getElementById("calcFromSelect");
const toSelect = document.getElementById("calcToSelect");

function calculateResult() {
    // Obter o valor de entrada
    let inputValue = parseFloat(fromInput.value);
    if (isNaN(inputValue)) {
        toInput.value = ""; // Se o valor de entrada não for um número, limpar o campo de saída
        return;
    }

    // Obter as unidades selecionadas
    let fromUnit = fromSelect.options[fromSelect.selectedIndex].text;
    let toUnit = toSelect.options[toSelect.selectedIndex].text;

    let result;

    // Verificar se a conversão é de temperatura
    if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
        result = (inputValue * 9/5) + 32;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
        result = (inputValue - 32) * 5/9;
    } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
        result = inputValue + 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
        result = inputValue - 273.15;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
        result = (inputValue - 32) * 5/9 + 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
        result = (inputValue - 273.15) * 9/5 + 32;
    } else {
        // Outras conversões (não de temperatura)
        let fromUnitValue = parseFloat(fromSelect.value);
        let toUnitValue = parseFloat(toSelect.value);
        result = inputValue * fromUnitValue * toUnitValue;
    }

    // Atualizar o campo de saída
    updateResult(result);
}

function updateResult(value) {
    toInput.value = value;
}

// Adicionar o ouvinte de evento para recalcular sempre que o valor de entrada ou as seleções mudarem
fromInput.addEventListener("input", calculateResult);
fromSelect.addEventListener("change", calculateResult);
toSelect.addEventListener("change", calculateResult);
