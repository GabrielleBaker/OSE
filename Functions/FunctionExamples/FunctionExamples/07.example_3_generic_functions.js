// 07.example_3_generic_functions JavasScript code
// The functions below are independent of any particular web page. 
// That is, they are fully reusable :-)

// Converts given Celsius degrees to Fahrenheit degrees
function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

// Converts given Fahrenheit degrees to celsius degrees
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Returns current time as 'hh:mm'
function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    
    return ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2);
}