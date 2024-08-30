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

    // Obter os valores de conversão das unidades selecionadas
    let fromUnitValue = parseFloat(fromSelect.value);
    let toUnitValue = parseFloat(toSelect.value);

    // Calcular o valor convertido
    let result = inputValue * fromUnitValue * toUnitValue;

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