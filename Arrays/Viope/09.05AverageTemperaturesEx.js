// Create an array of twelve average temperatures
var temperatures = [-3.3, -4.7, -1.3, 3.9, 10.2, 14.6, 17.8,
				16.3, 11.5, 6.6, 1.6, -2.0];
var counter = 0;
function loopTemperatures() {
    // For loop
    for( i = 0; i < temperatures.length; i++){
        counter = counter +1;
        console.log(counter + "." + temperatures[i].toFixed(1));
    }
  
}