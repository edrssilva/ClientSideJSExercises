let lengthArray = new Array();
lengthArray[0] = new Array("Length", "lengthArray");
lengthArray[1] = new Array("Meter", 1, 1);
lengthArray[2] = new Array("Kilometer", 1*1000, 1/1000);
lengthArray[3] = new Array("Centimeter", 1*0.01, 1/0.01);
lengthArray[4] = new Array("Inch", 1*0.0254, 1/0.0254);
lengthArray[5] = new Array("Mile", 1*1609.35, 1/1609.35);
lengthArray[6] = new Array("Foot", 1*0.3048, 1/0.3048);

let temperatureArray = new Array();
temperatureArray[0] = new Array("Temperature", "temperatureArray");
temperatureArray[1] = new Array("Celsius", 1, 1);
temperatureArray[2] = new Array("Kelvin", 1-273.15, 1+273.15);
temperatureArray[3] = new Array("Fahrenheit", 5/9 * (1 - 32), 9/5 * 1 + 32);

let massArray = new Array();
massArray[0] = new Array("Mass", "massArray");
massArray[1] = new Array("Kilogram", 1, 1);
massArray[2] = new Array("Gram", 1*0.001, 1/0.001);
massArray[3] = new Array("Milligram", 1*0.000001, 1/0.000001);
massArray[4] = new Array("Pound", 1*0.453592, 1/0.453592);
massArray[5] = new Array("Ounce", 1*0.0283495, 1/0.0283495);

let volumeArray = new Array();
volumeArray[0] = new Array("Volume", "volumeArray");
volumeArray[1] = new Array("Cubic Meter", 1, 1);
volumeArray[2] = new Array("Liter", 1*0.001, 1/0.001);
volumeArray[3] = new Array("Milliliter", 1*0.000001, 1/0.000001);
volumeArray[4] = new Array("Cubic Centimeter", 1*0.000001, 1/0.000001);
volumeArray[5] = new Array("Cubic Inch", 1*0.0000163871, 1/0.0000163871);

let speedArray = new Array();
speedArray[0] = new Array("Speed", "speedArray");
speedArray[1] = new Array("Meter per Second", 1, 1);
speedArray[2] = new Array("Kilometer per Hour", 1*0.277778, 1/0.277778);
speedArray[3] = new Array("Mile per Hour", 1*0.44704, 1/0.44704);
speedArray[4] = new Array("Foot per Second", 1*0.3048, 1/0.3048);
speedArray[5] = new Array("Knot", 1*0.514444, 1/0.514444);

let timeArray = new Array();
timeArray[0] = new Array("Time", "timeArray");
timeArray[1] = new Array("Second", 1, 1);
timeArray[2] = new Array("Minute", 1*60, 1/60);
timeArray[3] = new Array("Hour", 1*3600, 1/3600);
timeArray[4] = new Array("Day", 1*86400, 1/86400);
timeArray[5] = new Array("Week", 1*604800, 1/604800);
timeArray[6] = new Array("Year", 1*31536000, 1/31536000);

function populateSelects(tabArray) {
    const fromSelect = document.getElementById("calcFromSelect");
    const toSelect = document.getElementById("calcToSelect");

    fromSelect.innerHTML = "";
    toSelect.innerHTML = "";

    for (let i = 1; i < tabArray.length; i++) {
        let optionFrom = document.createElement("option");
        let optionTo = document.createElement("option");
        optionFrom.value = tabArray[i][1];
        optionFrom.text = tabArray[i][0];
        optionTo.value = tabArray[i][2];
        optionTo.text = tabArray[i][0];
        fromSelect.appendChild(optionFrom);
        toSelect.appendChild(optionTo);
    }
}

function handleTabClick(event) {
    const tabId = event.target.id;

    if (tabId === "length"){
        populateSelects(lengthArray);
    } else if (tabId === "temperature") {
        populateSelects(temperatureArray);
    } else if (tabId === "mass") {
        populateSelects(massArray);
    } else if (tabId === "volume") {
        populateSelects(volumeArray);
    } else if (tabId === "time") {
        populateSelects(timeArray);
    } else if (tabId === "speed") {
        populateSelects(speedArray);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    populateSelects(lengthArray);
    document.getElementById("calcToInput").inert = true;
});