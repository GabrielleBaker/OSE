function add_numbers(){
    var num1 = Number(document.getElementById("number1").value);
    var num2 = Number(document.getElementById("number2").value);
    // Fetch num1 from input box here
    // Fetch num2 from input box here

    var output = num1+num2;

    var output_string;
    output_string = "The sum of " + num1 + " and " + num2 + " is " + output;
    // Set output label text to output_string here
    document.getElementById("sum").innerHTML= output_string;
}