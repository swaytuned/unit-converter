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
    lengthResult.textContent = `${baseValue} meters = ${parseFloat(baseValue * meterToFeet).toFixed(3)} feet`
    console.log("clicked chimp")
});

//math to convert to volume
//math to convert to mass



//1 meter = 3.281 feet
//1 liter = 0.264 gallon
//1 kilogram = 2.204 pound