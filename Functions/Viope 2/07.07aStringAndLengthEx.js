function processName() {
var name = document.getElementById("name").value;
    // read value of name from the input field
 var bigName = name.toUpperCase(); 
 var smallName = name.toLowerCase();
 var lengthName = name.length;

 document.getElementById("upperCase").innerHTML = "With upper case letters: " + bigName;
 document.getElementById("lowerCase").innerHTML = "With lower case letters: " + smallName;
 document.getElementById("length").innerHTML = "Character count: " + lengthName;

}