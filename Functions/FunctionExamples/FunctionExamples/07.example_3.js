// 07.example_3 JavasScript code
// - The function calculateTax is defined in this JavaScript file.
// - The functions fahrenheitToCelsius and getCurrentDate are defined in another external file.

// Definition of the function calculateTax
function calculateTax(price, taxPercentage) {
    
    var tax = price * (taxPercentage / 100);
    return tax;
}

// (1) Making a call to the function calculateTax.
var tax = calculateTax(180.00, 24.00);

var outputText = "The tax is " + tax.toFixed(2) + " euros";
document.getElementById("pOutputTax").innerHTML = outputText;

// (2) Converting Fahrenheit degrees to Celsius degrees
var celsiusDegrees = fahrenheitToCelsius(100);

outputText = "100 degrees of Fahrenheit is equal to " + celsiusDegrees.toFixed(0) + " degrees of Celsius";
document.getElementById("pOutputTemperature").innerHTML = outputText;

// (3) Retrieving the current time from the system
document.getElementById("pCurrentTime").innerHTML = "Current time is " + getCurrentTime();