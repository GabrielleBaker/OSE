function add_numbers(){
    
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    var output;
    var output_string;
    if (isNaN(num1)  && isNaN(num2))
    {
        output_string = "Please input a valid number";
     }
     else{
        output = Number(num1) + Number(num2);
        output_string = "The sum of " + num1 + " and " + num2 + " is " + output;
     }
    // Fetch num1 from input box here
    // Fetch num2 from input box here

    
    // Set output label text to output_string here
    document.getElementById("sum").innerHTML= output_string;
}