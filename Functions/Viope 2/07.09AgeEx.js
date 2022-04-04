function tellAge() {
    // Read value of yearOfBirth from the input field 
   var yob = document.getElementById("yearOfBirth").value;

    // Figure out the current date into today variable 
    var today = new Date();
    // Use getFullYear() method to get the current year out from the today variable
   var year = today.getFullYear();

    // Calculate the (rough estimate of the) age
    var age = year - yob;
    var output;
    if(age < 0){
        output = "Please enter an accurate date of birth.<br>"
    }
    else{
        output = "You are now " + age + " years old. <br>"
    }
    document.getElementById("answer").innerHTML = output + "(Current year is " + year + ".)";
    
}