let convertButton = document.getElementById("convert-button");
let inputBox = document.getElementById("input-box");
let lengthResult = document.getElementById("length-result");
let volumeResult = document.getElementById("volume-result");
let massResult = document.getElementById("mass-result");

const meterToFeet = 3.281;
const feetToMeter = 0.3048;
const literToGallon = 0.264;
const gallonToLiter= 3.7854;
const kiloToPound = 2.204;
const poundToKilo = 0.4535924;

// converts input form text box
convertButton.addEventListener("click", function(){
    let baseValue = inputBox.value 

    //math to convert to length
    lengthResult.textContent = `
    ${baseValue} Meters = ${parseFloat(baseValue * meterToFeet).toFixed(3)} Feet /
    ${baseValue} Feet = ${parseFloat(baseValue * feetToMeter).toFixed(3)} Meters
    `;
    //math to convert to volume
    volumeResult.textContent = `
    ${baseValue} Liters = ${parseFloat(baseValue * literToGallon).toFixed(3)} Gallons /
    ${baseValue} Gallons = ${parseFloat(baseValue * gallonToLiter).toFixed(3)} Liters
    `;

    //math to convert to mass
    massResult.textContent = `
    ${baseValue} Kilo = ${parseFloat(baseValue * kiloToPound).toFixed(3)} Pounds /
    ${baseValue} Pounds = ${parseFloat(baseValue * poundToKilo).toFixed(3)} Kilos
    `;
    console.log("clicked chimp")
});






//1 meter = 3.281 feet
//1 liter = 0.264 gallon
//1 kilogram = 2.204 pound