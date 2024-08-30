const fromInput = document.getElementById("calcFromInput");
const toInput = document.getElementById("calcToInput");


function getConversionType() {
    const tabId = conversionType.target.id;
    return tabId;
}

function calculateResult(value, conversionType){

}

function updateResult(value){
    toInput.value = value;
}

fromInput.addEventListener("input", () => {
    let result;
    
    
    getConversionType();
    
    updateResult(result);
});