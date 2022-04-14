// 10.object_more_tasks_1.js JavasScript code
// Initially, this program shows the name and population of a country.<br />
// Modify the program so that it shows also the name of the country in Finnish.<br />
// NB! Add a new property to the object constructor for this purpose.<br /><br />

function Country(countryName, countryPopulation, finnishname) {
    this.name = countryName;
    this.population = countryPopulation; 
    this.fname =   finnishname;
}

var myCountry = new Country("Finland", 5501043,"Suomi");

var outputText = myCountry.name + " / " + myCountry.fname + ", population is " + myCountry.population;

document.getElementById("pOutput").innerHTML = outputText;

// End
