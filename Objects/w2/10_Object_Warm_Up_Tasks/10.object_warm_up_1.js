// 10.object_warm_up_1.js JavasScript code
// Initially, this program shows the name of a country.
// Modify the program so that it shows also the population of the country.

//var country = {name: "Finland", population: 5501043};
//var outputText = country.population;
//document.getElementById("pOutput").innerHTML = outputText;
// End

//week 2 objects
function Country(name, population){
    this.cname = name;
    this.cpop= population;

    this.toString = function(){
        return "Country name: " + this.cname + " , population: "
        + this.cpop;
    }
}
var country1 = new Country("Finland", 5501043);
document.getElementById("pOutput").innerHTML = country1.cpop.toString();
//further learning
//var country2 = new Country("South-Africa", 55000000);

//console.log (country1.toString());

//console.log(country2.toString());

//function popDiff(countrya, countryb){
 //  var diff = country1.cpop - country2.cpop;
 //  return diff;
//}
//var showdiff = popDiff(country1, country2);
//console.log(showdiff);