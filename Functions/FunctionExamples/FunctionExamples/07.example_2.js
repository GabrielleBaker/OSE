// 07.example_2 JavasScript code

// Definition of the function showFahrenheit
function showFahrenheit() {
    
    var temperatureText = document.getElementById("txtTemperature").value;
    var temperature = Number(temperatureText);
    
    var fahrenheitDegrees = celsiusToFahrenheit(temperature);
    
    var outputText = temperature.toFixed(0) + " degrees of Celsius is equal to " +
        fahrenheitDegrees.toFixed(0) + " degrees of Fahrenheit";
    
    document.getElementById("pOutput").innerHTML = outputText;
}

// Definition of the function celsiusToFahrenheit
function celsiusToFahrenheit(celsius) {
    
    var fahrenheit = (celsius * 9) / 5 + 32;
    
    return fahrenheit;
}

// Definition of the function fahrenheitToCelsius
// It is also possible to include the arithmetic expression in the return statement
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}